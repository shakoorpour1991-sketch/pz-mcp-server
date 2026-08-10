---
title: zombie.core.raknet.UdpEngine
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.raknet
---

# zombie.core.raknet.UdpEngine

`public class UdpEngine extends Object`

**Kind:** class · **Package:** zombie.core.raknet

## Inheritance
- java.lang.Object
- zombie.core.raknet.UdpEngine

## Fields

### public final List<UdpConnection> connections

### public int port

## Constructors

### public UdpEngine(int port,
int udpPort,
int maxConnections,
String serverPassword,
boolean bListen)
throws ConnectException

**Parameters:**
- `int` `port`
- `int` `udpPort`
- `int` `maxConnections`
- `String` `serverPassword`
- `boolean` `bListen`

## Methods

### public void Shutdown()

**Returns:** `void`

### public void SetServerPassword(String password)

**Parameters:**
- `String` `password`

**Returns:** `void`

### public String hashServerPassword(String password)

**Parameters:**
- `String` `password`

**Returns:** `String`

### public String getServerIP()

**Returns:** `String`

### public long getClientSteamID(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `long`

### public long getClientOwnerSteamID(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `long`

### public ByteBufferWriter startPacket()

**Returns:** `ByteBufferWriter`

### public void endPacketBroadcast(PacketTypes.PacketType packetType)

**Parameters:**
- `PacketTypes.PacketType` `packetType`

**Returns:** `void`

### public void endPacketBroadcastExcept(int priority,
int reliability,
UdpConnection connection)

**Parameters:**
- `int` `priority`
- `int` `reliability`
- `UdpConnection` `connection`

**Returns:** `void`

### public void connected()

**Returns:** `void`

### public void removeConnection(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public ByteBufferReader Receive()

**Returns:** `ByteBufferReader`

### public UdpConnection getActiveConnection(long connection)

**Parameters:**
- `long` `connection`

**Returns:** `UdpConnection`

### public void Connect(String hostname,
int port,
String serverPassword,
boolean useSteamRelay)

**Parameters:**
- `String` `hostname`
- `int` `port`
- `String` `serverPassword`
- `boolean` `useSteamRelay`

**Returns:** `void`

### public void forceDisconnect(long connectedGUID,
String message)

**Parameters:**
- `long` `connectedGUID`
- `String` `message`

**Returns:** `void`

### public RakNetPeerInterface getPeer()

**Returns:** `RakNetPeerInterface`

### public int getMaxConnections()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\raknet\UdpEngine.html`*
