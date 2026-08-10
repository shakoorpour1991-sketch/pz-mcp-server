---
title: zombie.debug.LineDrawer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.LineDrawer

`public final class LineDrawer extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.LineDrawer

## Constructors

### public LineDrawer()

## Methods

### public static void DrawRect(float x,
float y,
float z,
float width,
float height,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void DrawIsoRect(float x,
float y,
float width,
float height,
int z,
float r,
float g,
float bl)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `bl`

**Returns:** `void`

### public static void DrawIsoRect(float x,
float y,
float width,
float height,
int z,
int yPixelOffset,
float r,
float g,
float bl)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `z`
- `int` `yPixelOffset`
- `float` `r`
- `float` `g`
- `float` `bl`

**Returns:** `void`

### public static void DrawIsoRectRotated(float x,
float y,
float z,
float w,
float h,
float angleRadians,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `w`
- `float` `h`
- `float` `angleRadians`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void DrawIsoLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void DrawIsoLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
float r,
float g,
float b,
float a,
float baseThickness,
float topThickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `baseThickness`
- `float` `topThickness`

**Returns:** `void`

### public static void DrawIsoTransform(float px,
float py,
float z,
float rx,
float ry,
float radius,
int segments,
float r,
float g,
float b,
float a,
int t)

**Parameters:**
- `float` `px`
- `float` `py`
- `float` `z`
- `float` `rx`
- `float` `ry`
- `float` `radius`
- `int` `segments`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `t`

**Returns:** `void`

### public static void DrawIsoCircle(float x,
float y,
float z,
float radius,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `radius`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void DrawIsoCircle(float x,
float y,
float z,
float radius,
int segments,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `radius`
- `int` `segments`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void drawLine(float x,
float y,
float x2,
float y2,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void drawLine(float x,
float y,
float x2,
float y2,
float r,
float g,
float b,
float a,
float baseThickness,
float topThickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `baseThickness`
- `float` `topThickness`

**Returns:** `void`

### public static void drawRect(float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void drawArc(float cx,
float cy,
float cz,
float radius,
float direction,
float angle,
int segments,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `cx`
- `float` `cy`
- `float` `cz`
- `float` `radius`
- `float` `direction`
- `float` `angle`
- `int` `segments`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void drawCircle(float x,
float y,
float radius,
int segments,
float r,
float g,
float b)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `radius`
- `int` `segments`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public static void drawDirectionLine(float cx,
float cy,
float cz,
float radius,
float radians,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `cx`
- `float` `cy`
- `float` `cz`
- `float` `radius`
- `float` `radians`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void drawDirectionLine(float cx,
float cy,
float cz,
float radius,
float radians,
float r,
float g,
float b,
float a,
float baseThickness,
float topThickness)

**Parameters:**
- `float` `cx`
- `float` `cy`
- `float` `cz`
- `float` `radius`
- `float` `radians`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `baseThickness`
- `float` `topThickness`

**Returns:** `void`

### public static void drawDotLines(float cx,
float cy,
float cz,
float radius,
float direction,
float dot,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `cx`
- `float` `cy`
- `float` `cz`
- `float` `radius`
- `float` `direction`
- `float` `dot`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void addAlphaDecayingIsoCircle(float x,
float y,
float z,
float radius,
int segments,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `radius`
- `int` `segments`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void addAlphaDecayingLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void addLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
float r,
float g,
float b,
boolean bLine)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `boolean` `bLine`

**Returns:** `void`

### public static void addLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void addLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
int r,
int g,
int b,
String name)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `int` `r`
- `int` `g`
- `int` `b`
- `String` `name`

**Returns:** `void`

### public static void addLine(float x,
float y,
float z,
float x2,
float y2,
float z2,
float r,
float g,
float b,
String name,
boolean bLine)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `name`
- `boolean` `bLine`

**Returns:** `void`

### public static void addRect(float x,
float y,
float z,
float width,
float height,
float r,
float g,
float b)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public static void addRectYOffset(float x,
float y,
float z,
float width,
float height,
int yOffset,
float r,
float g,
float b)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `width`
- `float` `height`
- `int` `yOffset`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public static void clear()

**Returns:** `void`

### public void removeLine(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void render()

**Returns:** `void`

### public static void drawLines()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\LineDrawer.html`*
