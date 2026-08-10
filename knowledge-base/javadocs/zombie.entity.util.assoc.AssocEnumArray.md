---
title: zombie.entity.util.assoc.AssocEnumArray
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util.assoc
---

# zombie.entity.util.assoc.AssocEnumArray

`public class AssocEnumArray<K extends Enum<K>, V> extends AssocArray<K,V>`

**Kind:** class · **Package:** zombie.entity.util.assoc

## Inheritance
- java.lang.Object
- zombie.entity.util.assoc.AssocArray<K,V>
- zombie.entity.util.assoc.AssocEnumArray<K,V>

## Constructors

### public AssocEnumArray(Class<K> enumType)

**Parameters:**
- `Class<K>` `enumType`

### public AssocEnumArray(Class<K> enumType,
int initialCapacity)

**Parameters:**
- `Class<K>` `enumType`
- `int` `initialCapacity`

## Methods

### public boolean equalsKeys(AssocEnumArray<K,V> other)

**Parameters:**
- `AssocEnumArray<K,V>` `other`

**Returns:** `boolean`

### public Iterator<K> keys()

**Returns:** `Iterator<K>`

### public boolean containsKey(K o)

**Parameters:**
- `K` `o`

**Returns:** `boolean`

### public V put(K k,
V v)

**Parameters:**
- `K` `k`
- `V` `v`

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

### public V remove(K o)

**Parameters:**
- `K` `o`

**Returns:** `V`

### public void clear()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\assoc\AssocEnumArray.html`*
