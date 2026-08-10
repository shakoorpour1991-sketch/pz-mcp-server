---
title: zombie.iso.IsoCell
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoCell

`public final class IsoCell extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoCell

## Description

Loaded area 'reality bubble' around the player(s). Don't confuse this with map cells - the name is a relic from when it did actually represent these. Only one instance should ever exist. Instantiating this class during gameplay will likely immediately crash.

## Fields

### public static final int CELL_SIZE_IN_CHUNKS

### public static final int CELL_SIZE_IN_SQUARES

### public static int maxHeight

### public static Shader floorRenderShader

### public static Shader wallRenderShader

### public ArrayList<IsoGridSquare> trees

### public int minHeight

### public final IsoChunkMap[] chunkMap

### public final ArrayList<IsoBuilding> buildingList

### public final Set<IsoWorldInventoryObject> processWorldItemsRemove

### public static final boolean ENABLE_SQUARE_CACHE

### public IntGrid dangerScore

### public final ArrayList<IsoRoomLight> roomLights

### public final Set<BaseVehicle> addVehicles

### public final Set<BaseVehicle> vehicles

### public static final int ISOANGLEFACTOR

### public static final int ZOMBIESCANBUDGET

### public static final float NEARESTZOMBIEDISTSQRMAX

### public int zombieScanCursor

### public final IsoZombie[] nearestVisibleZombie

### public final float[] nearestVisibleZombieDistSqr

### public static ArrayList<IsoGridSquare> gridStack

### public static final int RTF_SolidFloor

### public static final int RTF_VegetationCorpses

### public static final int RTF_MinusFloorCharacters

### public static final int RTF_ShadedFloor

### public static final int RTF_Shadows

### public static final ArrayList<IsoGridSquare> ShadowSquares

### public static final ArrayList<IsoGridSquare> MinusFloorCharacters

### public static final ArrayList<IsoGridSquare> SolidFloor

### public static final ArrayList<IsoGridSquare> ShadedFloor

### public static final ArrayList<IsoGridSquare> VegetationCorpses

### public static final IsoCell.PerPlayerRender[] perPlayerRender

### public int deferredCharacterTick

### public boolean recalcFloors

### public int recalcShading

### public int lastMinX

### public int lastMinY

### public int lightUpdateCount

### public boolean rendering

### public final boolean[] hideFloors

### public final int[] unhideFloorsCounter

### public boolean occludedByOrphanStructureFlag

### public long playerPeekedRoomId

### public final ArrayList<ArrayList<IsoBuilding>> playerOccluderBuildings

### public final IsoBuilding[][] playerOccluderBuildingsArr

### public final long[] playerWindowPeekingRoomId

### public final boolean[] playerHidesOrphanStructures

### public final boolean[] playerCutawaysDirty

### public ArrayList<ArrayList<Long>> tempPlayerCutawayRoomIds

### public final IsoGridSquare[] lastPlayerSquare

### public final boolean[] lastPlayerSquareHalf

### public final IsoDirections[] lastPlayerDir

### public final Vector2[] lastPlayerAngle

### public int hidesOrphanStructuresAbove

### public final ArrayList<ArrayList<IsoBuilding>> zombieOccluderBuildings

### public final IsoBuilding[][] zombieOccluderBuildingsArr

### public final IsoGridSquare[] lastZombieSquare

### public final boolean[] lastZombieSquareHalf

### public final ArrayList<ArrayList<IsoBuilding>> otherOccluderBuildings

### public final IsoBuilding[][] otherOccluderBuildingsArr

### public final ArrayList<IsoGridSquare> gridSquaresTempLeft

### public final ArrayList<IsoGridSquare> gridSquaresTempRight

### public int minX

### public int maxX

### public int minY

### public int maxY

### public int minZ

### public int maxZ

## Constructors

### public IsoCell(int width,
int height)

**Parameters:**
- `int` `width`
- `int` `height`

## Methods

### public static int getMaxHeight()

**Returns:** `int`

### public static int getCellSizeInChunks()

**Returns:** `int`

### public static int getCellSizeInSquares()

**Returns:** `int`

### public LotHeader getCurrentLotHeader()

**Returns:** `LotHeader`

### public IsoChunkMap getChunkMap(int pl)

**Parameters:**
- `int` `pl`

**Returns:** `IsoChunkMap`

### public IsoGridSquare getFreeTile(RoomDef def)

**Parameters:**
- `RoomDef` `def`

**Returns:** `IsoGridSquare`

### public static Stack<BuildingScore> getBuildings()

**Returns:** `Stack<BuildingScore>`

### public static void setBuildings(Stack<BuildingScore> scores)

**Parameters:**
- `Stack<BuildingScore>` `scores`

**Returns:** `void`

### public IsoZombie getNearestVisibleZombie(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `IsoZombie`

### public IsoChunk getChunkForGridSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoChunk`

