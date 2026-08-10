---
title: zombie.characters.BodyDamage.BodyDamage
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.BodyDamage
---

# zombie.characters.BodyDamage.BodyDamage

`public final class BodyDamage extends Object`

**Kind:** class · **Package:** zombie.characters.BodyDamage

## Inheritance
- java.lang.Object
- zombie.characters.BodyDamage.BodyDamage

## Fields

### public boolean isFakeInfected

### public static final float InfectionLevelToZombify

## Constructors

### public BodyDamage(IsoGameCharacter parentCharacter)

**Parameters:**
- `IsoGameCharacter` `parentCharacter`

## Methods

### public BodyPart getBodyPart(BodyPartType type)

**Parameters:**
- `BodyPartType` `type`

**Returns:** `BodyPart`

### public BodyPartLast getBodyPartsLastState(BodyPartType type)

**Parameters:**
- `BodyPartType` `type`

**Returns:** `BodyPartLast`

### public void setBodyPartsLastState()

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void saveMainFields(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void loadMainFields(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public boolean IsFakeInfected()

**Returns:** `boolean`

### public void OnFire(boolean onFire)

**Parameters:**
- `boolean` `onFire`

**Returns:** `void`

### public boolean IsOnFire()

**Returns:** `boolean`

### public boolean WasBurntToDeath()

**Returns:** `boolean`

### public void IncreasePanicFloat(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void IncreasePanic(int numNewZombiesSeen)

**Parameters:**
- `int` `numNewZombiesSeen`

**Returns:** `void`

### public void ReducePanic()

**Returns:** `void`

### public void UpdateDraggingCorpse()

**Returns:** `void`

### public void UpdatePanicState()

**Returns:** `void`

### public void JustDrankBooze(Food food,
float percentage)

**Parameters:**
- `Food` `food`
- `float` `percentage`

**Returns:** `void`

### public void JustDrankBoozeFluid(float alcohol)

**Parameters:**
- `float` `alcohol`

**Returns:** `void`

### public void JustTookPill(InventoryItem pill)

**Parameters:**
- `InventoryItem` `pill`

**Returns:** `void`

### public void JustAteFood(Food newFood,
float percentage)

**Parameters:**
- `Food` `newFood`
- `float` `percentage`

**Returns:** `void`

### public void JustAteFood(Food newFood,
float percentage,
boolean useUtensil)

**Parameters:**
- `Food` `newFood`
- `float` `percentage`
- `boolean` `useUtensil`

**Returns:** `void`

### public void JustAteFood(Food newFood)

**Parameters:**
- `Food` `newFood`

**Returns:** `void`

### public void JustReadSomething(Literature literature)

**Parameters:**
- `Literature` `literature`

**Returns:** `void`

### public void JustTookPainMeds()

**Returns:** `void`

### public void UpdateWetness()

**Returns:** `void`

### public void TriggerSneezeCough()

**Returns:** `void`

### public int IsSneezingCoughing()

**Returns:** `int`

### public void UpdateCold()

**Returns:** `void`

### public float getColdStrength()

**Returns:** `float`

### public void AddDamage(BodyPartType bodyPart,
float val)

**Parameters:**
- `BodyPartType` `bodyPart`
- `float` `val`

**Returns:** `void`

### public void AddGeneralHealth(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public void ReduceGeneralHealth(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public void AddDamage(int bodyPartIndex,
float val)

**Parameters:**
- `int` `bodyPartIndex`
- `float` `val`

**Returns:** `void`

### public void splatBloodFloorBig()

**Returns:** `void`

### public static void damageFromSpikedArmor(IsoGameCharacter owner,
IsoGameCharacter target,
int partIndex,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `IsoGameCharacter` `target`
- `int` `partIndex`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void applyDamageFromWeapon(int partIndex,
float damage,
int damageType,
float pain)

**Parameters:**
- `int` `partIndex`
- `float` `damage`
- `int` `damageType`
- `float` `pain`

