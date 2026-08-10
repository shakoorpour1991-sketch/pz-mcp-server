---
title: zombie.entity.util.enums.EnumBitStore
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.util.enums
---

# zombie.entity.util.enums.EnumBitStore

`public class EnumBitStore<E extends Enum<E> & IOEnum> extends Object`

**Kind:** class · **Package:** zombie.entity.util.enums

## Inheritance
- java.lang.Object
- zombie.entity.util.enums.EnumBitStore<E>

## Methods

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> noneOf(Class<E> elementType)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> allOf(Class<E> elementType)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> copyOf(EnumBitStore<E> other)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> of(E e)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> of(E e1,
E e2)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> of(E e1,
E e2,
E e3)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> of(E e1,
E e2,
E e3,
E e4)

**Returns:** `EnumBitStore<E>`

### public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> of(E e1,
E e2,
E e3,
E e4,
E e5)

**Returns:** `EnumBitStore<E>`

### @SafeVarargs
public static <E extends Enum<E> & IOEnum>
EnumBitStore<E> of(E first,
E... rest)

**Returns:** `EnumBitStore<E>`

### public void copyFrom(EnumBitStore<E> other)

**Parameters:**
- `EnumBitStore<E>` `other`

**Returns:** `void`

### public void addAll(EnumBitStore<E> other)

**Parameters:**
- `EnumBitStore<E>` `other`

**Returns:** `void`

### public void addAll()

**Returns:** `void`

### public void add(E e)

**Parameters:**
- `E` `e`

**Returns:** `void`

### public void remove(E e)

**Parameters:**
- `E` `e`

**Returns:** `void`

### public boolean contains(E e)

**Parameters:**
- `E` `e`

**Returns:** `boolean`

### public boolean contains(int bits)

**Parameters:**
- `int` `bits`

**Returns:** `boolean`

### public int size()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public int getBits()

**Returns:** `int`

### public void setBits(int bits)

**Parameters:**
- `int` `bits`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public Iterator<E> iterator()

**Returns:** `Iterator<E>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\util\enums\EnumBitStore.html`*