### public IsoChunk getChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `IsoChunk`

### public void CalculateVertColoursForTile(IsoGridSquare sqThis,
int x,
int y,
int zz,
int playerIndex)

**Parameters:**
- `IsoGridSquare` `sqThis`
- `int` `x`
- `int` `y`
- `int` `zz`
- `int` `playerIndex`

**Returns:** `void`

### public void drawStencilMask()

**Returns:** `void`

### public boolean isInStencil(float sx,
float sy)

**Parameters:**
- `float` `sx`
- `float` `sy`

**Returns:** `boolean`

### public List<IsoCell.StencilArea> getStencilAreas()

**Returns:** `List<IsoCell.StencilArea>`

### public void RenderTiles(int maxHeight)

**Parameters:**
- `int` `maxHeight`

**Returns:** `void`

### public void initTileShaders()

**Returns:** `void`

### public IsoCell.PerPlayerRender getPerPlayerRenderAt(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `IsoCell.PerPlayerRender`

### public void flattenAnyFoliage(IsoCell.PerPlayerRender perPlayerRender,
int playerIndex)

**Parameters:**
- `IsoCell.PerPlayerRender` `perPlayerRender`
- `int` `playerIndex`

**Returns:** `void`

### public void renderShadows()

**Returns:** `void`

### public void renderDebugPhysics(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void renderDebugLighting(IsoCell.PerPlayerRender perPlayerRender,
int maxHeight)

**Parameters:**
- `IsoCell.PerPlayerRender` `perPlayerRender`
- `int` `maxHeight`

**Returns:** `void`

### public void RenderFloorShading(int zza)

**Parameters:**
- `int` `zza`

**Returns:** `void`

### public boolean IsPlayerWindowPeeking(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public boolean CanBuildingSquareOccludePlayer(IsoGridSquare square,
int playerIndex)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `playerIndex`

**Returns:** `boolean`

### public long GetEffectivePlayerRoomId()

**Returns:** `long`

### public boolean SetCutawayRoomsForPlayer()

**Returns:** `boolean`

### public boolean IsCutawaySquare(IsoGridSquare square,
long currentTimeMillis)

**Parameters:**
- `IsoGridSquare` `square`
- `long` `currentTimeMillis`

**Returns:** `boolean`

### public boolean DoesSquareHaveValidCutaways(IsoGridSquare playerSquare,
IsoGridSquare square,
int playerIndex,
long currentTimeMillis)

**Parameters:**
- `IsoGridSquare` `playerSquare`
- `IsoGridSquare` `square`
- `int` `playerIndex`
- `long` `currentTimeMillis`

**Returns:** `boolean`

### public boolean IsCollapsibleBuildingSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean collapsibleBuildingSquareAlgorithm(BuildingDef def,
IsoGridSquare sq,
IsoGridSquare pl)

**Parameters:**
- `BuildingDef` `def`
- `IsoGridSquare` `sq`
- `IsoGridSquare` `pl`

**Returns:** `boolean`

### public void setSnowTarget(int target)

**Parameters:**
- `int` `target`

**Returns:** `void`

### public int getSnowTarget()

**Returns:** `int`

### public boolean gridSquareIsSnow(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void RenderSnow(int zza)

**Parameters:**
- `int` `zza`

**Returns:** `void`

### public IsoBuilding getClosestBuildingExcept(IsoGameCharacter chr,
IsoRoom except)

