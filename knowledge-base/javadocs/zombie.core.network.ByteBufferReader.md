---
title: zombie.core.network.ByteBufferReader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.network
---

# zombie.core.network.ByteBufferReader

`public final class ByteBufferReader extends Object`

**Kind:** class · **Package:** zombie.core.network

## Inheritance
- java.lang.Object
- zombie.core.network.ByteBufferReader

## Fields

### public final ByteBuffer bb

## Constructors

### public ByteBufferReader(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

## Methods

### public boolean getBoolean()

**Returns:** `boolean`

### public byte getByte()

**Returns:** `byte`

### public char getChar()

**Returns:** `char`

### public double getDouble()

**Returns:** `double`

### public float getFloat()

**Returns:** `float`

### public int getInt()

**Returns:** `int`

### public long getLong()

**Returns:** `long`

### public short getShort()

**Returns:** `short`

### public String getUTF()

**Returns:** `String`

### public <E extends Enum<E>> E getEnum(Class<E> clazz)

**Returns:** `E`

### public void position(int newPosition)

**Parameters:**
- `int` `newPosition`

**Returns:** `void`

### public int position()

**Returns:** `int`

### public void flip()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void put(byte[] src,
int offset,
int length)

**Parameters:**
- `byte[]` `src`
- `int` `offset`
- `int` `length`

**Returns:** `void`

### public int limit()

**Returns:** `int`

### public void put(ByteBuffer src)

**Parameters:**
- `ByteBuffer` `src`

**Returns:** `void`

### public void rewind()

**Returns:** `void`

### public int capacity()

**Returns:** `int`

### public byte[] array()

**Returns:** `byte[]`

### public int remaining()

**Returns:** `int`

### public void get(byte[] dst)

**Parameters:**
- `byte[]` `dst`

**Returns:** `void`

### public void get(byte[] dst,
int offet,
int length)

**Parameters:**
- `byte[]` `dst`
- `int` `offet`
- `int` `length`

**Returns:** `void`

### public void mark()

**Returns:** `void`

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\network\ByteBufferReader.html`*
