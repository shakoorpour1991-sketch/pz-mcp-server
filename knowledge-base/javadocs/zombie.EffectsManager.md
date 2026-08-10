---
title: zombie.EffectsManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.EffectsManager

`public final class EffectsManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.EffectsManager

## Fields

### public static final int MuzzleFlashInverseProbability

## Methods

### public static EffectsManager getInstance()

**Returns:** `EffectsManager`

### public void startMuzzleFlash(IsoGameCharacter isoGameCharacter,
int muzzleFlashInverseProbability)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `int` `muzzleFlashInverseProbability`

**Returns:** `void`

### public void initMuzzleFlashModel(ModelInstanceRenderData instData,
IsoGameCharacter isoGameCharacter,
ModelInstanceRenderDataList modelData,
ModelManager.ModelSlot modelSlot)

**Parameters:**
- `ModelInstanceRenderData` `instData`
- `IsoGameCharacter` `isoGameCharacter`
- `ModelInstanceRenderDataList` `modelData`
- `ModelManager.ModelSlot` `modelSlot`

**Returns:** `void`

### public boolean postRender(IsoGameCharacter isoGameCharacter,
ModelInstance modelInstance,
ModelInstanceRenderData instData,
ModelManager.ModelSlot modelSlot)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `ModelInstance` `modelInstance`
- `ModelInstanceRenderData` `instData`
- `ModelManager.ModelSlot` `modelSlot`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\EffectsManager.html`*
