---
title: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat

`public final class AnimationVariableSlotCallbackFloat extends AnimationVariableSlotCallback<Float>`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlot
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<Float>
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat

## Constructors

### public AnimationVariableSlotCallbackFloat(String key,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackFloat(String key,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
AnimationVariableSlotCallbackFloat.PrimitiveFloatConsumer callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatConsumer` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackFloat(String key,
float defaultVal,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `float` `defaultVal`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackFloat(String key,
float defaultVal,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
AnimationVariableSlotCallbackFloat.PrimitiveFloatConsumer callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `float` `defaultVal`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatConsumer` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

## Methods

### public Float getValue()

**Returns:** `Float`

### public Float getDefaultValue()

**Returns:** `Float`

### public boolean trySetValue(Float val)

**Parameters:**
- `Float` `val`

**Returns:** `boolean`

### public boolean trySetValue(float val)

**Parameters:**
- `float` `val`

**Returns:** `boolean`

### public boolean isReadOnly()

Description copied from interface: IAnimationVariableSlot

**Returns:** `boolean`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimationVariableSlotCallbackFloat.html`*
