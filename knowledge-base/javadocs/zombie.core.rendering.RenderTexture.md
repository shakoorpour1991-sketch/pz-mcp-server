---
title: zombie.core.rendering.RenderTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.rendering
---

# zombie.core.rendering.RenderTexture

`public class RenderTexture extends RenderTarget`

**Kind:** class · **Package:** zombie.core.rendering

## Inheritance
- java.lang.Object
- zombie.core.rendering.RenderTarget
- zombie.core.rendering.RenderTexture

## Fields

### public int colour

### public int depth

### public int stencil

### public int width

### public int height

### public int length

### public int colourFormat

### public int depthFormat

### public boolean depthAsTexture

### public int wrappingMode

## Constructors

### public RenderTexture(String name)

**Parameters:**
- `String` `name`

### public RenderTexture(RenderTexture.Descriptor desc)

**Parameters:**
- `RenderTexture.Descriptor` `desc`

## Methods

### public int GetWidth()

**Returns:** `int`

### public int GetHeight()

**Returns:** `int`

### public void BindRead()

**Returns:** `void`

### public void BindDraw()

**Returns:** `void`

### public void BindTexture()

**Returns:** `void`

### public void BindDepth()

**Returns:** `void`

### public void BindStencil()

**Returns:** `void`

### public void CopyTexture(RenderTarget dest)

**Parameters:**
- `RenderTarget` `dest`

**Returns:** `void`

### public void CopyTexture(RenderTarget dest,
org.lwjgl.util.Rectangle srcRect,
org.lwjgl.util.Rectangle dstRect)

**Parameters:**
- `RenderTarget` `dest`
- `org.lwjgl.util.Rectangle` `srcRect`
- `org.lwjgl.util.Rectangle` `dstRect`

**Returns:** `void`

### public RenderTarget Recreate()

**Returns:** `RenderTarget`

### public static RenderTexture GetTarget(String name,
boolean createIfNull)

**Parameters:**
- `String` `name`
- `boolean` `createIfNull`

**Returns:** `RenderTexture`

### public static RenderTexture GetTexture(RenderTexture.Descriptor desc)

**Parameters:**
- `RenderTexture.Descriptor` `desc`

**Returns:** `RenderTexture`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\rendering\RenderTexture.html`*
