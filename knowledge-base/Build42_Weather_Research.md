# Project Zomboid Build 42 Weather/Climate System Research

**Game Version:** Build 42.18+ (42.20)  
**Documentation Path:** `D:\PZ-Modding\Documentation\Build42_Weather_Research.md`  
**Source Files:** `D:\Games\ProjectZomboid\ProjectZomboid\media\lua\`

---

## Table of Contents

1. [Climate Manager Overview](#climate-manager-overview)
2. [Events System](#events-system)
3. [Weather Period System](#weather-period-system)
4. [Seasons System](#seasons-system)
5. [Temperature Mechanics](#temperature-mechanics)
6. [Weather Types](#weather-types)
7. [Dusk/Dawn System](#duskdawn-system)
8. [Weather Effects on Gameplay](#weather-effects-on-gameplay)
9. [Sandbox Settings](#sandbox-settings)
10. [Thunder and Lightning](#thunder-and-lightning)
11. [Erosion System](#erosion-system)
12. [Debug Tools](#debug-tools)
13. [Key Lua Files Reference](#key-lua-files-reference)

---

## Climate Manager Overview

The Climate Manager is the central Java-based system (accessible via `getClimateManager()`) that handles all weather and climate simulation in Build 42. It manages:

- **Temperature** - Global and local air temperatures
- **Precipitation** - Rain intensity and duration
- **Wind** - Wind power, angle, and direction
- **Fog** - Fog intensity and visibility
- **Cloud Cover** - Cloud density affecting light levels
- **Seasons** - Spring, Summer, Autumn, Winter cycles
- **Weather Forecasting** - Predictable weather patterns

### Core API Methods

```lua
-- Get climate manager instance
local climate = getClimateManager()

-- Temperature
climate:getTemperature()           -- Current air temperature
climate:getAirTemperatureForCharacter(player, false)  -- Temp at player position
climate:getSeason()                -- Get current season object

-- Weather states
climate:getPrecipitationIntensity()  -- Rain intensity (0.0 - 1.0+)
climate:getFogIntensity()            -- Fog level (0.0 - 1.0)
climate:getSnowStrength()            -- Snow level (0.0 - 1.0+)
climate:getWindPower()               -- Wind power (0.0 - 1.0)
climate:getWindAngleIntensity()      -- Wind direction
climate:getCloudIntensity()          -- Cloud cover

-- Season info
climate:getSeasonName()              -- Returns "Spring", "Summer", "Autumn", "Winter"
climate:getDayMeanTemperature()      -- Average daily temperature

-- Weather period
climate:getWeatherPeriod()           -- Current weather period object
climate:getThunderStorm()            -- Thunder storm system

-- Forecasting
climate:getClimateForecaster()       -- Weather prediction system
```

---

## Events System

Build 42 uses a robust event system for weather-related hooks. These events allow mods to react to climate changes:

### Climate Initialization

```lua
-- Fired when Climate Manager is first initialized
Events.OnClimateManagerInit.Add(function(climate)
    -- Configure climate colors, settings
    local c = climate:getColFog();
    c:setExterior(0.2, 0.2, 0.2, 0.8);
end)
```

**File:** `media/lua/server/Climate/ClimateMain.lua`

### Climate Tick Debug

```lua
-- Fires every in-game minute with ClimateManager as parameter
Events.OnClimateTickDebug.Add(function(mgr)
    -- Debug/analysis code
    local temp = mgr:getTemperature()
    local rain = mgr:getPrecipitationIntensity()
end)
```

### Weather Period Events

```lua
-- Fires when a new weather period starts
Events.OnWeatherPeriodStart.Add(function(weatherPeriod)
    -- New weather event beginning
end)

-- Fires when weather period changes stages
Events.OnWeatherPeriodStage.Add(function(weatherPeriod)
    -- Weather stage changed (showers, heavy precip, storm, etc.)
end)

