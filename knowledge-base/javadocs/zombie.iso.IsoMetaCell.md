---
title: zombie.iso.IsoMetaCell
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoMetaCell

`public final class IsoMetaCell extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoMetaCell

## Fields

### public final ArrayList<VehicleZone> vehicleZones

### public LotHeader info

### public final ArrayList<Trigger> triggers

### public final ArrayList<IsoMannequin.MannequinZone> mannequinZones

### public ArrayList<WorldGenZone> worldGenZones

### public final ArrayList<RoomTone> roomTones

### public final HashMap<Long,RoomDef> rooms

### public final gnu.trove.map.hash.TLongObjectHashMap<RoomDef> roomByMetaId

### public final ArrayList<RoomDef> roomList

### public final ArrayList<BuildingDef> buildings

### public final gnu.trove.map.hash.TLongObjectHashMap<BuildingDef> buildingByMetaId

### public final HashMap<Long,IsoRoom> isoRooms

### public final HashMap<Long, IsoBuilding> isoBuildings

## Constructors

### public IsoMetaCell(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

## Methods

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public void addTrigger(BuildingDef def,
int triggerRange,
int zombieExclusionRange,
String type)

**Parameters:**
- `BuildingDef` `def`
- `int` `triggerRange`
- `int` `zombieExclusionRange`
- `String` `type`

**Returns:** `void`

### public void checkTriggers()

**Returns:** `void`

### public IsoMetaChunk getChunk(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoMetaChunk`

### public IsoMetaChunk getChunk(int i)

**Parameters:**
- `int` `i`

**Returns:** `IsoMetaChunk`

### public boolean hasChunk(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean hasChunk(int i)

**Parameters:**
- `int` `i`

**Returns:** `boolean`

### public void clearChunk(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void addZone(Zone zone,
int cellX,
int cellY)

**Parameters:**
- `Zone` `zone`
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void removeZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public void addRoom(RoomDef room,
int cellX,
int cellY)

**Parameters:**
- `RoomDef` `room`
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void addRooms(ArrayList<RoomDef> rooms,
int cellX,
int cellY)

**Parameters:**
- `ArrayList<RoomDef>` `rooms`
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void removeRoom(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

### public void removeRooms(ArrayList<RoomDef> rooms)

**Parameters:**
- `ArrayList<RoomDef>` `rooms`

**Returns:** `void`

### public void removeRooms(ArrayList<RoomDef> rooms,
int userDefined)

**Parameters:**
- `ArrayList<RoomDef>` `rooms`
- `int` `userDefined`

**Returns:** `void`

### public void getZonesUnique(Set<Zone> result)

**Parameters:**
- `Set<Zone>` `result`

**Returns:** `void`

### public void getZonesIntersecting(int x,
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

**Returns:** `void`

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
ArrayList<RoomDef> result)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `ArrayList<RoomDef>` `result`

**Returns:** `void`

### public void checkAnimalZonesGenerated(int chunkX,
int chunkY)

**Parameters:**
- `int` `chunkX`
- `int` `chunkY`

**Returns:** `void`

### public void Dispose()

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(IsoMetaGrid grid,
ByteBuffer input,
int worldVersion)

**Parameters:**
- `IsoMetaGrid` `grid`
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public int getAnimalZonesSize()

**Returns:** `int`

### public AnimalZone getAnimalZone(int index)

**Parameters:**
- `int` `index`

**Returns:** `AnimalZone`

### public void addAnimalZone(AnimalZone animalZone)

**Parameters:**
- `AnimalZone` `animalZone`

**Returns:** `void`

### public void clearAnimalZones()

**Returns:** `void`

### public int getBuildingCount()

**Returns:** `int`

### public int getBuildingCount(boolean bExcludeUserDefined)

**Parameters:**
- `boolean` `bExcludeUserDefined`

**Returns:** `int`

### public int getRoomCount()

**Returns:** `int`

### public int getRoomCount(boolean bExcludeUserDefined)

**Parameters:**
- `boolean` `bExcludeUserDefined`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoMetaCell.html`*
