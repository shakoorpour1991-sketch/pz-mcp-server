---
title: zombie.ai.states.animals.AnimalClimbOverFenceState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states.animals
---

# zombie.ai.states.animals.AnimalClimbOverFenceState

`public final class AnimalClimbOverFenceState extends State`

**Kind:** class · **Package:** zombie.ai.states.animals

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.animals.AnimalClimbOverFenceState

## Fields

### public static final State.Param<Integer> START_X

### public static final State.Param<Integer> START_Y

### public static final State.Param<Integer> Z

### public static final State.Param<Integer> END_X

### public static final State.Param<Integer> END_Y

### public static final State.Param<IsoDirections> DIR

### public static final State.Param<Boolean> ZOMBIE_ON_FLOOR

### public static final State.Param<State> PREV_STATE

### public static final State.Param<Boolean> SCRATCH

### public static final State.Param<Boolean> COUNTER

### public static final State.Param<Boolean> SOLID_FLOOR

### public static final State.Param<Boolean> SHEET_ROPE

### public static final State.Param<Boolean> RUN

### public static final State.Param<Boolean> SPRINT

### public static final State.Param<Boolean> COLLIDABLE

### public static final int TRIP_TREE

### public static final int TRIP_ZOMBIE

### public static final int COLLIDE_WITH_WALL

### public static final int TRIP_METAL_BARS

### public static final int TRIP_WINDOW

## Methods

### public static AnimalClimbOverFenceState instance()

**Returns:** `AnimalClimbOverFenceState`

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

### public boolean isIgnoreCollide(IsoGameCharacter owner,
int fromX,
int fromY,
int fromZ,
int toX,
int toY,
int toZ)

Description copied from class: State

**Parameters:**
- `IsoGameCharacter` `owner`
- `int` `fromX`
- `int` `fromY`
- `int` `fromZ`
- `int` `toX`
- `int` `toY`
- `int` `toZ`

**Returns:** `boolean`

### public void setParams(IsoGameCharacter owner,
IsoDirections dir)

**Parameters:**
- `IsoGameCharacter` `owner`
- `IsoDirections` `dir`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\animals\AnimalClimbOverFenceState.html`*
