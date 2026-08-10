---
title: zombie.entity.util.ObjectMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.ObjectMap

`public class ObjectMap<K,V> extends Object implements Iterable<ObjectMap.Entry<K,V>>`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.ObjectMap<K,V>

## Fields

### public int size

## Constructors

### public ObjectMap()

### public ObjectMap(int initialCapacity)

**Parameters:**
- `int` `initialCapacity`

### public ObjectMap(int initialCapacity,
float loadFactor)

**Parameters:**
- `int` `initialCapacity`
- `float` `loadFactor`

### public ObjectMap(ObjectMap<? extends K, ? extends V> map)

**Parameters:**
- `ObjectMap<? extends K, ? extends V>` `map`

## Methods

### public @Nullable V put(K key,
@Nullable V value)

**Parameters:**
- `K` `key`
- `@Nullable V` `value`

**Returns:** `@Nullable V`

### public void putAll(ObjectMap<? extends K, ? extends V> map)

**Parameters:**
- `ObjectMap<? extends K, ? extends V>` `map`

**Returns:** `void`

### public <T extends K> @Nullable V get(T key)

**Returns:** `@Nullable V`

### public V get(K key,
@Nullable V defaultValue)

**Parameters:**
- `K` `key`
- `@Nullable V` `defaultValue`

**Returns:** `V`

### public @Nullable V remove(K key)

**Parameters:**
- `K` `key`

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

### public boolean containsKey(K key)

**Parameters:**
- `K` `key`

**Returns:** `boolean`

### public @Nullable K findKey(@Nullable Object value,
boolean identity)

**Parameters:**
- `@Nullable Object` `value`
- `boolean` `identity`

**Returns:** `@Nullable K`

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

### public String toString(String separator)

**Parameters:**
- `String` `separator`

**Returns:** `String`

### public String toString()

**Returns:** `String`

### public ObjectMap.Entries<K,V> iterator()

**Returns:** `ObjectMap.Entries<K,V>`

### public ObjectMap.Entries<K,V> entries()

**Returns:** `ObjectMap.Entries<K,V>`

### public ObjectMap.Values<V> values()

**Returns:** `ObjectMap.Values<V>`

### public ObjectMap.Keys<K> keys()

**Returns:** `ObjectMap.Keys<K>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\ObjectMap.html`*
