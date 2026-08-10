---
title: zombie.ai.states.SwipeStatePlayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.SwipeStatePlayer

`public final class SwipeStatePlayer extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.SwipeStatePlayer

## Fields

### public static final float MaxStompDistance

### public static final State.Param<Boolean> LOWER_CONDITION

### public static final State.Param<Boolean> ATTACKED

### public static final State.Param<String> GRAPPLING_TYPE

### public static final State.Param<IGrappleable> GRAPPLING_TARGET

### public static final State.Param<Boolean> DO_GRAPPLE

### public static final State.Param<Boolean> DO_CONTINUE_GRAPPLE

### public static final State.Param<Boolean> IS_GRAPPLE_WINDOW

### public static final State.Param<Boolean> IS_THROWING

## Methods

### public static SwipeStatePlayer instance()

**Returns:** `SwipeStatePlayer`

### public static void dbgOnGlobalAnimEvent(IsoGameCharacter owner,
AnimLayer layer,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `IsoGameCharacter` `owner`
- `AnimLayer` `layer`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

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

### public static boolean isStompingDisabled(IsoGameCharacter owner,
boolean doShove)

**Parameters:**
- `IsoGameCharacter` `owner`
- `boolean` `doShove`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\SwipeStatePlayer.html`*
