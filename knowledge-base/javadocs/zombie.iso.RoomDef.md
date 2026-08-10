---
title: zombie.iso.RoomDef
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.RoomDef

`public final class RoomDef extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.RoomDef

## Fields

### public boolean explored

### public boolean doneSpawn

### public int indoorZombies

### public int spawnCount

### public boolean lightsActive

### public String name

### public int level

### public BuildingDef building

### public long id

### public final ArrayList<RoomDef.RoomRect> rects

### public final ArrayList<MetaObject> objects

### public int x

### public int y

### public int x2

### public int y2

### public int area

### public long metaId

### public boolean userDefined

## Constructors

### public RoomDef(long id,
String name)

**Parameters:**
- `long` `id`
- `String` `name`

### public RoomDef()

## Methods

### public long getID()

**Returns:** `long`

### public String getIDString()

**Returns:** `String`

### public boolean isExplored()

**Returns:** `boolean`

### public boolean isInside(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean contains(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean intersects(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `boolean`

### public boolean isAdjacent(RoomDef other)

**Parameters:**
- `RoomDef` `other`

**Returns:** `boolean`

### public boolean isAdjacent(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `boolean`

### public boolean overlaps(RoomDef other)

**Parameters:**
- `RoomDef` `other`

**Returns:** `boolean`

### public float getAreaOverlapping(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `float`

### public float getAreaOverlapping(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `float`

### public void forEachChunk(BiConsumer<RoomDef,IsoChunk> consumer)

**Parameters:**
- `BiConsumer<RoomDef,IsoChunk>` `consumer`

**Returns:** `void`

### public void setInvalidateCacheForAllChunks(int playerIndex,
long dirtyFlags)

**Parameters:**
- `int` `playerIndex`
- `long` `dirtyFlags`

**Returns:** `void`

### public IsoRoom getIsoRoom()

**Returns:** `IsoRoom`

### public ArrayList<MetaObject> getObjects()

**Returns:** `ArrayList<MetaObject>`

### public ArrayList<MetaObject> getMetaObjects()

**Returns:** `ArrayList<MetaObject>`

### public void refreshSquares()

**Returns:** `void`

### public BuildingDef getBuilding()

**Returns:** `BuildingDef`

### public void setBuilding(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String newName)

**Parameters:**
- `String` `newName`

**Returns:** `void`

### public ArrayList<RoomDef.RoomRect> getRects()

**Returns:** `ArrayList<RoomDef.RoomRect>`

### public int getY()

**Returns:** `int`

### public int getX()

**Returns:** `int`

### public int getX2()

**Returns:** `int`

### public int getY2()

**Returns:** `int`

### public int getW()

**Returns:** `int`

### public int getH()

**Returns:** `int`

### public int getZ()

**Returns:** `int`

### public void CalculateBounds()

**Returns:** `void`

### public long calculateMetaID(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `long`

### public void offset(int dx,
int dy)

**Parameters:**
- `int` `dx`
- `int` `dy`

**Returns:** `void`

### public int getArea()

**Returns:** `int`

### public void setExplored(boolean explored)

**Parameters:**
- `boolean` `explored`

**Returns:** `void`

### public IsoGridSquare getFreeSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getExtraFreeSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getFreeUnoccupiedSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomSquare(Predicate<IsoGridSquare> predicate)

**Parameters:**
- `Predicate<IsoGridSquare>` `predicate`

**Returns:** `IsoGridSquare`

### public boolean isEmptyOutside()

**Returns:** `boolean`

### public HashMap<String,Integer> getProceduralSpawnedContainer()

**Returns:** `HashMap<String,Integer>`

### public RoomDef.RoomRect getRoomRect(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `RoomDef.RoomRect`

### public boolean isRoofFixed()

**Returns:** `boolean`

### public void setRoofFixed(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

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

### public boolean isKidsRoom()

**Returns:** `boolean`

### public boolean isShop()

**Returns:** `boolean`

### public boolean isUserDefined()

**Returns:** `boolean`

### public void copyFrom(RoomDef other)

**Parameters:**
- `RoomDef` `other`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\RoomDef.html`*
