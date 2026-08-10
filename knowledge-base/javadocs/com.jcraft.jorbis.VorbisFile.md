---
title: com.jcraft.jorbis.VorbisFile
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: com.jcraft.jorbis
---

# com.jcraft.jorbis.VorbisFile

`public class VorbisFile extends Object`

**Kind:** class · **Package:** com.jcraft.jorbis

## Inheritance
- java.lang.Object
- com.jcraft.jorbis.VorbisFile

## Constructors

### public VorbisFile(String string)
throws JOrbisException

**Parameters:**
- `String` `string`

### public VorbisFile(InputStream inputStream,
byte[] bytes,
int int1)
throws JOrbisException

**Parameters:**
- `InputStream` `inputStream`
- `byte[]` `bytes`
- `int` `int1`

## Methods

### public int bitrate(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public int bitrate_instant()

**Returns:** `int`

### public void close()
throws IOException

**Returns:** `void`

### public Comment[] getComment()

**Returns:** `Comment[]`

### public Comment getComment(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `Comment`

### public Info[] getInfo()

**Returns:** `Info[]`

### public Info getInfo(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `Info`

### public int pcm_seek(long long1)

**Parameters:**
- `long` `long1`

**Returns:** `int`

### public long pcm_tell()

**Returns:** `long`

### public long pcm_total(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `long`

### public int raw_seek(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public long raw_tell()

**Returns:** `long`

### public long raw_total(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `long`

### public boolean seekable()

**Returns:** `boolean`

### public int serialnumber(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public int streams()

**Returns:** `int`

### public float time_tell()

**Returns:** `float`

### public float time_total(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\com\jcraft\jorbis\VorbisFile.html`*
