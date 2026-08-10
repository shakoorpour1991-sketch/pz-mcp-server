---
title: zombie.util.AutoCloseablePool
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.AutoCloseablePool

`public class AutoCloseablePool extends PooledObject implements AutoCloseable`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.util.AutoCloseablePool

## Methods

### public static AutoCloseablePool alloc()

**Returns:** `AutoCloseablePool`

### public void onReleased()

**Returns:** `void`

### public void close()

**Returns:** `void`

### public <T> T alloc(Supplier<T> alloc,
Invokers.Params1.ICallback<T> release)

**Returns:** `T`

### public Vector2 allocVector2()

**Returns:** `Vector2`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\AutoCloseablePool.html`*
