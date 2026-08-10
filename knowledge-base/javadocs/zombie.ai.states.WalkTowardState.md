---
title: zombie.ai.states.WalkTowardState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.WalkTowardState

`public final class WalkTowardState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.WalkTowardState

## Fields

### public static final State.Param<Boolean> IGNORE_OFFSET

### public static final State.Param<Long> IGNORE_TIME

### public static final State.Param<Long> TICK_COUNT

## Methods

### public static WalkTowardState instance()

**Returns:** `WalkTowardState`

### public void enter(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void execute(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void exit(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void animEvent(IsoGameCharacter owner,
AnimLayer layer,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `IsoGameCharacter` `owner`
- `AnimLayer` `layer`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public boolean isMoving(IsoGameCharacter owner)

Return TRUE if the owner is currently moving.
Defaults to FALSE

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### public boolean calculateTargetLocation(IsoZombie zomb,
Vector2 location)

**Parameters:**
- `IsoZombie` `zomb`
- `Vector2` `location`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\WalkTowardState.html`*
