---
title: zombie.inventory.InventoryItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.InventoryItem

`public class InventoryItem extends GameEntity`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem

## Fields

### public boolean cooked

### public String replaceOnUseOn

### public Color col

### public boolean canStack

### public float fatigueChange

### public IsoWorldInventoryObject worldItem

### public IsoDeadBody deadBodyObject

### public int id

### public boolean requiresEquippedBothHands

### public ByteBuffer byteData

### public ArrayList<String> extraItems

### public float worldScale

### public float worldXRotation

### public float worldYRotation

### public float worldZRotation

### public float worldAlpha

### public WorldItemAtlas.ItemTexture atlasTexture

### public float jobDelta

### public String jobType

### public String mainCategory

### public String closeKillMove

## Constructors

### public InventoryItem(String module,
String name,
String type,
String tex)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `String` `tex`

### public InventoryItem(String module,
String name,
String type,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `Item` `item`

## Methods

### public CoverType getCoverType()

**Returns:** `CoverType`

### public List<BookSubject> getBookSubjects()

**Returns:** `List<BookSubject>`

### public List<MagazineSubject> getMagazineSubjects()

**Returns:** `List<MagazineSubject>`

### public IsoWorldInventoryObject getWorldItem()

**Returns:** `IsoWorldInventoryObject`

### public boolean hasWorldItem()

**Returns:** `boolean`

### public boolean isOnGroundOnSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean isInsideBagOnSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean isOnGroundOrInsideBagOnSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public void setEquipParent(IsoGameCharacter parent)

**Parameters:**
- `IsoGameCharacter` `parent`

**Returns:** `void`

### public void setEquipParent(IsoGameCharacter parent,
boolean register)

**Parameters:**
- `IsoGameCharacter` `parent`
- `boolean` `register`

**Returns:** `void`

### public IsoGameCharacter getEquipParent()

**Returns:** `IsoGameCharacter`

### public String getBringToBearSound()

**Returns:** `String`

### public String getAimReleaseSound()

**Returns:** `String`

### public String getEquipSound()

**Returns:** `String`

### public String getUnequipSound()

**Returns:** `String`

### public String getDropSound()

**Returns:** `String`

### public void setWorldItem(IsoWorldInventoryObject w)

**Parameters:**
- `IsoWorldInventoryObject` `w`

**Returns:** `void`

### public void setJobDelta(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public float getJobDelta()

**Returns:** `float`

### public void setJobType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public String getJobType()

**Returns:** `String`

