---
title: zombie.core.Color
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.Color

`public final class Color extends Object implements Serializable`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.Color

## Description

A simple wrapper round the values required for a colour

## Fields

### public static final Color transparent

The fixed color transparent

### public static final Color white

The fixed colour white

### public static final Color yellow

The fixed colour yellow

### public static final Color red

The fixed colour red

### public static final Color purple

The fixed colour purple

### public static final Color blue

The fixed colour blue

### public static final Color green

The fixed colour green

### public static final Color black

The fixed colour black

### public static final Color gray

The fixed colour gray

### public static final Color cyan

The fixed colour cyan

### public static final Color darkGray

The fixed colour dark gray

### public static final Color lightGray

The fixed colour light gray

### public static final Color pink

The fixed colour dark pink

### public static final Color orange

The fixed colour dark orange

### public static final Color magenta

The fixed colour dark magenta

### public static final Color darkGreen

The fixed colour dark green

### public static final Color lightGreen

The fixed colour light green

### public float a

The alpha component of the colour

### public float b

The blue component of the colour

### public float g

The green component of the colour

### public float r

The red component of the colour

## Constructors

### public Color()

### public Color(Color color)

Copy constructor

**Parameters:**
- `Color` `color`

### public Color(float r,
float g,
float b)

Create a 3 component colour

**Parameters:**
- `float` `r` — The green component of the colour (0.0
- `float` `g` — The blue component of the colour (0.0
- `float` `b`

### public Color(float r,
float g,
float b,
float a)

Create a 4 component colour

**Parameters:**
- `float` `r` — The green component of the colour (0.0
- `float` `g` — The blue component of the colour (0.0
- `float` `b` — The alpha component of the colour (0.0
- `float` `a`

### public Color(Color colorA,
Color colorB,
float delta)

**Parameters:**
- `Color` `colorA`
- `Color` `colorB`
- `float` `delta`

### public Color(int r,
int g,
int b)

Create a 3 component colour

**Parameters:**
- `int` `r` — The green component of the colour (0
- `int` `g` — The blue component of the colour (0
- `int` `b`

### public Color(int r,
int g,
int b,
int a)

Create a 4 component colour

**Parameters:**
- `int` `r` — The green component of the colour (0
- `int` `g` — The blue component of the colour (0
- `int` `b` — The alpha component of the colour (0
- `int` `a`

### public Color(int value)

Create a colour from an evil integer packed 0xAARRGGBB. If AA
is specified as zero then it will be interpreted as unspecified
and hence a value of 255 will be recorded.

**Parameters:**
- `int` `value`

## Methods

### public float getR()

**Returns:** `float`

### public float getG()

**Returns:** `float`

### public float getB()

**Returns:** `float`

### public void setColor(Color colorA,
Color colorB,
float delta)

**Parameters:**
- `Color` `colorA`
- `Color` `colorB`
- `float` `delta`

**Returns:** `void`

### @Deprecated
public void fromColor(int valueABGR)

> ⚠️ **Deprecated**

Converts the supplied binary value into color values, and sets the result to this object.
Performs a clamp on the alpha channel.
Performs a special-case on the alpha channel, where if it is 0, it is set to MAX instead.

**Parameters:**
- `int` `valueABGR`

**Returns:** `void`

### public void setABGR(int valueABGR)

**Parameters:**
- `int` `valueABGR`

**Returns:** `void`

### public static Color abgrToColor(int valueABGR,
Color result)

**Parameters:**
- `int` `valueABGR`
- `Color` `result`

**Returns:** `Color`

### public static int colorToABGR(Color val)

**Parameters:**
- `Color` `val`

**Returns:** `int`

### public static int colorToABGR(ColorInfo val)

**Parameters:**
- `ColorInfo` `val`

**Returns:** `int`

### public static int colorToABGR(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `int`

### public static int multiplyABGR(int valueABGR,
int multiplierABGR)

**Parameters:**
- `int` `valueABGR`
- `int` `multiplierABGR`

**Returns:** `int`

### public static int multiplyBGR(int valueABGR,
int multiplierABGR)

**Parameters:**
- `int` `valueABGR`
- `int` `multiplierABGR`

**Returns:** `int`

### public static int blendBGR(int valueABGR,
int targetABGR)

**Parameters:**
- `int` `valueABGR`
- `int` `targetABGR`

**Returns:** `int`

### public static int blendABGR(int valueABGR,
int targetABGR)

**Parameters:**
- `int` `valueABGR`
- `int` `targetABGR`

**Returns:** `int`

### public static int tintABGR(int targetABGR,
int tintABGR)

**Parameters:**
- `int` `targetABGR`
- `int` `tintABGR`

**Returns:** `int`

### public static int lerpABGR(int colA,
int colB,
float alpha)

**Parameters:**
- `int` `colA`
- `int` `colB`
- `float` `alpha`

**Returns:** `int`

### public static float getAlphaChannelFromABGR(int valueABGR)

