---
title: zombie.network.MPStatistics
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.network
---

# zombie.network.MPStatistics

`public class MPStatistics extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.MPStatistics

## Constructors

### public MPStatistics()

## Methods

### public static void onNewDay()

**Returns:** `void`

### public static void onZombieWasKilled(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `void`

### public static void onPlayerWasKilled(boolean boolean0,
boolean boolean2,
boolean boolean1)

**Parameters:**
- `boolean` `boolean0`
- `boolean` `boolean2`
- `boolean` `boolean1`

**Returns:** `void`

### public static void onPlayerWasZombified()

**Returns:** `void`

### public static void onCorpseBurned()

**Returns:** `void`

### public static int getZombiesKilledByFireToday()

**Returns:** `int`

### public static int getZombiesKilledToday()

**Returns:** `int`

### public static int getZombifiedPlayersToday()

**Returns:** `int`

### public static int getPlayersKilledByFireToday()

**Returns:** `int`

### public static int getPlayersKilledByZombieToday()

**Returns:** `int`

### public static int getPlayersKilledByPlayerToday()

**Returns:** `int`

### public static int getBurnedCorpsesToday()

**Returns:** `int`

### public static void countChunkRequests(int int0,
int int1,
int int2,
int int3,
int int4)

**Parameters:**
- `int` `int0`
- `int` `int1`
- `int` `int2`
- `int` `int3`
- `int` `int4`

**Returns:** `void`

### public static boolean doKickWhileLoading(UdpConnection udpConnection,
long long0)

**Parameters:**
- `UdpConnection` `udpConnection`
- `long` `long0`

**Returns:** `boolean`

### public static boolean doKick(UdpConnection udpConnection,
long long0)

**Parameters:**
- `UdpConnection` `udpConnection`
- `long` `long0`

**Returns:** `boolean`

### public static void setVOIPSource(VoiceManagerData.VoiceDataSource voiceDataSource,
int int0)

**Parameters:**
- `VoiceManagerData.VoiceDataSource` `voiceDataSource`
- `int` `int0`

**Returns:** `void`

### public static void countServerNetworkingFPS()

**Returns:** `void`

### public static void increaseStoredChunk()

**Returns:** `void`

### public static void decreaseStoredChunk()

**Returns:** `void`

### public static void increaseRelevantChunk()

**Returns:** `void`

### public static void decreaseRelevantChunk()

**Returns:** `void`

### public static void Init()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static void Update()

**Returns:** `void`

### public static void requested()

**Returns:** `void`

### public static void clientZombieCulled()

**Returns:** `void`

### public static void serverZombieCulled()

**Returns:** `void`

### public static void clientZombieUpdated()

**Returns:** `void`

### public static void serverZombieUpdated()

**Returns:** `void`

### public static void write(UdpConnection udpConnection,
ByteBuffer byteBuffer)

**Parameters:**
- `UdpConnection` `udpConnection`
- `ByteBuffer` `byteBuffer`

**Returns:** `void`

### public static void parse(ByteBuffer byteBuffer)

**Parameters:**
- `ByteBuffer` `byteBuffer`

**Returns:** `void`

### public static KahluaTable getLuaStatus()

**Returns:** `KahluaTable`

### public static KahluaTable getLuaStatistics()

**Returns:** `KahluaTable`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\MPStatistics.html`*
