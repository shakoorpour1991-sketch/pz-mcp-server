---
title: generation.builders.ItemMapper
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders
---

# generation.builders.ItemMapper

`public record ItemMapper(String name, RecipeMapperBuilder[] elements) extends Record implements Writeable`

**Kind:** record · **Package:** generation.builders

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.ItemMapper

## Constructors

### public ItemMapper(String name,
RecipeMapperBuilder... elements)

Creates an instance of a ItemMapper record class.

**Parameters:**
- `String` `name` — the value for the name record component
- `RecipeMapperBuilder...` `elements` — the value for the elements record component

## Methods

### public void write(Writer writer,
int int0,
String string)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `string`

**Returns:** `void`

### public final String toString()

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

### public RecipeMapperBuilder[] elements()

Returns the value of the elements record component.

**Returns:** `RecipeMapperBuilder[]`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\ItemMapper.html`*
