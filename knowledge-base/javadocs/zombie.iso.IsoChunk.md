---
title: zombie.iso.IsoChunk
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoChunk

`public final class IsoChunk extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoChunk

## Fields

### public static boolean doServerRequests

### public int wx

### public int wy

### public IsoGridSquare[][] squares

### public CorpseCount.ChunkData corpseCount

### public FliesSound.ChunkData corpseData

### public int maxLevel

### public int minLevel

### public final ArrayList<WorldSoundManager.WorldSound> soundList

### public int lightingUpdateCounter

### public IsoChunk next

### public final CollideWithObstaclesPoly.ChunkData collision

### public int adjacentChunkLoadedCounter

### public VehicleStorySpawnData vehicleStorySpawnData

### public Object loadVehiclesObject

### public final ObjectAmbientEmitters.ChunkData objectEmitterData

### public final FBORenderCutaways.ChunkLevelsData cutawayData

### public final VisibilityPolygon2.ChunkData vispolyData

### public static boolean doWorldgen

### public static boolean doForaging

### public static boolean doAttachments

### public long loadedFrame

### public long renderFrame

### public boolean requiresHotSave

### public boolean preventHotSave

### public IsoChunk.JobType jobType

### public LotHeader lotheader

### public final BoundedQueue<IsoFloorBloodSplat> floorBloodSplats

### public final ArrayList<IsoFloorBloodSplat> floorBloodSplatsFade

### public static final byte[][] renderByIndex

### public final ArrayList<IsoChunkMap> refs

### public boolean loaded

### public ArrayList<IsoGridSquare> proceduralZombieSquares

### public final boolean[] lightCheck

### public final boolean[] lightingNeverDone

### public final ArrayList<IsoRoomLight> roomLights

### public final ArrayList<BaseVehicle> vehicles

### public int lootRespawnHour

### public static final short LB_PATHFIND

### public short loadedBits

### public int objectsSyncCount

### public ArrayList<IsoGameCharacter> ragdollControllersForAddToWorld

### public static final ConcurrentLinkedQueue<IsoChunk> loadGridSquare

### public static final int BLOCK_SIZE

### public static final Object WriteLock

### public int randomId

### public long revision

## Constructors

### public IsoChunk(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoChunk(WorldReuserThread dummy)

**Parameters:**
- `WorldReuserThread` `dummy`

## Methods

### public void flagForHotSave()

**Returns:** `void`

### public void updateSounds()

**Returns:** `void`

### public boolean IsOnScreen(boolean halfTileBorder)

**Parameters:**
- `boolean` `halfTileBorder`

**Returns:** `boolean`

### public void checkLightingLater_AllPlayers_AllLevels()

**Returns:** `void`

### public void checkLightingLater_AllPlayers_OneLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void checkLightingLater_OnePlayer_AllLevels(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void checkLightingLater_OnePlayer_OneLevel(int playerIndex,
int level)

**Parameters:**
- `int` `playerIndex`
- `int` `level`

**Returns:** `void`

### public void addBloodSplat(float x,
float y,
float z,
int type)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `int` `type`

**Returns:** `void`

### public void AddCorpses(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public void AddBlood(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public static void removeFromCheckedVehicles(BaseVehicle v)

**Parameters:**
- `BaseVehicle` `v`

**Returns:** `void`

### public static void addFromCheckedVehicles(BaseVehicle v)

**Parameters:**
- `BaseVehicle` `v`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static boolean doSpawnedVehiclesInInvalidPosition(BaseVehicle v)

**Parameters:**
- `BaseVehicle` `v`

**Returns:** `boolean`

### public boolean RandomizeModel(BaseVehicle v,
Zone zone,
String name,
VehicleType type)

**Parameters:**
- `BaseVehicle` `v`
- `Zone` `zone`
- `String` `name`
- `VehicleType` `type`

**Returns:** `boolean`

### public void AddVehicles()

**Returns:** `void`

### public void addSurvivorInHorde(boolean forced)

**Parameters:**
- `boolean` `forced`

**Returns:** `void`

### public boolean canAddRandomCarCrash(Zone zone,
boolean force)

**Parameters:**
- `Zone` `zone`
- `boolean` `force`

**Returns:** `boolean`

### public void addRandomCarCrash(Zone zone,
boolean addToWorld)

**Parameters:**
- `Zone` `zone`
- `boolean` `addToWorld`

**Returns:** `void`

### public static boolean FileExists(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public void checkPhysicsLater(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void updatePhysicsForLevel(int z)

**Parameters:**
- `int` `z`

**Returns:** `void`

### public void setBlendingDoneFull(boolean flag)

**Parameters:**
- `boolean` `flag`

**Returns:** `void`

### public boolean isBlendingDoneFull()

**Returns:** `boolean`

### public void setBlendingDonePartial(boolean flag)

**Parameters:**
- `boolean` `flag`

**Returns:** `void`

### public boolean isBlendingDonePartial()

**Returns:** `boolean`

### public void setBlendingModified(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public boolean isBlendingDone(int i)

**Parameters:**
- `int` `i`

**Returns:** `boolean`

### public void setModifDepth(BlendDirection dir,
byte depth)

**Parameters:**
- `BlendDirection` `dir`
- `byte` `depth`

**Returns:** `void`

### public void setModifDepth(BlendDirection dir,
int depth)

**Parameters:**
- `BlendDirection` `dir`
- `int` `depth`

**Returns:** `void`

### public byte getModifDepth(BlendDirection dir)

**Parameters:**
- `BlendDirection` `dir`

**Returns:** `byte`

### public void setAttachmentsDoneFull(boolean attachmentsDoneFull)

**Parameters:**
- `boolean` `attachmentsDoneFull`

**Returns:** `void`

### public boolean isAttachmentsDoneFull()

**Returns:** `boolean`

### public void setAttachmentsState(int i,
boolean value)

**Parameters:**
- `int` `i`
- `boolean` `value`

**Returns:** `void`

### public boolean isAttachmentsDone(int i)

**Parameters:**
- `int` `i`

**Returns:** `boolean`

### public boolean[] getAttachmentsState()

**Returns:** `boolean[]`

### public void setAttachmentsPartial(SquareCoord coord)

**Parameters:**
- `SquareCoord` `coord`

**Returns:** `void`

### public SquareCoord getAttachmentsPartial(int i)

**Parameters:**
- `int` `i`

**Returns:** `SquareCoord`

### public boolean hasAttachmentsPartial(SquareCoord coord)

**Parameters:**
- `SquareCoord` `coord`

**Returns:** `boolean`

### public Integer attachmentsPartialSize()

**Returns:** `Integer`

### public EnumSet<ChunkGenerationStatus> isModded()

**Returns:** `EnumSet<ChunkGenerationStatus>`

### public void isModded(EnumSet<ChunkGenerationStatus> chunkGenerationStatus)

**Parameters:**
- `EnumSet<ChunkGenerationStatus>` `chunkGenerationStatus`

**Returns:** `void`

### public void isModded(ChunkGenerationStatus chunkGenerationStatus)

**Parameters:**
- `ChunkGenerationStatus` `chunkGenerationStatus`

**Returns:** `void`

### public void addModded(ChunkGenerationStatus chunkGenerationStatus)

**Parameters:**
- `ChunkGenerationStatus` `chunkGenerationStatus`

**Returns:** `void`

### public void rmModded(ChunkGenerationStatus chunkGenerationStatus)

**Parameters:**
- `ChunkGenerationStatus` `chunkGenerationStatus`

**Returns:** `void`

### public boolean hasEmptySquaresOnLevelZero()

**Returns:** `boolean`

### public boolean LoadChunk(int wx,
int wy,
ByteBuffer fromServer)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `ByteBuffer` `fromServer`

**Returns:** `boolean`

### public boolean LoadFromBuffer(int wx,
int wy,
ByteBuffer bb)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `ByteBuffer` `bb`

**Returns:** `boolean`

### public void loadInWorldStreamerThread()

**Returns:** `void`

### public void loadInMainThread()

**Returns:** `void`

### @Deprecated
public void recalcNeighboursNow()

> ⚠️ **Deprecated**

**Returns:** `void`

### public void updateBuildings()

**Returns:** `void`

### public static void updatePlayerInBullet()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void updateVehicleStory()

**Returns:** `void`

### public int squaresIndexOfLevel(int worldSquareZ)

**Parameters:**
- `int` `worldSquareZ`

**Returns:** `int`

### public IsoGridSquare[] getSquaresForLevel(int worldSquareZ)

**Parameters:**
- `int` `worldSquareZ`

**Returns:** `IsoGridSquare[]`

### public void doPathfind()

**Returns:** `void`

### public void ignorePathfind()

**Returns:** `void`

### public void setSquare(int x,
int y,
int z,
IsoGridSquare square)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoGridSquare` `square`

