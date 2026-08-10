---
title: zombie.network.packets.actions.SmashWindowPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.actions
---

# zombie.network.packets.actions.SmashWindowPacket

`public class SmashWindowPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.actions

## Inheritance
- java.lang.Object
- zombie.network.packets.actions.SmashWindowPacket

## Constructors

### public SmashWindowPacket()

## Methods

### public void setSmashWindow(IsoObject window)

**Parameters:**
- `IsoObject` `window`

**Returns:** `void`

### public void setRemoveBrokenGlass(IsoObject window)

**Parameters:**
- `IsoObject` `window`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\actions\SmashWindowPacket.html`*
