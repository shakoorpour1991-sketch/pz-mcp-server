---
title: zombie.inventory.types.Food
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Food

`public final class Food extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.Food

## Fields

### public float thirstChange

### public boolean poison

### public ArrayList<String> spices

### public static final float FreezerAgeMultiplier

### public int motherId

### public HashMap<String, AnimalGene> eggGenome

## Constructors

### public Food(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

### public Food(String module,
String name,
String itemType,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `Item` `item`

## Methods

### public String getCategory()

**Returns:** `String`

### public boolean IsFood()

**Returns:** `boolean`

### public boolean checkEggHatch(IsoHutch hutch)

**Parameters:**
- `IsoHutch` `hutch`

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public String getSoundLimiterGroupID()

**Returns:** `String`

### public void registerWithSoundLimiter(SoundInstanceLimiter limiter)

**Parameters:**
- `SoundInstanceLimiter` `limiter`

**Returns:** `void`

### public void updateSound(BaseSoundEmitter emitter,
SoundLimiterParams params)

**Parameters:**
- `BaseSoundEmitter` `emitter`
- `SoundLimiterParams` `params`

**Returns:** `void`

### public void updateClientCookingSounds()

**Returns:** `void`

### public void updateAge()

**Returns:** `void`

### public void updateAge(boolean bSendItemStats)

**Parameters:**
- `boolean` `bSendItemStats`

**Returns:** `void`

### public void setAutoAge()

**Returns:** `void`

### public float getActualWeight()

**Returns:** `float`

### public float getWeight()

**Returns:** `float`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public boolean finishupdate()

**Returns:** `boolean`

### public boolean shouldUpdateInWorld()

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public String getName(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `String`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public float getEnduranceChange()

**Returns:** `float`

### public void setEnduranceChange(float endChange)

**Parameters:**
- `float` `endChange`

**Returns:** `void`

### public float getUnhappyChange()

**Returns:** `float`

### public float getBoredomChange()

**Returns:** `float`

### public float getHungerChange()

**Returns:** `float`

### public float getStressChange()

**Returns:** `float`

### public float getBoredomChangeUnmodified()

**Returns:** `float`

### public float getEnduranceChangeUnmodified()

**Returns:** `float`

### public float getStressChangeUnmodified()

**Returns:** `float`

### public float getThirstChangeUnmodified()

**Returns:** `float`

### public float getUnhappyChangeUnmodified()

**Returns:** `float`

### public float getScore(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `float`

### public boolean isBadCold()

**Returns:** `boolean`

### public void setBadCold(boolean bBadCold)

**Parameters:**
- `boolean` `bBadCold`

**Returns:** `void`

### public boolean isGoodHot()

**Returns:** `boolean`

### public void setGoodHot(boolean bGoodHot)

**Parameters:**
- `boolean` `bGoodHot`

**Returns:** `void`

### public boolean isCookedInMicrowave()

**Returns:** `boolean`

### public void setCookedInMicrowave(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public float getHeat()

**Returns:** `float`

### public float getInvHeat()

**Returns:** `float`

### public void setHeat(float heat)

**Parameters:**
- `float` `heat`

**Returns:** `void`

### public float getEndChange()

**Returns:** `float`

### public void setEndChange(float endChange)

**Parameters:**
- `float` `endChange`

**Returns:** `void`

### @Deprecated
public float getBaseHungChange()

> ⚠️ **Deprecated**

**Returns:** `float`

### public float getHungChange()

**Returns:** `float`

### public void setHungChange(float hungChange)

**Parameters:**
- `float` `hungChange`

**Returns:** `void`

### public String getUseOnConsume()

**Returns:** `String`

### public void setUseOnConsume(String useOnConsume)

**Parameters:**
- `String` `useOnConsume`

**Returns:** `void`

### public boolean isRotten()

**Returns:** `boolean`

### public boolean isFresh()

**Returns:** `boolean`

### public void setRotten(boolean rotten)

**Parameters:**
- `boolean` `rotten`

**Returns:** `void`

### public boolean isbDangerousUncooked()

**Returns:** `boolean`

### public void setbDangerousUncooked(boolean dangerousUncooked)

**Parameters:**
- `boolean` `dangerousUncooked`

**Returns:** `void`

### public int getLastCookMinute()

**Returns:** `int`

### public void setLastCookMinute(int lastCookMinute)

**Parameters:**
- `int` `lastCookMinute`

**Returns:** `void`

### public float getThirstChange()

**Returns:** `float`

### public void setThirstChange(float thirstChange)

**Parameters:**
- `float` `thirstChange`

**Returns:** `void`

### public void setReplaceOnCooked(List<String> replaceOnCooked)

**Parameters:**
- `List<String>` `replaceOnCooked`

**Returns:** `void`

### public List<String> getReplaceOnCooked()

**Returns:** `List<String>`

### public float getBaseHunger()

**Returns:** `float`

### public void setBaseHunger(float baseHunger)

**Parameters:**
- `float` `baseHunger`

**Returns:** `void`

### public boolean isSpice()

**Returns:** `boolean`

### public void setSpice(boolean isSpice)

**Parameters:**
- `boolean` `isSpice`

**Returns:** `void`

### public boolean isPoison()

**Returns:** `boolean`

### public int getPoisonDetectionLevel()

**Returns:** `int`

### public void setPoisonDetectionLevel(int poisonDetectionLevel)

**Parameters:**
- `int` `poisonDetectionLevel`

**Returns:** `void`

### public int getPoisonLevelForRecipe()

**Returns:** `int`

### public void setPoisonLevelForRecipe(Integer poisonLevelForRecipe)

**Parameters:**
- `Integer` `poisonLevelForRecipe`

**Returns:** `void`

### public int getUseForPoison()

**Returns:** `int`

### public void setUseForPoison(int useForPoison)

**Parameters:**
- `int` `useForPoison`

**Returns:** `void`

### public int getPoisonPower()

**Returns:** `int`

### public void setPoisonPower(int poisonPower)

**Parameters:**
- `int` `poisonPower`

**Returns:** `void`

### public String getFoodType()

**Returns:** `String`

### public void setFoodType(String foodType)

**Parameters:**
- `String` `foodType`

**Returns:** `void`

### public boolean isRemoveNegativeEffectOnCooked()

**Returns:** `boolean`

### public void setRemoveNegativeEffectOnCooked(boolean removeNegativeEffectOnCooked)

**Parameters:**
- `boolean` `removeNegativeEffectOnCooked`

**Returns:** `void`

### public String getCookingSound()

**Returns:** `String`

### public String getCustomEatSound()

**Returns:** `String`

### public void setCustomEatSound(String customEatSound)

**Parameters:**
- `String` `customEatSound`

**Returns:** `void`

### public String getChef()

**Returns:** `String`

### public void setChef(String chef)

**Parameters:**
- `String` `chef`

**Returns:** `void`

### public String getOnCooked()

**Returns:** `String`

### public void setOnCooked(String onCooked)

**Parameters:**
- `String` `onCooked`

**Returns:** `void`

### public String getHerbalistType()

**Returns:** `String`

### public void setHerbalistType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public ArrayList<String> getSpices()

**Returns:** `ArrayList<String>`

### public void setSpices(ArrayList<String> spices)

**Parameters:**
- `ArrayList<String>` `spices`

**Returns:** `void`

### public Texture getTex()

**Returns:** `Texture`

### public String getWorldTexture()

**Returns:** `String`

### public String getStaticModel()

**Returns:** `String`

### public int getFoodSicknessChange()

**Returns:** `int`

### public void setFoodSicknessChange(int foodSicknessChange)

**Parameters:**
- `int` `foodSicknessChange`

**Returns:** `void`

### public int getFluReduction()

**Returns:** `int`

### public void setFluReduction(int fluReduction)

**Parameters:**
- `int` `fluReduction`

**Returns:** `void`

### public float getPainReduction()

**Returns:** `float`

### public void setPainReduction(float painReduction)

**Parameters:**
- `float` `painReduction`

**Returns:** `void`

### public float getCarbohydrates()

**Returns:** `float`

### public void setCarbohydrates(float carbohydrates)

**Parameters:**
- `float` `carbohydrates`

**Returns:** `void`

### public float getLipids()

**Returns:** `float`

### public void setLipids(float lipids)

**Parameters:**
- `float` `lipids`

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

### public boolean isPackaged()

**Returns:** `boolean`

### public void setPackaged(boolean packaged)

**Parameters:**
- `boolean` `packaged`

**Returns:** `void`

### public float getFreezingTime()

**Returns:** `float`

### public void setFreezingTime(float freezingTime)

**Parameters:**
- `float` `freezingTime`

**Returns:** `void`

### public void freeze()

**Returns:** `void`

### public boolean isFrozen()

**Returns:** `boolean`

### public void setFrozen(boolean frozen)

**Parameters:**
- `boolean` `frozen`

**Returns:** `void`

### public boolean canBeFrozen()

**Returns:** `boolean`

### public void setCanBeFrozen(boolean canBeFrozen)

**Parameters:**
- `boolean` `canBeFrozen`

**Returns:** `void`

### public boolean isFreezing()

**Returns:** `boolean`

### public boolean isThawing()

**Returns:** `boolean`

### public int getMaxUses()

**Returns:** `int`

### public int getCurrentUses()

**Returns:** `int`

### public void setCurrentUses(int newuses)

**Parameters:**
- `int` `newuses`

**Returns:** `void`

### public float getCurrentUsesFloat()

**Returns:** `float`

### public void syncItemFields()

**Returns:** `void`

### public String getReplaceOnRotten()

**Returns:** `String`

### public void setReplaceOnRotten(String replaceOnRotten)

**Parameters:**
- `String` `replaceOnRotten`

**Returns:** `void`

### public void multiplyFoodValues(float percentage)

**Parameters:**
- `float` `percentage`

**Returns:** `void`

### public float getRottenTime()

**Returns:** `float`

### public void setRottenTime(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public float getCompostTime()

**Returns:** `float`

### public void setCompostTime(float compostTime)

**Parameters:**
- `float` `compostTime`

**Returns:** `void`

### public String getOnEat()

**Returns:** `String`

### public void setOnEat(String onEat)

**Parameters:**
- `String` `onEat`

**Returns:** `void`

### public boolean isBadInMicrowave()

**Returns:** `boolean`

### public void setBadInMicrowave(boolean badInMicrowave)

**Parameters:**
- `boolean` `badInMicrowave`

**Returns:** `void`

### public boolean isTainted()

**Returns:** `boolean`

### public void setTainted(boolean tainted)

**Parameters:**
- `boolean` `tainted`

**Returns:** `void`

### public void setMilkQty(int qty)

**Parameters:**
- `int` `qty`

**Returns:** `void`

### public int getMilkQty()

**Returns:** `int`

### public void setMilkType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public String getMilkType()

**Returns:** `String`

### public boolean isFertilized()

**Returns:** `boolean`

### public void setFertilized(boolean fertilized)

**Parameters:**
- `boolean` `fertilized`

**Returns:** `void`

### public String getAnimalHatch()

**Returns:** `String`

### public void setAnimalHatch(String animalHatch)

**Parameters:**
- `String` `animalHatch`

**Returns:** `void`

### public String getAnimalHatchBreed()

**Returns:** `String`

### public void setAnimalHatchBreed(String animalHatchBreed)

**Parameters:**
- `String` `animalHatchBreed`

**Returns:** `void`

### public int getTimeToHatch()

**Returns:** `int`

### public void setTimeToHatch(int timeToHatch)

**Parameters:**
- `int` `timeToHatch`

**Returns:** `void`

### public boolean isNormalAndFullFood()

**Returns:** `boolean`

### public boolean isWholeFoodItem()

**Returns:** `boolean`

### public boolean isUncooked()

**Returns:** `boolean`

### public void OnAddedToContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public void OnBeforeRemoveFromContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public int getFertilizedTime()

**Returns:** `int`

### public void setFertilizedTime(int time)

**Parameters:**
- `int` `time`

**Returns:** `void`

### public void inheritFoodAgeFrom(InventoryItem otherItem)

**Parameters:**
- `InventoryItem` `otherItem`

**Returns:** `void`

### public void inheritOlderFoodAge(InventoryItem otherItem)

**Parameters:**
- `InventoryItem` `otherItem`

**Returns:** `void`

### public boolean hasAnimalParts()

**Returns:** `boolean`

### public boolean isAnimalSkeleton()

**Returns:** `boolean`

### public boolean canAge()

**Returns:** `boolean`

### public boolean isFood()

**Returns:** `boolean`

### public void copyFrozenFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyCookedBurntFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyTemperatureFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyPoisonFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyAgeFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyNutritionFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyNutritionFromSplit(Food otherFood,
int split)

**Parameters:**
- `Food` `otherFood`
- `int` `split`

**Returns:** `void`

### public void copyNutritionFromRatio(Food otherFood,
float ratio)

**Parameters:**
- `Food` `otherFood`
- `float` `ratio`

**Returns:** `void`

### public void copyFoodFrom(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyExtraItems(Food otherFood)

**Parameters:**
- `Food` `otherFood`

**Returns:** `void`

### public void copyFoodFromSplit(Food otherFood,
int split)

**Parameters:**
- `Food` `otherFood`
- `int` `split`

**Returns:** `void`

### public void consumeHunger(float realUsedHunger)

**Parameters:**
- `float` `realUsedHunger`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Food.html`*
