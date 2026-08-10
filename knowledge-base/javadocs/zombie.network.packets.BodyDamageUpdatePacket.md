---
title: zombie.network.packets.BodyDamageUpdatePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.BodyDamageUpdatePacket

`public class BodyDamageUpdatePacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.BodyDamageUpdatePacket

## Constructors

### public BodyDamageUpdatePacket()

## Methods

### public void setStart(IsoPlayer remotePlayer)

**Parameters:**
- `IsoPlayer` `remotePlayer`

**Returns:** `void`

### public void setStop(IsoPlayer remotePlayer)

**Parameters:**
- `IsoPlayer` `remotePlayer`

**Returns:** `void`

### public void setUpdate(IsoPlayer remotePlayer,
IsoPlayer requester,
ByteBuffer inputData)

**Parameters:**
- `IsoPlayer` `remotePlayer`
- `IsoPlayer` `requester`
- `ByteBuffer` `inputData`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\BodyDamageUpdatePacket.html`*