-- Fires when weather period completes
Events.OnWeatherPeriodComplete.Add(function(weatherPeriod)
    -- Weather event ended
end)
```

**File:** `media/lua/shared/Foraging/forageSystem.lua` (example usage)

### Thunder Events

```lua
-- Fires when thunder/lightning occurs
-- Parameters: x, y, strike (bool), lightning (bool), rumble (bool)
Events.OnThunderEvent.Add(function(x, y, strike, light, rumble)
    if strike then
        -- Lightning struck at x,y
    end
end)
```

**File:** `media/lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug.lua`

### Dusk/Dawn Events

```lua
-- The old season.lua system triggered these:
-- Events.OnDusk.Add(function() end)
-- Events.OnDawn.Add(function() end)

-- Current system uses GameTime for dawn/dusk
local season = climate:getSeason()
local dawn = season:getDawn()    -- Hour dawn occurs
local dusk = season:getDusk()    -- Hour dusk occurs
```

---

## Weather Period System

The Weather Period system controls weather events with multiple stages:

### Weather Period Stages

| Stage ID | Name | Description |
|----------|------|-------------|
| 0 | STAGE_START | Initial stage |
| 1 | STAGE_SHOWERS | Light rain begins |
| 2 | STAGE_HEAVY_PRECIP | Heavy rain/snow |
| 3 | STAGE_STORM | Thunderstorm |
| 4 | STAGE_CLEARING | Weather clearing |
| 5 | STAGE_MODERATE | Moderate conditions |
| 6 | STAGE_DRIZZLE | Light drizzle |
| 7 | STAGE_BLIZZARD | Blizzard (snow) |
| 8 | STAGE_TROPICAL_STORM | Tropical storm |
| 9 | STAGE_INTERMEZZO | Brief intermission |
| 10 | STAGE_MODDED | Mod-added stage |
| 11 | STAGE_KATEBOB_STORM | Special storm type |

**File:** `media/lua/client/DebugUIs/DebugMenu/Climate/ForecasterDebug.lua`

### Weather Period API

```lua
local wp = getClimateManager():getWeatherPeriod()

if wp and wp:isRunning() then
    local currentStage = wp:getCurrentStageID()        -- Current stage (0-11)
    local totalProgress = wp:getTotalProgress()         -- Overall duration progress
    local stageProgress = wp:getStageProgress()         -- Current stage progress
    local duration = wp:getDuration()                   -- Total duration in hours
    local strength = wp:getCurrentStrength()            -- Weather strength
    
    -- Weather type detection
    local isRaining = RainManager.isRaining()           -- Legacy rain check
    
    -- Precipitation
    local precip = wp:getPrecipitationFinal()           -- Final precipitation level
end
```

### Admin Weather Control

**File:** `media/lua/client/ISUI/AdminPanel/ISAdmPanelWeather.lua`

```lua
-- Stop current weather
getClimateManager():transmitStopWeather()

-- Trigger specific weather
getClimateManager():transmitTriggerStorm(duration)
getClimateManager():transmitTriggerTropical(duration)
getClimateManager():transmitTriggerBlizzard(duration)

-- Generate custom weather
getClimateManager():transmitGenerateWeather(strength, frontType)
-- frontType: 0 = warm front, 1 = cold front
```

---

## Seasons System

Build 42 features a full seasonal cycle affecting temperature, crop growth, and daylight hours.

### Season Properties

The old `seasonProps` system in `season.lua` defined monthly parameters:

```lua
-- Example: July (month 7)
seasonProps.monthTemp[7] = {
    min = 26,       -- Minimum temperature
    max = 36,       -- Maximum temperature (overridden in some configs)
    dawn = 9,       -- Dawn hour (later = later sunrise)
    dusk = 6,       -- Dusk hour (later = later sunset)
    moonTime = 21,  -- Hour for full moon
    sunTime = 7,    -- Hour for new moon
    weather = {
        {chance=50, name="normal"},
        {chance=80, name="sunny"},
        {chance=95, name="cloud"},
        {chance=100, name="rain"}
    }
}
```

**File:** `media/lua/server/Seasons/seasonProps.lua`

### Monthly Temperature Ranges (Muldraugh default)

| Month | Min °C | Max °C | Dawn | Dusk | Weather Focus |
|-------|--------|--------|------|------|---------------|
| Jan   | -6     | 14     | 13   | 2    | Rain/Cloud    |
| Feb   | -3     | 17     | 13   | 2    | Sunny         |
| Mar   | 1      | 24     | 13   | 3    | Cloud/Rain    |
| Apr   | 8      | 23     | 12   | 4    | Mixed         |
| May   | 16     | 28     | 12   | 5    | Sunny         |
| Jun   | 16     | 33     | 10   | 5    | Sunny         |
| Jul   | 26     | 36     | 9    | 6    | Hot/Sunny     |
| Aug   | 22     | 29     | 10   | 6    | Sunny         |
| Sep   | 13     | 28     | 11   | 5    | Cloud         |
| Oct   | 6      | 22     | 12   | 4    | Cloud/Rain    |
| Nov   | 4      | 20     | 13   | 2    | Cloud/Rain    |
| Dec   | -1     | 14     | 14   | 2    | Cloud         |

### Season Detection

```lua
local seasonName = getClimateManager():getSeasonName()
-- Returns: "Spring", "Summer", "Autumn", "Winter"

