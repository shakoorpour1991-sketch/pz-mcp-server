---
title: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableCallbackMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.IAnimationVariableCallbackMap

`public interface IAnimationVariableCallbackMap extends IAnimationVariableMap`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.advancedanimation

## Methods

### default void setVariable(String key,
AnimationVariableSlotCallbackBool.CallbackGetStrongTyped callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackBool.CallbackGetStrongTyped` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackBool.CallbackGetStrongTyped callbackGet,
AnimationVariableSlotCallbackBool.CallbackSetStrongTyped callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackBool.CallbackGetStrongTyped` `callbackGet`
- `AnimationVariableSlotCallbackBool.CallbackSetStrongTyped` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
AnimationVariableSlotCallbackString.CallbackSetStrongTyped callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `AnimationVariableSlotCallbackString.CallbackSetStrongTyped` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
AnimationVariableSlotCallbackFloat.PrimitiveFloatConsumer callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatConsumer` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
AnimationVariableSlotCallbackInt.PrimitiveIntConsumer callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `AnimationVariableSlotCallbackInt.PrimitiveIntConsumer` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
boolean defaultVal,
AnimationVariableSlotCallbackBool.CallbackGetStrongTyped callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `boolean` `defaultVal`
- `AnimationVariableSlotCallbackBool.CallbackGetStrongTyped` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
boolean defaultVal,
AnimationVariableSlotCallbackBool.CallbackGetStrongTyped callbackGet,
AnimationVariableSlotCallbackBool.CallbackSetStrongTyped callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `boolean` `defaultVal`
- `AnimationVariableSlotCallbackBool.CallbackGetStrongTyped` `callbackGet`
- `AnimationVariableSlotCallbackBool.CallbackSetStrongTyped` `callbackSet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
String defaultVal,
AnimationVariableSlotCallbackString.CallbackGetStrongTyped callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `String` `defaultVal`
- `AnimationVariableSlotCallbackString.CallbackGetStrongTyped` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
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

**Returns:** `void`

### default void setVariable(String key,
float defaultVal,
AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `float` `defaultVal`
- `AnimationVariableSlotCallbackFloat.PrimitiveFloatSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
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

**Returns:** `void`

### default void setVariable(String key,
int defaultVal,
AnimationVariableSlotCallbackInt.PrimitiveIntSupplier callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `String` `key`
- `int` `defaultVal`
- `AnimationVariableSlotCallbackInt.PrimitiveIntSupplier` `callbackGet`
- `IAnimationVariableSlotDescriptor` `descriptor`

**Returns:** `void`

### default void setVariable(String key,
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

**Returns:** `void`

### default <EnumType extends Enum<EnumType>> void setVariable(String key,
Class<EnumType> enumTypeClass,
Supplier<EnumType> callbackGet,
IAnimationVariableSlotDescriptor descriptor)

**Returns:** `void`

### default <EnumType extends Enum<EnumType>> void setVariable(String key,
Class<EnumType> enumTypeClass,
Supplier<EnumType> callbackGet,
Consumer<EnumType> callbackSet,
IAnimationVariableSlotDescriptor descriptor)

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\IAnimationVariableCallbackMap.html`*
