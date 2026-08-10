---
title: zombie.util.IPooledObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.util
---

# zombie.util.IPooledObject

`public interface IPooledObject`

**Kind:** interface · **Package:** zombie.util

## Description

The base interface of all pooled objects managed by zombie.util.Pool

## Methods

### Pool.PoolReference getPoolReference()

**Returns:** `Pool.PoolReference`

### void setPool(Pool.PoolReference arg0)

**Parameters:**
- `Pool.PoolReference` `arg0`

**Returns:** `void`

### void release()

**Returns:** `void`

### boolean isFree()

**Returns:** `boolean`

### void setFree(boolean isFree)

**Parameters:**
- `boolean` `isFree`

**Returns:** `void`

### default void onReleased()

**Returns:** `void`

### static <E extends IPooledObject> E[] tryReleaseAndBlank(E[] list)

**Returns:** `E[]`

### static <E extends IPooledObject> E[] releaseAndBlank(E[] list)

**Returns:** `E[]`

### static void release(List<? extends IPooledObject> list)

**Parameters:**
- `List<? extends IPooledObject>` `list`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\IPooledObject.html`*
