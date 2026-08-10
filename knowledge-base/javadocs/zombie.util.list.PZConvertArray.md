---
title: zombie.util.list.PZConvertArray
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.list
---

# zombie.util.list.PZConvertArray

`public final class PZConvertArray<S,T> extends AbstractList<T> implements RandomAccess`

**Kind:** class · **Package:** zombie.util.list

## Inheritance
- java.lang.Object
- java.util.AbstractCollection<T>
- java.util.AbstractList<T>
- zombie.util.list.PZConvertArray<S,T>

## Constructors

### public PZConvertArray(S[] array,
Function<S,T> converterSt)

**Parameters:**
- `S[]` `array`
- `Function<S,T>` `converterSt`

### public PZConvertArray(S[] array,
Function<S,T> converterSt,
Function<T,S> converterTs)

**Parameters:**
- `S[]` `array`
- `Function<S,T>` `converterSt`
- `Function<T,S>` `converterTs`

## Methods

### public boolean isReadonly()

**Returns:** `boolean`

### public int size()

**Returns:** `int`

### public Object[] toArray()

**Returns:** `Object[]`

### public <R> R[] toArray(R[] result)

**Returns:** `R[]`

### public T get(int index)

**Parameters:**
- `int` `index`

**Returns:** `T`

### public T set(int index,
T element)

**Parameters:**
- `int` `index`
- `T` `element`

**Returns:** `T`

### public S setS(int index,
S element)

**Parameters:**
- `int` `index`
- `S` `element`

**Returns:** `S`

### public int indexOf(Object val)

**Parameters:**
- `Object` `val`

**Returns:** `int`

### public boolean contains(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public void forEach(Consumer<? super T> action)

**Parameters:**
- `Consumer<? super T>` `action`

**Returns:** `void`

### public void replaceAll(UnaryOperator<T> operator)

**Parameters:**
- `UnaryOperator<T>` `operator`

**Returns:** `void`

### public void sort(Comparator<? super T> c)

**Parameters:**
- `Comparator<? super T>` `c`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\list\PZConvertArray.html`*
