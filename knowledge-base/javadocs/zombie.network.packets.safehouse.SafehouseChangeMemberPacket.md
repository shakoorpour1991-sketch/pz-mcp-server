---
title: zombie.network.packets.safehouse.SafehouseChangeMemberPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.safehouse
---

# zombie.network.packets.safehouse.SafehouseChangeMemberPacket

`public class SafehouseChangeMemberPacket extends SafeHousePlayer implements INetworkPacket, AntiCheatSafeHouseMember.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.safehouse

## Inheritance
- java.lang.Object
- zombie.network.fields.IDInteger
- zombie.network.fields.SafehouseID
- zombie.network.fields.SafeHousePlayer
- zombie.network.packets.safehouse.SafehouseChangeMemberPacket

## Constructors

### public SafehouseChangeMemberPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\safehouse\SafehouseChangeMemberPacket.html`*
