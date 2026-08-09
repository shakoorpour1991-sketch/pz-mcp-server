require "BeyondTen/Shared"

BeyondTenSkillRecoveryJournal = BeyondTenSkillRecoveryJournal or {}

local Adapter = BeyondTenSkillRecoveryJournal
local BT = BeyondTen

Adapter.VERSION = 1
Adapter.JMD_KEY = "BeyondTenXP"
Adapter.STORE_KEY = "BeyondTen_SRJ_v1"
Adapter.PLAYER_LEDGER_KEY = "BeyondTenSRJRead_v1"
Adapter.MAX_PERKS = 256
Adapter.MAX_JOURNALS = Adapter.MAX_JOURNALS or 4096
Adapter.MAX_READERS = Adapter.MAX_READERS or 2048
Adapter.MAX_ID_LENGTH = 128
Adapter.MAX_TOKEN_LENGTH = 96
Adapter.MAX_XP_VALUE = 1000000000

Adapter._hooks = Adapter._hooks or {}
Adapter._eventHandlers = Adapter._eventHandlers or {}
Adapter._boundEvents = Adapter._boundEvents or {}
-- Runtime-only physical identity. It is intentionally not persisted: the
-- authoritative snapshot remains in GlobalModData, while this map lets a
-- live journal repair a lost client-visible header without confusing another
-- physical item that happens to share its random InventoryItem ID.
Adapter._runtimeJournalItems = Adapter._runtimeJournalItems or {}

local function isMultiplayerClient()
    return type(isClient) == "function" and isClient()
end

local function isMultiplayerServer()
    return type(isServer) == "function" and isServer()
end

local function isAuthority()
    return not isMultiplayerClient()
end

local function safeCall(object, method, fallback)
    if not object then return fallback end
    local fn = object[method]
    if type(fn) ~= "function" then return fallback end
    local ok, value = pcall(fn, object)
    if not ok or value == nil then return fallback end
    return value
end

local function isDead(player)
    return not player or safeCall(player, "isDead", false) == true
end

local function shallowCopy(values)
    local result = {}
    for id, value in pairs(values or {}) do result[id] = value end
    return result
end

local function hasAny(values)
    for _key in pairs(values or {}) do return true end
    return false
end

local function identityToken(value)
    value = tostring(value or "")
    local first = 5381
    local second = 52711
    for index = 1, #value do
        local byte = string.byte(value, index)
        first = (first * 33 + byte) % 4294967291
        second = (second * 65599 + byte) % 4294967291
    end
    return tostring(math.floor(first)) .. "-" .. tostring(math.floor(second))
end

local function getItemID(item)
    local value = safeCall(item, "getID", nil)
    if value == nil then return nil end
    value = tostring(value)
    if value == "" or #value > Adapter.MAX_ID_LENGTH then return nil end
    return value
end

local function isJournal(item)
    return tostring(safeCall(item, "getType", "")) == "SkillRecoveryBoundJournal"
end

local function getPlayerStoreKey(player)
    local username = tostring(safeCall(player, "getUsername", "") or "")
    if #username > Adapter.MAX_ID_LENGTH then
        username = string.sub(username, 1, Adapter.MAX_ID_LENGTH)
    end

    local steamValue = safeCall(player, "getSteamID", 0)
    local steamID = tostring(steamValue or 0)
    -- Never pass Steam64 through tonumber: adjacent IDs exceed Lua's exact
    -- integer range. Username is retained as a collision-resistant secondary
    -- authenticated field for runtimes that already exposed a rounded Double.
    local principal = steamID ~= "0"
        and ("steam:" .. steamID .. "|user:" .. username)
        or ("user:" .. username)
    local slot = tonumber(safeCall(player, "getIndex", nil))
    if slot == nil then slot = tonumber(safeCall(player, "getPlayerNum", -1)) or -1 end
    return identityToken(principal .. "|slot:" .. tostring(math.floor(slot)))
end

local function getLifeAge(player)
    local age = tonumber(safeCall(player, "getHoursSurvived", 0)) or 0
    if not BT.IsFinite(age) or age < 0 then return 0 end
    return age
end

local function getStoreRoot()
    if not ModData or type(ModData.getOrCreate) ~= "function" then return nil end
    local root = ModData.getOrCreate(Adapter.STORE_KEY)
    root.version = Adapter.VERSION
    root.sequence = math.max(0, math.floor(tonumber(root.sequence) or 0))
    if type(root.journals) ~= "table" then root.journals = {} end
    if type(root.items) ~= "table" then root.items = {} end
    if type(root.readers) ~= "table" then root.readers = {} end
    if type(root.lives) ~= "table" then root.lives = {} end
    if type(root.secret) ~= "string" or root.secret == "" then
        local clock = type(getTimestampMs) == "function" and tostring(getTimestampMs()) or "0"
        local random = type(ZombRand) == "function" and tostring(ZombRand(1000000000)) or "0"
        root.secret = identityToken(clock .. "|" .. random .. "|" .. tostring(root.sequence))
    end
    return root