### public boolean hasModData()

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void storeInByteData(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `void`

### public ByteBuffer getByteData()

**Returns:** `ByteBuffer`

### public IsoDeadBody loadCorpseFromByteData(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoDeadBody`

### public boolean isForceDropHeavyItem()

**Returns:** `boolean`

### public boolean isHumanCorpse()

**Returns:** `boolean`

### public boolean isAnimalCorpse()

**Returns:** `boolean`

### public IsoDeadBody createAndStoreDefaultDeadBody(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoDeadBody`

### public boolean isRequiresEquippedBothHands()

**Returns:** `boolean`

### public float getA()

**Returns:** `float`

### public float getR()

**Returns:** `float`

### public float getG()

**Returns:** `float`

### public float getB()

**Returns:** `float`

### public String getType()

**Returns:** `String`

### public Texture getTex()

**Returns:** `Texture`

### public String getCategory()

**Returns:** `String`

### public boolean UseForCrafting(int uses)

**Parameters:**
- `int` `uses`

**Returns:** `boolean`

### public boolean IsRotten()

**Returns:** `boolean`

### public float HowRotten()

**Returns:** `float`

### public boolean CanStack(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean ModDataMatches(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public void DoTooltip(ObjectTooltip tooltipUI)

**Parameters:**
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void DoTooltipEmbedded(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layoutOverride,
int offsetY)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layoutOverride`
- `int` `offsetY`

**Returns:** `void`

### public String getCleanString(float weight)

**Parameters:**
- `float` `weight`

**Returns:** `String`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public void SetContainerPosition(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void Use()

**Returns:** `void`

### public void UseAndSync()

**Returns:** `void`

### public void UseItem()

**Returns:** `void`

### public void Use(boolean bCrafting)

**Parameters:**
- `boolean` `bCrafting`

**Returns:** `void`

### public void Use(boolean bCrafting,
boolean bInContainer,
boolean bNeedSync)

**Parameters:**
- `boolean` `bCrafting`
- `boolean` `bInContainer`
- `boolean` `bNeedSync`

**Returns:** `void`

### public boolean shouldUpdateInWorld()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public boolean finishupdate()

**Returns:** `boolean`

### public String getSoundLimiterGroupID()

**Returns:** `String`

### public void registerWithSoundLimiter(SoundInstanceLimiter limiter)

**Parameters:**
- `SoundInstanceLimiter` `limiter`

**Returns:** `void`

### public void updateSound(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public void updateSound(BaseSoundEmitter emitter,
SoundLimiterParams params)

**Parameters:**
- `BaseSoundEmitter` `emitter`
- `SoundLimiterParams` `params`

**Returns:** `void`

### public void stopSoundOnPlayer()

**Returns:** `void`

### public void updateEquippedAndActivatedSound(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public void updateEquippedAndActivatedSound()

**Returns:** `void`

### public void playActivateSound()

**Returns:** `void`

### public void playDeactivateSound()

**Returns:** `void`

### public void playActivateDeactivateSound()

**Returns:** `void`

### public boolean is(ItemKey... item)

**Parameters:**
- `ItemKey...` `item`

**Returns:** `boolean`

### public String getFullType()

**Returns:** `String`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public static InventoryItem loadItem(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `InventoryItem`

### public static InventoryItem loadItem(ByteBuffer input,
int worldVersion,
boolean doSaveTypeCheck)
throws IOException

Attempts loading the item including creation, uppon failure bytes might be skipped or the buffer position may be set to end item position.
Item needs to be saved with size.

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `doSaveTypeCheck`

**Returns:** `InventoryItem`

### public static InventoryItem loadItem(ByteBuffer input,
int worldVersion,
boolean doSaveTypeCheck,
InventoryItem i)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `doSaveTypeCheck`
- `InventoryItem` `i`

**Returns:** `InventoryItem`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public InventoryItem createCloneItem()

**Returns:** `InventoryItem`

### public boolean IsFood()

**Returns:** `boolean`

### public boolean IsWeapon()

**Returns:** `boolean`

### public boolean IsDrainable()

**Returns:** `boolean`

### public boolean IsLiterature()

**Returns:** `boolean`

### public boolean IsClothing()

**Returns:** `boolean`

### public boolean IsInventoryContainer()

**Returns:** `boolean`

### public boolean IsMap()

**Returns:** `boolean`

### public ItemContainer getOutermostContainer()

**Returns:** `ItemContainer`

### public boolean isInLocalPlayerInventory()

**Returns:** `boolean`

### public boolean isInPlayerInventory()

**Returns:** `boolean`

### public ItemReplacement getItemReplacementPrimaryHand()

**Returns:** `ItemReplacement`

### public ItemReplacement getItemReplacementSecondHand()

**Returns:** `ItemReplacement`

### public ClothingItem getClothingItem()

**Returns:** `ClothingItem`

### public String getAlternateModelName()

**Returns:** `String`

### public ItemVisual getVisual()

**Returns:** `ItemVisual`

### public boolean allowRandomTint()

**Returns:** `boolean`

### public void synchWithVisual()

**Returns:** `void`

### public int getContainerX()

**Returns:** `int`

### public void setContainerX(int containerX)

**Parameters:**
- `int` `containerX` — the containerX to set

**Returns:** `void`

### public int getContainerY()

**Returns:** `int`

### public void setContainerY(int containerY)

**Parameters:**
- `int` `containerY` — the containerY to set

**Returns:** `void`

### public boolean isDisappearOnUse()

**Returns:** `boolean`

### public boolean isKeepOnDeplete()

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public String getName(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name` — the name to set

**Returns:** `void`

### public String getReplaceOnUse()

**Returns:** `String`

### public void setReplaceOnUse(String replaceOnUse)

**Parameters:**
- `String` `replaceOnUse` — the replaceOnUse to set

**Returns:** `void`

### public String getReplaceOnUseFullType()

**Returns:** `String`

### public int getConditionMax()

**Returns:** `int`

### public void setConditionMax(int conditionMax)

**Parameters:**
- `int` `conditionMax` — the ConditionMax to set

**Returns:** `void`

### public ItemContainer getRightClickContainer()

**Returns:** `ItemContainer`

### public void setRightClickContainer(ItemContainer rightClickContainer)

**Parameters:**
- `ItemContainer` `rightClickContainer` — the rightClickContainer to set

**Returns:** `void`

### public String getSwingAnim()

**Returns:** `String`

### public Texture getTexture()

**Returns:** `Texture`

### public Texture getIcon()

**Returns:** `Texture`

### public void setTexture(Texture texture)

**Parameters:**
- `Texture` `texture` — the texture to set

**Returns:** `void`

### public void setIcon(Texture texture)

**Parameters:**
- `Texture` `texture`

**Returns:** `void`

### public Texture getTexturerotten()

**Returns:** `Texture`

### public void setTexturerotten(Texture texturerotten)

**Parameters:**
- `Texture` `texturerotten` — the texturerotten to set

**Returns:** `void`

### public Texture getTextureCooked()

**Returns:** `Texture`

### public void setTextureCooked(Texture textureCooked)

**Parameters:**
- `Texture` `textureCooked` — the textureCooked to set

**Returns:** `void`

### public Texture getTextureBurnt()

**Returns:** `Texture`

### public void setTextureBurnt(Texture textureBurnt)

**Parameters:**
- `Texture` `textureBurnt` — the textureBurnt to set

**Returns:** `void`

### public void setType(String type)

**Parameters:**
- `String` `type` — the type to set

**Returns:** `void`

### public void setCurrentUses(int newuses)

**Parameters:**
- `int` `newuses`

**Returns:** `void`

### public int getCurrentUses()

**Returns:** `int`

### public void setCurrentUsesFrom(InventoryItem other)

**Parameters:**
- `InventoryItem` `other`

**Returns:** `void`

### public int getMaxUses()

**Returns:** `int`

### public float getCurrentUsesFloat()

**Returns:** `float`

### public void setCurrentUsesFloat(float newUses)

**Parameters:**
- `float` `newUses`

**Returns:** `void`

### public float getUseDelta()

**Returns:** `float`

### public void setUseDelta(float useDelta)

**Parameters:**
- `float` `useDelta`

**Returns:** `void`

### @Deprecated
public int getUses()

> ⚠️ **Deprecated**

**Returns:** `int`

### @Deprecated
public void setUses(int newuses)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `newuses` — the uses to set

**Returns:** `void`

### public void setUsesFrom(InventoryItem other)

**Parameters:**
- `InventoryItem` `other`

**Returns:** `void`

### public float getAge()

**Returns:** `float`

### public void setAge(float age)

**Parameters:**
- `float` `age` — the Age to set

**Returns:** `void`

### public float getLastAged()

**Returns:** `float`

### public void setLastAged(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public void updateAge()

**Returns:** `void`

### public void setAutoAge()

**Returns:** `void`

### public boolean isIsCookable()

**Returns:** `boolean`

### public boolean isCookable()

**Returns:** `boolean`

### public void setIsCookable(boolean isCookable)

**Parameters:**
- `boolean` `isCookable` — the IsCookable to set

**Returns:** `void`

### public float getCookingTime()

**Returns:** `float`

### public void setCookingTime(float cookingTime)

**Parameters:**
- `float` `cookingTime` — the CookingTime to set

**Returns:** `void`

### public float getMinutesToCook()

**Returns:** `float`

### public void setMinutesToCook(float minutesToCook)

**Parameters:**
- `float` `minutesToCook` — the MinutesToCook to set

**Returns:** `void`

### public float getMinutesToBurn()

**Returns:** `float`

### public void setMinutesToBurn(float minutesToBurn)

**Parameters:**
- `float` `minutesToBurn` — the MinutesToBurn to set

**Returns:** `void`

### public boolean isCooked()

**Returns:** `boolean`

### public void setCooked(boolean cooked)

**Parameters:**
- `boolean` `cooked` — the Cooked to set

**Returns:** `void`

### public boolean isBurnt()

**Returns:** `boolean`

### public void setBurnt(boolean burnt)

**Parameters:**
- `boolean` `burnt` — the Burnt to set

**Returns:** `void`

### public int getOffAge()

**Returns:** `int`

### public void setOffAge(int offAge)

**Parameters:**
- `int` `offAge` — the OffAge to set

**Returns:** `void`

### public int getOffAgeMax()

**Returns:** `int`

### public void setOffAgeMax(int offAgeMax)

**Parameters:**
- `int` `offAgeMax` — the OffAgeMax to set

**Returns:** `void`

### public float getWeight()

**Returns:** `float`

### public void setWeight(float weight)

**Parameters:**
- `float` `weight` — the Weight to set

**Returns:** `void`

### public float getActualWeight()

**Returns:** `float`

### public float getActualWeightUnmodded()

**Returns:** `float`

### public void setActualWeight(float actualWeight)

**Parameters:**
- `float` `actualWeight` — the ActualWeight to set

**Returns:** `void`

### public String getWorldTexture()

**Returns:** `String`

### public void setWorldTexture(String worldTexture)

**Parameters:**
- `String` `worldTexture` — the WorldTexture to set

**Returns:** `void`

### public String getDescription()

**Returns:** `String`

### public void setDescription(String description)

**Parameters:**
- `String` `description` — the Description to set

**Returns:** `void`

### public void incrementCondition(int increment)

**Parameters:**
- `int` `increment`

**Returns:** `void`

### public int getCondition()

**Returns:** `int`

### public void setCondition(int condition,
boolean doSound)

