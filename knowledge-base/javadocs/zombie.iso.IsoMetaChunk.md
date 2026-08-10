---
title: zombie.iso.IsoMetaChunk
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoMetaChunk

`public final class IsoMetaChunk extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoMetaChunk

## Fields

### public static final float zombiesMinPerChunk

### public static final float zombiesFullPerChunk

## Constructors

### public IsoMetaChunk()

## Methods

### public int getZonesSize()

**Returns:** `int`

### public void compactZoneArray()

**Returns:** `void`

### public void compactRoomDefArray()

**Returns:** `void`

### public boolean doesHaveForaging()

**Returns:** `boolean`

### public boolean doesHaveZone(String zone)

**Parameters:**
- `String` `zone`

**Returns:** `boolean`

### public int getRoomsSize()

**Returns:** `int`

### public float getZombieIntensity(boolean bRandom)

**Parameters:**
- `boolean` `bRandom`

**Returns:** `float`

### public float getZombieIntensity()

**Returns:** `float`

### public void setZombieIntensity(byte zombieIntensity)

**Parameters:**
- `byte` `zombieIntensity`

**Returns:** `void`

### public float getLootZombieIntensity()

**Returns:** `float`

### public int getUnadjustedZombieIntensity()

**Returns:** `int`

### public void addZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public void removeZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public Zone getZone(int index)

**Parameters:**
- `int` `index`

**Returns:** `Zone`

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
int z,
ArrayList<Zone> result)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `ArrayList<Zone>` `result`

**Returns:** `ArrayList<Zone>`

### public ArrayList<Zone> getZonesAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ArrayList<Zone>`

### public Zone getZoneAt(int x,
int y,
int z,
String zone)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `zone`

**Returns:** `Zone`

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

### public void clearZones()

**Returns:** `void`

### public void clearRooms()

**Returns:** `void`

### public void addRoom(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

### public void removeRoom(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

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

### public BuildingDef getAssociatedBuildingAt(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `BuildingDef`

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

### public void Dispose()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoMetaChunk.html`*
