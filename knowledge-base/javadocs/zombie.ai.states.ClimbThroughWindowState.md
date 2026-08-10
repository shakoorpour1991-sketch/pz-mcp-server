---
title: zombie.ai.states.ClimbThroughWindowState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.ClimbThroughWindowState

`public final class ClimbThroughWindowState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.ClimbThroughWindowState

## Fields

### public static final State.Param<ClimbThroughWindowPositioningParams> PARAMS

### public static final State.Param<State> PREV_STATE

### public static final State.Param<Boolean> ZOMBIE_ON_FLOOR

### public static final State.Param<String> OUTCOME

### public static final State.Param<Boolean> SCRATCHED

## Methods

### public static ClimbThroughWindowState instance()

**Returns:** `ClimbThroughWindowState`

### public void enter(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void execute(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public static void slideCharacterToWindowOpening(IsoGameCharacter character,
ClimbThroughWindowPositioningParams positioningParams)

**Parameters:**
- `IsoGameCharacter` `character`
- `ClimbThroughWindowPositioningParams` `positioningParams`

**Returns:** `void`

### public void exit(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public static void slideX(IsoGameCharacter owner,
float x)

**Parameters:**
- `IsoGameCharacter` `owner`
- `float` `x`

**Returns:** `void`

### public static void slideY(IsoGameCharacter owner,
float y)

**Parameters:**
- `IsoGameCharacter` `owner`
- `float` `y`

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

### public static boolean isFreeSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static boolean isObstacleSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static IsoGridSquare getFreeSquareAfterObstacles(IsoGridSquare square,
IsoDirections dir)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoDirections` `dir`

**Returns:** `IsoGridSquare`

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

### public static void getClimbThroughWindowPositioningParams(IsoGameCharacter climbingCharacter,
IsoObject windowObject,
ClimbThroughWindowPositioningParams climbParams)

**Parameters:**
- `IsoGameCharacter` `climbingCharacter`
- `IsoObject` `windowObject`
- `ClimbThroughWindowPositioningParams` `climbParams`

**Returns:** `void`

### public ClimbThroughWindowPositioningParams getPositioningParams(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `ClimbThroughWindowPositioningParams`

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

### public boolean canRagdoll(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\ClimbThroughWindowState.html`*
