rust = {};
ErosionSpeedValues = {20, 50, 100, 200, 500}
TimeSinceApoValues = {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360}
CurrentErosionPercentage = 0
CurrentWorldAgeDays = 0


--- Iterate vehicles using the Java Iterator pattern. In 42.17,
--- getCell():getVehicles() returns Set<BaseVehicle> instead of
--- ArrayList<BaseVehicle>, so indexed :get(i) access no longer works.
--- Iterator is the proper way to traverse both Set and List.
local function forEachVehicle(vehicles, fn)
    if not vehicles or not vehicles.iterator then return end

    local ok, iter = pcall(function() return vehicles:iterator() end)
    if not ok or not iter then return end

    while true do
        local hasNextOk, hasNext = pcall(function() return iter:hasNext() end)
        if not hasNextOk or not hasNext then break end

        local nextOk, veh = pcall(function() return iter:next() end)
        if nextOk and veh then
            pcall(fn, veh)
        end
    end
end


function rust.preCalculateErosion()
    CurrentWorldAgeDays = getGameTime():getWorldAgeHours() / 24
    local sandboxOptions = getSandboxOptions()
    local timeSinceApo = TimeSinceApoValues[sandboxOptions:getTimeSinceApo()] or 0
    local erosionSpeed = ErosionSpeedValues[sandboxOptions:getErosionSpeed()] or 100
    local timeSpent = CurrentWorldAgeDays + timeSinceApo
    CurrentErosionPercentage = (timeSpent / erosionSpeed) * 100

    if CurrentErosionPercentage > 90 then
        local cell = getCell()
        if not cell then return end

        forEachVehicle(cell:getVehicles(), function(veh)
            if veh.setRust then
                veh:setRust(1)
            end
        end)
    end
end


--Events.OnGameTimeLoaded.Add(rust.preCalculateErosion)
--Events.Everydays.Add(rust.preCalculateErosion)
--Events.OnGameStart.Add(rust.preCalculateErosion)
--Events.OnNewGame.Add(rust.preCalculateErosion)
--Events.OnCreatePlayer.Add(rust.preCalculateErosion)
--Events.OnServerStarted.Add(rust.preCalculateErosion)
--Events.OnDusk.Add(rust.preCalculateErosion)
--Events.OnDawn.Add(rust.preCalculateErosion)
--Events.OnPostDistributionMerge.Add(rust.preCalculateErosion)
--Events.OnLoadMapZones.Add(rust.preCalculateErosion)
--Events.OnLoadedMapZones.Add(rust.preCalculateErosion)
Events.LoadChunk.Add(rust.preCalculateErosion)
