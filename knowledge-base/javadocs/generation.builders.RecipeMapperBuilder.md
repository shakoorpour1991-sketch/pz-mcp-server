---
title: generation.builders.RecipeMapperBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders
---

# generation.builders.RecipeMapperBuilder

`public record RecipeMapperBuilder(String inputItem, ItemKey outputItem) extends Record implements Writeable`

**Kind:** record · **Package:** generation.builders

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.RecipeMapperBuilder

## Constructors

### public RecipeMapperBuilder(String inputItem,
ItemKey outputItem)

Creates an instance of a RecipeMapperBuilder record class.

**Parameters:**
- `String` `inputItem` — the value for the inputItem record component
- `ItemKey` `outputItem` — the value for the outputItem record component

## Methods

### public static RecipeMapperBuilder itemMapper(List<ItemKey> list,
ItemKey itemKey)

**Parameters:**
- `List<ItemKey>` `list`
- `ItemKey` `itemKey`

**Returns:** `RecipeMapperBuilder`

### public static RecipeMapperBuilder itemMapperDefault(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `RecipeMapperBuilder`

### public void write(Writer writer,
int int0,
String var3)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `var3`

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

### public String inputItem()

Returns the value of the inputItem record component.

**Returns:** `String`

### public ItemKey outputItem()

Returns the value of the outputItem record component.

**Returns:** `ItemKey`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\RecipeMapperBuilder.html`*