**Parameters:**
- `int` `condition`
- `boolean` `doSound`

**Returns:** `void`

### public void doBreakSound()

**Returns:** `void`

### public void doDamagedSound()

**Returns:** `void`

### public void setCondition(int condition)

**Parameters:**
- `int` `condition` — the Condition to set

**Returns:** `void`

### public void setConditionNoSound(int condition)

**Parameters:**
- `int` `condition`

**Returns:** `void`

### public void setConditionWhileLoading(int condition)

**Parameters:**
- `int` `condition`

**Returns:** `void`

### public String getOffString()

**Returns:** `String`

### public void setOffString(String offString)

**Parameters:**
- `String` `offString` — the OffString to set

**Returns:** `void`

### public String getCookedString()

**Returns:** `String`

### public void setCookedString(String cookedString)

**Parameters:**
- `String` `cookedString` — the CookedString to set

**Returns:** `void`

### public String getUnCookedString()

**Returns:** `String`

### public void setUnCookedString(String unCookedString)

**Parameters:**
- `String` `unCookedString` — the UnCookedString to set

**Returns:** `void`

### public String getBurntString()

**Returns:** `String`

### public void setBurntString(String burntString)

**Parameters:**
- `String` `burntString` — the BurntString to set

**Returns:** `void`

### public String getModule()

**Returns:** `String`

### public void setModule(String module)

**Parameters:**
- `String` `module` — the module to set

**Returns:** `void`

### public boolean isAlwaysWelcomeGift()

**Returns:** `boolean`

### public boolean isCanBandage()

**Returns:** `boolean`

### public float getBoredomChange()

**Returns:** `float`

### public void setBoredomChange(float boredomChange)

**Parameters:**
- `float` `boredomChange` — the boredomChange to set

**Returns:** `void`

### public float getUnhappyChange()

**Returns:** `float`

### public void setUnhappyChange(float unhappyChange)

**Parameters:**
- `float` `unhappyChange` — the unhappyChange to set

**Returns:** `void`

### public float getStressChange()

**Returns:** `float`

### public void setStressChange(float stressChange)

**Parameters:**
- `float` `stressChange` — the stressChange to set

**Returns:** `void`

### public int getFoodSicknessChange()

**Returns:** `int`

### public void setFoodSicknessChange(int foodSicknessChange)

**Parameters:**
- `int` `foodSicknessChange`

**Returns:** `void`

### public int getInverseCoughProbability()

**Returns:** `int`

### public void setInverseCoughProbability(int inverseCoughProbability)

**Parameters:**
- `int` `inverseCoughProbability`

**Returns:** `void`

### public int getInverseCoughProbabilitySmoker()

**Returns:** `int`

### public void setInverseCoughProbabilitySmoker(int inverseCoughProbabilitySmoker)

**Parameters:**
- `int` `inverseCoughProbabilitySmoker`

**Returns:** `void`

### public Set<ItemTag> getTags()

**Returns:** `Set<ItemTag>`

### public boolean hasTag(ItemTag... tags)

**Parameters:**
- `ItemTag...` `tags`

**Returns:** `boolean`

### public boolean hasTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public ArrayList<IsoObject> getTaken()

**Returns:** `ArrayList<IsoObject>`

### public void setTaken(ArrayList<IsoObject> taken)

**Parameters:**
- `ArrayList<IsoObject>` `taken` — the Taken to set

**Returns:** `void`

### public void setReplaceOnUseOn(String replaceOnUseOn)

**Parameters:**
- `String` `replaceOnUseOn`

**Returns:** `void`

### public String getReplaceOnUseOn()

**Returns:** `String`

### public String getReplaceOnUseOnString()

**Returns:** `String`

### public String getReplaceTypes()

**Returns:** `String`

### public HashMap<String,String> getReplaceTypesMap()

**Returns:** `HashMap<String,String>`

### public String getReplaceType(String key)

**Parameters:**
- `String` `key`

**Returns:** `String`

### public boolean hasReplaceType(String key)

**Parameters:**
- `String` `key`

**Returns:** `boolean`

### public boolean isWaterSource()

**Returns:** `boolean`

### public boolean isWaterOnlySource()

**Returns:** `boolean`

### public void CopyModData(se.krka.kahlua.vm.KahluaTable defaultModData)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `defaultModData`

**Returns:** `void`

### public void copyModData(se.krka.kahlua.vm.KahluaTable modData)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `modData`

**Returns:** `void`

### public int getCount()

**Returns:** `int`

### public void setCount(int count)

**Parameters:**
- `int` `count`

**Returns:** `void`

### public boolean isActivated()

**Returns:** `boolean`

### public void setActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public void setActivatedRemote(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public void setCanBeActivated(boolean activatedItem)

**Parameters:**
- `boolean` `activatedItem`

**Returns:** `void`

### public boolean canBeActivated()

**Returns:** `boolean`

### public void setLightStrength(float lightStrength)

**Parameters:**
- `float` `lightStrength`

**Returns:** `void`

### public float getLightStrength()

**Returns:** `float`

### public boolean isTorchCone()

**Returns:** `boolean`

### public void setTorchCone(boolean isTorchCone)

**Parameters:**
- `boolean` `isTorchCone`

**Returns:** `void`

### public float getTorchDot()

**Returns:** `float`

