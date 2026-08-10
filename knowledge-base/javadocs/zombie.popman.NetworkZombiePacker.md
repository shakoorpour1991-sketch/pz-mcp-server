---
title: zombie.popman.NetworkZombiePacker
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.NetworkZombiePacker

`public class NetworkZombiePacker extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.NetworkZombiePacker

## Fields

### public final NetworkZombieList zombiesRequest

### public final Map<IConnection, List<Short>> zombiesToSend

## Constructors

### public NetworkZombiePacker()

## Methods

### public static NetworkZombiePacker getInstance()

**Returns:** `NetworkZombiePacker`

### public void setExtraUpdate()

**Returns:** `void`

### public void deleteZombie(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `void`

### public void parseZombie(ByteBufferReader bb,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `bb`
- `IConnection` `connection`

**Returns:** `void`

### public void postupdate()

**Returns:** `void`

### public int getZombieData(UdpConnection connection,
ZombieSynchronizationPacket packet)

**Parameters:**
- `UdpConnection` `connection`
- `ZombieSynchronizationPacket` `packet`

**Returns:** `int`

### public void send(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\NetworkZombiePacker.html`*
