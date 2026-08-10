---
title: zombie.buildingRooms.BuildingRoomsEditor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.buildingRooms
---

# zombie.buildingRooms.BuildingRoomsEditor

`public final class BuildingRoomsEditor extends Object`

**Kind:** class · **Package:** zombie.buildingRooms

## Inheritance
- java.lang.Object
- zombie.buildingRooms.BuildingRoomsEditor

## Constructors

### public BuildingRoomsEditor()

## Methods

### public static BuildingRoomsEditor getInstance()

**Returns:** `BuildingRoomsEditor`

### public void setLuaEditor(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public int getBuildingCount()

**Returns:** `int`

### public BREBuilding getBuildingByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `BREBuilding`

### public BREBuilding createBuilding()

**Returns:** `BREBuilding`

### public void init(int worldX,
int worldY)

**Parameters:**
- `int` `worldX`
- `int` `worldY`

**Returns:** `void`

### public BREBuilding copyExistingBuilding(BuildingDef buildingDef2)

**Parameters:**
- `BuildingDef` `buildingDef2`

**Returns:** `BREBuilding`

### public void removeBuilding(BREBuilding building)

**Parameters:**
- `BREBuilding` `building`

**Returns:** `void`

### public boolean canAddRoomRectangle(BRERoom room,
int x,
int y,
int w,
int h,
int z)

**Parameters:**
- `BRERoom` `room`
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `int` `z`

**Returns:** `boolean`

### public void callLua(String event,
Object... args)

**Parameters:**
- `String` `event`
- `Object...` `args`

**Returns:** `void`

### public void setCurrentBuilding(BREBuilding building)

**Parameters:**
- `BREBuilding` `building`

**Returns:** `void`

### public void setCurrentRoom(BRERoom room)

**Parameters:**
- `BRERoom` `room`

**Returns:** `void`

### public void setHighlightRectForDeletion(int rectIndex)

**Parameters:**
- `int` `rectIndex`

**Returns:** `void`

### public void setCurrentLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public boolean isValid()

**Returns:** `boolean`

### public String getInvalidString()

**Returns:** `String`

### public void applyChanges(boolean bLoading)

**Parameters:**
- `boolean` `bLoading`

**Returns:** `void`

### public void checkBuildingAndRoomIDs()

**Returns:** `void`

### public void checkBuildingAndRoomIDs(IsoMetaCell metaCell)

**Parameters:**
- `IsoMetaCell` `metaCell`

**Returns:** `void`

### public void renderMain()

**Returns:** `void`

### public void load()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\buildingRooms\BuildingRoomsEditor.html`*
