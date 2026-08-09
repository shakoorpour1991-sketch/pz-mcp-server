require "TimedActions/ISBaseTimedAction"

TanksHavePropane_Action = ISBaseTimedAction:derive("TanksHavePropane_Action")

local function log(msg)
    print("[TanksHavePropane_Action] " .. tostring(msg))
end

-- Envoie la mise à jour au serveur pour synchronisation MP
function TanksHavePropane_Action:syncToServer(newDelta, newUses)
    if not isClient() then
        log("syncToServer: Single-player mode, no sync needed")
        return
    end

    local sq = self.worldItem and self.worldItem:getSquare()
    if not sq then
        log("syncToServer: ERROR - worldItem or square is nil, cannot sync")
        return
    end

    local args = {
        x = sq:getX(),
        y = sq:getY(),
        z = sq:getZ(),
        itemID = self.item:getID(),
        itemType = self.item:getFullType(),
        newDelta = newDelta,
        newUses = newUses,
    }

    log("syncToServer: Sending fillItem command to server - pos=(" .. tostring(args.x) .. "," .. tostring(args.y) .. "," .. tostring(args.z) .. ")"
        .. " itemID=" .. tostring(args.itemID)
        .. " itemType=" .. tostring(args.itemType)
        .. " newDelta=" .. tostring(args.newDelta)
        .. " newUses=" .. tostring(args.newUses))

    sendClientCommand(self.character, "TanksHavePropane", "fillItem", args)
    log("syncToServer: Command sent successfully")
end

function TanksHavePropane_Action:isValid()
    if not self.item then
        log("isValid: FAIL - item is nil")
        return false
    end
    if not self.tank then
        log("isValid: FAIL - tank is nil")
        return false
    end
    if not self.worldItem or not self.worldItem:getSquare() then
        log("isValid: FAIL - worldItem or its square is nil")
        return false
    end

    local sq = self.worldItem:getSquare()

    -- Vérifie que la source de propane est toujours à proximité du worldItem
    local tankSq = self.tank:getSquare()
    if not tankSq then
        log("isValid: FAIL - tank square is nil")
        return false
    end
    local radius = 10
    if SandboxVars and SandboxVars.TanksHavePropane and SandboxVars.TanksHavePropane.SearchRadius then
        radius = SandboxVars.TanksHavePropane.SearchRadius
    end
    if math.abs(sq:getX() - tankSq:getX()) > radius or math.abs(sq:getY() - tankSq:getY()) > radius then
        log("isValid: FAIL - tank out of range (radius=" .. tostring(radius) .. ")")
        return false
    end

    -- Vérifie que le joueur est à proximité de la bonbonne (max 10 cases)
    local playerSq = self.character:getCurrentSquare()
    if not playerSq then
        log("isValid: FAIL - player square is nil")
        return false
    end
    if math.abs(sq:getX() - playerSq:getX()) > 10 or math.abs(sq:getY() - playerSq:getY()) > 10 then
        log("isValid: FAIL - player too far from item")
        return false
    end

    -- Vérifie que l'item est bien un propane tank ou blowtorch
    local typeLower = string.lower(self.item:getFullType())
    if not string.find(typeLower, "propanetank") and not string.find(typeLower, "blowtorch") then
        log("isValid: FAIL - item type '" .. typeLower .. "' is not propane tank or blowtorch")
        return false
    end

    -- Vérifie que l'item n'est pas déjà plein
    if self.item.getUsedDelta and self.item:getUsedDelta() >= 0.99 then
        log("isValid: FAIL - item already full (UsedDelta=" .. tostring(self.item:getUsedDelta()) .. ")")
        return false
    end
    if self.item.getCurrentUses and self.item.getMaxUses and self.item:getCurrentUses() >= self.item:getMaxUses() then
        log("isValid: FAIL - item already full (CurrentUses=" .. tostring(self.item:getCurrentUses()) .. "/" .. tostring(self.item:getMaxUses()) .. ")")
        return false
    end

    return true
end

function TanksHavePropane_Action:waitToStart()
    self.character:faceLocation(self.targetX, self.targetY)
    return self.character:shouldBeTurning()
end

function TanksHavePropane_Action:update()
    local progress = self:getJobDelta()
    self.item:setJobDelta(progress)
    self.character:faceLocation(self.targetX, self.targetY)
    self.character:setMetabolicTarget(Metabolics.LightWork)

    -- Remplissage progressif (client-side visual feedback)
    local newDelta = self.startDelta + (1.0 - self.startDelta) * progress
    if self.item.setUsedDelta then
        self.item:setUsedDelta(newDelta)
    end
    local newUses = nil
    if self.item.setCurrentUses and self.item.getMaxUses then
        newUses = math.floor(newDelta * self.item:getMaxUses())
        self.item:setCurrentUses(newUses)
    end

    -- Sync incrémental en MP : envoie au serveur tous les 20% de progression
    if isClient() then
        local step = math.floor(progress * 5)
        if step > (self.lastSyncStep or 0) then
            self.lastSyncStep = step
            self:syncToServer(newDelta, newUses)
        end
    end
