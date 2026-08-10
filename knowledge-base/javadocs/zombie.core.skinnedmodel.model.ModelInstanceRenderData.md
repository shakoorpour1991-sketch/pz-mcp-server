---
title: zombie.core.skinnedmodel.model.ModelInstanceRenderData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ModelInstanceRenderData

`public final class ModelInstanceRenderData extends AnimatedModel.AnimatedModelInstanceRenderData`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimatedModel.AnimatedModelInstanceRenderData
- zombie.core.skinnedmodel.model.ModelInstanceRenderData

## Fields

### public static boolean invertAttachmentSelfTransform

### public float depthBias

### public float hue

### public float tintR

### public float tintG

### public float tintB

### public int parentBone

### public SoftwareModelMeshInstance softwareMesh

## Constructors

### public ModelInstanceRenderData()

## Methods

### public ModelInstanceRenderData init()

**Returns:** `ModelInstanceRenderData`

### public void initModel(ModelInstance modelInstance,
AnimatedModel.AnimatedModelInstanceRenderData parent)

**Parameters:**
- `ModelInstance` `modelInstance`
- `AnimatedModel.AnimatedModelInstanceRenderData` `parent`

**Returns:** `void`

### public void UpdateCharacter(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public void renderDebug()

**Returns:** `void`

### public void RenderCharacter(ModelSlotRenderData slotData)

**Parameters:**
- `ModelSlotRenderData` `slotData`

**Returns:** `void`

### public void RenderVehicle(ModelSlotRenderData slotData)

**Parameters:**
- `ModelSlotRenderData` `slotData`

**Returns:** `void`

### public static org.joml.Matrix4f makeAttachmentTransform(ModelAttachment attachment,
org.joml.Matrix4f attachmentXfrm)

**Parameters:**
- `ModelAttachment` `attachment`
- `org.joml.Matrix4f` `attachmentXfrm`

**Returns:** `org.joml.Matrix4f`

### public static void applyBoneTransform(ModelInstance parentInstance,
String boneName,
org.joml.Matrix4f transform)

**Parameters:**
- `ModelInstance` `parentInstance`
- `String` `boneName`
- `org.joml.Matrix4f` `transform`

**Returns:** `void`

### public static void makeBoneTransform(AnimationPlayer animationPlayer,
String boneName,
org.joml.Matrix4f transform)

**Parameters:**
- `AnimationPlayer` `animationPlayer`
- `String` `boneName`
- `org.joml.Matrix4f` `transform`

**Returns:** `void`

### public static void makeBoneTransform2(AnimationPlayer animationPlayer,
String boneName,
org.joml.Matrix4f transform)

**Parameters:**
- `AnimationPlayer` `animationPlayer`
- `String` `boneName`
- `org.joml.Matrix4f` `transform`

**Returns:** `void`

### public static org.joml.Matrix4f preMultiplyMeshTransform(org.joml.Matrix4f transform,
ModelMesh mesh)

**Parameters:**
- `org.joml.Matrix4f` `transform`
- `ModelMesh` `mesh`

**Returns:** `org.joml.Matrix4f`

### public static org.joml.Matrix4f postMultiplyMeshTransform(org.joml.Matrix4f transform,
ModelMesh mesh)

**Parameters:**
- `org.joml.Matrix4f` `transform`
- `ModelMesh` `mesh`

**Returns:** `org.joml.Matrix4f`

### public static ModelInstanceRenderData alloc()

**Returns:** `ModelInstanceRenderData`

### public static void release(ArrayList<ModelInstanceRenderData> objs)

**Parameters:**
- `ArrayList<ModelInstanceRenderData>` `objs`

**Returns:** `void`

### public static boolean release(ModelInstanceRenderData data)

**Parameters:**
- `ModelInstanceRenderData` `data`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ModelInstanceRenderData.html`*
