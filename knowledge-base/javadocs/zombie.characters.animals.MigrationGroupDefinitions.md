---
title: zombie.characters.animals.MigrationGroupDefinitions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.MigrationGroupDefinitions

`public class MigrationGroupDefinitions extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.MigrationGroupDefinitions

## Fields

### public String type

### public String male

### public String female

### public String baby

### public int minAnimal

### public int maxAnimal

### public int maxMale

### public int babyChance

### public int minTimeBeforeEat

### public int maxTimeBeforeEat

### public int timeToEat

### public int minTimeBeforeSleep

### public int maxTimeBeforeSleep

### public ArrayList<String> sleepPeriodStart

### public ArrayList<String> sleepPeriodEnd

### public ArrayList<String> eatPeriodStart

### public ArrayList<String> eatPeriodEnd

### public int timeToSleep

### public float speed

### public int trackChance

### public int poopChance

### public int brokenTwigsChance

### public int herbGrazeChance

### public int furChance

### public int flatHerbChance

### public static HashMap<String, MigrationGroupDefinitions> migrationDef

## Constructors

### public MigrationGroupDefinitions()

## Methods

### public static HashMap<String, MigrationGroupDefinitions> getMigrationDefs()

**Returns:** `HashMap<String, MigrationGroupDefinitions>`

### public static void loadMigrationsDefinitions()

**Returns:** `void`

### public static ArrayList<IsoAnimal> generatePossibleAnimals(VirtualAnimal vAnimal,
String type)

**Parameters:**
- `VirtualAnimal` `vAnimal`
- `String` `type`

**Returns:** `ArrayList<IsoAnimal>`

### public static double getNextEatTime(String animalType)

**Parameters:**
- `String` `animalType`

**Returns:** `double`

### public static double getNextSleepTime(String animalType)

**Parameters:**
- `String` `animalType`

**Returns:** `double`

### public String getRandBreed()

**Returns:** `String`

### public static void initValueFromDef(VirtualAnimal animal)

**Parameters:**
- `VirtualAnimal` `animal`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\MigrationGroupDefinitions.html`*
