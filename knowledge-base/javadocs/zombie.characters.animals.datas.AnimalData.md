---
title: zombie.characters.animals.datas.AnimalData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals.datas
---

# zombie.characters.animals.datas.AnimalData

`public class AnimalData extends Object`

**Kind:** class · **Package:** zombie.characters.animals.datas

## Inheritance
- java.lang.Object
- zombie.characters.animals.datas.AnimalData

## Fields

### public IsoAnimal parent

### public IsoPlayer attachedPlayer

### public AnimalBreed breed

### public float milkQty

### public float woolQty

### public boolean canHaveMilk

### public float weight

### public int lastHourCheck

### public AnimalGrowStage currentStage

### public boolean pregnant

### public int pregnantTime

### public ArrayList<IsoAnimal> animalToInseminate

### public float maxMilkActual

### public boolean goingToMomTest

### public boolean goingToMom

### public float goingToMomTimer

### public boolean eatingGrass

### public int eggsToday

### public long eggTime

### public boolean fertilized

### public int fertilizedTime

### public HashMap<String, AnimalGene> maleGenome

### public IsoFeedingTrough troughToCheck

### public long lastMilkTimer

### public long lastPregnancyTime

### public static final long ONE_WEEK_MILLISECONDS

### public static final long ONE_DAY_MILLISECONDS

### public static final long ONE_HOUR_MILLISECONDS

### public static final int FEATHER_CHANCE_PER_HOUR

### public static final float HUNGER_PER_DRAINABLE_USE

### public int lastImpregnateTime

### public int clutchSize

### public boolean clutchSizeDone

### public int enterHutchTimerAfterDestroy

## Constructors

### public AnimalData(IsoAnimal parent,
AnimalBreed breed)

**Parameters:**
- `IsoAnimal` `parent`
- `AnimalBreed` `breed`

## Methods

### public void checkStages()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void callToTrough(IsoFeedingTrough trough)

**Parameters:**
- `IsoFeedingTrough` `trough`

**Returns:** `void`

### public float getAgeGrowModifier()

**Returns:** `float`

### public void growUp(boolean meta)

**Parameters:**
- `boolean` `meta`

**Returns:** `void`

### public InventoryItem checkPoop(boolean meta,
boolean bForce)

**Parameters:**
- `boolean` `meta`
- `boolean` `bForce`

**Returns:** `InventoryItem`

### public InventoryItem dropFeather(boolean meta)

**Parameters:**
- `boolean` `meta`

**Returns:** `InventoryItem`

### public void updateHungerAndThirst(boolean fromMeta)

**Parameters:**
- `boolean` `fromMeta`

**Returns:** `void`

### public boolean reduceHealthDueToMilk()

**Returns:** `boolean`

### public void updateHealth()

**Returns:** `void`

### public void hourGrow(boolean meta)

**Parameters:**
- `boolean` `meta`

**Returns:** `void`

### public float getHealthLoss(Float divide)

**Parameters:**
- `Float` `divide`

**Returns:** `float`

### public float getMaxMilk()

**Returns:** `float`

### public float getMaxMilkActual()

**Returns:** `float`

### public void setMaxMilkActual(float maxMilkActual)

**Parameters:**
- `float` `maxMilkActual`

**Returns:** `void`

### public float getMaxWool()

**Returns:** `float`

### public float getMinMilk()

**Returns:** `float`

### public float getMilkInc()

**Returns:** `float`

### public float getWoolInc()

**Returns:** `float`

### public void checkEggs(PZCalendar realCal,
boolean meta)

**Parameters:**
- `PZCalendar` `realCal`
- `boolean` `meta`

**Returns:** `void`

### public void checkFertilizedTime()

**Returns:** `void`

### public int getPregnantPeriod()

**Returns:** `int`

### @Deprecated
public ArrayList<IsoFeedingTrough> getRandomTroughList()

> ⚠️ **Deprecated**

**Returns:** `ArrayList<IsoFeedingTrough>`

### public static void shuffleList(ArrayList<IsoFeedingTrough> a)

**Parameters:**
- `ArrayList<IsoFeedingTrough>` `a`

**Returns:** `void`

### public void resetEatingCheck()

**Returns:** `void`

### public void drinkFromGround()

**Returns:** `void`

### public void drink()

**Returns:** `void`

### public void eatItem(InventoryItem item,
boolean onground)

**Parameters:**
- `InventoryItem` `item`
- `boolean` `onground`

**Returns:** `void`

### public void eat()

**Returns:** `void`

### public boolean canBePregnant()

**Returns:** `boolean`

### public void tryInseminateInMeta(PZCalendar realCal)

**Parameters:**
- `PZCalendar` `realCal`

**Returns:** `void`

### public void findFemaleToInseminate(PZCalendar realCal)

**Parameters:**
- `PZCalendar` `realCal`

**Returns:** `void`

### public void initSize()

**Returns:** `void`

### public void initWeight()

**Returns:** `void`

### public void initStage()

**Returns:** `void`

