veg = {};


function veg.preCalculateErosion()
local overlayMap = {}
overlayMap.VERSION = 1
ErosionSpeedValues = {20, 50, 100, 200, 500}
TimeSinceApoValues = {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360}
CurrentErosionPercentage = 0
CurrentWorldAgeDays = 0


CurrentWorldAgeDays = getGameTime():getWorldAgeHours() / 24
local sandboxOptions = getSandboxOptions()
local timeSpent = CurrentWorldAgeDays + TimeSinceApoValues[sandboxOptions:getTimeSinceApo()]
CurrentErosionPercentage = (timeSpent/ErosionSpeedValues[sandboxOptions:getErosionSpeed()])*100
if CurrentErosionPercentage > 15 then
    
local texture_indoor = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23", "d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    
    local texture_woodindoor = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23"}

    
    local texture_streets = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23", "d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}

    local texture_sandwood = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23"}

local texture_roof1_array = {"d_streetcracks_1_96", "d_streetcracks_1_97","d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof2_array = {"d_streetcracks_1_96", "d_streetcracks_1_97","d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof3_array = {"d_streetcracks_1_96", "d_streetcracks_1_97","d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof4_array = {"d_streetcracks_1_96", "d_streetcracks_1_97","d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof5_array = {"d_streetcracks_1_96", "d_streetcracks_1_97","d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}

    --local texture_roof6_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    --local texture_roof7_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}

    local texture_roof8_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof9_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}

    local texture_roof10_array = {"vegetation_farm_01_40", "vegetation_farm_01_41", "vegetation_farm_01_42", "vegetation_farm_01_43", "vegetation_farm_01_44", "vegetation_farm_01_45", "vegetation_farm_01_46", "vegetation_farm_01_47"}

    local texture_roof11_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof13_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}
    local texture_roof14_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_100"}

    

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
    local indoor_tiles = {"recreational_sports_01_63","industry_railroad_05_46","fixtures_stairs_01_72","fixtures_stairs_01_73","fixtures_stairs_01_74","floors_rugs_01_21","floors_rugs_01_20","floors_rugs_01_17","floors_rugs_01_23","floors_rugs_01_22","floors_rugs_01_16","camping_01_24", "camping_01_25", "camping_01_38","camping_01_39", "construction_01_4","construction_01_5", "floors_exterior_natural_01_12", "floors_exterior_street_01_16", "floors_exterior_street_01_17", "floors_exterior_tilesandstone_01_2", "floors_exterior_tilesandstone_01_3", "floors_exterior_tilesandstone_01_5", "floors_exterior_tilesandstone_01_7", "floors_rugs_01_24", "floors_rugs_01_25", "floors_rugs_01_32", "floors_rugs_01_33","floors_rugs_01_40", "floors_rugs_01_41", "furniture_seating_indoor_02_60", "furniture_seating_indoor_02_61", "furniture_seating_indoor_02_62", "furniture_seating_indoor_02_63", "location_shop_zippee_01_7", "floors_exterior_tilesandstone_01_1", "floors_exterior_tilesandstone_01_6", "floors_exterior_tilesandstone_01_0", "floors_exterior_tilesandstone_01_4", "recreational_sports_01_22" , "recreational_sports_01_23", "floors_burnt_01_0", "floors_burnt_01_1"}

    local indoor_sandwoodtiles = {"floors_interior_tilesandwood_01_19", "floors_interior_tilesandwood_01_13", "floors_interior_tilesandwood_01_23", "floors_interior_tilesandwood_01_10","floors_interior_tilesandwood_01_11", "floors_interior_tilesandwood_01_16", "floors_interior_tilesandwood_01_2", "floors_interior_tilesandwood_01_12", "floors_interior_tilesandwood_01_17", "floors_interior_tilesandwood_01_18", "floors_interior_tilesandwood_01_3", "floors_interior_tilesandwood_01_49", "floors_interior_tilesandwood_01_5", "floors_interior_tilesandwood_01_51", "floors_interior_tilesandwood_01_6", "floors_interior_tilesandwood_01_8", "floors_interior_tilesandwood_01_28", "floors_interior_tilesandwood_01_21", "floors_interior_tilesandwood_01_29", "floors_interior_tilesandwood_01_24", "floors_interior_tilesandwood_01_0", "floors_interior_tilesandwood_01_50", "floors_interior_tilesandwood_01_48", "floors_interior_tilesandwood_01_14", "floors_interior_tilesandwood_01_47", "floors_interior_tilesandwood_01_22","location_restaurant_pileocrepe_01_14", "floors_interior_tilesandwood_01_9","location_restaurant_diner_01_40","location_restaurant_diner_01_41","location_restaurant_bar_01_24","location_restaurant_spiffos_01_38", "location_restaurant_pizzawhirled_01_16","location_shop_mall_01_38","location_shop_mall_01_35","location_shop_mall_01_34","location_shop_mall_01_22", "location_shop_mall_01_23","location_shop_mall_01_21", "floors_interior_tilesandwood_01_31"}



      
     local indoor_woodtiles = {"floors_interior_carpet_01_4", "floors_interior_carpet_01_10", "floors_interior_carpet_01_11", "floors_interior_carpet_01_12", "floors_interior_carpet_01_13", "floors_interior_carpet_01_2", "floors_interior_carpet_01_3", "floors_interior_carpet_01_5","floors_interior_carpet_01_6", "floors_interior_carpet_01_9", "floors_interior_carpet_01_7", "floors_interior_carpet_01_8" ,"floor_carpet_motif_13", "floor_carpet_motif_8", "floor_carpet_motif_2", "floor_carpet_motif_12", "floor_carpet_motif_11", "floor_carpet_motif_7", "floors_interior_carpet_01_1", "floors_interior_tilesandwood_01_40","floors_interior_tilesandwood_01_46", "floors_interior_tilesandwood_01_42", "floors_interior_tilesandwood_01_44","floors_interior_tilesandwood_01_41", "floors_interior_tilesandwood_01_52", "floors_interior_tilesandwood_01_43", "floors_interior_tilesandwood_01_45", "carpentry_02_12", "carpentry_02_13","carpentry_02_14", "carpentry_02_62", "floors_interior_tilesandwood_01_43"}


     local exterior_indoor_streettiles = {"blends_street_01_55", "blends_street_01_0", "blends_street_01_16", "blends_street_01_21", "blends_street_01_5", "blends_street_01_69", "blends_street_01_71", "blends_street_01_85", "blends_street_01_32", "blends_street_01_38", "blends_street_01_48", "blends_street_01_64", "blends_street_01_80", "blends_street_01_37", "blends_street_01_39", "blends_street_01_53", "blends_street_01_54", "blends_street_01_70", "blends_street_01_87", "blends_street_01_86", "blends_street_01_96", "floors_exterior_street_01_0", "floors_exterior_street_01_1", "floors_exterior_street_01_2", "floors_exterior_street_01_3", "floors_exterior_street_01_4", "floors_exterior_street_01_5", "floors_exterior_street_01_6", "floors_exterior_street_01_7", "floors_exterior_street_01_8", "floors_exterior_street_01_9", "floors_exterior_street_01_10", "floors_exterior_street_01_11", "floors_exterior_street_01_12", "floors_exterior_street_01_13", "floors_exterior_street_01_14", "floors_exterior_street_01_15"}

