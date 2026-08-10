---
title: zombie.characters.animals.AnimalDefinitions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalDefinitions

`public class AnimalDefinitions extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalDefinitions

## Fields

### public String animalTypeStr

### public Model bodyModel

### public Model bodyModelSkel

### public Model bodyModelFleece

### public String bodyModelStr

### public String bodyModelSkelNoHeadStr

### public Model bodyModelSkelNoHead

### public Model bodyModelHeadless

### public String bodyModelFleeceStr

### public String bodyModelSkelStr

### public String bodyModelHeadlessStr

### public String textureSkeleton

### public String textureSkeletonBloody

### public String textureRotten

### public String textureSkinned

### public String animset

### public String mate

### public float shadoww

### public float shadowfm

### public float shadowbm

### public float turnDelta

### public float animalSize

### public float minSize

### public float maxSize

### public int minAge

### public int minEnclosureSize

### public String babyType

### public int minAgeForBaby

### public int maxAgeGeriatric

### public boolean udder

### public boolean female

### public boolean male

### public ArrayList<AnimalGrowStage> stages

### public ArrayList<AnimalBreed> breeds

### public ArrayList<AnimalAllele> genome

### public boolean alwaysFleeHumans

### public boolean fleeZombies

### public boolean canBeAttached

### public boolean canBeTransported

### public float hungerMultiplier

### public float thirstMultiplier

### public float healthLossMultiplier

### public float wanderMul

### public int idleTypeNbr

### public int eatingTypeNbr

### public int sittingTypeNbr

### public boolean eatFromMother

### public boolean periodicRun

### public int pregnantPeriod

### public boolean eatGrass

### public boolean sitRandomly

### public ArrayList<String> eatTypeTrough

### public boolean canBeMilked

### public int minBaby

### public int maxBaby

### public int idleEmoteChance

### public int eggsPerDay

### public String eggType

### public int fertilizedTimeMax

### public int timeToHatch

### public boolean canBePicked

### public ArrayList<String> hutches

### public int enterHutchTime

### public int exitHutchTime

### public ArrayList<String> genes

### public float minMilk

### public float maxMilk

### public float maxWool

### public float minWeight

### public float maxWeight

### public String carcassItem

### public int attackDist

### public int attackTimer

### public boolean dontAttackOtherMale

### public boolean canBeFeedByHand

### public float baseDmg

### public String milkAnimPreset

### public ArrayList<String> feedByHandType

### public float trailerBaseSize

### public boolean canBePet

### public boolean attackBack

### public float collisionSize

### public float baseEncumbrance

### public int matingPeriodStart

### public int matingPeriodEnd

### public int timeBeforeNextPregnancy

### public float thirstHungerTrigger

### public boolean collidable

### public boolean canThump

### public boolean wild

### public int spottingDist

### public String group

### public boolean canBeAlerted

### public String dung

### public boolean attackIfStressed

### public int happyAnim

### public String ropeBone

### public int minClutchSize

### public int maxClutchSize

### public int layEggPeriodStart

### public boolean stressAboveGround

### public boolean canClimbStairs

### public boolean stressUnderRain

### public boolean canClimbFences

### public boolean needMom

### public boolean canBeDomesticated

### public int dungChancePerDay

### public float hungerBoost

### public float thirstBoost

### public float distToEat

### public boolean knockdownAttack

### public int minBodyPart

### public boolean canDoLaceration

### public float maxBlood

### public float minBlood

### public boolean litterEatTogether

### public boolean addTrackingXp

### public float corpseSize

### public float corpseLength

### public float idleSoundRadius

### public float idleSoundVolume

### public boolean canBeKilledWithoutWeapon

### public String feedByHandAnim

### public static HashMap<String, AnimalDefinitions> animalDefs

## Constructors

### public AnimalDefinitions()

## Methods

### public static HashMap<String, AnimalDefinitions> getAnimalDefs()

**Returns:** `HashMap<String, AnimalDefinitions>`

### public static ArrayList<AnimalDefinitions> getAnimalDefsArray()

**Returns:** `ArrayList<AnimalDefinitions>`

### public static void loadAnimalDefinitions()

**Returns:** `void`

### public AnimalBreed getBreedByName(String breedName)

**Parameters:**
- `String` `breedName`

**Returns:** `AnimalBreed`

### public AnimalBreed getRandomBreed()

**Returns:** `AnimalBreed`

### public static AnimalDefinitions getDef(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `AnimalDefinitions`

### public static AnimalDefinitions getDef(String animalType)

**Parameters:**
- `String` `animalType`

**Returns:** `AnimalDefinitions`

### public ArrayList<AnimalBreed> getBreeds()

**Returns:** `ArrayList<AnimalBreed>`

### public String getAnimalType()

**Returns:** `String`

### public String getBodyModelStr()

**Returns:** `String`

### public boolean isInsideHutchTime(Integer hour)

**Parameters:**
- `Integer` `hour`

**Returns:** `boolean`

### public boolean isOutsideHutchTime()

**Returns:** `boolean`

### public String getGroup()

**Returns:** `String`

### public static void Reset()

**Returns:** `void`

### public boolean canBeSkeleton()

**Returns:** `boolean`

### public int getMinBaby()

**Returns:** `int`

### public int getMaxBaby()

**Returns:** `int`

### public String getBabyType()

**Returns:** `String`

### public float getWildFleeTimeUntilDeadTimer()

**Returns:** `float`

### public AnimalGrowStage getGrowStage()

**Returns:** `AnimalGrowStage`

### public boolean isBaby()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalDefinitions.html`*
