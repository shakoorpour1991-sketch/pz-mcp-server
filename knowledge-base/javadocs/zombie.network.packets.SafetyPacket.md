---
title: zombie.network.packets.SafetyPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.SafetyPacket

`public class SafetyPacket extends Safety implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.characters.Safety
- zombie.network.packets.SafetyPacket

## Constructors

### public SafetyPacket(Safety safety)

**Parameters:**
- `Safety` `safety`

### public SafetyPacket()

## Methods

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

### public int getPacketSizeBytes()

**Returns:** `int`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public String getDescription()

**Returns:** `String`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\SafetyPacket.html`*
