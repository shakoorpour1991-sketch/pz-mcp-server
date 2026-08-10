---
title: zombie.ai.IStateCharacter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.ai
---

# zombie.ai.IStateCharacter

`public interface IStateCharacter`

**Kind:** interface · **Package:** zombie.ai

## Methods

### void changeState(State var1)

**Parameters:**
- `State` `var1`

**Returns:** `void`

### State getCurrentState()

**Returns:** `State`

### boolean isCurrentState(State var1)

**Parameters:**
- `State` `var1`

**Returns:** `boolean`

### default boolean hasCurrentState()

**Returns:** `boolean`

### default boolean isCurrentStateAttacking()

**Returns:** `boolean`

### default boolean isCurrentStateMoving()

**Returns:** `boolean`

### default boolean isDoingActionThatCanBeCancelled()

**Returns:** `boolean`

### default boolean canBeHitByVehicle(BaseVehicle impactingVehicle)

**Parameters:**
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### default boolean causesDamageToVehicleWhenHit(BaseVehicle impactingVehicle)

**Parameters:**
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### default boolean canSlowDownVehicleWhenHit(BaseVehicle impactingVehicle)

**Parameters:**
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### default boolean canCurrentStateRagdoll()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\IStateCharacter.html`*
