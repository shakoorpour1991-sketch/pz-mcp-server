---
title: generation.builders.ComponentResourcesBuilder.GroupElement
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders
---

# generation.builders.ComponentResourcesBuilder.GroupElement

`public static record ComponentResourcesBuilder.GroupElement(String data) extends Record`

**Kind:** record · **Package:** generation.builders

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.ComponentResourcesBuilder.GroupElement

## Constructors

### public GroupElement(String data)

Creates an instance of a GroupElement record class.

**Parameters:**
- `String` `data` — the value for the data record component

## Methods

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

### public String data()

Returns the value of the data record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\ComponentResourcesBuilder.GroupElement.html`*
