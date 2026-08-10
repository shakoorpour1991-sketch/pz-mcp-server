---
title: zombie.characters.IsoLivingCharacter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.IsoLivingCharacter

`public class IsoLivingCharacter extends IsoGameCharacter`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.characters.IsoGameCharacter
- zombie.characters.IsoLivingCharacter

## Fields

### public float useChargeDelta

### public final HandWeapon bareHands

### public boolean collidedWithPushable

### public IsoGameCharacter targetOnGround

## Constructors

### public IsoLivingCharacter(IsoCell cell,
float x,
float y,
float z)

**Parameters:**
- `IsoCell` `cell`
- `float` `x`
- `float` `y`
- `float` `z`

## Methods

### public boolean isCollidedWithPushableThisFrame()

**Returns:** `boolean`

### public boolean AttemptAttack(float chargeDelta)

**Parameters:**
- `float` `chargeDelta`

**Returns:** `boolean`

### public boolean DoAttack(float chargeDelta)

**Parameters:**
- `float` `chargeDelta`

**Returns:** `boolean`

### public boolean isDoShove()

**Returns:** `boolean`

### public void setDoShove(boolean bDoShove)

**Parameters:**
- `boolean` `bDoShove`

**Returns:** `void`

### public boolean isShoving()

**Returns:** `boolean`

### public boolean isDoStomp()

**Returns:** `boolean`

### public HandWeapon getAttackingWeapon()

**Returns:** `HandWeapon`

### public boolean isUnarmed()

**Returns:** `boolean`

### public void clearHandToHandAttack()

**Returns:** `void`

### public boolean isDoHandToHandAttack()

**Returns:** `boolean`

### public boolean isShovingWhileAiming()

**Returns:** `boolean`

### public boolean isGrapplingWhileAiming()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\IsoLivingCharacter.html`*
