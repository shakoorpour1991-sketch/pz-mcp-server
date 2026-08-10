---
title: zombie.ai.State
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai
---

# zombie.ai.State

`public abstract class State extends Object implements IAnimEventListener, IAnimEventWrappedBroadcaster, IStateFlagsSource`

**Kind:** class · **Package:** zombie.ai

## Inheritance
- java.lang.Object
- zombie.ai.State

## Methods

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

### public AnimEventBroadcaster getAnimEventBroadcaster()

**Returns:** `AnimEventBroadcaster`

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

Return TRUE if the owner should ignore collisions when passing between two squares.
Defaults to FALSE

**Parameters:**
- `IsoGameCharacter` `owner`
- `int` `fromX`
- `int` `fromY`
- `int` `fromZ`
- `int` `toX`
- `int` `toY`
- `int` `toZ`

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public void setParams(IsoGameCharacter owner,
State.Stage stage)

**Parameters:**
- `IsoGameCharacter` `owner`
- `State.Stage` `stage`

**Returns:** `void`

### public final boolean isSyncOnEnter()

**Returns:** `boolean`

### public final boolean isSyncOnExit()

**Returns:** `boolean`

### public final boolean isSyncOnSquare()

**Returns:** `boolean`

### public final boolean isSyncInIdle()

**Returns:** `boolean`

### public boolean isProcessedOnEnter()

**Returns:** `boolean`

### public void processOnEnter(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

### public boolean isProcessedOnExit()

**Returns:** `boolean`

### public void processOnExit(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

### public Map<State.Param<?>, Object> getParams(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `Map<State.Param<?>, Object>`

### public void loadFrom(Map<Object,Object> delegate,
IsoGameCharacter character)

**Parameters:**
- `Map<Object,Object>` `delegate`
- `IsoGameCharacter` `character`

**Returns:** `void`

### public float awayCheckDistance()

**Returns:** `float`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\State.html`*
