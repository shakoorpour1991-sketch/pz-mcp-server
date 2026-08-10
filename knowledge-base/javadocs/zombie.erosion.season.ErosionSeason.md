---
title: zombie.erosion.season.ErosionSeason
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.erosion.season
---

# zombie.erosion.season.ErosionSeason

`public final class ErosionSeason extends Object`

**Kind:** class · **Package:** zombie.erosion.season

## Inheritance
- java.lang.Object
- zombie.erosion.season.ErosionSeason

## Fields

### public static final int SEASON_DEFAULT

### public static final int SEASON_SPRING

### public static final int SEASON_SUMMER

### public static final int SEASON_SUMMER2

### public static final int SEASON_AUTUMN

### public static final int SEASON_WINTER

### public static final int NUM_SEASONS

## Constructors

### public ErosionSeason()

## Methods

### public void init(int lat,
int tempMax,
int tempMin,
int tempDiff,
int seasonLag,
float noon,
int seedA,
int seedB,
int seedC)

**Parameters:**
- `int` `lat`
- `int` `tempMax`
- `int` `tempMin`
- `int` `tempDiff`
- `int` `seasonLag`
- `float` `noon`
- `int` `seedA`
- `int` `seedB`
- `int` `seedC`

**Returns:** `void`

### public int getLat()

**Returns:** `int`

### public int getTempMax()

**Returns:** `int`

### public int getTempMin()

**Returns:** `int`

### public int getTempDiff()

**Returns:** `int`

### public int getSeasonLag()

**Returns:** `int`

### public float getHighNoon()

**Returns:** `float`

### public int getSeedA()

**Returns:** `int`

### public int getSeedB()

**Returns:** `int`

### public int getSeedC()

**Returns:** `int`

### public void setRain(float jan,
float feb,
float mar,
float apr,
float may,
float jun,
float jul,
float aug,
float sep,
float oct,
float nov,
float dec)

**Parameters:**
- `float` `jan`
- `float` `feb`
- `float` `mar`
- `float` `apr`
- `float` `may`
- `float` `jun`
- `float` `jul`
- `float` `aug`
- `float` `sep`
- `float` `oct`
- `float` `nov`
- `float` `dec`

**Returns:** `void`

### public ErosionSeason clone()

**Returns:** `ErosionSeason`

### public float getCurDayPercent()

**Returns:** `float`

### public double getMaxDaylightWinter()

**Returns:** `double`

### public double getMaxDaylightSummer()

**Returns:** `double`

### public float getDusk()

**Returns:** `float`

### public float getDawn()

**Returns:** `float`

### public float getDaylight()

**Returns:** `float`

### public float getDayTemperature()

**Returns:** `float`

### public float getDayMeanTemperature()

**Returns:** `float`

### public int getSeason()

**Returns:** `int`

### public float getDayHighNoon()

**Returns:** `float`

### public String getSeasonName()

**Returns:** `String`

### public String getSeasonNameTranslated()

**Returns:** `String`

### public boolean isSeason(int season)

**Parameters:**
- `int` `season`

**Returns:** `boolean`

### public GregorianCalendar getWinterStartDay(int day,
int month,
int year)

**Parameters:**
- `int` `day`
- `int` `month`
- `int` `year`

**Returns:** `GregorianCalendar`

### public float getSeasonDay()

**Returns:** `float`

### public float getSeasonDays()

**Returns:** `float`

### public float getSeasonStrength()

**Returns:** `float`

### public float getSeasonProgression()

**Returns:** `float`

### public float getDayNoiseVal()

**Returns:** `float`

### public boolean isRainDay()

**Returns:** `boolean`

### public float getRainDayStrength()

**Returns:** `float`

### public float getRainYearAverage()

**Returns:** `float`

### public boolean isThunderDay()

**Returns:** `boolean`

### public boolean isSunnyDay()

**Returns:** `boolean`

### public void setDay(int day,
int month,
int year)

**Parameters:**
- `int` `day`
- `int` `month`
- `int` `year`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public void setCurSeason(int season)

**Parameters:**
- `int` `season`

**Returns:** `void`

### public boolean isEndlessDay()

**Returns:** `boolean`

### public boolean isEndlessNight()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\season\ErosionSeason.html`*
