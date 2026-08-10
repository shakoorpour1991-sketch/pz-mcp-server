---
title: zombie.entity.util.ObjectSet
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.ObjectSet

`public class ObjectSet<T> extends Object implements Iterable<T>`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.ObjectSet<T>

## Fields

### public int size

## Constructors

### public ObjectSet()

### public ObjectSet(int initialCapacity)

**Parameters:**
- `int` `initialCapacity`

### public ObjectSet(int initialCapacity,
float loadFactor)

**Parameters:**
- `int` `initialCapacity`
- `float` `loadFactor`

### public ObjectSet(ObjectSet<? extends T> set)

**Parameters:**
- `ObjectSet<? extends T>` `set`

## Methods

### public boolean add(T key)

**Parameters:**
- `T` `key`

**Returns:** `boolean`

### public void addAll(Array<? extends T> array)

**Parameters:**
- `Array<? extends T>` `array`

**Returns:** `void`

### public void addAll(Array<? extends T> array,
int offset,
int length)

**Parameters:**
- `Array<? extends T>` `array`
- `int` `offset`
- `int` `length`

**Returns:** `void`

### public boolean addAll(T... array)

**Parameters:**
- `T...` `array`

**Returns:** `boolean`

### public boolean addAll(T[] array,
int offset,
int length)

**Parameters:**
- `T[]` `array`
- `int` `offset`
- `int` `length`

**Returns:** `boolean`

### public void addAll(ObjectSet<T> set)

**Parameters:**
- `ObjectSet<T>` `set`

**Returns:** `void`

### public boolean remove(T key)

**Parameters:**
- `T` `key`

**Returns:** `boolean`

### public boolean notEmpty()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public void shrink(int maximumCapacity)

**Parameters:**
- `int` `maximumCapacity`

**Returns:** `void`

### public void clear(int maximumCapacity)

**Parameters:**
- `int` `maximumCapacity`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public boolean contains(T key)

**Parameters:**
- `T` `key`

**Returns:** `boolean`

### public @Nullable T get(T key)

**Parameters:**
- `T` `key`

**Returns:** `@Nullable T`

### public T first()

**Returns:** `T`

### public void ensureCapacity(int additionalCapacity)

**Parameters:**
- `int` `additionalCapacity`

**Returns:** `void`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public String toString(String separator)

**Parameters:**
- `String` `separator`

**Returns:** `String`

### public ObjectSet.ObjectSetIterator<T> iterator()

**Returns:** `ObjectSet.ObjectSetIterator<T>`

### public static <T> ObjectSet<T> with(T... array)

**Returns:** `ObjectSet<T>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\ObjectSet.html`*
