---
title: zombie.scripting.objects.SoundMapKey
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.scripting.objects
---

# zombie.scripting.objects.SoundMapKey

`public record SoundMapKey(String id) extends Record`

**Kind:** record · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.scripting.objects.SoundMapKey

## Fields

### public static final SoundMapKey ACTIVATE

### public static final SoundMapKey CONTAINER_CLOSE

### public static final SoundMapKey CONTAINER_OPEN

### public static final SoundMapKey CONTAINER_PUT

### public static final SoundMapKey CONTAINER_TAKE

### public static final SoundMapKey DEACTIVATE

### public static final SoundMapKey DUMP_CONTENTS

### public static final SoundMapKey EQUIPPED_AND_ACTIVATED

### public static final SoundMapKey SPEAR_STAB

### public static final SoundMapKey PICK_UP_FURNITURE

### public static final SoundMapKey PLACE_FURNITURE

## Constructors

### public SoundMapKey(String id)

Creates an instance of a SoundMapKey record class.

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\SoundMapKey.html`*
