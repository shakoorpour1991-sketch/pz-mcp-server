---
title: zombie.core.raknet.UdpConnection
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.raknet
---

# zombie.core.raknet.UdpConnection

`public class UdpConnection extends PacketsCache implements IConnection`

**Kind:** class · **Package:** zombie.core.raknet

## Inheritance
- java.lang.Object
- zombie.network.PacketsCache
- zombie.core.raknet.UdpConnection

## Fields

### public String[] usernames

### public static HashMap<String,Long> lastConnections

### public long lastUnauthorizedPacket

### public String password

### public Vector3[] releventPos

### public short[] playerIds

### public IsoPlayer[] players

### public Vector3[] connectArea

### public UdpConnection.ChecksumState checksumState

### public long checksumTime

### public boolean awaitingCoopApprove

### public boolean isCoopHost

### public final gnu.trove.list.array.TShortArrayList chunkObjectStateRequests

### public final gnu.trove.map.hash.TShortShortHashMap vehicleRequests

### public final gnu.trove.map.hash.TShortObjectHashMap<IsoObject> thumpHits

### public ZNetStatistics netStatistics

### public final Deque<Integer> pingHistory

### public boolean statisticTransmissionEnabled

### public final UpdateLimit playerSave

### public static final long CONNECTION_GRACE_INTERVAL

### public static final long CONNECTION_READY_INTERVAL

### public long connectionTimestamp

### public boolean googleAuth

### public UpdateTimer timerSendZombie

### public final UpdateLimit zombieListRefresh

### public HashMap<Short, UpdateLimit> timerUpdateAnimal

## Constructors

### public UdpConnection(UdpEngine engine,
long connectedGuid,
int index)

**Parameters:**
- `UdpEngine` `engine`
- `long` `connectedGuid`
- `int` `index`

## Methods

### public int getMaxPlayers()

**Returns:** `int`

### public void setMaxPlayers(int maxPlayers)

**Parameters:**
- `int` `maxPlayers`

**Returns:** `void`

### public RakNetPeerInterface getPeer()

**Returns:** `RakNetPeerInterface`

### public long getConnectedGUID()

**Returns:** `long`

### public String getIDStr()

**Returns:** `String`

### public void setIDStr(String idStr)

**Parameters:**
- `String` `idStr`

**Returns:** `void`

### public long getOwnerId()

**Returns:** `long`

### public void setOwnerId(long ownerId)

**Parameters:**
- `long` `ownerId`

**Returns:** `void`

### public void setPinged(boolean ping)

**Parameters:**
- `boolean` `ping`

**Returns:** `void`

### public boolean wasInLoadingQueue()

**Returns:** `boolean`

### public void setWasInLoadingQueue(boolean wasInLoadingQueue)

**Parameters:**
- `boolean` `wasInLoadingQueue`

**Returns:** `void`

### public PlayerDownloadServer getPlayerDownloadServer()

**Returns:** `PlayerDownloadServer`

### public void setPlayerDownloadServer(PlayerDownloadServer playerDownloadServer)

**Parameters:**
- `PlayerDownloadServer` `playerDownloadServer`

**Returns:** `void`

### public int getZombieListHash()

**Returns:** `int`

### public void setZombieListHash(int zombieListHash)

**Parameters:**
- `int` `zombieListHash`

**Returns:** `void`

### public boolean isNeighborPlayer()

**Returns:** `boolean`

### public String getServerIP()

**Returns:** `String`

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

### public ByteBufferWriter startPingPacket()

**Returns:** `ByteBufferWriter`

### public boolean isRelevantTo(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public float getRelevantAndDistance(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public boolean RelevantToPlayerIndex(int n,
float x,
float y)

**Parameters:**
- `int` `n`
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean RelevantTo(float x,
float y,
float radius)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `radius`

**Returns:** `boolean`

### public void cancelPacket()

**Returns:** `void`

### public long getLastConnection()

**Returns:** `long`

### public void setLastConnection(long lastConnection)

**Parameters:**
- `long` `lastConnection`

**Returns:** `void`

### public int getBufferPosition()

**Returns:** `int`

### public void endPacket(int priority,
int reliability,
byte ordering)

**Parameters:**
- `int` `priority`
- `int` `reliability`
- `byte` `ordering`

**Returns:** `void`

