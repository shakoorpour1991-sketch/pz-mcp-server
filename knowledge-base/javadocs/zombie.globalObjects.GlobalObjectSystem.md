---
title: zombie.globalObjects.GlobalObjectSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.GlobalObjectSystem

`public abstract class GlobalObjectSystem extends Object`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.GlobalObjectSystem

## Methods

### public String getName()

**Returns:** `String`

### public final se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public final GlobalObject newObject(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `GlobalObject`

### public final void removeObject(GlobalObject object)
throws IllegalArgumentException,
IllegalStateException

**Parameters:**
- `GlobalObject` `object`

**Returns:** `void`

### public final GlobalObject getObjectAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `GlobalObject`

### public final GlobalObject getObjectAt(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `GlobalObject`

### public final boolean hasObjectsInChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public final ArrayList<GlobalObject> getObjectsInChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `ArrayList<GlobalObject>`

### public final ArrayList<GlobalObject> getObjectsAdjacentTo(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ArrayList<GlobalObject>`

### public final int getObjectCount()

**Returns:** `int`

### public final GlobalObject getObjectByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `GlobalObject`

### public final ArrayList<GlobalObject> allocList()

**Returns:** `ArrayList<GlobalObject>`

### public final void finishedWithList(ArrayList<GlobalObject> list)

**Parameters:**
- `ArrayList<GlobalObject>` `list`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\GlobalObjectSystem.html`*
