
veg = {};


function veg.preCalculateErosion()
local overlayMap = {}
overlayMap.VERSION = 1
ErosionSpeedValues = {20, 50, 100, 200, 500}
TimeSinceApoValues = {0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360}
CurrentErosionPercentage = 0
CurrentWorldAgeDays = 0


local texture_wallvinesW = {"f_wallvines_1_7","f_wallvines_1_13","f_wallvines_1_19","f_wallvines_1_12","f_wallvines_1_54","f_wallvines_1_55","f_wallvines_1_61","f_wallvines_1_60","f_wallvines_1_48","f_wallvines_1_49","f_wallvines_1_67","f_wallvines_1_66", "d_wallcracks_1_56", "d_wallcracks_1_47", "d_wallcracks_1_27", "d_wallcracks_1_28", "d_wallcracks_1_27", "d_wallcracks_1_28", "d_wallcracks_1_65", "d_wallcracks_1_45"}
    

    local texture_wallvinesN = {"f_wallvines_1_21","f_wallvines_1_20","f_wallvines_1_8","f_wallvines_1_15","f_wallvines_1_63","f_wallvines_1_62","f_wallvines_1_68","f_wallvines_1_56","f_wallvines_1_57","f_wallvines_1_69","f_wallvines_1_50","f_wallvines_1_51", "d_wallcracks_1_57", "d_wallcracks_1_32", "d_wallcracks_1_31", "d_wallcracks_1_68", "d_wallcracks_1_66", "d_wallcracks_1_58", "d_wallcracks_1_50", "d_wallcracks_1_67"}


    local texture_wallvinescW = {"f_wallvines_1_7","f_wallvines_1_13","f_wallvines_1_19","f_wallvines_1_12", "d_wallcracks_1_56", "d_wallcracks_1_47", "d_wallcracks_1_27", "d_wallcracks_1_28", "d_wallcracks_1_27", "d_wallcracks_1_28", "d_wallcracks_1_65", "d_wallcracks_1_45"}
    
    local texture_wallvinescN = {"f_wallvines_1_21","f_wallvines_1_20","f_wallvines_1_8","f_wallvines_1_15", "d_wallcracks_1_57", "d_wallcracks_1_32", "d_wallcracks_1_31", "d_wallcracks_1_68", "d_wallcracks_1_66", "d_wallcracks_1_58", "d_wallcracks_1_50", "d_wallcracks_1_67"}