### public int getLightDistance()

**Returns:** `int`

### public void setLightDistance(int lightDistance)

**Parameters:**
- `int` `lightDistance`

**Returns:** `void`

### public boolean canEmitLight()

**Returns:** `boolean`

### public boolean isEmittingLight()

**Returns:** `boolean`

### public boolean canStoreWater()

**Returns:** `boolean`

### public float getFatigueChange()

**Returns:** `float`

### public void setFatigueChange(float fatigueChange)

**Parameters:**
- `float` `fatigueChange`

**Returns:** `void`

### public float getCurrentCondition()

Return the real condition of the weapon, based on this calcul :
Condition/ConditionMax * 100

**Returns:** `float`

### public void setColor(Color color)

**Parameters:**
- `Color` `color`

**Returns:** `void`

### public Color getColor()

**Returns:** `Color`

### public ColorInfo getColorInfo()

**Returns:** `ColorInfo`

### public boolean isTwoHandWeapon()

**Returns:** `boolean`

### public String getCustomMenuOption()

**Returns:** `String`

### public void setCustomMenuOption(String customMenuOption)

**Parameters:**
- `String` `customMenuOption`

**Returns:** `void`

### public void setTooltip(String tooltip)

**Parameters:**
- `String` `tooltip`

**Returns:** `void`

### public String getTooltip()

**Returns:** `String`

### public String getDisplayCategory()

**Returns:** `String`

### public void setDisplayCategory(String displayCategory)

**Parameters:**
- `String` `displayCategory`

**Returns:** `void`

### public int getHaveBeenRepaired()

**Returns:** `int`

### public void setHaveBeenRepaired(int haveBeenRepaired)

**Parameters:**
- `int` `haveBeenRepaired`

**Returns:** `void`

### public int getTimesRepaired()

**Returns:** `int`

### public void setTimesRepaired(int haveBeenRepaired)

**Parameters:**
- `int` `haveBeenRepaired`

**Returns:** `void`

### public void copyTimesRepairedFrom(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void copyTimesRepairedTo(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public int getTimesHeadRepaired()

**Returns:** `int`

### public void setTimesHeadRepaired(int haveBeenRepaired)

**Parameters:**
- `int` `haveBeenRepaired`

**Returns:** `void`

### public boolean hasTimesHeadRepaired()

**Returns:** `boolean`

### public void copyTimesHeadRepairedFrom(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void copyTimesHeadRepairedTo(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean isBroken()

**Returns:** `boolean`

### public void setBroken(boolean broken)

**Parameters:**
- `boolean` `broken`

**Returns:** `void`

### public String getDisplayName()

**Returns:** `String`

### public boolean isTrap()

**Returns:** `boolean`

### public void addExtraItem(ItemKey key)

**Parameters:**
- `ItemKey` `key`

**Returns:** `void`

### public void addExtraItem(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public boolean haveExtraItems()

**Returns:** `boolean`

### public ArrayList<String> getExtraItems()

**Returns:** `ArrayList<String>`

### public float getExtraItemsWeight()

**Returns:** `float`

### public boolean isCustomName()

**Returns:** `boolean`

### public void setCustomName(boolean customName)

**Parameters:**
- `boolean` `customName`

**Returns:** `void`

### public boolean isFishingLure()

**Returns:** `boolean`

### public void copyConditionModData(InventoryItem other)

**Parameters:**
- `InventoryItem` `other`

**Returns:** `void`

### public void setConditionFromModData(InventoryItem other)

**Parameters:**
- `InventoryItem` `other`

**Returns:** `void`

### public String getBreakSound()

**Returns:** `String`

### public void setBreakSound(String breakSound)

**Parameters:**
- `String` `breakSound`

**Returns:** `void`

### public String getPlaceOneSound()

**Returns:** `String`

### public String getPlaceMultipleSound()

**Returns:** `String`

### public String getSoundByID(String id)

**Parameters:**
- `String` `id`

**Returns:** `String`

### public void setBeingFilled(boolean v)

**Parameters:**
- `boolean` `v`

**Returns:** `void`

### public boolean isBeingFilled()

**Returns:** `boolean`

### public String getFillFromDispenserSound()

**Returns:** `String`

### public String getFillFromLakeSound()

**Returns:** `String`

### public String getFillFromTapSound()

**Returns:** `String`

### public String getFillFromToiletSound()

**Returns:** `String`

### public String getPourLiquidOnGroundSound()

**Returns:** `String`

### public boolean isAlcoholic()

**Returns:** `boolean`

### public void setAlcoholic(boolean alcoholic)

**Parameters:**
- `boolean` `alcoholic`

**Returns:** `void`

### public float getAlcoholPower()

**Returns:** `float`

### public void setAlcoholPower(float alcoholPower)

**Parameters:**
- `float` `alcoholPower`

**Returns:** `void`

### public float getBandagePower()

**Returns:** `float`

### public void setBandagePower(float bandagePower)

**Parameters:**
- `float` `bandagePower`

**Returns:** `void`

### public float getReduceInfectionPower()

**Returns:** `float`

### public void setReduceInfectionPower(float reduceInfectionPower)

**Parameters:**
- `float` `reduceInfectionPower`

**Returns:** `void`

### public final void saveWithSize(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public boolean isCustomWeight()

**Returns:** `boolean`

### public void setCustomWeight(boolean custom)

**Parameters:**
- `boolean` `custom`

**Returns:** `void`

### public float getContentsWeight()

**Returns:** `float`

### public float getHotbarEquippedWeight()

**Returns:** `float`

### public float getEquippedWeight()

**Returns:** `float`

### public float getUnequippedWeight()

**Returns:** `float`

### public boolean isEquipped()

**Returns:** `boolean`

### public IsoGameCharacter getUser()

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter getOwner()

**Returns:** `IsoGameCharacter`

### public int getKeyId()

**Returns:** `int`

### public void setKeyId(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `void`

### public boolean isRemoteController()

**Returns:** `boolean`

### public void setRemoteController(boolean remoteController)

**Parameters:**
- `boolean` `remoteController`

**Returns:** `void`

### public boolean canBeRemote()

**Returns:** `boolean`

### public void setCanBeRemote(boolean canBeRemote)

**Parameters:**
- `boolean` `canBeRemote`

**Returns:** `void`

### public int getRemoteControlID()

**Returns:** `int`

### public void setRemoteControlID(int remoteControlId)

**Parameters:**
- `int` `remoteControlId`

