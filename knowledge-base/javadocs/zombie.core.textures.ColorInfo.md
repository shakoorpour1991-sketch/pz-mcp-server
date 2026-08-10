---
title: zombie.core.textures.ColorInfo
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.ColorInfo

`public final class ColorInfo extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.ColorInfo

## Fields

### public float a

### public float b

### public float g

### public float r

## Constructors

### public ColorInfo()

### public ColorInfo(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

## Methods

### public boolean equals(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `boolean`

### public ColorInfo set(ColorInfo other)

**Parameters:**
- `ColorInfo` `other`

**Returns:** `ColorInfo`

### public ColorInfo set(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `ColorInfo`

### public ColorInfo setRGB(float rgb)

**Parameters:**
- `float` `rgb`

**Returns:** `ColorInfo`

### public ColorInfo setRGB(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `ColorInfo`

### public ColorInfo setABGR(int abgr)

**Parameters:**
- `int` `abgr`

**Returns:** `ColorInfo`

### public ColorInfo min(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `ColorInfo`

### public ColorInfo minRGB(float rgb)

**Parameters:**
- `float` `rgb`

**Returns:** `ColorInfo`

### public ColorInfo minRGB(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `ColorInfo`

### public float getR()

**Returns:** `float`

### public float getG()

**Returns:** `float`

### public float getB()

**Returns:** `float`

### public Color toColor()

**Returns:** `Color`

### public ImmutableColor toImmutableColor()

**Returns:** `ImmutableColor`

### public float getA()

**Returns:** `float`

### public void desaturate(float s)

**Parameters:**
- `float` `s`

**Returns:** `void`

### public void interp(ColorInfo to,
float delta,
ColorInfo dest)

**Parameters:**
- `ColorInfo` `to`
- `float` `delta`
- `ColorInfo` `dest`

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\ColorInfo.html`*
