---
title: zombie.ai.states.GrappledThrownOutWindowState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.GrappledThrownOutWindowState

`public class GrappledThrownOutWindowState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.GrappledThrownOutWindowState

## Fields

### public static final State.Param<Integer> START_X

### public static final State.Param<Integer> START_Y

### public static final State.Param<Integer> Z

### public static final State.Param<Integer> OPPOSITE_X

### public static final State.Param<Integer> OPPOSITE_Y

### public static final State.Param<IsoDirections> DIR

### public static final State.Param<Boolean> ZOMBIE_ON_FLOOR

### public static final State.Param<State> PREV_STATE

### public static final State.Param<Boolean> SCRATCH

### public static final State.Param<Boolean> COUNTER

### public static final State.Param<Boolean> SOLID_FLOOR

### public static final State.Param<Boolean> SHEET_ROPE

### public static final State.Param<Integer> END_X

### public static final State.Param<Integer> END_Y

### public static final State.Param<Boolean> SCRATCHED

## Methods

### public static GrappledThrownOutWindowState instance()

**Returns:** `GrappledThrownOutWindowState`

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

### public void slideX(IsoGameCharacter owner,
float x,
float multiplier)

**Parameters:**
- `IsoGameCharacter` `owner`
- `float` `x`
- `float` `multiplier`

**Returns:** `void`

### public void slideY(IsoGameCharacter owner,
float y,
float multiplier)

**Parameters:**
- `IsoGameCharacter` `owner`
- `float` `y`
- `float` `multiplier`

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

### public IsoObject getWindow(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `IsoObject`

### public boolean isWindowClosing(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### public void getDeltaModifiers(IsoGameCharacter owner,
MoveDeltaModifiers modifiers)

**Parameters:**
- `IsoGameCharacter` `owner`
- `MoveDeltaModifiers` `modifiers`

**Returns:** `void`

### public boolean isPastInnerEdgeOfSquare(IsoGameCharacter owner,
int x,
int y,
IsoDirections moveDir)

**Parameters:**
- `IsoGameCharacter` `owner`
- `int` `x`
- `int` `y`
- `IsoDirections` `moveDir`

**Returns:** `boolean`

### public boolean isPastOuterEdgeOfSquare(IsoGameCharacter owner,
int x,
int y,
IsoDirections moveDir)

**Parameters:**
- `IsoGameCharacter` `owner`
- `int` `x`
- `int` `y`
- `IsoDirections` `moveDir`

**Returns:** `boolean`

### public void setParams(IsoGameCharacter owner,
IsoObject obj)

**Parameters:**
- `IsoGameCharacter` `owner`
- `IsoObject` `obj`

**Returns:** `void`

### public boolean isProcessedOnEnter()

**Returns:** `boolean`

### public void processOnEnter(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\GrappledThrownOutWindowState.html`*
