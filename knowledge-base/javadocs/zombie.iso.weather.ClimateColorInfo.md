---
title: zombie.iso.weather.ClimateColorInfo
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.ClimateColorInfo

`public class ClimateColorInfo extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.ClimateColorInfo

## Description

TurboTuTone.
A pair of colors for global light interior and exterior, the alpha of the colors is blend intensity.
When outside the shader is used to apply global light, when inside a room its using a different method (using the weather mask) to do the coloring of outside parts.
This requires separate balancing of colors as using one and the same for both methods doesn't always look right.

## Constructors

### public ClimateColorInfo()

### public ClimateColorInfo(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

### public ClimateColorInfo(float r,
float g,
float b,
float a,
float r2,
float g2,
float b2,
float a2)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `r2`
- `float` `g2`
- `float` `b2`
- `float` `a2`

## Methods

### public void setInterior(Color other)

**Parameters:**
- `Color` `other`

**Returns:** `void`

### public void setInterior(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public Color getInterior()

**Returns:** `Color`

### public void setExterior(Color other)

**Parameters:**
- `Color` `other`

**Returns:** `void`

### public void setExterior(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public Color getExterior()

**Returns:** `Color`

### public void setTo(ClimateColorInfo other)

**Parameters:**
- `ClimateColorInfo` `other`

**Returns:** `void`

### public ClimateColorInfo interp(ClimateColorInfo to,
float t,
ClimateColorInfo result)

**Parameters:**
- `ClimateColorInfo` `to`
- `float` `t`
- `ClimateColorInfo` `result`

**Returns:** `ClimateColorInfo`

### public void scale(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public static ClimateColorInfo interp(ClimateColorInfo source,
ClimateColorInfo target,
float t,
ClimateColorInfo resultColorInfo)

**Parameters:**
- `ClimateColorInfo` `source`
- `ClimateColorInfo` `target`
- `float` `t`
- `ClimateColorInfo` `resultColorInfo`

**Returns:** `ClimateColorInfo`

### public void write(ByteBufferWriter output)

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void read(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

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

### public static boolean writeColorInfoConfig()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\ClimateColorInfo.html`*
