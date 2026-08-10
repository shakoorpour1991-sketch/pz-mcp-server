---
title: zombie.iso.areas.DesignationZone
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas
---

# zombie.iso.areas.DesignationZone

`public class DesignationZone extends Object`

**Kind:** class · **Package:** zombie.iso.areas

## Inheritance
- java.lang.Object
- zombie.iso.areas.DesignationZone

## Fields

### public Double id

### public int hourLastSeen

### public int lastActionTimestamp

### public String name

### public String type

### public int x

### public int y

### public int z

### public int w

### public int h

### public boolean streamed

### public static long lastUpdate

### public static final ArrayList<DesignationZone> allZones

## Constructors

### public DesignationZone()

### public DesignationZone(String type,
String name,
int x,
int y,
int z,
int x2,
int y2,
boolean doSync)

**Parameters:**
- `String` `type`
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `x2`
- `int` `y2`
- `boolean` `doSync`

## Methods

### public static DesignationZone addZone(String type,
String name,
int x,
int y,
int z,
int x2,
int y2)

**Parameters:**
- `String` `type`
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `x2`
- `int` `y2`

**Returns:** `DesignationZone`

### public void doMeta(int hours)

**Parameters:**
- `int` `hours`

**Returns:** `void`

### public boolean isStillStreamed()

**Returns:** `boolean`

### public static void removeZone(String type,
String name)

**Parameters:**
- `String` `type`
- `String` `name`

**Returns:** `void`

### public static void removeZone(DesignationZone zone,
boolean doSync)

**Parameters:**
- `DesignationZone` `zone`
- `boolean` `doSync`

**Returns:** `void`

### public static DesignationZone getZoneByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `DesignationZone`

### public static DesignationZone getZoneByNameAndType(String type,
String name)

**Parameters:**
- `String` `type`
- `String` `name`

**Returns:** `DesignationZone`

### public static DesignationZone getZone(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `DesignationZone`

### public static DesignationZone getZoneByType(String type,
int x,
int y,
int z)

**Parameters:**
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `DesignationZone`

### public boolean isFullyStreamed()

**Returns:** `boolean`

### public static DesignationZone getZoneById(Double id)

**Parameters:**
- `Double` `id`

**Returns:** `DesignationZone`

### public void unloading()

**Returns:** `void`

### public void loading()

**Returns:** `void`

### public IsoGridSquare getRandomSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomFreeSquare()

**Returns:** `IsoGridSquare`

### public static ArrayList<DesignationZone> getAllZonesByType(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<DesignationZone>`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public void check()

**Returns:** `void`

### public int getW()

**Returns:** `int`

### public int getH()

**Returns:** `int`

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public int getZ()

**Returns:** `int`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public static DesignationZone load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `DesignationZone`

### public static void Reset()

**Returns:** `void`

### public Double getId()

**Returns:** `Double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\DesignationZone.html`*