end

local function nextSequence(root)
    root.sequence = math.max(0, math.floor(tonumber(root.sequence) or 0)) + 1
    return root.sequence
end

local function touchRecord(root, record)
    if root and record then record.touched = nextSequence(root) end
end

local function countRecords(records)
    local count = 0
    for _key in pairs(records or {}) do count = count + 1 end
    return count
end

local function getJournalModData(SRJ, item)
    if not SRJ or not SRJ.modDataHandler or not item then return nil end
    local getter = SRJ.modDataHandler.getItemModData
    if type(getter) ~= "function" then return nil end
    local ok, value = pcall(getter, item)
    if not ok or type(value) ~= "table" then return nil end
    return value
end

function Adapter.SanitizeSnapshot(values)
    local result = {}
    if type(values) ~= "table" then return result end

    local count = 0
    -- Loaded/trainable perks take priority so orphan custom IDs can never
    -- crowd active skills out of the bounded record.
    for id, rawValue in pairs(values) do
        local value = tonumber(rawValue)
        local validID = type(id) == "string" and id ~= "" and #id <= Adapter.MAX_ID_LENGTH
        if count < Adapter.MAX_PERKS and validID and BT.IsFinite(value) and value >= 0 then
            local perk = BT.ResolvePerk(id)
            if perk and BT.IsTrainablePerk(perk) then
                result[id] = BT.Clamp(value, 0, Adapter.MAX_XP_VALUE)
                count = count + 1
            end
        end
    end
    for id, rawValue in pairs(values) do
        local value = tonumber(rawValue)
        local validID = type(id) == "string" and id ~= "" and #id <= Adapter.MAX_ID_LENGTH
        if count < Adapter.MAX_PERKS and result[id] == nil and validID
            and BT.IsFinite(value) and value >= 0 and not BT.ResolvePerk(id) then
            -- Unknown custom perks are retained across load-order changes.
            -- They remain inert until their owning mod registers them again.
            result[id] = BT.Clamp(value, 0, Adapter.MAX_XP_VALUE)
            count = count + 1
        end
    end
    return result
end

local function getRecoveryFraction(SRJ, perk)
    if not SRJ or type(SRJ.bSkillValid) ~= "function" then return 1 end
    local ok, enabled, fraction = pcall(SRJ.bSkillValid, perk)
    if not ok or not enabled then return 0 end
    fraction = tonumber(fraction) or 1
    if not BT.IsFinite(fraction) then return 0 end
    return BT.Clamp(fraction, 0, 1)
end

function Adapter.BuildRecoverableSnapshot(player, SRJ)
    local exported = BT.ExportXP(player)
    local result = {}
    local count = 0

    for id, rawValue in pairs(exported or {}) do
        local perk = type(id) == "string" and BT.ResolvePerk(id) or nil
        local value = tonumber(rawValue)
        if count < Adapter.MAX_PERKS and perk and BT.IsTrainablePerk(perk)
            and type(id) == "string" and #id <= Adapter.MAX_ID_LENGTH
            and BT.IsFinite(value) and value > 0 then
            local fraction = getRecoveryFraction(SRJ, perk)
            local normalized = SRJ and SRJ.xpHandler and type(SRJ.xpHandler.getSkillXPNormalizeScale) == "function"
                and tonumber(SRJ.xpHandler.getSkillXPNormalizeScale(id)) or 1
            if not normalized or not BT.IsFinite(normalized) or normalized < 0 then normalized = 1 end
            local unboosted = value
            if SRJ and SRJ.xpHandler and type(SRJ.xpHandler.unBoostXP) == "function" then
                local ok, converted = pcall(SRJ.xpHandler.unBoostXP, player, perk, value)
                if ok and tonumber(converted) and BT.IsFinite(tonumber(converted)) then
                    unboosted = tonumber(converted)
                end
            end
            local allowed = BT.Clamp(unboosted * fraction * normalized, 0, Adapter.MAX_XP_VALUE)
            if allowed > 0 then
                result[id] = allowed
                count = count + 1
            end
        end
    end
    return result
end

function Adapter.HasMasteryWriteWork(player, item, SRJ)
    if isDead(player) or not isJournal(item) then return false end
    local target = Adapter.BuildRecoverableSnapshot(player, SRJ)
    if not hasAny(target) then return false end

    -- Single-player journals expose their snapshot, so avoid hiding SRJ's
    -- normal "nothing to transcribe" feedback when this exact journal is
    -- already current. Multiplayer deliberately exposes only a signed
    -- summary; in that case the authoritative PrepareAction performs the
    -- final work check on the server.
    local JMD = getJournalModData(SRJ, item)
    local data = type(JMD) == "table" and JMD[Adapter.JMD_KEY] or nil
    local stored = type(data) == "table" and data.perks or nil
    if type(stored) == "table" then
        for id, allowed in pairs(target) do
            if allowed > (tonumber(stored[id]) or 0) then return true end
        end
        return false
    end
    return true
