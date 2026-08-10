---
title: zombie.inventory.types.MapItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.MapItem

`public class MapItem extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.MapItem

## Fields

### public static MapItem worldMapInstance

## Constructors

### public MapItem(String module,
String name,
String type,
String tex)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `String` `tex`

### public MapItem(String module,
String name,
String type,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `Item` `item`

## Methods

### public static MapItem getSingleton()

**Returns:** `MapItem`

### public static void SaveWorldMap()

**Returns:** `void`

### public static void SaveWorldMapToBufferMap(SaveBufferMap bufferMap)

**Parameters:**
- `SaveBufferMap` `bufferMap`

**Returns:** `void`

### public static void LoadWorldMap()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public boolean IsMap()

**Returns:** `boolean`

### public void setMapID(String mapID)

**Parameters:**
- `String` `mapID`

**Returns:** `void`

### public String getMapID()

**Returns:** `String`

### public WorldMapSymbols getSymbols()

**Returns:** `WorldMapSymbols`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public boolean checkDefaultAnnotationsLoaded()

**Returns:** `boolean`

### public void clearDefaultAnnotations()

**Returns:** `void`

### public String getMediaId()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\MapItem.html`*
