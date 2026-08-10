---
title: zombie.network.MPStatistic
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.network
---

# zombie.network.MPStatistic

`public class MPStatistic extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.MPStatistic

## Fields

### public static MPStatistic instance

### public MPStatistic.TasksStatistic LoaderThreadTasks

### public MPStatistic.TasksStatistic RecalcThreadTasks

### public MPStatistic.SaveTasksStatistic SaveTasks

### public MPStatistic.ServerCellStatistic ServerMapToLoad

### public MPStatistic.ServerCellStatistic ServerMapLoadedCells

### public MPStatistic.ServerCellStatistic ServerMapLoaded2

### public MPStatistic.MainThreadStatistic Main

### public MPStatistic.ThreadStatistic ServerLOS

### public MPStatistic.ThreadStatistic LoaderThread

### public MPStatistic.ThreadStatistic RecalcAllThread

### public MPStatistic.ThreadStatistic SaveThread

### public MPStatistic.ThreadStatistic PolyPathThread

### public MPStatistic.ThreadStatistic WorldReuser

### public MPStatistic.ThreadStatistic PlayerDownloadServer

### public MPStatistic.ThreadStatistic MapCollisionThread

### public MPStatistic.ProbeStatistic ChunkChecksum

### public MPStatistic.ProbeStatistic Bullet

### public MPStatistic.ProbeStatistic AnimationPlayerUpdate

### public MPStatistic.ProbeStatistic ServerMapPreupdate

### public MPStatistic.ProbeStatistic ServerMapPostupdate

### public MPStatistic.ProbeStatistic IngameStateUpdate

### public static boolean clientStatisticEnable

## Constructors

### public MPStatistic()

## Methods

### public static MPStatistic getInstance()

**Returns:** `MPStatistic`

### public void IncrementServerChunkThreadSaveNow()

**Returns:** `void`

### public void teleport()

**Returns:** `void`

### public void write(ByteBufferWriter byteBufferWriter)

**Parameters:**
- `ByteBufferWriter` `byteBufferWriter`

**Returns:** `void`

### public void setPacketsLength(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `void`

### public void addIncomePacket(PacketTypes.PacketType packetType,
int int0)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `int` `int0`

**Returns:** `void`

### public void addOutcomePacket(short short0,
int int0)

**Parameters:**
- `short` `short0`
- `int` `int0`

**Returns:** `void`

### public void IncrementLoadCellFromDisk()

**Returns:** `void`

### public void IncrementSaveCellToDisk()

**Returns:** `void`

### public void process(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `void`

### public void getStatisticTable(ByteBuffer byteBuffer)
throws IOException

**Parameters:**
- `ByteBuffer` `byteBuffer`

**Returns:** `void`

### public void setStatisticTable(ByteBuffer byteBuffer)
throws IOException

**Parameters:**
- `ByteBuffer` `byteBuffer`

**Returns:** `void`

### public KahluaTable getStatisticTableForLua()

**Returns:** `KahluaTable`

### public void setPeriod(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `void`

### public long getPlayers()

**Returns:** `long`

### public long getZombies()

**Returns:** `long`

### public long getLoadedCells()

**Returns:** `long`

### public long getMinUpdatePeriod()

**Returns:** `long`

### public long getMaxUpdatePeriod()

**Returns:** `long`

### public long getAvgUpdatePeriod()

**Returns:** `long`

### public int getLoadCellFromDisk()

**Returns:** `int`

### public int getSaveCellToDisk()

**Returns:** `int`

### public MPStatistic.TasksStatistic getLoaderThreadTasks()

**Returns:** `MPStatistic.TasksStatistic`

### public MPStatistic.TasksStatistic getRecalcThreadTasks()

**Returns:** `MPStatistic.TasksStatistic`

### public MPStatistic.SaveTasksStatistic getSaveTasks()

**Returns:** `MPStatistic.SaveTasksStatistic`

### public MPStatistic.ServerCellStatistic getServerMapToLoad()

**Returns:** `MPStatistic.ServerCellStatistic`

### public MPStatistic.ServerCellStatistic getServerMapLoadedCells()

**Returns:** `MPStatistic.ServerCellStatistic`

### public MPStatistic.ServerCellStatistic getServerMapLoaded2()

**Returns:** `MPStatistic.ServerCellStatistic`

### public int getCountServerChunkThreadSaveNow()

**Returns:** `int`

### public MPStatistic.MainThreadStatistic getMain()

**Returns:** `MPStatistic.MainThreadStatistic`

### public MPStatistic.ThreadStatistic getServerLOS()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getLoaderThread()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getRecalcAllThread()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getSaveThread()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getPolyPathThread()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getWorldReuser()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getPlayerDownloadServer()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ThreadStatistic getMapCollisionThread()

**Returns:** `MPStatistic.ThreadStatistic`

### public MPStatistic.ProbeStatistic getChunkChecksum()

**Returns:** `MPStatistic.ProbeStatistic`

### public MPStatistic.ProbeStatistic getBullet()

**Returns:** `MPStatistic.ProbeStatistic`

### public MPStatistic.ProbeStatistic getAnimationPlayerUpdate()

**Returns:** `MPStatistic.ProbeStatistic`

### public MPStatistic.ProbeStatistic getServerMapPreupdate()

**Returns:** `MPStatistic.ProbeStatistic`

### public MPStatistic.ProbeStatistic getServerMapPostupdate()

**Returns:** `MPStatistic.ProbeStatistic`

### public MPStatistic.ProbeStatistic getIngameStateUpdate()

**Returns:** `MPStatistic.ProbeStatistic`

### public long getTotalMemory()

**Returns:** `long`

### public long getFreeMemory()

**Returns:** `long`

### public long getConnectionsCount()

**Returns:** `long`

### public long getPacketLength()

**Returns:** `long`

### public int getCountIncomePackets()

**Returns:** `int`

### public int getCountIncomeBytes()

**Returns:** `int`

### public int getMaxIncomeBytesPerSecond()

**Returns:** `int`

### public int getCountOutcomePackets()

**Returns:** `int`

### public int getCountOutcomeBytes()

**Returns:** `int`

### public int getMaxOutcomeBytesPerSecond()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\MPStatistic.html`*
