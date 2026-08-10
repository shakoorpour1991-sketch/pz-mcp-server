---
title: zombie.entity.components.attributes.AttributeInstance.Enum
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.attributes
---

# zombie.entity.components.attributes.AttributeInstance.Enum

`public static class AttributeInstance.Enum<E extends Enum<E> & IOEnum> extends AttributeInstance<AttributeInstance.Enum<E>, AttributeType.Enum<E>>`

**Kind:** class · **Package:** zombie.entity.components.attributes

## Inheritance
- java.lang.Object
- zombie.entity.components.attributes.AttributeInstance<AttributeInstance.Enum<E>, AttributeType.Enum<E>>
- zombie.entity.components.attributes.AttributeInstance.Enum<E>

## Constructors

### public Enum()

## Methods

### public E getValue()

**Returns:** `E`

### public void setValue(E value)

**Parameters:**
- `E` `value`

**Returns:** `void`

### public String stringValue()

**Returns:** `String`

### public boolean setValueFromScriptString(String val)

**Parameters:**
- `String` `val`

**Returns:** `boolean`

### public boolean equalTo(AttributeInstance.Enum<E> other)

**Parameters:**
- `AttributeInstance.Enum<E>` `other`

**Returns:** `boolean`

### public AttributeInstance.Enum<E> copy()

**Returns:** `AttributeInstance.Enum<E>`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\attributes\AttributeInstance.Enum.html`*
