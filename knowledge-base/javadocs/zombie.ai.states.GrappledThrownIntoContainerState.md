---
title: zombie.ai.states.GrappledThrownIntoContainerState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.GrappledThrownIntoContainerState

`public final class GrappledThrownIntoContainerState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.GrappledThrownIntoContainerState

## Fields

### public static final State.Param<Integer> START_X

### public static final State.Param<Integer> START_Y

### public static final State.Param<Integer> END_X

### public static final State.Param<Integer> END_Y

### public static final State.Param<Float> DIR_X

### public static final State.Param<Float> DIR_Y

### public static final State.Param<State> PREV_STATE

### public static final State.Param<Boolean> COLLIDABLE

### public static final State.Param<ItemContainer> TARGET_CONTAINER

### public static final State.Param<IsoPlayer> GRAPPLED_BY

## Methods

### public static GrappledThrownIntoContainerState instance()

**Returns:** `GrappledThrownIntoContainerState`

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
ItemContainer targetContainer)

**Parameters:**
- `IsoGameCharacter` `owner`
- `ItemContainer` `targetContainer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\GrappledThrownIntoContainerState.html`*
