---
title: zombie.network.IConnection
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.network
---

# zombie.network.IConnection

`public interface IConnection`

**Kind:** interface · **Package:** zombie.network

## Methods

### INetworkPacket getPacket(PacketTypes.PacketType var1)

**Parameters:**
- `PacketTypes.PacketType` `var1`

**Returns:** `INetworkPacket`

### boolean isHashEquals(PacketTypes.PacketType var1,
Integer var2)

**Parameters:**
- `PacketTypes.PacketType` `var1`
- `Integer` `var2`

**Returns:** `boolean`

### boolean isLimitExceeded(PacketTypes.PacketType var1)

**Parameters:**
- `PacketTypes.PacketType` `var1`

**Returns:** `boolean`

### IsoPlayer getPlayerAt(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `IsoPlayer`

### void setPlayerAt(int var1,
IsoPlayer var2)

**Parameters:**
- `int` `var1`
- `IsoPlayer` `var2`

**Returns:** `void`

### ByteBufferWriter startPacket()

**Returns:** `ByteBufferWriter`

### void endPacket(int var1,
int var2,
byte var3)

**Parameters:**
- `int` `var1`
- `int` `var2`
- `byte` `var3`

**Returns:** `void`

### void cancelPacket()

**Returns:** `void`

### String getUserName()

**Returns:** `String`

### String getDescription()

**Returns:** `String`

### boolean hasPlayer(String var1)

**Parameters:**
- `String` `var1`

**Returns:** `boolean`

### boolean hasPlayer(short var1)

**Parameters:**
- `short` `var1`

**Returns:** `boolean`

### Role getRole()

**Returns:** `Role`

### void setRole(Role var1)

**Parameters:**
- `Role` `var1`

**Returns:** `void`

### boolean isRelevantTo(float var1,
float var2)

**Parameters:**
- `float` `var1`
- `float` `var2`

**Returns:** `boolean`

### long getConnectedGUID()

**Returns:** `long`

### String getIDStr()

**Returns:** `String`

### boolean wasInLoadingQueue()

**Returns:** `boolean`

### PlayerDownloadServer getPlayerDownloadServer()

**Returns:** `PlayerDownloadServer`

### long getLastConnection()

**Returns:** `long`

### int getMTUSize()

**Returns:** `int`

### void setConnectionTimestamp(long var1)

**Parameters:**
- `long` `var1`

**Returns:** `void`

### PacketValidator getValidator()

**Returns:** `PacketValidator`

### int getChunkGridWidth()

**Returns:** `int`

### void setChunkGridWidth(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `void`

### String getUserName(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `String`

### void setUserName(int var1,
String var2)

**Parameters:**
- `int` `var1`
- `String` `var2`

**Returns:** `void`

### Vector3 getRelevantPos(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `Vector3`

### void setRelevantPos(int var1,
Vector3 var2)

**Parameters:**
- `int` `var1`
- `Vector3` `var2`

**Returns:** `void`

### void setConnectArea(int var1,
Vector3 var2)

**Parameters:**
- `int` `var1`
- `Vector3` `var2`

**Returns:** `void`

### short getPlayerId(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `short`

### void setPlayerId(int var1,
short var2)

**Parameters:**
- `int` `var1`
- `short` `var2`

**Returns:** `void`

### void setRelevantRange(byte var1)

**Parameters:**
- `byte` `var1`

**Returns:** `void`

### void forceDisconnect(String var1)

**Parameters:**
- `String` `var1`

**Returns:** `void`

### void setFullyConnected()

**Returns:** `void`

### long getSteamId()

**Returns:** `long`

### String getIP()

**Returns:** `String`

### void setLoadedCells(int var1,
ClientServerMap var2)

**Parameters:**
- `int` `var1`
- `ClientServerMap` `var2`

**Returns:** `void`

### ClientServerMap getLoadedCell(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `ClientServerMap`

### default void addChunkObjectState(short w)

**Parameters:**
- `short` `w`

**Returns:** `void`

### default int getIndex()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\IConnection.html`*
