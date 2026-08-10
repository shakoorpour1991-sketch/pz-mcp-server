---
title: zombie.iso.objects.IsoMolotovCocktail
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoMolotovCocktail

`public class IsoMolotovCocktail extends IsoPhysicsObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.iso.IsoPhysicsObject
- zombie.iso.objects.IsoMolotovCocktail

## Constructors

### public IsoMolotovCocktail(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoMolotovCocktail(IsoCell cell,
float x,
float y,
float z,
float xVelocity,
float yVelocity,
HandWeapon weapon,
IsoGameCharacter character)

**Parameters:**
- `IsoCell` `cell`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `xVelocity`
- `float` `yVelocity`
- `HandWeapon` `weapon`
- `IsoGameCharacter` `character`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void collideCharacter()

**Returns:** `void`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoMolotovCocktail.html`*