**Returns:** `void`

### public int getMinLevel()

**Returns:** `int`

### public int getMaxLevel()

**Returns:** `int`

### public boolean isValidLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `boolean`

### public void setMinMaxLevel(int minLevel,
int maxLevel)

**Parameters:**
- `int` `minLevel`
- `int` `maxLevel`

**Returns:** `void`

### public IsoChunkLevel getLevelData(int level)

**Parameters:**
- `int` `level`

**Returns:** `IsoChunkLevel`

### public IsoGridSquare getGridSquare(int chunkSquareX,
int chunkSquareY,
int worldSquareZ)

**Parameters:**
- `int` `chunkSquareX`
- `int` `chunkSquareY`
- `int` `worldSquareZ`

**Returns:** `IsoGridSquare`

### public IsoRoom getRoom(long roomID)

**Parameters:**
- `long` `roomID`

**Returns:** `IsoRoom`

### public void removeFromWorld()

**Returns:** `void`

### public void doReuseGridsquares()

**Returns:** `void`

### public void LoadFromDisk()
throws IOException

**Returns:** `void`

### public void doLoadGridsquare()

**Returns:** `void`

### public void setCache()

**Returns:** `void`

### public void setCacheIncludingNull()

**Returns:** `void`

### public void Save(boolean bPreventChunkReuse)
throws IOException

