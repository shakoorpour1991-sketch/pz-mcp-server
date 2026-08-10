---
title: zombie.ai.states.PlayerAimState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.PlayerAimState

`public final class PlayerAimState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.PlayerAimState

## Fields

### public static final State.Param<Boolean> AIM

### public static final State.Param<Boolean> AIM_FLOOR

### public static final State.Param<Float> AIM_FLOOR_DISTANCE

## Methods

### public static PlayerAimState instance()

**Returns:** `PlayerAimState`

### public void enter(IsoGameCharacter owner)

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

### public void setParams(IsoGameCharacter owner,
State.Stage stage)

**Parameters:**
- `IsoGameCharacter` `owner`
- `State.Stage` `stage`

**Returns:** `void`

### public boolean isProcessedOnEnter()

**Returns:** `boolean`

### public void processOnEnter(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

### public boolean isProcessedOnExit()

**Returns:** `boolean`

### public void processOnExit(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\PlayerAimState.html`*
