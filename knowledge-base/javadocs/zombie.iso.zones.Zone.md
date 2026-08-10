---
title: zombie.iso.zones.Zone
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.zones
---

# zombie.iso.zones.Zone

`public class Zone extends Object`

**Kind:** class · **Package:** zombie.iso.zones

## Inheritance
- java.lang.Object
- zombie.iso.zones.Zone

## Fields

### public static Clipper clipper

### public HashMap<String,Integer> spawnedZombies

### public final gnu.trove.list.array.TIntArrayList points

### public UUID id

### public int hourLastSeen

### public int lastActionTimestamp

### public boolean haveConstruction

### public String zombiesTypeToSpawn

### public Boolean spawnSpecialZombies

### public String name

### public String type

### public int x

### public int y

### public int z

### public int w

### public int h

### public ZoneGeometryType geometryType

### public int polylineWidth

### public float[] polylineOutlinePoints

### public float[] triangles

### public float[] triangleAreas

### public float totalArea

### public int pickedXForZoneStory

### public int pickedYForZoneStory

### public RandomizedZoneStoryBase pickedRzStory

### public boolean isPreferredZoneForSquare

## Constructors

### public Zone()

### public Zone(String name,
String type,
int x,
int y,
int z,
int w,
int h)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`

### public Zone(String name,
String type,
int x,
int y,
int z,
int w,
int h,
ZoneGeometryType geometryType,
gnu.trove.list.array.TIntArrayList points,
int polylineWidth)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`
- `ZoneGeometryType` `geometryType`
- `gnu.trove.list.array.TIntArrayList` `points`
- `int` `polylineWidth`

## Methods

### public Zone load(ByteBuffer input,
int worldVersion,
Map<Integer,String> stringMap,
SharedStrings sharedStrings)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `Map<Integer,String>` `stringMap`
- `SharedStrings` `sharedStrings`

**Returns:** `Zone`

### public Zone load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `Zone`

### public static boolean isPreferredZoneForSquare(String type)

**Parameters:**
- `String` `type`

**Returns:** `boolean`

### public void save(ByteBuffer output,
Map<String,Integer> stringMap)

**Parameters:**
- `ByteBuffer` `output`
- `Map<String,Integer>` `stringMap`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public boolean isFullyStreamed()

**Returns:** `boolean`

### public void setW(int w)

**Parameters:**
- `int` `w`

**Returns:** `void`

### public void setH(int h)

**Parameters:**
- `int` `h`

**Returns:** `void`

### public boolean isPoint()

**Returns:** `boolean`

### public boolean isPolygon()

**Returns:** `boolean`

### public boolean isPolyline()

**Returns:** `boolean`

### public boolean isRectangle()

**Returns:** `boolean`

### public void setPickedXForZoneStory(int pickedXForZoneStory)

**Parameters:**
- `int` `pickedXForZoneStory`

**Returns:** `void`

### public void setPickedYForZoneStory(int pickedYForZoneStory)

**Parameters:**
- `int` `pickedYForZoneStory`

**Returns:** `void`

### public float getHoursSinceLastSeen()

**Returns:** `float`

### public void setHourSeenToCurrent()

**Returns:** `void`

### public void setHaveConstruction(boolean have)

**Parameters:**
- `boolean` `have`

**Returns:** `void`

### public boolean haveCons()

**Returns:** `boolean`

### public int getZombieDensity()

**Returns:** `int`

### public boolean contains(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean intersects(int x,
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

**Returns:** `boolean`

### public boolean difference(int x,
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

**Returns:** `boolean`

### public IsoGameCharacter.Location pickRandomLocation(IsoGameCharacter.Location location)

**Parameters:**
- `IsoGameCharacter.Location` `location`

**Returns:** `IsoGameCharacter.Location`

### public IsoGridSquare getRandomSquareInZone()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomFreeSquareInZone()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomUnseenSquareInZone()

**Returns:** `IsoGridSquare`

### public void addSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public ArrayList<IsoGridSquare> getSquares()

**Returns:** `ArrayList<IsoGridSquare>`

### public void removeSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getType()

**Returns:** `String`

### public void setType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public int getLastActionTimestamp()

**Returns:** `int`

### public void setLastActionTimestamp(int lastActionTimestamp)

**Parameters:**
- `int` `lastActionTimestamp`

**Returns:** `void`

### public int getX()

**Returns:** `int`

### public void setX(int x)

**Parameters:**
- `int` `x`

**Returns:** `void`

### public int getY()

**Returns:** `int`

### public void setY(int y)

**Parameters:**
- `int` `y`

**Returns:** `void`

### public int getZ()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public int getWidth()

**Returns:** `int`

### public float getTotalArea()

**Returns:** `float`

### public void sendToServer()

**Returns:** `void`

### public String getOriginalName()

**Returns:** `String`

### public void setOriginalName(String originalName)

**Parameters:**
- `String` `originalName`

**Returns:** `void`

### public int getClippedSegmentOfPolyline(int clipX1,
int clipY1,
int clipX2,
int clipY2,
double[] t1t2)

**Parameters:**
- `int` `clipX1`
- `int` `clipY1`
- `int` `clipX2`
- `int` `clipY2`
- `double[]` `t1t2`

**Returns:** `int`

### public float[] getPolygonTriangles()

**Returns:** `float[]`

### public float[] getPolylineOutlineTriangles()

**Returns:** `float[]`

### public float getPolylineLength()

**Returns:** `float`

### public void Dispose()

**Returns:** `void`

### public List<Integer> getPointsToLua()

**Returns:** `List<Integer>`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\zones\Zone.html`*
