---
title: zombie.world.moddata.ModData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.world.moddata
---

# zombie.world.moddata.ModData

`public final class ModData extends Object`

**Kind:** class · **Package:** zombie.world.moddata

## Inheritance
- java.lang.Object
- zombie.world.moddata.ModData

## Description

TurboTuTone.

Exposed class with only allowed functions accessible for modding

## Constructors

### public ModData()

## Methods

### public static ArrayList<String> getTableNames()

**Returns:** `ArrayList<String>`

### public static boolean exists(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `boolean`

### public static se.krka.kahlua.vm.KahluaTable getOrCreate(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable get(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static String create()

**Returns:** `String`

### public static se.krka.kahlua.vm.KahluaTable create(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable remove(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void add(String tag,
se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `String` `tag`
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public static void transmit(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `void`

### public static void request(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\world\moddata\ModData.html`*
