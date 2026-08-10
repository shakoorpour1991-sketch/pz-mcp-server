---
title: zombie.ai.states.PlayerActionsState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.PlayerActionsState

`public final class PlayerActionsState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.PlayerActionsState

## Fields

### public static final State.Param<State.Stage> STAGE

### public static final State.Param<Variables> VARIABLES

### public static final State.Param<String> PRIMARY

### public static final State.Param<String> SECONDARY

### public static final State.Param<Boolean> OVERRIDE

### public static final State.Param<Float> RELOAD_SPEED

### public static final State.Param<Boolean> SITONGROUND

## Methods

### public static PlayerActionsState instance()

**Returns:** `PlayerActionsState`

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

### public boolean isProcessedOnExit()

**Returns:** `boolean`

### public void processOnExit(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\PlayerActionsState.html`*
