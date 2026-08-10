---
title: zombie.iso.BuildingDef
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.BuildingDef

`public final class BuildingDef extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.BuildingDef

## Fields

### public final ArrayList<RoomDef> emptyoutside

### public se.krka.kahlua.vm.KahluaTable table

### public boolean seen

### public boolean hasBeenVisited

### public String stash

### public int lootRespawnHour

### public gnu.trove.list.array.TShortArrayList overlappedChunks

### public boolean alarmed

### public int alarmDecay

### public int x

### public int y

### public int x2

### public int y2

### public final ArrayList<RoomDef> rooms

### public Zone zone

### public int food

### public ArrayList<InventoryItem> items

### public HashSet<String> itemTypes

### public long id

### public long metaId

### public int collapseRectX

### public int collapseRectY

### public int collapseRectX2

### public int collapseRectY2

## Constructors

### public BuildingDef()

### public BuildingDef(boolean userDefined)

**Parameters:**
- `boolean` `userDefined`

## Methods

### public int getMinLevel()

**Returns:** `int`

### public int getMaxLevel()

**Returns:** `int`

### public se.krka.kahlua.vm.KahluaTable getTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public ArrayList<RoomDef> getRooms()

**Returns:** `ArrayList<RoomDef>`

### public ArrayList<RoomDef> getEmptyOutside()

**Returns:** `ArrayList<RoomDef>`

### public RoomDef getRoom(String roomName)

**Parameters:**
- `String` `roomName`

**Returns:** `RoomDef`

### public RoomDef getRoom(String roomName,
boolean noKids)

**Parameters:**
- `String` `roomName`
- `boolean` `noKids`

**Returns:** `RoomDef`

### public boolean isAllExplored()

**Returns:** `boolean`

### public void setAllExplored(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getRoomsNumber()

**Returns:** `int`

### public int getArea()

**Returns:** `int`

### public RoomDef getFirstRoom()

**Returns:** `RoomDef`

### public void setUserDefined(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getCellX()

**Returns:** `int`

### public int getCellY()

**Returns:** `int`

### public int getCellX2()

**Returns:** `int`

### public int getCellY2()

**Returns:** `int`

### public int getChunkX()

**Returns:** `int`

### public int getChunkY()

**Returns:** `int`

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public int getX2()

**Returns:** `int`

### public int getY2()

**Returns:** `int`

### public int getW()

**Returns:** `int`

### public int getH()

**Returns:** `int`

### public long getID()

**Returns:** `long`

### public String getIDString()

**Returns:** `String`

### public void refreshSquares()

**Returns:** `void`

### public void CalculateBounds(ArrayList<RoomDef> tempRooms)

**Parameters:**
- `ArrayList<RoomDef>` `tempRooms`

**Returns:** `void`

### public long calculateMetaID(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `long`

### public void recalculate()

**Returns:** `void`

### public boolean overlapsChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public IsoGridSquare getFreeSquareInRoom()

**Returns:** `IsoGridSquare`

### public boolean containsRoom(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean isFullyStreamedIn()

**Returns:** `boolean`

### public boolean isAnyChunkNewlyLoaded()

**Returns:** `boolean`

### public Zone getZone()

**Returns:** `Zone`

### public int getKeyId()

**Returns:** `int`

### public void setKeyId(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `void`

### public int getKeySpawned()

**Returns:** `int`

### public void setKeySpawned(int keySpawned)

**Parameters:**
- `int` `keySpawned`

**Returns:** `void`

### public boolean isHasBeenVisited()

**Returns:** `boolean`

### public void setHasBeenVisited(boolean hasBeenVisited)

**Parameters:**
- `boolean` `hasBeenVisited`

**Returns:** `void`

### public boolean isAlarmed()

**Returns:** `boolean`

### public void setAlarmed(boolean alarm)

**Parameters:**
- `boolean` `alarm`

**Returns:** `void`

### public RoomDef getRandomRoom()

**Returns:** `RoomDef`

### public RoomDef getRandomRoom(int minArea)

**Parameters:**
- `int` `minArea`

**Returns:** `RoomDef`

### public RoomDef getRandomRoom(int minArea,
boolean noKids)

**Parameters:**
- `int` `minArea`
- `boolean` `noKids`

**Returns:** `RoomDef`

### public float getClosestPoint(float x,
float y,
org.joml.Vector2f closestXY)

**Parameters:**
- `float` `x`
- `float` `y`
- `org.joml.Vector2f` `closestXY`

**Returns:** `float`

### public void Dispose()

**Returns:** `void`

### public boolean containsXYZ(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void addRoomToCollapseRect(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

### public void calculateCollapseRect()

**Returns:** `void`

### public void setInvalidateCacheForAllChunks(int playerIndex,
long dirtyFlags)

**Parameters:**
- `int` `playerIndex`
- `long` `dirtyFlags`

**Returns:** `void`

### public void invalidateOverlappedChunkLevelsAbove(int playerIndex,
int minLevel,
long dirtyFlags)

**Parameters:**
- `int` `playerIndex`
- `int` `minLevel`
- `long` `dirtyFlags`

**Returns:** `void`

### public boolean intersects(int x,
int y,
int w,
int h,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `int` `z`

**Returns:** `boolean`

### public boolean isAdjacent(int x,
int y,
int w,
int h,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `int` `z`

**Returns:** `boolean`

### public boolean isAdjacent(BuildingDef other)

**Parameters:**
- `BuildingDef` `other`

**Returns:** `boolean`

### public boolean isAdjacent(BuildingDef other,
boolean bIgnoreZ)

**Parameters:**
- `BuildingDef` `other`
- `boolean` `bIgnoreZ`

**Returns:** `boolean`

### public boolean overlaps(BuildingDef other,
boolean bIgnoreZ)

**Parameters:**
- `BuildingDef` `other`
- `boolean` `bIgnoreZ`

**Returns:** `boolean`

### public void addRoomsOf(BuildingDef sourceDef,
ArrayList<RoomDef> tempRooms)

**Parameters:**
- `BuildingDef` `sourceDef`
- `ArrayList<RoomDef>` `tempRooms`

**Returns:** `void`

### public long getRoofRoomID(int level)

**Parameters:**
- `int` `level`

**Returns:** `long`

### public boolean isEntirelyEmptyOutside()

**Returns:** `boolean`

### public boolean isShop()

**Returns:** `boolean`

### public boolean isResidential()

**Returns:** `boolean`

### public boolean isUserDefined()

**Returns:** `boolean`

### public boolean isBasement()

**Returns:** `boolean`

### public void resetMinMaxLevel()

**Returns:** `void`

### public List<IsoObject> getObjects()

**Returns:** `List<IsoObject>`

### public List<IsoGridSquare> getSquares()

**Returns:** `List<IsoGridSquare>`

### public boolean isRural()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\BuildingDef.html`*
