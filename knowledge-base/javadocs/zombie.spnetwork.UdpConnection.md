---
title: zombie.spnetwork.UdpConnection
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.spnetwork
---

# zombie.spnetwork.UdpConnection

`public final class UdpConnection extends PacketsCache implements IConnection`

**Kind:** class · **Package:** zombie.spnetwork

## Inheritance
- java.lang.Object
- zombie.network.PacketsCache
- zombie.spnetwork.UdpConnection

## Fields

### public final IsoPlayer[] players

## Constructors

### public UdpConnection(UdpEngine engine)

**Parameters:**
- `UdpEngine` `engine`

## Methods

### public boolean ReleventTo(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public IsoPlayer getPlayerAt(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `IsoPlayer`

### public void setPlayerAt(int playerIndex,
IsoPlayer player)

**Parameters:**
- `int` `playerIndex`
- `IsoPlayer` `player`

**Returns:** `void`

### public ByteBufferWriter startPacket()

**Returns:** `ByteBufferWriter`

### public void endPacket(int packetPriority,
int packetReliability,
byte orderingChannel)

**Parameters:**
- `int` `packetPriority`
- `int` `packetReliability`
- `byte` `orderingChannel`

**Returns:** `void`

### public String getUserName()

**Returns:** `String`

### public String getDescription()

**Returns:** `String`

### public boolean hasPlayer(String userName)

**Parameters:**
- `String` `userName`

**Returns:** `boolean`

### public boolean hasPlayer(short playerId)

**Parameters:**
- `short` `playerId`

**Returns:** `boolean`

### public Role getRole()

**Returns:** `Role`

### public void setRole(Role role)

**Parameters:**
- `Role` `role`

**Returns:** `void`

### public boolean isRelevantTo(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public long getConnectedGUID()

**Returns:** `long`

### public String getIDStr()

**Returns:** `String`

### public boolean wasInLoadingQueue()

**Returns:** `boolean`

### public PlayerDownloadServer getPlayerDownloadServer()

**Returns:** `PlayerDownloadServer`

### public void endPacketImmediate()

**Returns:** `void`

### public void cancelPacket()

**Returns:** `void`

### public long getLastConnection()

**Returns:** `long`

### public int getMTUSize()

**Returns:** `int`

### public void setConnectionTimestamp(long connectionReadyInterval)

**Parameters:**
- `long` `connectionReadyInterval`

**Returns:** `void`

### public PacketValidator getValidator()

**Returns:** `PacketValidator`

### public int getChunkGridWidth()

**Returns:** `int`

### public void setChunkGridWidth(int range)

**Parameters:**
- `int` `range`

**Returns:** `void`

### public void setUserName(int playerIndex,
String userName)

**Parameters:**
- `int` `playerIndex`
- `String` `userName`

**Returns:** `void`

### public void setRelevantPos(int playerIndex,
Vector3 relevantPos)

**Parameters:**
- `int` `playerIndex`
- `Vector3` `relevantPos`

**Returns:** `void`

### public void setConnectArea(int playerIndex,
Vector3 connectArea)

**Parameters:**
- `int` `playerIndex`
- `Vector3` `connectArea`

**Returns:** `void`

### public void setPlayerId(int playerIndex,
short playerID)

**Parameters:**
- `int` `playerIndex`
- `short` `playerID`

**Returns:** `void`

### public String getUserName(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `String`

### public void setRelevantRange(byte relevantRange)

**Parameters:**
- `byte` `relevantRange`

**Returns:** `void`

### public void forceDisconnect(String description)

**Parameters:**
- `String` `description`

**Returns:** `void`

### public void setFullyConnected()

**Returns:** `void`

### public long getSteamId()

**Returns:** `long`

### public String getIP()

**Returns:** `String`

### public short getPlayerId(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `short`

### public void setLoadedCells(int playerIndex,
ClientServerMap clientServerMap)

**Parameters:**
- `int` `playerIndex`
- `ClientServerMap` `clientServerMap`

**Returns:** `void`

### public ClientServerMap getLoadedCell(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `ClientServerMap`

### public Vector3 getRelevantPos(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `Vector3`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\spnetwork\UdpConnection.html`*
