---
title: zombie.core.sprite.SpriteRenderState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.sprite
---

# zombie.core.sprite.SpriteRenderState

`public final class SpriteRenderState extends GenericSpriteRenderState`

**Kind:** class · **Package:** zombie.core.sprite

## Inheritance
- java.lang.Object
- zombie.core.sprite.GenericSpriteRenderState
- zombie.core.sprite.SpriteRenderState

## Fields

### public TextureFBO fbo

### public long time

### public final SpriteRenderStateUI stateUi

### public int playerIndex

### public final PlayerCamera[] playerCamera

### public final float[] playerAmbient

### public float maxZoomLevel

### public float minZoomLevel

### public final float[] zoomLevel

## Constructors

### public SpriteRenderState(int index)

**Parameters:**
- `int` `index`

## Methods

### public void onRendered()

**Returns:** `void`

### public void onReady()

**Returns:** `void`

### public void CheckSpriteSlots()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public GenericSpriteRenderState getActiveState()

Returns either the UI state, or this state. Depends on the value of stateUI.bActive

**Returns:** `GenericSpriteRenderState`

### public void prePopulating()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\sprite\SpriteRenderState.html`*
