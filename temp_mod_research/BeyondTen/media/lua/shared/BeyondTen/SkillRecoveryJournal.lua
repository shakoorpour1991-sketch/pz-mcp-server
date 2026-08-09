require "BeyondTen/Shared"

BeyondTenSkillRecoveryJournal = BeyondTenSkillRecoveryJournal or {}

local Adapter = BeyondTenSkillRecoveryJournal
local BT = BeyondTen

Adapter.VERSION = 2
Adapter.JMD_KEY = "BeyondTenXP"
Adapter.PLAYER_LEDGER_KEY = "BeyondTenSRJRead_v1"
Adapter.DATA_VERSION = 1
Adapter.MAX_VALUE = 1000000000000
Adapter._hooks = Adapter._hooks or {}
Adapter._eventHandlers = Adapter._eventHandlers or {}
Adapter._boundEvents = Adapter._boundEvents or {}

local function isDedicatedServer()
    return type(isServer) == "function" and isServer()
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

local function getJournalData(item)
    if not item or type(item.getModData) ~= "function" then return nil end
    local root = item:getModData()
    local JMD = type(root) == "table" and root.SRJ or nil
    if type(JMD) ~= "table" then return nil end
    return root, JMD
end

local function hasAny(values)
    for _key in pairs(values or {}) do return true end
    return false
end

local function boundedValue(value)
    value = tonumber(value)
    if not BT.IsFinite(value) or value <= 0 then return 0 end
    return math.min(value, Adapter.MAX_VALUE)
end

local function getMasteryData(JMD, create)
    if type(JMD) ~= "table" then return nil end
    local data = JMD[Adapter.JMD_KEY]
    if type(data) ~= "table" then
        if not create then return nil end
        data = { version = Adapter.DATA_VERSION, perks = {}, used = {} }
        JMD[Adapter.JMD_KEY] = data
    end
    if type(data.perks) ~= "table" then
        if not create then return nil end
        data.perks = {}
    end
    if type(data.used) ~= "table" then
        if not create then return nil end
        data.used = {}
    end
    data.version = Adapter.DATA_VERSION
    return data
end

local function getReaderLedger(player, create)
    if not player or type(player.getModData) ~= "function" then return nil end
    local modData = player:getModData()
    if type(modData) ~= "table" then return nil end
    local ledger = modData[Adapter.PLAYER_LEDGER_KEY]
    if type(ledger) ~= "table" then
        if not create then return nil end
        ledger = { version = Adapter.DATA_VERSION, perks = {} }
        modData[Adapter.PLAYER_LEDGER_KEY] = ledger
    end
    if type(ledger.perks) ~= "table" then
        if not create then return nil end
        ledger.perks = {}
    end
    ledger.version = Adapter.DATA_VERSION
    return ledger
end

local function correctedGainedSkills(SRJ, player, originalValues)
    local result = type(originalValues) == "table" and originalValues or {}
    if not player or isDead(player) then return hasAny(result) and result or nil end

    local deductibleXP = SRJ.setOrGetDeductedXP(player) or {}
    local passiveLevels = SRJ.getPassiveLevels(player) or {}
    local startingLevels = SRJ.getFreeLevelsFromTraitsAndProfession(player) or {}

    for index = 1, Perks.getMaxIndex() - 1 do
        local perk = Perks.fromIndex(index)
        if perk and BT.IsTrainablePerk(perk)
            and BT.GetNativeLevel(player, perk) >= BT.NATIVE_MAX_LEVEL then
            local id = perk:getId()
            local passiveLevel = passiveLevels[id]
            local passiveXP = passiveLevel and perk:getTotalXpForLevel(passiveLevel) or nil
            local startingLevel = startingLevels[id]
            local startingXP = startingLevel and perk:getTotalXpForLevel(startingLevel) or 0
            local baseline = passiveXP or startingXP
            local deducted = SandboxVars.SkillRecoveryJournal.TranscribeTVXP == false
                and (tonumber(deductibleXP[id]) or 0) or 0
            local enabled, fraction = SRJ.bSkillValid(perk)
            fraction = tonumber(fraction) or 1
            -- B41 keeps the live Java XP map at the level-9 reservoir after
            -- native level 10. Correct only that native 1-10 component here.
            -- Mastery uses a separate journal map below: combining the two in
            -- gainedXP makes SRJ mistake native XP for level 11+ XP.
            local raw = BT.GetNativeCapXP(perk) - baseline - deducted

            if enabled and raw > 0 then
                local flattened = SRJ.xpHandler.unBoostXP(player, perk, raw)
                if BT.IsFinite(flattened) and flattened > 0 then result[id] = flattened * fraction end
            else
                result[id] = nil
            end
        end
    end

    for _id in pairs(result) do return result end
    return nil
