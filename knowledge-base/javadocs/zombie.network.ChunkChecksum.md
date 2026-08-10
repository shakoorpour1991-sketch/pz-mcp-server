---
title: zombie.network.ChunkChecksum
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ChunkChecksum

`public class ChunkChecksum extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ChunkChecksum

## Constructors

### public ChunkChecksum()

## Methods

### public static long getChecksum(int wx,
int wy)
throws IOException

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `long`

### public static long getChecksumIfExists(int wx,
int wy)
throws IOException

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `long`

### public static void setChecksum(int wx,
int wy,
long crc)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `long` `crc`

**Returns:** `void`

### public static long createChecksum(String filename)
throws IOException

**Parameters:**
- `String` `filename`

**Returns:** `long`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ChunkChecksum.html`*
