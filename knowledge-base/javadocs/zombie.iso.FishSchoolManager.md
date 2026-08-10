---
title: zombie.iso.FishSchoolManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.FishSchoolManager

`public final class FishSchoolManager extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.FishSchoolManager

## Constructors

### public FishSchoolManager()

## Methods

### public static FishSchoolManager getInstance()

**Returns:** `FishSchoolManager`

### public void generateSeed()

**Returns:** `void`

### public void updateSeed()

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void updateFishingData()

**Returns:** `void`

### public void addSoundNoise(int x,
int y,
int radius)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `radius`

**Returns:** `void`

### public void addChum(int x,
int y,
int force)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `force`

**Returns:** `void`

### public void catchFish(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public double getFishAbundance(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `double`

### public double getTrashAbundance(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `double`

### public void setFishingData(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void receiveFishingData(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void load()

**Returns:** `void`

### public void save()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\FishSchoolManager.html`*