end

local function buildMasterySnapshot(SRJ, player)
    local result = {}
    if not player or isDead(player) or type(BT.ExportXP) ~= "function" then return result end

    local exported = BT.ExportXP(player)
    for id, rawValue in pairs(exported or {}) do
        local perk = BT.ResolvePerk(id)
        local raw = boundedValue(rawValue)
        if perk and raw > 0 and BT.IsTrainablePerk(perk)
            and BT.GetNativeLevel(player, perk) >= BT.NATIVE_MAX_LEVEL then
            local enabled, fraction = SRJ.bSkillValid(perk)
            fraction = tonumber(fraction) or 1
            local flattened = enabled and SRJ.xpHandler.unBoostXP(player, perk, raw) or 0
            flattened = boundedValue(flattened)
            if flattened > 0 and fraction > 0 then
                result[id] = boundedValue(flattened * fraction)
            end
        end
    end
    return result
end

local function identityAllowsRead(player, JMD)
    if not player or not JMD or type(JMD.ID) ~= "table" then return false end
    if type(player.HasTrait) == "function" and player:HasTrait("Illiterate") then return false end

    local protections = SandboxVars.SkillRecoveryJournal.SecurityFeatures or 1
    local steamID = safeCall(player, "getSteamID", 0)
    local username = safeCall(player, "getUsername", nil)
    if protections <= 2 and JMD.ID.steamID and JMD.ID.steamID ~= steamID then return false end
    if protections == 1 and JMD.ID.username and JMD.ID.username ~= username then return false end
    return true
end

local function identityAllowsWrite(player, JMD)
    if not player or not JMD then return false end
    if type(player.HasTrait) == "function" and player:HasTrait("Illiterate") then return false end

    JMD.ID = type(JMD.ID) == "table" and JMD.ID or {}
    local protections = SandboxVars.SkillRecoveryJournal.SecurityFeatures or 1
    local steamID = safeCall(player, "getSteamID", 0)
    local username = safeCall(player, "getUsername", nil)
    if protections <= 2 and steamID ~= 0 and JMD.ID.steamID and JMD.ID.steamID ~= steamID then
        return false
    end
    if protections == 1 and type(isClient) == "function" and isClient()
        and username and JMD.ID.username and JMD.ID.username ~= username then
        return false
    end
    if protections <= 2 and steamID ~= 0 then JMD.ID.steamID = steamID end
    if protections == 1 and type(isClient) == "function" and isClient()
        and username and not JMD.ID.username then JMD.ID.username = username end
    return true
end

local function roundTwo(value)
    return math.floor(value * 100 + 0.5) / 100
end