**Parameters:**
- `IsoGameCharacter` `chr`
- `IsoRoom` `except`

**Returns:** `IsoBuilding`

### public int getDangerScore(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public void addToProcessIsoObject(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void addToProcessIsoObjectRemove(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void addToStaticUpdaterObjectList(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void addToProcessItems(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void addToProcessItems(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items`

**Returns:** `void`

### public void addToProcessItemsRemove(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void addToProcessItemsRemove(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items`

**Returns:** `void`

### public void addToProcessWorldItems(IsoWorldInventoryObject worldItem)

**Parameters:**
- `IsoWorldInventoryObject` `worldItem`

**Returns:** `void`

### public void addToProcessWorldItemsRemove(IsoWorldInventoryObject worldItem)

**Parameters:**
- `IsoWorldInventoryObject` `worldItem`

**Returns:** `void`

### public IsoSurvivor getNetworkPlayer(int remoteId)

**Parameters:**
- `int` `remoteId`

**Returns:** `IsoSurvivor`

### public IsoGridSquare ConnectNewSquare(IsoGridSquare newSquare,
boolean bDoSurrounds)

**Parameters:**
- `IsoGridSquare` `newSquare`
- `boolean` `bDoSurrounds`

**Returns:** `IsoGridSquare`

### public void PlaceLot(String filename,
int sx,
int sy,
int sz,
boolean bClearExisting)

**Parameters:**
- `String` `filename`
- `int` `sx`
- `int` `sy`
- `int` `sz`
- `boolean` `bClearExisting`

**Returns:** `void`

### public void PlaceLot(IsoLot lot,
int sx,
int sy,
int sz,
boolean bClearExisting)

**Parameters:**
- `IsoLot` `lot`
- `int` `sx`
- `int` `sy`
- `int` `sz`
- `boolean` `bClearExisting`

**Returns:** `void`

### public int PlaceLot(IsoLot lot,
int sx,
int sy,
int sz,
IsoChunk ch,
int wx,
int wy,
boolean[] bDoneSquares)

**Parameters:**
- `IsoLot` `lot`
- `int` `sx`
- `int` `sy`
- `int` `sz`
- `IsoChunk` `ch`
- `int` `wx`
- `int` `wy`
- `boolean[]` `bDoneSquares`

**Returns:** `int`

### public void setDrag(se.krka.kahlua.vm.KahluaTable draggingItem,
int player)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `draggingItem`
- `int` `player`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getDrag(int player)

**Parameters:**
- `int` `player`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean DoBuilding(int player,
boolean bRender)

**Parameters:**
- `int` `player`
- `boolean` `bRender`

**Returns:** `boolean`

### public float DistanceFromSupport(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `float`

### public ArrayList<IsoBuilding> getBuildingList()

> ⚠️ **Deprecated**

**Returns:** `ArrayList<IsoBuilding>`

### public ArrayList<IsoWindow> getWindowList()

**Returns:** `ArrayList<IsoWindow>`

### public void addToWindowList(IsoWindow window)

**Parameters:**
- `IsoWindow` `window`

**Returns:** `void`

### public void removeFromWindowList(IsoWindow window)

**Parameters:**
- `IsoWindow` `window`

**Returns:** `void`

### public Set<IsoMovingObject> getObjectList()

**Returns:** `Set<IsoMovingObject>`

### public List<IsoMovingObject> getObjectListForLua()

**Returns:** `List<IsoMovingObject>`

### public IsoRoom getRoom(int id)

**Parameters:**
- `int` `id`

**Returns:** `IsoRoom`

### public ArrayList<IsoPushableObject> getPushableObjectList()

**Returns:** `ArrayList<IsoPushableObject>`

### public HashMap<Integer, BuildingScore> getBuildingScores()

**Returns:** `HashMap<Integer, BuildingScore>`

### public ArrayList<IsoRoom> getRoomList()

**Returns:** `ArrayList<IsoRoom>`

### public ArrayList<IsoObject> getStaticUpdaterObjectList()

**Returns:** `ArrayList<IsoObject>`

### public ArrayList<IsoZombie> getZombieList()

List of every zombie currently in the world.

**Returns:** `ArrayList<IsoZombie>`

