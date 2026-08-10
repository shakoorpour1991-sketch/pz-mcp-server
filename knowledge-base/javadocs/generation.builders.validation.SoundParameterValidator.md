---
title: generation.builders.validation.SoundParameterValidator
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders.validation
---

# generation.builders.validation.SoundParameterValidator

`public record SoundParameterValidator(String name, Object value) extends Record`

**Kind:** record · **Package:** generation.builders.validation

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.validation.SoundParameterValidator

## Fields

### public static final Map<String,Class<? extends Enum<?>>> PARAMETERS

## Constructors

### public SoundParameterValidator(String name,
Object value)

Creates an instance of a SoundParameterValidator record class.

**Parameters:**
- `String` `name` — the value for the name record component
- `Object` `value` — the value for the value record component

## Methods

### public static <T extends Enum<T>>
SoundParameterValidator of(String string,
T _enum)

**Returns:** `SoundParameterValidator`

### public String toString()

Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.

**Returns:** `String`

### public final int hashCode()

Returns a hash code value for this object. The value is derived from the hash code of each of the record components.

**Returns:** `int`

### public final boolean equals(Object o)

Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).

**Parameters:**
- `Object` `o` — the object with which to compare

**Returns:** `boolean`

### public String name()

Returns the value of the name record component.

**Returns:** `String`

### public Object value()

Returns the value of the value record component.

**Returns:** `Object`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\validation\SoundParameterValidator.html`*
