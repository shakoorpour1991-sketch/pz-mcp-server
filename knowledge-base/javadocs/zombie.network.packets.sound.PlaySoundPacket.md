---
title: zombie.network.packets.sound.PlaySoundPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.sound
---

# zombie.network.packets.sound.PlaySoundPacket

`public class PlaySoundPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.sound

## Inheritance
- java.lang.Object
- zombie.network.packets.sound.PlaySoundPacket

## Fields

### public static final byte SND_FLAG_NONE

### public static final byte SND_FLAG_LOOP

### public static final byte SND_FLAG_VOCAL

### public static final byte SND_FLAG_BULLET_HIT_SURFACE

### public static final byte SND_FLAG_MELEE_HIT_SURFACE

## Constructors

### public PlaySoundPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

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

### public String getName()

**Returns:** `String`

### public IsoMovingObject getMovingObject()

**Returns:** `IsoMovingObject`

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

### public int getPacketSizeBytes()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\sound\PlaySoundPacket.html`*
