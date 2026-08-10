---
title: zombie.core.skinnedmodel.advancedanimation.AnimatedModel
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimatedModel

`public final class AnimatedModel extends AnimationVariableSource implements IAnimatable, IAnimEventCallback, IActionStateChanged, IAnimalVisual, IHumanVisual`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
- zombie.core.skinnedmodel.advancedanimation.AnimatedModel

## Constructors

### public AnimatedModel()

## Methods

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void setVisual(BaseVisual baseVisual)

**Parameters:**
- `BaseVisual` `baseVisual`

**Returns:** `void`

### public BaseVisual getVisual()

**Returns:** `BaseVisual`

### public AnimalVisual getAnimalVisual()

**Returns:** `AnimalVisual`

### public String getAnimalType()

**Returns:** `String`

### public float getAnimalSize()

**Returns:** `float`

### public HumanVisual getHumanVisual()

**Returns:** `HumanVisual`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isFemale()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isSkeleton()

**Returns:** `boolean`

### public void setAnimSetName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setOutfitName(String name,
boolean female,
boolean zombie)

**Parameters:**
- `String` `name`
- `boolean` `female`
- `boolean` `zombie`

**Returns:** `void`

### public void setCharacter(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void setGrappleable(IGrappleable grappleable)

**Parameters:**
- `IGrappleable` `grappleable`

**Returns:** `void`

### public void setSurvivorDesc(SurvivorDesc survivorDesc)

**Parameters:**
- `SurvivorDesc` `survivorDesc`

**Returns:** `void`

### public void setPrimaryHandModelName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setSecondaryHandModelName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setAttachedModelNames(AttachedModelNames attachedModelNames)

**Parameters:**
- `AttachedModelNames` `attachedModelNames`

**Returns:** `void`

### public void setModelData(BaseVisual baseVisual,
ItemVisuals itemVisuals)

**Parameters:**
- `BaseVisual` `baseVisual`
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public void setModelData(BaseVisual baseVisual,
ItemVisuals itemVisuals,
IsoAnimal animal)

**Parameters:**
- `BaseVisual` `baseVisual`
- `ItemVisuals` `itemVisuals`
- `IsoAnimal` `animal`

**Returns:** `void`

### public void setAmbient(ColorInfo ambient,
boolean outside,
boolean room)

**Parameters:**
- `ColorInfo` `ambient`
- `boolean` `outside`
- `boolean` `room`

**Returns:** `void`

### public void setLights(IsoGridSquare.ResultLight[] lights,
float x,
float y,
float z)

**Parameters:**
- `IsoGridSquare.ResultLight[]` `lights`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setState(String state)

**Parameters:**
- `String` `state`

**Returns:** `void`

### public String getState()

**Returns:** `String`

### public void setAngle(Vector2 angle)

**Parameters:**
- `Vector2` `angle`

**Returns:** `void`

### public void setOffset(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setOffsetWhileRendering(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setIsometric(boolean iso)

**Parameters:**
- `boolean` `iso`

**Returns:** `void`

### public boolean isIsometric()

**Returns:** `boolean`

### public void setFlipY(boolean flip)

**Parameters:**
- `boolean` `flip`

**Returns:** `void`

### public void setAlpha(float alpha)

**Parameters:**
- `float` `alpha`

**Returns:** `void`

### public void setTint(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void setTint(ColorInfo tint)

**Parameters:**
- `ColorInfo` `tint`

**Returns:** `void`

### public void setTrackTime(float trackTime)

**Parameters:**
- `float` `trackTime`

**Returns:** `void`

### public void setScale(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

### public float getScale()

**Returns:** `float`

### public void setCullFace(int culLFace)

**Parameters:**
- `int` `culLFace`

**Returns:** `void`

### public void setHighResDepthMultiplier(float m)

**Parameters:**
- `float` `m`

**Returns:** `void`

### public void clothingItemChanged(String itemGuid)

**Parameters:**
- `String` `itemGuid`

**Returns:** `void`

### public boolean isAnimate()

**Returns:** `boolean`

### public void setAnimate(boolean animate)

**Parameters:**
- `boolean` `animate`

**Returns:** `void`

### public void setShowBip01(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean isReadyToRender()

**Returns:** `boolean`

### public int renderMain()

**Returns:** `int`

### public boolean isRendered()

**Returns:** `boolean`

### public void postRender(boolean bRendered)

**Parameters:**
- `boolean` `bRendered`

**Returns:** `void`

### public void setTargetDepth(float targetDepth)

**Parameters:**
- `float` `targetDepth`

**Returns:** `void`

### public void DoRender(IModelCamera camera)

**Parameters:**
- `IModelCamera` `camera`

**Returns:** `void`

### public void DoRender(int x,
int y,
int w,
int h,
float sizeV,
float animPlayerAngle)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `float` `sizeV`
- `float` `animPlayerAngle`

**Returns:** `void`

### public void DoRenderToWorld(float x,
float y,
float z,
float animPlayerAngle)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `animPlayerAngle`

**Returns:** `void`

### public ShadowParams calculateShadowParams(ShadowParams sp,
boolean bRagdoll)

**Parameters:**
- `ShadowParams` `sp`
- `boolean` `bRagdoll`

**Returns:** `ShadowParams`

### public void releaseAnimationPlayer()

**Returns:** `void`

### public void OnAnimEvent(AnimLayer sender,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `AnimLayer` `sender`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public boolean hasAnimationPlayer()

**Returns:** `boolean`

### public IGrappleable getGrappleable()

**Returns:** `IGrappleable`

### public AnimationPlayer getAnimationPlayer()

**Returns:** `AnimationPlayer`

### public void actionStateChanged(ActionContext sender)

**Parameters:**
- `ActionContext` `sender`

**Returns:** `void`

### public AnimationPlayerRecorder getAnimationRecorder()

**Returns:** `AnimationPlayerRecorder`

### public boolean isAnimationRecorderActive()

**Returns:** `boolean`

### public ActionContext getActionContext()

**Returns:** `ActionContext`

### public AdvancedAnimator getAdvancedAnimator()

**Returns:** `AdvancedAnimator`

### public ModelInstance getModelInstance()

**Returns:** `ModelInstance`

### public String GetAnimSetName()

**Returns:** `String`

### public String getUID()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimatedModel.html`*
