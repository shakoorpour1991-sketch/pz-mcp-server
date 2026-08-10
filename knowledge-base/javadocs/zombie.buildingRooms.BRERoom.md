---
title: zombie.buildingRooms.BRERoom
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.buildingRooms
---

# zombie.buildingRooms.BRERoom

`public final class BRERoom extends Object`

**Kind:** class · **Package:** zombie.buildingRooms

## Inheritance
- java.lang.Object
- zombie.buildingRooms.BRERoom

## Methods

### public int getLevel()

**Returns:** `int`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void addRectangle(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `void`

### public void removeRectangle(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getRectangleCount()

**Returns:** `int`

### public RoomDef.RoomRect getRectangle(int index)

**Parameters:**
- `int` `index`

**Returns:** `RoomDef.RoomRect`

### public boolean contains(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public int hitTest(int squareX,
int squareY)

**Parameters:**
- `int` `squareX`
- `int` `squareY`

**Returns:** `int`

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

### public BRERoom copyFrom(RoomDef roomDef2)

**Parameters:**
- `RoomDef` `roomDef2`

**Returns:** `BRERoom`

### public boolean isValid()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\buildingRooms\BRERoom.html`*