end

function Adapter.CallActionNew(SRJ, original, self, character, item, doReading, writingTool, ...)
    local calculateAll = SRJ and SRJ.calculateAllGainedSkills
    local masteryWork = doReading ~= true and type(calculateAll) == "function"
        and Adapter.HasMasteryWriteWork(character, item, SRJ)
    if not masteryWork then
        return original(self, character, item, doReading, writingTool, ...)
    end

    -- SRJ decides whether to show its no-XP message inside Action:new, before
    -- our post-constructor mastery state can set willWrite. An empty table is
    -- intentionally truthy but contributes no native XP, allowing mastery-only
    -- authors through that UI gate without mixing mastery into gainedXP.
    local shim
    shim = function(player, ...)
        local gained, flatGained = calculateAll(player, ...)
        if player == character and not gained and not flatGained then
            return {}, flatGained
        end
        return gained, flatGained
    end

    SRJ.calculateAllGainedSkills = shim
    local ok, action = pcall(original, self, character, item, doReading, writingTool, ...)
    if SRJ.calculateAllGainedSkills == shim then
        SRJ.calculateAllGainedSkills = calculateAll
    end
    if not ok then error(action) end
    return action
end

local function getSummary(snapshot)
    local count = 0
    local total = 0
    for _id, value in pairs(snapshot or {}) do
        count = count + 1
        total = total + (tonumber(value) or 0)
    end
    return count, total
end

local function updateJournalHeader(JMD, token, snapshot, includeValues, usedValues, binding)
    local count, total = getSummary(snapshot)
    local usedCount, usedTotal = getSummary(usedValues)
    local data = type(JMD[Adapter.JMD_KEY]) == "table" and JMD[Adapter.JMD_KEY] or {}
    data.version = Adapter.VERSION
    data.token = token
    data.binding = binding
    data.count = count
    data.total = total
    data.usedCount = usedCount
    data.usedTotal = usedTotal
    data.perks = includeValues and shallowCopy(snapshot) or nil
    data.used = includeValues and shallowCopy(usedValues) or nil
    JMD[Adapter.JMD_KEY] = data
    return data
end

local function getBinding(root, token, itemID)
    return identityToken(tostring(root.secret) .. "|token:" .. tostring(token) .. "|item:" .. tostring(itemID))
end

local function addItemIndex(root, itemID, token)
    local bucket = root.items[itemID]
    if type(bucket) == "string" then bucket = { [bucket] = true } end
    if type(bucket) ~= "table" then bucket = {} end
    bucket[token] = true
    root.items[itemID] = bucket
end

local function recoverHeaderlessRecord(root, item, itemID)
    local bucket = root.items[itemID]
    if type(bucket) == "string" then bucket = { [bucket] = true } end
    if type(bucket) ~= "table" then return nil, nil, false end

    local candidateCount = 0
    local unboundCount = 0
    local onlyToken
    local onlyRecord
    for candidateToken in pairs(bucket) do
        local candidate = root.journals[candidateToken]
        if type(candidate) == "table" and candidate.itemID == itemID then
            candidateCount = candidateCount + 1
            onlyToken = candidateToken
            onlyRecord = candidate
            local liveItem = Adapter._runtimeJournalItems[candidateToken]
            if liveItem == item then
                return candidateToken, candidate, false
            elseif liveItem == nil then
                unboundCount = unboundCount + 1
            end
        end
    end

    -- After a real server restart no runtime identities exist. A single valid
    -- item-ID candidate is unambiguous and can safely restore its signed header.
    if candidateCount == 1 and unboundCount == 1 then
        return onlyToken, onlyRecord, false
    end

    -- At least one unbound candidate in a multi-record bucket cannot be
    -- distinguished from an existing journal whose header was lost. Fail
    -- closed instead of rotating its one-time-use ledger.
    if unboundCount > 0 then return nil, nil, true end

    -- Every candidate is bound to another live object, so this is a recognized
    -- new physical item-ID collision. A write may allocate a separate record.
    return nil, nil, false
end

local function nextJournalToken(root, player, itemID)
    for _attempt = 1, 16 do
        local sequence = nextSequence(root)
        local token = identityToken(getPlayerStoreKey(player) .. "|item:" .. itemID .. "|seq:" .. sequence)
        if not root.journals[token] then return token end
    end
    return nil
end

