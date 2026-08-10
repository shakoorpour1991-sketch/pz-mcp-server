---
title: zombie.network.packets.hit.WeaponHitPacket
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.WeaponHitPacket

`public class WeaponHitPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.WeaponHitPacket

## Fields

### public final Weapon weapon

## Constructors

### public WeaponHitPacket()

## Methods

### public void setData(Object... var1)

**Parameters:**
- `Object...` `var1`

**Returns:** `void`

### public void parse(ByteBuffer var1,
UdpConnection var2)

**Parameters:**
- `ByteBuffer` `var1`
- `UdpConnection` `var2`

**Returns:** `void`

### public void write(ByteBufferWriter var1)

**Parameters:**
- `ByteBufferWriter` `var1`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType var1,
UdpConnection var2)

**Parameters:**
- `PacketTypes.PacketType` `var1`
- `UdpConnection` `var2`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\WeaponHitPacket.html`*
