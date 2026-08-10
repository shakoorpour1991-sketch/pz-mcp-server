---
title: zombie.core.NetTimedAction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.NetTimedAction

`public class NetTimedAction extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.NetTimedAction

## Fields

### public String type

### public String name

### public se.krka.kahlua.vm.KahluaTable action

### public long duration

## Constructors

### public NetTimedAction()

## Methods

### public void set(IsoPlayer player,
se.krka.kahlua.vm.KahluaTable action)

**Parameters:**
- `IsoPlayer` `player`
- `se.krka.kahlua.vm.KahluaTable` `action`

**Returns:** `void`

### public void copyFrom(NetTimedAction act)

**Parameters:**
- `NetTimedAction` `act`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void forceComplete()

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void animEvent(String event,
String parameter)

**Parameters:**
- `String` `event`
- `String` `parameter`

**Returns:** `void`

### public void setState(Transaction.TransactionState state)

**Parameters:**
- `Transaction.TransactionState` `state`

**Returns:** `void`

### public void setTimeData()

**Returns:** `void`

### public void set(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void copyFrom(zombie.core.Action act)

**Parameters:**
- `zombie.core.Action` `act`

**Returns:** `void`

### public void setDuration(long duration)

**Parameters:**
- `long` `duration`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public float getProgress()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\NetTimedAction.html`*