local function ensureServerRecord(player, item, JMD, create)
    local root = getStoreRoot()
    local itemID = getItemID(item)
    if not root or not itemID then return nil end

    local data = type(JMD[Adapter.JMD_KEY]) == "table" and JMD[Adapter.JMD_KEY] or nil
    local visibleToken = data and type(data.token) == "string"
        and data.token ~= "" and #data.token <= Adapter.MAX_TOKEN_LENGTH and data.token or nil
    local visibleBinding = data and type(data.binding) == "string" and data.binding or nil
    local token = visibleToken
    local record = token and root.journals[token] or nil
    local ambiguousHeaderless = false
    local recoveredHeaderless = false

    if not visibleToken and not visibleBinding then
        token, record, ambiguousHeaderless = recoverHeaderlessRecord(root, item, itemID)
        recoveredHeaderless = type(record) == "table"
        if ambiguousHeaderless then
            if not Adapter._ambiguousHeaderLogged then
                Adapter._ambiguousHeaderLogged = true
                print("[BeyondTen/B42] Skill Recovery Journal mastery header is missing in an ambiguous item-ID bucket; refusing record rotation")
            end
            return nil
        end
    end

    if type(record) == "table" and record.itemID == itemID then
        local expectedBinding = type(record.binding) == "string" and record.binding
            or getBinding(root, token, itemID)
        local liveItem = Adapter._runtimeJournalItems[token]
        if record.binding == nil and visibleBinding == nil then
            -- One-time migration for adapter records written before signed
            -- bindings existed.
            record.binding = expectedBinding
            visibleBinding = expectedBinding
        elseif not recoveredHeaderless and visibleBinding ~= expectedBinding then
            record = nil
        elseif liveItem and liveItem ~= item then
            -- A copied header on another live item with the same random ID is
            -- still a different physical journal.
            record = nil
        end
    else
        record = nil
    end

    if type(record) ~= "table" then
        if visibleToken or visibleBinding then
            if not Adapter._invalidBindingLogged then
                Adapter._invalidBindingLogged = true
                print("[BeyondTen/B42] Skill Recovery Journal mastery binding is invalid; refusing token rotation")
            end
            return nil
        end
        if not create then
            return nil
        end
        if countRecords(root.journals) >= Adapter.MAX_JOURNALS then
            if not Adapter._journalLimitLogged then
                Adapter._journalLimitLogged = true
                print("[BeyondTen/B42] Skill Recovery Journal mastery store crossed its soft size threshold; preserving live journals")
            end
        end
        token = nextJournalToken(root, player, itemID)
        if not token then return nil end
        record = {
            version = Adapter.VERSION,
            itemID = itemID,
            perks = {},
            used = {},
            binding = getBinding(root, token, itemID),
        }
        root.journals[token] = record
        addItemIndex(root, itemID, token)
    end

    record.version = Adapter.VERSION
    record.itemID = itemID
    record.binding = record.binding or getBinding(root, token, itemID)
    record.perks = Adapter.SanitizeSnapshot(record.perks)
    record.used = Adapter.SanitizeSnapshot(record.used)
    touchRecord(root, record)
    addItemIndex(root, itemID, token)
    Adapter._runtimeJournalItems[token] = item
    updateJournalHeader(JMD, token, record.perks, false, record.used, record.binding)
    return root, record, token
end

local function ensureLocalRecord(item, JMD, create)
    local itemID = getItemID(item)
    if not itemID then return nil end
    local expectedToken = "local-" .. identityToken(itemID)
    local data = type(JMD[Adapter.JMD_KEY]) == "table" and JMD[Adapter.JMD_KEY] or nil
    if not create and (not data or data.token ~= expectedToken) then return nil end
    data = data or {}
    local snapshot = Adapter.SanitizeSnapshot(data.perks)
    local used = Adapter.SanitizeSnapshot(data.used)
    updateJournalHeader(JMD, expectedToken, snapshot, true, used, nil)
    return data, snapshot, used, expectedToken
end

local function getServerReader(player)
    local root = getStoreRoot()
    if not root then return nil end
    local accountKey = getPlayerStoreKey(player)
    local life = root.lives[accountKey]
    local isNewLifeRecord = type(life) ~= "table"
    if isNewLifeRecord then life = { generation = 1 } end
    life.generation = math.max(1, math.floor(tonumber(life.generation) or 1))
    local key = accountKey .. "|life:" .. tostring(life.generation)
    local age = getLifeAge(player)
    local reader = root.readers[key]
    if type(reader) ~= "table" then
        if countRecords(root.readers) >= Adapter.MAX_READERS then
            if not Adapter._readerLimitLogged then
                Adapter._readerLimitLogged = true
                print("[BeyondTen/B42] Skill Recovery Journal reader ledgers crossed their soft size threshold; preserving anti-replay state")
            end
        end
        reader = { version = Adapter.VERSION, lifeAge = age, perks = {} }
        root.readers[key] = reader
    end
    if isNewLifeRecord then root.lives[accountKey] = life end
    reader.version = Adapter.VERSION
    reader.lifeAge = math.max(age, tonumber(reader.lifeAge) or 0)
    if type(reader.perks) ~= "table" then reader.perks = {} end
    touchRecord(root, reader)
    return reader
