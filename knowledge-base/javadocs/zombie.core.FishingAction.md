---
title: zombie.core.FishingAction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.FishingAction

`public class FishingAction extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.FishingAction

## Fields

### public static byte flagStartFishing

### public static byte flagStopFishing

### public static byte flagUpdateFish

### public static byte flagUpdateBobberParameters

### public static byte flagCreateBobber

### public static byte flagDestroyBobber

### public byte contentFlag

### public long duration

## Constructors

### public FishingAction()

## Methods

### public void setStartFishing(IsoPlayer player,
InventoryItem item,
IsoGridSquare sq,
se.krka.kahlua.vm.KahluaTable bobber)

**Parameters:**
- `IsoPlayer` `player`
- `InventoryItem` `item`
- `IsoGridSquare` `sq`
- `se.krka.kahlua.vm.KahluaTable` `bobber`

**Returns:** `void`

### public float getDuration()

**Returns:** `float`

### public void start()

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public boolean isValid()

**Returns:** `boolean`

### public boolean isUsingTimeout()

**Returns:** `boolean`

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

### public se.krka.kahlua.vm.KahluaTable getLuaTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static InventoryItem getPickedUpFish(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `InventoryItem`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\FishingAction.html`*
