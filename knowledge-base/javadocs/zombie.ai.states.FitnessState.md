---
title: zombie.ai.states.FitnessState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.FitnessState

`public final class FitnessState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.FitnessState

## Fields

### public static final State.Param<Boolean> FITNESS_FINISHED

### public static final State.Param<Boolean> EXERCISE_ENDED

### public static final State.Param<String> EXERCISE_TYPE

### public static final State.Param<String> EXERCISE_HAND

### public static final State.Param<Float> FITNESS_SPEED

### public static final State.Param<Boolean> FITNESS_STRUGGLE

## Methods

### public static FitnessState instance()

**Returns:** `FitnessState`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\FitnessState.html`*