**Returns:** `void`

### public int getRemoteRange()

**Returns:** `int`

### public void setRemoteRange(int remoteRange)

**Parameters:**
- `int` `remoteRange`

**Returns:** `void`

### public String getExplosionSound()

**Returns:** `String`

### public void setExplosionSound(String explosionSound)

**Parameters:**
- `String` `explosionSound`

**Returns:** `void`

### public String getCountDownSound()

**Returns:** `String`

### public void setCountDownSound(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public float getColorRed()

**Returns:** `float`

### public void setColorRed(float colorRed)

**Parameters:**
- `float` `colorRed`

**Returns:** `void`

### public float getColorGreen()

**Returns:** `float`

### public void setColorGreen(float colorGreen)

**Parameters:**
- `float` `colorGreen`

**Returns:** `void`

### public float getColorBlue()

**Returns:** `float`

### public void setColorBlue(float colorBlue)

**Parameters:**
- `float` `colorBlue`

**Returns:** `void`

### public String getEvolvedRecipeName()

**Returns:** `String`

### public void setEvolvedRecipeName(String evolvedRecipeName)

**Parameters:**
- `String` `evolvedRecipeName`

**Returns:** `void`

### public float getMetalValue()

**Returns:** `float`

### public void setMetalValue(float metalValue)

**Parameters:**
- `float` `metalValue`

**Returns:** `void`

### public float getItemHeat()

**Returns:** `float`

### public void setItemHeat(float itemHeat)

**Parameters:**
- `float` `itemHeat`

**Returns:** `void`

### public float getInvHeat()

**Returns:** `float`

### public float getMeltingTime()

**Returns:** `float`

### public void setMeltingTime(float meltingTime)

**Parameters:**
- `float` `meltingTime`

**Returns:** `void`

### public String getWorker()

**Returns:** `String`

### public void setWorker(String worker)

**Parameters:**
- `String` `worker`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public void setID(int itemId)

**Parameters:**
- `int` `itemId`

**Returns:** `void`

### public boolean isWet()

**Returns:** `boolean`

### public void setWet(boolean isWet)

**Parameters:**
- `boolean` `isWet`

**Returns:** `void`

### public float getWetCooldown()

**Returns:** `float`

### public void setWetCooldown(float wetCooldown)

**Parameters:**
- `float` `wetCooldown`

**Returns:** `void`

### public String getItemWhenDry()

**Returns:** `String`

### public void setItemWhenDry(String itemWhenDry)

**Parameters:**
- `String` `itemWhenDry`

**Returns:** `void`

### public boolean isFavorite()

**Returns:** `boolean`

### public void setFavorite(boolean favorite)

**Parameters:**
- `boolean` `favorite`

**Returns:** `void`

### public void setFavorite(boolean favorite,
boolean isSyncNeeded)

**Parameters:**
- `boolean` `favorite`
- `boolean` `isSyncNeeded`

**Returns:** `void`

### public ArrayList<String> getRequireInHandOrInventory()

**Returns:** `ArrayList<String>`

### public void setRequireInHandOrInventory(ArrayList<String> requireInHandOrInventory)

**Parameters:**
- `ArrayList<String>` `requireInHandOrInventory`

**Returns:** `void`

### public boolean isCustomColor()

**Returns:** `boolean`

### public void setCustomColor(boolean customColor)

**Parameters:**
- `boolean` `customColor`

**Returns:** `void`

### public void doBuildingStash()

**Returns:** `void`

### public void setStashMap(String stashMap)

**Parameters:**
- `String` `stashMap`

**Returns:** `void`

### public String getStashMap()

**Returns:** `String`

### public int getMechanicType()

**Returns:** `int`

### public float getItemCapacity()

**Returns:** `float`

### public void setItemCapacity(float capacity)

**Parameters:**
- `float` `capacity`

**Returns:** `void`

### public int getMaxCapacity()

**Returns:** `int`

### public void setMaxCapacity(int maxCapacity)

**Parameters:**
- `int` `maxCapacity`

**Returns:** `void`

### public boolean isConditionAffectsCapacity()

**Returns:** `boolean`

### public float getBrakeForce()

**Returns:** `float`

### public void setBrakeForce(float brakeForce)

**Parameters:**
- `float` `brakeForce`

**Returns:** `void`

### public float getDurability()

**Returns:** `float`

### public void setDurability(float durability)

**Parameters:**
- `float` `durability`

**Returns:** `void`

### public int getChanceToSpawnDamaged()

**Returns:** `int`

### public void setChanceToSpawnDamaged(int chanceToSpawnDamaged)

**Parameters:**
- `int` `chanceToSpawnDamaged`

**Returns:** `void`

### public float getConditionLowerNormal()

**Returns:** `float`

### public void setConditionLowerNormal(float conditionLowerNormal)

**Parameters:**
- `float` `conditionLowerNormal`

**Returns:** `void`

### public float getConditionLowerOffroad()

**Returns:** `float`

### public void setConditionLowerOffroad(float conditionLowerOffroad)

**Parameters:**
- `float` `conditionLowerOffroad`

**Returns:** `void`

### public float getWheelFriction()

**Returns:** `float`

### public void setWheelFriction(float wheelFriction)

**Parameters:**
- `float` `wheelFriction`

**Returns:** `void`

### public float getSuspensionDamping()

**Returns:** `float`

### public void setSuspensionDamping(float suspensionDamping)

**Parameters:**
- `float` `suspensionDamping`

**Returns:** `void`

### public float getSuspensionCompression()

**Returns:** `float`

### public void setSuspensionCompression(float suspensionCompression)

**Parameters:**
- `float` `suspensionCompression`

**Returns:** `void`

### public void setInfected(boolean infected)

**Parameters:**
- `boolean` `infected`

**Returns:** `void`

### public boolean isInfected()

**Returns:** `boolean`

### public float getEngineLoudness()

**Returns:** `float`

### public void setEngineLoudness(float engineLoudness)

**Parameters:**
- `float` `engineLoudness`

**Returns:** `void`

### public String getStaticModel()

**Returns:** `String`

### public void setStaticModel(String model)

**Parameters:**
- `String` `model`

**Returns:** `void`

### public void setStaticModel(ModelKey model)

**Parameters:**
- `ModelKey` `model`

**Returns:** `void`

### public String getStaticModelException()

**Returns:** `String`

### public ArrayList<String> getIconsForTexture()

**Returns:** `ArrayList<String>`

