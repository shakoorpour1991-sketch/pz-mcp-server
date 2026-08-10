---
title: zombie.iso.IsoMetaGrid
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoMetaGrid

`public final class IsoMetaGrid extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoMetaGrid

## Fields

### public static final int ANY_Z

### public static ClipperOffset clipperOffset

### public static ByteBuffer clipperBuffer

### public static final ThreadLocal<IsoGameCharacter.Location> TL_Location

### public int minX

### public int minY

### public int maxX

### public int maxY

### public int minNonProceduralX

### public int minNonProceduralY

### public int maxNonProceduralX

### public int maxNonProceduralY

### public final ArrayList<Zone> zones

### public final ArrayList<BuildingDef> buildings

### public final ArrayList<VehicleZone> vehiclesZones

### public final ZoneHandler<AnimalZone> animalZoneHandler

### public final ArrayList<IsoGameCharacter> metaCharacters

## Constructors

### public IsoMetaGrid()

## Methods

### public IsoMetaCell getCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoMetaCell`

### public IsoMetaCell getCellOrCreate(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoMetaCell`

### public void setCell(int x,
int y,
IsoMetaCell cell)

**Parameters:**
- `int` `x`
- `int` `y`
- `IsoMetaCell` `cell`

**Returns:** `void`

### public boolean hasCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public int gridX()

**Returns:** `int`

### public int gridY()

**Returns:** `int`

### public void AddToMeta(IsoGameCharacter isoPlayer)

**Parameters:**
- `IsoGameCharacter` `isoPlayer`

**Returns:** `void`

### public void RemoveFromMeta(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public int getMinX()

**Returns:** `int`

### public int getMinY()

**Returns:** `int`

### public int getMaxX()

**Returns:** `int`

### public int getMaxY()

**Returns:** `int`

### public Zone getZoneAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `Zone`

### public ArrayList<Zone> getZonesAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ArrayList<Zone>`

### public ArrayList<Zone> getZonesAt(int x,
int y,
int z,
ArrayList<Zone> result)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `ArrayList<Zone>` `result`

**Returns:** `ArrayList<Zone>`

### public ArrayList<Zone> getZonesIntersecting(int x,
int y,
int z,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`

**Returns:** `ArrayList<Zone>`

### public ArrayList<Zone> getZonesIntersecting(int x,
int y,
int z,
int w,
int h,
ArrayList<Zone> result)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`
- `ArrayList<Zone>` `result`

**Returns:** `ArrayList<Zone>`

### public Zone getZoneWithBoundsAndType(int x,
int y,
int z,
int w,
int h,
String type)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`
- `String` `type`

**Returns:** `Zone`

### public VehicleZone getVehicleZoneAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `VehicleZone`

### public BuildingDef getBuildingAt(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `BuildingDef`

### public BuildingDef getBuildingAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `BuildingDef`

### public ArrayList<BuildingDef> getBuildings()

**Returns:** `ArrayList<BuildingDef>`

### public ArrayList<RemovedBuilding> getRemovedBuildings()

**Returns:** `ArrayList<RemovedBuilding>`

### public BuildingDef getAssociatedBuildingAt(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `BuildingDef`

### public BuildingDef getBuildingAtRelax(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `BuildingDef`

### public RoomDef getRoomAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `RoomDef`

### public RoomDef getEmptyOutsideAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `RoomDef`

### public RoomDef getRoomDefByID(long roomID)

**Parameters:**
- `long` `roomID`

**Returns:** `RoomDef`

### public IsoRoom getRoomByID(long roomID)

**Parameters:**
- `long` `roomID`

**Returns:** `IsoRoom`

### public void getBuildingsIntersecting(int x,
int y,
int w,
int h,
ArrayList<BuildingDef> result)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `ArrayList<BuildingDef>` `result`

**Returns:** `void`

### public void getRoomsIntersecting(int x,
int y,
int w,
int h,
ArrayList<RoomDef> roomDefs)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `ArrayList<RoomDef>` `roomDefs`

**Returns:** `void`

### public int countRoomsIntersecting(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `int`

### public int countNearbyBuildingsRooms(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `int`

### public Zone registerZone(String name,
String type,
int x,
int y,
int z,
int width,
int height)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`

**Returns:** `Zone`

### public Zone registerZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
ZoneGeometryType geometryType,
gnu.trove.list.array.TIntArrayList points,
int polylineWidth)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `ZoneGeometryType` `geometryType`
- `gnu.trove.list.array.TIntArrayList` `points`
- `int` `polylineWidth`

**Returns:** `Zone`

### public Zone registerZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `Zone`

