---
title: zombie.inventory.types.Clothing.ClothingPatch
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Clothing.ClothingPatch

`public static class Clothing.ClothingPatch extends Object`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.inventory.types.Clothing.ClothingPatch

## Fields

### public int tailorLvl

### public int fabricType

### public int scratchDefense

### public int biteDefense

### public boolean hasHole

### public int conditionGain

## Constructors

### public ClothingPatch()

### public ClothingPatch(int tailorLvl,
int fabricType,
boolean hasHole)

**Parameters:**
- `int` `tailorLvl`
- `int` `fabricType`
- `boolean` `hasHole`

## Methods

### public String getFabricTypeName()

**Returns:** `String`

### public int getScratchDefense()

**Returns:** `int`

### public int getBiteDefense()

**Returns:** `int`

### public int getFabricType()

**Returns:** `int`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### @Deprecated
public void save_old(ByteBuffer output,
boolean net)
throws IOException

> ⚠️ **Deprecated**

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### @Deprecated
public void load_old(ByteBuffer input,
int worldVersion,
boolean net)
throws IOException

> ⚠️ **Deprecated**

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `net`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Clothing.ClothingPatch.html`*