### public String getUserName()

**Returns:** `String`

### public String getUserName(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `String`

### public void setRelevantRange(byte b)

**Parameters:**
- `byte` `b`

**Returns:** `void`

### public byte getRelevantRange()

**Returns:** `byte`

### public void endPacket()

**Returns:** `void`

### public void endPacketImmediate()

**Returns:** `void`

### public void endPacketUnordered()

**Returns:** `void`

### public void endPacketUnreliable()

**Returns:** `void`

### public void endPacketSuperHighUnreliable()

**Returns:** `void`

### public void endPingPacket()

**Returns:** `void`

### public InetSocketAddress getInetSocketAddress()

**Returns:** `InetSocketAddress`

### public void forceDisconnect(String description)

**Parameters:**
- `String` `description`

**Returns:** `void`

### public void setFullyConnected()

**Returns:** `void`

### public long getSteamId()

**Returns:** `long`

### public void setSteamId(long steamId)

**Parameters:**
- `long` `steamId`

**Returns:** `void`

### public String getIP()

**Returns:** `String`

### public void setIP(String ip)

**Parameters:**
- `String` `ip`

**Returns:** `void`

### public short getPlayerId(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `short`

### public void setChunkGridWidth(int range)

**Parameters:**
- `int` `range`

**Returns:** `void`

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

### public void addChunkObjectState(short w)

**Parameters:**
- `short` `w`

**Returns:** `void`

### public void setConnectArea(int playerIndex,
Vector3 connectArea)

**Parameters:**
- `int` `playerIndex`
- `Vector3` `connectArea`

**Returns:** `void`

### public Vector3 getRelevantPos(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `Vector3`

### public void setConnectionTimestamp(long interval)

**Parameters:**
- `long` `interval`

**Returns:** `void`

### public PacketValidator getValidator()

**Returns:** `PacketValidator`

### public int getChunkGridWidth()

**Returns:** `int`

### public int getIndex()

**Returns:** `int`

### public void setIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public boolean isAllChatMuted()

**Returns:** `boolean`

### public void setAllChatMuted(boolean allChatMuted)

**Parameters:**
- `boolean` `allChatMuted`

**Returns:** `void`

### public void setUserName(String userName)

**Parameters:**
- `String` `userName`

**Returns:** `void`

### public void setUserName(int playerIndex,
String userName)

**Parameters:**
- `int` `playerIndex`
- `String` `userName`

**Returns:** `void`

### public void setRelevantPos(int playerIndex,
Vector3 vector3)

**Parameters:**
- `int` `playerIndex`
- `Vector3` `vector3`

**Returns:** `void`

### public void setPlayerId(int playerIndex,
short playerID)

**Parameters:**
- `int` `playerIndex`
- `short` `playerID`

**Returns:** `void`

### public void checkReady()

**Returns:** `void`

### public boolean isReady()

**Returns:** `boolean`

### public void setReady(boolean ready)

**Parameters:**
- `boolean` `ready`

**Returns:** `void`

### public boolean isGoogleAuthTimeout()

**Returns:** `boolean`

### public boolean isConnectionAttemptTimeout()

**Returns:** `boolean`

### public boolean isConnectionGraceIntervalTimeout()

**Returns:** `boolean`

### public boolean isFullyConnected()

**Returns:** `boolean`

### public void calcCountPlayersInRelevantPosition()

**Returns:** `void`

### public ZNetStatistics getStatistics()

**Returns:** `ZNetStatistics`

### public void updatePing()

**Returns:** `void`

### public int getAveragePing()

**Returns:** `int`

### public int getLastPing()

**Returns:** `int`

### public int getLowestPing()

**Returns:** `int`

### public int getMTUSize()

**Returns:** `int`

### public UdpConnection.ConnectionType getConnectionType()

**Returns:** `UdpConnection.ConnectionType`

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

### public String getRoleName()

**Returns:** `String`

### public void setRole(Role role)

**Parameters:**
- `Role` `role`

**Returns:** `void`

### public boolean havePlayer(IsoPlayer p)

**Parameters:**
- `IsoPlayer` `p`

**Returns:** `boolean`

### public byte getPlayerIndex(IsoPlayer p)

**Parameters:**
- `IsoPlayer` `p`

**Returns:** `byte`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\raknet\UdpConnection.html`*
