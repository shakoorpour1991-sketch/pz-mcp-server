---
title: zombie.core.BuildAction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.BuildAction

`public class BuildAction extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.BuildAction

## Fields

### public se.krka.kahlua.vm.KahluaTable item

### public long duration

## Constructors

### public BuildAction()

## Methods

### public void set(IsoPlayer player,
float x,
float y,
float z,
boolean north,
String spriteName,
se.krka.kahlua.vm.KahluaTable item)

**Parameters:**
- `IsoPlayer` `player`
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `north`
- `String` `spriteName`
- `se.krka.kahlua.vm.KahluaTable` `item`

**Returns:** `void`

### public void start()

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public boolean isValid()

**Returns:** `boolean`

### public boolean isUsingTimeout()

**Returns:** `boolean`

### public float getDuration()

**Returns:** `float`

### public void update()

**Returns:** `void`

### public boolean perform()

**Returns:** `boolean`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\BuildAction.html`*
