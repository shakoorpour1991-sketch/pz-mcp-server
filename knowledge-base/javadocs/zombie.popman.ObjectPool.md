---
title: zombie.popman.ObjectPool
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.ObjectPool

`public class ObjectPool<T> extends ObjectPoolCounter`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.network.statistics.counters.ObjectPoolCounter
- zombie.popman.ObjectPool<T>

## Constructors

### public ObjectPool(String name)

**Parameters:**
- `String` `name`

### public ObjectPool(ObjectPool.Allocator<T> alloc,
String name)

**Parameters:**
- `ObjectPool.Allocator<T>` `alloc`
- `String` `name`

## Methods

### public T alloc()

**Returns:** `T`

### public void release(T obj)

**Parameters:**
- `T` `obj`

**Returns:** `void`

### public void release(List<T> objs)

**Parameters:**
- `List<T>` `objs`

**Returns:** `void`

### public void release(Iterable<T> objs)

**Parameters:**
- `Iterable<T>` `objs`

**Returns:** `void`

### public void release(T[] objs)

**Parameters:**
- `T[]` `objs`

**Returns:** `void`

### public void releaseAll(List<T> objs)

**Parameters:**
- `List<T>` `objs`

**Returns:** `void`

### public void releaseAll(Collection<T> objs)

**Parameters:**
- `Collection<T>` `objs`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void forEach(Consumer<T> consumer)

**Parameters:**
- `Consumer<T>` `consumer`

**Returns:** `void`

### public int size()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\ObjectPool.html`*
