---
title: zombie.iso.weather.WeatherPeriod.WeatherStage
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.WeatherPeriod.WeatherStage

`public static class WeatherPeriod.WeatherStage extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.WeatherPeriod.WeatherStage

## Constructors

### public WeatherStage()

### public WeatherStage(int id)

**Parameters:**
- `int` `id`

## Methods

### public void setStageID(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public double getStageStart()

**Returns:** `double`

### public double getStageEnd()

**Returns:** `double`

### public double getStageDuration()

**Returns:** `double`

### public int getStageID()

**Returns:** `int`

### public String getModID()

**Returns:** `String`

### public float getLinearT()

**Returns:** `float`

### public float getParabolicT()

**Returns:** `float`

### public void setTargetStrength(float t)

**Parameters:**
- `float` `t`

**Returns:** `void`

### public boolean getHasStartedCloud()

**Returns:** `boolean`

### public void setHasStartedCloud(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

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

### public void lerpEntryTo(int mid,
int end)

**Parameters:**
- `int` `mid`
- `int` `end`

**Returns:** `void`

### public float getStageCurrentStrength()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\WeatherPeriod.WeatherStage.html`*
