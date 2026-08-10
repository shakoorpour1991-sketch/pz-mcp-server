---
title: zombie.core.textures.TextureFBODepth
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TextureFBODepth

`public class TextureFBODepth extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureFBODepth

## Fields

### public static int lastID

## Constructors

### public TextureFBODepth(ITexture destination)

**Parameters:**
- `ITexture` `destination`

## Methods

### public void swapTexture(ITexture newTex)

**Parameters:**
- `ITexture` `newTex`

**Returns:** `void`

### public static IGLFramebufferObject getFuncs()

**Returns:** `IGLFramebufferObject`

### public void blitDepth(float x,
float y,
float w,
float h)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `w`
- `float` `h`

**Returns:** `void`

### public static boolean checkFBOSupport()

**Returns:** `boolean`

### public void destroy()

**Returns:** `void`

### public void destroyLeaveTexture()

**Returns:** `void`

### public void releaseTexture()

**Returns:** `void`

### public void endDrawing()

**Returns:** `void`

### public ITexture getTexture()

**Returns:** `ITexture`

### public int getBufferId()

**Returns:** `int`

### public boolean isDestroyed()

**Returns:** `boolean`

### public void startDrawing()

**Returns:** `void`

### public void startDrawing(boolean clear)

**Parameters:**
- `boolean` `clear`

**Returns:** `void`

### public void setTexture(Texture tex3)

**Parameters:**
- `Texture` `tex3`

**Returns:** `void`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public static int getCurrentID()

**Returns:** `int`

### public static void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TextureFBODepth.html`*