**Returns:** `void`

### public void DamageFromWeapon(HandWeapon weapon,
int partIndex)

**Parameters:**
- `HandWeapon` `weapon`
- `int` `partIndex`

**Returns:** `void`

### public boolean AddRandomDamageFromZombie(IsoZombie zombie,
String hitReaction,
int partIndex)

**Parameters:**
- `IsoZombie` `zombie`
- `String` `hitReaction`
- `int` `partIndex`

**Returns:** `boolean`

### public boolean doesBodyPartHaveInjury(BodyPartType part)

**Parameters:**
- `BodyPartType` `part`

**Returns:** `boolean`

### public boolean doBodyPartsHaveInjuries(BodyPartType partA,
BodyPartType partB)

Returns TRUE if either body part is injured. ie. A OR B

**Parameters:**
- `BodyPartType` `partA`
- `BodyPartType` `partB`

**Returns:** `boolean`

### public boolean isBodyPartBleeding(BodyPartType part)

Returns TRUE if the specified body part's bleeding time is greater than 0.

**Parameters:**
- `BodyPartType` `part`

**Returns:** `boolean`

### public boolean areBodyPartsBleeding(BodyPartType partA,
BodyPartType partB)

Returns TRUE if either body part is bleeding. ie. A OR B

**Parameters:**
- `BodyPartType` `partA`
- `BodyPartType` `partB`

**Returns:** `boolean`

### public void DrawUntexturedQuad(int x,
int y,
int width,
int height,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public float getBodyPartHealth(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `float`

### public float getBodyPartHealth(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `float`

### public String getBodyPartName(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `String`

### public String getBodyPartName(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `String`

### public float getHealth()

**Returns:** `float`

### public float getApparentInfectionLevel()

**Returns:** `float`

### public int getNumPartsBleeding()

**Returns:** `int`

### public boolean isNeckBleeding()

**Returns:** `boolean`

### public int getNumPartsScratched()

**Returns:** `int`

### public int getNumPartsBitten()

**Returns:** `int`

### public boolean HasInjury()

**Returns:** `boolean`

### public boolean IsBandaged(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsDeepWounded(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsBandaged(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsBitten(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsBitten(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsBleeding(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsBleeding(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsBleedingStemmed(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsBleedingStemmed(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsCauterized(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsCauterized(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsInfected()

**Returns:** `boolean`

### public boolean IsInfected(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsInfected(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsFakeInfected(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public void DisableFakeInfection(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `void`

### public boolean IsScratched(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsCut(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsScratched(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsStitched(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsStitched(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public boolean IsWounded(BodyPartType bodyPart)

**Parameters:**
- `BodyPartType` `bodyPart`

**Returns:** `boolean`

### public boolean IsWounded(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `boolean`

### public void RestoreToFullHealth()

**Returns:** `void`

### public void SetBandaged(int bodyPartIndex,
boolean bandaged,
float bandageLife,
boolean isAlcoholic,
String bandageType)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `bandaged`
- `float` `bandageLife`
- `boolean` `isAlcoholic`
- `String` `bandageType`

**Returns:** `void`

### public void SetBitten(BodyPartType bodyPart,
boolean bitten)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `bitten`

**Returns:** `void`

### public void SetBitten(int bodyPartIndex,
boolean bitten)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `bitten`

**Returns:** `void`

### public void SetBitten(int bodyPartIndex,
boolean bitten,
boolean infected)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `bitten`
- `boolean` `infected`

**Returns:** `void`

### public void SetBleeding(BodyPartType bodyPart,
boolean bleeding)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `bleeding`

**Returns:** `void`

### public void SetBleeding(int bodyPartIndex,
boolean bleeding)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `bleeding`

**Returns:** `void`

### public void SetBleedingStemmed(BodyPartType bodyPart,
boolean bleedingStemmed)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `bleedingStemmed`

**Returns:** `void`

