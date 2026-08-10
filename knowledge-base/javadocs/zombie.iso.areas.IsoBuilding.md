---
title: zombie.iso.areas.IsoBuilding
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas
---

# zombie.iso.areas.IsoBuilding

`public final class IsoBuilding extends Object`

**Kind:** class · **Package:** zombie.iso.areas

## Inheritance
- java.lang.Object
- zombie.iso.areas.IsoBuilding

## Fields

### public Rectangle bounds

### public final Vector<IsoRoomExit> exits

### public boolean isResidence

### public final ArrayList<ItemContainer> container

### public final Vector<IsoRoom> rooms

### public final Vector<IsoWindow> windows

### public int id

### public static int idCount

### public int safety

### public int transparentWalls

### public static float poorBuildingScore

### public static float goodBuildingScore

### public int scoreUpdate

### public BuildingDef def

### public boolean seenInside

### public ArrayList<IsoLightSource> lights

## Constructors

### public IsoBuilding()

### public IsoBuilding(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public int getRoomsNumber()

**Returns:** `int`

### public int getID()

**Returns:** `int`

### public void TriggerAlarm()

**Returns:** `void`

### public boolean ContainsAllItems(Stack<String> items)

**Parameters:**
- `Stack<String>` `items`

**Returns:** `boolean`

### public float ScoreBuildingPersonSpecific(SurvivorDesc desc,
boolean bFarGood)

**Parameters:**
- `SurvivorDesc` `desc`
- `boolean` `bFarGood`

**Returns:** `float`

### public BuildingDef getDef()

**Returns:** `BuildingDef`

### public void update()

**Returns:** `void`

### public void AddRoom(IsoRoom room)

**Parameters:**
- `IsoRoom` `room`

**Returns:** `void`

### public void CalculateExits()

**Returns:** `void`

### public void CalculateWindows()

**Returns:** `void`

### public void FillContainers()

**Returns:** `void`

### public ItemContainer getContainerWith(ItemType itemType)

**Parameters:**
- `ItemType` `itemType`

**Returns:** `ItemContainer`

### public IsoRoom getRandomRoom()

**Returns:** `IsoRoom`

### public IsoGridSquare getFreeTile()

**Returns:** `IsoGridSquare`

### public boolean hasWater()

**Returns:** `boolean`

### public void CreateFrom(BuildingDef building,
IsoMetaCell metaCell)

**Parameters:**
- `BuildingDef` `building`
- `IsoMetaCell` `metaCell`

**Returns:** `void`

### public void setAllExplored(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setAllExplored(boolean b,
IsoRoom exception)

**Parameters:**
- `boolean` `b`
- `IsoRoom` `exception`

**Returns:** `void`

### public boolean isAllExplored()

**Returns:** `boolean`

### public void addWindow(IsoWindow obj,
boolean bOtherTile,
IsoGridSquare from,
IsoBuilding building)

**Parameters:**
- `IsoWindow` `obj`
- `boolean` `bOtherTile`
- `IsoGridSquare` `from`
- `IsoBuilding` `building`

**Returns:** `void`

### public void addWindow(IsoWindow obj,
boolean bOtherTile)

**Parameters:**
- `IsoWindow` `obj`
- `boolean` `bOtherTile`

**Returns:** `void`

### public void addDoor(IsoDoor obj,
boolean bOtherTile,
IsoGridSquare from,
IsoBuilding building)

**Parameters:**
- `IsoDoor` `obj`
- `boolean` `bOtherTile`
- `IsoGridSquare` `from`
- `IsoBuilding` `building`

**Returns:** `void`

### public void addDoor(IsoDoor obj,
boolean bOtherTile)

**Parameters:**
- `IsoDoor` `obj`
- `boolean` `bOtherTile`

**Returns:** `void`

### public boolean isResidential()

**Returns:** `boolean`

### public boolean containsRoom(String room)

**Parameters:**
- `String` `room`

**Returns:** `boolean`

### public IsoRoom getRandomRoom(String room)

**Parameters:**
- `String` `room`

**Returns:** `IsoRoom`

### public IsoRoom getRandomRoomExcluding(List<String> badRooms)

**Parameters:**
- `List<String>` `badRooms`

**Returns:** `IsoRoom`

### public boolean hasRoom(String room)

**Parameters:**
- `String` `room`

**Returns:** `boolean`

### public ItemContainer getRandomContainer(String type)

**Parameters:**
- `String` `type`

**Returns:** `ItemContainer`

### public ItemContainer getRandomContainerSingle(String type)

**Parameters:**
- `String` `type`

**Returns:** `ItemContainer`

### public IsoWindow getRandomFirstFloorWindow()

**Returns:** `IsoWindow`

### public boolean isToxic()

**Returns:** `boolean`

### public void setToxic(boolean isToxic)

**Parameters:**
- `boolean` `isToxic`

**Returns:** `void`

### public void forceAwake()

Check for player inside the house and awake them all

**Returns:** `void`

### public boolean hasBasement()

**Returns:** `boolean`

### public boolean isEntirelyEmptyOutside()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\IsoBuilding.html`*
