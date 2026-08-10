---
title: zombie.network.packets.RequestDataPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.RequestDataPacket

`public class RequestDataPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.RequestDataPacket

## Fields

### public static ByteBuffer largeFileBb

### public static ByteBufferReader largeFileBbReader

### public static ByteBufferWriter largeFileBbWriter

## Constructors

### public RequestDataPacket()

## Methods

### public void allocateLargeFileBB()

**Returns:** `void`

### public void setRequest()

**Returns:** `void`

### public void setRequest(RequestDataPacket.RequestID id)

**Parameters:**
- `RequestDataPacket.RequestID` `id`

**Returns:** `void`

### public void setPartData(RequestDataPacket.RequestID id,
ByteBufferReader bb)

**Parameters:**
- `RequestDataPacket.RequestID` `id`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void setPartDataParameters(int bytesSent,
int partSize)

**Parameters:**
- `int` `bytesSent`
- `int` `partSize`

**Returns:** `void`

### public void setACK(RequestDataPacket.RequestID id)

**Parameters:**
- `RequestDataPacket.RequestID` `id`

**Returns:** `void`

### public void sendConnectingDetails(UdpConnection connection,
ServerWorldDatabase.LogonResult logonResult)

**Parameters:**
- `UdpConnection` `connection`
- `ServerWorldDatabase.LogonResult` `logonResult`

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

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public String getDescription()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\RequestDataPacket.html`*
