---
title: zombie.entity.util.SnapshotArray
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.SnapshotArray

`public class SnapshotArray<T> extends Array<T>`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.Array<T>
- zombie.entity.util.SnapshotArray<T>

## Constructors

### public SnapshotArray()

### public SnapshotArray(Array<T> array)

**Parameters:**
- `Array<T>` `array`

### public SnapshotArray(boolean ordered,
int capacity,
Class<?> arrayType)

**Parameters:**
- `boolean` `ordered`
- `int` `capacity`
- `Class<?>` `arrayType`

### public SnapshotArray(boolean ordered,
int capacity)

**Parameters:**
- `boolean` `ordered`
- `int` `capacity`

### public SnapshotArray(boolean ordered,
T[] array,
int startIndex,
int count)

**Parameters:**
- `boolean` `ordered`
- `T[]` `array`
- `int` `startIndex`
- `int` `count`

### public SnapshotArray(Class<?> arrayType)

**Parameters:**
- `Class<?>` `arrayType`

### public SnapshotArray(int capacity)

**Parameters:**
- `int` `capacity`

### public SnapshotArray(T[] array)

**Parameters:**
- `T[]` `array`

## Methods

### public T[] begin()

**Returns:** `T[]`

### public void end()

**Returns:** `void`

### public void set(int index,
T value)

**Parameters:**
- `int` `index`
- `T` `value`

**Returns:** `void`

### public void insert(int index,
T value)

**Parameters:**
- `int` `index`
- `T` `value`

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

### public boolean removeValue(T value,
boolean identity)

**Parameters:**
- `T` `value`
- `boolean` `identity`

**Returns:** `boolean`

### public T removeIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `T`

### public void removeRange(int start,
int end)

**Parameters:**
- `int` `start`
- `int` `end`

**Returns:** `void`

### public boolean removeAll(Array<? extends T> array,
boolean identity)

**Parameters:**
- `Array<? extends T>` `array`
- `boolean` `identity`

**Returns:** `boolean`

### public T pop()

**Returns:** `T`

### public void clear()

**Returns:** `void`

### public void sort()

**Returns:** `void`

### public void sort(Comparator<? super T> comparator)

**Parameters:**
- `Comparator<? super T>` `comparator`

**Returns:** `void`

### public void reverse()

**Returns:** `void`

### public void shuffle()

**Returns:** `void`

### public void truncate(int newSize)

**Parameters:**
- `int` `newSize`

**Returns:** `void`

### public T[] setSize(int newSize)

**Parameters:**
- `int` `newSize`

**Returns:** `T[]`

### public static <T> SnapshotArray<T> with(T... array)

**Returns:** `SnapshotArray<T>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\SnapshotArray.html`*
