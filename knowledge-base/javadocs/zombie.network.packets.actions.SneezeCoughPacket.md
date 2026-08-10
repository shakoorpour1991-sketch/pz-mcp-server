---
title: zombie.network.packets.actions.SneezeCoughPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.actions
---

# zombie.network.packets.actions.SneezeCoughPacket

`public class SneezeCoughPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.actions

## Inheritance
- java.lang.Object
- zombie.network.packets.actions.SneezeCoughPacket

## Constructors

### public SneezeCoughPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoPlayer wielder,
int sneezingCoughing,
byte sneezeVar)

**Parameters:**
- `IsoPlayer` `wielder`
- `int` `sneezingCoughing`
- `byte` `sneezeVar`

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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\actions\SneezeCoughPacket.html`*
