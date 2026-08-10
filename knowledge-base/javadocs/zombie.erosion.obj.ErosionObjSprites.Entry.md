---
title: zombie.erosion.obj.ErosionObjSprites.Entry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.erosion.obj
---

# zombie.erosion.obj.ErosionObjSprites.Entry

`public static record ErosionObjSprites.Entry(int stage, int section, int season) extends Record`

**Kind:** record · **Package:** zombie.erosion.obj

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.erosion.obj.ErosionObjSprites.Entry

## Constructors

### public Entry(int stage,
int section,
int season)

Creates an instance of a Entry record class.

**Parameters:**
- `int` `stage` — the value for the stage record component
- `int` `section` — the value for the section record component
- `int` `season` — the value for the season record component

## Methods

### public final String toString()

Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.

**Returns:** `String`

### public final int hashCode()

Returns a hash code value for this object. The value is derived from the hash code of each of the record components.

**Returns:** `int`

### public final boolean equals(Object o)

Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with the compare method from their corresponding wrapper classes.

**Parameters:**
- `Object` `o` — the object with which to compare

**Returns:** `boolean`

### public int stage()

Returns the value of the stage record component.

**Returns:** `int`

### public int section()

Returns the value of the section record component.

**Returns:** `int`

### public int season()

Returns the value of the season record component.

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\obj\ErosionObjSprites.Entry.html`*
