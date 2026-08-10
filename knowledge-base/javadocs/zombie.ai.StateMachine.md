---
title: zombie.ai.StateMachine
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai
---

# zombie.ai.StateMachine

`public final class StateMachine extends Object`

**Kind:** class · **Package:** zombie.ai

## Inheritance
- java.lang.Object
- zombie.ai.StateMachine

## Fields

### public int activeStateChanged

## Constructors

### public StateMachine(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

## Methods

### public void changeState(State newState,
Iterable<State> subStates,
boolean restart)

**Parameters:**
- `State` `newState`
- `Iterable<State>` `subStates`
- `boolean` `restart`

**Returns:** `void`

### public boolean isSubstate(State substate)

**Parameters:**
- `State` `substate`

**Returns:** `boolean`

### public State getCurrent()

**Returns:** `State`

### public State getPrevious()

**Returns:** `State`

### public int getSubStateCount()

**Returns:** `int`

### public State getSubStateAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `State`

### public void revertToPreviousState(State sender)

**Parameters:**
- `State` `sender`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public final void stateAnimEvent(int stateLayer,
AnimLayer layer,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `int` `stateLayer`
- `AnimLayer` `layer`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public boolean isLocked()

**Returns:** `boolean`

### public void setLocked(boolean lock)

**Parameters:**
- `boolean` `lock`

**Returns:** `void`

### public IsoGameCharacter getOwner()

**Returns:** `IsoGameCharacter`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\StateMachine.html`*
