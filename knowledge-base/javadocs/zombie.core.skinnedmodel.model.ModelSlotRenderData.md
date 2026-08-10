---
title: zombie.core.skinnedmodel.model.ModelSlotRenderData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ModelSlotRenderData

`public final class ModelSlotRenderData extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.core.skinnedmodel.model.ModelSlotRenderData

## Fields

### public IsoGameCharacter character

### public IsoMovingObject object

### public ModelManager.ModelSlot modelSlot

### public final ModelInstanceRenderDataList modelData

### public ModelInstanceTextureCreator textureCreator

### public AnimationPlayer animPlayer

### public float animPlayerAngle

### public float x

### public float y

### public float z

### public float ambientR

### public float ambientG

### public float ambientB

### public boolean outside

### public float finalScale

### public boolean debugChunkState

### public final org.joml.Matrix4f vehicleTransform

### public boolean inVehicle

### public float inVehicleX

### public float inVehicleY

### public float inVehicleZ

### public float vehicleAngleX

### public float vehicleAngleY

### public float vehicleAngleZ

### public float alpha

### public final ModelInstance.EffectLight[] effectLights

### public float centerOfMassY

### public boolean renderToTexture

### public static Shader solidColor

### public static Shader solidColorStatic

### public float squareDepth

### public final ShaderPropertyBlock properties

## Constructors

### public ModelSlotRenderData()

## Methods

### public boolean IsRenderingToCard()

**Returns:** `boolean`

### public void initModel(ModelManager.ModelSlot modelSlot)

**Parameters:**
- `ModelManager.ModelSlot` `modelSlot`

**Returns:** `void`

### public ModelSlotRenderData init(ModelManager.ModelSlot modelSlot)

**Parameters:**
- `ModelManager.ModelSlot` `modelSlot`

**Returns:** `ModelSlotRenderData`

### public void UpdateCharacter(ShaderPropertyBlock properties,
boolean bIgnoreLighting)

**Parameters:**
- `ShaderPropertyBlock` `properties`
- `boolean` `bIgnoreLighting`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void renderDebug()

**Returns:** `void`

### public void renderToImposterCard(Imposter imposter)

**Parameters:**
- `Imposter` `imposter`

**Returns:** `void`

### public void renderCard(Imposter imposter)

**Parameters:**
- `Imposter` `imposter`

**Returns:** `void`

### public boolean checkReady()

**Returns:** `boolean`

### public boolean canRender()

**Returns:** `boolean`

### public ModelInstanceRenderDataList getModelData()

**Returns:** `ModelInstanceRenderDataList`

### public void performRenderCharacterOutline(boolean bPlayerToMask,
ColorInfo outlineColor,
boolean bOutlineBehindPlayer)

**Parameters:**
- `boolean` `bPlayerToMask`
- `ColorInfo` `outlineColor`
- `boolean` `bOutlineBehindPlayer`

**Returns:** `void`

### public void postRender()

**Returns:** `void`

### public static ModelSlotRenderData alloc()

**Returns:** `ModelSlotRenderData`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ModelSlotRenderData.html`*
