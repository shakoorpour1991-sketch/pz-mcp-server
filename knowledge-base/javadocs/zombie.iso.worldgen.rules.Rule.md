---
title: zombie.iso.worldgen.rules.Rule
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.rules
---

# zombie.iso.worldgen.rules.Rule

`public record Rule(String label, int bitmap, int[] color, List<String> tiles, String layer, int[] condition) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.rules

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.rules.Rule

## Constructors

### public Rule(String label,
int bitmap,
int[] color,
List<String> tiles,
String layer,
int[] condition)

Creates an instance of a Rule record class.

**Parameters:**
- `String` `label` — the value for the label record component
- `int` `bitmap` — the value for the bitmap record component
- `int[]` `color` — the value for the color record component
- `List<String>` `tiles` — the value for the tiles record component
- `String` `layer` — the value for the layer record component
- `int[]` `condition` — the value for the condition record component

## Methods

### public static Rule load(BufferedReader br,
String[] input)
throws IOException

**Parameters:**
- `BufferedReader` `br`
- `String[]` `input`

**Returns:** `Rule`

### public final String toString()

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

### public String label()

Returns the value of the label record component.

**Returns:** `String`

### public int bitmap()

Returns the value of the bitmap record component.

**Returns:** `int`

### public int[] color()

Returns the value of the color record component.

**Returns:** `int[]`

### public List<String> tiles()

Returns the value of the tiles record component.

**Returns:** `List<String>`

### public String layer()

Returns the value of the layer record component.

**Returns:** `String`

### public int[] condition()

Returns the value of the condition record component.

**Returns:** `int[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\rules\Rule.html`*