### public Zone registerGeometryZone(String name,
String type,
int z,
String geometry,
se.krka.kahlua.vm.KahluaTable pointsTable,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `z`
- `String` `geometry`
- `se.krka.kahlua.vm.KahluaTable` `pointsTable`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### @Deprecated
public Zone registerZoneNoOverlap(String name,
String type,
int x,
int y,
int z,
int width,
int height)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`

**Returns:** `Zone`

### public void addZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public void removeZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public void removeZonesForLotDirectory(String lotDir)

**Parameters:**
- `String` `lotDir`

**Returns:** `void`

### public void processZones()

**Returns:** `void`

### public Zone registerVehiclesZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### public Zone registerWorldGenZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### public void checkVehiclesZones()

**Returns:** `void`

### public Zone registerAnimalZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### public Zone registerAnimalZone(AnimalZone animalZone)

**Parameters:**
- `AnimalZone` `animalZone`

**Returns:** `Zone`

### public Zone registerAnimalZone(AnimalZone animalZone,
boolean bHotSave)

**Parameters:**
- `AnimalZone` `animalZone`
- `boolean` `bHotSave`

**Returns:** `Zone`

### public Zone registerMannequinZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### public void registerRoomTone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `void`

### public boolean isZoneAbove(Zone zone1,
Zone zone2,
int x,
int y,
int z)

**Parameters:**
- `Zone` `zone1`
- `Zone` `zone2`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void savePart(ByteBuffer output,
int part,
boolean fromServer)

**Parameters:**
- `ByteBuffer` `output`
- `int` `part`
- `boolean` `fromServer`

**Returns:** `void`

### public void load()

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public boolean wasLoaded()

**Returns:** `boolean`

### public IsoMetaCell getCellData(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoMetaCell`

### public MetaCellPresence hasCellData(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `MetaCellPresence`

### public void setCellData(int x,
int y,
IsoMetaCell cell)

**Parameters:**
- `int` `x`
- `int` `y`
- `IsoMetaCell` `cell`

**Returns:** `void`

### public IsoMetaCell getCellDataAbs(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoMetaCell`

### public IsoMetaCell getCurrentCellData()

**Returns:** `IsoMetaCell`

### public IsoMetaCell getMetaGridFromTile(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `IsoMetaCell`

### public IsoMetaChunk getCurrentChunkData()

**Returns:** `IsoMetaChunk`

### public IsoMetaChunk getChunkData(int chunkX,
int chunkY)

**Parameters:**
- `int` `chunkX`
- `int` `chunkY`

**Returns:** `IsoMetaChunk`

### public IsoMetaChunk getChunkDataFromTile(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoMetaChunk`

### public boolean isValidSquare(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean isValidChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public void Create()

**Returns:** `void`

### public void CreateStep1()

**Returns:** `void`

### public void CreateStep2()

**Returns:** `void`

### public boolean isChunkLoaded(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public void Dispose()

**Returns:** `void`

### public Vector2 getRandomIndoorCoord()

**Returns:** `Vector2`

### public RoomDef getRandomRoomBetweenRange(float x,
float y,
float min,
float max)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `min`
- `float` `max`

**Returns:** `RoomDef`

### public RoomDef getRandomRoomNotInRange(float x,
float y,
int range)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `range`

**Returns:** `RoomDef`

### public void save()

**Returns:** `void`

### public void addCellToSave(IsoMetaCell cell)

**Parameters:**
- `IsoMetaCell` `cell`

**Returns:** `void`

### public void saveToBufferMap(SaveBufferMap bufferMap)

**Parameters:**
- `SaveBufferMap` `bufferMap`

**Returns:** `void`

### public void saveToSaveBufferMap(SaveBufferMap bufferMap,
String fileName,
Consumer<ByteBuffer> saveMethod)

**Parameters:**
- `SaveBufferMap` `bufferMap`
- `String` `fileName`
- `Consumer<ByteBuffer>` `saveMethod`

**Returns:** `void`

### public void saveCellsToSaveBufferMap(SaveBufferMap bufferMap,
String path,
String filter,
BiConsumer<IsoMetaCell, ByteBuffer> saveMethod)

**Parameters:**
- `SaveBufferMap` `bufferMap`
- `String` `path`
- `String` `filter`
- `BiConsumer<IsoMetaCell, ByteBuffer>` `saveMethod`

**Returns:** `void`

### public void load(String inFilePath,
BiConsumer<ByteBuffer, Integer> loadMethod)

**Parameters:**
- `String` `inFilePath`
- `BiConsumer<ByteBuffer, Integer>` `loadMethod`

**Returns:** `void`

### public void loadCells(String path,
String filter,
QuadConsumer<IsoMetaCell, IsoMetaGrid, ByteBuffer, Integer> loadMethod)

**Parameters:**
- `String` `path`
- `String` `filter`
- `QuadConsumer<IsoMetaCell, IsoMetaGrid, ByteBuffer, Integer>` `loadMethod`

**Returns:** `void`

### public void loadZone(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void loadAnimalZones(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void saveZone(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void saveAnimalZones(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public ArrayList<String> getLotDirectories()

**Returns:** `ArrayList<String>`

### public void addRoomsToAdjacentCells(BuildingDef buildingDef)

**Parameters:**
- `BuildingDef` `buildingDef`

**Returns:** `void`

### public void addRoomsToAdjacentCells(BuildingDef buildingDef,
ArrayList<RoomDef> roomDefs)

**Parameters:**
- `BuildingDef` `buildingDef`
- `ArrayList<RoomDef>` `roomDefs`

**Returns:** `void`

### public void removeRoomsFromAdjacentCells(BuildingDef buildingDef)

**Parameters:**
- `BuildingDef` `buildingDef`

**Returns:** `void`

### public void removeRoomsFromAdjacentCells(ArrayList<RoomDef> rooms,
int cellX1,
int cellY1,
int cellX2,
int cellY2,
int userDefined)

**Parameters:**
- `ArrayList<RoomDef>` `rooms`
- `int` `cellX1`
- `int` `cellY1`
- `int` `cellX2`
- `int` `cellY2`
- `int` `userDefined`

**Returns:** `void`

### public List<Zone> getZones()

**Returns:** `List<Zone>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoMetaGrid.html`*
