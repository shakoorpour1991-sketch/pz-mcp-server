---
title: zombie.characters.component.StateMachineComponent
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.component
---

# zombie.characters.component.StateMachineComponent

`public class StateMachineComponent extends ECSComponent`

**Kind:** class · **Package:** zombie.characters.component

## Inheritance
- java.lang.Object
- zombie.characters.ecs.ECSComponent
- zombie.characters.component.StateMachineComponent

## Constructors

### public StateMachineComponent(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

## Methods

### public StateMachine getStateMachine()

**Returns:** `StateMachine`

### public Map<State.Param<?>, Object> getStateMachineParams(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `Map<State.Param<?>, Object>`

### public AdvancedAnimator getAdvancedAnimator()

**Returns:** `AdvancedAnimator`

### public ActionContext getActionContext()

**Returns:** `ActionContext`

### public void invokeGlobalAnimEvent(GlobalAnimEvent animEvent)

**Parameters:**
- `GlobalAnimEvent` `animEvent`

**Returns:** `void`

### public void init(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void setDefaultState()

**Returns:** `void`

### public void setDefaultState(State defaultState)

**Parameters:**
- `State` `defaultState`

**Returns:** `void`

### public State tryGetAIState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `State`

### public void clearAIStateMap()

**Returns:** `void`

### public void registerAIState(String name,
State aiState)

**Parameters:**
- `String` `name`
- `State` `aiState`

**Returns:** `void`

### public State getDefaultState()

**Returns:** `State`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\component\StateMachineComponent.html`*
