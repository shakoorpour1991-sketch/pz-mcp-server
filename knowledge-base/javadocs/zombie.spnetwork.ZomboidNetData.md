---
title: zombie.spnetwork.ZomboidNetData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.spnetwork
---

# zombie.spnetwork.ZomboidNetData

`public final class ZomboidNetData extends Object implements IZomboidPacket`

**Kind:** class · **Package:** zombie.spnetwork

## Inheritance
- java.lang.Object
- zombie.spnetwork.ZomboidNetData

## Fields

### public short type

### public short length

### public ByteBuffer buffer

### public ByteBufferReader bufferReader

### public UdpConnection connection

## Constructors

### public ZomboidNetData()

### public ZomboidNetData(int size)

**Parameters:**
- `int` `size`

## Methods

### public void reset()

**Returns:** `void`

### public void read(short id,
ByteBuffer bb,
UdpConnection connection)

**Parameters:**
- `short` `id`
- `ByteBuffer` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public boolean isConnect()

**Returns:** `boolean`

### public boolean isDisconnect()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\spnetwork\ZomboidNetData.html`*
