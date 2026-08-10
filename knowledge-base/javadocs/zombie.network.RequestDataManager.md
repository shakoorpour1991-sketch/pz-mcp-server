---
title: zombie.network.RequestDataManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.RequestDataManager

`public class RequestDataManager extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.RequestDataManager

## Fields

### public static final int smallFileSize

### public static final int maxLargeFileSize

### public static final int packSize

## Methods

### public static RequestDataManager getInstance()

**Returns:** `RequestDataManager`

### public void ACKWasReceived(RequestDataPacket.RequestID id,
UdpConnection connection,
int bytesTransmitted)

**Parameters:**
- `RequestDataPacket.RequestID` `id`
- `UdpConnection` `connection`
- `int` `bytesTransmitted`

**Returns:** `void`

### public void putDataForTransmit(RequestDataPacket.RequestID id,
UdpConnection connection,
ByteBuffer bb)

**Parameters:**
- `RequestDataPacket.RequestID` `id`
- `UdpConnection` `connection`
- `ByteBuffer` `bb`

**Returns:** `void`

### public void disconnect(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public ByteBufferReader receiveClientData(RequestDataPacket.RequestID id,
ByteBuffer bb,
int fileSize,
int bytesTransmitted)

**Parameters:**
- `RequestDataPacket.RequestID` `id`
- `ByteBuffer` `bb`
- `int` `fileSize`
- `int` `bytesTransmitted`

**Returns:** `ByteBufferReader`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\RequestDataManager.html`*
