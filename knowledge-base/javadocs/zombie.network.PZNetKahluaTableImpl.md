---
title: zombie.network.PZNetKahluaTableImpl
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.PZNetKahluaTableImpl

`public class PZNetKahluaTableImpl extends Object implements se.krka.kahlua.vm.KahluaTable`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.PZNetKahluaTableImpl

## Fields

### public final Map<Object,Object> delegate

## Constructors

### public PZNetKahluaTableImpl(Map<Object,Object> delegate)

**Parameters:**
- `Map<Object,Object>` `delegate`

## Methods

### public void setMetatable(se.krka.kahlua.vm.KahluaTable metatable)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `metatable`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getMetatable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public int size()

**Returns:** `int`

### public void rawset(Object key,
Object value)

**Parameters:**
- `Object` `key`
- `Object` `value`

**Returns:** `void`

### public Object rawget(Object key)

**Parameters:**
- `Object` `key`

**Returns:** `Object`

### public void rawset(int key,
Object value)

**Parameters:**
- `int` `key`
- `Object` `value`

**Returns:** `void`

### public String rawgetStr(Object key)

**Parameters:**
- `Object` `key`

**Returns:** `String`

### public int rawgetInt(Object key)

**Parameters:**
- `Object` `key`

**Returns:** `int`

### public boolean rawgetBool(Object key)

**Parameters:**
- `Object` `key`

**Returns:** `boolean`

### public float rawgetFloat(Object key)

**Parameters:**
- `Object` `key`

**Returns:** `float`

### public Object rawget(int key)

**Parameters:**
- `int` `key`

**Returns:** `Object`

### public int len()

**Returns:** `int`

### public se.krka.kahlua.vm.KahluaTableIterator iterator()

**Returns:** `se.krka.kahlua.vm.KahluaTableIterator`

### public boolean isEmpty()

**Returns:** `boolean`

### public void wipe()

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public static void saveIsoObject(ByteBuffer output,
IsoObject isoObject)

**Parameters:**
- `ByteBuffer` `output`
- `IsoObject` `isoObject`

**Returns:** `void`

### public static void saveIsoGameCharacter(ByteBuffer output,
IsoGameCharacter character)

**Parameters:**
- `ByteBuffer` `output`
- `IsoGameCharacter` `character`

**Returns:** `void`

### public static void saveComponent(ByteBuffer output,
Component component,
short componentID)

**Parameters:**
- `ByteBuffer` `output`
- `Component` `component`
- `short` `componentID`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public static IsoObject loadIsoObject(ByteBufferReader input,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `input`
- `IConnection` `connection`

**Returns:** `IsoObject`

### public static IsoGameCharacter loadIsoGameCharacter(ByteBufferReader input,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `input`
- `IConnection` `connection`

**Returns:** `IsoGameCharacter`

### public static Component loadComponent(ByteBuffer input,
IConnection connection)

**Parameters:**
- `ByteBuffer` `input`
- `IConnection` `connection`

**Returns:** `Component`

### public void load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void load(ByteBufferReader input,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `input`
- `IConnection` `connection`

**Returns:** `void`

### public Object load(ByteBufferReader input,
IConnection connection,
byte sbyt)
throws RuntimeException

**Parameters:**
- `ByteBufferReader` `input`
- `IConnection` `connection`
- `byte` `sbyt`

**Returns:** `Object`

### public void load(DataInputStream input,
int worldVersion)
throws IOException

**Parameters:**
- `DataInputStream` `input`
- `int` `worldVersion`

**Returns:** `void`

### public String getString(String string)

**Parameters:**
- `String` `string`

**Returns:** `String`

### public se.krka.kahlua.j2se.KahluaTableImpl getRewriteTable()

**Returns:** `se.krka.kahlua.j2se.KahluaTableImpl`

### public void setRewriteTable(Object value)

**Parameters:**
- `Object` `value`

**Returns:** `void`

### public static boolean canSave(Object key,
Object value)

**Parameters:**
- `Object` `key`
- `Object` `value`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\PZNetKahluaTableImpl.html`*
