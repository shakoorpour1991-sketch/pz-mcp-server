---
title: zombie.ai.states.GrappledThrownOverFenceState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.GrappledThrownOverFenceState

`public final class GrappledThrownOverFenceState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.GrappledThrownOverFenceState

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

### public static final int TRIP_METAL_BARS

## Methods

### public static GrappledThrownOverFenceState instance()

**Returns:** `GrappledThrownOverFenceState`

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
IsoGridSquare startSq,
IsoDirections dir)

**Parameters:**
- `IsoGameCharacter` `owner`
- `IsoGridSquare` `startSq`
- `IsoDirections` `dir`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\GrappledThrownOverFenceState.html`*