### public ArrayList<IsoGameCharacter> getRemoteSurvivorList()

> ⚠️ **Deprecated**

**Returns:** `ArrayList<IsoGameCharacter>`

### public Set<IsoMovingObject> getRemoveList()

**Returns:** `Set<IsoMovingObject>`

### public Set<IsoMovingObject> getAddList()

**Returns:** `Set<IsoMovingObject>`

### public void addMovingObject(IsoMovingObject o)

**Parameters:**
- `IsoMovingObject` `o`

**Returns:** `void`

### public ArrayList<InventoryItem> getProcessItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<IsoWorldInventoryObject> getProcessWorldItems()

**Returns:** `ArrayList<IsoWorldInventoryObject>`

### public ArrayList<IsoObject> getProcessIsoObjects()

**Returns:** `ArrayList<IsoObject>`

### public Set<InventoryItem> getProcessItemsRemove()

**Returns:** `Set<InventoryItem>`

### public Set<BaseVehicle> getVehicles()

**Returns:** `Set<BaseVehicle>`

### public int getHeight()

**Returns:** `int`

### public void setHeight(int height)

**Parameters:**
- `int` `height` — the height to set

**Returns:** `void`

### public int getWidth()

**Returns:** `int`

### public void setWidth(int width)

**Parameters:**
- `int` `width` — the width to set

**Returns:** `void`

### public int getWorldX()

**Returns:** `int`

### public void setWorldX(int worldX)

**Parameters:**
- `int` `worldX` — the worldX to set

**Returns:** `void`

### public int getWorldY()

**Returns:** `int`

### public void setWorldY(int worldY)

**Parameters:**
- `int` `worldY` — the worldY to set

**Returns:** `void`

### public boolean isSafeToAdd()

**Returns:** `boolean`

### public void setSafeToAdd(boolean safeToAdd)

**Parameters:**
- `boolean` `safeToAdd` — the safeToAdd to set

**Returns:** `void`

### public Stack<IsoLightSource> getLamppostPositions()

**Returns:** `Stack<IsoLightSource>`

### public IsoLightSource getLightSourceAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoLightSource`

### public void addLamppost(IsoLightSource light)

**Parameters:**
- `IsoLightSource` `light`

**Returns:** `void`

### public IsoLightSource addLamppost(int x,
int y,
int z,
float r,
float g,
float b,
int rad)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `rad`

**Returns:** `IsoLightSource`

### public void removeLamppost(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void removeLamppost(IsoLightSource light)

**Parameters:**
- `IsoLightSource` `light`

**Returns:** `void`

### public int getCurrentLightX()

**Returns:** `int`

### public void setCurrentLightX(int currentLX)

**Parameters:**
- `int` `currentLX` — the currentLX to set

**Returns:** `void`

### public int getCurrentLightY()

**Returns:** `int`

### public void setCurrentLightY(int currentLY)

**Parameters:**
- `int` `currentLY` — the currentLY to set

**Returns:** `void`

### public int getCurrentLightZ()

**Returns:** `int`

### public void setCurrentLightZ(int currentLZ)

**Parameters:**
- `int` `currentLZ` — the currentLZ to set

**Returns:** `void`

### public int getMinX()

**Returns:** `int`

### public void setMinX(int minX)

**Parameters:**
- `int` `minX` — the minX to set

**Returns:** `void`

### public int getMaxX()

**Returns:** `int`

### public void setMaxX(int maxX)

**Parameters:**
- `int` `maxX` — the maxX to set

**Returns:** `void`

### public int getMinY()

**Returns:** `int`

### public void setMinY(int minY)

**Parameters:**
- `int` `minY` — the minY to set

**Returns:** `void`

### public int getMaxY()

**Returns:** `int`

### public void setMaxY(int maxY)

**Parameters:**
- `int` `maxY` — the maxY to set

**Returns:** `void`

### public int getMinZ()

**Returns:** `int`

### public void setMinZ(int minZ)

**Parameters:**
- `int` `minZ` — the minZ to set

**Returns:** `void`

### public int getMaxZ()

**Returns:** `int`

### public void setMaxZ(int maxZ)

