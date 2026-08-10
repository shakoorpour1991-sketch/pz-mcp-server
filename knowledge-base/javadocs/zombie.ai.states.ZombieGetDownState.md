---
title: zombie.ai.states.ZombieGetDownState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.ZombieGetDownState

`public final class ZombieGetDownState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.ZombieGetDownState

## Fields

### public static final State.Param<State> PREV_STATE

### public static final State.Param<Float> WAIT_TIME

### public static final State.Param<Float> START_X

### public static final State.Param<Float> START_Y

## Methods

### public static ZombieGetDownState instance()

**Returns:** `ZombieGetDownState`

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

### public boolean isNearStartXY(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### public void setParams(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\ZombieGetDownState.html`*
