---
title: zombie.world.moddata.GlobalModData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.world.moddata
---

# zombie.world.moddata.GlobalModData

`public final class GlobalModData extends Object`

**Kind:** class · **Package:** zombie.world.moddata

## Inheritance
- java.lang.Object
- zombie.world.moddata.GlobalModData

## Fields

### public static final String SAVE_EXT

### public static final String SAVE_FILE

### public static GlobalModData instance

## Constructors

### public GlobalModData()

## Methods

### public void init()
throws IOException

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void collectTableNames(List<String> list)

**Parameters:**
- `List<String>` `list`

**Returns:** `void`

### public boolean exists(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getOrCreate(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable get(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public String create()

**Returns:** `String`

### public se.krka.kahlua.vm.KahluaTable create(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable remove(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void add(String tag,
se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `String` `tag`
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public void transmit(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `void`

### public void request(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `void`

### public void receiveRequest(ByteBufferReader bb,
IConnection requesterConnection)

**Parameters:**
- `ByteBufferReader` `bb`
- `IConnection` `requesterConnection`

**Returns:** `void`

### public void save()
throws IOException

**Returns:** `void`

### public void load()
throws IOException

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\world\moddata\GlobalModData.html`*
