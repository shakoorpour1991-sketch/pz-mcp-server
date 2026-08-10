---
title: zombie.network.packets.connection.ConnectedCoopPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.connection
---

# zombie.network.packets.connection.ConnectedCoopPacket

`public class ConnectedCoopPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.connection

## Inheritance
- java.lang.Object
- zombie.network.packets.connection.ConnectedCoopPacket

## Constructors

### public ConnectedCoopPacket()

## Methods

### public void setAccessGranted(byte playerIndex)

**Parameters:**
- `byte` `playerIndex`

**Returns:** `void`

### public void setAccessDenied(String reason,
byte playerIndex)

**Parameters:**
- `String` `reason`
- `byte` `playerIndex`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\connection\ConnectedCoopPacket.html`*
