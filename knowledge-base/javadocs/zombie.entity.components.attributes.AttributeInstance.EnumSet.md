---
title: zombie.entity.components.attributes.AttributeInstance.EnumSet
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.attributes
---

# zombie.entity.components.attributes.AttributeInstance.EnumSet

`public static class AttributeInstance.EnumSet<E extends Enum<E> & IOEnum> extends AttributeInstance<AttributeInstance.EnumSet<E>, AttributeType.EnumSet<E>>`

**Kind:** class · **Package:** zombie.entity.components.attributes

## Inheritance
- java.lang.Object
- zombie.entity.components.attributes.AttributeInstance<AttributeInstance.EnumSet<E>, AttributeType.EnumSet<E>>
- zombie.entity.components.attributes.AttributeInstance.EnumSet<E>

## Constructors

### public EnumSet()

## Methods

### public EnumSet<E> getValue()

**Returns:** `EnumSet<E>`

### public void setValue(EnumSet<E> value)

**Parameters:**
- `EnumSet<E>` `value`

**Returns:** `void`

### public String stringValue()

**Returns:** `String`

### public boolean setValueFromScriptString(String val)

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### public void addValueFromString(String val)

**Parameters:**
- `String` `val`

**Returns:** `void`

### public boolean removeValueFromString(String val)

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public boolean equalTo(AttributeInstance.EnumSet<E> other)

**Parameters:**
- `AttributeInstance.EnumSet<E>` `other`

**Returns:** `boolean`

### public AttributeInstance.EnumSet<E> copy()

**Returns:** `AttributeInstance.EnumSet<E>`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\attributes\AttributeInstance.EnumSet.html`*
