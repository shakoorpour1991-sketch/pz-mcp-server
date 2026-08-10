---
title: zombie.globalObjects.CGlobalObjects
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.CGlobalObjects

`public final class CGlobalObjects extends Object`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.CGlobalObjects

## Constructors

### public CGlobalObjects()

## Methods

### public static void noise(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static CGlobalObjectSystem registerSystem(String name)

**Parameters:**
- `String` `name`

**Returns:** `CGlobalObjectSystem`

### public static CGlobalObjectSystem newSystem(String name)
throws IllegalStateException

**Parameters:**
- `String` `name`

**Returns:** `CGlobalObjectSystem`

### public static int getSystemCount()

**Returns:** `int`

### public static CGlobalObjectSystem getSystemByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `CGlobalObjectSystem`

### public static CGlobalObjectSystem getSystemByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `CGlobalObjectSystem`

### public static void initSystems()

**Returns:** `void`

### public static void loadInitialState(ByteBufferReader bb)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public static boolean receiveServerCommand(String systemName,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `systemName`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `boolean`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\CGlobalObjects.html`*
