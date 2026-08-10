---
title: zombie.network.packets.sound.StopSoundPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.sound
---

# zombie.network.packets.sound.StopSoundPacket

`public class StopSoundPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.sound

## Inheritance
- java.lang.Object
- zombie.network.packets.sound.StopSoundPacket

## Constructors

### public StopSoundPacket()

## Methods

### public void set(IsoMovingObject obj,
String name,
boolean trigger)

**Parameters:**
- `IsoMovingObject` `obj`
- `String` `name`
- `boolean` `trigger`

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

### public String getDescription()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\sound\StopSoundPacket.html`*
