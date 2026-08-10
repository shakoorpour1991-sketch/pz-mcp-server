---
title: zombie.globalObjects.GlobalObjectLookup
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.GlobalObjectLookup

`public final class GlobalObjectLookup extends Object`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.GlobalObjectLookup

## Constructors

### public GlobalObjectLookup(GlobalObjectSystem system)

**Parameters:**
- `GlobalObjectSystem` `system`

## Methods

### public void addObject(GlobalObject object)

**Parameters:**
- `GlobalObject` `object`

**Returns:** `void`

### public void removeObject(GlobalObject object)

**Parameters:**
- `GlobalObject` `object`

**Returns:** `void`

### public GlobalObject getObjectAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `GlobalObject`

### public boolean hasObjectsInChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public ArrayList<GlobalObject> getObjectsInChunk(int wx,
int wy,
ArrayList<GlobalObject> objects)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `ArrayList<GlobalObject>` `objects`

**Returns:** `ArrayList<GlobalObject>`

### public ArrayList<GlobalObject> getObjectsAdjacentTo(int x,
int y,
int z,
ArrayList<GlobalObject> objects)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `ArrayList<GlobalObject>` `objects`

**Returns:** `ArrayList<GlobalObject>`

### public static void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\GlobalObjectLookup.html`*
