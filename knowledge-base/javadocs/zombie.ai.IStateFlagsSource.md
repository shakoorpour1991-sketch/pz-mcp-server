---
title: zombie.ai.IStateFlagsSource
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.ai
---

# zombie.ai.IStateFlagsSource

`public interface IStateFlagsSource`

**Kind:** interface · **Package:** zombie.ai

## Methods

### default boolean isAttacking(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### default boolean isMoving(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### default boolean isDoingActionThatCanBeCancelled()

**Returns:** `boolean`

### default boolean canBeHitByVehicle(IsoGameCharacter owner,
BaseVehicle impactingVehicle)

**Parameters:**
- `IsoGameCharacter` `owner`
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### default boolean causesDamageToVehicleWhenHit(IsoGameCharacter owner,
BaseVehicle impactingVehicle)

**Parameters:**
- `IsoGameCharacter` `owner`
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### default boolean canSlowDownVehicleWhenHit(IsoGameCharacter owner,
BaseVehicle impactingVehicle)

**Parameters:**
- `IsoGameCharacter` `owner`
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### default boolean canRagdoll(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### default boolean isSyncOnEnter()

**Returns:** `boolean`

### default boolean isSyncOnExit()

**Returns:** `boolean`

### default boolean isSyncOnSquare()

**Returns:** `boolean`

### default boolean isSyncInIdle()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\IStateFlagsSource.html`*