local season = getClimateManager():getSeason()
local dawnHour = season:getDawn()
local duskHour = season:getDusk()
```

---

## Temperature Mechanics

### Ambient Temperature

```lua
-- Get current temperature
local temp = getClimateManager():getTemperature()

-- Temperature at character position (accounts for climate, wind, etc.)
local playerTemp = getClimateManager():getAirTemperatureForCharacter(player, false)

-- Mean daily temperature
local dayMean = getClimateManager():getSeason():getDayMeanTemperature()
```

### Body Temperature System

The player has a thermoregulation system affecting health and stats:

**File:** `media/lua/client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.lua`

```lua
-- Via player object
local thermos = player:getBodyDamage():getThermoregulator()

-- Key values
thermos:getCoreCelcius()           -- Core body temperature (°C)
thermos:getTemperatureAir()        -- Air temperature affecting player
thermos:getTemperatureAirAndWind() -- Air temp with wind chill
thermos:getMetabolicTarget()       -- Target metabolic rate
thermos:getBodyHeatDelta()         -- Heat change rate
thermos:getSetPoint()              -- Temperature set point

-- Multipliers affecting temperature response
thermos:getSimulationMultiplier()
thermos:getBodyHeatMultiplier()
thermos:getCoreHeatExpandMultiplier()
thermos:getCoreHeatContractMultiplier()
thermos:getSkinCelciusMultiplier()
```

### Temperature Effects

- **Hypothermia/Hyperthermia** - Moodles based on temperature extremes
- **Metabolic Rate** - Cold increases hunger/food consumption
- **Wet Clothing** - Increases cold effect significantly
- **Insulation** - Clothing provides warmth buffer

### Temperature & Fishing

**File:** `media/lua/shared/Fishing/FishingUtils.lua`

```lua
function Fishing.Utils.getTemperatureParams(player)
    local temperature = getClimateManager():getAirTemperatureForCharacter(player, false)
    local temperatureCoeff = 1
    
    if (temperature >= 30 and temperature < 40) or (temperature >= 0 and temperature < 15) then
        temperatureCoeff = 0.75
    elseif temperature >= 40 or (temperature > -10 and temperature < 0) then
        temperatureCoeff = 0.5
    elseif temperature <= -10 then
        temperatureCoeff = 0.25
    end
    
    return { temperature = temperature, coeff = temperatureCoeff }
end
```

---

## Weather Types

### Rain

- **Intensity:** 0.0 (none) to 1.0+ (heavy)
- **Effects:** Visibility reduction, wet clothing, fills rain barrels
- **Detection:** `RainManager.isRaining()` or `climate:getPrecipitationIntensity()`

```lua
-- Check rain
if RainManager.isRaining() then
    -- It's raining
end

-- Rain barrel filling (server-side)
if RainManager.isRaining() then
    local addAmount = 1 * RainCollectorBarrel.waterScale
    -- Add water to barrel