end

-- Surcharge create() pour lire le vrai delta AVANT que le timer Java soit créé
function TanksHavePropane_Action:create()
    self.startDelta = 0
    if self.item.getUsedDelta then
        self.startDelta = self.item:getUsedDelta()
    end
    if self.startDelta == 0 and self.item.getCurrentUses and self.item.getMaxUses then
        local maxUses = self.item:getMaxUses()
        if maxUses > 0 then
            self.startDelta = self.item:getCurrentUses() / maxUses
        end
    end

    local fillRatio = 1.0 - self.startDelta
    local maxDuration = self.isTorch and 80 or 150
    self.maxTime = math.max(10, math.floor(maxDuration * fillRatio))

    log("create: item='" .. tostring(self.item:getFullType()) .. "' ID=" .. tostring(self.item:getID())
        .. " startDelta=" .. tostring(self.startDelta)
        .. " fillRatio=" .. tostring(fillRatio)
        .. " maxTime=" .. tostring(self.maxTime)
        .. " isTorch=" .. tostring(self.isTorch)
        .. " isMP=" .. tostring(isClient()))

    self.lastSyncStep = 0

    -- Appeler le parent qui va créer le timer avec le bon maxTime
    ISBaseTimedAction.create(self)
end

function TanksHavePropane_Action:start()
    log("start: Beginning fill action for item='" .. tostring(self.item:getFullType()) .. "' ID=" .. tostring(self.item:getID())
        .. " player='" .. tostring(self.character:getUsername()) .. "'")
    self:setActionAnim("FillPropaneTank")
    self.item:setJobType(getText("ContextMenu_TakePropaneFromTank"))
    self.item:setJobDelta(0.0)
end

function TanksHavePropane_Action:stop()
    -- Sauvegarder le niveau atteint
    local progress = self:getJobDelta()
    local newDelta = self.startDelta + (1.0 - self.startDelta) * progress

    log("stop: Action interrupted at progress=" .. tostring(progress)
        .. " newDelta=" .. tostring(newDelta)
        .. " item='" .. tostring(self.item:getFullType()) .. "' ID=" .. tostring(self.item:getID()))

    if self.item.setUsedDelta then
        self.item:setUsedDelta(newDelta)
    end

    local newUses = nil
    if self.item.setCurrentUses and self.item.getMaxUses then
        newUses = math.floor(newDelta * self.item:getMaxUses())
        self.item:setCurrentUses(newUses)
    end

    self.item:setJobDelta(0.0)

    -- Synchroniser avec le serveur en MP
    self:syncToServer(newDelta, newUses)

    ISBaseTimedAction.stop(self)
    log("stop: Action stopped and synced")
end

function TanksHavePropane_Action:perform()
    self.item:setJobDelta(0.0)

    -- Remplit l'item au maximum
    if self.item.setUsedDelta then self.item:setUsedDelta(1.0) end

    local maxUses = 1
    if self.item.getMaxUses then maxUses = self.item:getMaxUses() end
    if maxUses < 1 then maxUses = 1 end
    if self.item.setCurrentUses then self.item:setCurrentUses(maxUses) end

    log("perform: Action completed - item='" .. tostring(self.item:getFullType()) .. "' ID=" .. tostring(self.item:getID())
        .. " UsedDelta=1.0 CurrentUses=" .. tostring(maxUses)
        .. " player='" .. tostring(self.character:getUsername()) .. "'")

    -- Synchroniser avec le serveur en MP
    self:syncToServer(1.0, maxUses)

    ISBaseTimedAction.perform(self)
    log("perform: Action performed and synced")
end

function TanksHavePropane_Action:new(tank, worldItem, item, character, isTorch)
    local o = {}
    setmetatable(o, self)
    self.__index = self
    o.character = character
    o.tank = tank
    o.worldItem = worldItem
    o.item = item
    o.isTorch = isTorch
    o.startDelta = 0
    o.stopOnWalk = true
    o.stopOnRun = true

    -- Stocker les coordonnées cibles
    local sq = worldItem:getSquare()
    o.targetX = sq:getX()
    o.targetY = sq:getY()

    -- Durée par défaut (sera recalculée dans create() avec le vrai delta)
    local maxDuration = isTorch and 80 or 150
    o.maxTime = maxDuration

    log("new: Created action - item='" .. tostring(item:getFullType()) .. "' ID=" .. tostring(item:getID())
        .. " isTorch=" .. tostring(isTorch)
        .. " pos=(" .. tostring(sq:getX()) .. "," .. tostring(sq:getY()) .. "," .. tostring(sq:getZ()) .. ")"
        .. " player='" .. tostring(character:getUsername()) .. "'")

    return o
end
