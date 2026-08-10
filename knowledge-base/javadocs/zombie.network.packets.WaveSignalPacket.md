---
title: zombie.network.packets.WaveSignalPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.WaveSignalPacket

`public class WaveSignalPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.WaveSignalPacket

## Constructors

### public WaveSignalPacket()

## Methods

### public void set(int sourceX,
int sourceY,
int channel,
String msg,
String guid,
String codes,
float r,
float g,
float b,
int signalStrength,
boolean isTV)

**Parameters:**
- `int` `sourceX`
- `int` `sourceY`
- `int` `channel`
- `String` `msg`
- `String` `guid`
- `String` `codes`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `signalStrength`
- `boolean` `isTV`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\WaveSignalPacket.html`*
