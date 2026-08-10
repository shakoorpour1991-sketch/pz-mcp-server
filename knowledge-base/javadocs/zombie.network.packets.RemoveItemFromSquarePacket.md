---
title: zombie.network.packets.RemoveItemFromSquarePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.RemoveItemFromSquarePacket

`public class RemoveItemFromSquarePacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.RemoveItemFromSquarePacket

## Fields

### public int x

### public int y

### public short index

## Constructors

### public RemoveItemFromSquarePacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

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

### public static void removeItemFromMap(UdpConnection connection,
int x,
int y,
int z,
int index)

**Parameters:**
- `UdpConnection` `connection`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `index`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\RemoveItemFromSquarePacket.html`*
