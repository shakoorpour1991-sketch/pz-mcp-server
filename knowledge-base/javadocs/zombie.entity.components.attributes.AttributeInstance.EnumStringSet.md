---
title: zombie.entity.components.attributes.AttributeInstance.EnumStringSet
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.attributes
---

# zombie.entity.components.attributes.AttributeInstance.EnumStringSet

`public static class AttributeInstance.EnumStringSet<E extends Enum<E> & IOEnum> extends AttributeInstance<AttributeInstance.EnumStringSet<E>, AttributeType.EnumStringSet<E>>`

**Kind:** class · **Package:** zombie.entity.components.attributes

## Inheritance
- java.lang.Object
- zombie.entity.components.attributes.AttributeInstance<AttributeInstance.EnumStringSet<E>, AttributeType.EnumStringSet<E>>
- zombie.entity.components.attributes.AttributeInstance.EnumStringSet<E>

## Constructors

### public EnumStringSet()

## Methods

### public EnumStringObj<E> getValue()

**Returns:** `EnumStringObj<E>`

### public void setValue(EnumStringObj<E> value)

**Parameters:**
- `EnumStringObj<E>` `value`

**Returns:** `void`

### public String stringValue()

**Returns:** `String`

### public boolean setValueFromScriptString(String val)

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### public void addEnumValueFromString(String val)

**Parameters:**
- `String` `val`

**Returns:** `void`

### public boolean removeEnumValueFromString(String val)

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### public void addStringValue(String val)

**Parameters:**
- `String` `val`

**Returns:** `void`

### public boolean removeStringValue(String val)

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public boolean equalTo(AttributeInstance.EnumStringSet<E> other)

**Parameters:**
- `AttributeInstance.EnumStringSet<E>` `other`

**Returns:** `boolean`

### public AttributeInstance.EnumStringSet<E> copy()

**Returns:** `AttributeInstance.EnumStringSet<E>`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\attributes\AttributeInstance.EnumStringSet.html`*
