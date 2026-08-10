---
title: zombie.iso.areas.IsoRoom
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas
---

# zombie.iso.areas.IsoRoom

`public final class IsoRoom extends Object`

**Kind:** class · **Package:** zombie.iso.areas

## Inheritance
- java.lang.Object
- zombie.iso.areas.IsoRoom

## Fields

### public final Vector<IsoGridSquare> beds

### public Rectangle bounds

### public IsoBuilding building

### public final ArrayList<ItemContainer> containers

### public final ArrayList<IsoWindow> windows

### public final Vector<IsoRoomExit> exits

### public int layer

### public String roomDef

### public final Vector<IsoGridSquare> tileList

### public int transparentWalls

### public final ArrayList<IsoLightSwitch> lightSwitches

### public final ArrayList<IsoRoomLight> roomLights

### public final ArrayList<IsoObject> waterSources

### public static final int MAXIMUM_DAYS

### public int seen

### public int visited

### public RoomDef def

### public final ArrayList<RoomDef.RoomRect> rects

### public final ArrayList<IsoGridSquare> squares

## Constructors

### public IsoRoom()

## Methods

### public IsoBuilding getBuilding()

**Returns:** `IsoBuilding`

### public String getName()

**Returns:** `String`

### public IsoBuilding CreateBuilding(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

**Returns:** `IsoBuilding`

### public boolean isInside(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public IsoGridSquare getFreeTile()

**Returns:** `IsoGridSquare`

### public ArrayList<IsoObject> getWaterSources()

**Returns:** `ArrayList<IsoObject>`

### public void setWaterSources(ArrayList<IsoObject> waterSources)

**Parameters:**
- `ArrayList<IsoObject>` `waterSources` — the WaterSources to set

**Returns:** `void`

### public boolean hasWater()

**Returns:** `boolean`

### public void useWater()

**Returns:** `void`

### public ArrayList<IsoWindow> getWindows()

**Returns:** `ArrayList<IsoWindow>`

### public void addSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void refreshSquares()

**Returns:** `void`

### public void removeSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void spawnZombies()

**Returns:** `void`

### public void onSee()

**Returns:** `void`

### public Vector<IsoGridSquare> getTileList()

**Returns:** `Vector<IsoGridSquare>`

### public ArrayList<IsoGridSquare> getSquares()

**Returns:** `ArrayList<IsoGridSquare>`

### public ArrayList<ItemContainer> getContainer()

**Returns:** `ArrayList<ItemContainer>`

### public IsoGridSquare getRandomSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomFreeSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomDoorFreeSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomWallFreeSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomWallFreePairSquare(IsoDirections dir,
boolean both)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `both`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomWallSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomDoorAndWallFreeSquare()

**Returns:** `IsoGridSquare`

### public boolean hasLightSwitches()

**Returns:** `boolean`

### public void createLights(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public IsoRoomLight findRoomLightByID(int id)

**Parameters:**
- `int` `id`

**Returns:** `IsoRoomLight`

### public RoomDef getRoomDef()

**Returns:** `RoomDef`

### public ArrayList<IsoLightSwitch> getLightSwitches()

**Returns:** `ArrayList<IsoLightSwitch>`

### public boolean spawnRandomWorkstation()

**Returns:** `boolean`

### public boolean spawnRandom2TileWorkstation()

**Returns:** `boolean`

### public boolean addMetalWorkbench()

**Returns:** `boolean`

### public boolean addPotteryWheel()

**Returns:** `boolean`

### public boolean addOldPotteryWheel()

**Returns:** `boolean`

### public boolean addModernPotteryWheel()

**Returns:** `boolean`

### public boolean add2TileBench(String bench,
String sprite1,
String sprite2,
String sprite3,
String sprite4,
boolean both)

**Parameters:**
- `String` `bench`
- `String` `sprite1`
- `String` `sprite2`
- `String` `sprite3`
- `String` `sprite4`
- `boolean` `both`

**Returns:** `boolean`

### public boolean isShop()

**Returns:** `boolean`

### public boolean isDerelict()

**Returns:** `boolean`

### public boolean isRural()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\IsoRoom.html`*
