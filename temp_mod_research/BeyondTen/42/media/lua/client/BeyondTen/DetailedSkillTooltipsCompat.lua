require "BeyondTen/Shared"
require "XpSystem/ISUI/ISSkillProgressBar"

-- Optional compatibility layer for Detailed Skill Tooltips (Workshop 3572846242).
--
-- DST replaces updateTooltip and keeps its predecessor in the mutable global
-- DST.updateTooltip_base.  That works for a fresh start, but re-running DST.lua
-- in the same Lua VM can make an old wrapper call a newly assigned base wrapper
-- again.  Keep DST's base anchored to the pre-DST function and install our own
-- final, idempotent wrapper.  No files from DST are changed.

local BT = BeyondTen
BT.DetailedSkillTooltipsCompat = BT.DetailedSkillTooltipsCompat or {}
local Compat = BT.DetailedSkillTooltipsCompat

local MELEE_PERKS = {
    Axe = true,
    Blunt = true,
    SmallBlunt = true,
    LongBlade = true,
    SmallBlade = true,
    Spear = true,
}

local function fallbackFormat(template, ...)
    for index = 1, select("#", ...) do
        local value = tostring(select(index, ...))
        template = string.gsub(template, "%%" .. tostring(index), function() return value end)
    end
    return string.gsub(template, "%%%%", "%%")
end

local function text(key, fallback, ...)
    if type(getText) == "function" then
        local ok, translated = pcall(getText, key, ...)
        if ok and type(translated) == "string" and translated ~= "" and translated ~= key then
            return translated
        end
    end
    return fallbackFormat(fallback, ...)
end

local function numberText(value)
    value = tonumber(value) or 0
    if value == math.floor(value) then return tostring(math.floor(value)) end
    return string.format("%.1f", value)
end

local function perkId(perk)
    if type(perk) == "string" then return perk end
    if not perk then return nil end
    local ok, id = pcall(function() return perk:getId() end)
    return ok and type(id) == "string" and id or nil
end

local function isCustom(perk)
    if not perk then return false end
    local ok, result = pcall(function() return perk:isCustom() end)
    return ok and result == true
end

local function masteryRank(targetLevel)
    return math.max(1, math.floor(tonumber(targetLevel) or BT.NATIVE_MAX_LEVEL) - BT.NATIVE_MAX_LEVEL)
end

function Compat.GetMasteryTooltipLines(perk, targetLevel)
    targetLevel = math.floor(tonumber(targetLevel) or 0)
    if targetLevel <= BT.NATIVE_MAX_LEVEL or targetLevel > BT.MAX_LEVEL then return {} end

    local ranks = masteryRank(targetLevel)
    local id = perkId(perk)
    local lines = {}

    if id == "Aiming" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_RangedDamage",
            "Ranged weapon damage: +3%% per mastery rank (+%1%% at this level).",
            numberText(ranks * 3)
        )
    elseif MELEE_PERKS[id] then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_MeleeDamage",
            "Melee weapon damage: +3%% per mastery rank (+%1%% at this level).",
            numberText(ranks * 3)
        )
    elseif id == "Strength" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Strength",
            "Melee weapon damage: +2%% per rank (+%1%%). Carry capacity: +%2.",
            numberText(ranks * 2), ranks
        )
    elseif id == "Reloading" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Reloading",
            "Reload speed base: +0.10 when reloading and +0.04 when racking per rank (rank %1).",
            ranks
        )
    elseif id == "Maintenance" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Maintenance",
            "Condition recovery: %1%% chance per lost condition point (6%% per rank).",
            numberText(ranks * 6)
        )
    elseif id == "Fitness" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Fitness",
            "Endurance loss reduction: +%1%%. Endurance recovery: +%1%%.",
            numberText(ranks * 2)
        )
    elseif id == "Sprinting" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Sprinting",
            "While running or sprinting, endurance loss reduction: +%1%%.",
            numberText(ranks * 2)
        )
    elseif id == "Nimble" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Nimble",
            "While moving and aiming, endurance loss reduction: +%1%%.",
            numberText(ranks * 1.5)
        )
    elseif id == "Sneak" or id == "Lightfoot" then
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_Sneaking",
            "While moving and sneaking, endurance loss reduction: +%1%%.",
            numberText(ranks)
        )
    else
        lines[#lines + 1] = text(
            "IGUI_BeyondTen_Tooltip_TimedActions",
            "Eligible timed actions: %1%% faster.",
            numberText(ranks * 2.5)
        )
        if isCustom(perk) then
            lines[#lines + 1] = text(
                "IGUI_BeyondTen_Tooltip_CustomWeapon",
                "Matching custom weapon category damage: +%1%%.",
                numberText(ranks * 3)
            )
        end
    end

    return lines
end

