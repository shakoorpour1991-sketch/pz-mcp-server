---
title: zombie.core.skinnedmodel.model.ModelMesh
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ModelMesh

`public final class ModelMesh extends Asset`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.skinnedmodel.model.ModelMesh

## Description

Created by LEMMYATI on 03/01/14.

## Fields

### public VertexBufferObject vb

### public final org.joml.Vector3f minXyz

### public final org.joml.Vector3f maxXyz

### public final HashMap<String, AnimationClip> meshAnimationClips

### public SkinningData skinningData

### public SoftwareModelMesh softwareMesh

### public ModelMesh.MeshAssetParams assetParams

### public org.joml.Matrix4f transform

### public boolean hasVbo

### public ModelMesh animationsMesh

### public String postProcess

### public int modificationCount

### public String fullPath

### public static final AssetType ASSET_TYPE

## Constructors

### public ModelMesh(AssetPath path,
AssetManager manager,
ModelMesh.MeshAssetParams params)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `manager`
- `ModelMesh.MeshAssetParams` `params`

## Methods

### public void SetVertexBuffer(VertexBufferObject vb)

**Parameters:**
- `VertexBufferObject` `vb`

**Returns:** `void`

### public void Draw(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public void DrawInstanced(Shader shader,
int instanceCount)

**Parameters:**
- `Shader` `shader`
- `int` `instanceCount`

**Returns:** `void`

### public void onBeforeReady()

**Returns:** `void`

### public boolean isReady()

**Returns:** `boolean`

### public void setAssetParams(AssetManager.AssetParams params)

**Parameters:**
- `AssetManager.AssetParams` `params`

**Returns:** `void`

### public AssetType getType()

**Returns:** `AssetType`

### public void clear()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ModelMesh.html`*
