---
title: zombie.characters.action.ActionStateContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.action
---

# zombie.characters.action.ActionStateContainer

`public final class ActionStateContainer extends Object`

**Kind:** class · **Package:** zombie.characters.action

## Inheritance
- java.lang.Object
- zombie.characters.action.ActionStateContainer

## Constructors

### public ActionStateContainer()

## Methods

### public void evaluateCurrentState(ActionContext actionContext)

**Parameters:**
- `ActionContext` `actionContext`

**Returns:** `void`

### public ActionState peekNextState(ActionContext actionContext)

**Parameters:**
- `ActionContext` `actionContext`

**Returns:** `ActionState`

### public boolean canTransitionToState(ActionGroup actionGroup,
String stateName)

**Parameters:**
- `ActionGroup` `actionGroup`
- `String` `stateName`

**Returns:** `boolean`

### public boolean canTransitionToState(ActionGroup actionGroup,
String stateName,
boolean allowSubState)

**Parameters:**
- `ActionGroup` `actionGroup`
- `String` `stateName`
- `boolean` `allowSubState`

**Returns:** `boolean`

### public boolean hasChildState(ActionState child)

**Parameters:**
- `ActionState` `child`

**Returns:** `boolean`

### public void setPlaybackStateSnapshot(ActionContext actionContext,
ActionStateSnapshot snapshot)

**Parameters:**
- `ActionContext` `actionContext`
- `ActionStateSnapshot` `snapshot`

**Returns:** `void`

### public ActionStateSnapshot getPlaybackStateSnapshot()

**Returns:** `ActionStateSnapshot`

### public boolean setCurrentState(ActionState nextState,
ActionTransition transitionUsed)

**Parameters:**
- `ActionState` `nextState`
- `ActionTransition` `transitionUsed`

**Returns:** `boolean`

### public void removeChildStateAt(int subStateIdx)

**Parameters:**
- `int` `subStateIdx`

**Returns:** `void`

### public ActionState getRootState()

**Returns:** `ActionState`

### public boolean hasChildStates()

**Returns:** `boolean`

### public int childStateCount()

**Returns:** `int`

### public void foreachChildState(Consumer<ActionState> consumer)

**Parameters:**
- `Consumer<ActionState>` `consumer`

**Returns:** `void`

### public int indexOfChildState(Predicate<ActionState> predicate)

**Parameters:**
- `Predicate<ActionState>` `predicate`

**Returns:** `int`

### public ActionState getChildStateAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `ActionState`

### public List<ActionState> getChildStates()

**Returns:** `List<ActionState>`

### public String getCurrentStateName()

**Returns:** `String`

### public IAnimationVariableSlot getVariable(AnimationVariableHandle handle)

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `IAnimationVariableSlot`

### public boolean hasStateVariables()

**Returns:** `boolean`

### public void set(ActionStateContainer actionStateContainer)

**Parameters:**
- `ActionStateContainer` `actionStateContainer`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public boolean equalTo(ActionStateContainer rhs)

**Parameters:**
- `ActionStateContainer` `rhs`

**Returns:** `boolean`

### public boolean subStatesEqual(ActionStateContainer rhs)

**Parameters:**
- `ActionStateContainer` `rhs`

**Returns:** `boolean`

### public ActionTransition getTransitionUsedForThisState()

**Returns:** `ActionTransition`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\action\ActionStateContainer.html`*
