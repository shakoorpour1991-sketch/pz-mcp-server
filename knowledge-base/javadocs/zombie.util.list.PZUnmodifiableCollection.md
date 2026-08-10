---
title: zombie.util.list.PZUnmodifiableCollection
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.list
---

# zombie.util.list.PZUnmodifiableCollection

`public class PZUnmodifiableCollection<E> extends Object implements Collection<E>`

**Kind:** class · **Package:** zombie.util.list

## Inheritance
- java.lang.Object
- zombie.util.list.PZUnmodifiableCollection<E>

## Methods

### public int size()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean contains(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public Object[] toArray()

**Returns:** `Object[]`

### public <T> T[] toArray(T[] a)

**Returns:** `T[]`

### public <T> T[] toArray(IntFunction<T[]> f)

**Returns:** `T[]`

### public String toString()

**Returns:** `String`

### public Iterator<E> iterator()

**Returns:** `Iterator<E>`

### public boolean add(E e)

**Parameters:**
- `E` `e`

**Returns:** `boolean`

### public boolean remove(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public boolean containsAll(Collection<?> coll)

**Parameters:**
- `Collection<?>` `coll`

**Returns:** `boolean`

### public boolean addAll(Collection<? extends E> coll)

**Parameters:**
- `Collection<? extends E>` `coll`

**Returns:** `boolean`

### public boolean removeAll(Collection<?> coll)

**Parameters:**
- `Collection<?>` `coll`

**Returns:** `boolean`

### public boolean retainAll(Collection<?> coll)

**Parameters:**
- `Collection<?>` `coll`

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public void forEach(Consumer<? super E> action)

**Parameters:**
- `Consumer<? super E>` `action`

**Returns:** `void`

### public boolean removeIf(Predicate<? super E> filter)

**Parameters:**
- `Predicate<? super E>` `filter`

**Returns:** `boolean`

### public Spliterator<E> spliterator()

**Returns:** `Spliterator<E>`

### public Stream<E> stream()

**Returns:** `Stream<E>`

### public Stream<E> parallelStream()

**Returns:** `Stream<E>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\list\PZUnmodifiableCollection.html`*
