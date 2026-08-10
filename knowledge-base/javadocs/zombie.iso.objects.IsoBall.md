---
title: zombie.iso.objects.IsoBall
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoBall

`public class IsoBall extends IsoPhysicsObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.iso.IsoPhysicsObject
- zombie.iso.objects.IsoBall

## Constructors

### public IsoBall(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoBall(IsoCell cell,
float x,
float y,
float z,
float xvel,
float yvel,
HandWeapon weapon,
IsoGameCharacter character)

**Parameters:**
- `IsoCell` `cell`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `xvel`
- `float` `yvel`
- `HandWeapon` `weapon`
- `IsoGameCharacter` `character`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void collideGround()

**Returns:** `void`

### public void collideWall()

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoBall.html`*
