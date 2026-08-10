---
title: zombie.core.skinnedmodel.model.ModelOutlines
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ModelOutlines

`public final class ModelOutlines extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.ModelOutlines

## Fields

### public static final ModelOutlines instance

### public TextureFBO fboA

### public TextureFBO fboB

### public TextureFBO fboC

### public boolean dirty

## Constructors

### public ModelOutlines()

## Methods

### public void startFrameMain(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void endFrameMain(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void startFrame(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void checkFBOs()

**Returns:** `void`

### public void setPlayerRenderData(ModelSlotRenderData slotData)

**Parameters:**
- `ModelSlotRenderData` `slotData`

**Returns:** `void`

### public boolean beginRenderOutline(ColorInfo outlineColor,
boolean bBehindPlayer,
boolean bPlayerToMask)

**Parameters:**
- `ColorInfo` `outlineColor`
- `boolean` `bBehindPlayer`
- `boolean` `bPlayerToMask`

**Returns:** `boolean`

### public void endFrame(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void renderDebug()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ModelOutlines.html`*
