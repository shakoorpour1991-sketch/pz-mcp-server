---
title: zombie.util.ReferencedObjectPool
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.ReferencedObjectPool

`public class ReferencedObjectPool<T extends ReferencedObject> extends ObjectPoolCounter`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.network.statistics.counters.ObjectPoolCounter
- zombie.util.ReferencedObjectPool<T>

## Constructors

### public ReferencedObjectPool(Supplier<T> allocator,
String name)

**Parameters:**
- `Supplier<T>` `allocator`
- `String` `name`

## Methods

### public T alloc()

**Returns:** `T`

### public void release(T obj)

**Parameters:**
- `T` `obj`

**Returns:** `void`

### public int size()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\ReferencedObjectPool.html`*
