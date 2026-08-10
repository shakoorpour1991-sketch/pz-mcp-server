---
title: zombie.core.Transaction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.Transaction

`public abstract class Transaction extends Object implements IDescriptor`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.Transaction

## Fields

### public IsoGridSquare square

## Constructors

### public Transaction()

## Methods

### public void set(IsoPlayer player,
List<InventoryItem> items,
ItemContainer source,
ItemContainer destination,
String extra,
IsoDirections direction,
float posX,
float posY,
float posZ)

**Parameters:**
- `IsoPlayer` `player`
- `List<InventoryItem>` `items`
- `ItemContainer` `source`
- `ItemContainer` `destination`
- `String` `extra`
- `IsoDirections` `direction`
- `float` `posX`
- `float` `posY`
- `float` `posZ`

**Returns:** `void`

### public void setTimeData()

**Returns:** `void`

### public boolean update()

**Returns:** `boolean`

### public void setState(Transaction.TransactionState state)

**Parameters:**
- `Transaction.TransactionState` `state`

**Returns:** `void`

### public void setDuration(long duration)

**Parameters:**
- `long` `duration`

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Transaction.html`*
