---
title: zombie.ai.states.ClimbOverFenceState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.ClimbOverFenceState

`public final class ClimbOverFenceState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.ClimbOverFenceState

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

### public static final State.Param<String> OUTCOME

## Methods

### public static ClimbOverFenceState instance()

**Returns:** `ClimbOverFenceState`

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

### public void getDeltaModifiers(IsoGameCharacter owner,
MoveDeltaModifiers modifiers)

**Parameters:**
- `IsoGameCharacter` `owner`
- `MoveDeltaModifiers` `modifiers`

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

### public boolean canRagdoll(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### public boolean isProcessedOnEnter()

**Returns:** `boolean`

### public void processOnEnter(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\ClimbOverFenceState.html`*
