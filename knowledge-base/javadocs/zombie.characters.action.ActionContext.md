---
title: zombie.characters.action.ActionContext
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.action
---

# zombie.characters.action.ActionContext

`public final class ActionContext extends Object`

**Kind:** class · **Package:** zombie.characters.action

## Inheritance
- java.lang.Object
- zombie.characters.action.ActionContext

## Constructors

### public ActionContext(IAnimatable owner)

**Parameters:**
- `IAnimatable` `owner`

## Methods

### public IAnimatable getOwner()

**Returns:** `IAnimatable`

### public void update()

**Returns:** `void`

### public ActionState peekNextState()

**Returns:** `ActionState`

### public boolean canTransitionToState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `boolean`

### public boolean canTransitionToState(String stateName,
boolean allowSubState)

**Parameters:**
- `String` `stateName`
- `boolean` `allowSubState`

**Returns:** `boolean`

### public void setPlaybackStateSnapshot(ActionStateSnapshot snapshot)

**Parameters:**
- `ActionStateSnapshot` `snapshot`

**Returns:** `void`

### public ActionStateSnapshot getPlaybackStateSnapshot()

**Returns:** `ActionStateSnapshot`

### public void setCurrentState(ActionState nextState)

**Parameters:**
- `ActionState` `nextState`

**Returns:** `void`

### public void logCurrentState()

**Returns:** `void`

### public void clearActionContextEvents()

**Returns:** `void`

### public ActionState getCurrentState()

**Returns:** `ActionState`

### public void setGroup(ActionGroup group)

**Parameters:**
- `ActionGroup` `group`

**Returns:** `void`

### public ActionGroup getGroup()

**Returns:** `ActionGroup`

### public void reportEvent(String event)

**Parameters:**
- `String` `event`

**Returns:** `void`

### public void reportEvent(String state,
String event)

**Parameters:**
- `String` `state`
- `String` `event`

**Returns:** `void`

### public ActionState getChildStateAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `ActionState`

### public List<ActionState> getChildStates()

**Returns:** `List<ActionState>`

### public String getCurrentStateName()

**Returns:** `String`

### public String peekPreviousStateName()

**Returns:** `String`

### public ActionState popPreviousState()

**Returns:** `ActionState`

### public ActionState peekPreviousState()

**Returns:** `ActionState`

### public boolean hasEventOccurred(String eventName)

Returns TRUE if an event has occurred on any layer.

**Parameters:**
- `String` `eventName`

**Returns:** `boolean`

### public boolean hasEventOccurred(String eventName,
String stateName)

**Parameters:**
- `String` `eventName`
- `String` `stateName`

**Returns:** `boolean`

### public void clearEvent(String eventName)

**Parameters:**
- `String` `eventName`

**Returns:** `void`

### public void getEvents(HashMap<String,String> events)

**Parameters:**
- `HashMap<String,String>` `events`

**Returns:** `void`

### public IAnimationVariableSlot getVariable(AnimationVariableHandle handle)

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `IAnimationVariableSlot`

### public boolean hasStateVariables()

**Returns:** `boolean`

### public void addOnStateChanged(IActionStateChanged callback)

**Parameters:**
- `IActionStateChanged` `callback`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\action\ActionContext.html`*
