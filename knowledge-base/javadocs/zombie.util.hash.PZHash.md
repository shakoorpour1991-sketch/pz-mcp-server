---
title: zombie.util.hash.PZHash
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.hash
---

# zombie.util.hash.PZHash

`public class PZHash extends Object`

**Kind:** class · **Package:** zombie.util.hash

## Inheritance
- java.lang.Object
- zombie.util.hash.PZHash

## Constructors

### public PZHash()

## Methods

### public static long sha256_64(String input)

**Parameters:**
- `String` `input`

**Returns:** `long`

### public static int fnv_32(String text)

**Parameters:**
- `String` `text`

**Returns:** `int`

### public static int fnv_32(byte[] data)

**Parameters:**
- `byte[]` `data`

**Returns:** `int`

### public static int fnv_32(byte[] data,
int length)

**Parameters:**
- `byte[]` `data`
- `int` `length`

**Returns:** `int`

### public static int fnv_32_init()

**Returns:** `int`

### public static int fnv_32_hash(int hash,
int data)

**Parameters:**
- `int` `hash`
- `int` `data`

**Returns:** `int`

### public static long fnv_64(String text)

**Parameters:**
- `String` `text`

**Returns:** `long`

### public static long fnv_64(byte[] data)

**Parameters:**
- `byte[]` `data`

**Returns:** `long`

### public static long fnv_64(byte[] data,
int length)

**Parameters:**
- `byte[]` `data`
- `int` `length`

**Returns:** `long`

### public static int murmur_32(String text)

**Parameters:**
- `String` `text`

**Returns:** `int`

### public static int murmur_32(byte[] data,
int length)

**Parameters:**
- `byte[]` `data`
- `int` `length`

**Returns:** `int`

### public static int murmur_32(byte[] data,
int length,
int seed)

**Parameters:**
- `byte[]` `data`
- `int` `length`
- `int` `seed`

**Returns:** `int`

### public static long murmur_64(String text)

**Parameters:**
- `String` `text`

**Returns:** `long`

### public static long murmur_64(byte[] data,
int length)

**Parameters:**
- `byte[]` `data`
- `int` `length`

**Returns:** `long`

### public static long murmur_64(byte[] data,
int length,
int seed)

**Parameters:**
- `byte[]` `data`
- `int` `length`
- `int` `seed`

**Returns:** `long`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\hash\PZHash.html`*
