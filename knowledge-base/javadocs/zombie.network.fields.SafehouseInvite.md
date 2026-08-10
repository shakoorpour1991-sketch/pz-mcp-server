---
title: zombie.network.fields.SafehouseInvite
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.SafehouseInvite

`public class SafehouseInvite extends SafeHousePlayer implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.IDInteger
- zombie.network.fields.SafehouseID
- zombie.network.fields.SafeHousePlayer
- zombie.network.fields.SafehouseInvite

## Constructors

### public SafehouseInvite()

## Methods

### public void set(SafeHouse safeHouse,
String owner,
String player)

**Parameters:**
- `SafeHouse` `safeHouse`
- `String` `owner`
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

### public String getOwner()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\SafehouseInvite.html`*
