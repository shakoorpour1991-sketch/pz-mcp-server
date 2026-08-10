---
title: zombie.iso.IsoTreeJumbo.TreeDescription
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso
---

# zombie.iso.IsoTreeJumbo.TreeDescription

`public static record IsoTreeJumbo.TreeDescription(String main, String treetop, String trunk, String stump, String burned, String burnedFrozen) extends Record`

**Kind:** record · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.IsoTreeJumbo.TreeDescription

## Constructors

### public TreeDescription(String main,
String treetop,
String trunk,
String stump,
String burned,
String burnedFrozen)

Creates an instance of a TreeDescription record class.

**Parameters:**
- `String` `main` — the value for the main record component
- `String` `treetop` — the value for the treetop record component
- `String` `trunk` — the value for the trunk record component
- `String` `stump` — the value for the stump record component
- `String` `burned` — the value for the burned record component
- `String` `burnedFrozen` — the value for the burnedFrozen record component

## Methods

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

### public String main()

Returns the value of the main record component.

**Returns:** `String`

### public String treetop()

Returns the value of the treetop record component.

**Returns:** `String`

### public String trunk()

Returns the value of the trunk record component.

**Returns:** `String`

### public String stump()

Returns the value of the stump record component.

**Returns:** `String`

### public String burned()

Returns the value of the burned record component.

**Returns:** `String`

### public String burnedFrozen()

Returns the value of the burnedFrozen record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoTreeJumbo.TreeDescription.html`*
