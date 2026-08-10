---
title: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString

`public final class AnimationVariableSlotCallbackString extends AnimationVariableSlotCallback<String>`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlot
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<String>
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString

## Constructors

### public AnimationVariableSlotCallbackString(String key,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackString(String key,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
AnimationVariableSlotCallbackString.CallbackSetStrongTyped callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `AnimationVariableSlotCallbackString.CallbackSetStrongTyped` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackString(String key,
String defaultVal,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `String` `defaultVal`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackString(String key,
String defaultVal,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
AnimationVariableSlotCallbackString.CallbackSetStrongTyped callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `String` `defaultVal`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `AnimationVariableSlotCallbackString.CallbackSetStrongTyped` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

## Methods

### public String getDefaultValue()

**Returns:** `String`

### public String getValueString()

Description copied from interface: IAnimationVariableSlot

**Returns:** `String`

### public float getValueFloat()

Description copied from interface: IAnimationVariableSlot

**Returns:** `float`

### public int getValueInt()

**Returns:** `int`

### public boolean getValueBool()

Description copied from interface: IAnimationVariableSlot

**Returns:** `boolean`

### public void setValue(String val)

Description copied from interface: IAnimationVariableSlot

**Parameters:**
- `String` `val`

**Returns:** `void`

### public void setValue(float val)

Description copied from interface: IAnimationVariableSlot

**Parameters:**
- `float` `val`

**Returns:** `void`

### public void setValue(int val)

**Parameters:**
- `int` `val`

**Returns:** `void`

### public void setValue(boolean val)

Description copied from interface: IAnimationVariableSlot

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public AnimationVariableType getType()

Description copied from interface: IAnimationVariableSlot

**Returns:** `AnimationVariableType`

### public boolean canConvertFrom(String val)

Description copied from interface: IAnimationVariableSlot

**Parameters:**
- `String` `val`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimationVariableSlotCallbackString.html`*
