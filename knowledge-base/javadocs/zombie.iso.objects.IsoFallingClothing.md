---
title: zombie.iso.objects.IsoFallingClothing
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoFallingClothing

`public class IsoFallingClothing extends IsoPhysicsObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.iso.IsoPhysicsObject
- zombie.iso.objects.IsoFallingClothing

## Fields

### public static final float DEFAULT_VELOCITY

### public static final float DEFAULT_Z_OFFSET

### public boolean addWorldItem

### public float targetX

### public float targetY

### public float targetZ

## Constructors

### public IsoFallingClothing(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoFallingClothing(IsoCell cell,
float x,
float y,
float z,
float xvel,
float yvel,
InventoryItem clothing)

**Parameters:**
- `IsoCell` `cell`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `xvel`
- `float` `yvel`
- `InventoryItem` `clothing`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void collideGround()

**Returns:** `void`

### public void collideWall()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo info,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `info`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoFallingClothing.html`*
