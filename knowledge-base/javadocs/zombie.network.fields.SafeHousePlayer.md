---
title: zombie.network.fields.SafeHousePlayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.SafeHousePlayer

`public class SafeHousePlayer extends SafehouseID implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.IDInteger
- zombie.network.fields.SafehouseID
- zombie.network.fields.SafeHousePlayer

## Constructors

### public SafeHousePlayer()

## Methods

### public void set(SafeHouse safeHouse,
String player)

**Parameters:**
- `SafeHouse` `safeHouse`
- `String` `player`

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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public String getUsername()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\SafeHousePlayer.html`*
