---
title: zombie.network.packets.INetworkPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.network.packets
---

# zombie.network.packets.INetworkPacket

`public interface INetworkPacket extends INetworkPacketField`

**Kind:** interface · **Package:** zombie.network.packets

## Methods

### default void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### default void parseClientLoading(ByteBufferReader b,
UdpConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `UdpConnection` `connection`

**Returns:** `void`

### default void parseClient(ByteBufferReader b,
UdpConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `UdpConnection` `connection`

**Returns:** `void`

### default void parseServer(ByteBufferReader b,
UdpConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `UdpConnection` `connection`

**Returns:** `void`

### default void postpone()

**Returns:** `void`

### default boolean isPostponed()

**Returns:** `boolean`

### default boolean shouldInstantiate()

**Returns:** `boolean`

### default void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### default void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### default void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### default void sync(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### default void logInconsistentPacket(IConnection connection,
PacketTypes.PacketType packetType)

**Parameters:**
- `IConnection` `connection`
- `PacketTypes.PacketType` `packetType`

**Returns:** `void`

### default void sendToClient(PacketTypes.PacketType packetType,
IConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `IConnection` `connection`

**Returns:** `void`

### default void sendToClient(PacketTypes.PacketType packetType,
String username)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `String` `username`

**Returns:** `void`

### default void sendToServer(PacketTypes.PacketType packetType)

**Parameters:**
- `PacketTypes.PacketType` `packetType`

**Returns:** `void`

### default void sendToClients(PacketTypes.PacketType packetType,
UdpConnection excluded)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `excluded`

**Returns:** `void`

### default void sendToRelativeClients(PacketTypes.PacketType packetType,
UdpConnection excluded,
float x,
float y)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `excluded`
- `float` `x`
- `float` `y`

**Returns:** `void`

### static void send(IConnection connection,
PacketTypes.PacketType packetType,
Object... values)

**Parameters:**
- `IConnection` `connection`
- `PacketTypes.PacketType` `packetType`
- `Object...` `values`

**Returns:** `void`

### static void send(PacketTypes.PacketType packetType,
Object... values)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `Object...` `values`

**Returns:** `void`

### static void send(IsoPlayer player,
PacketTypes.PacketType packetType,
Object... values)

**Parameters:**
- `IsoPlayer` `player`
- `PacketTypes.PacketType` `packetType`
- `Object...` `values`

**Returns:** `void`

### static void sendToAll(PacketTypes.PacketType packetType,
Object... values)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `Object...` `values`

**Returns:** `void`

### static void sendToAll(PacketTypes.PacketType packetType,
IConnection excluded,
Object... values)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `IConnection` `excluded`
- `Object...` `values`

**Returns:** `void`

### static void sendToRelative(PacketTypes.PacketType packetType,
float x,
float y,
Object... values)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `float` `x`
- `float` `y`
- `Object...` `values`

**Returns:** `void`

### static void sendToRelative(PacketTypes.PacketType packetType,
IConnection excluded,
float x,
float y,
Object... values)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `IConnection` `excluded`
- `float` `x`
- `float` `y`
- `Object...` `values`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\INetworkPacket.html`*
