---
title: zombie.entity.util.SingleThreadPool
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.SingleThreadPool

`public abstract class SingleThreadPool<T> extends Object`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.SingleThreadPool<T>

## Fields

### public final int max

### public int peak

## Constructors

### public SingleThreadPool()

### public SingleThreadPool(int initialCapacity)

**Parameters:**
- `int` `initialCapacity`

### public SingleThreadPool(int initialCapacity,
int max)

**Parameters:**
- `int` `initialCapacity`
- `int` `max`

## Methods

### public T obtain()

**Returns:** `T`

### public void free(T object)

**Parameters:**
- `T` `object`

**Returns:** `void`

### public void fill(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public void freeAll(Array<T> objects)

**Parameters:**
- `Array<T>` `objects`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public int getFree()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\SingleThreadPool.html`*
