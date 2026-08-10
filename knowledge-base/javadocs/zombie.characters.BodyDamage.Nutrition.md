---
title: zombie.characters.BodyDamage.Nutrition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.BodyDamage
---

# zombie.characters.BodyDamage.Nutrition

`public final class Nutrition extends Object`

**Kind:** class · **Package:** zombie.characters.BodyDamage

## Inheritance
- java.lang.Object
- zombie.characters.BodyDamage.Nutrition

## Constructors

### public Nutrition(IsoPlayer parent)

**Parameters:**
- `IsoPlayer` `parent`

## Methods

### public void update()

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void applyWeightFromTraits()

**Returns:** `void`

### public void applyTraitFromWeight()

> 100 obese 85 to 100 over weight 75 to 85 normal 65 to 75 underweight 50 to
65 very underweight invalid input: '<'= 50 emaciated

**Returns:** `void`

### public boolean characterHaveWeightTrouble()

**Returns:** `boolean`

### public boolean canAddFitnessXp()

You gain xp only if you're in good shape As underweight or overweight you can
still be "fit"

**Returns:** `boolean`

### public float getCarbohydrates()

**Returns:** `float`

### public void setCarbohydrates(float carbohydrates)

**Parameters:**
- `float` `carbohydrates`

**Returns:** `void`

### public float getProteins()

**Returns:** `float`

### public void setProteins(float proteins)

**Parameters:**
- `float` `proteins`

**Returns:** `void`

### public float getCalories()

**Returns:** `float`

### public void setCalories(float calories)

**Parameters:**
- `float` `calories`

**Returns:** `void`

### public float getLipids()

**Returns:** `float`

### public void setLipids(float lipids)

**Parameters:**
- `float` `lipids`

**Returns:** `void`

### public double getWeight()

**Returns:** `double`

### public void setWeight(double weight)

**Parameters:**
- `double` `weight`

**Returns:** `void`

### public boolean isIncWeight()

**Returns:** `boolean`

### public void setIncWeight(boolean incWeight)

**Parameters:**
- `boolean` `incWeight`

**Returns:** `void`

### public boolean isIncWeightLot()

**Returns:** `boolean`

### public void setIncWeightLot(boolean incWeightLot)

**Parameters:**
- `boolean` `incWeightLot`

**Returns:** `void`

### public boolean isDecWeight()

**Returns:** `boolean`

### public void setDecWeight(boolean decWeight)

**Parameters:**
- `boolean` `decWeight`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BodyDamage\Nutrition.html`*
