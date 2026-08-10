---
title: zombie.scripting.logic.RecipeCodeHelper.DateResult
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.scripting.logic
---

# zombie.scripting.logic.RecipeCodeHelper.DateResult

`public static record RecipeCodeHelper.DateResult(int year, int month) extends Record`

**Kind:** record · **Package:** zombie.scripting.logic

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.scripting.logic.RecipeCodeHelper.DateResult

## Constructors

### public DateResult(int year,
int month)

Creates an instance of a DateResult record class.

**Parameters:**
- `int` `year` — the value for the year record component
- `int` `month` — the value for the month record component

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

### public int year()

Returns the value of the year record component.

**Returns:** `int`

### public int month()

Returns the value of the month record component.

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\logic\RecipeCodeHelper.DateResult.html`*
