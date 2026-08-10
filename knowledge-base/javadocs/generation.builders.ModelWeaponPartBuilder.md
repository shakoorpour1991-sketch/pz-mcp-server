---
title: generation.builders.ModelWeaponPartBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders
---

# generation.builders.ModelWeaponPartBuilder

`public record ModelWeaponPartBuilder(ItemKey item, ModelKey model, String attachSelf, String attachParent) extends Record`

**Kind:** record · **Package:** generation.builders

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.ModelWeaponPartBuilder

## Constructors

### public ModelWeaponPartBuilder(ItemKey item,
ModelKey model,
String attachSelf,
String attachParent)

Creates an instance of a ModelWeaponPartBuilder record class.

**Parameters:**
- `ItemKey` `item` — the value for the item record component
- `ModelKey` `model` — the value for the model record component
- `String` `attachSelf` — the value for the attachSelf record component
- `String` `attachParent` — the value for the attachParent record component

## Methods

### public static ModelWeaponPartBuilder of(ItemKey itemKey,
ModelKey modelKey)

**Parameters:**
- `ItemKey` `itemKey`
- `ModelKey` `modelKey`

**Returns:** `ModelWeaponPartBuilder`

### public static ModelWeaponPartBuilder of(ItemKey itemKey,
ModelKey modelKey,
String string0,
String string1)

**Parameters:**
- `ItemKey` `itemKey`
- `ModelKey` `modelKey`
- `String` `string0`
- `String` `string1`

**Returns:** `ModelWeaponPartBuilder`

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

### public ItemKey item()

Returns the value of the item record component.

**Returns:** `ItemKey`

### public ModelKey model()

Returns the value of the model record component.

**Returns:** `ModelKey`

### public String attachSelf()

Returns the value of the attachSelf record component.

**Returns:** `String`

### public String attachParent()

Returns the value of the attachParent record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\ModelWeaponPartBuilder.html`*
