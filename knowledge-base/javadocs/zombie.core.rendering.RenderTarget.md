---
title: zombie.core.rendering.RenderTarget
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.rendering
---

# zombie.core.rendering.RenderTarget

`public abstract class RenderTarget extends Object`

**Kind:** class · **Package:** zombie.core.rendering

## Inheritance
- java.lang.Object
- zombie.core.rendering.RenderTarget

## Fields

### public final String name

### public int buffer

## Methods

### public String toString()

**Returns:** `String`

### public static RenderTarget GetTarget(String name)

**Parameters:**
- `String` `name`

**Returns:** `RenderTarget`

### public static void UnbindTarget()

**Returns:** `void`

### public final RenderTarget Create()

**Returns:** `RenderTarget`

### public final void Destroy()

**Returns:** `void`

### public void BindRead()

**Returns:** `void`

### public void BindDraw()

**Returns:** `void`

### public abstract int GetWidth()

**Returns:** `int`

### public abstract int GetHeight()

**Returns:** `int`

### public abstract void BindTexture()

**Returns:** `void`

### public void Blit(RenderTarget dest)

**Parameters:**
- `RenderTarget` `dest`

**Returns:** `void`

### public void Blit(RenderTarget dest,
Shader shader)

**Parameters:**
- `RenderTarget` `dest`
- `Shader` `shader`

**Returns:** `void`

### public static void DrawFullScreenTri()

**Returns:** `void`

### public static void DrawFullScreenQuad()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\rendering\RenderTarget.html`*