function Adapter.PrepareWriteAction(SRJ, action)
    if not action or action._BeyondTenSRJWritePrepared == Adapter.VERSION then return action end
    action._BeyondTenSRJWritePrepared = Adapter.VERSION
    action._BeyondTenSRJWriteTarget = buildMasterySnapshot(SRJ, action.character)

    if not hasAny(action._BeyondTenSRJWriteTarget) then return action end
    local _root, JMD = getJournalData(action.item)
    if not JMD or not identityAllowsWrite(action.character, JMD) then return action end

    local data = getMasteryData(JMD, true)
    local hasWork = false
    for id, target in pairs(action._BeyondTenSRJWriteTarget) do
        if target > boundedValue(data.perks[id]) then
            hasWork = true
            break
        end
    end
    if hasWork then
        action.willWrite = true
        JMD.author = safeCall(action.character, "getFullName", JMD.author)
    end
    return action
end

function Adapter.ProcessWriteTick(SRJ, action)
    local player = action and action.character
    if isDedicatedServer() or isDead(player) then return false end
    local _root, JMD = getJournalData(action and action.item)
    if not JMD or not identityAllowsWrite(player, JMD) then return false end

    local targets = type(action._BeyondTenSRJWriteTarget) == "table"
        and action._BeyondTenSRJWriteTarget or buildMasterySnapshot(SRJ, player)
    if not hasAny(targets) then return false end
    local data = getMasteryData(JMD, true)
    local ledger = getReaderLedger(player, true)
    if not data or not ledger then return false end

    local transcribeSpeed = tonumber(SandboxVars.SkillRecoveryJournal.TranscribeSpeed) or 1
    local changed = false
    for id, rawTarget in pairs(targets) do
        local perk = BT.ResolvePerk(id)
        local target = boundedValue(rawTarget)
        local stored = boundedValue(data.perks[id])
        if perk and BT.IsTrainablePerk(perk) and target > stored then
            local differential = tonumber(SRJ.getMaxXPDifferential(id)) or 1
            if differential <= 0 then differential = 1 end
            local levelPlusOne = math.min(BT.MAX_LEVEL + 1, BT.GetEffectiveLevel(player, perk) + 1)
            local rate = roundTwo(math.sqrt(target) / 25 * math.sqrt(levelPlusOne)
                * transcribeSpeed / differential)
            local delta = math.min(math.max(rate, 0), target - stored)
            if delta > 0 then
                local resulting = stored + delta
                data.perks[id] = resulting
                ledger.perks[id] = math.max(boundedValue(ledger.perks[id]), resulting)
                changed = true
            end
        end
    end
    return changed
end