end
```

### Snow

- **Conditions:** Temperature-dependent (typically below 2°C)
- **Visibility:** Reduced similar to rain
- **Ground:** Snow accumulates when `EnableSnowOnGround = true` (Sandbox)

```lua
local snowStrength = getClimateManager():getSnowStrength()
-- Affects visibility and temperature
```

### Fog

- **Intensity:** 0.0 (clear) to 1.0 (dense)
- **Effects:** Significant visibility reduction, affects foraging

```lua
local fogLevel = getClimateManager():getFogIntensity()

-- In foraging system:
weatherPenalty = rainLevel + fogLevel
-- Combined penalty for being outdoors
```

### Clouds

- **Intensity:** 0.0 (clear) to 1.0 (overcast)
- **Effects:** Minor visibility and temperature reduction

```lua
local cloudLevel = getClimateManager():getCloudIntensity()
-- Used in foraging penalty calculation
```

### Wind

```lua
local windPower = getClimateManager():getWindPower()      -- 0.0 to 1.0+
local windAngle = getClimateManager():getWindAngleIntensity()  -- Direction
```

---

## Dusk/Dawn System

The current system calculates dawn/dusk based on month:

```lua
-- Get from season object
local season = getClimateManager():getSeason()
local dawnHour = season:getDawn()    -- e.g., 9 for 9:00
local duskHour = season:getDusk()    -- e.g., 18 for 18:00

-- GameTime also tracks these
local gameTime = GameTime.getInstance()
local dawn = gameTime:getDawn()
local dusk = gameTime:getDusk()
```

### Day Length Variations

| Season | Approximate Dawn | Approximate Dusk | Day Length |
|--------|------------------|------------------|------------|
| Winter | 8:00 - 9:00      | 14:00 - 16:00    | 6-8 hours  |
| Spring | 7:00 - 8:00      | 17:00 - 18:00    | 10-11 hours|
| Summer | 6:00 - 7:00      | 18:00 - 20:00    | 12-14 hours|
| Autumn | 7:00 - 8:00      | 17:00 - 18:00    | 9-11 hours |

---

## Weather Effects on Gameplay

### Farming

**File:** `media/lua/server/Farming/SFarmingSystem.lua`

```lua
-- Watering from rain
if RainManager.isRaining() and luaObject.exterior then
    luaObject.waterLvl = luaObject.waterLvl + (30 * getClimateManager():getPrecipitationIntensity() / waterFactor)
    luaObject.lastWaterHour = self.hoursElapsed
elseif season.weather == "sunny" then
    luaObject.waterLvl = luaObject.waterLvl - 0.1 * waterFactor
end

-- Temperature effects on crops
if season.currentTemp <= 10 and not luaObject:isColdHardy() then
    luaObject.health = luaObject.health - 0.5 * badMultiplier
end

-- Winter killing crops
if seasons and luaObject.exterior and getClimateManager():getSeasonName() == "Winter" and not luaObject:isColdHardy() then
    luaObject.cursed = true
end
```

### Foraging

**File:** `media/lua/shared/Foraging/forageSystem.lua`

```lua
function forageSystem.getWeatherPenalty(_character, _square)
    if not _square:isOutside() then return 1; end
    
    local climateManager = getClimateManager()
    local fogLevel = climateManager:getFogIntensity()
    local snowLevel = math.min(climateManager:getSnowStrength(), 1)
    local rainLevel = climateManager:getPrecipitationIntensity()
    local cloudLevel = climateManager:getCloudIntensity()
    
    -- Umbrella reduces rain penalty by 90%
    if umbrellaPrimary or umbrellaSecondary then
        rainLevel = rainLevel * 0.1
    end
    
    -- Weather penalty calculation
    weatherPenalty = rainLevel + fogLevel
    weatherPenalty = weatherPenalty + (snowLevel / 4)
    weatherPenalty = weatherPenalty + (cloudLevel * 0.1)
    
    -- Cap at 75% penalty max
    weatherPenalty = math.min(weatherPenalty, forageSystem.weatherPenaltyMax / 100)
    
    local effectReduction = forageSystem.getWeatherEffectReduction(_character)
    return 1 - (weatherPenalty * effectReduction)
