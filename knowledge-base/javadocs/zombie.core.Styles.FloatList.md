---
title: zombie.core.Styles.FloatList
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.Styles
---

# zombie.core.Styles.FloatList

`public class FloatList extends Object implements Serializable`

**Kind:** class · **Package:** zombie.core.Styles

## Inheritance
- java.lang.Object
- zombie.core.Styles.FloatList

## Description

Quickly hacked together expandable list of floats

## Constructors

### public FloatList()

FloatList constructor comment.

### public FloatList(int size)

FloatList constructor comment.

**Parameters:**
- `int` `size`

### public FloatList(FloatList.ExpandStyle style,
int size)

**Parameters:**
- `FloatList.ExpandStyle` `style`
- `int` `size`

## Methods

### public float add(float f)

add method comment.

**Parameters:**
- `float` `f`

**Returns:** `float`

### public float remove(int idx)

Remove an element and return it.

**Parameters:**
- `int` `idx` — The index of the element to remove

**Returns:** `float`

### public void addAll(float[] f)

add method comment.

**Parameters:**
- `float[]` `f`

**Returns:** `void`

### public void addAll(FloatList f)

add method comment.

**Parameters:**
- `FloatList` `f`

**Returns:** `void`

### public float[] array()

toArray method comment.

**Returns:** `float[]`

### public int capacity()

Insert the method's description here. Creation date: (11/03/2001
17:19:01)

**Returns:** `int`

### public void clear()

clear method comment.

**Returns:** `void`

### public void ensureCapacity(int size)

Ensure the list is at least 'size' elements big.

**Parameters:**
- `int` `size`

**Returns:** `void`

### public float get(int index)

get method comment.

**Parameters:**
- `int` `index`

**Returns:** `float`

### public boolean isEmpty()

isEmpty method comment.

**Returns:** `boolean`

### public int size()

size method comment.

**Returns:** `int`

### public void toArray(Object[] dest)

Stash everything in an array.

**Parameters:**
- `Object[]` `dest`

**Returns:** `void`

### public void trimToSize()

Pack list to its minimum size.

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Styles\FloatList.html`*
