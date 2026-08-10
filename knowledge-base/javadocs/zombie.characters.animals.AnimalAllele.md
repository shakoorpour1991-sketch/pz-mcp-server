---
title: zombie.characters.animals.AnimalAllele
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalAllele

`public class AnimalAllele extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalAllele

## Fields

### public String name

### public float currentValue

### public float trueRatioValue

### public boolean dominant

### public boolean used

### public String geneticDisorder

## Constructors

### public AnimalAllele()

### public AnimalAllele(AnimalAllele allele)

**Parameters:**
- `AnimalAllele` `allele`

## Methods

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public float getCurrentValue()

**Returns:** `float`

### public void setCurrentValue(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public float getTrueRatioValue()

**Returns:** `float`

### public void setTrueRatioValue(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public boolean isDominant()

**Returns:** `boolean`

### public void setDominant(boolean dom)

**Parameters:**
- `boolean` `dom`

**Returns:** `void`

### public void setUsed(boolean used)

**Parameters:**
- `boolean` `used`

**Returns:** `void`

### public boolean isUsed()

**Returns:** `boolean`

### public String getGeneticDisorder()

**Returns:** `String`

### public void setGeneticDisorder(String gd)

**Parameters:**
- `String` `gd`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalAllele.html`*
