---
title: zombie.core.skinnedmodel.animation.debug.AnimationVariableRecordingFrame
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation.debug
---

# zombie.core.skinnedmodel.animation.debug.AnimationVariableRecordingFrame

`public final class AnimationVariableRecordingFrame extends GenericNameValueRecordingFrame`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation.debug

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.debug.GenericNameValueRecordingFrame
- zombie.core.skinnedmodel.animation.debug.AnimationVariableRecordingFrame

## Constructors

### public AnimationVariableRecordingFrame(String fileKey)

**Parameters:**
- `String` `fileKey`

## Methods

### public void logVariables(IAnimationVariableSource varSource)

**Parameters:**
- `IAnimationVariableSource` `varSource`

**Returns:** `void`

### public void logVariable(IAnimationVariableSlot entry)

**Parameters:**
- `IAnimationVariableSlot` `entry`

**Returns:** `void`

### public void logVariable(String name,
String value)

**Parameters:**
- `String` `name`
- `String` `value`

**Returns:** `void`

### public void logVariable(String name,
float value)

**Parameters:**
- `String` `name`
- `float` `value`

**Returns:** `void`

### public void logVariable(String name,
int value)

**Parameters:**
- `String` `name`
- `int` `value`

**Returns:** `void`

### public void logVariable(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

**Returns:** `void`

### public String getValueAt(int i)

**Parameters:**
- `int` `i`

**Returns:** `String`

### public void reset()

**Returns:** `void`

### public void logDeferredMovement(Vector2 deferredMovement,
Vector3 deferredMovementFromRagdoll)

**Parameters:**
- `Vector2` `deferredMovement`
- `Vector3` `deferredMovementFromRagdoll`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\debug\AnimationVariableRecordingFrame.html`*