end
```

### Fishing

**File:** `media/lua/shared/Fishing/FishingUtils.lua`

```lua
function Fishing.Utils.getWeatherParams()
    local weatherCoeff = 1
    local isFog = getClimateManager():getFogIntensity() >= 0.4
    local isWind = getClimateManager():getWindPower() >= 0.5
    local isRain = RainManager.isRaining()
    
    if isFog or isWind then
        weatherCoeff = 0.8    -- Worse fishing
    elseif isRain then
        weatherCoeff = 1.2    -- Better fishing
    end
    
    return { isFog = isFog, isWind = isWind, isRain = isRain, coeff = weatherCoeff }
end
```

---

## Sandbox Settings

**File:** `media/lua/shared/Sandbox/Apocalypse.lua` (and other Sandbox profiles)

### Weather-Related Sandbox Options

| Setting | Range | Default | Description |
|---------|-------|---------|-------------|
| `Temperature` | 1-5 | 3 (Normal) | Temperature modifier |
| `Rain` | 1-5 | 3 (Normal) | Rain frequency modifier |
| `ErosionSpeed` | 1-5 | 4 (Fast) | World decay rate |
| `ErosionDays` | 0+ | 0 | Days until erosion starts |
| `MaxFogIntensity` | 0-1 | 1 | Maximum fog density |
| `MaxRainFxIntensity` | 0-1 | 1 | Maximum rain visual intensity |
| `EnableSnowOnGround` | bool | true | Enable snow accumulation |
| `PlantGrowingSeasons` | bool | true | Crops only grow in season |

### Temperature Sandbox Options

```lua
-- Temperature level meanings:
-- 1 = Very Cold (min/max -15°C)
-- 2 = Cold (min/max -8°C)
-- 3 = Normal (default)
-- 4 = Hot (min/max +8°C)
-- 5 = Very Hot (min/max +15°C)
```

### Rain Sandbox Options

```lua
-- Rain level meanings:
-- 1 = Very Dry (rare rain)
-- 2 = Dry (less rain)
-- 3 = Normal (default rain)
-- 4 = Rainy (more frequent rain)
-- 5 = Very Rainy (constant rain)
```

### Erosion Speed

```lua
-- ErosionSpeed: 1-5 scale (1=slow, 5=fast)
-- ErosionDays: Days after world start before erosion begins

-- Used with: useStaticErosionRand(true) for reproducible worlds
-- Note: Erosion is tied to world item decay, not weather directly
```

---

## Thunder and Lightning

**File:** `media/lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug.lua`

### Thunder Event System

```lua
Events.OnThunderEvent.Add(function(x, y, strike, light, rumble)
    -- x, y: Strike coordinates
    -- strike: Was there a strike?
    -- light: Is this a lightning flash?
    -- rumble: Is there thunder sound?
end)

-- Get thunder storm system
local thunderStorm = getClimateManager():getThunderStorm()
if thunderStorm then
    local clouds = thunderStorm:getClouds()
    for i=0, clouds:size()-1 do
        local cloud = clouds:get(i)
        if cloud:isRunning() then
            local x = cloud:getCurrentX()
            local y = cloud:getCurrentY()
            local radius = cloud:getRadius()
        end
    end
end
```

### Fire Risk from Lightning

Lightning strikes during thunderstorms can cause fires. This is handled by the Java-side physics system. The `OnThunderEvent` can be used by mods to:

- Start fires at strike locations
- Damage electrical items
- Alert nearby zombies

---

## Erosion System

The erosion system controls world decay over time. While not directly weather-driven, it's related to the overall world state.

### Key Functions

```lua
-- Enable static erosion RNG for reproducible worlds
useStaticErosionRand(true)

