---
title: zombie.characters.NetworkState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkState

`public class NetworkState extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkState

## Constructors

### public NetworkState()

## Methods

### public boolean processEnterState(Vector3 target)

**Parameters:**
- `Vector3` `target`

**Returns:** `boolean`

### public boolean processEnterSubState(Vector3 target)

**Parameters:**
- `Vector3` `target`

**Returns:** `boolean`

### public void processExitSubState()

**Returns:** `void`

### public void processExitState()

**Returns:** `void`

### public void addEnterState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void addEnterSubState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void addExitState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void addExitSubState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void removeEnterState(StatePacket statePacket)

**Parameters:**
- `StatePacket` `statePacket`

**Returns:** `void`

### public void removeEnterSubState(StatePacket statePacket)

**Parameters:**
- `StatePacket` `statePacket`

**Returns:** `void`

### public void removeExitState(StatePacket statePacket)

**Parameters:**
- `StatePacket` `statePacket`

**Returns:** `void`

### public void removeExitSubState(StatePacket statePacket)

**Parameters:**
- `StatePacket` `statePacket`

**Returns:** `void`

### public StatePacket getEnterState()

**Returns:** `StatePacket`

### public StatePacket getEnterSubState()

**Returns:** `StatePacket`

### public StatePacket getExitState()

**Returns:** `StatePacket`

### public StatePacket getExitSubState()

**Returns:** `StatePacket`

### public StatePacket removeLastExitState()

**Returns:** `StatePacket`

### public StatePacket removeLastExitSubState()

**Returns:** `StatePacket`

### public String getEnterStateName()

**Returns:** `String`

### public String getEnterSubStateName()

**Returns:** `String`

### public String getExitStateName()

**Returns:** `String`

### public String getExitSubStateName()

**Returns:** `String`

### public StatePacket getEnterState(State state)

**Parameters:**
- `State` `state`

**Returns:** `StatePacket`

### public StatePacket getEnterSubState(State state)

**Parameters:**
- `State` `state`

**Returns:** `StatePacket`

### public StatePacket getExitState(State state)

**Parameters:**
- `State` `state`

**Returns:** `StatePacket`

### public StatePacket getExitSubState(State state)

**Parameters:**
- `State` `state`

**Returns:** `StatePacket`

### public void updateEnterState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void updateEnterSubState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void updateExitState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void updateExitSubState(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void sync(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `void`

### public void send()

**Returns:** `void`

### public boolean timeout()

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public void reportEvent(String state,
String event)

**Parameters:**
- `String` `state`
- `String` `event`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkState.html`*
