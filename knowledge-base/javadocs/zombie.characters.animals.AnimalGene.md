---
title: zombie.characters.animals.AnimalGene
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalGene

`public class AnimalGene extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalGene

## Fields

### public String name

### public int id

### public AnimalAllele allele1

### public AnimalAllele allele2

## Constructors

### public AnimalGene()

### public AnimalGene(AnimalGene gene)

**Parameters:**
- `AnimalGene` `gene`

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

### public static void initGenome(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void initUsedGene()

**Returns:** `void`

### public static void doRatio(AnimalGenomeDefinitions def,
HashMap<String, AnimalGene> fullGenome,
AnimalAllele allele)

**Parameters:**
- `AnimalGenomeDefinitions` `def`
- `HashMap<String, AnimalGene>` `fullGenome`
- `AnimalAllele` `allele`

**Returns:** `void`

### public static HashMap<String, AnimalGene> initGenesFromParents(HashMap<String, AnimalGene> femaleGenome,
HashMap<String, AnimalGene> maleGenome)

**Parameters:**
- `HashMap<String, AnimalGene>` `femaleGenome`
- `HashMap<String, AnimalGene>` `maleGenome`

**Returns:** `HashMap<String, AnimalGene>`

### public static void checkGeneticDisorder(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public static void doMutation(AnimalAllele allele)

**Parameters:**
- `AnimalAllele` `allele`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public AnimalAllele getAllele1()

**Returns:** `AnimalAllele`

### public AnimalAllele getAllele2()

**Returns:** `AnimalAllele`

### public AnimalAllele getUsedGene()

**Returns:** `AnimalAllele`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalGene.html`*
