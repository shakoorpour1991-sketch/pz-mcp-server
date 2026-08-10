---
title: zombie.PersistentOutfits
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.PersistentOutfits

`public class PersistentOutfits extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.PersistentOutfits

## Fields

### public static final PersistentOutfits instance

### public static final int INVALID_ID

### public static final int FEMALE_BIT

### public static final int NO_HAT_BIT

## Constructors

### public PersistentOutfits()

## Methods

### public void init()

**Returns:** `void`

### public ArrayList<String> getOutfitNames()

**Returns:** `ArrayList<String>`

### public int pickRandomFemale()

**Returns:** `int`

### public int pickRandomMale()

**Returns:** `int`

### public int pickOutfitFemale(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `int`

### public int pickOutfitMale(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `int`

### public int pickOutfit(String outfitName,
boolean female)

**Parameters:**
- `String` `outfitName`
- `boolean` `female`

**Returns:** `int`

### public int getOutfit(int id)

**Parameters:**
- `int` `id`

**Returns:** `int`

### public void save()

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load()

**Returns:** `void`

### public void load(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void registerOutfitter(String id,
boolean useSeed,
PersistentOutfits.IOutfitter outfitter)

**Parameters:**
- `String` `id`
- `boolean` `useSeed`
- `PersistentOutfits.IOutfitter` `outfitter`

**Returns:** `void`

### public boolean isHatFallen(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean isHatFallen(int outfitID)

**Parameters:**
- `int` `outfitID`

**Returns:** `boolean`

### public void setFallenHat(IsoGameCharacter chr,
boolean fallen)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `fallen`

**Returns:** `void`

### public boolean removeFallenHat(int outfitID,
IsoGameCharacter chr)

**Parameters:**
- `int` `outfitID`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void dressInOutfit(IsoGameCharacter chr,
int outfitID)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `outfitID`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\PersistentOutfits.html`*
