---
title: zombie.iso.objects.IsoBloodDrop
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoBloodDrop

`public class IsoBloodDrop extends IsoPhysicsObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.iso.IsoPhysicsObject
- zombie.iso.objects.IsoBloodDrop

## Fields

### public float tintb

### public float tintg

### public float tintr

### public float time

## Constructors

### public IsoBloodDrop(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoBloodDrop(IsoCell cell,
float x,
float y,
float z,
float xvel,
float yvel)

**Parameters:**
- `IsoCell` `cell`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `xvel`
- `float` `yvel`

## Methods

### public boolean Serialize()

**Returns:** `boolean`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoBloodDrop.html`*
