---
title: zombie.core.TransactionManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.TransactionManager

`public class TransactionManager extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.TransactionManager

## Fields

### public static final byte success

### public static final byte reject

### public static final TransactionManager instance

## Constructors

### public TransactionManager()

## Methods

### public static void add(Transaction transaction)

**Parameters:**
- `Transaction` `transaction`

**Returns:** `void`

### public static TransactionManager.LightweightData getLightweightData(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `TransactionManager.LightweightData`

### public static void update()

**Returns:** `void`

### public static byte isConsistent(int itemId,
InventoryItem worldItem,
ItemContainer source,
ItemContainer destination,
String extra,
ItemTransactionPacket dropTransaction,
IsoPlayer player)

**Parameters:**
- `int` `itemId`
- `InventoryItem` `worldItem`
- `ItemContainer` `source`
- `ItemContainer` `destination`
- `String` `extra`
- `ItemTransactionPacket` `dropTransaction`
- `IsoPlayer` `player`

**Returns:** `byte`

### public static int getItemId(InventoryItem item,
ItemContainer source)

**Parameters:**
- `InventoryItem` `item`
- `ItemContainer` `source`

**Returns:** `int`

### public static boolean isRejected(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static boolean isDone(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static void cancelAllRelevantToUser(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static int getDuration(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `int`

### public static byte createItemTransaction(IsoPlayer player,
List<InventoryItem> items,
ItemContainer source,
ItemContainer destination)

**Parameters:**
- `IsoPlayer` `player`
- `List<InventoryItem>` `items`
- `ItemContainer` `source`
- `ItemContainer` `destination`

**Returns:** `byte`

### public static void removeItemTransaction(byte id,
boolean isCanceled)

**Parameters:**
- `byte` `id`
- `boolean` `isCanceled`

**Returns:** `void`

### public void setStateFromPacket(ItemTransactionPacket packet)

**Parameters:**
- `ItemTransactionPacket` `packet`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\TransactionManager.html`*