end

local function peekServerReader(player)
    local root = getStoreRoot()
    if not root then return nil end
    local accountKey = getPlayerStoreKey(player)
    local life = root.lives[accountKey]
    if type(life) ~= "table" then return nil end
    local generation = math.max(1, math.floor(tonumber(life.generation) or 1))
    return root.readers[accountKey .. "|life:" .. tostring(generation)]
end

local function getLocalReader(player)
    local modData = player and type(player.getModData) == "function" and player:getModData() or nil
    if type(modData) ~= "table" then return nil end
    local age = getLifeAge(player)
    local reader = modData[Adapter.PLAYER_LEDGER_KEY]
    if type(reader) == "table" and age + 0.0001 < (tonumber(reader.lifeAge) or 0) then
        modData[Adapter.PLAYER_LEDGER_KEY] = nil
        reader = nil
    end
    if type(reader) ~= "table" then
        reader = { version = Adapter.VERSION, lifeAge = age, perks = {} }
        modData[Adapter.PLAYER_LEDGER_KEY] = reader
    end
    reader.version = Adapter.VERSION
    reader.lifeAge = math.max(age, tonumber(reader.lifeAge) or 0)
    if type(reader.perks) ~= "table" then reader.perks = {} end
    return reader
end

local function peekLocalReader(player)
    local modData = player and type(player.getModData) == "function" and player:getModData() or nil
    local reader = type(modData) == "table" and modData[Adapter.PLAYER_LEDGER_KEY] or nil
    if type(reader) == "table" and getLifeAge(player) + 0.0001 < (tonumber(reader.lifeAge) or 0) then
        return nil
    end
    return reader
end

local function syncImportedXP(player, changedValues, state)
    if isMultiplayerServer() then
        if not state.importScanDone and BeyondTenServer and type(BeyondTenServer.ScanPlayer) == "function" then
            BeyondTenServer.ScanPlayer(player, false)
            state.importScanDone = true
        end
        if type(sendServerCommand) == "function" then
            for id in pairs(changedValues or {}) do
                local perk = BT.ResolvePerk(id)
                if perk then
                    sendServerCommand(player, BT.MODULE, "SyncPerk", {
                        player = player:getOnlineID(),
                        perk = id,
                        xp = BT.GetStoredXP(player, perk),
                    })
                end
            end
        end
    elseif not state.importScanDone and BeyondTenClient and type(BeyondTenClient.ScanPlayer) == "function" then
        BeyondTenClient.ScanPlayer(player, false)
        state.importScanDone = true
    end
end

local function checkpointJournal(player, item, state)
    if not isMultiplayerServer() or type(syncItemModData) ~= "function" then return end
    state.progressTicks = (tonumber(state.progressTicks) or 0) + 1
    if state.progressTicks == 1 or state.progressTicks % 12 == 0 then
        pcall(syncItemModData, player, item)
    end
end

local function isOneTimeUse()
    return SandboxVars and SandboxVars.SkillRecoveryJournal
        and SandboxVars.SkillRecoveryJournal.RecoveryJournalUsed == true
end

local function calculateMasteryRate(SRJ, action, perkID, amount, masteryDuration)
    if amount <= 0 then return nil end
    local perk = BT.ResolvePerk(perkID)
    if not perk then return nil end

    local actionTimeMulti = SandboxVars and SandboxVars.SkillRecoveryJournal
        and tonumber(SandboxVars.SkillRecoveryJournal.TranscribeSpeed) or 1
    actionTimeMulti = actionTimeMulti or 1
    local levelPlusOne = math.min(BT.MAX_LEVEL + 1, BT.GetEffectiveLevel(action.character, perk) + 1)
    SRJ.calculateXpRate(
        perkID,
        amount,
        levelPlusOne,
        masteryDuration,
        actionTimeMulti,
        action.timeFactor or 1,
        masteryDuration.rates
    )
    return masteryDuration.rates[perkID]
end