local texture_indoor = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "d_streetcracks_1_0", "d_streetcracks_1_1", "d_streetcracks_1_2", "d_streetcracks_1_3", "d_streetcracks_1_4", "d_streetcracks_1_5", "d_streetcracks_1_6", "d_streetcracks_1_7", "crafting_ore_116", "crafting_ore_118", "crafting_ore_125", "crafting_ore_115", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23", "d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_streetcracks_1_9", "d_streetcracks_1_12", "d_streetcracks_1_14", "d_streetcracks_1_8", "d_streetcracks_1_10", "d_streetcracks_1_11", "d_streetcracks_1_13", "d_streetcracks_1_15", "d_streetcracks_1_16", "d_streetcracks_1_17", "d_streetcracks_1_18", "d_streetcracks_1_19", "d_streetcracks_1_20", "d_streetcracks_1_21", "d_streetcracks_1_22", "d_streetcracks_1_23", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}
    
    local texture_woodindoor = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23", "crafting_ore_116", "crafting_ore_118", "crafting_ore_125", "crafting_ore_115", "floors_overlay_wood_01_2", "floors_overlay_wood_01_4" , "floors_overlay_wood_01_42" , "floors_overlay_wood_01_10", "floors_overlay_wood_01_45" , "floors_overlay_wood_01_18", "floors_overlay_wood_01_11",  "floors_overlay_wood_01_19",  "floors_overlay_wood_01_3" ,  "floors_overlay_wood_01_44", "floors_overlay_wood_01_6",  "floors_overlay_wood_01_7",  "floors_overlay_wood_01_5", "fencing_damaged_01_136", "fencing_damaged_01_136",  "fencing_damaged_01_139", "fencing_damaged_01_138",  "fencing_damaged_01_136",  "fencing_damaged_01_137"}

    
    local texture_streets = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "d_streetcracks_1_0", "d_streetcracks_1_1", "d_streetcracks_1_2", "d_streetcracks_1_3", "d_streetcracks_1_4", "d_streetcracks_1_5", "d_streetcracks_1_6", "d_streetcracks_1_7", "crafting_ore_116", "crafting_ore_118", "crafting_ore_125", "crafting_ore_115", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23", "d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_streetcracks_1_9", "d_streetcracks_1_12", "d_streetcracks_1_14", "d_streetcracks_1_8", "d_streetcracks_1_10", "d_streetcracks_1_11", "d_streetcracks_1_13", "d_streetcracks_1_15", "d_streetcracks_1_16", "d_streetcracks_1_17", "d_streetcracks_1_18", "d_streetcracks_1_19", "d_streetcracks_1_20", "d_streetcracks_1_21", "d_streetcracks_1_22", "d_streetcracks_1_23", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}


    local texture_sandwood = {"overlay_grime_floor_01_12", "overlay_grime_floor_01_13", "overlay_grime_floor_01_14", "overlay_grime_floor_01_21", "d_streetcracks_1_0", "d_streetcracks_1_1", "d_streetcracks_1_2", "d_streetcracks_1_3", "d_streetcracks_1_4", "d_streetcracks_1_5", "d_streetcracks_1_6", "d_streetcracks_1_7", "crafting_ore_116", "crafting_ore_118", "crafting_ore_125", "crafting_ore_115", "overlay_grime_floor_01_20", "overlay_grime_floor_01_15", "overlay_grime_floor_01_22", "overlay_grime_floor_01_23", "floors_overlay_tiles_01_0", "floors_overlay_tiles_01_8", "floors_overlay_tiles_01_0", "floors_overlay_tiles_01_11" , "floors_overlay_tiles_01_15", "floors_overlay_tiles_01_7", "floors_overlay_tiles_01_14", "floors_overlay_tiles_01_6", "crafting_ore_112", "crafting_ore_126", "crafting_ore_124", "d_streetcracks_1_9", "d_streetcracks_1_12", "d_streetcracks_1_14", "d_streetcracks_1_17", "d_streetcracks_1_20", "d_streetcracks_1_22"}


    local texture_roof1_array = {"d_streetcracks_1_96", "d_streetcracks_1_97", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100","vegetation_drying_01_4", "vegetation_drying_01_6"}
    local texture_roof2_array = {"d_streetcracks_1_96", "d_streetcracks_1_97", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100"}
    local texture_roof3_array = {"d_streetcracks_1_96", "d_streetcracks_1_97", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100"}
    local texture_roof4_array = {"d_streetcracks_1_96", "d_streetcracks_1_97", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100"}
    local texture_roof5_array = {"d_streetcracks_1_96", "d_streetcracks_1_97", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "vegetation_drying_01_13", "vegetation_drying_01_15"}

    local texture_roof6_array = {"vegetation_drying_01_4", "vegetation_drying_01_6"}
    local texture_roof7_array = {"vegetation_drying_01_13", "vegetation_drying_01_15"}

    local texture_roof8_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}
    local texture_roof9_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}

    local texture_roof10_array = {"vegetation_farm_01_2", "vegetation_farm_01_32", "vegetation_farm_01_33", "vegetation_farm_01_34", "vegetation_farm_01_35", "vegetation_farm_01_36", "vegetation_farm_01_37", "vegetation_farm_01_38", "vegetation_farm_01_39", "vegetation_farm_01_40", "vegetation_farm_01_41", "vegetation_farm_01_42", "vegetation_farm_01_43", "vegetation_farm_01_44", "vegetation_farm_01_45", "vegetation_farm_01_46", "vegetation_farm_01_47"}





    local texture_roof11_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}
    local texture_roof13_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}
    local texture_roof14_array = {"d_floorleaves_1_0", "d_floorleaves_1_3", "d_floorleaves_1_1", "d_streetcracks_1_24", "d_streetcracks_1_25", "d_streetcracks_1_26", "d_streetcracks_1_27", "d_streetcracks_1_28", "d_streetcracks_1_29", "d_streetcracks_1_30", "d_streetcracks_1_31", "d_streetcracks_1_100", "d_floorleaves_1_4", "d_floorleaves_1_6", "d_floorleaves_1_11", "d_floorleaves_1_2", "d_floorleaves_1_5", "d_floorleaves_1_7", "d_floorleaves_1_8", "d_floorleaves_1_9", "d_floorleaves_1_10"}



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    local tiles_wallvinescW = {"walls_commercial_02_0","location_hospitality_sunstarmotel_02_8","location_hospitality_sunstarmotel_02_18","location_restaurant_diner_01_8","location_restaurant_diner_01_0","walls_commercial_01_64","walls_commercial_01_80","walls_commercial_02_8","DylansWalls01_12","DylansWalls01_4","walls_interior_house_01_42","walls_commercial_02_8","walls_interior_house_04_36","walls_interior_house_04_48","walls_interior_house_03_52","walls_interior_house_03_48","walls_interior_house_03_36","walls_interior_house_03_4","walls_interior_house_02_52","walls_interior_house_02_4","walls_interior_house_02_32","walls_interior_house_01_4","walls_commercial_03_48","walls_interior_bathroom_01_0","walls_interior_bathroom_01_16","walls_interior_bathroom_01_4","walls_garage_02_16","location_sewer_01_24","location_sewer_01_0","location_sewer_01_8","industry_trucks_01_4","industry_trucks_01_0","industry_railroad_05_24","location_hospitality_sunstarmotel_01_4","location_hospitality_sunstarmotel_01_0","location_hospitality_sunstarmotel_01_24","location_shop_gas2go_01_0","location_shop_mall_01_0","location_restaurant_spiffos_01_5","location_restaurant_spiffos_01_6","location_restaurant_spiffos_01_4","location_restaurant_spiffos_01_0","location_restaurant_pizzawhirled_01_0","walls_interior_house_02_8","walls_interior_house_02_0","walls_interior_house_01_32","walls_interior_house_01_0","walls_interior_house_01_10","walls_interior_house_04_0","walls_interior_house_04_76","walls_interior_house_04_68","walls_interior_house_04_52","industry_railroad_05_8","walls_interior_house_02_58","walls_interior_house_03_16","walls_interior_house_01_30","walls_interior_house_01_28","walls_interior_house_01_20","walls_interior_house_01_16","location_community_church_small_01_8","walls_commercial_03_32","walls_commercial_01_40","walls_garage_01_32","location_community_church_small_01_0","location_restaurant_spiffos_01_46","location_restaurant_spiffos_01_40","location_restaurant_spiffos_01_8","location_restaurant_spiffos_01_10","location_restaurant_spiffos_01_8","walls_burnt_01_8","walls_garage_01_32","location_trailer_01_32","location_trailer_01_34","location_trailer_01_37","location_trailer_01_36","location_trailer_01_24","location_trailer_01_10","location_trailer_01_8","location_trailer_01_0","location_shop_bargNclothes_01_24","walls_interior_house_03_10","walls_interior_house_02_16","walls_burnt_01_14","walls_burnt_01_0","walls_burnt_01_4","walls_interior_house_04_26","walls_interior_house_04_24","walls_interior_house_04_16","walls_interior_house_02_36","walls_interior_house_01_52","walls_interior_house_01_60","walls_interior_house_01_48","walls_interior_house_04_4","walls_interior_house_02_36","walls_interior_house_02_20","location_trailer_01_10","location_trailer_01_0","location_trailer_01_8","walls_commercial_01_32","walls_commercial_03_0","walls_garage_01_36", "walls_commercial_03_16", "walls_interior_house_03_42", "walls_interior_house_04_64", "walls_interior_house_04_72", "walls_interior_house_04_78", "walls_interior_house_04_70", "walls_interior_house_04_50", "walls_interior_house_04_58", "walls_garage_01_16", "walls_interior_house_02_56", "walls_interior_house_01_36", "walls_interior_house_03_0", "walls_interior_house_03_8", "walls_interior_house_04_20", "walls_interior_house_03_0", "walls_interior_house_04_84", "walls_interior_house_04_32", "walls_interior_house_03_28", "walls_interior_house_03_20", "walls_interior_house_03_40", "walls_interior_house_03_32", "walls_interior_house_02_48", "walls_commercial_01_48", "walls_commercial_01_112", "location_community_church_small_01_4", "walls_interior_house_04_80","carpentry_02_100","carpentry_02_80","carpentry_02_82","location_military_tent_01_0","location_military_tent_01_8"}


    local tiles_wallvinescN = {"walls_commercial_02_54","walls_commercial_01_81","walls_commercial_01_33","walls_commercial_02_1","location_hospitality_sunstarmotel_02_9","location_restaurant_diner_01_1","location_restaurant_diner_01_13","walls_commercial_02_9","walls_commercial_01_17","walls_commercial_02_9","fixtures_doors_01_49","walls_commercial_01_17","fixtures_doors_01_49","location_hospitality_sunstarmotel_01_25","location_hospitality_sunstarmotel_01_1","location_hospitality_sunstarmotel_01_5","location_shop_mall_01_1","location_shop_gas2go_01_1","industry_railroad_05_9","industry_railroad_05_25","industry_trucks_01_1","industry_trucks_01_5","location_sewer_01_1","location_sewer_01_9","location_sewer_01_25","walls_garage_02_17","walls_interior_bathroom_01_1","walls_interior_bathroom_01_17","walls_interior_bathroom_01_5","walls_interior_house_03_5","walls_interior_house_04_65","walls_interior_house_01_5","walls_interior_house_01_1","walls_interior_house_02_33","walls_interior_house_02_5","walls_interior_house_03_49","walls_interior_house_03_53","walls_interior_house_03_37","location_restaurant_spiffos_01_16","location_restaurant_spiffos_01_19","location_restaurant_spiffos_01_18","location_restaurant_spiffos_01_17","location_restaurant_spiffos_01_1","location_restaurant_pizzawhirled_01_1","location_community_school_01_11","location_community_school_01_1","location_community_school_01_1","walls_interior_house_02_1","walls_interior_house_02_11","walls_interior_house_01_41","walls_interior_house_01_33","walls_interior_house_04_1","walls_interior_house_01_25","walls_interior_house_01_17","walls_interior_house_04_53","walls_interior_house_01_47","walls_interior_house_03_27","walls_interior_house_02_59","walls_interior_house_02_53","walls_interior_house_02_57","walls_interior_house_03_17","walls_interior_house_03_1","walls_interior_house_01_57","walls_interior_house_01_21","walls_interior_house_01_29","walls_burnt_01_5","walls_burnt_01_1","walls_burnt_01_13","walls_burnt_01_9","walls_commercial_03_25","fixtures_doors_frames_01_30","location_community_church_small_01_9","location_community_church_small_01_1","walls_commercial_03_49","walls_commercial_03_33","walls_garage_01_33","walls_commercial_01_45","walls_commercial_03_49","walls_commercial_01_41","walls_commercial_01_113","location_community_church_small_01_2","walls_commercial_01_49","location_restaurant_spiffos_01_47","location_restaurant_spiffos_01_41","location_restaurant_spiffos_01_9","walls_burnt_01_15","walls_burnt_01_13","walls_garage_01_33","location_trailer_01_38","location_trailer_01_39","location_trailer_01_25","location_trailer_01_35","location_trailer_01_1","location_trailer_01_15","location_trailer_01_14","location_shop_bargNclothes_01_35","location_shop_bargNclothes_01_25","walls_interior_house_03_9","walls_interior_house_03_11","walls_interior_house_02_27","walls_interior_house_02_17","walls_burnt_01_5","walls_burnt_01_9","walls_burnt_01_1","walls_interior_house_04_17","walls_interior_house_04_25","walls_interior_house_04_27","walls_interior_house_02_37","walls_interior_house_01_53","walls_interior_house_01_49","walls_interior_house_04_5","walls_interior_house_02_37","walls_interior_house_02_21","location_trailer_01_11","location_trailer_01_1","location_trailer_01_9","carpentry_02_101","location_military_tent_01_0","carpentry_02_81","walls_commercial_03_1", "walls_interior_house_04_66", "walls_interior_house_04_49", "walls_interior_house_04_49", "walls_interior_house_04_5 ", "walls_interior_house_04_93", "walls_interior_house_03_21", "walls_interior_house_02_49", "walls_interior_house_03_33", "walls_interior_house_03_33", "walls_commercial_01_49 cha", "walls_interior_house_04_33", "location_community_church_small_01_5", "walls_interior_house_04_81", "walls_interior_house_03_1 ", "walls_interior_house_04_21", "walls_interior_house_03_1 ", "walls_interior_house_04_41", "walls_interior_house_01_45", "walls_interior_house_01_37", "walls_interior_house_04_85", "walls_interior_house_03_41", "walls_interior_house_03_29", "walls_interior_house_04_69", "walls_interior_house_04_79", "walls_commercial_03_17", "walls_commercial_03_27", "walls_garage_01_37", "walls_commercial_01_42", "walls_commercial_01_0"}