-- Remove tile object erosion (used in scenarios)
square:RemoveTileObjectErosionNoRecalc(object)
```

### Sandbox Settings

```lua
SandboxVars.ErosionSpeed = 4    -- 1=Slow, 5=Fast (default: 4)
SandboxVars.ErosionDays = 0     -- Days before erosion starts
```

---

## Debug Tools

Build 42 includes comprehensive debug tools for weather/climate:

### Climate Debuggers Panel

**File:** `media/lua/client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.lua`

Access via Debug Menu → Climate → Other

### Available Debug Windows

| Window | Purpose |
|--------|---------|
| **Forecaster Debug** | View upcoming weather predictions |
| **Weather FX Debug** | View current weather effects values |
| **Player Temp Debug** | Player body temperature stats |
| **Thermoregulator Debug** | Detailed thermoregulation data |
| **Daily Values Debug** | Daily weather statistics |
| **Climate Plot** | Graph climate variables over time |
| **Weather Plot** | Graph weather period data |
| **Thunder Debug** | Visual thunder/lightning tracking |
| **Wind Debug** | Wind direction/power visualization |

### Climate Control Panel

**File:** `media/lua/client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.lua`

Provides admin controls for:
- Climate parameters (temperature, precipitation, fog, wind)
- Color customization (dawn, dusk, day, night colors)
- Weather triggering (storm, tropical, blizzard)
- Puddle management

### Simulation Testing

```lua
-- Execute climate simulation with overrides
getClimateManager():execute_Simulation()

-- With rain modifier override (1-5)
getClimateManager():execute_Simulation(rainModOverride)
-- 1 = Drier, 3 = Normal, 5 = Wetter
```

---

## Key Lua Files Reference

### Core Climate Files

| File Path | Purpose |
|-----------|---------|
| `server/Climate/ClimateMain.lua` | Climate initialization and colors |
| `server/Seasons/season.lua` | Legacy season system (mostly deprecated) |
| `server/Seasons/seasonProps.lua` | Monthly temperature/weather definitions |
| `client/ISUI/AdminPanel/ISAdmPanelWeather.lua` | Admin weather control panel |

### Debug/Development Files

| File Path | Purpose |
|-----------|---------|
| `client/DebugUIs/DebugMenu/Climate/ClimateDebug.lua` | Climate data plotting |
| `client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.lua` | Climate parameter editor |
| `client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.lua` | Weather period visualization |
| `client/DebugUIs/DebugMenu/Climate/ForecasterDebug.lua` | Weather forecasting display |
| `client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.lua` | Player temperature stats |
| `client/DebugUIs/DebugMenu/Climate/ThermoDebug.lua` | Thermoregulator debug |
| `client/DebugUIs/DebugMenu/Climate/ThunderDebug.lua` | Thunder/lightning tracking |
| `client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.lua` | Main debug panel |
| `client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.lua` | Climate control window |

### Gameplay Integration

| File Path | Purpose |
|-----------|---------|
| `server/Farming/SFarmingSystem.lua` | Farming weather effects |
| `shared/Foraging/forageSystem.lua` | Foraging weather penalties |
| `shared/Fishing/FishingUtils.lua` | Fishing weather parameters |
| `server/RainBarrel/SRainBarrelSystem.lua` | Rain barrel filling |
| `server/radio/ISWeatherChannel.lua` | Radio weather forecasts |

### Sandbox

| File Path | Purpose |
|-----------|---------|
| `shared/Sandbox/Apocalypse.lua` | Default sandbox settings |
| `shared/Sandbox/SandboxVars.lua` | Sandbox variable definitions |

---

## Weather Radio Channel

The in-game radio features a weather channel that broadcasts weather forecasts:

**File:** `media/lua/server/radio/ISWeatherChannel.lua`

### Forecast Information

- Current temperature (high/low)
- Humidity percentage
- Wind speed and direction
- Cloud cover conditions
- Fog predictions
- Upcoming weather events (storms, blizzards, tropical storms)
- Snowfall predictions

The weather channel can be accessed on emergency frequencies and provides gameplay-relevant weather information to players.

---

## Conclusion

Build 42's weather and climate system is a comprehensive simulation that affects nearly every aspect of gameplay:

- **Temperature** affects crops, player health, and fishing
- **Precipitation** fills water sources and creates foraging penalties
- **Fog** reduces visibility for both player and zombies
- **Seasons** control crop growth windows and daylight hours
- **Weather forecasting** provides strategic planning information via radio
- **Debug tools** allow detailed analysis and admin control

This system provides rich opportunities for modders to create weather-dependent content and game mechanics.

---

*Document generated from analysis of Project Zomboid Build 42.18+ Lua source files.*
*Last Updated: Build 42.20*