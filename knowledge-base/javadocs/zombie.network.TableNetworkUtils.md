---
title: zombie.network.TableNetworkUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.TableNetworkUtils

`public final class TableNetworkUtils extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.TableNetworkUtils

## Constructors

### public TableNetworkUtils()

## Methods

### public static void save(se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter output)
throws IOException

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `output`

**Returns:** `void`

### public static void saveSome(se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter output,
HashSet<? extends Object> keys)
throws IOException

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `output`
- `HashSet<? extends Object>` `keys`

**Returns:** `void`

### public static void load(se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferReader input)
throws IOException

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferReader` `input`

**Returns:** `void`

### public static Object load(ByteBufferReader input,
byte sbyt)
throws IOException,
RuntimeException

**Parameters:**
- `ByteBufferReader` `input`
- `byte` `sbyt`

**Returns:** `Object`

### public static boolean canSave(Object key,
Object value)

**Parameters:**
- `Object` `key`
- `Object` `value`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\TableNetworkUtils.html`*
