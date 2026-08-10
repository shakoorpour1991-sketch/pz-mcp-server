---
title: zombie.iso.worldgen.rules.Alias
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.rules
---

# zombie.iso.worldgen.rules.Alias

`public record Alias(String name, List<String> tiles) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.rules

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.rules.Alias

## Constructors

### public Alias(String name,
List<String> tiles)

Creates an instance of a Alias record class.

**Parameters:**
- `String` `name` — the value for the name record component
- `List<String>` `tiles` — the value for the tiles record component

## Methods

### public static Alias load(BufferedReader br,
String[] input)
throws IOException

**Parameters:**
- `BufferedReader` `br`
- `String[]` `input`

**Returns:** `Alias`

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

### public List<String> tiles()

Returns the value of the tiles record component.

**Returns:** `List<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\rules\Alias.html`*
