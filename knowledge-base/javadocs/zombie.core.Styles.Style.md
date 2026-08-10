---
title: zombie.core.Styles.Style
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.Styles
---

# zombie.core.Styles.Style

`public interface Style`

**Kind:** interface · **Package:** zombie.core.Styles

## Description

The default sprite renderer has various different styles of rendering, which
affect what data it uses from the buffer and what GL state that it sets and
resets before and after rendering.

## Methods

### void setupState()

Called to set up GL rendering state before actual drawing is done.

**Returns:** `void`

### void resetState()

Called to reset GL rendering state after actual drawing is done.

**Returns:** `void`

### int getStyleID()

**Returns:** `int`

### AlphaOp getAlphaOp()

**Returns:** `AlphaOp`

### boolean getRenderSprite()

Whether to actually render a sprite when using this Style.

**Returns:** `boolean`

### GeometryData build()

If not rendering a sprite, then we perform a build() to create GeometryData
Later, render() is called, with a vertex offset position and index offset position. Return null if you are going
to handle your own VBOs in setupState().

**Returns:** `GeometryData`

### void render(int vertexOffset,
int indexOffset)

If not rendering a sprite, then render stuff. Our geometry was written to a pre-prepared buffer which is pointed to
already.

**Parameters:**
- `int` `vertexOffset`
- `int` `indexOffset`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Styles\Style.html`*
