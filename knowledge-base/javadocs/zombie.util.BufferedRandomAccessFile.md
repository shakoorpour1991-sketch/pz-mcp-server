---
title: zombie.util.BufferedRandomAccessFile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.BufferedRandomAccessFile

`public final class BufferedRandomAccessFile extends RandomAccessFile`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- java.io.RandomAccessFile
- zombie.util.BufferedRandomAccessFile

## Constructors

### public BufferedRandomAccessFile(String filename,
String mode,
int bufsize)
throws IOException

**Parameters:**
- `String` `filename`
- `String` `mode`
- `int` `bufsize`

### public BufferedRandomAccessFile(File file,
String mode,
int bufsize)
throws IOException

**Parameters:**
- `File` `file`
- `String` `mode`
- `int` `bufsize`

## Methods

### public final int read()
throws IOException

**Returns:** `int`

### public int read(byte[] bb)
throws IOException

**Parameters:**
- `byte[]` `bb`

**Returns:** `int`

### public int read(byte[] b,
int off,
int len)
throws IOException

**Parameters:**
- `byte[]` `b`
- `int` `off`
- `int` `len`

**Returns:** `int`

### public long getFilePointer()
throws IOException

**Returns:** `long`

### public void seek(long pos)
throws IOException

**Parameters:**
- `long` `pos`

**Returns:** `void`

### public final String getNextLine()
throws IOException

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\BufferedRandomAccessFile.html`*
