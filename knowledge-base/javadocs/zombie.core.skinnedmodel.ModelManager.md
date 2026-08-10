---
title: zombie.core.skinnedmodel.ModelManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.ModelManager

`public final class ModelManager extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.ModelManager

## Description

Created by LEMMYATI on 05/01/14.

## Fields

### public static boolean noOpenGL

### public static final ModelManager instance

### public Model maleModel

### public Model femaleModel

### public Model skeletonMaleModel

### public Model skeletonFemaleModel

### public TextureFBO bitmap

### public boolean debugEnableModels

## Constructors

### public ModelManager()

## Methods

### public boolean isCreated()

**Returns:** `boolean`

### public void create()

**Returns:** `void`

### public void loadAdditionalModel(String meshName,
String tex,
boolean bStatic,
String shaderName)

**Parameters:**
- `String` `meshName`
- `String` `tex`
- `boolean` `bStatic`
- `String` `shaderName`

**Returns:** `void`

### public ModelInstance newAdditionalModelInstance(String meshName,
String tex,
IsoGameCharacter chr,
AnimationPlayer animPlayer,
String shaderName)

**Parameters:**
- `String` `meshName`
- `String` `tex`
- `IsoGameCharacter` `chr`
- `AnimationPlayer` `animPlayer`
- `String` `shaderName`

**Returns:** `ModelInstance`

### public void RenderSkyBox(TextureDraw texd,
int shaderID,
int userId,
int apiId,
int bufferId)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `userId`
- `int` `apiId`
- `int` `bufferId`

**Returns:** `void`

### public void RenderWater(TextureDraw texd,
int shaderID,
int playerIndex,
int firstSquare,
int numSquares,
boolean bShore)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `playerIndex`
- `int` `firstSquare`
- `int` `numSquares`
- `boolean` `bShore`

**Returns:** `void`

### public void RenderPuddles(int playerIndex,
int z,
int firstSquare,
int numSquares)

**Parameters:**
- `int` `playerIndex`
- `int` `z`
- `int` `firstSquare`
- `int` `numSquares`

**Returns:** `void`

### public void RenderParticles(TextureDraw texd,
int userId,
int va11)

**Parameters:**
- `TextureDraw` `texd`
- `int` `userId`
- `int` `va11`

**Returns:** `void`

### public void Reset(IsoGameCharacter chr)

Reset
Resets the specified character.

**Parameters:**
- `IsoGameCharacter` `chr` — the character to reset

**Returns:** `void`

### public void reloadAllOutfits()

**Returns:** `void`

### public void Add(IsoGameCharacter chr)

Add the supplied character to the visible render list.

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void dressInRandomOutfit(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public Model getBodyModel(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Model`

### public boolean ContainsChar(IsoGameCharacter chr)

