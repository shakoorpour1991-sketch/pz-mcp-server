---
title: zombie.core.sprite.SpriteRendererStates
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.sprite
---

# zombie.core.sprite.SpriteRendererStates

`public final class SpriteRendererStates extends Object`

**Kind:** class · **Package:** zombie.core.sprite

## Inheritance
- java.lang.Object
- zombie.core.sprite.SpriteRendererStates

## Constructors

### public SpriteRendererStates()

## Methods

### public SpriteRenderState getPopulating()

**Returns:** `SpriteRenderState`

### public GenericSpriteRenderState getPopulatingActiveState()

Returns either the UI state, or populating state. Depends on the value of its stateUI.bActive

**Returns:** `GenericSpriteRenderState`

### public void setPopulating(SpriteRenderState populating)

**Parameters:**
- `SpriteRenderState` `populating`

**Returns:** `void`

### public SpriteRenderState getReady()

**Returns:** `SpriteRenderState`

### public void setReady(SpriteRenderState ready)

**Parameters:**
- `SpriteRenderState` `ready`

**Returns:** `void`

### public SpriteRenderState getRendering()

**Returns:** `SpriteRenderState`

### public GenericSpriteRenderState getRenderingActiveState()

Returns either the UI state, or rendering state. Depends on the value of its stateUI.bActive

**Returns:** `GenericSpriteRenderState`

### public void setRendering(SpriteRenderState rendering)

**Parameters:**
- `SpriteRenderState` `rendering`

**Returns:** `void`

### public SpriteRenderState getRendered()

**Returns:** `SpriteRenderState`

### public void setRendered(SpriteRenderState rendered)

**Parameters:**
- `SpriteRenderState` `rendered`

**Returns:** `void`

### public void movePopulatingToReady()

**Returns:** `void`

### public void moveReadyToRendering()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\sprite\SpriteRendererStates.html`*
