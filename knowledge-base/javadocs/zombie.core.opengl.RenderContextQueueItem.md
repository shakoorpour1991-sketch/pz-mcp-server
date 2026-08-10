---
title: zombie.core.opengl.RenderContextQueueItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.RenderContextQueueItem

`public final class RenderContextQueueItem extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.RenderContextQueueItem

## Methods

### public static RenderContextQueueItem alloc(Runnable runnable)

**Parameters:**
- `Runnable` `runnable`

**Returns:** `RenderContextQueueItem`

### public void waitUntilFinished(BooleanSupplier waitCallback)
throws InterruptedException

**Parameters:**
- `BooleanSupplier` `waitCallback`

**Returns:** `void`

### public boolean isFinished()

**Returns:** `boolean`

### public void setWaiting()

**Returns:** `void`

### public boolean isWaiting()

**Returns:** `boolean`

### public void invoke()

**Returns:** `void`

### public Throwable getThrown()

**Returns:** `Throwable`

### public void notifyWaitingListeners()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\RenderContextQueueItem.html`*
