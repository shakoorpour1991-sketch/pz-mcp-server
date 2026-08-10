---
title: zombie.entity.util.Predicate.PredicateIterator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util
---

# zombie.entity.util.Predicate.PredicateIterator

`public static class Predicate.PredicateIterator<T> extends Object implements Iterator<T>`

**Kind:** class · **Package:** zombie.entity.util

## Inheritance
- java.lang.Object
- zombie.entity.util.Predicate.PredicateIterator<T>

## Fields

### public Iterator<T> iterator

### public Predicate<T> predicate

### public boolean end

### public boolean peeked

### public T next

## Constructors

### public PredicateIterator(Iterable<T> iterable,
Predicate<T> predicate)

**Parameters:**
- `Iterable<T>` `iterable`
- `Predicate<T>` `predicate`

### public PredicateIterator(Iterator<T> iterator,
Predicate<T> predicate)

**Parameters:**
- `Iterator<T>` `iterator`
- `Predicate<T>` `predicate`

## Methods

### public void set(Iterable<T> iterable,
Predicate<T> predicate)

**Parameters:**
- `Iterable<T>` `iterable`
- `Predicate<T>` `predicate`

**Returns:** `void`

### public void set(Iterator<T> iterator,
Predicate<T> predicate)

**Parameters:**
- `Iterator<T>` `iterator`
- `Predicate<T>` `predicate`

**Returns:** `void`

### public boolean hasNext()

**Returns:** `boolean`

### public T next()

**Returns:** `T`

### public void remove()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\Predicate.PredicateIterator.html`*
