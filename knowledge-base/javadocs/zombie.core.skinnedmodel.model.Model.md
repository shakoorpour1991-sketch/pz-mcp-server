---
title: zombie.core.skinnedmodel.model.Model
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.Model

`public final class Model extends Asset`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.skinnedmodel.model.Model

## Fields

### public static final AssetType ASSET_TYPE

### public String name

### public final ModelMesh mesh

### public Shader effect

### public Object tag

### public boolean isStatic

### public Texture tex

### public SoftwareModelMesh softwareMesh

### public static final FloatBuffer m_staticReusableFloatBuffer

### public static gnu.trove.map.hash.TObjectIntHashMap<Model> modelDrawCounts

### public static int instancingThreshold

### public static final Color[] debugDrawColours

### public Model.ModelAssetParams assetParams

## Constructors

### public Model(AssetPath path,
AssetManager manager,
Model.ModelAssetParams params)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `manager`
- `Model.ModelAssetParams` `params`

## Methods

### public static void vectorToWorldCoords(float x,
float y,
float z,
float angle,
Vector3 vec)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `angle`
- `Vector3` `vec`

**Returns:** `void`

### public static void boneToWorldCoords(AnimationPlayer animPlayer,
float x,
float y,
float z,
float animalSize,
int boneIndex,
Vector3 vec)

**Parameters:**
- `AnimationPlayer` `animPlayer`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `animalSize`
- `int` `boneIndex`
- `Vector3` `vec`

**Returns:** `void`

### public static void vectorToWorldCoords(IsoGameCharacter character,
Vector3 vec)

**Parameters:**
- `IsoGameCharacter` `character`
- `Vector3` `vec`

**Returns:** `void`

### public static void boneToWorldCoords(IsoGameCharacter character,
int boneIndex,
Vector3 vec)

**Parameters:**
- `IsoGameCharacter` `character`
- `int` `boneIndex`
- `Vector3` `vec`

**Returns:** `void`

### public static void boneToWorldCoords(IsoGameCharacter character,
SkinningBone bone,
Vector3 vec)

**Parameters:**
- `IsoGameCharacter` `character`
- `SkinningBone` `bone`
- `Vector3` `vec`

**Returns:** `void`

### public static void boneZDirectionToWorldCoords(IsoGameCharacter character,
int boneIndex,
Vector3 vec,
float length)

**Parameters:**
- `IsoGameCharacter` `character`
- `int` `boneIndex`
- `Vector3` `vec`
- `float` `length`

**Returns:** `void`

### public static void boneZDirectionToWorldCoords(IsoGameCharacter character,
SkinningBone bone,
Vector3 vec,
float length)

**Parameters:**
- `IsoGameCharacter` `character`
- `SkinningBone` `bone`
- `Vector3` `vec`
- `float` `length`

**Returns:** `void`

### public static void boneYDirectionToWorldCoords(IsoGameCharacter character,
int boneIndex,
Vector3 vec,
float length)

**Parameters:**
- `IsoGameCharacter` `character`
- `int` `boneIndex`
- `Vector3` `vec`
- `float` `length`

**Returns:** `void`

### public static void vectorToWorldCoords(ModelSlotRenderData slotData,
Vector3 vec)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `Vector3` `vec`

**Returns:** `void`

### public static void boneToWorldCoords(ModelSlotRenderData slotData,
int boneIndex,
Vector3 vec)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `int` `boneIndex`
- `Vector3` `vec`

**Returns:** `void`

### public static void boneToWorldCoords(ModelSlotRenderData slotData,
SkinningBone bone,
Vector3 vec)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `SkinningBone` `bone`
- `Vector3` `vec`

**Returns:** `void`

### public static void worldToModel(IsoGameCharacter isoGameCharacter,
Vector3 vector3)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `Vector3` `vector3`

**Returns:** `void`

### public static void CharacterModelCameraBegin(ModelSlotRenderData slotData)

**Parameters:**
- `ModelSlotRenderData` `slotData`

**Returns:** `void`

### public static void CharacterModelCameraEnd()

**Returns:** `void`

### public static void SwapInstancedBasic()

**Returns:** `void`

### public void EnsureEffect()

**Returns:** `void`

### public void DrawChar(ModelSlotRenderData slotData,
ModelInstanceRenderData instData)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `ModelInstanceRenderData` `instData`

**Returns:** `void`

### public static void drawBoneMtx(org.lwjgl.util.vector.Matrix4f boneMtx)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `boneMtx`

**Returns:** `void`

### public void debugDrawLightSource(IsoLightSource ls,
float cx,
float cy,
float cz,
float radians)

**Parameters:**
- `IsoLightSource` `ls`
- `float` `cx`
- `float` `cy`
- `float` `cz`
- `float` `radians`

**Returns:** `void`

### public static void debugDrawLightSource(float lx,
float ly,
float lz,
float cx,
float cy,
float cz,
float radians)

**Parameters:**
- `float` `lx`
- `float` `ly`
- `float` `lz`
- `float` `cx`
- `float` `cy`
- `float` `cz`
- `float` `radians`

**Returns:** `void`

### public void DrawVehicle(ModelSlotRenderData slotData,
ModelInstanceRenderData instData)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `ModelInstanceRenderData` `instData`

**Returns:** `void`

### public static void debugDrawAxis(float x,
float y,
float z,
boolean flipX,
boolean flipY,
boolean flipZ,
float length,
float thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `flipX`
- `boolean` `flipY`
- `boolean` `flipZ`
- `float` `length`
- `float` `thickness`

**Returns:** `void`

### public static void debugDrawAxis(float x,
float y,
float z,
float length,
float thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `length`
- `float` `thickness`

**Returns:** `void`

### public void setLights(ModelSlotRenderData slotData,
int lightCount)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `int` `lightCount`

**Returns:** `void`

### public void setLightsInst(ModelSlotRenderData slotData,
int lightCount)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `int` `lightCount`

**Returns:** `void`

### public void CreateShader(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public AssetType getType()

**Returns:** `AssetType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\Model.html`*
