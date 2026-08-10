---
title: zombie.ZomboidBitFlag
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.ZomboidBitFlag

`public final class ZomboidBitFlag extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.ZomboidBitFlag

## Constructors

### public ZomboidBitFlag(int size)

**Parameters:**
- `int` `size`

### public ZomboidBitFlag(ZomboidBitFlag fl)

**Parameters:**
- `ZomboidBitFlag` `fl`

## Methods

### public void set(int off,
boolean b)

**Parameters:**
- `int` `off`
- `boolean` `b`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public boolean isSet(int off)

**Parameters:**
- `int` `off`

**Returns:** `boolean`

### public boolean isSet(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `boolean`

### public void set(IsoFlagType flag,
boolean b)

**Parameters:**
- `IsoFlagType` `flag`
- `boolean` `b`

**Returns:** `void`

### public boolean isSet(IsoObjectType flag)

**Parameters:**
- `IsoObjectType` `flag`

**Returns:** `boolean`

### public void set(IsoObjectType flag,
boolean b)

**Parameters:**
- `IsoObjectType` `flag`
- `boolean` `b`

**Returns:** `void`

### public void Or(ZomboidBitFlag spriteFlags)

**Parameters:**
- `ZomboidBitFlag` `spriteFlags`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void load(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `void`

### public void getFromLong(long l)

**Parameters:**
- `long` `l`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ZomboidBitFlag.html`*