**Parameters:**
- `int` `maxZ` — the maxZ to set

**Returns:** `void`

### public OnceEvery getDangerUpdate()

**Returns:** `OnceEvery`

### public void setDangerUpdate(OnceEvery dangerUpdate)

**Parameters:**
- `OnceEvery` `dangerUpdate` — the dangerUpdate to set

**Returns:** `void`

### public Thread getLightInfoUpdate()

**Returns:** `Thread`

### public void setLightInfoUpdate(Thread lightInfoUpdate)

**Parameters:**
- `Thread` `lightInfoUpdate` — the LightInfoUpdate to set

**Returns:** `void`

### public ArrayList<IsoSurvivor> getSurvivorList()

**Returns:** `ArrayList<IsoSurvivor>`

### public static int getRComponent(int col)

**Parameters:**
- `int` `col`

**Returns:** `int`

### public static int getGComponent(int col)

**Parameters:**
- `int` `col`

**Returns:** `int`

### public static int getBComponent(int col)

**Parameters:**
- `int` `col`

**Returns:** `int`

### public static int toIntColor(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `int`

### public IsoGridSquare getRandomOutdoorTile()

**Returns:** `IsoGridSquare`

### public Stack<BuildingScore> getBestBuildings(IsoCell.BuildingSearchCriteria criteria,
int count)

**Parameters:**
- `IsoCell.BuildingSearchCriteria` `criteria`
- `int` `count`

**Returns:** `Stack<BuildingScore>`

### public boolean blocked(Mover mover,
int x,
int y,
int z,
int lx,
int ly,
int lz)

**Parameters:**
- `Mover` `mover`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `lx`
- `int` `ly`
- `int` `lz`

**Returns:** `boolean`

### public void Dispose()

**Returns:** `void`

### public IsoGridSquare getGridSquare(double x,
double y,
double z)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `z`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getOrCreateGridSquare(double x,
double y,
double z)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `z`

**Returns:** `IsoGridSquare`

### public void setCacheGridSquare(int x,
int y,
int z,
IsoGridSquare square)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoGridSquare` `square`

**Returns:** `void`

### public void setCacheChunk(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void setCacheChunk(IsoChunk chunk,
int playerIndex)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `playerIndex`

**Returns:** `void`

### public void clearCacheGridSquare(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void setCacheGridSquareLocal(int x,
int y,
int z,
IsoGridSquare square,
int playerIndex)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoGridSquare` `square`
- `int` `playerIndex`

**Returns:** `void`

### public IsoGridSquare getGridSquare(Double x,
Double y,
Double z)

**Parameters:**
- `Double` `x`
- `Double` `y`
- `Double` `z`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getGridSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGridSquare`

### public void EnsureSurroundNotNull(int xx,
int yy,
int zz)

**Parameters:**
- `int` `xx`
- `int` `yy`
- `int` `zz`

**Returns:** `void`

### public void DeleteAllMovingObjects()

**Returns:** `void`

### public int getMaxFloors()

**Returns:** `int`

### public se.krka.kahlua.vm.KahluaTable getLuaObjectList()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public int getHeightInTiles()

**Returns:** `int`

### public int getWidthInTiles()

**Returns:** `int`

### public boolean isNull(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void Remove(IsoMovingObject obj)

**Parameters:**
- `IsoMovingObject` `obj`

**Returns:** `void`

### public static IsoCell getInstance()

**Returns:** `IsoCell`

### public void render()

**Returns:** `void`

### public void invalidatePeekedRoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public IsoWeatherFX getWeatherFX()

**Returns:** `IsoWeatherFX`

### public void renderRain()

**Returns:** `void`

### public void setRainAlpha(int alpha)

**Parameters:**
- `int` `alpha`

**Returns:** `void`

### public void setRainIntensity(int intensity)

**Parameters:**
- `int` `intensity`

**Returns:** `void`

### public int getRainIntensity()

**Returns:** `int`

### public void setRainSpeed(int speed)

**Parameters:**
- `int` `speed`

**Returns:** `void`

### public void reloadRainTextures()

**Returns:** `void`

### public void GetBuildingsInFrontOfCharacter(ArrayList<IsoBuilding> buildings,
IsoGridSquare square,
boolean bRightOfSquare)

**Parameters:**
- `ArrayList<IsoBuilding>` `buildings`
- `IsoGridSquare` `square`
- `boolean` `bRightOfSquare`

**Returns:** `void`

### public ArrayList<IsoBuilding> GetBuildingsInFrontOfMustSeeSquare(IsoGridSquare square,
IsoGridOcclusionData.OcclusionFilter filter)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoGridOcclusionData.OcclusionFilter` `filter`