function Adapter.ProcessReadTick(SRJ, action)
    local player = action and action.character
    if isDedicatedServer() or isDead(player) then return false end
    local root, JMD = getJournalData(action and action.item)
    if not root or not identityAllowsRead(player, JMD) then return false end

    local data = getMasteryData(JMD, false)
    if not data then return false end
    local stored = data.perks
    local ledger = getReaderLedger(player, true)
    if not ledger then return false end
    local readXP = ledger.perks
    local used = data.used
    local oneTime = SandboxVars.SkillRecoveryJournal.RecoveryJournalUsed == true
    local readSpeed = tonumber(SandboxVars.SkillRecoveryJournal.ReadTimeSpeed) or 1

    local greatest = 0
    for id, value in pairs(stored) do
        local perk = BT.ResolvePerk(id)
        local target = boundedValue(value)
        local enabled = perk and SRJ.bSkillValid(perk)
        if enabled and BT.IsTrainablePerk(perk) and target > greatest then
            greatest = target
        end
    end
    if greatest <= 0 then return false end

    local changed = false
    local baseRate = math.sqrt(greatest) / 25
    for id, rawTarget in pairs(stored) do
        local perk = BT.ResolvePerk(id)
        local target = boundedValue(rawTarget)
        local enabled = perk and SRJ.bSkillValid(perk)
        if enabled and BT.IsTrainablePerk(perk)
            and action._BeyondTenSRJNativeReadyBefore
            and action._BeyondTenSRJNativeReadyBefore[id] == true and target > 0 then
            local readerProgress = boundedValue(readXP[id])
            local consumed = boundedValue(used[id])
            local gate = oneTime and math.max(readerProgress, consumed) or readerProgress
            if gate < target then
                local differential = tonumber(SRJ.getMaxXPDifferential(id)) or 1
                if differential <= 0 then differential = 1 end
                local levelPlusOne = math.min(BT.MAX_LEVEL + 1, BT.GetEffectiveLevel(player, perk) + 1)
                local rate = roundTwo(baseRate * math.sqrt(levelPlusOne) * readSpeed / differential)
                local journalDelta = math.min(math.max(rate, 0), target - gate)
                local current = BT.GetStoredXP(player, perk)
                local capacity = math.max(0, BT.GetTotalMasteryCost(perk, BT.MAX_LEVEL) - current)

                if journalDelta > 0 and capacity > 0 then
                    local actualDelta = SRJ.xpHandler.reBoostXP(player, perk, journalDelta)
                    if BT.IsFinite(actualDelta) and actualDelta > 0 then
                        if actualDelta > capacity then
                            journalDelta = journalDelta * (capacity / actualDelta)
                            actualDelta = capacity
                        end

                        -- Match legacy SRJ: the character ledger is a read
                        -- position, while the journal ledger is cumulative XP
                        -- actually consumed across all readers.
                        -- Native B41 AddXP is captured later by the client's
                        -- polling reservoir. Apply mastery directly so the
                        -- journal ledgers can advance only by XP that actually
                        -- entered Beyond Ten's bounded store.
                        local applied = 0
                        if type(BT.AddStoredXP) == "function" then
                            applied = tonumber(BT.AddStoredXP(player, perk, actualDelta)) or 0
                        end
                        if applied > 0 then
                            local appliedJournal = journalDelta * math.min(1, applied / actualDelta)
                            readXP[id] = math.min(target, readerProgress + appliedJournal)
                            -- Match SRJ one-time semantics: consumption is
                            -- always recorded, even while the option is off.
                            used[id] = math.min(target, consumed + appliedJournal)
                            if type(isClient) == "function" and isClient()
                                and type(sendClientCommand) == "function" then
                                sendClientCommand(player, BT.MODULE or "BeyondTen", "AddXP", {
                                    perk = id,
                                    amount = applied,
                                })
                            end
                            changed = true
                        end
                    end
                end
            end
        end
    end
    return changed
end

local function installHook(owner, methodName, key, buildWrapper)
    if type(owner) ~= "table" or type(owner[methodName]) ~= "function" then return false end
    local current = owner[methodName]
    local state = Adapter._hooks[key]
    if state and state.owner == owner and state.wrapper == current then return true end
    local wrapper = buildWrapper(current)
    owner[methodName] = wrapper
    Adapter._hooks[key] = { owner = owner, original = current, wrapper = wrapper }
    return true
end

