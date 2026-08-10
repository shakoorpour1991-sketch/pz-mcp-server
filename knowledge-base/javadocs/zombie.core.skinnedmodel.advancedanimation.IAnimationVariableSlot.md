---
title: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot

`public interface IAnimationVariableSlot`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.advancedanimation

## Description

An Animation Variable Slot
Used to store a variable's key+value pair, and its current type.

## Methods

### String getKey()

This variable's unique key

**Returns:** `String`

### String getValueString()

This variable's value, in String form.

**Returns:** `String`

### float getValueFloat()

This variable's value, as a Float.

**Returns:** `float`

### int getValueInt()

**Returns:** `int`

### boolean getValueBool()

This variable's value, as a Boolean.

**Returns:** `boolean`

### default <EnumType extends Enum<EnumType>> EnumType getEnumValue(EnumType defaultVal)

**Returns:** `EnumType`

### default <EnumType extends Enum<EnumType>> void setEnumValue(EnumType val)

**Returns:** `void`

### void setValue(String val)

Set this variable's value

**Parameters:**
- `String` `val`

**Returns:** `void`

### void setValue(float val)

Set this variable's value

**Parameters:**
- `float` `val`

**Returns:** `void`

### void setValue(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `void`

### void setValue(boolean val)

Set this variable's value

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### AnimationVariableType getType()

This variable's value type

**Returns:** `AnimationVariableType`

### boolean canConvertFrom(String val)

Returns TRUE if this variable slot can accept and/or convert the supplied value object.
Returns FALSE if the conversion would result in a loss of data.

Eg. If a String is given to a Float variable, and the string is not of a numeric format, then the string value
would be lost.

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### void clear()

Clear this variable, its value is set to a null-value. Blank for Strings, 0 for Floats, False for Booleans, etc.

**Returns:** `void`

### default boolean isReadOnly()

Returns TRUE if this variable is not writable. Typically, the value of this variable is specified by an outside
condition, such as whether the character is currently falling, etc.

**Returns:** `boolean`

### default boolean setReadOnly(boolean set)

**Parameters:**
- `boolean` `set`

**Returns:** `boolean`

### default AnimationVariableHandle getHandle()

**Returns:** `AnimationVariableHandle`

### default String getDescription(IAnimationVariableSource owner)

**Parameters:**
- `IAnimationVariableSource` `owner`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\IAnimationVariableSlot.html`*
