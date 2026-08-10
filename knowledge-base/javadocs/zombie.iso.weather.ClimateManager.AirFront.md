---
title: zombie.iso.weather.ClimateManager.AirFront
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.ClimateManager.AirFront

`public static class ClimateManager.AirFront extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.ClimateManager.AirFront

## Constructors

### public AirFront()

## Methods

### public float getDays()

**Returns:** `float`

### public float getMaxNoise()

**Returns:** `float`

### public float getTotalNoise()

**Returns:** `float`

### public int getType()

**Returns:** `int`

### public float getStrength()

**Returns:** `float`

### public float getAngleDegrees()

**Returns:** `float`

### public void setFrontType(int type)

**Parameters:**
- `int` `type`

**Returns:** `void`

### public void setStrength(float str)

**Parameters:**
- `float` `str`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void load(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `void`

### public void addDaySample(float noiseval)

**Parameters:**
- `float` `noiseval`

**Returns:** `void`

### public void copyFrom(ClimateManager.AirFront other)

**Parameters:**
- `ClimateManager.AirFront` `other`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\ClimateManager.AirFront.html`*
