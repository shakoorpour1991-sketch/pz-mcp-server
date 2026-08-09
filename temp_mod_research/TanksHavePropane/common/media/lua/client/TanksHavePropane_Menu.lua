TanksHavePropaneMenu = {}

local function log(msg)
    print("[TanksHavePropane_Menu] " .. tostring(msg))
end

-- Sprites des gros réservoirs de propane (Fossoil & Gas2Go)
TanksHavePropaneMenu.PropaneTankSprites = {
    ["industry_02_66"] = true,
    ["industry_02_67"] = true,
}

-- Sprites des petites bonbonnes de propane industrielles
TanksHavePropaneMenu.SmallIndustrialTankSprites = {
    ["industry_03_6"] = true,
    ["industry_03_7"] = true,
    ["industry_03_14"] = true,
    ["industry_03_15"] = true,
    ["industry_03_22"] = true,
    ["industry_03_23"] = true,
    ["industry_03_24"] = true,
    ["industry_03_25"] = true,
    ["industry_03_26"] = true,
    ["industry_03_27"] = true,
    ["industry_03_30"] = true,
    ["industry_03_31"] = true,
    ["industry_03_64"] = true,
    ["industry_03_65"] = true,
    ["industry_03_66"] = true,
    ["industry_03_67"] = true,
    ["industry_03_68"] = true,
    ["industry_03_69"] = true,
    ["industry_03_70"] = true,
    ["industry_03_71"] = true,
    ["industry_03_105"] = true,
    ["industry_03_107"] = true,
    ["industry_03_109"] = true,
    ["industry_03_110"] = true,
    ["industry_03_112"] = true,
    ["industry_03_113"] = true,
    ["industry_03_114"] = true,
    ["industry_03_115"] = true,
}

TanksHavePropaneMenu.isPropaneStorageTank = function(obj)
    local sprite = obj:getSprite()
    if not sprite then return false end
    local spriteName = sprite:getName()
    if not spriteName then return false end
    local result = TanksHavePropaneMenu.PropaneTankSprites[spriteName] == true
    if result then
        log("isPropaneStorageTank: Found propane storage tank with sprite '" .. spriteName .. "'")
    end
    return result
end

-- Vérifie si un objet est une petite bonbonne de propane industrielle
TanksHavePropaneMenu.isSmallIndustrialTank = function(obj)
    local sprite = obj:getSprite()
    if not sprite then return false end
    local spriteName = sprite:getName()
    if not spriteName then return false end
    local result = TanksHavePropaneMenu.SmallIndustrialTankSprites[spriteName] == true
    if result then
        log("isSmallIndustrialTank: Found small industrial tank with sprite '" .. spriteName .. "'")
    end
    return result
end

-- Vérifie si un objet est une pompe à essence avec du carburant
TanksHavePropaneMenu.isGasPump = function(obj)
    if not obj.getPipedFuelAmount then return false end
    local fuel = obj:getPipedFuelAmount()
    local result = fuel > 0
    if result then
        log("isGasPump: Found gas pump with fuel=" .. tostring(fuel))
    end
    return result
end

-- Cherche une source de propane (citerne ou pompe si autorisé) dans un rayon
TanksHavePropaneMenu.findNearbyPropaneSource = function(square, radius)
    local allowGasPumps = SandboxVars.TanksHavePropane and SandboxVars.TanksHavePropane.AllowGasPumps or false
    local allowSmallIndustrial = SandboxVars.TanksHavePropane and SandboxVars.TanksHavePropane.AllowSmallIndustrialTanks or false
    local px = square:getX()
    local py = square:getY()
    local pz = square:getZ()

    log("findNearbyPropaneSource: Searching radius=" .. tostring(radius) .. " around (" .. tostring(px) .. "," .. tostring(py) .. "," .. tostring(pz) .. ") allowGasPumps=" .. tostring(allowGasPumps))

    for dx = -radius, radius do
        for dy = -radius, radius do
            local sq = getCell():getGridSquare(px + dx, py + dy, pz)
            if sq then
                local objects = sq:getObjects()
                for i = 0, objects:size() - 1 do
                    local obj = objects:get(i)
                    if TanksHavePropaneMenu.isPropaneStorageTank(obj) then
                        log("findNearbyPropaneSource: Found propane storage tank at (" .. tostring(px + dx) .. "," .. tostring(py + dy) .. ")")
                        return obj
                    end
                    if allowSmallIndustrial and TanksHavePropaneMenu.isSmallIndustrialTank(obj) then
                        log("findNearbyPropaneSource: Found small industrial tank at (" .. tostring(px + dx) .. "," .. tostring(py + dy) .. ")")
                        return obj
                    end
                    if allowGasPumps and TanksHavePropaneMenu.isGasPump(obj) then
                        log("findNearbyPropaneSource: Found gas pump at (" .. tostring(px + dx) .. "," .. tostring(py + dy) .. ")")
                        return obj
                    end
                end
            end
        end
    end

    log("findNearbyPropaneSource: No propane source found within radius=" .. tostring(radius))
    return nil
