---
title: zombie.core.ImmutableColor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.ImmutableColor

`public final class ImmutableColor extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.ImmutableColor

## Fields

### public static final ImmutableColor transparent

### public static final ImmutableColor white

### public static final ImmutableColor yellow

### public static final ImmutableColor red

### public static final ImmutableColor purple

### public static final ImmutableColor blue

### public static final ImmutableColor green

### public static final ImmutableColor black

### public static final ImmutableColor gray

### public static final ImmutableColor cyan

### public static final ImmutableColor darkGray

### public static final ImmutableColor lightGray

### public static final ImmutableColor pink

### public static final ImmutableColor orange

### public static final ImmutableColor magenta

### public static final ImmutableColor darkGreen

### public static final ImmutableColor lightGreen

### public final float a

### public final float b

### public final float g

### public final float r

## Constructors

### public ImmutableColor(ImmutableColor color)

**Parameters:**
- `ImmutableColor` `color`

### public ImmutableColor(Color color)

**Parameters:**
- `Color` `color`

### public ImmutableColor(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

### public ImmutableColor(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

### public ImmutableColor(Color colorA,
Color colorB,
float delta)

**Parameters:**
- `Color` `colorA`
- `Color` `colorB`
- `float` `delta`

### public ImmutableColor(int r,
int g,
int b)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`

### public ImmutableColor(int r,
int g,
int b,
int a)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

### public ImmutableColor(int value)

**Parameters:**
- `int` `value`

## Methods

### public Color toMutableColor()

**Returns:** `Color`

### public static ImmutableColor random()

**Returns:** `ImmutableColor`

### public static ImmutableColor decode(String nm)

**Parameters:**
- `String` `nm`

**Returns:** `ImmutableColor`

### public ImmutableColor add(ImmutableColor c)

**Parameters:**
- `ImmutableColor` `c`

**Returns:** `ImmutableColor`

### public ImmutableColor brighter()

**Returns:** `ImmutableColor`

### public ImmutableColor brighter(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `ImmutableColor`

### public ImmutableColor darker()

**Returns:** `ImmutableColor`

### public ImmutableColor darker(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `ImmutableColor`

### public boolean equals(Object other)

**Parameters:**
- `Object` `other`

**Returns:** `boolean`

### public int getAlphaInt()

**Returns:** `int`

### public float getAlphaFloat()

**Returns:** `float`

### public float getRedFloat()

**Returns:** `float`

### public float getGreenFloat()

**Returns:** `float`

### public float getBlueFloat()

**Returns:** `float`

### public byte getAlphaByte()

**Returns:** `byte`

### public int getBlueInt()

**Returns:** `int`

### public byte getBlueByte()

**Returns:** `byte`

### public int getGreenInt()

**Returns:** `int`

### public byte getGreenByte()

**Returns:** `byte`

### public int getRedInt()

**Returns:** `int`

### public byte getRedByte()

**Returns:** `byte`

### public int hashCode()

**Returns:** `int`

### public ImmutableColor multiply(Color c)

**Parameters:**
- `Color` `c`

**Returns:** `ImmutableColor`

### public ImmutableColor scale(float value)

**Parameters:**
- `float` `value`

**Returns:** `ImmutableColor`

### public String toString()

**Returns:** `String`

### public ImmutableColor interp(ImmutableColor to,
float delta)

**Parameters:**
- `ImmutableColor` `to`
- `float` `delta`

**Returns:** `ImmutableColor`

### public static Integer[] HSBtoRGB(float hue,
float saturation,
float brightness)

**Parameters:**
- `float` `hue`
- `float` `saturation`
- `float` `brightness`

**Returns:** `Integer[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\ImmutableColor.html`*
