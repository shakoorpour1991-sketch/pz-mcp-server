---
title: zombie.iso.PlayerCamera
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.PlayerCamera

`public final class PlayerCamera extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.PlayerCamera

## Fields

### public final int playerIndex

### public float offX

### public float offY

### public float lastOffX

### public float lastOffY

### public float rightClickTargetX

### public float rightClickTargetY

### public float rightClickX

### public float rightClickY

### public float deferedX

### public float deferedY

### public float zoom

### public int offscreenWidth

### public int offscreenHeight

### public final org.joml.Matrix4f projection

### public final org.joml.Matrix4f modelview

### public int width

### public int height

### public float fixJigglyModelsX

### public float fixJigglyModelsY

### public float fixJigglyModelsSquareX

### public float fixJigglyModelsSquareY

## Constructors

### public PlayerCamera(int playerIndex)

**Parameters:**
- `int` `playerIndex`

## Methods

### public void center()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public float getOffX()

**Returns:** `float`

### public float getOffY()

**Returns:** `float`

### public float getTOffX()

**Returns:** `float`

### public float getTOffY()

**Returns:** `float`

### public float getLastOffX()

**Returns:** `float`

### public float getLastOffY()

**Returns:** `float`

### public float XToIso(float screenX,
float screenY,
float floor)

**Parameters:**
- `float` `screenX`
- `float` `screenY`
- `float` `floor`

**Returns:** `float`

### public float YToIso(float screenX,
float screenY,
float floor)

**Parameters:**
- `float` `screenX`
- `float` `screenY`
- `float` `floor`

**Returns:** `float`

### public float YToScreenExact(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public float XToScreenExact(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public void copyFrom(PlayerCamera other)

**Parameters:**
- `PlayerCamera` `other`

**Returns:** `void`

### public void initFromIsoCamera(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void calculateModelViewProjection(float ox,
float oy,
float oz)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`

**Returns:** `void`

### public void calculateFixForJigglyModels(float ox,
float oy,
float oz)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\PlayerCamera.html`*
