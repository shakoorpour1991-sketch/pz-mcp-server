---
title: zombie.iso.weather.ClimateManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.ClimateManager

`public class ClimateManager extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.ClimateManager

## Description

TurboTuTone.

## Fields

### public static final long PUDDLES_BROADCAST_INTERVAL_MS

### public static final int FRONT_COLD

### public static final int FRONT_STATIONARY

### public static final int FRONT_WARM

### public static final float MAX_WINDSPEED_KPH

### public static final float MAX_WINDSPEED_MPH

### public static boolean winterIsComing

### public static boolean theDescendingFog

### public static boolean aStormIsComing

### public static final int FLOAT_DESATURATION

### public static final int FLOAT_GLOBAL_LIGHT_INTENSITY

### public static final int FLOAT_NIGHT_STRENGTH

### public static final int FLOAT_PRECIPITATION_INTENSITY

### public static final int FLOAT_TEMPERATURE

### public static final int FLOAT_FOG_INTENSITY

### public static final int FLOAT_WIND_INTENSITY

### public static final int FLOAT_WIND_ANGLE_INTENSITY

### public static final int FLOAT_CLOUD_INTENSITY

### public static final int FLOAT_AMBIENT

### public static final int FLOAT_VIEW_DISTANCE

### public static final int FLOAT_DAYLIGHT_STRENGTH

### public static final int FLOAT_HUMIDITY

### public static final int FLOAT_MAX

### public static final int COLOR_GLOBAL_LIGHT

### public static final int COLOR_NEW_FOG

### public static final int COLOR_MAX

### public static final int BOOL_IS_SNOW

### public static final int BOOL_MAX

### public static final float AVG_FAV_AIR_TEMPERATURE

### public static final byte PacketUpdateClimateVars

### public static final byte PacketWeatherUpdate

### public static final byte PacketThunderEvent

### public static final byte PacketFlare

### public static final byte PacketAdminVarsUpdate

### public static final byte PacketRequestAdminVars

### public static final byte PacketClientChangedAdminVars

### public static final byte PacketClientChangedWeather

## Constructors

### public ClimateManager()

## Methods

### public float getMaxWindspeedKph()

**Returns:** `float`

### public float getMaxWindspeedMph()

**Returns:** `float`

### public static float ToKph(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static float ToMph(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static ClimateManager getInstance()

**Returns:** `ClimateManager`

### public static void setInstance(ClimateManager inst)

**Parameters:**
- `ClimateManager` `inst`

**Returns:** `void`

### public ClimateColorInfo getColNight()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getColNightNoMoon()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getColNightMoon()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getColFog()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getColFogLegacy()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getColFogNew()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getFogTintStorm()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getFogTintTropical()

**Returns:** `ClimateColorInfo`

### public int getFloatMax()

**Returns:** `int`

### public ClimateManager.ClimateFloat getClimateFloat(int id)

**Parameters:**
- `int` `id`

**Returns:** `ClimateManager.ClimateFloat`

### public int getColorMax()

**Returns:** `int`

### public ClimateManager.ClimateColor getClimateColor(int id)

**Parameters:**
- `int` `id`

**Returns:** `ClimateManager.ClimateColor`

### public int getBoolMax()

**Returns:** `int`

### public ClimateManager.ClimateBool getClimateBool(int id)

**Parameters:**
- `int` `id`

**Returns:** `ClimateManager.ClimateBool`

### public void setEnabledSimulation(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getEnabledSimulation()

**Returns:** `boolean`

### public boolean getEnabledFxUpdate()

**Returns:** `boolean`

### public void setEnabledFxUpdate(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getEnabledWeatherGeneration()

**Returns:** `boolean`

### public void setEnabledWeatherGeneration(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public Color getGlobalLightInternal()

**Returns:** `Color`

### public ClimateColorInfo getGlobalLight()

**Returns:** `ClimateColorInfo`

### public float getGlobalLightIntensity()

**Returns:** `float`

### public ClimateColorInfo getColorNewFog()

**Returns:** `ClimateColorInfo`

### public void setNightStrength(float b)

**Parameters:**
- `float` `b`

**Returns:** `void`

### public float getDesaturation()

**Returns:** `float`

### public void setDesaturation(float desaturation)

**Parameters:**
- `float` `desaturation`

**Returns:** `void`

### public float getAirMass()

**Returns:** `float`

### public float getAirMassDaily()

**Returns:** `float`

### public float getAirMassTemperature()

**Returns:** `float`

### public float getDayLightStrength()

**Returns:** `float`

### public float getNightStrength()

**Returns:** `float`

### public float getDayMeanTemperature()

**Returns:** `float`

### public float getTemperature()

**Returns:** `float`

### public float getBaseTemperature()

**Returns:** `float`

### public float getSnowStrength()

**Returns:** `float`

### public boolean getPrecipitationIsSnow()

**Returns:** `boolean`

### public float getPrecipitationIntensity()

**Returns:** `float`

### public float getFogIntensity()

**Returns:** `float`

### public float getWindIntensity()

**Returns:** `float`

### public float getWindAngleIntensity()

**Returns:** `float`

### public float getCorrectedWindAngleIntensity()

**Returns:** `float`

### public float getWindPower()

**Returns:** `float`

### public float getWindspeedKph()

**Returns:** `float`

### public float getCloudIntensity()

**Returns:** `float`

### public float getAmbient()

**Returns:** `float`

### public float getViewDistance()

**Returns:** `float`

### public float getHumidity()

**Returns:** `float`

### public float getWindAngleDegrees()

**Returns:** `float`

### public float getWindAngleRadians()

**Returns:** `float`

### public float getWindSpeedMovement()

**Returns:** `float`

### public float getWindForceMovement(IsoGameCharacter character,
float angle)

**Parameters:**
- `IsoGameCharacter` `character`
- `float` `angle`

**Returns:** `float`

### public boolean isRaining()

**Returns:** `boolean`

### public float getRainIntensity()

**Returns:** `float`

### public boolean isSnowing()

**Returns:** `boolean`

### public float getSnowIntensity()

**Returns:** `float`

### public void setAmbient(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void setViewDistance(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void setDayLightStrength(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void setPrecipitationIsSnow(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public ClimateManager.DayInfo getCurrentDay()

**Returns:** `ClimateManager.DayInfo`

### public ClimateManager.DayInfo getPreviousDay()

**Returns:** `ClimateManager.DayInfo`

### public ClimateManager.DayInfo getNextDay()

**Returns:** `ClimateManager.DayInfo`

### public ErosionSeason getSeason()

**Returns:** `ErosionSeason`

### public float getFrontStrength()

**Returns:** `float`

### public void stopWeatherAndThunder()

**Returns:** `void`

### public ThunderStorm getThunderStorm()

**Returns:** `ThunderStorm`

### public WeatherPeriod getWeatherPeriod()

**Returns:** `WeatherPeriod`

### public boolean getIsThunderStorming()

**Returns:** `boolean`

### public float getWeatherInterference()

**Returns:** `float`

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public float getAirTemperatureForCharacter(IsoGameCharacter plr)

**Parameters:**
- `IsoGameCharacter` `plr`

**Returns:** `float`

### public float getAirTemperatureForCharacter(IsoGameCharacter plr,
boolean doWindChill)

**Parameters:**
- `IsoGameCharacter` `plr`
- `boolean` `doWindChill`

**Returns:** `float`

### public float getAirTemperatureForSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `float`

### public float getAirTemperatureForSquare(IsoGridSquare square,
BaseVehicle vehicle)

**Parameters:**
- `IsoGridSquare` `square`
- `BaseVehicle` `vehicle`

**Returns:** `float`

### public float getAirTemperatureForSquare(IsoGridSquare square,
BaseVehicle vehicle,
boolean doWindChill)

**Parameters:**
- `IsoGridSquare` `square`
- `BaseVehicle` `vehicle`
- `boolean` `doWindChill`

**Returns:** `float`

### public String getSeasonName()

**Returns:** `String`

### public String getSeasonNameTranslated()

**Returns:** `String`

### public byte getSeasonId()

**Returns:** `byte`

### public float getSeasonProgression()

**Returns:** `float`

### public float getSeasonStrength()

**Returns:** `float`

### public void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public void updateEveryTenMins()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public static double getWindNoiseBase()

**Returns:** `double`

### public static double getWindNoiseFinal()

**Returns:** `double`

### public static double getWindTickFinal()

**Returns:** `double`

### public void updateOLD()

**Returns:** `void`

### public float getSnowFracNow()

**Returns:** `float`

### public void resetOverrides()

**Returns:** `void`

### public void resetModded()

**Returns:** `void`

### public void resetAdmin()

**Returns:** `void`

### public void triggerWinterIsComingStorm()

**Returns:** `void`

### public boolean triggerCustomWeather(float strength,
boolean warmFront)

**Parameters:**
- `float` `strength`
- `boolean` `warmFront`

**Returns:** `boolean`

### public boolean triggerCustomWeatherStage(int stage,
float duration)

**Parameters:**
- `int` `stage`
- `float` `duration`

**Returns:** `boolean`

### public void launchFlare()

**Returns:** `void`

### public void setSeasonColorDawn(int temperature,
int season,
float r,
float g,
float b,
float a,
boolean exterior)

**Parameters:**
- `int` `temperature`
- `int` `season`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `exterior`

**Returns:** `void`

### public void setSeasonColorDay(int temperature,
int season,
float r,
float g,
float b,
float a,
boolean exterior)

**Parameters:**
- `int` `temperature`
- `int` `season`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `exterior`

**Returns:** `void`

### public void setSeasonColorDusk(int temperature,
int season,
float r,
float g,
float b,
float a,
boolean exterior)

**Parameters:**
- `int` `temperature`
- `int` `season`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `exterior`

**Returns:** `void`

### public ClimateColorInfo getSeasonColor(int segment,
int temperature,
int season)

**Parameters:**
- `int` `segment`
- `int` `temperature`
- `int` `season`

**Returns:** `ClimateColorInfo`

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

### public void postCellLoadSetSnow()

**Returns:** `void`

### public void forceDayInfoUpdate()

**Returns:** `void`

### public final void receiveClimatePacket(ByteBufferReader bb,
UdpConnection ignoreConnection)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `ignoreConnection`

**Returns:** `void`

### public void transmitServerStopWeather()

**Returns:** `void`

### public void transmitServerTriggerStorm(float duration)

**Parameters:**
- `float` `duration`

**Returns:** `void`

### public void transmitServerTriggerLightning(int x,
int y,
boolean doStrike,
boolean doLightning,
boolean doRumble)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `doStrike`
- `boolean` `doLightning`
- `boolean` `doRumble`

**Returns:** `void`

### public void transmitServerStartRain(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public void transmitServerStopRain()

**Returns:** `void`

### public void transmitRequestAdminVars()

**Returns:** `void`

### public void transmitClientChangeAdminVars()

**Returns:** `void`

### public void transmitStopWeather()

**Returns:** `void`

### public void transmitTriggerStorm(float duration)

**Parameters:**
- `float` `duration`

**Returns:** `void`

### public void transmitTriggerTropical(float duration)

**Parameters:**
- `float` `duration`

**Returns:** `void`

### public void transmitTriggerBlizzard(float duration)

**Parameters:**
- `float` `duration`

**Returns:** `void`

### public void transmitGenerateWeather(float strength,
int front)

**Parameters:**
- `float` `strength`
- `int` `front`

**Returns:** `void`

### public static float clamp01(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static float clamp(float min,
float max,
float val)

**Parameters:**
- `float` `min`
- `float` `max`
- `float` `val`

**Returns:** `float`

### public static int clamp(int min,
int max,
int val)

**Parameters:**
- `int` `min`
- `int` `max`
- `int` `val`

**Returns:** `int`

### public static float lerp(float t,
float a,
float b)

**Parameters:**
- `float` `t`
- `float` `a`
- `float` `b`

**Returns:** `float`

### public static float clerp(float t,
float a,
float b)

**Parameters:**
- `float` `t`
- `float` `a`
- `float` `b`

**Returns:** `float`

### public static float normalizeRange(float v,
float n)

**Parameters:**
- `float` `v`
- `float` `n`

**Returns:** `float`

### public static float posToPosNegRange(float v)

**Parameters:**
- `float` `v`

**Returns:** `float`

### public void execute_Simulation()

**Returns:** `void`

### public void execute_Simulation(int rainModOverride)

**Parameters:**
- `int` `rainModOverride`

**Returns:** `void`

### public void triggerKateBobIntroStorm(int centerX,
int centerY,
double duration,
float strength,
float initialProgress,
float angle,
float initialPuddles)

**Parameters:**
- `int` `centerX`
- `int` `centerY`
- `double` `duration`
- `float` `strength`
- `float` `initialProgress`
- `float` `angle`
- `float` `initialPuddles`

**Returns:** `void`

### public void triggerKateBobIntroStorm(int centerX,
int centerY,
double duration,
float strength,
float initialProgress,
float angle,
float initialPuddles,
ClimateColorInfo cloudcolor)

**Parameters:**
- `int` `centerX`
- `int` `centerY`
- `double` `duration`
- `float` `strength`
- `float` `initialProgress`
- `float` `angle`
- `float` `initialPuddles`
- `ClimateColorInfo` `cloudcolor`

**Returns:** `void`

### public double getSimplexOffsetA()

**Returns:** `double`

### public double getSimplexOffsetB()

**Returns:** `double`

### public double getSimplexOffsetC()

**Returns:** `double`

### public double getSimplexOffsetD()

**Returns:** `double`

### public double getWorldAgeHours()

**Returns:** `double`

### public ClimateValues getClimateValuesCopy()

**Returns:** `ClimateValues`

### public void CopyClimateValues(ClimateValues copy)

**Parameters:**
- `ClimateValues` `copy`

**Returns:** `void`

### public ClimateForecaster getClimateForecaster()

**Returns:** `ClimateForecaster`

### public ClimateHistory getClimateHistory()

**Returns:** `ClimateHistory`

### public void CalculateWeatherFrontStrength(int year,
int month,
int day,
ClimateManager.AirFront front)

**Parameters:**
- `int` `year`
- `int` `month`
- `int` `day`
- `ClimateManager.AirFront` `front`

**Returns:** `void`

### public static String getWindAngleString(float angle)

**Parameters:**
- `float` `angle`

**Returns:** `String`

### public void sendInitialState(IConnection connection)
throws IOException

**Parameters:**
- `IConnection` `connection`

**Returns:** `void`

### public boolean isUpdated()

**Returns:** `boolean`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\ClimateManager.html`*
