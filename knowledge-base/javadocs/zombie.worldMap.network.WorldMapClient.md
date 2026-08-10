---
title: zombie.worldMap.network.WorldMapClient
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.network
---

# zombie.worldMap.network.WorldMapClient

`public final class WorldMapClient extends Object`

**Kind:** class · **Package:** zombie.worldMap.network

## Inheritance
- java.lang.Object
- zombie.worldMap.network.WorldMapClient

## Fields

### public static final WorldMapClient instance

## Constructors

### public WorldMapClient()

## Methods

### public static WorldMapClient getInstance()

**Returns:** `WorldMapClient`

### public void receive(ByteBufferReader bb)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void receiveRequestData(ByteBufferReader bb)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void worldMapLoaded()

**Returns:** `void`

### public void sendShareSymbol(WorldMapBaseSymbol symbol,
WorldMapSymbolNetworkInfo networkInfo)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`
- `WorldMapSymbolNetworkInfo` `networkInfo`

**Returns:** `void`

### public void sendAddSymbol(WorldMapBaseSymbol symbol,
WorldMapSymbolNetworkInfo networkInfo)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`
- `WorldMapSymbolNetworkInfo` `networkInfo`

**Returns:** `void`

### public void sendModifySymbol(WorldMapBaseSymbol symbol)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void sendSetPrivateSymbol(WorldMapBaseSymbol symbol)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void sendRemoveSymbol(WorldMapBaseSymbol symbol)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void setAuthorHidden(String userName,
boolean hidden)

**Parameters:**
- `String` `userName`
- `boolean` `hidden`

**Returns:** `void`

### public boolean isAuthorHidden(String userName)

**Parameters:**
- `String` `userName`

**Returns:** `boolean`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\network\WorldMapClient.html`*