local tiles_wallvinesW = {"walls_exterior_wooden_01_28","walls_commercial_02_0","location_hospitality_sunstarmotel_02_8","location_hospitality_sunstarmotel_02_18","location_restaurant_diner_01_8","location_restaurant_diner_01_0","walls_commercial_01_64","walls_commercial_01_80","walls_commercial_02_8","walls_exterior_house_02_92","DylansWalls01_12","DylansWalls01_4","walls_exterior_house_02_26","fencing_01_80","fencing_01_81","fencing_01_72","walls_commercial_02_8","walls_exterior_house_02_4","walls_exterior_wooden_01_0","walls_exterior_wooden_01_40","walls_exterior_wooden_01_68","walls_exterior_wooden_01_64","walls_exterior_wooden_02_0","walls_commercial_03_48","walls_exterior_house_01_0","walls_exterior_house_02_96","walls_exterior_house_02_84","walls_exterior_house_02_68","walls_garage_02_16","location_sewer_01_24","location_sewer_01_0","location_sewer_01_8","industry_trucks_01_4","industry_trucks_01_0","industry_railroad_05_24","location_hospitality_sunstarmotel_01_4","location_hospitality_sunstarmotel_01_0","location_hospitality_sunstarmotel_01_24","location_shop_gas2go_01_0","location_shop_mall_01_0","walls_exterior_house_02_88","walls_exterior_house_02_80","location_restaurant_spiffos_01_5","walls_exterior_house_02_0","walls_exterior_house_02_10","location_restaurant_spiffos_01_6","location_restaurant_spiffos_01_4","location_restaurant_spiffos_01_0","location_restaurant_pizzawhirled_01_0","walls_exterior_house_02_52","industry_railroad_05_8","fencing_01_67","fencing_01_66","walls_exterior_house_02_72","walls_exterior_house_02_24","location_community_church_small_01_8","walls_commercial_03_32","walls_commercial_01_40","walls_garage_01_32","walls_exterior_house_02_56","walls_exterior_house_02_48","location_community_church_small_01_0","location_restaurant_spiffos_01_46","location_restaurant_spiffos_01_40","location_restaurant_spiffos_01_8","location_restaurant_spiffos_01_10","location_restaurant_spiffos_01_8","walls_burnt_01_8","walls_garage_01_32","location_trailer_01_32","location_trailer_01_34","location_trailer_01_37","location_trailer_01_36","location_trailer_01_24","location_trailer_01_10","location_trailer_01_8","location_trailer_01_0","location_shop_bargNclothes_01_24","walls_burnt_01_14","walls_burnt_01_0","walls_burnt_01_4","walls_exterior_house_02_20","walls_exterior_wooden_01_32","walls_exterior_wooden_01_34","walls_exterior_wooden_01_24","walls_exterior_house_01_12","walls_exterior_house_01_4","walls_exterior_house_01_56","walls_exterior_house_01_58","walls_exterior_house_01_58","walls_exterior_house_01_56","walls_exterior_house_01_48","walls_exterior_house_01_56","location_trailer_01_10","location_trailer_01_0","location_trailer_01_8","walls_commercial_01_32","walls_commercial_03_0","walls_garage_01_36", "walls_commercial_03_16", "walls_exterior_wooden_01_24", "fencing_01_59", "fencing_01_58", "walls_exterior_house_02_40", "walls_exterior_house_02_32", "walls_garage_01_16", "walls_exterior_house_01_40", "walls_exterior_house_01_32", "walls_exterior_house_01_60", "walls_exterior_house_01_52", "walls_commercial_01_48", "walls_exterior_house_01_24", "walls_exterior_house_02_64", "walls_exterior_house_02_16", "walls_commercial_01_112", "walls_exterior_house_01_16", "walls_exterior_house_01_16", "location_community_church_small_01_4",  "walls_exterior_house_02_36", "walls_exterior_house_02_44","fencing_damaged_01_85","fencing_damaged_01_91","carpentry_02_100","carpentry_02_80","carpentry_02_82","location_military_tent_01_0","location_military_tent_01_8"}
-- NORTH WALL
    local tiles_wallvinesN = {"walls_commercial_02_54","walls_commercial_01_81","fencing_01_73","walls_commercial_01_33","walls_commercial_02_1","location_hospitality_sunstarmotel_02_9","location_restaurant_diner_01_1","location_restaurant_diner_01_13","walls_exterior_roofs_03_27","walls_exterior_roofs_03_35","walls_commercial_02_9","fencing_01_74","walls_commercial_01_17","walls_commercial_02_9","fixtures_doors_01_49","walls_commercial_01_17","fixtures_doors_01_49","walls_exterior_wooden_01_69","location_hospitality_sunstarmotel_01_25","location_hospitality_sunstarmotel_01_1","location_hospitality_sunstarmotel_01_5","walls_exterior_house_02_5","walls_exterior_house_01_1","location_shop_mall_01_1","location_shop_gas2go_01_1","industry_railroad_05_9","industry_railroad_05_25","industry_trucks_01_1","industry_trucks_01_5","location_sewer_01_1","location_sewer_01_9","location_sewer_01_25","walls_garage_02_17","walls_exterior_wooden_02_1","walls_exterior_wooden_01_1","walls_exterior_wooden_01_41","walls_exterior_wooden_01_65","walls_exterior_house_02_97","walls_exterior_house_02_97","walls_exterior_house_02_85","walls_exterior_house_02_69","walls_exterior_house_02_89","walls_exterior_house_02_81","location_restaurant_spiffos_01_16","walls_exterior_house_02_1","location_restaurant_spiffos_01_19","location_restaurant_spiffos_01_18","walls_exterior_house_02_61","walls_exterior_house_02_53","location_restaurant_spiffos_01_17","location_restaurant_spiffos_01_1","location_restaurant_pizzawhirled_01_1","location_community_school_01_11","location_community_school_01_1","fencing_01_89","fencing_01_90","location_community_school_01_1","walls_burnt_01_5","walls_burnt_01_1","walls_burnt_01_13","walls_burnt_01_9","fencing_01_64","fencing_01_65","walls_commercial_03_25","walls_exterior_house_02_73","walls_exterior_house_02_65","location_community_church_small_01_9","fencing_01_57","fencing_01_56","location_community_church_small_01_1","walls_commercial_03_49","walls_commercial_03_33","walls_garage_01_33","walls_exterior_house_02_57","walls_exterior_house_02_49","walls_commercial_01_45","walls_commercial_03_49","walls_commercial_01_41","walls_commercial_01_113","location_community_church_small_01_2","walls_commercial_01_49","location_restaurant_spiffos_01_47","location_restaurant_spiffos_01_41","location_restaurant_spiffos_01_9","walls_burnt_01_15","walls_burnt_01_13","walls_garage_01_33","location_trailer_01_38","location_trailer_01_39","location_trailer_01_25","location_trailer_01_35","location_trailer_01_1","location_trailer_01_15","location_trailer_01_14","location_shop_bargNclothes_01_35","location_shop_bargNclothes_01_25","walls_exterior_house_01_17","walls_exterior_house_01_25","walls_burnt_01_5","walls_burnt_01_9","walls_burnt_01_1","walls_exterior_house_02_21","walls_exterior_house_02_29","walls_exterior_house_02_21","walls_exterior_wooden_01_38","walls_exterior_wooden_01_37","walls_exterior_wooden_01_29","walls_exterior_wooden_01_25","walls_exterior_house_01_15","walls_exterior_house_01_13","walls_exterior_house_01_5","fencing_01_8","fencing_01_9","walls_exterior_house_01_49","walls_exterior_house_01_59","walls_exterior_house_01_57","location_trailer_01_11","location_trailer_01_1","location_trailer_01_9","walls_exterior_wooden_01_29","carpentry_02_101","location_military_tent_01_0","carpentry_02_81","walls_commercial_03_1","fencing_01_10", "fencing_01_11", "walls_exterior_wooden_01_33",  "walls_exterior_house_01_41", "walls_exterior_house_01_41", "walls_exterior_house_01_33",  "walls_exterior_house_01_53", "walls_exterior_house_01_61", "walls_exterior_house_01_17", "walls_exterior_house_02_17", "walls_exterior_house_02_25", "walls_commercial_01_49 cha",  "location_community_church_small_01_5",  "walls_exterior_house_02_37", "walls_exterior_house_02_45",  "walls_exterior_house_02_33", "walls_exterior_house_02_33", "walls_exterior_house_02_41", "fencing_01_56, ", "fencing_01_57, ", "walls_commercial_03_17", "walls_commercial_03_27", "walls_garage_01_37", "walls_commercial_01_42", "walls_commercial_01_0"}

    local tiles_roof1 = {"roofs_01_1", "roofs_02_1", "roofs_05_1", "roofs_01_2", "roofs_02_2", "roofs_05_2", "roofs_01_112", "roofs_02_112", "roofs_05_112", "roofs_01_113", "roofs_02_113", "roofs_05_113", "roofs_01_114", "roofs_02_114", "roofs_05_114", "roofs_01_115", "roofs_02_115", "roofs_05_115"}
    local tiles_roof2 = {"roofs_01_0", "roofs_02_0", "roofs_05_0"}
    local tiles_roof5 = {"roofs_01_3", "roofs_02_3", "roofs_05_3"}
    local tiles_roof6 = {"roofs_01_4", "roofs_02_4", "roofs_05_4"}
    local tiles_roof7 = {"roofs_01_5", "roofs_02_5", "roofs_05_5", "roofs_01_116", "roofs_02_116", "roofs_05_116", "roofs_01_117", "roofs_02_117", "roofs_05_117", "roofs_01_118", "roofs_02_118", "roofs_05_118", "roofs_01_119", "roofs_02_119", "roofs_05_119"}

    local tiles_roof11 = {"roofs_01_6", "roofs_02_6", "roofs_05_6"}
    local tiles_roof13 = {"roofs_01_7", "roofs_02_7", "roofs_05_7"}

    local tiles_roof15 = {"roofs_01_22", "roofs_02_22", "roofs_05_22"}
    local tiles_roof16 = {"roofs_01_23", "roofs_02_23", "roofs_05_23"}
    local tiles_roof19 = {"roofs_01_90", "roofs_02_90", "roofs_05_90", "roofs_01_91", "roofs_02_91", "roofs_05_91", "roofs_01_92", "roofs_02_92", "roofs_05_92", "roofs_01_93", "roofs_02_93", "roofs_05_93"}


    local indoor_tiles = {"recreational_sports_01_63","industry_railroad_05_46","fixtures_stairs_01_72","fixtures_stairs_01_73","fixtures_stairs_01_74","floors_rugs_01_21","floors_rugs_01_20","floors_rugs_01_17","floors_rugs_01_23","floors_rugs_01_22","floors_rugs_01_16","camping_01_24", "camping_01_25", "camping_01_38","camping_01_39", "construction_01_4","construction_01_5", "floors_exterior_natural_01_12", "floors_exterior_street_01_16", "floors_exterior_street_01_17", "floors_exterior_tilesandstone_01_2", "floors_exterior_tilesandstone_01_3", "floors_exterior_tilesandstone_01_5", "floors_exterior_tilesandstone_01_7", "floors_rugs_01_24", "floors_rugs_01_25", "floors_rugs_01_32", "floors_rugs_01_33","floors_rugs_01_40", "floors_rugs_01_41", "furniture_seating_indoor_02_60", "furniture_seating_indoor_02_61", "furniture_seating_indoor_02_62", "furniture_seating_indoor_02_63", "location_shop_zippee_01_7", "floors_exterior_tilesandstone_01_1", "floors_exterior_tilesandstone_01_6", "floors_exterior_tilesandstone_01_0", "floors_exterior_tilesandstone_01_4", "recreational_sports_01_22" , "recreational_sports_01_23", "floors_burnt_01_0", "floors_burnt_01_1"}

    local indoor_sandwoodtiles = {"floors_interior_tilesandwood_01_19", "floors_interior_tilesandwood_01_13", "floors_interior_tilesandwood_01_23", "floors_interior_tilesandwood_01_10","floors_interior_tilesandwood_01_11", "floors_interior_tilesandwood_01_16", "floors_interior_tilesandwood_01_2", "floors_interior_tilesandwood_01_12", "floors_interior_tilesandwood_01_17", "floors_interior_tilesandwood_01_18", "floors_interior_tilesandwood_01_3", "floors_interior_tilesandwood_01_49", "floors_interior_tilesandwood_01_5", "floors_interior_tilesandwood_01_51", "floors_interior_tilesandwood_01_6", "floors_interior_tilesandwood_01_8", "floors_interior_tilesandwood_01_28", "floors_interior_tilesandwood_01_21", "floors_interior_tilesandwood_01_29", "floors_interior_tilesandwood_01_24", "floors_interior_tilesandwood_01_0", "floors_interior_tilesandwood_01_50", "floors_interior_tilesandwood_01_48", "floors_interior_tilesandwood_01_14", "floors_interior_tilesandwood_01_47", "floors_interior_tilesandwood_01_22","location_restaurant_pileocrepe_01_14", "floors_interior_tilesandwood_01_9","location_restaurant_diner_01_40","location_restaurant_diner_01_41","location_restaurant_bar_01_24","location_restaurant_spiffos_01_38", "location_restaurant_pizzawhirled_01_16","location_shop_mall_01_38","location_shop_mall_01_35","location_shop_mall_01_34","location_shop_mall_01_22", "location_shop_mall_01_23","location_shop_mall_01_21", "floors_interior_tilesandwood_01_31"}



      
     local indoor_woodtiles = {"floors_interior_carpet_01_4", "floors_interior_carpet_01_10", "floors_interior_carpet_01_11", "floors_interior_carpet_01_12", "floors_interior_carpet_01_13", "floors_interior_carpet_01_2", "floors_interior_carpet_01_3", "floors_interior_carpet_01_5","floors_interior_carpet_01_6", "floors_interior_carpet_01_9", "floors_interior_carpet_01_7", "floors_interior_carpet_01_8" ,"floor_carpet_motif_13", "floor_carpet_motif_8", "floor_carpet_motif_2", "floor_carpet_motif_12", "floor_carpet_motif_11", "floor_carpet_motif_7", "floors_interior_carpet_01_1", "floors_interior_tilesandwood_01_40","floors_interior_tilesandwood_01_46", "floors_interior_tilesandwood_01_42", "floors_interior_tilesandwood_01_44","floors_interior_tilesandwood_01_41", "floors_interior_tilesandwood_01_52", "floors_interior_tilesandwood_01_43", "floors_interior_tilesandwood_01_45", "carpentry_02_12", "carpentry_02_13","carpentry_02_14", "carpentry_02_62", "floors_interior_tilesandwood_01_43"}


     local exterior_indoor_streettiles = {"blends_street_01_55", "blends_street_01_0", "blends_street_01_16", "blends_street_01_21", "blends_street_01_5", "blends_street_01_69", "blends_street_01_71", "blends_street_01_85", "blends_street_01_32", "blends_street_01_38", "blends_street_01_48", "blends_street_01_64", "blends_street_01_80", "blends_street_01_37", "blends_street_01_39", "blends_street_01_53", "blends_street_01_54", "blends_street_01_70", "blends_street_01_87", "blends_street_01_86", "blends_street_01_96", "floors_exterior_street_01_0", "floors_exterior_street_01_1", "floors_exterior_street_01_2", "floors_exterior_street_01_3", "floors_exterior_street_01_4", "floors_exterior_street_01_5", "floors_exterior_street_01_6", "floors_exterior_street_01_7", "floors_exterior_street_01_8", "floors_exterior_street_01_9", "floors_exterior_street_01_10", "floors_exterior_street_01_11", "floors_exterior_street_01_12", "floors_exterior_street_01_13", "floors_exterior_street_01_14", "floors_exterior_street_01_15"}