### public void setIconsForTexture(ArrayList<String> iconsForTexture)

**Parameters:**
- `ArrayList<String>` `iconsForTexture`

**Returns:** `void`

### public float getScore(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `float`

### public IsoGameCharacter getPreviousOwner()

**Returns:** `IsoGameCharacter`

### public void setPreviousOwner(IsoGameCharacter previousOwner)

**Parameters:**
- `IsoGameCharacter` `previousOwner` — the previousOwner to set

**Returns:** `void`

### public Item getScriptItem()

**Returns:** `Item`

### public void setScriptItem(Item scriptItem)

**Parameters:**
- `Item` `scriptItem` — the ScriptItem to set

**Returns:** `void`

### public void setItemType(ItemType itemType)

**Parameters:**
- `ItemType` `itemType`

**Returns:** `void`

### public boolean isItemType(ItemType itemType)

**Parameters:**
- `ItemType` `itemType`

**Returns:** `boolean`

### public ItemContainer getContainer()

**Returns:** `ItemContainer`

### public void setContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container` — the container to set

**Returns:** `void`

### public ArrayList<BloodClothingType> getBloodClothingType()

**Returns:** `ArrayList<BloodClothingType>`

### public void setBloodClothingType(ArrayList<BloodClothingType> bloodClothingType)

**Parameters:**
- `ArrayList<BloodClothingType>` `bloodClothingType`

**Returns:** `void`

### public void setBlood(BloodBodyPartType bodyPartType,
float amount)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`
- `float` `amount`

**Returns:** `void`

### public float getBlood(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public void setDirt(BloodBodyPartType bodyPartType,
float amount)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`
- `float` `amount`

**Returns:** `void`

### public float getDirt(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public String getClothingItemName()

**Returns:** `String`

### public int getStashChance()

**Returns:** `int`

### public void setStashChance(int stashChance)

**Parameters:**
- `int` `stashChance`

**Returns:** `void`

### public String getEatType()

**Returns:** `String`

### public String getPourType()

**Returns:** `String`

### public boolean isUseWorldItem()

**Returns:** `boolean`

### public AmmoType getAmmoType()

**Returns:** `AmmoType`

### public void setAmmoType(AmmoType ammoType)

**Parameters:**
- `AmmoType` `ammoType`

**Returns:** `void`

### public int getMaxAmmo()

**Returns:** `int`

### public void setMaxAmmo(int maxAmmoCount)

**Parameters:**
- `int` `maxAmmoCount`

**Returns:** `void`

### public int getCurrentAmmoCount()

**Returns:** `int`

### public void setCurrentAmmoCount(int ammo)

**Parameters:**
- `int` `ammo`

**Returns:** `void`

### public ArrayList<String> getGunType()

**Returns:** `ArrayList<String>`

### public void setGunType(ArrayList<String> gunType)

**Parameters:**
- `ArrayList<String>` `gunType`

**Returns:** `void`

### public boolean hasBlood()

**Returns:** `boolean`

### public boolean hasDirt()

**Returns:** `boolean`

### public String getAttachmentType()

**Returns:** `String`

### public void setAttachmentType(String attachmentType)

**Parameters:**
- `String` `attachmentType`

**Returns:** `void`

### public int getAttachedSlot()

**Returns:** `int`

### public void setAttachedSlot(int attachedSlot)

**Parameters:**
- `int` `attachedSlot`

**Returns:** `void`

### public ArrayList<String> getAttachmentsProvided()

**Returns:** `ArrayList<String>`

### public void setAttachmentsProvided(ArrayList<String> attachmentsProvided)

**Parameters:**
- `ArrayList<String>` `attachmentsProvided`

**Returns:** `void`

### public String getAttachedSlotType()

**Returns:** `String`

### public void setAttachedSlotType(String attachedSlotType)

**Parameters:**
- `String` `attachedSlotType`

**Returns:** `void`

### public String getAttachmentReplacement()

**Returns:** `String`

### public void setAttachmentReplacement(String attachementReplacement)

**Parameters:**
- `String` `attachementReplacement`

**Returns:** `void`

### public String getAttachedToModel()

**Returns:** `String`

### public void setAttachedToModel(String attachedToModel)

**Parameters:**
- `String` `attachedToModel`

**Returns:** `void`

### public String getFabricType()

**Returns:** `String`

### public String getStringItemType()

**Returns:** `String`

### public boolean isProtectFromRainWhileEquipped()

**Returns:** `boolean`

### public boolean isEquippedNoSprint()

**Returns:** `boolean`

### public ItemBodyLocation getBodyLocation()

**Returns:** `ItemBodyLocation`

### public boolean isBodyLocation(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `boolean`

### public String getMakeUpType()

**Returns:** `String`

### public boolean isHidden()

**Returns:** `boolean`

### public String getConsolidateOption()

**Returns:** `String`

### public ArrayList<String> getClothingItemExtra()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getClothingItemExtraOption()

**Returns:** `ArrayList<String>`

### public String getWorldStaticItem()

**Returns:** `String`

### public String getWorldStaticModel()

**Returns:** `String`

### public void setWorldStaticItem(String model)

**Parameters:**
- `String` `model`

**Returns:** `void`

### public void setWorldStaticModel(String model)

**Parameters:**
- `String` `model`

**Returns:** `void`

### public void setWorldStaticModel(ModelKey model)

**Parameters:**
- `ModelKey` `model`

**Returns:** `void`

### public void setRegistry_id(Item itemscript)

**Parameters:**
- `Item` `itemscript`

**Returns:** `void`

### public short getRegistry_id()

**Returns:** `short`

### public String getModID()

**Returns:** `String`

### public String getModName()

**Returns:** `String`

### public boolean isVanilla()

**Returns:** `boolean`

### public short getRecordedMediaIndex()

**Returns:** `short`

### public void setRecordedMediaIndex(short id)

**Parameters:**
- `short` `id`

**Returns:** `void`

### public void setRecordedMediaIndexInteger(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public boolean isRecordedMedia()

**Returns:** `boolean`

### public MediaData getMediaData()

**Returns:** `MediaData`

### public byte getMediaType()

**Returns:** `byte`

### public void setMediaType(byte b)

**Parameters:**
- `byte` `b`

**Returns:** `void`

### public void setRecordedMediaData(MediaData data)

**Parameters:**
- `MediaData` `data`

**Returns:** `void`

### public void setWorldZRotation(float rot)

