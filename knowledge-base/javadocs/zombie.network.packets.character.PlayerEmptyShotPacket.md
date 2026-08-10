---
title: zombie.network.packets.character.PlayerEmptyShotPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.PlayerEmptyShotPacket

`public class PlayerEmptyShotPacket extends PlayerID implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.fields.IDShort
- zombie.network.fields.character.PlayerID
- zombie.network.packets.character.PlayerEmptyShotPacket

## Constructors

### public PlayerEmptyShotPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\PlayerEmptyShotPacket.html`*
