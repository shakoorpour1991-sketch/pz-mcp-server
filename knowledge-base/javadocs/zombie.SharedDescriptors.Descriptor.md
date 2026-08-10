---
title: zombie.SharedDescriptors.Descriptor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SharedDescriptors.Descriptor

`public static final class SharedDescriptors.Descriptor extends Object implements IHumanVisual`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.SharedDescriptors.Descriptor

## Fields

### public int id

### public int persistentOutfitId

### public String outfitName

### public final HumanVisual humanVisual

### public final ItemVisuals itemVisuals

### public boolean female

### public boolean zombie

## Constructors

### public Descriptor()

## Methods

### public int getID()

**Returns:** `int`

### public int getPersistentOutfitID()

**Returns:** `int`

### public HumanVisual getHumanVisual()

**Returns:** `HumanVisual`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isFemale()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isSkeleton()

**Returns:** `boolean`

### public void save(ByteBufferWriter output)
throws IOException

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void load(ByteBufferReader input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBufferReader` `input`
- `int` `worldVersion`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SharedDescriptors.Descriptor.html`*
