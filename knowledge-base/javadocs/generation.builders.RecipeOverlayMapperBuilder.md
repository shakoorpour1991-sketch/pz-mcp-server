---
title: generation.builders.RecipeOverlayMapperBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders
---

# generation.builders.RecipeOverlayMapperBuilder

`public record RecipeOverlayMapperBuilder(String inputItem, String outputItem) extends Record implements Writeable`

**Kind:** record · **Package:** generation.builders

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.RecipeOverlayMapperBuilder

## Constructors

### public RecipeOverlayMapperBuilder(String inputItem,
String outputItem)

Creates an instance of a RecipeOverlayMapperBuilder record class.

**Parameters:**
- `String` `inputItem` — the value for the inputItem record component
- `String` `outputItem` — the value for the outputItem record component

## Methods

### public static RecipeOverlayMapperBuilder overlayMapper(ItemKey itemKey,
String string)

**Parameters:**
- `ItemKey` `itemKey`
- `String` `string`

**Returns:** `RecipeOverlayMapperBuilder`

### public static RecipeOverlayMapperBuilder overlayMapperDefault(String string)

**Parameters:**
- `String` `string`

**Returns:** `RecipeOverlayMapperBuilder`

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

### public String outputItem()

Returns the value of the outputItem record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\RecipeOverlayMapperBuilder.html`*