### public void SetBleedingStemmed(int bodyPartIndex,
boolean bleedingStemmed)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `bleedingStemmed`

**Returns:** `void`

### public void SetCauterized(BodyPartType bodyPart,
boolean cauterized)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `cauterized`

**Returns:** `void`

### public void SetCauterized(int bodyPartIndex,
boolean cauterized)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `cauterized`

**Returns:** `void`

### public BodyPart setScratchedWindow()

**Returns:** `BodyPart`

### public void SetScratched(BodyPartType bodyPart,
boolean scratched)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `scratched`

**Returns:** `void`

### public void SetScratched(int bodyPartIndex,
boolean scratched)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `scratched`

**Returns:** `void`

### public void SetScratchedFromWeapon(int bodyPartIndex,
boolean scratched)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `scratched`

**Returns:** `void`

### public void SetCut(int bodyPartIndex,
boolean cut)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `cut`

**Returns:** `void`

### public void SetWounded(BodyPartType bodyPart,
boolean wounded)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `wounded`

**Returns:** `void`

### public void SetWounded(int bodyPartIndex,
boolean wounded)

**Parameters:**
- `int` `bodyPartIndex`
- `boolean` `wounded`

**Returns:** `void`

### public void ShowDebugInfo()

**Returns:** `void`

### public void UpdateBoredom()

**Returns:** `void`

### public void UpdateStrength()

**Returns:** `void`

### public float pickMortalityDuration()

**Returns:** `float`

### public void Update()

**Returns:** `void`

### public void calculateOverallHealth()

**Returns:** `void`

### public static float getSicknessFromCorpsesRate(int corpseCount)

**Parameters:**
- `int` `corpseCount`

**Returns:** `float`

### public float GetBaseCorpseSickness()

**Returns:** `float`

### public boolean UseBandageOnMostNeededPart()

**Returns:** `boolean`

### public ArrayList<BodyPart> getBodyParts()

**Returns:** `ArrayList<BodyPart>`

### public int getDamageModCount()

**Returns:** `int`

### public void setDamageModCount(int damageModCount)

**Parameters:**
- `int` `damageModCount` — the DamageModCount to set

**Returns:** `void`

### public float getInfectionGrowthRate()

**Returns:** `float`

### public void setInfectionGrowthRate(float infectionGrowthRate)

**Parameters:**
- `float` `infectionGrowthRate` — the InfectionGrowthRate to set

**Returns:** `void`

### public boolean isInfected()

**Returns:** `boolean`

### public void setInfected(boolean infected)

**Parameters:**
- `boolean` `infected`

**Returns:** `void`

### public float getInfectionTime()

**Returns:** `float`

### public void setInfectionTime(float worldHours)

**Parameters:**
- `float` `worldHours`

**Returns:** `void`

### public float getInfectionMortalityDuration()

**Returns:** `float`

### public void setInfectionMortalityDuration(float worldHours)

**Parameters:**
- `float` `worldHours`

**Returns:** `void`

### @Deprecated
public boolean isInf()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public void setInf(boolean inf)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `inf` — the inf to set

**Returns:** `void`

### public boolean isIsFakeInfected()

**Returns:** `boolean`

### public void setIsFakeInfected(boolean isFakeInfected)

**Parameters:**
- `boolean` `isFakeInfected` — the IsFakeInfected to set

**Returns:** `void`

### public float getOverallBodyHealth()

**Returns:** `float`

### public void setOverallBodyHealth(float overallBodyHealth)

**Parameters:**
- `float` `overallBodyHealth` — the OverallBodyHealth to set

**Returns:** `void`

### public float getStandardHealthAddition()

**Returns:** `float`

### public void setStandardHealthAddition(float standardHealthAddition)

**Parameters:**
- `float` `standardHealthAddition` — the StandardHealthAddition to set

**Returns:** `void`

### public float getReducedHealthAddition()

**Returns:** `float`

