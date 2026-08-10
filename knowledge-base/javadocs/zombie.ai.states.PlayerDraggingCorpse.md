---
title: zombie.ai.states.PlayerDraggingCorpse
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.PlayerDraggingCorpse

`public final class PlayerDraggingCorpse extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.PlayerDraggingCorpse

## Fields

### public static final State.Param<String> GRAPPLING_TYPE

### public static final State.Param<IGrappleable> GRAPPLING_TARGET

### public static final State.Param<Boolean> DO_GRAPPLE

### public static final State.Param<Boolean> DO_CONTINUE_GRAPPLE

### public static final State.Param<Boolean> IS_THROW_OUT_WINDOW

### public static final State.Param<Boolean> IS_THROW_OVER_FENCE

### public static final State.Param<Boolean> IS_THROW_INTO_CONTAINER

### public static final State.Param<Integer> GRUNT_COUNTER

### public static final State.Param<Float> BEARING_FROM_GRAPPLE_TARGET

### public static final State.Param<IsoObject> THROWN_OUT_WINDOW_OBJ

### public static final State.Param<IsoDirections> THROWN_OVER_FENCE_DIR

### public static final State.Param<ItemContainer> THROWN_INTO_CONTAINER_OBJ

## Methods

### public static PlayerDraggingCorpse instance()

**Returns:** `PlayerDraggingCorpse`

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

### public void setParams(IsoGameCharacter owner,
State.Stage stage)

**Parameters:**
- `IsoGameCharacter` `owner`
- `State.Stage` `stage`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\PlayerDraggingCorpse.html`*
