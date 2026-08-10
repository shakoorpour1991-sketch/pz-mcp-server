---
title: zombie.entity.util.assoc.AssocArray
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util.assoc
---

# zombie.entity.util.assoc.AssocArray

`public class AssocArray<K,V> extends Object`

**Kind:** class · **Package:** zombie.entity.util.assoc

## Inheritance
- java.lang.Object
- zombie.entity.util.assoc.AssocArray<K,V>

## Constructors

### public AssocArray(int initialCapacity)

**Parameters:**
- `int` `initialCapacity`

### public AssocArray()

## Methods

### public void trimToSize()

**Returns:** `void`

### public void ensureCapacity(int minCapacity)

**Parameters:**
- `int` `minCapacity`

**Returns:** `void`

### public int size()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean containsKey(K o)

**Parameters:**
- `K` `o`

**Returns:** `boolean`

### public boolean containsValue(V o)

**Parameters:**
- `V` `o`

**Returns:** `boolean`

### public int indexOfKey(K o)

**Parameters:**
- `K` `o`

**Returns:** `int`

### public int indexOfValue(V o)

**Parameters:**
- `V` `o`

**Returns:** `int`

### public int lastIndexOfKey(K o)

**Parameters:**
- `K` `o`

**Returns:** `int`

### public int lastIndexOfValue(V o)

**Parameters:**
- `V` `o`

**Returns:** `int`

### public K getKey(int frontIndex)

**Parameters:**
- `int` `frontIndex`

**Returns:** `K`

### public V getValue(int frontIndex)

**Parameters:**
- `int` `frontIndex`

**Returns:** `V`

### public V set(K k,
V v)

**Parameters:**
- `K` `k`
- `V` `v`

**Returns:** `V`

### public V put(K k,
V v)

**Parameters:**
- `K` `k`
- `V` `v`

**Returns:** `V`

### public V get(K k)

**Parameters:**
- `K` `k`

**Returns:** `V`

### public boolean add(K k,
V v)

**Parameters:**
- `K` `k`
- `V` `v`

**Returns:** `boolean`

### public void add(int frontIndex,
K k,
V v)

**Parameters:**
- `int` `frontIndex`
- `K` `k`
- `V` `v`

**Returns:** `void`

### public V removeIndex(int frontIndex)

**Parameters:**
- `int` `frontIndex`

**Returns:** `V`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public V remove(K o)

**Parameters:**
- `K` `o`

**Returns:** `V`

### public void clear()

**Returns:** `void`

### public void putAll(AssocArray<K,V> other)

**Parameters:**
- `AssocArray<K,V>` `other`

**Returns:** `void`

### public void addAll(AssocArray<K,V> other)

**Parameters:**
- `AssocArray<K,V>` `other`

**Returns:** `void`

### public void setAll(AssocArray<K,V> other)

**Parameters:**
- `AssocArray<K,V>` `other`

**Returns:** `void`

### public void forEach(BiConsumer<? super K, ? super V> action)

**Parameters:**
- `BiConsumer<? super K, ? super V>` `action`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\assoc\AssocArray.html`*
