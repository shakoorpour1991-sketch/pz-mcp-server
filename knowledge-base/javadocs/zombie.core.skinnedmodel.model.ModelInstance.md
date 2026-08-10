---
title: zombie.core.skinnedmodel.model.ModelInstance
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ModelInstance

`public class ModelInstance extends ReferencedObject`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.util.ReferencedObject
- zombie.core.skinnedmodel.model.ModelInstance

## Description

Created by LEMMYPC on 05/01/14.

## Fields

### public static final float MODEL_LIGHT_MULT_OUTSIDE

### public static final float MODEL_LIGHT_MULT_ROOM

### public Model model

### public AnimationPlayer animPlayer

### public SkinningData data

### public Texture tex

### public ModelInstanceTextureInitializer textureInitializer

### public IsoGameCharacter character

### public IsoMovingObject object

### public float tintR

### public float tintG

### public float tintB

### public ModelInstance parent

### public int parentBone

### public String parentBoneName

### public float hue

### public float depthBias

### public ModelInstance matrixModel

### public SoftwareModelMeshInstance softwareMesh

### public final ArrayList<ModelInstance> sub

### public float targetDepth

### public boolean resetAfterRender

### public int renderRefCount

### public final Object lock

### public ModelScript modelScript

### public String attachmentNameSelf

### public String attachmentNameParent

### public float scale

### public String maskVariableValue

### public ModelInstance.PlayerData[] playerData

## Constructors

### public ModelInstance()

## Methods

### public ModelInstance init(Model model,
IsoGameCharacter character,
AnimationPlayer player)

**Parameters:**
- `Model` `model`
- `IsoGameCharacter` `character`
- `AnimationPlayer` `player`

**Returns:** `ModelInstance`

### public boolean isRendering()

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public void LoadTexture(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void dismember(int bone)

**Parameters:**
- `int` `bone`

**Returns:** `void`

### public void UpdateDir()

**Returns:** `void`

### public void Update(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public void SetForceDir(Vector2 dir)

**Parameters:**
- `Vector2` `dir`

**Returns:** `void`

### public void setInstanceSkip(int c)

**Parameters:**
- `int` `c`

**Returns:** `void`

### public void destroySmartTextures()

**Returns:** `void`

### public void updateLights()

**Returns:** `void`

### public ItemVisual getItemVisual()

**Returns:** `ItemVisual`

### public void setItemVisual(ItemVisual itemVisual)

**Parameters:**
- `ItemVisual` `itemVisual`

**Returns:** `void`

### public void applyModelScriptScale(String modelName)

**Parameters:**
- `String` `modelName`

**Returns:** `void`

### public ModelAttachment getAttachment(int index)

**Parameters:**
- `int` `index`

**Returns:** `ModelAttachment`

### public ModelAttachment getAttachmentById(ModelAttachmentId attachmentId)

**Parameters:**
- `ModelAttachmentId` `attachmentId`

**Returns:** `ModelAttachment`

### public ModelAttachment getAttachmentById(String id)

**Parameters:**
- `String` `id`

**Returns:** `ModelAttachment`

### public org.joml.Matrix4f getAttachmentMatrix(ModelAttachment attachment,
org.joml.Matrix4f out)

**Parameters:**
- `ModelAttachment` `attachment`
- `org.joml.Matrix4f` `out`

**Returns:** `org.joml.Matrix4f`

### public org.joml.Matrix4f getAttachmentMatrix(int index,
org.joml.Matrix4f out)

**Parameters:**
- `int` `index`
- `org.joml.Matrix4f` `out`

**Returns:** `org.joml.Matrix4f`

### public org.joml.Matrix4f getAttachmentMatrixById(String id,
org.joml.Matrix4f out)

**Parameters:**
- `String` `id`
- `org.joml.Matrix4f` `out`

**Returns:** `org.joml.Matrix4f`

### public void setOwner(Object owner)

**Parameters:**
- `Object` `owner`

**Returns:** `void`

### public void clearOwner(Object expectedOwner)

**Parameters:**
- `Object` `expectedOwner`

**Returns:** `void`

### public Object getOwner()

**Returns:** `Object`

### public void setTextureInitializer(ModelInstanceTextureInitializer textureInitializer)

**Parameters:**
- `ModelInstanceTextureInitializer` `textureInitializer`

**Returns:** `void`

### public ModelInstanceTextureInitializer getTextureInitializer()

**Returns:** `ModelInstanceTextureInitializer`

### public boolean hasTextureCreator()

**Returns:** `boolean`

### public void getAttachmentWorldPosition(ModelAttachment attachment,
Vector3 worldPosition,
Vector3 worldDirectionUnnormalized)

**Parameters:**
- `ModelAttachment` `attachment`
- `Vector3` `worldPosition`
- `Vector3` `worldDirectionUnnormalized`

**Returns:** `void`

### public void getAttachmentWorldPosition(ModelAttachment attachment,
float yawAngle,
Vector3 worldPosition,
Vector3 worldDirectionUnnormalized)

**Parameters:**
- `ModelAttachment` `attachment`
- `float` `yawAngle`
- `Vector3` `worldPosition`
- `Vector3` `worldDirectionUnnormalized`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ModelInstance.html`*
