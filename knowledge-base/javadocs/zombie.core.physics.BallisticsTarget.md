---
title: zombie.core.physics.BallisticsTarget
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.BallisticsTarget

`public class BallisticsTarget extends PooledObject`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.physics.BallisticsTarget

## Fields

### public static float[] boneTransformData

## Methods

### public static Pool<IPooledObject> getBallisticsTargetPool()

**Returns:** `Pool<IPooledObject>`

### public static BallisticsTarget alloc(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `BallisticsTarget`

### public int getID()

**Returns:** `int`

### public void setIsoGameCharacter(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public boolean isValidIsoGameCharacter()

**Returns:** `boolean`

### public boolean update()

**Returns:** `boolean`

### public void add()

**Returns:** `void`

### public void releaseTarget()

**Returns:** `void`

### public void debugRender()

**Returns:** `void`

### public void release(int frames)

**Parameters:**
- `int` `frames`

**Returns:** `void`

### public void setCombatDamageDataProcessed(boolean processed)

**Parameters:**
- `boolean` `processed`

**Returns:** `void`

### public boolean getCombatDamageDataProcessed()

**Returns:** `boolean`

### public BallisticsTarget.CombatDamageData getCombatDamageData()

**Returns:** `BallisticsTarget.CombatDamageData`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\BallisticsTarget.html`*
