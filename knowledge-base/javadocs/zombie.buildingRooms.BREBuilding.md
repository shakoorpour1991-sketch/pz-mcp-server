---
title: zombie.buildingRooms.BREBuilding
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.buildingRooms
---

# zombie.buildingRooms.BREBuilding

`public final class BREBuilding extends Object`

**Kind:** class · **Package:** zombie.buildingRooms

## Inheritance
- java.lang.Object
- zombie.buildingRooms.BREBuilding

## Constructors

### public BREBuilding()

## Methods

### public int getRoomCount()

**Returns:** `int`

### public BRERoom getRoomByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `BRERoom`

### public boolean isEdited()

**Returns:** `boolean`

### public void setEdited(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getRoomIndexAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `int`

### public BRERoom createRoom(int level)

**Parameters:**
- `int` `level`

**Returns:** `BRERoom`

### public void removeRoom(BRERoom room)

**Parameters:**
- `BRERoom` `room`

**Returns:** `void`

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

### public boolean hasNonEmptyRoomsOnLevel(int z)

**Parameters:**
- `int` `z`

**Returns:** `boolean`

### public BREBuilding copyFrom(BuildingDef buildingDef2)

**Parameters:**
- `BuildingDef` `buildingDef2`

**Returns:** `BREBuilding`

### public boolean isValid()

**Returns:** `boolean`

### public void applyChanges(boolean bLoading)

**Parameters:**
- `boolean` `bLoading`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\buildingRooms\BREBuilding.html`*