local tiles_roof1 = {"roofs_01_1", "roofs_02_1", "roofs_05_1", "roofs_01_2", "roofs_02_2", "roofs_05_2", "roofs_01_112", "roofs_02_112", "roofs_05_112", "roofs_01_113", "roofs_02_113", "roofs_05_113", "roofs_01_114", "roofs_02_114", "roofs_05_114", "roofs_01_115", "roofs_02_115", "roofs_05_115"}
    local tiles_roof2 = {"roofs_01_0", "roofs_02_0", "roofs_05_0"}
    local tiles_roof5 = {"roofs_01_3", "roofs_02_3", "roofs_05_3"}
    local tiles_roof6 = {"roofs_01_4", "roofs_02_4", "roofs_05_4"}
    local tiles_roof7 = {"roofs_01_5", "roofs_02_5", "roofs_05_5", "roofs_01_116", "roofs_02_116", "roofs_05_116", "roofs_01_117", "roofs_02_117", "roofs_05_117", "roofs_01_118", "roofs_02_118", "roofs_05_118", "roofs_01_119", "roofs_02_119", "roofs_05_119"}
    --local tiles_roof11 = {"roofs_01_6", "roofs_02_6", "roofs_05_6"}
    --local tiles_roof13 = {"roofs_01_7", "roofs_02_7", "roofs_05_7"}

    local tiles_roof15 = {"roofs_01_22", "roofs_02_22", "roofs_05_22"}
    local tiles_roof16 = {"roofs_01_23", "roofs_02_23", "roofs_05_23"}

    local tiles_roof19 = {"roofs_01_90", "roofs_02_90", "roofs_05_90", "roofs_01_91", "roofs_02_91", "roofs_05_91", "roofs_01_92", "roofs_02_92", "roofs_05_92", "roofs_01_93", "roofs_02_93", "roofs_05_93"}




    for k,v in ipairs(indoor_tiles) do
        overlayMap[v] = {{ name = "other", chance = 8, usage = "", tiles = texture_indoor}}
    end
    for k,v in ipairs(indoor_woodtiles) do
        overlayMap[v] = {{ name = "other", chance = 7, usage = "", tiles = texture_woodindoor}}
    end
    for k,v in ipairs(exterior_indoor_streettiles) do
        overlayMap[v] = {{ name = "other", chance = 40, usage = "", tiles = texture_streets}}
    end
    for k,v in ipairs(indoor_sandwoodtiles) do
        overlayMap[v] = {{ name = "other", chance = 7, usage = "", tiles = texture_sandwood}}
    end
    for k,v in ipairs(tiles_roof1) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof1_array}}
    end
    for k,v in ipairs(tiles_roof2) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof2_array}}
    end
    for k,v in ipairs(tiles_roof5) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof3_array}}
    end
    for k,v in ipairs(tiles_roof6) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof4_array}}
    end
    for k,v in ipairs(tiles_roof7) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof5_array}}
    end        
    --for k,v in ipairs(tiles_roof11) do
        --overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof6_array}}
    --end
    --for k,v in ipairs(tiles_roof13) do
        --overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof7_array}}
    --end
    for k,v in ipairs(tiles_roof15) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof13_array}}
    end
    for k,v in ipairs(tiles_roof16) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof14_array}}
    end
    for k,v in ipairs(tiles_roof19) do
        overlayMap[v] = {{ name = "other", chance = 20, usage = "", tiles = texture_roof10_array}}
    end