local function makeActionState(action, SRJ, JMD)
    local player = action.character
    local item = action.item
    if not isAuthority() or isDead(player) or not isJournal(item) then return nil end
    if type(action.durationData) ~= "table" or type(SRJ.calculateXpRate) ~= "function" then return nil end

    local target = not action.doReading and Adapter.BuildRecoverableSnapshot(player, SRJ) or nil
    if not action.doReading and not hasAny(target) then return nil end

    local snapshot
    local used
    local reader
    local readerPreview
    local token
    local record

    if isMultiplayerServer() then
        local _root
        _root, record, token = ensureServerRecord(player, item, JMD, false)
        if not record and not action.doReading then
            _root, record, token = ensureServerRecord(player, item, JMD, true)
        end
        if not record then return nil end
        snapshot = record.perks
        used = record.used
        readerPreview = peekServerReader(player)
    else
        local data
        data, snapshot, used, token = ensureLocalRecord(item, JMD, false)
        if not data and not action.doReading then
            data, snapshot, used, token = ensureLocalRecord(item, JMD, true)
        end
        if not data then return nil end
        readerPreview = peekLocalReader(player)
    end

    target = action.doReading and snapshot or target
    local baseIntervals = math.max(0, tonumber(action.durationData.intervals) or 0)
    local masteryDuration = { intervals = 0, rates = {} }
    local rates = masteryDuration.rates
    local nativeReady = {}
    local hasWork = false
    local oneTime = isOneTimeUse()

    for id, allowed in pairs(target) do
        local baseline
        if action.doReading then
            local perk = BT.ResolvePerk(id)
            nativeReady[id] = perk and BT.GetNativeLevel(player, perk) >= BT.NATIVE_MAX_LEVEL or false
            baseline = readerPreview and type(readerPreview.perks) == "table"
                and (tonumber(readerPreview.perks[id]) or 0) or 0
            if oneTime then baseline = math.max(baseline, tonumber(used[id]) or 0) end
        else
            baseline = tonumber(snapshot[id]) or 0
        end

        local remaining = allowed - baseline
        if remaining > 0 and calculateMasteryRate(SRJ, action, id, remaining, masteryDuration) then
            hasWork = true
        end
    end

    if not hasWork then return nil end
    reader = isMultiplayerServer() and getServerReader(player) or getLocalReader(player)
    if not reader then return nil end
    if action.doReading then
        -- Vanilla XP must reach native level 10 before mastery becomes active.
        -- The two phases are therefore sequential when reading.
        action.durationData.intervals = baseIntervals + masteryDuration.intervals
    else
        action.durationData.intervals = math.max(baseIntervals, masteryDuration.intervals)
    end
    action.durationData._BeyondTenRates = rates
    local interval = tonumber(action.updateInterval) or 0
    action.durationData.durationTime = (tonumber(action.durationData.intervals) or 0) * interval * 60 * 60 * 3

    if not action.doReading then
        action.willWrite = true
        JMD.ID = JMD.ID or {}
        JMD.author = JMD.author or tostring(safeCall(player, "getFullName", "Survivor"))
    end

    return {
        version = Adapter.VERSION,
        doReading = action.doReading == true,
        target = target,
        snapshot = snapshot,
        used = used,
        reader = reader,
        rates = rates,
        nativeReady = nativeReady,
        token = token,
        record = record,
        oneTime = oneTime,
        JMD = JMD,
        SRJ = SRJ,
    }
end

function Adapter.PrepareAction(action, SRJ)
    if not action or not SRJ then return false end
    if action._BeyondTenJournalPreparedVersion == Adapter.VERSION then
        return action._BeyondTenJournalState ~= nil
    end
    local JMD = getJournalModData(SRJ, action.item)
    if not JMD then return false end
    local state = makeActionState(action, SRJ, JMD)
    action._BeyondTenJournalState = state
    action._BeyondTenJournalPreparedVersion = Adapter.VERSION
    return state ~= nil
end