Returns TRUE if the character is currently in the visible render list, and has not been flagged for removal.

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void ResetCharacterEquippedHands(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public boolean shouldHideModel(ItemVisuals itemVisuals,
ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemVisuals` `itemVisuals`
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `boolean`

### public void resetModelInstance(ModelInstance modelInstance,
Object expectedOwner)

**Parameters:**
- `ModelInstance` `modelInstance`
- `Object` `expectedOwner`

**Returns:** `void`

### public void resetModelInstanceRecurse(ModelInstance modelInstance,
Object expectedOwner)

**Parameters:**
- `ModelInstance` `modelInstance`
- `Object` `expectedOwner`

**Returns:** `void`

### public void resetModelInstancesRecurse(ArrayList<ModelInstance> modelInstances,
Object expectedOwner)

**Parameters:**
- `ArrayList<ModelInstance>` `modelInstances`
- `Object` `expectedOwner`

**Returns:** `void`

### public boolean derefModelInstance(ModelInstance modelInstance)

**Parameters:**
- `ModelInstance` `modelInstance`

**Returns:** `boolean`

### public void derefModelInstances(ArrayList<ModelInstance> modelInstances)

**Parameters:**
- `ArrayList<ModelInstance>` `modelInstances`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public ModelManager.ModelSlot getSlot(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `ModelManager.ModelSlot`

### public void Remove(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void Remove(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void ResetNextFrame(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void ResetEquippedNextFrame(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

### public void getSquareLighting(int playerIndex,
IsoMovingObject chr,
ModelInstance.EffectLight[] ret)

**Parameters:**
- `int` `playerIndex`
- `IsoMovingObject` `chr`
- `ModelInstance.EffectLight[]` `ret`

**Returns:** `void`

### public void addVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public ModelInstance addStatic(ModelManager.ModelSlot slot,
String meshName,
String texName,
String boneName,
String shaderName)

**Parameters:**
- `ModelManager.ModelSlot` `slot`
- `String` `meshName`
- `String` `texName`
- `String` `boneName`
- `String` `shaderName`

**Returns:** `ModelInstance`

### public ModelInstance newStaticInstance(ModelManager.ModelSlot slot,
String meshName,
String texName,
String boneName,
String shaderName)

**Parameters:**
- `ModelManager.ModelSlot` `slot`
- `String` `meshName`
- `String` `texName`
- `String` `boneName`
- `String` `shaderName`

**Returns:** `ModelInstance`

### public ModelInstance addStatic(ModelInstance parentInst,
String modelName,
String attachNameSelf,
String attachNameParent)

**Parameters:**
- `ModelInstance` `parentInst`
- `String` `modelName`
- `String` `attachNameSelf`
- `String` `attachNameParent`

**Returns:** `ModelInstance`

### public ModelInstance addStaticForcedTex(ModelInstance parentInst,
String modelName,
String attachNameSelf,
String attachNameParent,
String forcedTex)

**Parameters:**
- `ModelInstance` `parentInst`
- `String` `modelName`
- `String` `attachNameSelf`
- `String` `attachNameParent`
- `String` `forcedTex`

**Returns:** `ModelInstance`

### public int getTextureFlags()

**Returns:** `int`

### public boolean shouldLimitTextureSize(String textureName)

**Parameters:**
- `String` `textureName`

**Returns:** `boolean`

### public void setModelMetaData(String meshName,
String texName,
String shaderName,
boolean bStatic)

**Parameters:**
- `String` `meshName`
- `String` `texName`
- `String` `shaderName`
- `boolean` `bStatic`

**Returns:** `void`

### public void setModelMetaData(String modelId,
String meshName,
String texName,
String shaderName,
boolean bStatic)

**Parameters:**
- `String` `modelId`
- `String` `meshName`
- `String` `texName`
- `String` `shaderName`
- `boolean` `bStatic`

**Returns:** `void`

### public Model loadStaticModel(String meshName,
String tex,
String shaderName)

**Parameters:**
- `String` `meshName`
- `String` `tex`
- `String` `shaderName`

**Returns:** `Model`

### public Model loadModel(String meshName,
String tex,
ModelMesh animationsModel,
String shader)

**Parameters:**
- `String` `meshName`
- `String` `tex`
- `ModelMesh` `animationsModel`
- `String` `shader`

**Returns:** `Model`

### public Model getLoadedModel(String meshName)

**Parameters:**
- `String` `meshName`

**Returns:** `Model`

### public Model getLoadedModel(String meshName,
String tex,
boolean isStatic,
String shaderName)

**Parameters:**
- `String` `meshName`
- `String` `tex`
- `boolean` `isStatic`
- `String` `shaderName`

**Returns:** `Model`

### public Model tryGetLoadedModel(ModelScript modelScript,
boolean logError)

**Parameters:**
- `ModelScript` `modelScript`
- `boolean` `logError`

**Returns:** `Model`

### public Model tryGetLoadedModel(String meshName,
String tex,
boolean isStatic,
String shaderName,
boolean logError)

**Parameters:**
- `String` `meshName`
- `String` `tex`
- `boolean` `isStatic`
- `String` `shaderName`
- `boolean` `logError`

**Returns:** `Model`

### public Model tryGetLoadedModel(String key,
boolean logError)

**Parameters:**
- `String` `key`
- `boolean` `logError`

**Returns:** `Model`

### public void putLoadedModel(String name,
String tex,
boolean isStatic,
String shaderName,
Model model)

**Parameters:**
- `String` `name`
- `String` `tex`
- `boolean` `isStatic`
- `String` `shaderName`
- `Model` `model`

**Returns:** `void`

### public AnimationAsset getAnimationAsset(String name)

**Parameters:**
- `String` `name`

**Returns:** `AnimationAsset`

### public void addAnimationClip(String name,
AnimationClip clip)

**Parameters:**
- `String` `name`
- `AnimationClip` `clip`

**Returns:** `void`

### public AnimationClip getAnimationClip(String name)

**Parameters:**
- `String` `name`

**Returns:** `AnimationClip`

### public Collection<AnimationClip> getAllAnimationClips()

**Returns:** `Collection<AnimationClip>`

### public ModelInstance newInstance(Model model,
IsoGameCharacter chr,
AnimationPlayer player)

**Parameters:**
- `Model` `model`
- `IsoGameCharacter` `chr`
- `AnimationPlayer` `player`

**Returns:** `ModelInstance`

### public boolean isLoadingAnimations()

**Returns:** `boolean`

### public void reloadModelsMatching(String meshName)

**Parameters:**
- `String` `meshName`

**Returns:** `void`

### public void loadModAnimations()

**Returns:** `void`

### public void animationAssetLoaded(AnimationAsset animationAsset)

**Parameters:**
- `AnimationAsset` `animationAsset`

**Returns:** `void`

### public void initAnimationMeshes(boolean bReloading)

**Parameters:**
- `boolean` `bReloading`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\ModelManager.html`*
