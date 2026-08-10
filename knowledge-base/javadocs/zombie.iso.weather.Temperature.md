---
title: zombie.iso.weather.Temperature
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.Temperature

`public class Temperature extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.Temperature

## Description

TurboTuTone.

## Fields

### public static final boolean DO_DEFAULT_BASE

### public static final boolean DO_DAYLEN_MOD

### public static final String CELSIUS_POSTFIX

### public static final String FAHRENHEIT_POSTFIX

### public static final float skinCelciusMin

### public static final float skinCelciusFavorable

### public static final float skinCelciusMax

### public static final float homeostasisDefault

### public static final float FavorableNakedTemp

### public static final float FavorableRoomTemp

### public static final float coreCelciusMin

### public static final float coreCelciusMax

### public static final float neutralZone

### public static final float Hypothermia_1

### public static final float Hypothermia_2

### public static final float Hypothermia_3

### public static final float Hypothermia_4

### public static final float Hyperthermia_1

### public static final float Hyperthermia_2

### public static final float Hyperthermia_3

### public static final float Hyperthermia_4

### public static final float TrueInsulationMultiplier

### public static final float TrueWindresistMultiplier

### public static final float BodyMinTemp

### public static final float BodyMaxTemp

## Constructors

### public Temperature()

## Methods

### public static String getCelsiusPostfix()

**Returns:** `String`

### public static String getFahrenheitPostfix()

**Returns:** `String`

### public static String getTemperaturePostfix()

**Returns:** `String`

### public static String getTemperatureString(float celsius)

**Parameters:**
- `float` `celsius`

**Returns:** `String`

### public static int getRoundedDisplayTemperature(float celsius)

**Parameters:**
- `float` `celsius`

**Returns:** `int`

### public static float CelsiusToFahrenheit(float celsius)

**Parameters:**
- `float` `celsius`

**Returns:** `float`

### public static float FahrenheitToCelsius(float fahrenheit)

**Parameters:**
- `float` `fahrenheit`

**Returns:** `float`

### public static float WindchillCelsiusKph(float t,
float v)

**Parameters:**
- `float` `t`
- `float` `v`

**Returns:** `float`

### public static float getTrueInsulationValue(float insulation)

**Parameters:**
- `float` `insulation`

**Returns:** `float`

### public static float getTrueWindresistanceValue(float windresist)

**Parameters:**
- `float` `windresist`

**Returns:** `float`

### public static void reset()

**Returns:** `void`

### public static float getFractionForRealTimeRatePerMin(float rate)

**Parameters:**
- `float` `rate`

**Returns:** `float`

### public static Color getValueColor(float val)

**Parameters:**
- `float` `val`

**Returns:** `Color`

### public static float getWindChillAmountForPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\Temperature.html`*
