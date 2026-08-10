---
title: zombie.entity.util.LongMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.LongMap

`public class LongMap<V> extends Object implements Iterable<LongMap.Entry<V>>`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.LongMap<V>

## Fields

### public int size

## Constructors

### public LongMap()

### public LongMap(int initialCapacity)

**Parameters:**
- `int` `initialCapacity`

### public LongMap(int initialCapacity,
float loadFactor)

**Parameters:**
- `int` `initialCapacity`
- `float` `loadFactor`

### public LongMap(LongMap<? extends V> map)

**Parameters:**
- `LongMap<? extends V>` `map`

## Methods

### public @Nullable V put(long key,
@Nullable V value)

**Parameters:**
- `long` `key`
- `@Nullable V` `value`

**Returns:** `@Nullable V`

### public void putAll(LongMap<? extends V> map)

**Parameters:**
- `LongMap<? extends V>` `map`

**Returns:** `void`

### public @Nullable V get(long key)

**Parameters:**
- `long` `key`

**Returns:** `@Nullable V`

### public V get(long key,
@Nullable V defaultValue)

**Parameters:**
- `long` `key`
- `@Nullable V` `defaultValue`

**Returns:** `V`

### public @Nullable V remove(long key)

**Parameters:**
- `long` `key`

**Returns:** `@Nullable V`

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

### public boolean containsValue(@Nullable Object value,
boolean identity)

**Parameters:**
- `@Nullable Object` `value`
- `boolean` `identity`

**Returns:** `boolean`

### public boolean containsKey(long key)

**Parameters:**
- `long` `key`

**Returns:** `boolean`

### public long findKey(@Nullable Object value,
boolean identity,
long notFound)

**Parameters:**
- `@Nullable Object` `value`
- `boolean` `identity`
- `long` `notFound`

**Returns:** `long`

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

### public boolean equalsIdentity(@Nullable Object obj)

**Parameters:**
- `@Nullable Object` `obj`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public Iterator<LongMap.Entry<V>> iterator()

**Returns:** `Iterator<LongMap.Entry<V>>`

### public LongMap.Entries<V> entries()

**Returns:** `LongMap.Entries<V>`

### public LongMap.Values<V> values()

**Returns:** `LongMap.Values<V>`

### public LongMap.Keys<V> keys()

**Returns:** `LongMap.Keys<V>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\LongMap.html`*