end

-- Retourne le rayon de recherche configuré dans les sandbox options
TanksHavePropaneMenu.getSearchRadius = function()
    if SandboxVars.TanksHavePropane and SandboxVars.TanksHavePropane.SearchRadius then
        return SandboxVars.TanksHavePropane.SearchRadius
    end
    return 2
end

-- Vérifie si un item est un propane/blowtorch non plein
TanksHavePropaneMenu.checkItem = function(invItem)
    if not invItem then return false, false end
    local typeLower = string.lower(invItem:getFullType())
    local isFull = false

    local deltaInfo = ""
    if invItem.getUsedDelta then
        deltaInfo = " UsedDelta=" .. tostring(invItem:getUsedDelta())
        if invItem:getUsedDelta() >= 0.99 then
            isFull = true
        end
    end
    if invItem.getCurrentUses and invItem.getMaxUses then
        deltaInfo = deltaInfo .. " Uses=" .. tostring(invItem:getCurrentUses()) .. "/" .. tostring(invItem:getMaxUses())
        if invItem:getCurrentUses() >= invItem:getMaxUses() then
            isFull = true
        end
    end

    if isFull then
        log("checkItem: Item '" .. typeLower .. "' is already full -" .. deltaInfo)
        return false, false
    end

    if string.find(typeLower, "propanetank") then
        log("checkItem: Valid propane tank found - '" .. typeLower .. "'" .. deltaInfo)
        return true, false
    elseif string.find(typeLower, "blowtorch") then
        log("checkItem: Valid blowtorch found - '" .. typeLower .. "'" .. deltaInfo)
        return true, true
    end
    return false, false
end

-- Cherche le IsoWorldInventoryObject correspondant à un item sur une case
TanksHavePropaneMenu.findWorldItem = function(square, item)
    if not square then return nil end
    local objects = square:getObjects()
    for i = 0, objects:size() - 1 do
        local obj = objects:get(i)
        if instanceof(obj, "IsoWorldInventoryObject") and obj:getItem() == item then
            log("findWorldItem: Found world item on square (" .. tostring(square:getX()) .. "," .. tostring(square:getY()) .. ")")
            return obj
        end
    end
    return nil
end

-- Ajoute l'option de remplissage au menu contextuel
TanksHavePropaneMenu.addFillOption = function(context, worldItem, playerObj, source, isTorch)
    local label = isTorch and getText("ContextMenu_FillTorchFromStorageTank") or getText("ContextMenu_TakePropaneFromStorageTank")
    local option = context:addOptionOnTop(label, worldItem, TanksHavePropaneMenu.OnFillAction, playerObj, source, isTorch)
    option.iconTexture = getTexture("media/textures/propane_fill.png")
    log("addFillOption: Added menu option '" .. label .. "' isTorch=" .. tostring(isTorch))
end