### public void setReducedHealthAddition(float reducedHealthAddition)

**Parameters:**
- `float` `reducedHealthAddition` — the ReducedHealthAddition to set

**Returns:** `void`

### public float getSeverlyReducedHealthAddition()

**Returns:** `float`

### public void setSeverlyReducedHealthAddition(float severlyReducedHealthAddition)

**Parameters:**
- `float` `severlyReducedHealthAddition` — the SeverlyReducedHealthAddition to set

**Returns:** `void`

### public float getSleepingHealthAddition()

**Returns:** `float`

### public void setSleepingHealthAddition(float sleepingHealthAddition)

**Parameters:**
- `float` `sleepingHealthAddition` — the SleepingHealthAddition to set

**Returns:** `void`

### public float getHealthFromFood()

**Returns:** `float`

### public void setHealthFromFood(float healthFromFood)

**Parameters:**
- `float` `healthFromFood` — the HealthFromFood to set

**Returns:** `void`

### public float getHealthReductionFromSevereBadMoodles()

**Returns:** `float`

### public void setHealthReductionFromSevereBadMoodles(float healthReductionFromSevereBadMoodles)

**Parameters:**
- `float` `healthReductionFromSevereBadMoodles` — the HealthReductionFromSevereBadMoodles to set

**Returns:** `void`

### public int getStandardHealthFromFoodTime()

**Returns:** `int`

### public void setStandardHealthFromFoodTime(int standardHealthFromFoodTime)

**Parameters:**
- `int` `standardHealthFromFoodTime` — the StandardHealthFromFoodTime to set

**Returns:** `void`

### public float getHealthFromFoodTimer()

**Returns:** `float`

### public void setHealthFromFoodTimer(float healthFromFoodTimer)

**Parameters:**
- `float` `healthFromFoodTimer` — the HealthFromFoodTimer to set

**Returns:** `void`

### public float getBoredomDecreaseFromReading()

**Returns:** `float`

### public void setBoredomDecreaseFromReading(float boredomDecreaseFromReading)

**Parameters:**
- `float` `boredomDecreaseFromReading` — the BoredomDecreaseFromReading to set

**Returns:** `void`

### public float getInitialThumpPain()

**Returns:** `float`

### public void setInitialThumpPain(float initialThumpPain)

**Parameters:**
- `float` `initialThumpPain` — the InitialThumpPain to set

**Returns:** `void`

### public float getInitialScratchPain()

**Returns:** `float`

### public void setInitialScratchPain(float initialScratchPain)

**Parameters:**
- `float` `initialScratchPain` — the InitialScratchPain to set

**Returns:** `void`

### public float getInitialBitePain()

**Returns:** `float`

### public void setInitialBitePain(float initialBitePain)

**Parameters:**
- `float` `initialBitePain` — the InitialBitePain to set

**Returns:** `void`

### public float getInitialWoundPain()

**Returns:** `float`

### public void setInitialWoundPain(float initialWoundPain)

**Parameters:**
- `float` `initialWoundPain` — the InitialWoundPain to set

**Returns:** `void`

### public float getContinualPainIncrease()

**Returns:** `float`

### public void setContinualPainIncrease(float continualPainIncrease)

**Parameters:**
- `float` `continualPainIncrease` — the ContinualPainIncrease to set

**Returns:** `void`

### public float getPainReductionFromMeds()

**Returns:** `float`

### public void setPainReductionFromMeds(float painReductionFromMeds)

**Parameters:**
- `float` `painReductionFromMeds` — the PainReductionFromMeds to set

**Returns:** `void`

### public float getStandardPainReductionWhenWell()

**Returns:** `float`

### public void setStandardPainReductionWhenWell(float standardPainReductionWhenWell)

**Parameters:**
- `float` `standardPainReductionWhenWell` — the StandardPainReductionWhenWell to set

**Returns:** `void`

### public int getOldNumZombiesVisible()

**Returns:** `int`