### public void grow(String newtype)

**Parameters:**
- `String` `newtype`

**Returns:** `void`

### public int getDaysSurvived()

**Returns:** `int`

### public boolean canHaveBaby()

**Returns:** `boolean`

### public void init()

**Returns:** `void`

### public void setAttachedPlayer(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `void`

### public IsoPlayer getAttachedPlayer()

**Returns:** `IsoPlayer`

### public void setAttachedTree(IsoObject tree)

**Parameters:**
- `IsoObject` `tree`

**Returns:** `void`

### public IsoObject getAttachedTree()

**Returns:** `IsoObject`

### public int getAttachedTreeX()

**Returns:** `int`

### public int getAttachedTreeY()

**Returns:** `int`

### public AnimalBreed getBreed()

**Returns:** `AnimalBreed`

### public void setBreed(AnimalBreed breed)

**Parameters:**
- `AnimalBreed` `breed`

**Returns:** `void`

### public float getMilkQuantity()

**Returns:** `float`

### public void setMilkQuantity(float milkQty)

**Parameters:**
- `float` `milkQty`

**Returns:** `void`

### public void setSize(float size)

**Parameters:**
- `float` `size`

**Returns:** `void`

### public void setSizeForced(float size)

**Parameters:**
- `float` `size`

**Returns:** `void`

### public float getSize()

**Returns:** `float`

### public float getOriginalSize()

**Returns:** `float`

### public void setAge(int age)

**Parameters:**
- `int` `age`

**Returns:** `void`

### public int getAge()

**Returns:** `int`

### public ArrayList<AnimalGrowStage> getGrowStage()

**Returns:** `ArrayList<AnimalGrowStage>`

### public float getWeight()

**Returns:** `float`

### public boolean isFemale()

**Returns:** `boolean`

### public String getAgeString(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `String`

### public boolean canHaveMilk()

**Returns:** `boolean`

### public void setCanHaveMilk(boolean canHaveMilk)

**Parameters:**
- `boolean` `canHaveMilk`

**Returns:** `void`

### public void setPregnant(boolean pregnant)

**Parameters:**
- `boolean` `pregnant`

**Returns:** `void`

### public boolean isPregnant()

**Returns:** `boolean`

### public int getPregnancyTime()

**Returns:** `int`

### public void setPregnancyTime(int period)

**Parameters:**
- `int` `period`

**Returns:** `void`

### public boolean isFertilized()

**Returns:** `boolean`

### public void setFertilized(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getFertilizedTime()

**Returns:** `int`

### public int setFertilizedTime(int period)

**Parameters:**
- `int` `period`

**Returns:** `int`

### public float getWoolQuantity()

**Returns:** `float`

### public void setMaleGenome(HashMap<String, AnimalGene> maleGenome)

**Parameters:**
- `HashMap<String, AnimalGene>` `maleGenome`

**Returns:** `void`

### public void setWoolQuantity(float woolQty,
boolean force)

**Parameters:**
- `float` `woolQty`
- `boolean` `force`

**Returns:** `void`

### public void setWoolQuantity(float woolQty)

**Parameters:**
- `float` `woolQty`

**Returns:** `void`

### public IsoHutch getRegionHutch()

**Returns:** `IsoHutch`

### public float getGeriatricPercentage()

**Returns:** `float`

### public float getMaxAgeGeriatric()

**Returns:** `float`

### public float getMinSize()

**Returns:** `float`

### public float getMaxSize()

**Returns:** `float`

### public float getMinWeight()

**Returns:** `float`

### public float getMaxWeight()

**Returns:** `float`

### public void setWeight(float weight)

**Parameters:**
- `float` `weight`

**Returns:** `void`

### public int getHutchPosition()

**Returns:** `int`

### public void setHutchPosition(int hutchPosition)

**Parameters:**
- `int` `hutchPosition`

**Returns:** `void`

### public int getPreferredHutchPosition()

**Returns:** `int`

### public void setPreferredHutchPosition(int preferredHutchPosition)

**Parameters:**
- `int` `preferredHutchPosition`

**Returns:** `void`

### public int getTimeBeforeNextPregnancy()

**Returns:** `int`

### public String getLastPregnancyPeriod()

**Returns:** `String`

### public void updateLastPregnancyTime()

**Returns:** `void`

### public int getLastImpregnatePeriod(PZCalendar realCal)

**Parameters:**
- `PZCalendar` `realCal`

**Returns:** `int`

### public Float getLastTimeMilkedInHour()

**Returns:** `Float`

### public void updateLastTimeMilked()

**Returns:** `void`

### public String getDebugBehaviorString()

**Returns:** `String`

### public boolean isInLayingEggPeriod(PZCalendar cal)

**Parameters:**
- `PZCalendar` `cal`

**Returns:** `boolean`

### public boolean haveLayingEggPeriod()

**Returns:** `boolean`

### public int getClutchSize()

**Returns:** `int`

### public String getInventoryIconTextureName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\datas\AnimalData.html`*
