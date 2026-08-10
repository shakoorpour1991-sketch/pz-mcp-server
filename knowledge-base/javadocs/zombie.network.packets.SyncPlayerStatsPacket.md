---
title: zombie.network.packets.SyncPlayerStatsPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.SyncPlayerStatsPacket

`public class SyncPlayerStatsPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.SyncPlayerStatsPacket

## Constructors

### public SyncPlayerStatsPacket()

## Methods

### public static int getBitMaskForStat(CharacterStat stat)

**Parameters:**
- `CharacterStat` `stat`

**Returns:** `int`

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\SyncPlayerStatsPacket.html`*