**Parameters:**
- `float` `rot`

**Returns:** `void`

### public float getWorldZRotation()

**Returns:** `float`

### public void setWorldYRotation(float rot)

**Parameters:**
- `float` `rot`

**Returns:** `void`

### public float getWorldYRotation()

**Returns:** `float`

### public void setWorldXRotation(float rot)

**Parameters:**
- `float` `rot`

**Returns:** `void`

### public float getWorldXRotation()

**Returns:** `float`

### public void randomizeWorldZRotation()

**Returns:** `void`

### public void setWorldScale(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

### public String getLuaCreate()

**Returns:** `String`

### public boolean isInitialised()

**Returns:** `boolean`

### public void setInitialised(boolean initialised)

**Parameters:**
- `boolean` `initialised`

**Returns:** `void`

### public void initialiseItem()

**Returns:** `void`

### public String getMilkReplaceItem()

**Returns:** `String`

### public int getMaxMilk()

**Returns:** `int`

### public boolean isAnimalFeed()

**Returns:** `boolean`

### public String getAnimalFeedType()

**Returns:** `String`

### public String getDigType()

**Returns:** `String`

### public String getSoundParameter(String parameterName)

**Parameters:**
- `String` `parameterName`

**Returns:** `String`

### public boolean isWorn()

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public Texture getTextureColorMask()

**Returns:** `Texture`

### public Texture getTextureFluidMask()

**Returns:** `Texture`

### public void setTextureColorMask(String tex)

**Parameters:**
- `String` `tex`

**Returns:** `void`

### public void setTextureFluidMask(String tex)

**Parameters:**
- `String` `tex`

**Returns:** `void`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public GameEntityType getGameEntityType()

**Returns:** `GameEntityType`

### public long getEntityNetID()

**Returns:** `long`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public boolean isEntityValid()

**Returns:** `boolean`

### public static boolean RemoveFromContainer(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public AnimalTracks getAnimalTracks()

**Returns:** `AnimalTracks`

### public void setAnimalTracks(AnimalTracks animalTracks)

**Parameters:**
- `AnimalTracks` `animalTracks`

**Returns:** `void`

### public void syncItemFields()

**Returns:** `void`

### public void checkSyncItemFields(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public String getWithDrainable()

**Returns:** `String`

### public String getWithoutDrainable()

**Returns:** `String`

### public ArrayList<String> getStaticModelsByIndex()

**Returns:** `ArrayList<String>`

### public void setStaticModelsByIndex(ArrayList<String> staticModelsByIndex)

**Parameters:**
- `ArrayList<String>` `staticModelsByIndex`

**Returns:** `void`

### public ArrayList<String> getWorldStaticModelsByIndex()

**Returns:** `ArrayList<String>`

### public void setWorldStaticModelsByIndex(ArrayList<String> staticModelsByIndex)

**Parameters:**
- `ArrayList<String>` `staticModelsByIndex`

**Returns:** `void`

### public String tryGetWorldStaticModelByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public int getModelIndex()

**Returns:** `int`

### public void setModelIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public float getVisionModifier()

**Returns:** `float`

### public float getHearingModifier()

**Returns:** `float`

### public String getWorldObjectSprite()

**Returns:** `String`

### public float getStrainModifier()

**Returns:** `float`

### public int getConditionLowerChance()

**Returns:** `int`

### public void setConditionFrom(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void setConditionTo(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void reduceCondition()

**Returns:** `void`

### public boolean damageCheck()

**Returns:** `boolean`

### public boolean damageCheck(int skill)

**Parameters:**
- `int` `skill`

**Returns:** `boolean`

### public boolean damageCheck(int skill,
float multiplier)

**Parameters:**
- `int` `skill`
- `float` `multiplier`

**Returns:** `boolean`

### public boolean damageCheck(int skill,
float multiplier,
boolean maintenance)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`

**Returns:** `boolean`

### public boolean damageCheck(int skill,
float multiplier,
boolean maintenance,
boolean isEquipped)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`
- `boolean` `isEquipped`

**Returns:** `boolean`

### public boolean damageCheck(int skill,
float multiplier,
boolean maintenance,
boolean isEquipped,
IsoGameCharacter character)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`
- `boolean` `isEquipped`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean sharpnessCheck()

**Returns:** `boolean`

### public boolean sharpnessCheck(int skill)

**Parameters:**
- `int` `skill`

**Returns:** `boolean`

### public boolean sharpnessCheck(int skill,
float multiplier)

**Parameters:**
- `int` `skill`
- `float` `multiplier`

**Returns:** `boolean`

### public boolean sharpnessCheck(int skill,
float multiplier,
boolean maintenance)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`

**Returns:** `boolean`

### public boolean sharpnessCheck(int skill,
float multiplier,
boolean maintenance,
boolean isEquipped)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`
- `boolean` `isEquipped`

**Returns:** `boolean`

### public boolean hasSharpness()

**Returns:** `boolean`

### public float getSharpness()

**Returns:** `float`

### public float getMaxSharpness()

**Returns:** `float`

### public void applyMaxSharpness()

**Returns:** `void`

### public float getSharpnessMultiplier()

**Returns:** `float`

### public void setSharpness(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public void setSharpnessFrom(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public float getSharpnessIncrement()

**Returns:** `float`

### public boolean isDamaged()

**Returns:** `boolean`

### public boolean isDull()

**Returns:** `boolean`

### public int getMaintenanceMod()

**Returns:** `int`

### public int getMaintenanceMod(boolean isEquipped)

**Parameters:**
- `boolean` `isEquipped`

**Returns:** `int`

### public int getMaintenanceMod(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `int`

### public int getMaintenanceMod(boolean isEquipped,
IsoGameCharacter character)

**Parameters:**
- `boolean` `isEquipped`
- `IsoGameCharacter` `character`

**Returns:** `int`

### public int getWeaponLevel()

**Returns:** `int`

### public boolean headConditionCheck()

**Returns:** `boolean`

### public boolean headConditionCheck(int skill)

**Parameters:**
- `int` `skill`

**Returns:** `boolean`

### public boolean headConditionCheck(int skill,
float multiplier)

**Parameters:**
- `int` `skill`
- `float` `multiplier`

**Returns:** `boolean`

### public boolean headConditionCheck(int skill,
float multiplier,
boolean maintenance)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`

**Returns:** `boolean`

### public boolean headConditionCheck(int skill,
float multiplier,
boolean maintenance,
boolean isEquipped)