function Adapter.ProcessTick(action, player, JMD, doReading)
    local state = action and action._BeyondTenJournalState
    if not state or state.version ~= Adapter.VERSION or state.doReading ~= (doReading == true) then
        return false
    end
    if not isAuthority() or isDead(player) or state.JMD ~= JMD then return false end

    local updateID = tonumber(action.updates)
    if updateID ~= nil then
        if state.lastProcessedUpdate == updateID then return false end
        state.lastProcessedUpdate = updateID
    end

    local progressChanged = false
    local importTargets = {}

    for id, allowed in pairs(state.target) do
        local rate = tonumber(state.rates[id]) or 0
        if rate > 0 then
            if state.doReading then
                local perk = BT.ResolvePerk(id)
                local nativeReady = state.nativeReady[id] == true
                if not nativeReady and perk and BT.GetNativeLevel(player, perk) >= BT.NATIVE_MAX_LEVEL then
                    -- The vanilla cap was reached by this SRJ tick. Start the
                    -- mastery phase on the next interval, not in parallel.
                    state.nativeReady[id] = true
                end
                -- Do not pre-load the mastery reservoir while SRJ is still
                -- restoring vanilla levels 1-10.
                if nativeReady then
                    local readerProgress = tonumber(state.reader.perks[id]) or 0
                    local consumed = tonumber(state.used[id]) or 0
                    local gate = state.oneTime and math.max(readerProgress, consumed) or readerProgress
                    local journalDelta = math.min(rate, math.max(0, allowed - gate))
                    local current = BT.GetStoredXP(player, perk)
                    local capacity = math.max(0, BT.GetTotalMasteryCost(perk, BT.MAX_LEVEL) - current)

                    if journalDelta > 0 and capacity > 0 then
                        local actualDelta = journalDelta
                        local reBoost = state.SRJ and state.SRJ.xpHandler and state.SRJ.xpHandler.reBoostXP
                        if type(reBoost) == "function" then
                            local ok, converted = pcall(reBoost, player, perk, journalDelta)
                            if ok and tonumber(converted) and BT.IsFinite(tonumber(converted)) then
                                actualDelta = tonumber(converted)
                            end
                        end

                        if actualDelta > 0 and BT.IsFinite(actualDelta) then
                            if actualDelta > capacity then
                                journalDelta = journalDelta * (capacity / actualDelta)
                                actualDelta = capacity
                            end

                            -- Advance the authoritative ledgers before applying
                            -- the additive XP delta. Replayed ticks cannot grant it
                            -- twice, while existing player mastery is preserved.
                            state.reader.perks[id] = gate + journalDelta
                            state.used[id] = math.min(allowed, consumed + journalDelta)
                            importTargets[id] = current + actualDelta
                            progressChanged = true
                        end
                    end
                end
            else
                local written = tonumber(state.snapshot[id]) or 0
                if written < allowed then
                    local resulting = math.min(allowed, written + rate)
                    state.snapshot[id] = resulting

                    -- Match SRJ's write ledger: the author cannot recover the XP
                    -- they just transcribed during the same life.
                    state.reader.perks[id] = math.max(tonumber(state.reader.perks[id]) or 0, resulting)
                    progressChanged = true
                end
            end
        end
    end

    if hasAny(importTargets) then
        BT.ImportXP(player, importTargets, false)
        syncImportedXP(player, importTargets, state)
    end

    if progressChanged then
        if state.record then
            local root = getStoreRoot()
            if root then touchRecord(root, state.record) end
            updateJournalHeader(JMD, state.token, state.snapshot, false, state.used, state.record.binding)
        else
            updateJournalHeader(JMD, state.token, state.snapshot, true, state.used, nil)
        end
        checkpointJournal(player, action.item, state)
    end
    return progressChanged
end

function Adapter.ClearReader(player)
    if not player then return end
    if isMultiplayerServer() then
        local root = getStoreRoot()
        if root then
            local accountKey = getPlayerStoreKey(player)
            local life = root.lives[accountKey]
            if type(life) ~= "table" then return end
            local generation = math.max(1, math.floor(tonumber(life.generation) or 1))
            root.readers[accountKey .. "|life:" .. tostring(generation)] = nil
            life.generation = generation + 1
            root.lives[accountKey] = life
        end
    elseif not isMultiplayerClient() then
        local modData = type(player.getModData) == "function" and player:getModData() or nil
        if type(modData) == "table" then modData[Adapter.PLAYER_LEDGER_KEY] = nil end
    end
end

local function calculateNativeCapRecovery(SRJ, player, perk, startingLevels, deductibleXP, flatXP)
    if not player or not perk or not BT.IsTrainablePerk(perk)
        or BT.GetNativeLevel(player, perk) < BT.NATIVE_MAX_LEVEL then return nil end

    startingLevels = startingLevels or SRJ.modDataHandler.getFreeLevelsFromTraitsAndProfession(player)
    deductibleXP = deductibleXP or SRJ.modDataHandler.getDeductedXP(player)
    flatXP = flatXP or SRJ.modDataHandler.getFlatXP(player)

    local perkID = perk:getId()
    local capXP = BT.GetNativeCapXP(perk)
    local startingLevel = startingLevels[perkID]
    local startingXP = startingLevel and perk:getTotalXpForLevel(startingLevel) or 0
    local transcribeTV = not SandboxVars or not SandboxVars.SkillRecoveryJournal
        or SandboxVars.SkillRecoveryJournal.TranscribeTVXP ~= false
    local deducted = transcribeTV and 0 or (deductibleXP[perkID] or 0)
    local enabled, fraction = SRJ.bSkillValid(perk)
    local recoverable = enabled and (capXP - startingXP - deducted) or 0
    if recoverable <= 0 then return false, false end

    local normalized = SRJ.xpHandler.getSkillXPNormalizeScale(perkID) or 1
    local flatPortion = math.min(flatXP[perkID] or 0, recoverable)
    local boostedPortion = recoverable - flatPortion
    local gained = boostedPortion > 0
        and (SRJ.xpHandler.unBoostXP(player, perk, boostedPortion) * fraction * normalized)
        or nil
    local flatGained = flatPortion > 0 and (flatPortion * fraction) or nil
    return gained, flatGained
end

