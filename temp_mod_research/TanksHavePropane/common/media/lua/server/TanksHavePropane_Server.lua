if isClient() then return end

TanksHavePropane_Server = {}

local function log(msg)
    print("[TanksHavePropane_Server] " .. tostring(msg))
end

-- Apply fill values to an item safely (works for both ground and inventory items)
local function applyFillToItem(item, newDelta, newUses)
    local ok, err

    if newDelta and item.setUsedDelta then
        ok, err = pcall(function() item:setUsedDelta(newDelta) end)
        if ok then
            log("  UsedDelta set to " .. tostring(newDelta))
        else
            log("  ERROR setting UsedDelta: " .. tostring(err))
        end
    end

    if newUses and item.setCurrentUses then
        ok, err = pcall(function() item:setCurrentUses(newUses) end)
        if ok then
            log("  CurrentUses set to " .. tostring(newUses))
        else
            log("  ERROR setting CurrentUses: " .. tostring(err))
        end
    end

    -- Sync to clients
    ok, err = pcall(function()
        if item.transmitModData then
            item:transmitModData()
        end
        sendItemStats(item)
    end)
    if ok then
        log("  Item synced to clients.")
    else
        log("  ERROR syncing item: " .. tostring(err))
    end
end

TanksHavePropane_Server.onClientCommand = function(module, command, player, args)
    if module ~= "TanksHavePropane" then return end

    local playerName = player and player:getUsername() or "unknown"
    log("Received command='" .. tostring(command) .. "' from player='" .. playerName .. "'")

    if command == "fillItem" then
        TanksHavePropane_Server.handleFillItem(player, args)
    else
        log("WARNING: Unknown command '" .. tostring(command) .. "'")
    end
end

TanksHavePropane_Server.handleFillItem = function(player, args)
    if not args then
        log("ERROR: No args received for fillItem")
        return
    end

    local x = args.x
    local y = args.y
    local z = args.z
    local itemID = args.itemID
    local newDelta = args.newDelta
    local newUses = args.newUses
    local itemType = args.itemType
    local playerName = player and player:getUsername() or "unknown"

    log("fillItem from '" .. playerName .. "': pos=(" .. tostring(x) .. "," .. tostring(y) .. "," .. tostring(z) .. ")"
        .. " itemID=" .. tostring(itemID)
        .. " itemType=" .. tostring(itemType)
        .. " newDelta=" .. tostring(newDelta)
        .. " newUses=" .. tostring(newUses))

    if not x or not y or not z then
        log("ERROR: Missing coordinates")
        return
    end
    if not itemID then
        log("ERROR: Missing itemID")
        return
    end
    if not newDelta then
        log("ERROR: Missing newDelta")
        return
    end
    if newDelta < 0 or newDelta > 1.0 then
        log("ERROR: newDelta out of range: " .. tostring(newDelta))
        return
    end

    -- 1) Search on ground
    local square = getCell():getGridSquare(x, y, z)
    if square then
        local objects = square:getObjects()
        for i = 0, objects:size() - 1 do
            local obj = objects:get(i)
            if instanceof(obj, "IsoWorldInventoryObject") then
                local item = obj:getItem()
                if item and item:getID() == itemID then
                    log("  MATCH found on ground!")
                    applyFillToItem(item, newDelta, newUses)
                    return
                end
            end
        end
    end

    -- 2) Fallback: search in player inventory (player picked it up before sync arrived)
    if player then
        log("  Not on ground, checking player inventory...")
        local item = player:getInventory():getItemById(itemID)
        if item then
            log("  MATCH found in player inventory!")
            applyFillToItem(item, newDelta, newUses)
            return
        end
    end

    log("  Item ID=" .. tostring(itemID) .. " not found on ground or in inventory.")
end

Events.OnClientCommand.Add(TanksHavePropane_Server.onClientCommand)
log("Server module loaded - OnClientCommand handler registered")
