---
title: generation.builders.PerkNumber
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: generation.builders
---

# generation.builders.PerkNumber

`public record PerkNumber(PerkFactory.Perk perk, int number) extends Record`

**Kind:** record · **Package:** generation.builders

## Inheritance
- java.lang.Object
- java.lang.Record
- generation.builders.PerkNumber

## Constructors

### public PerkNumber(PerkFactory.Perk perk,
int number)

Creates an instance of a PerkNumber record class.

**Parameters:**
- `PerkFactory.Perk` `perk` — the value for the perk record component
- `int` `number` — the value for the number record component

## Methods

### public String toString()

Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.

**Returns:** `String`

### public final int hashCode()

Returns a hash code value for this object. The value is derived from the hash code of each of the record components.

**Returns:** `int`

### public final boolean equals(Object o)

Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with the compare method from their corresponding wrapper classes.

**Parameters:**
- `Object` `o` — the object with which to compare

**Returns:** `boolean`

### public PerkFactory.Perk perk()

Returns the value of the perk record component.

**Returns:** `PerkFactory.Perk`

### public int number()

Returns the value of the number record component.

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\PerkNumber.html`*