local function installHook(owner, methodName, key, buildWrapper)
    if type(owner) ~= "table" or type(owner[methodName]) ~= "function" then return false end
    local current = owner[methodName]
    local state = Adapter._hooks[key]
    if state and state.owner == owner and state.wrapper == current then return true end

    local wrapper = buildWrapper(current)
    if type(wrapper) ~= "function" then return false end
    owner[methodName] = wrapper
    Adapter._hooks[key] = { owner = owner, original = current, wrapper = wrapper }
    return true
end

function Adapter.Install(SRJ, actionClass)
    if type(SRJ) ~= "table" then return false end
    actionClass = actionClass or SkillRecoveryJournalAction
    if type(actionClass) ~= "table" then return false end

    local calcInstalled = installHook(SRJ, "calculateGainedSkill", "calculateGainedSkill", function(original)
        return function(player, perk, startingLevels, deductibleXP, flatXP)
            local gained, flatGained = calculateNativeCapRecovery(
                SRJ, player, perk, startingLevels, deductibleXP, flatXP)
            if gained ~= nil or flatGained ~= nil then return gained, flatGained end
            return original(player, perk, startingLevels, deductibleXP, flatXP)
        end
    end)

    local processInstalled = installHook(SRJ, "processJournalTick", "processJournalTick", function(original)
        return function(action, player, JMD, doReading)
            local changed, sayText = original(action, player, JMD, doReading)
            local ok, masteryChanged = pcall(Adapter.ProcessTick, action, player, JMD, doReading)
            if not ok then
                print("[BeyondTen/B42] Skill Recovery Journal tick error: " .. tostring(masteryChanged))
                masteryChanged = false
            end
            return changed or masteryChanged, sayText
        end
    end)

    local newInstalled = installHook(actionClass, "new", "actionNew", function(original)
        return function(self, character, item, doReading, writingTool, ...)
            local action = Adapter.CallActionNew(
                SRJ, original, self, character, item, doReading, writingTool, ...)
            if action then
                local ok, errorMessage = pcall(Adapter.PrepareAction, action, SRJ)
                if not ok then
                    action._BeyondTenJournalState = nil
                    print("[BeyondTen/B42] Skill Recovery Journal setup error: " .. tostring(errorMessage))
                end
            end
            return action
        end
    end)

    return calcInstalled and processInstalled and newInstalled
end

local function isSRJActive()
    if type(getActivatedMods) ~= "function" then return false end
    local mods = getActivatedMods()
    return mods and type(mods.contains) == "function" and mods:contains("SkillRecoveryJournal")
end

local function tryInstall()
    if not isSRJActive() then return false end
    local okMain, SRJ = pcall(require, "Skill Recovery Journal Main")
    if not okMain or type(SRJ) ~= "table" then return false end
    if not SkillRecoveryJournalAction then pcall(require, "Skill Recovery Journal Action") end
    local installed = Adapter.Install(SRJ, SkillRecoveryJournalAction)
    if installed and not Adapter._bootLogged then
        Adapter._bootLogged = true
        print("[BeyondTen/B42] Skill Recovery Journal mastery adapter installed")
    end
    return installed
end

Adapter.TryInstall = tryInstall
Adapter.OnCharacterDeath = function(character)
    if type(instanceof) == "function" and not instanceof(character, "IsoPlayer") then return end
    Adapter.ClearReader(character)
end

local function bindEvent(name, callback)
    if not Events then return end
    local event = Events[name]
    if not event or type(event.Add) ~= "function" then return end

    local previous = Adapter._boundEvents[name]
    if previous == event and type(event.Remove) ~= "function" then return end
    if previous and type(previous.Remove) == "function" then pcall(previous.Remove, callback) end
    if type(event.Remove) == "function" then pcall(event.Remove, callback) end
    event.Add(callback)
    Adapter._boundEvents[name] = event
end

Adapter._eventHandlers.install = Adapter._eventHandlers.install or function()
    if Adapter.TryInstall then Adapter.TryInstall() end
end
Adapter._eventHandlers.death = Adapter._eventHandlers.death or function(player)
    if Adapter.OnCharacterDeath then Adapter.OnCharacterDeath(player) end
end
Adapter._eventHandlers.watchdog = Adapter._eventHandlers.watchdog or function()
    Adapter._watchdogTicks = (tonumber(Adapter._watchdogTicks) or 0) + 1
    if Adapter._watchdogTicks >= 600 then
        Adapter._watchdogTicks = 0
        if Adapter.TryInstall then Adapter.TryInstall() end
    end
end

bindEvent("OnGameStart", Adapter._eventHandlers.install)
bindEvent("OnServerStarted", Adapter._eventHandlers.install)
bindEvent("OnCharacterDeath", Adapter._eventHandlers.death)
bindEvent("OnTick", Adapter._eventHandlers.watchdog)
tryInstall()

return Adapter