CurrentWorldAgeDays = getGameTime():getWorldAgeHours() / 24
local sandboxOptions = getSandboxOptions()
local timeSpent = CurrentWorldAgeDays + TimeSinceApoValues[sandboxOptions:getTimeSinceApo()]
CurrentErosionPercentage = (timeSpent/ErosionSpeedValues[sandboxOptions:getErosionSpeed()])*100
if CurrentErosionPercentage > 100 then
    for k,v in ipairs(tiles_wallvinescW) do
        overlayMap[v] = {{ name = "other", chance = 3, usage = "", tiles = texture_wallvinescW}}
    end
    for k,v in ipairs(tiles_wallvinescN) do
        overlayMap[v] = {{ name = "other", chance = 3, usage = "", tiles = texture_wallvinescN}}
    end
    for k,v in ipairs(indoor_tiles) do
        overlayMap[v] = {{ name = "other", chance = 2, usage = "", tiles = texture_indoor}}
    end
    for k,v in ipairs(indoor_woodtiles) do
        overlayMap[v] = {{ name = "other", chance = 1, usage = "", tiles = texture_woodindoor}}
    end
    for k,v in ipairs(exterior_indoor_streettiles) do
        overlayMap[v] = {{ name = "other", chance = 5, usage = "", tiles = texture_streets}}
    end
    for k,v in ipairs(indoor_sandwoodtiles) do
        overlayMap[v] = {{ name = "other", chance = 1, usage = "", tiles = texture_sandwood}}
    end
    for k,v in ipairs(tiles_roof1) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof1_array}}
    end
    for k,v in ipairs(tiles_roof2) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof2_array}}
    end
    for k,v in ipairs(tiles_roof5) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof3_array}}
    end
    for k,v in ipairs(tiles_roof6) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof4_array}}
    end
    for k,v in ipairs(tiles_roof7) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof5_array}}
    end        
    for k,v in ipairs(tiles_roof11) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof6_array}}
    end
    for k,v in ipairs(tiles_roof13) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof7_array}}
    end
    for k,v in ipairs(tiles_roof15) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof13_array}}
    end
    for k,v in ipairs(tiles_roof16) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof14_array}}
    end
    for k,v in ipairs(tiles_roof19) do
        overlayMap[v] = {{ name = "other", chance = 4, usage = "", tiles = texture_roof10_array}}
    end
    for k,v in ipairs(tiles_wallvinesW) do
        overlayMap[v] = {{ name = "other", chance = 3, usage = "", tiles = texture_wallvinesW}}
    end
    for k,v in ipairs(tiles_wallvinesN) do
        overlayMap[v] = {{ name = "other", chance = 3, usage = "", tiles = texture_wallvinesN}}
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



