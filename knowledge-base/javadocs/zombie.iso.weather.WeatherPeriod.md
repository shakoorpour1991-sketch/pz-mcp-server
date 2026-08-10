---
title: zombie.iso.weather.WeatherPeriod
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.WeatherPeriod

`public class WeatherPeriod extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.WeatherPeriod

## Description

TurboTuTone.

## Fields

### public static final int STAGE_START

### public static final int STAGE_SHOWERS

### public static final int STAGE_HEAVY_PRECIP

### public static final int STAGE_STORM

### public static final int STAGE_CLEARING

### public static final int STAGE_MODERATE

### public static final int STAGE_DRIZZLE

### public static final int STAGE_BLIZZARD

### public static final int STAGE_TROPICAL_STORM

### public static final int STAGE_INTERMEZZO

### public static final int STAGE_MODDED

### public static final int STAGE_KATEBOB_STORM

### public static final int STAGE_MAX

### public static final float FRONT_STRENGTH_THRESHOLD

## Constructors

### public WeatherPeriod(ClimateManager climmgr,
ThunderStorm ts)

**Parameters:**
- `ClimateManager` `climmgr`
- `ThunderStorm` `ts`

## Methods

### public void setDummy(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static float getMaxTemperatureInfluence()

**Returns:** `float`

### public void setKateBobStormProgress(float progress)

**Parameters:**
- `float` `progress`

**Returns:** `void`

### public void setKateBobStormCoords(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public ClimateColorInfo getCloudColorReddish()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getCloudColorGreenish()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getCloudColorBlueish()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getCloudColorPurplish()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getCloudColorTropical()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getCloudColorBlizzard()

**Returns:** `ClimateColorInfo`

### public boolean isRunning()

**Returns:** `boolean`

### public double getDuration()

**Returns:** `double`

### public ClimateManager.AirFront getFrontCache()

**Returns:** `ClimateManager.AirFront`

### public int getCurrentStageID()

**Returns:** `int`

### public WeatherPeriod.WeatherStage getCurrentStage()

**Returns:** `WeatherPeriod.WeatherStage`

### public double getWeatherNoise()

**Returns:** `double`

### public float getCurrentStrength()

**Returns:** `float`

### public float getRainThreshold()

**Returns:** `float`

### public boolean isThunderStorm()

**Returns:** `boolean`

### public boolean isTropicalStorm()

**Returns:** `boolean`

### public boolean isBlizzard()

**Returns:** `boolean`

### public float getPrecipitationFinal()

**Returns:** `float`

### public ClimateColorInfo getCloudColor()

**Returns:** `ClimateColorInfo`

### public void setCloudColor(ClimateColorInfo cloudcol)

**Parameters:**
- `ClimateColorInfo` `cloudcol`

**Returns:** `void`

### public float getTotalProgress()

**Returns:** `float`

### public float getStageProgress()

**Returns:** `float`

### public boolean hasTropical()

**Returns:** `boolean`

### public boolean hasStorm()

**Returns:** `boolean`

### public boolean hasBlizzard()

**Returns:** `boolean`

### public boolean hasHeavyRain()

**Returns:** `boolean`

### public float getTotalStrength()

**Returns:** `float`

### public WeatherPeriod.WeatherStage getStageForWorldAge(double worldAgeHours)

**Parameters:**
- `double` `worldAgeHours`

**Returns:** `WeatherPeriod.WeatherStage`

### public float getWindAngleDegrees()

**Returns:** `float`

### public int getFrontType()

**Returns:** `int`

### public void setPrintStuff(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getPrintStuff()

**Returns:** `boolean`

### public void initSimulationDebug(ClimateManager.AirFront front,
double hoursSinceStart)

**Parameters:**
- `ClimateManager.AirFront` `front`
- `double` `hoursSinceStart`

**Returns:** `void`

### public void initSimulationDebug(ClimateManager.AirFront front,
double hoursSinceStart,
int doThisStageOnly,
float singleStageDuration)

**Parameters:**
- `ClimateManager.AirFront` `front`
- `double` `hoursSinceStart`
- `int` `doThisStageOnly`
- `float` `singleStageDuration`

**Returns:** `void`

### public boolean startCreateModdedPeriod(boolean warmFront,
float strength,
float angle)

**Parameters:**
- `boolean` `warmFront`
- `float` `strength`
- `float` `angle`

**Returns:** `boolean`

### public boolean endCreateModdedPeriod()

**Returns:** `boolean`

### public void stopWeatherPeriod()

**Returns:** `void`

### public void writeNetWeatherData(ByteBufferWriter output)
throws IOException

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void readNetWeatherData(ByteBufferReader input)
throws IOException

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

### public ArrayList<WeatherPeriod.WeatherStage> getWeatherStages()

**Returns:** `ArrayList<WeatherPeriod.WeatherStage>`

### public WeatherPeriod.WeatherStage createAndAddModdedStage(String moddedID,
double duration)

**Parameters:**
- `String` `moddedID`
- `double` `duration`

**Returns:** `WeatherPeriod.WeatherStage`

### public WeatherPeriod.WeatherStage createAndAddStage(int typeid,
double duration)

**Parameters:**
- `int` `typeid`
- `double` `duration`

**Returns:** `WeatherPeriod.WeatherStage`

### public void update(double hoursSinceStart)

**Parameters:**
- `double` `hoursSinceStart`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

IO

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void load(DataInputStream input,
int worldVersion)
throws IOException

**Parameters:**
- `DataInputStream` `input`
- `int` `worldVersion`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\WeatherPeriod.html`*
