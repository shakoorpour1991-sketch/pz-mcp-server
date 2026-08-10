---
title: zombie.network.packets.SyncPlayerFieldsPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.SyncPlayerFieldsPacket

`public class SyncPlayerFieldsPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.SyncPlayerFieldsPacket

## Fields

### public static final byte PF_Recipes

### public static final byte PF_Traits

### public static final byte PF_AlreadyReadBook

### public static final byte PF_BodyDamage

### public static final byte PF_Reading

### public static final byte PF_Fitness

### public static final byte PF_Count

## Constructors

### public SyncPlayerFieldsPacket()

## Methods

### public void set(IsoPlayer player,
byte syncParams)

**Parameters:**
- `IsoPlayer` `player`
- `byte` `syncParams`

**Returns:** `void`

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\SyncPlayerFieldsPacket.html`*
