---
title: zombie.core.textures.TextureFBO
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TextureFBO

`public final class TextureFBO extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureFBO

## Fields

### public static int lastID

## Constructors

### public TextureFBO(ITexture destination)

**Parameters:**
- `ITexture` `destination`

### public TextureFBO(ITexture destination,
boolean bUseStencil)

**Parameters:**
- `ITexture` `destination`
- `boolean` `bUseStencil`

### public TextureFBO(ITexture destination,
ITexture depth,
boolean bUseStencil)

**Parameters:**
- `ITexture` `destination`
- `ITexture` `depth`
- `boolean` `bUseStencil`

## Methods

### public void swapTexture(ITexture newTex)

**Parameters:**
- `ITexture` `newTex`

**Returns:** `void`

### public void swapTextureAndDepth(ITexture newTex,
ITexture newDepth)

**Parameters:**
- `ITexture` `newTex`
- `ITexture` `newDepth`

**Returns:** `void`

### public void attach(ITexture tex,
int attachment)

**Parameters:**
- `ITexture` `tex`
- `int` `attachment`

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

### public ITexture getDepthTexture()

**Returns:** `ITexture`

### public int getBufferId()

**Returns:** `int`

### public boolean isDestroyed()

**Returns:** `boolean`

### public void startDrawing()

**Returns:** `void`

### public void startDrawing(boolean clear,
boolean clearToAlphaZero)

**Parameters:**
- `boolean` `clear`
- `boolean` `clearToAlphaZero`

**Returns:** `void`

### public void setTexture(Texture tex3)

**Parameters:**
- `Texture` `tex3`

**Returns:** `void`

### public void setTextureAndDepth(Texture tex,
Texture depth)

**Parameters:**
- `Texture` `tex`
- `Texture` `depth`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TextureFBO.html`*
