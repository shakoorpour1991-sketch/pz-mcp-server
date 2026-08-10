---
title: zombie.core.skinnedmodel.advancedanimation.AbstractAnimationVariableSlotEnum
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AbstractAnimationVariableSlotEnum

`public abstract class AbstractAnimationVariableSlotEnum<EnumType extends Enum<EnumType>> extends AnimationVariableSlot`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlot
- zombie.core.skinnedmodel.advancedanimation.AbstractAnimationVariableSlotEnum<EnumType>

## Constructors

### public AbstractAnimationVariableSlotEnum(Class<EnumType> enumTypeClass,
String key,
EnumType defaultVal,
IAnimationVariableSlotDescriptor descriptor)

**Parameters:**
- `Class<EnumType>` `enumTypeClass`
- `String` `key`
- `EnumType` `defaultVal`
- `IAnimationVariableSlotDescriptor` `descriptor`

## Methods

### public Class<EnumType> getEnumTypeClass()

**Returns:** `Class<EnumType>`

### public abstract EnumType getValue()

**Returns:** `EnumType`

### public abstract void setValue(EnumType var1)

**Parameters:**
- `EnumType` `var1`

**Returns:** `void`

### public <E extends Enum<E>> E getEnumValue(E defaultVal)

**Returns:** `E`

### public <E extends Enum<E>> void setEnumValue(E val)

**Returns:** `void`

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

### public EnumType getDefaultValue()

**Returns:** `EnumType`

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

### public void clear()

Description copied from interface: IAnimationVariableSlot

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AbstractAnimationVariableSlotEnum.html`*
