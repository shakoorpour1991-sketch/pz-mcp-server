---
title: zombie.core.GeneralAction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.GeneralAction

`public class GeneralAction extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.GeneralAction

## Fields

### public long duration

## Constructors

### public GeneralAction()

## Methods

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

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void setState(Transaction.TransactionState state)

**Parameters:**
- `Transaction.TransactionState` `state`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\GeneralAction.html`*
