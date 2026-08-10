---
title: zombie.util.list.PZUnmodifiableList
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.list
---

# zombie.util.list.PZUnmodifiableList

`public class PZUnmodifiableList<E> extends PZUnmodifiableCollection<E> implements List<E>`

**Kind:** class · **Package:** zombie.util.list

## Inheritance
- java.lang.Object
- zombie.util.list.PZUnmodifiableCollection<E>
- zombie.util.list.PZUnmodifiableList<E>

## Methods

### public static <T> List<T> wrap(List<? extends T> list)

**Returns:** `List<T>`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public E get(int index)

**Parameters:**
- `int` `index`

**Returns:** `E`

### public E set(int index,
E element)

**Parameters:**
- `int` `index`
- `E` `element`

**Returns:** `E`

### public void add(int index,
E element)

**Parameters:**
- `int` `index`
- `E` `element`

**Returns:** `void`

### public E remove(int index)

**Parameters:**
- `int` `index`

**Returns:** `E`

### public int indexOf(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `int`

### public int lastIndexOf(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `int`

### public boolean addAll(int index,
Collection<? extends E> c)

**Parameters:**
- `int` `index`
- `Collection<? extends E>` `c`

**Returns:** `boolean`

### public void replaceAll(UnaryOperator<E> operator)

**Parameters:**
- `UnaryOperator<E>` `operator`

**Returns:** `void`

### public void sort(Comparator<? super E> c)

**Parameters:**
- `Comparator<? super E>` `c`

**Returns:** `void`

### public ListIterator<E> listIterator()

**Returns:** `ListIterator<E>`

### public ListIterator<E> listIterator(int index)

**Parameters:**
- `int` `index`

**Returns:** `ListIterator<E>`

### public List<E> subList(int fromIndex,
int toIndex)

**Parameters:**
- `int` `fromIndex`
- `int` `toIndex`

**Returns:** `List<E>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\list\PZUnmodifiableList.html`*
