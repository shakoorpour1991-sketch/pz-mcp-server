---
title: zombie.network.ZomboidNetData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ZomboidNetData

`public class ZomboidNetData extends Object implements IZomboidPacket`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ZomboidNetData

## Fields

### public PacketTypes.PacketType type

### public short length

### public final ByteBufferReader buffer

### public long connection

### public long time

## Constructors

### public ZomboidNetData()

### public ZomboidNetData(int size)

**Parameters:**
- `int` `size`

## Methods

### public void reset()

**Returns:** `void`

### public void read(short id,
ByteBufferReader bb,
UdpConnection connection)

**Parameters:**
- `short` `id`
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public boolean isConnect()

**Returns:** `boolean`

### public boolean isDisconnect()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ZomboidNetData.html`*
