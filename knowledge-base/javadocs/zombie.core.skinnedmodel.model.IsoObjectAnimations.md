---
title: zombie.core.skinnedmodel.model.IsoObjectAnimations
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.IsoObjectAnimations

`public final class IsoObjectAnimations extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.IsoObjectAnimations

## Constructors

### public IsoObjectAnimations()

## Methods

### public static IsoObjectAnimations getInstance()

**Returns:** `IsoObjectAnimations`

### public void addObject(IsoObject object,
SpriteModel spriteModel,
String animationName)

**Parameters:**
- `IsoObject` `object`
- `SpriteModel` `spriteModel`
- `String` `animationName`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public AnimationPlayer getAnimationPlayer(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `AnimationPlayer`

### public org.joml.Matrix4f getAttachmentTransform(IsoObject object,
String attachmentName,
org.joml.Matrix4f xfrm)

**Parameters:**
- `IsoObject` `object`
- `String` `attachmentName`
- `org.joml.Matrix4f` `xfrm`

**Returns:** `org.joml.Matrix4f`

### public FloatBuffer getMatrixPaletteForFrame(Model model,
String animation,
float time)

**Parameters:**
- `Model` `model`
- `String` `animation`
- `float` `time`

**Returns:** `FloatBuffer`

### public gnu.trove.list.array.TFloatArrayList getBonesForFrame(Model model,
String animation,
float time)

**Parameters:**
- `Model` `model`
- `String` `animation`
- `float` `time`

**Returns:** `gnu.trove.list.array.TFloatArrayList`

### public void addDancingDoor(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void removeDancingDoor(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\IsoObjectAnimations.html`*
