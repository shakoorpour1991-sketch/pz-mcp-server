---
title: zombie.scripting.objects.TeachedRecipeConstantKey
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: zombie.scripting.objects
---

# zombie.scripting.objects.TeachedRecipeConstantKey

`public record TeachedRecipeConstantKey(String id) extends Record`

**Kind:** record · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.scripting.objects.TeachedRecipeConstantKey

## Fields

### public static final TeachedRecipeConstantKey ADVANCED_MECHANICS

### public static final TeachedRecipeConstantKey BASIC_MECHANICS

### public static final TeachedRecipeConstantKey GENERATOR

### public static final TeachedRecipeConstantKey HERBALIST

### public static final TeachedRecipeConstantKey INTERMEDIATE_MECHANICS

## Constructors

### public TeachedRecipeConstantKey(String id)

Creates an instance of a TeachedRecipeConstantKey record class.

**Parameters:**
- `String` `id` — the value for the id record component

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

### public String id()

Returns the value of the id record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\TeachedRecipeConstantKey.html`*