local function appendMasteryDetails(progressBar, selectedLevel)
    local targetLevel = math.floor(tonumber(selectedLevel) or -1) + 1
    if targetLevel <= BT.NATIVE_MAX_LEVEL or targetLevel > BT.MAX_LEVEL then return end

    local header = text(
        "IGUI_BeyondTen_Tooltip_EffectsHeader",
        "Beyond Ten effects - level %1",
        targetLevel
    )
    local message = progressBar.message or ""
    -- The exact header is a stable marker.  It avoids duplicate sections when
    -- a later UI mod has wrapped the tooltip more than once.
    if string.find(message, header, 1, true) then return end

    message = message .. " <LINE><LINE> <RGB:1,0.66,0.18> " .. header
    for _, line in ipairs(Compat.GetMasteryTooltipLines(progressBar.perk, targetLevel)) do
        message = message .. " <LINE> <RGB:0.9,0.9,0.9> " .. line
    end
    progressBar.message = message
end

local function getDST()
    local dst = rawget(_G, "DST")
    if type(dst) ~= "table" or type(ISSkillProgressBar) ~= "table" then return nil end
    if type(ISSkillProgressBar.DST_updateTooltip) ~= "function" then return nil end
    if type(dst.updateTooltip_base) ~= "function" then return nil end
    return dst
end

local function delegateIndex(previousIndex, table, key)
    if type(previousIndex) == "function" then return previousIndex(table, key) end
    if type(previousIndex) == "table" then return previousIndex[key] end
    return nil
end

local function delegateNewIndex(previousNewIndex, table, key, value)
    if type(previousNewIndex) == "function" then return previousNewIndex(table, key, value) end
    if type(previousNewIndex) == "table" then
        previousNewIndex[key] = value
        return
    end
    rawset(table, key, value)
end

local function protectDSTBase(dst, stableBase)
    if Compat._protectedDST == dst and getmetatable(dst) == Compat._dstBaseMeta then
        rawset(dst, "updateTooltip_base", nil)
        return true
    end

    local previousMeta = getmetatable(dst)
    if previousMeta ~= nil and type(previousMeta) ~= "table" then return false end

    local previousIndex = previousMeta and previousMeta.__index or nil
    local previousNewIndex = previousMeta and previousMeta.__newindex or nil
    local meta = {}
    if previousMeta then
        for key, value in pairs(previousMeta) do meta[key] = value end
    end

    meta.__index = function(table, key)
        if key == "updateTooltip_base" then return BT._dstTooltipStableBase end
        return delegateIndex(previousIndex, table, key)
    end
    meta.__newindex = function(table, key, value)
        if key == "updateTooltip_base" then
            Compat._dstLastRequestedBase = value
            return
        end
        delegateNewIndex(previousNewIndex, table, key, value)
    end

    local ok = pcall(setmetatable, dst, meta)
    if not ok then return false end
    rawset(dst, "updateTooltip_base", nil)
    Compat._protectedDST = dst
    Compat._dstBaseMeta = meta
    return true
end

function Compat.Ensure()
    local dst = getDST()
    if not dst then return false end
    Compat._dstDetected = true

    if type(BT._dstTooltipStableBase) ~= "function" then
        BT._dstTooltipStableBase = dst.updateTooltip_base
    end
    local stableBase = BT._dstTooltipStableBase
    if type(stableBase) ~= "function" then return false end

    -- Protect the mutable DST pointer before looking at/re-wrapping the live
    -- function.  A freshly re-executed DST.lua can then never point an old DST
    -- wrapper back at a newer one.
    protectDSTBase(dst, stableBase)

    local current = ISSkillProgressBar.updateTooltip
    if current == Compat._tooltipWrapper then return true end
    if type(current) ~= "function" then return false end

    local base = current
    Compat._tooltipWrapper = function(progressBar, selectedLevel)
        selectedLevel = math.floor(tonumber(selectedLevel) or 0)
        if selectedLevel < 0 then selectedLevel = 0 end
        if selectedLevel >= BT.MAX_LEVEL then selectedLevel = BT.MAX_LEVEL - 1 end
        base(progressBar, selectedLevel)
        appendMasteryDetails(progressBar, selectedLevel)
    end
    ISSkillProgressBar.updateTooltip = Compat._tooltipWrapper

    if not Compat._installedLogged then
        Compat._installedLogged = true
        print("[BeyondTen/B42] Detailed Skill Tooltips compatibility installed")
    end
    return true
end

local function onTick()
    -- This also catches a developer Reload Lua after DST has redefined its
    -- wrapper.  The DST base pointer is already protected, so the small window
    -- before this tick cannot recurse.
    if not Compat._dstDetected and type(rawget(_G, "DST")) ~= "table" then return end
    if ISSkillProgressBar and ISSkillProgressBar.updateTooltip ~= Compat._tooltipWrapper then
        Compat.Ensure()
    end
end

-- If this file itself is evaluated after DST during Reload Lua, restore the
-- final wrapper immediately instead of waiting for the next engine tick.
Compat.Ensure()

if not BT._dstCompatibilityEventsInstalled then
    BT._dstCompatibilityEventsInstalled = true
    Events.OnGameStart.Add(Compat.Ensure)
    Events.OnTick.Add(onTick)
end
