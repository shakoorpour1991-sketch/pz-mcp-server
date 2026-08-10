---
title: zombie.iso.SaveBufferMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.SaveBufferMap

`public class SaveBufferMap extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.SaveBufferMap

## Constructors

### public SaveBufferMap()

## Methods

### public ByteBufferPooledObject allocate(int size)

**Parameters:**
- `int` `size`

**Returns:** `ByteBufferPooledObject`

### public void put(String key,
ByteBufferPooledObject value,
SaveBufferMap.IWriter writer)

**Parameters:**
- `String` `key`
- `ByteBufferPooledObject` `value`
- `SaveBufferMap.IWriter` `writer`

**Returns:** `void`

### public void put(String key,
ByteBufferPooledObject value)

**Parameters:**
- `String` `key`
- `ByteBufferPooledObject` `value`

**Returns:** `void`

### public ByteBufferPooledObject get(String key)

**Parameters:**
- `String` `key`

**Returns:** `ByteBufferPooledObject`

### public void save(SaveBufferMap.IWriter writer)
throws IOException

**Parameters:**
- `SaveBufferMap.IWriter` `writer`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public Set<String> keySet()

**Returns:** `Set<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\SaveBufferMap.html`*