### public void setOldNumZombiesVisible(int oldNumZombiesVisible)

**Parameters:**
- `int` `oldNumZombiesVisible` — the OldNumZombiesVisible to set

**Returns:** `void`

### public boolean getWasDraggingCorpse()

**Returns:** `boolean`

### public void setWasDraggingCorpse(boolean wasDraggingCorpse)

**Parameters:**
- `boolean` `wasDraggingCorpse`

**Returns:** `void`

### public int getCurrentNumZombiesVisible()

**Returns:** `int`

### public void setCurrentNumZombiesVisible(int currentNumZombiesVisible)

**Parameters:**
- `int` `currentNumZombiesVisible` — the CurrentNumZombiesVisible to set

**Returns:** `void`

### public float getPanicIncreaseValue()

**Returns:** `float`

### public float getPanicIncreaseValueFrame()

**Returns:** `float`

### public void setPanicIncreaseValue(float panicIncreaseValue)

**Parameters:**
- `float` `panicIncreaseValue` — the PanicIncreaseValue to set

**Returns:** `void`

### public float getPanicReductionValue()

**Returns:** `float`

### public void setPanicReductionValue(float panicReductionValue)

**Parameters:**
- `float` `panicReductionValue` — the PanicReductionValue to set

**Returns:** `void`

### public float getDrunkIncreaseValue()

**Returns:** `float`

### public void setDrunkIncreaseValue(float drunkIncreaseValue)

**Parameters:**
- `float` `drunkIncreaseValue` — the DrunkIncreaseValue to set

**Returns:** `void`

### public float getDrunkReductionValue()

**Returns:** `float`

### public void setDrunkReductionValue(float drunkReductionValue)

**Parameters:**
- `float` `drunkReductionValue` — the DrunkReductionValue to set

**Returns:** `void`

### public boolean isIsOnFire()

**Returns:** `boolean`

### public void setIsOnFire(boolean isOnFire)

**Parameters:**
- `boolean` `isOnFire` — the IsOnFire to set

**Returns:** `void`

### public boolean isBurntToDeath()

**Returns:** `boolean`

### public void setBurntToDeath(boolean burntToDeath)

**Parameters:**
- `boolean` `burntToDeath` — the BurntToDeath to set

**Returns:** `void`

### public float getCatchACold()

**Returns:** `float`

### public void setCatchACold(float catchACold)

**Parameters:**
- `float` `catchACold` — the CatchACold to set

**Returns:** `void`

### public boolean isHasACold()

**Returns:** `boolean`

### public void setHasACold(boolean hasACold)

**Parameters:**
- `boolean` `hasACold` — the HasACold to set

**Returns:** `void`

### public void setColdStrength(float coldStrength)

**Parameters:**
- `float` `coldStrength` — the ColdStrength to set

**Returns:** `void`

### public float getColdProgressionRate()

**Returns:** `float`

### public void setColdProgressionRate(float coldProgressionRate)

**Parameters:**
- `float` `coldProgressionRate` — the ColdProgressionRate to set

**Returns:** `void`

### public float getTimeToSneezeOrCough()

**Returns:** `float`

### public void setTimeToSneezeOrCough(float timeToSneezeOrCough)

**Parameters:**
- `float` `timeToSneezeOrCough`

**Returns:** `void`

### public int getSmokerSneezeTimerMin()

**Returns:** `int`

### public int getSmokerSneezeTimerMax()

**Returns:** `int`

### public int getMildColdSneezeTimerMin()

**Returns:** `int`

### public void setMildColdSneezeTimerMin(int mildColdSneezeTimerMin)

**Parameters:**
- `int` `mildColdSneezeTimerMin` — the MildColdSneezeTimerMin to set

**Returns:** `void`

### public int getMildColdSneezeTimerMax()

**Returns:** `int`

### public void setMildColdSneezeTimerMax(int mildColdSneezeTimerMax)

