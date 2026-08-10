---
title: zombie.GameTime
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.GameTime

`public final class GameTime extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.GameTime

## Description

Tracks both in-game time and real world time. This class is very old and so has a lot of random/deprecated functionality.

## Fields

### public static final int NANOSECONDS_PER_SECOND

### public static final int MILLISECONDS_PER_SECOND

### public static final float MinutesPerHour

### public static final float SecondsPerHour

### public static final int SECONDS_PER_MINUTE

### public static final float MULTIPLIER

### public static final float THIRTY_FPS_SCALE

### public static GameTime instance

Because of how Kahlua exposes static fields, when accessed from Lua, this will return a stale GameTime object that does not hold the correct game state. Lua mods should always use getGameTime() or GameTime.getInstance() instead of this field.

### public float timeOfDay

### public int nightsSurvived

### public PZCalendar calender

### public float fpsMultiplier

### public float moon

### public float serverTimeOfDay

### public float serverLastTimeOfDay

### public int serverNewDays

### public float lightSourceUpdate

### public float multiplierBias

### public float lastLastTimeOfDay

### public float perObjectMultiplier

## Constructors

### public GameTime()

## Methods

### public static GameTime getInstance()

**Returns:** `GameTime`

### public static void setInstance(GameTime aInstance)

**Parameters:**
- `GameTime` `aInstance`

**Returns:** `void`

### public static void syncServerTime(long timeClientSend,
long timeServer,
long timeClientReceive)

**Parameters:**
- `long` `timeClientSend`
- `long` `timeServer`
- `long` `timeClientReceive`

**Returns:** `void`

### public static long getServerTime()

**Returns:** `long`

### public static long getServerTimeMills()

**Returns:** `long`

### public static boolean getServerTimeShiftIsSet()

**Returns:** `boolean`

### public static void setServerTimeShift(long tshift)

**Parameters:**
- `long` `tshift`

**Returns:** `void`

### public static boolean isGamePaused()

**Returns:** `boolean`

### public float getRealworldSecondsSinceLastUpdate()

Number of real seconds since the last tick.

**Returns:** `float`

### public float getMultipliedSecondsSinceLastUpdate()

Number of real world seconds since the last tick, multiplied by game speed.

**Returns:** `float`

### public float getPhysicsSecondsSinceLastUpdate()

**Returns:** `float`

### public static float getSlomoMultiplier()

**Returns:** `float`

### public float getGameWorldSecondsSinceLastUpdate()

Number of in-game seconds passed since the last tick.

**Returns:** `float`

### public int daysInMonth(int year,
int month)

Returns the number of days in a month.

**Parameters:**
- `int` `year` — Year of the month. Required to account for leap years.
- `int` `month` — 0 indexed month of the year.

**Returns:** `int`

### public String getDeathString(IsoPlayer playerObj)

Returns the time survived string to show on death for a player.

**Parameters:**
- `IsoPlayer` `playerObj` — Player to get the string for.

**Returns:** `String`

### public int getDaysSurvived()

The number of full days survived by the current local player who has survived the longest modulo 30.

**Returns:** `int`

### public String getTimeSurvived(IsoPlayer playerObj)

Gets a string that describes how long a player has survived for.

**Parameters:**
- `IsoPlayer` `playerObj` — Player to get the string for.

**Returns:** `String`

### public String getZombieKilledText(IsoPlayer playerObj)

Returns a string describing how many zombies a player has killed.

**Parameters:**
- `IsoPlayer` `playerObj` — Player to get the string for.

**Returns:** `String`

### public String getGameModeText()

String describing the current game mode.

**Returns:** `String`

### public void init()

**Returns:** `void`

### public float Lerp(float start,
float end,
float delta)

Interpolates between two values by a given amount.

**Parameters:**
- `float` `start` — Value to interpolation from.
- `float` `end` — Value to interpolate to.
- `float` `delta` — 0-1 amount to interpolate between the two values.

**Returns:** `float`

### public void RemoveZombiesIndiscriminate(int i)

Removes a specific number of zombies from the world.

**Parameters:**
- `int` `i` — Number of zombies to remove.

**Returns:** `void`

### public float TimeLerp(float startVal,
float endVal,
float startTime,
float endTime)

Interpolates between two values based on the current time of day.

**Parameters:**
- `float` `startVal` — Value to interpolate from.
- `float` `endVal` — Value to interpoalte to.
- `float` `startTime` — Time of day in hours to start interpolation. If the current time is before this, startVal is returned.
- `float` `endTime` — Time of day in hours to end interpolation. If the current time is after this, endVal is returned. If this is less than startTime, it is considered a time in the next day.

**Returns:** `float`

### public float getDeltaMinutesPerDay()

Delta between the default and current day length (as configured in the sandbox options). When using a time delta, multiply by this as well to make the value increase at a fixed game-time rate rather than real time.

**Returns:** `float`

### public float getNightMin()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setNightMin(float min)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `min`

**Returns:** `void`

### public float getNightMax()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setNightMax(float max)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `max`

**Returns:** `void`

### public int getMinutes()

**Returns:** `int`

### public void setMoon(float moon)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `moon`

**Returns:** `void`

### public void update(boolean bSleeping)

**Parameters:**
- `boolean` `bSleeping`

**Returns:** `void`

### public long getMinutesStamp()

Number of minutes since the world was created. Has the same inaccuracy as getWorldAgeHours().

**Returns:** `long`

### public boolean getThunderStorm()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public float getAmbient()

> ⚠️ **Deprecated**

**Returns:** `float`

### public int getSkyLightLevel()

**Returns:** `int`

### public void setAmbient(float ambient)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `ambient` — the Ambient to set

**Returns:** `void`

### public float getAmbientMax()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setAmbientMax(float ambientMax)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `ambientMax` — the AmbientMax to set

**Returns:** `void`

### public float getAmbientMin()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setAmbientMin(float ambientMin)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `ambientMin` — the AmbientMin to set

**Returns:** `void`

### public int getDay()

Current day of the month in the game world.

**Returns:** `int`

### public void setDay(int day)

Current day of the month in the game world.

**Parameters:**
- `int` `day` — 0 indexed day of the month.

**Returns:** `void`

### public int getDayPlusOne()

Current day of the month in the game world, plus 1.

**Returns:** `int`

### public int getStartDay()

Day of the month the game started on as defined by sandbox options. The value will change if sandbox options are changed, so getNightsSurvived() or getWorldAgeHours() should be used instead to determine the age of the world.

**Returns:** `int`

### public void setStartDay(int startDay)

Day of the month the game started on as defined by sandbox options. Changing this does not affect the age of the world.

**Parameters:**
- `int` `startDay` — 0 indexed day of the month the game started on.

**Returns:** `void`

### public float getMaxZombieCountStart()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setMaxZombieCountStart(float maxZombieCountStart)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `maxZombieCountStart` — the MaxZombieCountStart to set

**Returns:** `void`

### public float getMinZombieCountStart()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setMinZombieCountStart(float minZombieCountStart)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `minZombieCountStart` — the MinZombieCountStart to set

**Returns:** `void`

### public float getMaxZombieCount()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setMaxZombieCount(float maxZombieCount)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `maxZombieCount` — the MaxZombieCount to set

**Returns:** `void`

### public float getMinZombieCount()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setMinZombieCount(float minZombieCount)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `minZombieCount` — the MinZombieCount to set

**Returns:** `void`

### public int getMonth()

Current month of the year in the game world.

**Returns:** `int`

### public void setMonth(int month)

Current month of the year in the game world.

**Parameters:**
- `int` `month` — 0 indexed month of the year.

**Returns:** `void`

### public int getStartMonth()

Month of the year the game started on as defined by sandbox options. The value will change if sandbox options are changed, so getNightsSurvived() or getWorldAgeHours() should be used instead to determine the age of the world.

**Returns:** `int`

### public void setStartMonth(int startMonth)

Month of the year the game started on as defined by sandbox options. Changing this does not affect the age of the world.

**Parameters:**
- `int` `startMonth` — 0 indexed month of the year the game started on.

**Returns:** `void`

### public float getNightTint()

> ⚠️ **Deprecated**

**Returns:** `float`

### public float getNight()

> ⚠️ **Deprecated**

**Returns:** `float`

### public float getTimeOfDay()

**Returns:** `float`

### public void setTimeOfDay(float timeOfDay)

**Parameters:**
- `float` `timeOfDay` — the TimeOfDay to set

**Returns:** `void`

### public float getStartTimeOfDay()

Time of day the game started on as defined by sandbox options. The value will change if sandbox options are changed, so getNightsSurvived() or getWorldAgeHours() should be used instead to determine the age of the world.

**Returns:** `float`

### public void setStartTimeOfDay(float startTimeOfDay)

Time of day the game started on as defined by sandbox options. The value will change if sandbox options are changed, so getNightsSurvived() or getWorldAgeHours() should be used instead to determine the age of the world. Changing this does not affect the age of the world.

**Parameters:**
- `float` `startTimeOfDay` — The time of day in hours the game started at.

**Returns:** `void`

### public float getViewDist()

**Returns:** `float`

### public float getViewDistMax()

**Returns:** `float`

### public void setViewDistMax(float viewDistMax)

**Parameters:**
- `float` `viewDistMax` — the ViewDistMax to set

**Returns:** `void`

### public float getViewDistMin()

> ⚠️ **Deprecated**

**Returns:** `float`

### public void setViewDistMin(float viewDistMin)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `viewDistMin` — the ViewDistMin to set

**Returns:** `void`

### public int getYear()

Current year in the game world.

**Returns:** `int`

### public void setYear(int year)

Current year in the game world.

**Parameters:**
- `int` `year`

**Returns:** `void`

### public int getStartYear()

Year the game started on.

**Returns:** `int`

### public void setStartYear(int startYear)

Year the game started on. Changing this does not affect the age of the world.

**Parameters:**
- `int` `startYear` — Year the game started on.

**Returns:** `void`

### public int getNightsSurvived()

Gets the number of nights that have passed since the save was created. 7am is considered the end of a night.

**Returns:** `int`

### public void setNightsSurvived(int nightsSurvived)

Number of nights since the game began. A night is survived when the time passes 7am.

**Parameters:**
- `int` `nightsSurvived` — the NightsSurvived to set

**Returns:** `void`

### public double getWorldAgeDaysSinceBegin()

**Returns:** `double`

### public double getWorldAgeHours()

Gets the age of the world from the start of the game in hours. The value can be slightly off from the true value depending on game settings, as it considers every 7am passing to be a 24 hour period, however the game does not by default start at 7am. The true number of hours can be calculated by subtracting (getStartTimeOfDay() - 7). However, the uncorrected value is still suitable as a timestamp, as the offset is consistent.

**Returns:** `double`

### public double getHoursSurvived()

> ⚠️ **Deprecated**

**Returns:** `double`

### public void setHoursSurvived(double hoursSurvived)

> ⚠️ **Deprecated**

**Parameters:**
- `double` `hoursSurvived` — the HoursSurvived to set

**Returns:** `void`

### public int getHour()

**Returns:** `int`

### public PZCalendar getCalender()

**Returns:** `PZCalendar`

### public void setCalender(PZCalendar calendar)

**Parameters:**
- `PZCalendar` `calendar` — the Calender to set

**Returns:** `void`

### public void updateCalendar(int year,
int month,
int dayOfMonth,
int hourOfDay,
int minute)

**Parameters:**
- `int` `year`
- `int` `month`
- `int` `dayOfMonth`
- `int` `hourOfDay`
- `int` `minute`

**Returns:** `void`

### public float getMinutesPerDay()

**Returns:** `float`

### public void setMinutesPerDay(float minutesPerDay)

**Parameters:**
- `float` `minutesPerDay` — the MinutesPerDay to set

**Returns:** `void`

### public float getLastTimeOfDay()

**Returns:** `float`

### public void setLastTimeOfDay(float lastTimeOfDay)

**Parameters:**
- `float` `lastTimeOfDay` — the LastTimeOfDay to set

**Returns:** `void`

### public void setTargetZombies(int targetZombies)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `targetZombies` — the TargetZombies to set

**Returns:** `void`

### public boolean isRainingToday()

**Returns:** `boolean`

### public float getMultiplier()

Number of real world seconds since the last tick, multiplied by game speed. Also multiplied by 48 for some reason.

**Returns:** `float`

### public void setMultiplier(float multiplier)

The multiplier scales the game simulation speed. getTrueMultiplier() can be used to retrieve this value. getMultiplier() does not return this value.

**Parameters:**
- `float` `multiplier` — the Multiplier to set

**Returns:** `void`

### public float getTimeDelta()

Number of real world seconds since the last tick, multiplied by game speed.

**Returns:** `float`

### public float getTimeDeltaFromMultiplier(float multiplier)

**Parameters:**
- `float` `multiplier`

**Returns:** `float`

### public float getMultiplierFromTimeDelta(float timeDelta)

**Parameters:**
- `float` `timeDelta`

**Returns:** `float`

### public float getServerMultiplier()

Delta based on the target framerate rather than the actual framerate. Unclear purpose. Probably shouldn't be used.

**Returns:** `float`

### public float getUnmoddedMultiplier()

Number of real world seconds since the last tick, multiplied by game speed.

**Returns:** `float`

### public float getInvMultiplier()

Return the inverse of getMultiplier() (1 / getMultiplier()). Per-tick RNG functions can multiply by this value to keep chances relatively stable across different framerates.

**Returns:** `float`

### public float getTrueMultiplier()

Returns the current game speed multiplier (from the singleplayer speed up UI or while all players are sleeping).

**Returns:** `float`

### public float getThirtyFPSMultiplier()

**Returns:** `float`

### public float getMultiplierInMenu()

**Returns:** `float`

### public float getThirtyFPSMultiplierInMenu()

**Returns:** `float`

### public float getTimeDeltaInMenu()

**Returns:** `float`

### public void saveToBufferMap(SaveBufferMap bufferMap)

**Parameters:**
- `SaveBufferMap` `bufferMap`

**Returns:** `void`

### public void save()

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `void`

### public void load(ByteBufferReader input)
throws IOException

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

### public void load()

**Returns:** `void`

### public int getDawn()

> ⚠️ **Deprecated**

**Returns:** `int`

### public void setDawn(int dawn)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `dawn`

**Returns:** `void`

### public int getDusk()

> ⚠️ **Deprecated**

**Returns:** `int`

### public void setDusk(int dusk)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `dusk`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getModData()

This was used to store non-object-specific mod data in the save file before global mod data was added. It is generally better to use the global mod data API provided by ModData.

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean isThunderDay()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### public void setThunderDay(boolean thunderDay)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `thunderDay`

**Returns:** `void`

### public void saveToPacket(ByteBufferWriter bb)
throws IOException

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public int getHelicopterDay1()

**Returns:** `int`

### public int getHelicopterDay()

**Returns:** `int`

### public void setHelicopterDay(int day)

**Parameters:**
- `int` `day`

**Returns:** `void`

### public int getHelicopterStartHour()

**Returns:** `int`

### public void setHelicopterStartHour(int hour)

**Parameters:**
- `int` `hour`

**Returns:** `void`

### public int getHelicopterEndHour()

**Returns:** `int`

### public void setHelicopterEndHour(int hour)

**Parameters:**
- `int` `hour`

**Returns:** `void`

### public boolean isEndlessDay()

**Returns:** `boolean`

### public boolean isEndlessNight()

**Returns:** `boolean`

### public boolean isDay()

**Returns:** `boolean`

### public boolean isNight()

**Returns:** `boolean`

### public boolean isZombieActivityPhase()

**Returns:** `boolean`

### public boolean isZombieInactivityPhase()

**Returns:** `boolean`

### public double minHours(double hours)

**Parameters:**
- `double` `hours`

**Returns:** `double`

### public static double minHours(double hours,
double worldAgeHours)

**Parameters:**
- `double` `hours`
- `double` `worldAgeHours`

**Returns:** `double`

### public float minHours(float hours)

**Parameters:**
- `float` `hours`

**Returns:** `float`

### public static float minHours(float hours,
float worldAgeHours)

**Parameters:**
- `float` `hours`
- `float` `worldAgeHours`

**Returns:** `float`

### public double clampHours(double hours)

**Parameters:**
- `double` `hours`

**Returns:** `double`

### public float clampHours(float hours)

**Parameters:**
- `float` `hours`

**Returns:** `float`

### public static double clampHours(double hours,
double worldAgeHours)

**Parameters:**
- `double` `hours`
- `double` `worldAgeHours`

**Returns:** `double`

### public static float clampHours(float hours,
float worldAgeHours)

**Parameters:**
- `float` `hours`
- `float` `worldAgeHours`

**Returns:** `float`

### public static double checkHours(double hours,
double worldAgeHours)

**Parameters:**
- `double` `hours`
- `double` `worldAgeHours`

**Returns:** `double`

### public static float checkHours(float hours,
float worldAgeHours)

**Parameters:**
- `float` `hours`
- `float` `worldAgeHours`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\GameTime.html`*
