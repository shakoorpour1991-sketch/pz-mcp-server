---
title: zombie.network.packets.faction.FactionAcceptPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.faction
---

# zombie.network.packets.faction.FactionAcceptPacket

`public class FactionAcceptPacket extends FactionInvitePacket implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.faction

## Inheritance
- java.lang.Object
- zombie.network.fields.IDString
- zombie.network.fields.FactionId
- zombie.network.packets.faction.FactionInvitePacket
- zombie.network.packets.faction.FactionAcceptPacket

## Constructors

### public FactionAcceptPacket()

## Methods

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\faction\FactionAcceptPacket.html`*