end
if not TILEZED then
    getTileOverlays():addOverlays(overlayMap)
end


return overlayMap
end
--Events.LoadChunk.Add(veg.preCalculateErosion)
Events.OnGameStart.Add(veg.preCalculateErosion)
Events.OnNewGame.Add(veg.preCalculateErosion)
--Events.OnLoadMapZones.Add(veg.preCalculateErosion)

Events.EveryOneMinute.Add(veg.preCalculateErosion)





--Events.OnGameTimeLoaded.Add(rust.preCalculateErosion)
--Events.Everydays.Add(rust.preCalculateErosion)
--Events.OnGameStart.Add(veg.preCalculateErosion)
--Events.OnNewGame.Add(veg.preCalculateErosion)
--Events.OnCreatePlayer.Add(rust.preCalculateErosion)
--Events.OnServerStarted.Add(rust.preCalculateErosion)
--Events.OnDusk.Add(rust.preCalculateErosion)
--Events.OnDawn.Add(rust.preCalculateErosion)
--Events.OnPostDistributionMerge.Add(rust.preCalculateErosion)
--Events.OnLoadMapZones.Add(rust.preCalculateErosion)
--Events.OnLoadedMapZones.Add(rust.preCalculateErosion)
--Events.LoadChunk.Add(veg.preCalculateErosion)
--Events.LoadGridsquare.Add(rust.preCalculateErosion)



