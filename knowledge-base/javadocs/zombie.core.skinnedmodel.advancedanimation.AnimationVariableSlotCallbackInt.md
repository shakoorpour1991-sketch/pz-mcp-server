---
title: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt

`public final class AnimationVariableSlotCallbackInt extends AnimationVariableSlotCallback<Integer>`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlot
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<Integer>
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt

## Constructors

### public AnimationVariableSlotCallbackInt(String key,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackInt(String key,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
AnimationVariableSlotCallbackInt.PrimitiveIntConsumer callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `AnimationVariableSlotCallbackInt.PrimitiveIntConsumer` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackInt(String key,
int defaultVal,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `int` `defaultVal`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

### public AnimationVariableSlotCallbackInt(String key,
int defaultVal,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
AnimationVariableSlotCallbackInt.PrimitiveIntConsumer callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `int` `defaultVal`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `AnimationVariableSlotCallbackInt.PrimitiveIntConsumer` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

## Methods

### public Integer getValue()

**Returns:** `Integer`

### public Integer getDefaultValue()

**Returns:** `Integer`

### public String getValueString()

Description copied from interface: IAnimationVariableSlot

**Returns:** `String`

### public int getValueInt()

**Returns:** `int`

### public boolean trySetValue(Integer val)

**Parameters:**
- `Integer` `val`

**Returns:** `boolean`

### public boolean trySetValue(int val)

**Parameters:**
- `int` `val`

**Returns:** `boolean`

### public boolean isReadOnly()

Description copied from interface: IAnimationVariableSlot

**Returns:** `boolean`

### public float getValueFloat()

Description copied from interface: IAnimationVariableSlot

**Returns:** `float`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimationVariableSlotCallbackInt.html`*
