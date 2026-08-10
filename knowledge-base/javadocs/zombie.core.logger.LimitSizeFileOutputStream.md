---
title: zombie.core.logger.LimitSizeFileOutputStream
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.logger
---

# zombie.core.logger.LimitSizeFileOutputStream

`public final class LimitSizeFileOutputStream extends FilterOutputStream`

**Kind:** class · **Package:** zombie.core.logger

## Inheritance
- java.lang.Object
- java.io.OutputStream
- java.io.FilterOutputStream
- zombie.core.logger.LimitSizeFileOutputStream

## Constructors

### public LimitSizeFileOutputStream(File file,
int maxKilobytes)
throws FileNotFoundException

**Parameters:**
- `File` `file`
- `int` `maxKilobytes`

## Methods

### public void write(int b)
throws IOException

**Parameters:**
- `int` `b`

**Returns:** `void`

### public void write(byte[] b)
throws IOException

**Parameters:**
- `byte[]` `b`

**Returns:** `void`

### public void write(byte[] b,
int off,
int len)
throws IOException

**Parameters:**
- `byte[]` `b`
- `int` `off`
- `int` `len`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\logger\LimitSizeFileOutputStream.html`*
