---
title: zombie.worldMap.network.WorldMapServer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.network
---

# zombie.worldMap.network.WorldMapServer

`public final class WorldMapServer extends Object`

**Kind:** class · **Package:** zombie.worldMap.network

## Inheritance
- java.lang.Object
- zombie.worldMap.network.WorldMapServer

## Fields

### public static final WorldMapServer instance

### public static final int SAVEFILE_VERSION

### public static final byte PACKET_AddMarker

### public static final byte PACKET_RemoveMarker

### public static final byte PACKET_AddSymbol

### public static final byte PACKET_RemoveSymbol

### public static final byte PACKET_ModifySymbol

### public static final byte PACKET_SetPrivateSymbol

### public static final byte PACKET_ModifySharing

## Constructors

### public WorldMapServer()

## Methods

### public void receive(ByteBufferReader bb,
UdpConnection connection)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public void addMarkerOnClient(WorldMapBaseSymbol symbol)
throws IOException

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void removeMarkerOnClient(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public void addSymbolOnClient(WorldMapBaseSymbol symbol)
throws IOException

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void removeSymbolOnClient(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public void modifySymbolOnClient(WorldMapBaseSymbol symbol)
throws IOException

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void setPrivateSymbolOnClient(WorldMapBaseSymbol symbol)
throws IOException

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void sendRequestData(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void writeSavefile()

**Returns:** `void`

### public void readSavefile()

**Returns:** `void`

### public int removeAllSymbolsForUser(String userName)

**Parameters:**
- `String` `userName`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\network\WorldMapServer.html`*