function Adapter.Install(SRJ, readClass, writeClass)
    if type(SRJ) ~= "table" or type(readClass) ~= "table" or type(writeClass) ~= "table" then
        return false
    end

    local calculateInstalled = installHook(SRJ, "calculateGainedSkills", "calculateGainedSkills", function(original)
        return function(player)
            return correctedGainedSkills(SRJ, player, original(player))
        end
    end)

    local readInstalled = installHook(readClass, "update", "readUpdate", function(original)
        return function(self, ...)
            if self._BeyondTenSRJUpdateGuard then return original(self, ...) end
            if not self.loopedAction then return original(self, ...) end
            local multiplier = type(getGameTime) == "function"
                and tonumber(safeCall(getGameTime(), "getMultiplier", 0)) or 0
            local willTick = ((tonumber(self.readTimer) or 0) + multiplier) >= 10
            if not willTick then return original(self, ...) end

            self._BeyondTenSRJUpdateGuard = true
            self._BeyondTenSRJNativeReadyBefore = {}
            local _root, JMD = getJournalData(self.item)
            local masteryData = getMasteryData(JMD, false)
            local stored = masteryData and masteryData.perks or {}
            for id in pairs(stored) do
                local perk = BT.ResolvePerk(id)
                self._BeyondTenSRJNativeReadyBefore[id] = perk
                    and BT.GetNativeLevel(self.character, perk) >= BT.NATIVE_MAX_LEVEL or false
            end
            local requestedStop = false
            local previousForceStop = self.forceStop
            self.forceStop = function() requestedStop = true end
            local ok, errorMessage = pcall(original, self, ...)
            self.forceStop = previousForceStop
            self._BeyondTenSRJUpdateGuard = nil
            if not ok then error(errorMessage) end

            local masteryChanged = Adapter.ProcessReadTick(SRJ, self)
            if requestedStop and not masteryChanged and type(previousForceStop) == "function" then
                previousForceStop(self)
            end
        end
    end)

    local writeNewInstalled = installHook(writeClass, "new", "writeNew", function(original)
        return function(self, character, item, writingTool, ...)
            local action = original(self, character, item, writingTool, ...)
            return Adapter.PrepareWriteAction(SRJ, action)
        end
    end)

    local writeUpdateInstalled = installHook(writeClass, "update", "writeUpdate", function(original)
        return function(self, ...)
            if self._BeyondTenSRJWriteUpdateGuard then return original(self, ...) end
            if not self.loopedAction then return original(self, ...) end
            Adapter.PrepareWriteAction(SRJ, self)

            local multiplier = type(getGameTime) == "function"
                and tonumber(safeCall(getGameTime(), "getMultiplier", 0)) or 0
            local willTick = ((tonumber(self.writeTimer) or 0) - multiplier) <= 0
            if not willTick then return original(self, ...) end

            self._BeyondTenSRJWriteUpdateGuard = true
            local requestedStop = false
            local previousForceStop = self.forceStop
            self.forceStop = function() requestedStop = true end
            local ok, errorMessage = pcall(original, self, ...)
            self.forceStop = previousForceStop
            self._BeyondTenSRJWriteUpdateGuard = nil
            if not ok then error(errorMessage) end

            local masteryChanged = Adapter.ProcessWriteTick(SRJ, self)
            if masteryChanged then
                self.changesMade = true
                self.changesWereMade = true
            elseif requestedStop and type(previousForceStop) == "function" then
                previousForceStop(self)
            end
        end
    end)

    return calculateInstalled and readInstalled and writeNewInstalled and writeUpdateInstalled
end

local function isSRJActive()
    if type(getActivatedMods) ~= "function" then return false end
    local mods = getActivatedMods()
    return mods and type(mods.contains) == "function" and mods:contains("SkillRecoveryJournal")
end

local function tryInstall()
    if isDedicatedServer() or not isSRJActive() then return false end
    local okMain, SRJ = pcall(require, "Skill Recovery Journal Main")
    if not okMain or type(SRJ) ~= "table" then return false end
    if not ReadSkillRecoveryJournal then pcall(require, "Skill Recovery Journal Reading") end
    if not WriteSkillRecoveryJournal then pcall(require, "Skill Recovery Journal Write") end
    local installed = Adapter.Install(SRJ, ReadSkillRecoveryJournal, WriteSkillRecoveryJournal)
    if installed and not Adapter._bootLogged then
        Adapter._bootLogged = true
        print("[BeyondTen] Skill Recovery Journal B41 compatibility installed (legacy client-authoritative SRJ flow)")
    end
    return installed
end

Adapter.TryInstall = tryInstall

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
Adapter._eventHandlers.watchdog = Adapter._eventHandlers.watchdog or function()
    Adapter._watchdogTicks = (tonumber(Adapter._watchdogTicks) or 0) + 1
    if Adapter._watchdogTicks >= 600 then
        Adapter._watchdogTicks = 0
        if Adapter.TryInstall then Adapter.TryInstall() end
    end
end

bindEvent("OnGameStart", Adapter._eventHandlers.install)
bindEvent("OnTick", Adapter._eventHandlers.watchdog)
tryInstall()

return Adapter