**Parameters:**
- `boolean` `bPreventChunkReuse`

**Returns:** `void`

### public static void SafeWrite(int wx,
int wy,
ByteBuffer bb)
throws IOException

**Parameters:**
- `int` `wx`
- `int` `wy`
- `ByteBuffer` `bb`

**Returns:** `void`

### public static ByteBuffer SafeRead(int wx,
int wy,
ByteBuffer bb)
throws IOException

**Parameters:**
- `int` `wx`
- `int` `wy`
- `ByteBuffer` `bb`

**Returns:** `ByteBuffer`

### public void SaveLoadedChunk(ClientChunkRequest.Chunk ccrc,
CRC32 crc32)
throws IOException

**Parameters:**
- `ClientChunkRequest.Chunk` `ccrc`
- `CRC32` `crc32`

**Returns:** `void`

### public static boolean IsDebugSave()

**Returns:** `boolean`

### public ByteBuffer Save(ByteBuffer bb,
CRC32 crc,
boolean bHotSave)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `CRC32` `crc`
- `boolean` `bHotSave`

**Returns:** `ByteBuffer`

### public boolean saveObjectState(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `boolean`

### public void loadObjectState(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void Blam(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public ErosionData.Chunk getErosionData()

**Returns:** `ErosionData.Chunk`

### public static int Fix2x(IsoGridSquare square,
int spriteID)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `spriteID`

**Returns:** `int`

### public static String Fix2x(String tileName)

**Parameters:**
- `String` `tileName`

**Returns:** `String`

### public void addGeneratorPos(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void removeGeneratorPos(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public boolean isGeneratorPoweringSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void checkForMissingGenerators()

**Returns:** `void`

### public void addObjectPoweredByGenerator(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void removeObjectPoweredByGenerator(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public boolean isNewChunk()

**Returns:** `boolean`

### public void addSpawnedRoom(long roomID)

**Parameters:**
- `long` `roomID`

**Returns:** `void`

### public boolean isSpawnedRoom(long roomID)

**Parameters:**
- `long` `roomID`

**Returns:** `boolean`

### public Zone getScavengeZone()

**Returns:** `Zone`

### public void resetForStore()

**Returns:** `void`

### public int getNumberOfWaterTiles()

**Returns:** `int`

### public void setRandomVehicleStoryToSpawnLater(VehicleStorySpawnData spawnData)

**Parameters:**
- `VehicleStorySpawnData` `spawnData`

**Returns:** `void`

### public boolean hasObjectAmbientEmitter(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public void addObjectAmbientEmitter(IsoObject object,
ObjectAmbientEmitters.PerObjectLogic logic)

**Parameters:**
- `IsoObject` `object`
- `ObjectAmbientEmitters.PerObjectLogic` `logic`

**Returns:** `void`

### public void removeObjectAmbientEmitter(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void assignLoadID()

**Returns:** `void`

### public short getLoadID()

**Returns:** `short`

### public boolean containsPoint(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public FBORenderLevels getRenderLevels(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `FBORenderLevels`

### public void invalidateRenderChunkLevel(int level,
long dirtyFlags)

**Parameters:**
- `int` `level`
- `long` `dirtyFlags`

**Returns:** `void`

### public void invalidateRenderChunkLevels(long dirtyFlags)

**Parameters:**
- `long` `dirtyFlags`

**Returns:** `void`

### public FBORenderCutaways.ChunkLevelsData getCutawayData()

**Returns:** `FBORenderCutaways.ChunkLevelsData`

### public FBORenderCutaways.ChunkLevelData getCutawayDataForLevel(int z)

**Parameters:**
- `int` `z`

**Returns:** `FBORenderCutaways.ChunkLevelData`

### public void invalidateVispolyChunkLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public VisibilityPolygon2.ChunkData getVispolyData()

**Returns:** `VisibilityPolygon2.ChunkData`

### public VisibilityPolygon2.ChunkLevelData getVispolyDataForLevel(int z)

**Parameters:**
- `int` `z`

**Returns:** `VisibilityPolygon2.ChunkLevelData`

### public boolean hasWaterSquare()

**Returns:** `boolean`

### public void checkPhysicsLaterForActiveRagdoll(IsoChunkLevel isoChunkLevel)

**Parameters:**
- `IsoChunkLevel` `isoChunkLevel`

**Returns:** `void`

### public boolean hasFence()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoChunk.html`*
