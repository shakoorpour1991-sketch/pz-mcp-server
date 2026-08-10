---
title: zombie.entity.util.LongArray
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.LongArray

`public class LongArray extends Object`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.LongArray

## Fields

### public long[] items

### public int size

### public boolean ordered

## Constructors

### public LongArray()

### public LongArray(int capacity)

**Parameters:**
- `int` `capacity`

### public LongArray(boolean ordered,
int capacity)

**Parameters:**
- `boolean` `ordered`
- `int` `capacity`

### public LongArray(LongArray array)

**Parameters:**
- `LongArray` `array`

### public LongArray(long[] array)

**Parameters:**
- `long[]` `array`

### public LongArray(boolean ordered,
long[] array,
int startIndex,
int count)

**Parameters:**
- `boolean` `ordered`
- `long[]` `array`
- `int` `startIndex`
- `int` `count`

## Methods

### public void add(long value)

**Parameters:**
- `long` `value`

**Returns:** `void`

### public void add(long value1,
long value2)

**Parameters:**
- `long` `value1`
- `long` `value2`

**Returns:** `void`

### public void add(long value1,
long value2,
long value3)

**Parameters:**
- `long` `value1`
- `long` `value2`
- `long` `value3`

**Returns:** `void`

### public void add(long value1,
long value2,
long value3,
long value4)

**Parameters:**
- `long` `value1`
- `long` `value2`
- `long` `value3`
- `long` `value4`

**Returns:** `void`

### public void addAll(LongArray array)

**Parameters:**
- `LongArray` `array`

**Returns:** `void`

### public void addAll(LongArray array,
int offset,
int length)

**Parameters:**
- `LongArray` `array`
- `int` `offset`
- `int` `length`

**Returns:** `void`

### public void addAll(long... array)

**Parameters:**
- `long...` `array`

**Returns:** `void`

### public void addAll(long[] array,
int offset,
int length)

**Parameters:**
- `long[]` `array`
- `int` `offset`
- `int` `length`

**Returns:** `void`

### public long get(int index)

**Parameters:**
- `int` `index`

**Returns:** `long`

### public void set(int index,
long value)

**Parameters:**
- `int` `index`
- `long` `value`

**Returns:** `void`

### public void incr(int index,
long value)

**Parameters:**
- `int` `index`
- `long` `value`

**Returns:** `void`

### public void incr(long value)

**Parameters:**
- `long` `value`

**Returns:** `void`

### public void mul(int index,
long value)

**Parameters:**
- `int` `index`
- `long` `value`

**Returns:** `void`

### public void mul(long value)

**Parameters:**
- `long` `value`

**Returns:** `void`

### public void insert(int index,
long value)

**Parameters:**
- `int` `index`
- `long` `value`

**Returns:** `void`

### public void insertRange(int index,
int count)

**Parameters:**
- `int` `index`
- `int` `count`

**Returns:** `void`

### public void swap(int first,
int second)

**Parameters:**
- `int` `first`
- `int` `second`

**Returns:** `void`

### public boolean contains(long value)

**Parameters:**
- `long` `value`

**Returns:** `boolean`

### public int indexOf(long value)

**Parameters:**
- `long` `value`

**Returns:** `int`

### public int lastIndexOf(char value)

**Parameters:**
- `char` `value`

**Returns:** `int`

### public boolean removeValue(long value)

**Parameters:**
- `long` `value`

**Returns:** `boolean`

### public long removeIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `long`

### public void removeRange(int start,
int end)

**Parameters:**
- `int` `start`
- `int` `end`

**Returns:** `void`

### public boolean removeAll(LongArray array)

**Parameters:**
- `LongArray` `array`

**Returns:** `boolean`

### public long pop()

**Returns:** `long`

### public long peek()

**Returns:** `long`

### public long first()

**Returns:** `long`

### public boolean notEmpty()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public long[] shrink()

**Returns:** `long[]`

### public long[] ensureCapacity(int additionalCapacity)

**Parameters:**
- `int` `additionalCapacity`

**Returns:** `long[]`

### public long[] setSize(int newSize)

**Parameters:**
- `int` `newSize`

**Returns:** `long[]`

### public void sort()

**Returns:** `void`

### public void reverse()

**Returns:** `void`

### public void shuffle()

**Returns:** `void`

### public void truncate(int newSize)

**Parameters:**
- `int` `newSize`

**Returns:** `void`

### public long random()

**Returns:** `long`

### public long[] toArray()

**Returns:** `long[]`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public String toString(String separator)

**Parameters:**
- `String` `separator`

**Returns:** `String`

### public static LongArray with(long... array)

**Parameters:**
- `long...` `array`

**Returns:** `LongArray`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\LongArray.html`*
