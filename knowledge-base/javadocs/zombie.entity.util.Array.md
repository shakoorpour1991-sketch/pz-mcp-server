---
title: zombie.entity.util.Array
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.Array

`public class Array<T> extends Object implements Iterable<T>`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.Array<T>

## Fields

### public T[] items

### public int size

### public boolean ordered

## Constructors

### public Array()

### public Array(int capacity)

**Parameters:**
- `int` `capacity`

### public Array(boolean ordered,
int capacity)

**Parameters:**
- `boolean` `ordered`
- `int` `capacity`

### public Array(boolean ordered,
int capacity,
Class<?> arrayType)

**Parameters:**
- `boolean` `ordered`
- `int` `capacity`
- `Class<?>` `arrayType`

### public Array(Class<?> arrayType)

**Parameters:**
- `Class<?>` `arrayType`

### public Array(Array<? extends T> array)

**Parameters:**
- `Array<? extends T>` `array`

### public Array(T[] array)

**Parameters:**
- `T[]` `array`

### public Array(boolean ordered,
T[] array,
int start,
int count)

**Parameters:**
- `boolean` `ordered`
- `T[]` `array`
- `int` `start`
- `int` `count`

## Methods

### public void add(T value)

**Parameters:**
- `T` `value`

**Returns:** `void`

### public void add(T value1,
T value2)

**Parameters:**
- `T` `value1`
- `T` `value2`

**Returns:** `void`

### public void add(T value1,
T value2,
T value3)

**Parameters:**
- `T` `value1`
- `T` `value2`
- `T` `value3`

**Returns:** `void`

### public void add(T value1,
T value2,
T value3,
T value4)

**Parameters:**
- `T` `value1`
- `T` `value2`
- `T` `value3`
- `T` `value4`

**Returns:** `void`

### public void addAll(Array<? extends T> array)

**Parameters:**
- `Array<? extends T>` `array`

**Returns:** `void`

### public void addAll(Array<? extends T> array,
int start,
int count)

**Parameters:**
- `Array<? extends T>` `array`
- `int` `start`
- `int` `count`

**Returns:** `void`

### public void addAll(T... array)

**Parameters:**
- `T...` `array`

**Returns:** `void`

### public void addAll(T[] array,
int start,
int count)

**Parameters:**
- `T[]` `array`
- `int` `start`
- `int` `count`

**Returns:** `void`

### public T get(int index)

**Parameters:**
- `int` `index`

**Returns:** `T`

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

### public boolean contains(@Nullable T value,
boolean identity)

**Parameters:**
- `@Nullable T` `value`
- `boolean` `identity`

**Returns:** `boolean`

### public boolean containsAll(Array<? extends T> values,
boolean identity)

**Parameters:**
- `Array<? extends T>` `values`
- `boolean` `identity`

**Returns:** `boolean`

### public boolean containsAny(Array<? extends T> values,
boolean identity)

**Parameters:**
- `Array<? extends T>` `values`
- `boolean` `identity`

**Returns:** `boolean`

### public int indexOf(@Nullable T value,
boolean identity)

**Parameters:**
- `@Nullable T` `value`
- `boolean` `identity`

**Returns:** `int`

### public int lastIndexOf(@Nullable T value,
boolean identity)

**Parameters:**
- `@Nullable T` `value`
- `boolean` `identity`

**Returns:** `int`

### public boolean removeValue(@Nullable T value,
boolean identity)

**Parameters:**
- `@Nullable T` `value`
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

### public T peek()

**Returns:** `T`

### public T first()

**Returns:** `T`

### public boolean notEmpty()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public T[] shrink()

**Returns:** `T[]`

### public T[] ensureCapacity(int additionalCapacity)

**Parameters:**
- `int` `additionalCapacity`

**Returns:** `T[]`

### public T[] setSize(int newSize)

**Parameters:**
- `int` `newSize`

**Returns:** `T[]`

### public void sort()

**Returns:** `void`

### public void sort(Comparator<? super T> comparator)

**Parameters:**
- `Comparator<? super T>` `comparator`

**Returns:** `void`

### public T selectRanked(Comparator<T> comparator,
int kthLowest)

**Parameters:**
- `Comparator<T>` `comparator`
- `int` `kthLowest`

**Returns:** `T`

### public int selectRankedIndex(Comparator<T> comparator,
int kthLowest)

**Parameters:**
- `Comparator<T>` `comparator`
- `int` `kthLowest`

**Returns:** `int`

### public void reverse()

**Returns:** `void`

### public void shuffle()

**Returns:** `void`

### public Array.ArrayIterator<T> iterator()

**Returns:** `Array.ArrayIterator<T>`

### public Iterable<T> select(Predicate<T> predicate)

**Parameters:**
- `Predicate<T>` `predicate`

**Returns:** `Iterable<T>`

### public void truncate(int newSize)

**Parameters:**
- `int` `newSize`

**Returns:** `void`

### public @Nullable T random()

**Returns:** `@Nullable T`

### public T[] toArray()

**Returns:** `T[]`

### public <V> V[] toArray(Class<V> type)

**Returns:** `V[]`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `boolean`

### public boolean equalsIdentity(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public String toString(String separator)

**Parameters:**
- `String` `separator`

**Returns:** `String`

### public static <T> Array<T> of(Class<T> arrayType)

**Returns:** `Array<T>`

### public static <T> Array<T> of(boolean ordered,
int capacity,
Class<T> arrayType)

**Returns:** `Array<T>`

### public static <T> Array<T> with(T... array)

**Returns:** `Array<T>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\Array.html`*
