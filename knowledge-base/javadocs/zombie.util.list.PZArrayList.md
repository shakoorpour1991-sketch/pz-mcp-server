---
title: zombie.util.list.PZArrayList
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.list
---

# zombie.util.list.PZArrayList

`public final class PZArrayList<E> extends AbstractList<E> implements List<E>, RandomAccess`

**Kind:** class · **Package:** zombie.util.list

## Inheritance
- java.lang.Object
- java.util.AbstractCollection<E>
- java.util.AbstractList<E>
- zombie.util.list.PZArrayList<E>

## Constructors

### public PZArrayList(Class<E> elementType,
int initialCapacity)

**Parameters:**
- `Class<E>` `elementType`
- `int` `initialCapacity`

## Methods

### public E get(int index)

**Parameters:**
- `int` `index`

**Returns:** `E`

### public int size()

**Returns:** `int`

### public int indexOf(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `int`

### public <E1> int indexOf(E1 o,
Invokers.Params2.Boolean.ICallback<E1,E> comparator)

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean contains(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public boolean containsReference(E o)

**Parameters:**
- `E` `o`

**Returns:** `boolean`

### public <E1> boolean contains(E1 o,
Invokers.Params2.Boolean.ICallback<E1,E> comparator)

**Returns:** `boolean`

### public Iterator<E> iterator()

**Returns:** `Iterator<E>`

### public ListIterator<E> listIterator()

**Returns:** `ListIterator<E>`

### public ListIterator<E> listIterator(int index)

**Parameters:**
- `int` `index`

**Returns:** `ListIterator<E>`

### public void addUnique(E newItem)

**Parameters:**
- `E` `newItem`

**Returns:** `void`

### public void addUniqueReference(E newItem)

**Parameters:**
- `E` `newItem`

**Returns:** `void`

### public void addUnique(E newItem,
Invokers.Params2.Boolean.ICallback<E,E> comparator)

**Parameters:**
- `E` `newItem`
- `Invokers.Params2.Boolean.ICallback<E,E>` `comparator`

**Returns:** `void`

### public boolean add(E e)

**Parameters:**
- `E` `e`

**Returns:** `boolean`

### public void add(int index,
E e)

**Parameters:**
- `int` `index`
- `E` `e`

**Returns:** `void`

### public E remove(int index)

**Parameters:**
- `int` `index`

**Returns:** `E`

### public boolean remove(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public boolean removeAll(Collection<?> c)

**Parameters:**
- `Collection<?>` `c`

**Returns:** `boolean`

### public E set(int index,
E e)

**Parameters:**
- `int` `index`
- `E` `e`

**Returns:** `E`

### public void clear()

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public E[] getElements()

**Returns:** `E[]`

### public static <E> AbstractList<E> emptyList()

**Returns:** `AbstractList<E>`

### public void ensureCapacity(int minCapacity)

**Parameters:**
- `int` `minCapacity`

**Returns:** `void`

### public static <E1,E2> boolean objectsEqual(E1 a,
E2 b)

**Returns:** `boolean`

### public static <E1,E2> boolean referenceEqual(E1 a,
E2 b)

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\list\PZArrayList.html`*