-- Menu contextuel monde (clic droit au sol)
TanksHavePropaneMenu.OnWorldContextMenu = function(player, context, worldobjects)
    local playerObj = getSpecificPlayer(player)
    if not playerObj then return end
    local radius = TanksHavePropaneMenu.getSearchRadius()

    log("OnWorldContextMenu: player='" .. tostring(playerObj:getUsername()) .. "' radius=" .. tostring(radius) .. " worldobjects=" .. tostring(#worldobjects))

    for _, obj in ipairs(worldobjects) do
        if instanceof(obj, "IsoWorldInventoryObject") then
            local invItem = obj:getItem()
            log("OnWorldContextMenu: Checking world item '" .. tostring(invItem and invItem:getFullType() or "nil") .. "'")
            local match, isTorch = TanksHavePropaneMenu.checkItem(invItem)
            if match then
                local source = TanksHavePropaneMenu.findNearbyPropaneSource(obj:getSquare(), radius)
                if source then
                    TanksHavePropaneMenu.addFillOption(context, obj, playerObj, source, isTorch)
                end
            end
        end
    end
end

-- Menu contextuel inventaire (fenêtre de loot)
TanksHavePropaneMenu.OnInventoryContextMenu = function(player, context, items)
    local playerObj = getSpecificPlayer(player)
    if not playerObj then return end
    local radius = TanksHavePropaneMenu.getSearchRadius()

    log("OnInventoryContextMenu: player='" .. tostring(playerObj:getUsername()) .. "' radius=" .. tostring(radius) .. " items=" .. tostring(#items))

    for i = 1, #items do
        local itemStack = items[i]
        local item = nil

        -- Gère les items individuels et les stacks
        if instanceof(itemStack, "InventoryItem") then
            item = itemStack
        elseif type(itemStack) == "table" and itemStack.items then
            item = itemStack.items[1]
        end

        if item and instanceof(item, "InventoryItem") then
            local match, isTorch = TanksHavePropaneMenu.checkItem(item)
            if match then
                -- Vérifie que l'item est posé au sol et pas dans l'inventaire du joueur
                local container = item:getContainer()
                if container and container ~= playerObj:getInventory() then
                    log("OnInventoryContextMenu: Item is on ground, searching for world item...")
                    -- Cherche la case au sol qui contient cet item
                    local playerSquare = playerObj:getCurrentSquare()
                    if playerSquare then
                        for dx = -2, 2 do
                            for dy = -2, 2 do
                                local sq = getCell():getGridSquare(playerSquare:getX() + dx, playerSquare:getY() + dy, playerSquare:getZ())
                                if sq then
                                    local worldItem = TanksHavePropaneMenu.findWorldItem(sq, item)
                                    if worldItem then
                                        local source = TanksHavePropaneMenu.findNearbyPropaneSource(sq, radius)
                                        if source then
                                            TanksHavePropaneMenu.addFillOption(context, worldItem, playerObj, source, isTorch)
                                        end
                                        return
                                    end
                                end
                            end
                        end
                        log("OnInventoryContextMenu: Could not find world item for ground item")
                    end
                else
                    log("OnInventoryContextMenu: Item is in player inventory, skipping")
                end
            end
        end
    end
end

TanksHavePropaneMenu.OnFillAction = function(worldItem, playerObj, source, isTorch)
    log("OnFillAction: Starting fill - item='" .. tostring(worldItem:getItem():getFullType()) .. "'"
        .. " ID=" .. tostring(worldItem:getItem():getID())
        .. " isTorch=" .. tostring(isTorch)
        .. " player='" .. tostring(playerObj:getUsername()) .. "'"
        .. " isMP=" .. tostring(isClient()))

    -- Calcule un point à ~0.5 case de la bonbonne, côté joueur
    local sq = worldItem:getSquare()
    local targetX = sq:getX() + 0.5
    local targetY = sq:getY() + 0.5
    local targetZ = sq:getZ()
    local playerX = playerObj:getX()
    local playerY = playerObj:getY()

    local dx = playerX - targetX
    local dy = playerY - targetY
    local dist = math.sqrt(dx * dx + dy * dy)
    if dist > 0.01 then
        -- Se positionner à 0.5 case de la bonbonne, côté joueur
        local offsetX = (dx / dist) * 0.5
        local offsetY = (dy / dist) * 0.5
        targetX = targetX + offsetX
        targetY = targetY + offsetY
    end

    log("OnFillAction: Pathfinding to (" .. tostring(targetX) .. "," .. tostring(targetY) .. "," .. tostring(targetZ) .. ")")

    ISTimedActionQueue.add(ISPathFindAction:pathToLocationF(playerObj, targetX, targetY, targetZ))
    ISTimedActionQueue.add(TanksHavePropane_Action:new(source, worldItem, worldItem:getItem(), playerObj, isTorch))
end

Events.OnFillWorldObjectContextMenu.Add(TanksHavePropaneMenu.OnWorldContextMenu)
Events.OnPreFillInventoryObjectContextMenu.Add(TanksHavePropaneMenu.OnInventoryContextMenu)
log("Client menu module loaded - context menu handlers registered (isMP=" .. tostring(isClient()) .. ")")
