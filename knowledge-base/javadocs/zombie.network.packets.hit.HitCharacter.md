---
title: zombie.network.packets.hit.HitCharacter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.HitCharacter

`public interface HitCharacter extends INetworkPacket`

**Kind:** interface · **Package:** zombie.network.packets.hit

## Methods

### boolean isRelevant(UdpConnection var1)

**Parameters:**
- `UdpConnection` `var1`

**Returns:** `boolean`

### default void attack()

**Returns:** `void`

### default void react()

**Returns:** `void`

### default void update()

**Returns:** `void`

### default void preProcess()

**Returns:** `void`

### default void process()

**Returns:** `void`

### default void postProcess()

**Returns:** `void`

### default void log(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### default void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### default void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\HitCharacter.html`*
