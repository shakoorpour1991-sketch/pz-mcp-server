---
title: zombie.globalObjects.SGlobalObjects
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.SGlobalObjects

`public final class SGlobalObjects extends Object`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.SGlobalObjects

## Constructors

### public SGlobalObjects()

## Methods

### public static void noise(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static SGlobalObjectSystem registerSystem(String name)

**Parameters:**
- `String` `name`

**Returns:** `SGlobalObjectSystem`

### public static SGlobalObjectSystem newSystem(String name)
throws IllegalStateException

**Parameters:**
- `String` `name`

**Returns:** `SGlobalObjectSystem`

### public static int getSystemCount()

**Returns:** `int`

### public static SGlobalObjectSystem getSystemByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `SGlobalObjectSystem`

### public static SGlobalObjectSystem getSystemByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `SGlobalObjectSystem`

### public static void update()

**Returns:** `void`

### public static void chunkLoaded(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public static void initSystems()

**Returns:** `void`

### public static void saveInitialStateForClient(ByteBufferWriter bb)
throws IOException

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public static boolean receiveClientCommand(String systemName,
String command,
IsoPlayer playerObj,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `systemName`
- `String` `command`
- `IsoPlayer` `playerObj`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `boolean`

### public static void load()

**Returns:** `void`

### public static void save()

**Returns:** `void`

### public static void OnIsoObjectChangedItself(String systemName,
IsoObject isoObject)

**Parameters:**
- `String` `systemName`
- `IsoObject` `isoObject`

**Returns:** `void`

### public static void OnModDataChangeItself(String systemName,
IsoObject isoObject)

**Parameters:**
- `String` `systemName`
- `IsoObject` `isoObject`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\SGlobalObjects.html`*
