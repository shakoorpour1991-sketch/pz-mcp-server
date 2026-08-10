---
title: zombie.scripting.objects.ItemKey
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.scripting.objects
---

# zombie.scripting.objects.ItemKey

`public record ItemKey(String id, ItemType itemType) extends Record`

**Kind:** record · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.scripting.objects.ItemKey

## Constructors

### public ItemKey(String id,
ItemType itemType)

Creates an instance of a ItemKey record class.

**Parameters:**
- `String` `id` — the value for the id record component
- `ItemType` `itemType` — the value for the itemType record component

## Methods

### public static Optional<ItemKey> getByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `Optional<ItemKey>`

### public static ItemKey getByItemKeyValue(String name)

**Parameters:**
- `String` `name`

**Returns:** `ItemKey`

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

### public ItemType itemType()

Returns the value of the itemType record component.

**Returns:** `ItemType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\ItemKey.html`*
