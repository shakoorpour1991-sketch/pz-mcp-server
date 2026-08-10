---
title: zombie.iso.WorldMarkers.PlayerHomingPoint
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.WorldMarkers.PlayerHomingPoint

`public static class WorldMarkers.PlayerHomingPoint extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.WorldMarkers.PlayerHomingPoint

## Constructors

### public PlayerHomingPoint(int plrIndex)

**Parameters:**
- `int` `plrIndex`

## Methods

### public void setTexture(String texname)

**Parameters:**
- `String` `texname`

**Returns:** `void`

### public void remove()

When called will remove the pointer next tick

**Returns:** `void`

### public boolean isRemoved()

**Returns:** `boolean`

### public boolean isActive()

Active can be set to false, the pointer will remain but wont be drawn.

**Returns:** `boolean`

### public void setActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public float getR()

**Returns:** `float`

### public void setR(float r)

**Parameters:**
- `float` `r`

**Returns:** `void`

### public float getB()

**Returns:** `float`

### public void setB(float b)

**Parameters:**
- `float` `b`

**Returns:** `void`

### public float getG()

**Returns:** `float`

### public void setG(float g)

**Parameters:**
- `float` `g`

**Returns:** `void`

### public float getA()

**Returns:** `float`

### public void setA(float a)

**Parameters:**
- `float` `a`

**Returns:** `void`

### public int getHomeOnTargetDist()

The distance in tiles uppon which the pointer will jump to target (if homeOnTarget is enabled, and the target is onScreen)

**Returns:** `int`

### public void setHomeOnTargetDist(int homeOnTargetDist)

**Parameters:**
- `int` `homeOnTargetDist`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public float getTargetAngle()

**Returns:** `float`

### public void setTargetAngle(float targetAngle)

**Parameters:**
- `float` `targetAngle`

**Returns:** `void`

### public boolean isCustomTargetAngle()

When enabled will ommit angle calculation, custom angle be set with 'setTargetAngle'.

**Returns:** `boolean`

### public void setCustomTargetAngle(boolean customTargetAngle)

**Parameters:**
- `boolean` `customTargetAngle`

**Returns:** `void`

### public int getX()

The target position on the map for this pointer.

**Returns:** `int`

### public void setX(int x)

**Parameters:**
- `int` `x`

**Returns:** `void`

### public int getY()

**Returns:** `int`

### public void setY(int y)

**Parameters:**
- `int` `y`

**Returns:** `void`

### public float getAngleLerpVal()

The lerp value for angle adjustment, can be tweaked to be more slowly or faster responding.

**Returns:** `float`

### public void setAngleLerpVal(float angleLerpVal)

**Parameters:**
- `float` `angleLerpVal`

**Returns:** `void`

### public float getMovementLerpVal()

The lerp value for jumping to target (homeOneTarget), can be tweaked to be more slowly or faster responding.

**Returns:** `float`

### public void setMovementLerpVal(float movementLerpVal)

**Parameters:**
- `float` `movementLerpVal`

**Returns:** `void`

### public boolean isHomeOnTargetInView()

if enabled the pointer will jump to the target when its in view (and within the 'homeOnTargetDist'.

**Returns:** `boolean`

### public void setHomeOnTargetInView(boolean homeOnTargetInView)

**Parameters:**
- `boolean` `homeOnTargetInView`

**Returns:** `void`

### public float getRenderWidth()

Render width and height for the pointer texture.

**Returns:** `float`

### public void setRenderWidth(float renderWidth)

**Parameters:**
- `float` `renderWidth`

**Returns:** `void`

### public float getRenderHeight()

**Returns:** `float`

### public void setRenderHeight(float renderHeight)

**Parameters:**
- `float` `renderHeight`

**Returns:** `void`

### public float getStickToCharDist()

The distance in pixels the pointer will hover around the character.

**Returns:** `float`

### public void setStickToCharDist(float stickToCharDist)

**Parameters:**
- `float` `stickToCharDist`

**Returns:** `void`

### public float getRenderOffsetX()

The base render position for pointers is the center of the screen, adjust this to have it more at feet or head of character for example.

**Returns:** `float`

### public void setRenderOffsetX(float renderOffsetX)

**Parameters:**
- `float` `renderOffsetX`

**Returns:** `void`

### public float getRenderOffsetY()

**Returns:** `float`

### public void setRenderOffsetY(float renderOffsetY)

**Parameters:**
- `float` `renderOffsetY`

**Returns:** `void`

### public float getHomeOnOffsetX()

Offset the screen target point, for example to point to top of counter by offsetting Y value

**Returns:** `float`

### public void setHomeOnOffsetX(float homeOnOffsetX)

**Parameters:**
- `float` `homeOnOffsetX`

**Returns:** `void`

### public float getHomeOnOffsetY()

**Returns:** `float`

### public void setHomeOnOffsetY(float homeOnOffsetY)

**Parameters:**
- `float` `homeOnOffsetY`

**Returns:** `void`

### public void setTableSurface()

**Returns:** `void`

### public void setHighCounter()

**Returns:** `void`

### public void setYOffsetScaled(float offset)

**Parameters:**
- `float` `offset`

**Returns:** `void`

### public void setXOffsetScaled(float offset)

**Parameters:**
- `float` `offset`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\WorldMarkers.PlayerHomingPoint.html`*
