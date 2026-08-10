---
title: zombie.characters.animals.datas.AnimalBreed
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals.datas
---

# zombie.characters.animals.datas.AnimalBreed

`public class AnimalBreed extends Object`

**Kind:** class · **Package:** zombie.characters.animals.datas

## Inheritance
- java.lang.Object
- zombie.characters.animals.datas.AnimalBreed

## Fields

### public String name

### public ArrayList<String> texture

### public String textureMale

### public String textureBaby

### public int minWeightBonus

### public int maxWeightBonus

### public String milkType

### public String woolType

### public HashMap<String, AnimalBreed.ForcedGenes> forcedGenes

### public String invIconMale

### public String invIconFemale

### public String invIconBaby

### public String invIconMaleDead

### public String invIconFemaleDead

### public String invIconBabyDead

### public String invIconMaleSkel

### public String invIconFemaleSkel

### public String invIconBabySkel

### public String leather

### public String headItem

### public String featherItem

### public int maxFeather

### public String rottenTexture

## Constructors

### public AnimalBreed()

## Methods

### public String getName()

**Returns:** `String`

### public String getMilkType()

**Returns:** `String`

### public void loadForcedGenes(se.krka.kahlua.j2se.KahluaTableImpl def)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `def`

**Returns:** `void`

### public void loadSounds(se.krka.kahlua.j2se.KahluaTableImpl soundsTable)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `soundsTable`

**Returns:** `void`

### public AnimalBreed.Sound getSound(String id)

**Parameters:**
- `String` `id`

**Returns:** `AnimalBreed.Sound`

### public boolean isSoundDefined(String id)

**Parameters:**
- `String` `id`

**Returns:** `boolean`

### public boolean isSoundUndefined(String id)

**Parameters:**
- `String` `id`

**Returns:** `boolean`

### public String getFeatherItem()

**Returns:** `String`

### public String getWoolType()

**Returns:** `String`

### public String getRottenTexture()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\datas\AnimalBreed.html`*