**Parameters:**
- `int` `mildColdSneezeTimerMax` — the MildColdSneezeTimerMax to set

**Returns:** `void`

### public int getColdSneezeTimerMin()

**Returns:** `int`

### public void setColdSneezeTimerMin(int coldSneezeTimerMin)

**Parameters:**
- `int` `coldSneezeTimerMin` — the ColdSneezeTimerMin to set

**Returns:** `void`

### public int getColdSneezeTimerMax()

**Returns:** `int`

### public void setColdSneezeTimerMax(int coldSneezeTimerMax)

**Parameters:**
- `int` `coldSneezeTimerMax` — the ColdSneezeTimerMax to set

**Returns:** `void`

### public int getNastyColdSneezeTimerMin()

**Returns:** `int`

### public void setNastyColdSneezeTimerMin(int nastyColdSneezeTimerMin)

**Parameters:**
- `int` `nastyColdSneezeTimerMin` — the NastyColdSneezeTimerMin to set

**Returns:** `void`

### public int getNastyColdSneezeTimerMax()

**Returns:** `int`

### public void setNastyColdSneezeTimerMax(int nastyColdSneezeTimerMax)

**Parameters:**
- `int` `nastyColdSneezeTimerMax` — the NastyColdSneezeTimerMax to set

**Returns:** `void`

### public int getSneezeCoughActive()

**Returns:** `int`

### public void setSneezeCoughActive(int sneezeCoughActive)

**Parameters:**
- `int` `sneezeCoughActive` — the SneezeCoughActive to set

**Returns:** `void`

### public int getSneezeCoughTime()

**Returns:** `int`

### public void setSneezeCoughTime(int sneezeCoughTime)

**Parameters:**
- `int` `sneezeCoughTime` — the SneezeCoughTime to set

**Returns:** `void`

### public int getSneezeCoughDelay()

**Returns:** `int`

### public void setSneezeCoughDelay(int sneezeCoughDelay)

**Parameters:**
- `int` `sneezeCoughDelay` — the SneezeCoughDelay to set

**Returns:** `void`

### public IsoGameCharacter getParentChar()

**Returns:** `IsoGameCharacter`

### public boolean isReduceFakeInfection()

**Returns:** `boolean`

### public void setReduceFakeInfection(boolean reduceFakeInfection)

**Parameters:**
- `boolean` `reduceFakeInfection`

**Returns:** `void`

### public void AddRandomDamage()

**Returns:** `void`

### public float getPainReduction()

**Returns:** `float`

### public void setPainReduction(float painReduction)

**Parameters:**
- `float` `painReduction`

**Returns:** `void`

### public float getColdReduction()

**Returns:** `float`

### public void setColdReduction(float coldReduction)

**Parameters:**
- `float` `coldReduction`

**Returns:** `void`

### public int getRemotePainLevel()

**Returns:** `int`

### public void setRemotePainLevel(int painLevel)

**Parameters:**
- `int` `painLevel`

**Returns:** `void`

### public float getColdDamageStage()

**Returns:** `float`

### public void setColdDamageStage(float coldDamageStage)

**Parameters:**
- `float` `coldDamageStage`

**Returns:** `void`

### public Thermoregulator getThermoregulator()

**Returns:** `Thermoregulator`

### public void decreaseBodyWetness(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void increaseBodyWetness(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void DamageFromAnimal(IsoAnimal wielder)

**Parameters:**
- `IsoAnimal` `wielder`

**Returns:** `void`

### public float getGeneralWoundInfectionLevel()

**Returns:** `float`

### public void UpdateDiscomfort()

**Returns:** `void`

### public void addStiffness(BodyPart part,
float stiffness)

**Parameters:**
- `BodyPart` `part`
- `float` `stiffness`

**Returns:** `void`

### public void addStiffness(BodyPartType partType,
float stiffness)

**Parameters:**
- `BodyPartType` `partType`
- `float` `stiffness`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BodyDamage\BodyDamage.html`*
