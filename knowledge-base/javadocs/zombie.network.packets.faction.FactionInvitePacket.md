---
title: zombie.network.packets.faction.FactionInvitePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.faction
---

# zombie.network.packets.faction.FactionInvitePacket

`public class FactionInvitePacket extends FactionId implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.faction

## Inheritance
- java.lang.Object
- zombie.network.fields.IDString
- zombie.network.fields.FactionId
- zombie.network.packets.faction.FactionInvitePacket

## Constructors

### public FactionInvitePacket()

## Methods

### public void set(Faction faction,
String host,
String username)

**Parameters:**
- `Faction` `faction`
- `String` `host`
- `String` `username`

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

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\faction\FactionInvitePacket.html`*
