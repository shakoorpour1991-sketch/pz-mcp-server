---
title: zombie.util.PooledObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.PooledObject

`public abstract class PooledObject extends Object implements IPooledObject`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.PooledObject

## Description

The base implementation of IPooledObject
Extend from this class if you wish to take advantage of the Pool's functionality.

If extending from this class is not possible, implement IPooledObject instead.

## Constructors

### public PooledObject()

## Methods

### public final Pool.PoolReference getPoolReference()

**Returns:** `Pool.PoolReference`

### public final void setPool(Pool.PoolReference pool)

**Parameters:**
- `Pool.PoolReference` `pool`

**Returns:** `void`

### public final void release()

**Returns:** `void`

### public final boolean isFree()

**Returns:** `boolean`

### public final void setFree(boolean isFree)

**Parameters:**
- `boolean` `isFree`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\PooledObject.html`*