**Parameters:**
- `int` `valueABGR`

**Returns:** `float`

### public static float getBlueChannelFromABGR(int valueABGR)

**Parameters:**
- `int` `valueABGR`

**Returns:** `float`

### public static float getGreenChannelFromABGR(int valueABGR)

**Parameters:**
- `int` `valueABGR`

**Returns:** `float`

### public static float getRedChannelFromABGR(int valueABGR)

**Parameters:**
- `int` `valueABGR`

**Returns:** `float`

### public static int setAlphaChannelToABGR(int valueABGR,
float a)

**Parameters:**
- `int` `valueABGR`
- `float` `a`

**Returns:** `int`

### public static int setBlueChannelToABGR(int valueABGR,
float b)

**Parameters:**
- `int` `valueABGR`
- `float` `b`

**Returns:** `int`

### public static int setGreenChannelToABGR(int valueABGR,
float g)

**Parameters:**
- `int` `valueABGR`
- `float` `g`

**Returns:** `int`

### public static int setRedChannelToABGR(int valueABGR,
float r)

**Parameters:**
- `int` `valueABGR`
- `float` `r`

**Returns:** `int`

### public static Color random()

Create a random color.

**Returns:** `Color`

### public static Color decode(String nm)

Decode a number in a string and process it as a colour
reference.

**Parameters:**
- `String` `nm` — The number string to decode

**Returns:** `Color`

### public void add(Color c)

Add another colour to this one

**Parameters:**
- `Color` `c` — The colour to add

**Returns:** `void`

### public Color addToCopy(Color c)

Add another colour to this one

**Parameters:**
- `Color` `c` — The colour to add

**Returns:** `Color`

### public Color brighter()

Make a brighter instance of this colour

**Returns:** `Color`

### public Color brighter(float scale)

Make a brighter instance of this colour

**Parameters:**
- `float` `scale` — The scale up of RGB (i.e. if you supply 0.03 the colour will be brightened by 3%)

**Returns:** `Color`

### public Color darker()

Make a darker instance of this colour

**Returns:** `Color`

### public Color darker(float scale)

Make a darker instance of this colour

**Parameters:**
- `float` `scale` — The scale down of RGB (i.e. if you supply 0.03 the colour will be darkened by 3%)

**Returns:** `Color`

### public boolean equals(Object other)

**Parameters:**
- `Object` `other`

**Returns:** `boolean`

### public boolean equalBytes(Color other)

**Parameters:**
- `Color` `other`

**Returns:** `boolean`

### public Color set(Color other)

**Parameters:**
- `Color` `other`

**Returns:** `Color`

### public Color set(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `Color`

### public Color set(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `Color`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public int getAlpha()

get the alpha byte component of this colour

**Returns:** `int`

### public float getAlphaFloat()

**Returns:** `float`

### public float getRedFloat()

**Returns:** `float`

### public float getGreenFloat()

**Returns:** `float`

### public float getBlueFloat()

**Returns:** `float`

### public int getAlphaByte()

get the alpha byte component of this colour

**Returns:** `int`

### public int getBlue()

get the blue byte component of this colour

**Returns:** `int`

### public int getBlueByte()

get the blue byte component of this colour

**Returns:** `int`

### public int getGreen()

get the green byte component of this colour

**Returns:** `int`

### public int getGreenByte()

get the green byte component of this colour

**Returns:** `int`

### public int getRed()

get the red byte component of this colour

**Returns:** `int`

### public int getRedByte()

get the red byte component of this colour

**Returns:** `int`

### public int hashCode()

**Returns:** `int`

### public Color multiply(Color c)

Multiply this color by another

**Parameters:**
- `Color` `c` — the other color

**Returns:** `Color`

### public Color scale(float value)

Scale the components of the colour by the given value

**Parameters:**
- `float` `value` — The value to scale by

**Returns:** `Color`

### public Color scaleCopy(float value)

Scale the components of the colour by the given value

**Parameters:**
- `float` `value` — The value to scale by

**Returns:** `Color`

### public String toString()

**Returns:** `String`

### public void interp(Color to,
float delta,
Color dest)

**Parameters:**
- `Color` `to`
- `float` `delta`
- `Color` `dest`

**Returns:** `void`

### public void changeHSBValue(float hFactor,
float sFactor,
float bFactor)

**Parameters:**
- `float` `hFactor`
- `float` `sFactor`
- `float` `bFactor`

**Returns:** `void`

### public static Color HSBtoRGB(float hue,
float saturation,
float brightness,
Color result)

**Parameters:**
- `float` `hue`
- `float` `saturation`
- `float` `brightness`
- `Color` `result`

**Returns:** `Color`

### public static Color HSBtoRGB(float hue,
float saturation,
float brightness)

**Parameters:**
- `float` `hue`
- `float` `saturation`
- `float` `brightness`

**Returns:** `Color`

### public void saveCompactNoAlpha(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void loadCompactNoAlpha(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void saveCompact(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void loadCompact(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Color.html`*
