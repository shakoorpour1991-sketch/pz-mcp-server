---
title: zombie.ai.states.animals.AnimalFollowWallState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states.animals
---

# zombie.ai.states.animals.AnimalFollowWallState

`public class AnimalFollowWallState extends State`

**Kind:** class · **Package:** zombie.ai.states.animals

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.animals.AnimalFollowWallState

## Fields

### public static final State.Param<Float> REPATHDELAY

### public static final State.Param<Float> TIMETOSTOP_FOLLOWING_WALL

### public static final State.Param<Boolean> CW

### public static final State.Param<IsoDirections> CURRENTDIR

## Methods

### public static AnimalFollowWallState instance()

**Returns:** `AnimalFollowWallState`

### public void enter(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public boolean decideRotation(IsoAnimal animal,
IsoDirections collideDir)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoDirections` `collideDir`

**Returns:** `boolean`

### public void execute(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void checkNoCollide(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void noCollide(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public boolean continueFollowingWall(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `boolean`

### public void followWall(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void go(int x,
int y,
IsoAnimal animal)

**Parameters:**
- `int` `x`
- `int` `y`
- `IsoAnimal` `animal`

**Returns:** `void`

### public void updateParams(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

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

### public boolean isMoving(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\animals\AnimalFollowWallState.html`*