**Parameters:**
- `int` `skill`
- `float` `multiplier`
- `boolean` `maintenance`
- `boolean` `isEquipped`

**Returns:** `boolean`

### public int getHeadConditionLowerChance()

**Returns:** `int`

### public float getHeadConditionLowerChanceMultiplier()

**Returns:** `float`

### public void reduceHeadCondition()

**Returns:** `void`

### public boolean hasHeadCondition()

**Returns:** `boolean`

### public int getHeadCondition()

**Returns:** `int`

### public int getHeadConditionMax()

**Returns:** `int`

### public void setHeadCondition(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void setHeadConditionFromCondition(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void setConditionFromHeadCondition(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean hasQuality()

**Returns:** `boolean`

### public int getQuality()

**Returns:** `int`

### public void setQuality(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public String getOnBreak()

**Returns:** `String`

### public void onBreak()

**Returns:** `void`

### public float getBloodLevelAdjustedLow()

**Returns:** `float`

### public float getBloodLevelAdjustedHigh()

**Returns:** `float`

### public float getBloodLevel()

**Returns:** `float`

### public void setBloodLevel(float level)

**Parameters:**
- `float` `level`

**Returns:** `void`

### public void copyBloodLevelFrom(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean isBloody()

**Returns:** `boolean`

### public String getDamagedSound()

**Returns:** `String`

### public String getBulletHitArmourSound()

**Returns:** `String`

### public String getWeaponHitArmourSound()

**Returns:** `String`

### public String getShoutType()

**Returns:** `String`

### public float getShoutMultiplier()

**Returns:** `float`

### public int getEatTime()

**Returns:** `int`

### public boolean isVisualAid()

**Returns:** `boolean`

### public float getDiscomfortModifier()

**Returns:** `float`

### public boolean hasMetal()

**Returns:** `boolean`

### public float getFireFuelRatio()

**Returns:** `float`

### public float getWetness()

**Returns:** `float`

### public boolean isMemento()

**Returns:** `boolean`

### public void nameAfterDescriptor(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public void monogramAfterDescriptor(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public String getLootType()

**Returns:** `String`

### public boolean getIsCraftingConsumed()

**Returns:** `boolean`

### public void setIsCraftingConsumed(boolean craftingConsumed)

**Parameters:**
- `boolean` `craftingConsumed`

**Returns:** `void`

### public void OnAddedToContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public void OnBeforeRemoveFromContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public IsoDeadBody getDeadBodyObject()

**Returns:** `IsoDeadBody`

### public boolean isPureWater(boolean includeTainted)

**Parameters:**
- `boolean` `includeTainted`

**Returns:** `boolean`

### public void copyClothing(InventoryItem otherItem)

**Parameters:**
- `InventoryItem` `otherItem`

**Returns:** `void`

### public void inheritFoodAgeFrom(InventoryItem otherFood)

**Parameters:**
- `InventoryItem` `otherFood`

**Returns:** `void`

### public void inheritOlderFoodAge(InventoryItem otherFood)

**Parameters:**
- `InventoryItem` `otherFood`

**Returns:** `void`

### public boolean isFood()

**Returns:** `boolean`

### public void unsealIfNotFull()

**Returns:** `void`

### public void randomizeCondition()

**Returns:** `void`

### public void randomizeGeneralCondition()

**Returns:** `void`

### public void randomizeHeadCondition()

**Returns:** `void`

### public void randomizeSharpness()

**Returns:** `void`

### public FluidContainer getFluidContainerFromSelfOrWorldItem()

**Returns:** `FluidContainer`

### public boolean isEmptyOfFluid()

**Returns:** `boolean`

### public boolean isFullOfFluid()

**Returns:** `boolean`

### public boolean isFluidContainer()

**Returns:** `boolean`

### public boolean isSpice()

**Returns:** `boolean`

### public boolean isKeyRing()

**Returns:** `boolean`

### public boolean isFakeEquipped(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean isFakeEquipped()

**Returns:** `boolean`

### public String getItemAfterCleaning()

**Returns:** `String`

### public ArrayList<String> getResearchableRecipes()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getResearchableRecipes(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `ArrayList<String>`

### public boolean hasResearchableRecipes()

**Returns:** `boolean`

### public void researchRecipes(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public boolean hasOrigin()

**Returns:** `boolean`

### public boolean canHaveOrigin()

**Returns:** `boolean`

### public boolean setOrigin(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public boolean setOrigin(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean setOrigin(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void setOriginX(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void setOriginY(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void setOriginZ(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public int getOriginX()

**Returns:** `int`

### public int getOriginY()

**Returns:** `int`

### public int getOriginZ()

**Returns:** `int`

### public ItemBodyLocation canBeEquipped()

**Returns:** `ItemBodyLocation`

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public float getWorldAlpha()

**Returns:** `float`

### public void setWorldAlpha(float worldAlpha)

**Parameters:**
- `float` `worldAlpha`

**Returns:** `void`

### public void Remove()

**Returns:** `void`

### public void SynchSpawn()

**Returns:** `void`

### public boolean isFavouriteRecipeInput(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void copyConditionStatesFrom(InventoryItem otherItem)

**Parameters:**
- `InventoryItem` `otherItem`

**Returns:** `void`

### public String getFileName()

**Returns:** `String`

### public void setDoingExtendedPlacement(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean isDoingExtendedPlacement()

**Returns:** `boolean`

### public boolean isNoRecipes(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void setNoRecipes(IsoPlayer player,
Boolean noCrafting)

**Parameters:**
- `IsoPlayer` `player`
- `Boolean` `noCrafting`

**Returns:** `void`

### public static String getNoRecipesModDataString()

**Returns:** `String`

### public boolean isUnwanted(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void setUnwanted(IsoPlayer player,
boolean unwanted)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `unwanted`

**Returns:** `void`

### public InventoryItem emptyLiquid()

**Returns:** `InventoryItem`

### public String getOpeningRecipe()

**Returns:** `String`

### public String getDoubleClickRecipe()

**Returns:** `String`

### public boolean isSealed()

**Returns:** `boolean`

### public boolean hasBeenSeen(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean hasBeenHeard(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public String getReplaceOnExtinguish()

**Returns:** `String`

### public InventoryItem getExtinguishedItem()

**Returns:** `InventoryItem`

### public boolean isSharpenable()

**Returns:** `boolean`

### public String getGunTypeString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\InventoryItem.html`*
