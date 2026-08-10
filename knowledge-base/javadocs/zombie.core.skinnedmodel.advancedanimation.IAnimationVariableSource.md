---
title: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource

`public interface IAnimationVariableSource`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.advancedanimation

## Methods

### IAnimationVariableSlot getVariable(AnimationVariableHandle handle)

Returns the specified variable slot. Or NULL if not found.

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `IAnimationVariableSlot`

### default IAnimationVariableSlot getVariable(String key)

Returns the specified variable slot. Or NULL if not found.

**Parameters:**
- `String` `key`

**Returns:** `IAnimationVariableSlot`

### default String getVariableString(String key)

Returns the specified variable. Or an empty string "" if not found.

**Parameters:**
- `String` `key`

**Returns:** `String`

### default float getVariableFloat(String key,
float defaultVal)

Returns the specified variable, as a float.
Attempts to convert the string variable to a float.
If that fails, or if variable not found, returns the defaultValue

**Parameters:**
- `String` `key`
- `float` `defaultVal`

**Returns:** `float`

### default boolean getVariableBoolean(String key)

Returns the specified variable, as a boolean.
Attempts to convert the string variable to a boolean.
If that fails, or if variable not found, returns FALSE

**Parameters:**
- `String` `key`

**Returns:** `boolean`

### default boolean getVariableBoolean(String key,
boolean defaultVal)

Returns the specified variable, as a boolean.
Attempts to convert the string variable to a boolean.
If that fails, or if variable not found, returns defaultVal

**Parameters:**
- `String` `key`
- `boolean` `defaultVal`

**Returns:** `boolean`

### default boolean getVariableBoolean(AnimationVariableHandle handle)

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `boolean`

### default <EnumType extends Enum<EnumType>> EnumType getVariableEnum(String key,
EnumType defaultVal)

**Returns:** `EnumType`

### Iterable<IAnimationVariableSlot> getGameVariables()

Returns all Game variables.

**Returns:** `Iterable<IAnimationVariableSlot>`

### boolean isVariable(String name,
String val)

Compares (ignoring case) the value of the specified variable.
Returns TRUE if they match.

**Parameters:**
- `String` `name`
- `String` `val`

**Returns:** `boolean`

### boolean containsVariable(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### default IAnimationVariableSource getSubVariableSource(String subVariableSourceName)

**Parameters:**
- `String` `subVariableSourceName`

**Returns:** `IAnimationVariableSource`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\IAnimationVariableSource.html`*
