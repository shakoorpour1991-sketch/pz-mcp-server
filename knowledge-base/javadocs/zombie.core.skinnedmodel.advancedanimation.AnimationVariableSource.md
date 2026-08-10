---
title: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource

`public class AnimationVariableSource extends Object implements IAnimationVariableMap, IAnimationVariableCallbackMap`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource

## Constructors

### public AnimationVariableSource()

## Methods

### public IAnimationVariableSlot getVariable(AnimationVariableHandle handle)

Returns the specified variable slot. Or NULL if not found.

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `IAnimationVariableSlot`

### public boolean isEmpty()

**Returns:** `boolean`

### public void setVariable(IAnimationVariableSlot var)

Description copied from interface: IAnimationVariableMap

**Parameters:**
- `IAnimationVariableSlot` `var`

**Returns:** `void`

### public IAnimationVariableSlot setVariable(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `IAnimationVariableSlot`

### public IAnimationVariableSlot setVariable(String key,
boolean value)

**Parameters:**
- `String` `key`
- `boolean` `value`

**Returns:** `IAnimationVariableSlot`

### public IAnimationVariableSlot setVariable(String key,
float value)

**Parameters:**
- `String` `key`
- `float` `value`

**Returns:** `IAnimationVariableSlot`

### public IAnimationVariableSlot setVariable(AnimationVariableHandle handle,
boolean value)

**Parameters:**
- `AnimationVariableHandle` `handle`
- `boolean` `value`

**Returns:** `IAnimationVariableSlot`

### public <EnumType extends Enum<EnumType>>
IAnimationVariableSlot setVariableEnum(String key,
EnumType value)

**Returns:** `IAnimationVariableSlot`

### public void clearVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public void clearVariables()

**Returns:** `void`

### public void removeAllVariables()

**Returns:** `void`

### public Iterable<IAnimationVariableSlot> getGameVariables()

Returns all Game variables.

**Returns:** `Iterable<IAnimationVariableSlot>`

### public boolean isVariable(String name,
String val)

Compares (ignoring case) the value of the specified variable.
Returns TRUE if they match.

**Parameters:**
- `String` `name`
- `String` `val`

**Returns:** `boolean`

### public boolean containsVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimationVariableSource.html`*
