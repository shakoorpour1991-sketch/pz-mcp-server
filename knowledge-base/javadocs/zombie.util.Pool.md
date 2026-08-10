---
title: zombie.util.Pool
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.Pool

`public final class Pool<PO extends IPooledObject> extends Object`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.Pool<PO>

## Description

A thread-safe object pool. Useful for re-using memory without it falling into the garbage collector.

Beware: Once an item has been allocated, it MUST be released at some point by calling its release() function.
If not, the item's memory will never be recycled, and it will be considered a memory leak.

## Constructors

### public Pool(Supplier<PO> allocator)

**Parameters:**
- `Supplier<PO>` `allocator`

## Methods

### public PoolCounter getMonitoringPoolCounter()

**Returns:** `PoolCounter`

### public void setMonitoringPoolCounter(PoolCounter foundCounter)

**Parameters:**
- `PoolCounter` `foundCounter`

**Returns:** `void`

### public ThreadLocal<Pool.PoolStacks> getPoolStacks()

**Returns:** `ThreadLocal<Pool.PoolStacks>`

### public int getID()

**Returns:** `int`

### public int hashCode()

**Returns:** `int`

### public PO alloc()

**Returns:** `PO`

### public void release(IPooledObject item)

**Parameters:**
- `IPooledObject` `item`

**Returns:** `void`

### public static <E> E tryRelease(E obj)

**Returns:** `E`

### public static <E extends IPooledObject> E tryRelease(E pooledObject)

**Returns:** `E`

### public static <E extends IPooledObject> E[] tryRelease(E[] objArray)

**Returns:** `E[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\Pool.html`*
