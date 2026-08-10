---
title: zombie.iso.weather.ClimateManager.ClimateColor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.ClimateManager.ClimateColor

`public static class ClimateManager.ClimateColor extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.ClimateManager.ClimateColor

## Constructors

### public ClimateColor()

## Methods

### public ClimateManager.ClimateColor init(int id,
String name)

**Parameters:**
- `int` `id`
- `String` `name`

**Returns:** `ClimateManager.ClimateColor`

### public int getID()

**Returns:** `int`

### public String getName()

**Returns:** `String`

### public ClimateColorInfo getInternalValue()

**Returns:** `ClimateColorInfo`

### public ClimateColorInfo getOverride()

**Returns:** `ClimateColorInfo`

### public float getOverrideInterpolate()

**Returns:** `float`

### public void setOverride(ClimateColorInfo targ,
float inter)

**Parameters:**
- `ClimateColorInfo` `targ`
- `float` `inter`

**Returns:** `void`

### public void setOverride(ByteBufferReader input,
float interp)

**Parameters:**
- `ByteBufferReader` `input`
- `float` `interp`

**Returns:** `void`

### public void setEnableOverride(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isEnableOverride()

**Returns:** `boolean`

### public void setEnableAdmin(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isEnableAdmin()

**Returns:** `boolean`

### public void setAdminValue(float r,
float g,
float b,
float a,
float r1,
float g1,
float b1,
float a1)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`

**Returns:** `void`

### public void setAdminValueExterior(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setAdminValueInterior(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setAdminValue(ClimateColorInfo targ)

**Parameters:**
- `ClimateColorInfo` `targ`

**Returns:** `void`

### public ClimateColorInfo getAdminValue()

**Returns:** `ClimateColorInfo`

### public void setEnableModded(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setModdedValue(ClimateColorInfo targ)

**Parameters:**
- `ClimateColorInfo` `targ`

**Returns:** `void`

### public ClimateColorInfo getModdedValue()

**Returns:** `ClimateColorInfo`

### public void setModdedInterpolate(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void setFinalValue(ClimateColorInfo targ)

**Parameters:**
- `ClimateColorInfo` `targ`

**Returns:** `void`

### public ClimateColorInfo getFinalValue()

**Returns:** `ClimateColorInfo`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\ClimateManager.ClimateColor.html`*
