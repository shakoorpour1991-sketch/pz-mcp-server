---
title: zombie.core.Core.KeyBinding
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.core
---

# zombie.core.Core.KeyBinding

`public static record Core.KeyBinding(String name, int keyValue, int altKey, boolean shift, boolean ctrl, boolean alt) extends Record`

**Kind:** record · **Package:** zombie.core

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.core.Core.KeyBinding

## Constructors

### public KeyBinding(String name,
int keyValue,
int altKey,
boolean shift,
boolean ctrl,
boolean alt)

Creates an instance of a KeyBinding record class.

**Parameters:**
- `String` `name` — the value for the name record component
- `int` `keyValue` — the value for the keyValue record component
- `int` `altKey` — the value for the altKey record component
- `boolean` `shift` — the value for the shift record component
- `boolean` `ctrl` — the value for the ctrl record component
- `boolean` `alt` — the value for the alt record component

## Methods

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

### public String name()

Returns the value of the name record component.

**Returns:** `String`

### public int keyValue()

Returns the value of the keyValue record component.

**Returns:** `int`

### public int altKey()

Returns the value of the altKey record component.

**Returns:** `int`

### public boolean shift()

Returns the value of the shift record component.

**Returns:** `boolean`

### public boolean ctrl()

Returns the value of the ctrl record component.

**Returns:** `boolean`

### public boolean alt()

Returns the value of the alt record component.

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Core.KeyBinding.html`*