**Returns:** `ArrayList<IsoBuilding>`

### public IsoBuilding GetPeekedInBuilding(IsoGridSquare square,
IsoDirections lookDir)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoDirections` `lookDir`

**Returns:** `IsoBuilding`

### public void GetSquaresAroundPlayerSquare(IsoPlayer player,
IsoGridSquare square,
ArrayList<IsoGridSquare> outGridSquaresToLeft,
ArrayList<IsoGridSquare> outGridSquaresToRight)

**Parameters:**
- `IsoPlayer` `player`
- `IsoGridSquare` `square`
- `ArrayList<IsoGridSquare>` `outGridSquaresToLeft`
- `ArrayList<IsoGridSquare>` `outGridSquaresToRight`

**Returns:** `void`

### public boolean IsBehindStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public static IsoDirections FromMouseTile()

**Returns:** `IsoDirections`

### public void update()

**Returns:** `void`

### public IsoGridSquare getRandomFreeTileInRoom()

**Returns:** `IsoGridSquare`

### public void roomSpotted(IsoRoom room)

**Parameters:**
- `IsoRoom` `room`

**Returns:** `void`

### public void ProcessSpottedRooms()

**Returns:** `void`

### public IsoObject addTileObject(IsoGridSquare sq,
String spriteName)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `spriteName`

**Returns:** `IsoObject`

### public void save(DataOutputStream output,
boolean bDoChars)
throws IOException

**Parameters:**
- `DataOutputStream` `output`
- `boolean` `bDoChars`

**Returns:** `void`

### public boolean LoadPlayer(int worldVersion)
throws FileNotFoundException,
IOException

**Parameters:**
- `int` `worldVersion`

**Returns:** `boolean`

### public IsoGridSquare getRelativeGridSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGridSquare`

### public IsoGridSquare createNewGridSquare(int x,
int y,
int z,
boolean recalcAll)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `recalcAll`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getGridSquareDirect(int x,
int y,
int z,
int playerIndex)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `playerIndex`

**Returns:** `IsoGridSquare`

### public boolean isInChunkMap(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public ArrayList<IsoObject> getProcessIsoObjectRemove()

**Returns:** `ArrayList<IsoObject>`

### public void checkHaveRoof(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public IsoZombie getFakeZombieForHit()

**Returns:** `IsoZombie`

### public void addHeatSource(IsoHeatSource heatSource)

**Parameters:**
- `IsoHeatSource` `heatSource`

**Returns:** `void`

### public void removeHeatSource(IsoHeatSource heatSource)

**Parameters:**
- `IsoHeatSource` `heatSource`

**Returns:** `void`

### public void updateHeatSources()

**Returns:** `void`

### public int getHeatSourceTemperature(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `int`

### public float getHeatSourceHighestTemperature(float surroundingAirTemperature,
int x,
int y,
int z)

**Parameters:**
- `float` `surroundingAirTemperature`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `float`

### public void putInVehicle(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### @Deprecated
public void resumeVehicleSounds(IsoGameCharacter chr)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void AddUniqueToBuildingList(ArrayList<IsoBuilding> buildings,
IsoBuilding inBuilding)

**Parameters:**
- `ArrayList<IsoBuilding>` `buildings`
- `IsoBuilding` `inBuilding`

**Returns:** `void`

### public IsoSpriteManager getSpriteManager()

**Returns:** `IsoSpriteManager`

### public List<IsoAnimal> getAnimals()

**Returns:** `List<IsoAnimal>`

### public static boolean isBasementWallAdjacentToTheVoid_North(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public static boolean isBasementWallAdjacentToTheVoid_West(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoCell.html`*
