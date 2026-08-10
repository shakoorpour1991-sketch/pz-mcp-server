---
title: zombie.characters.ILuaGameCharacter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters
---

# zombie.characters.ILuaGameCharacter

`public interface ILuaGameCharacter extends ILuaIsoObject, ILuaVariableSource, ILuaGameCharacterAttachedItems, ILuaGameCharacterDamage, ILuaGameCharacterClothing, ILuaGameCharacterHealth, IStateCharacter`

**Kind:** interface · **Package:** zombie.characters

## Description

ILuaGameCharacter
Provides the functions expected by LUA when dealing with objects of this type.

## Methods

### String getFullName()

**Returns:** `String`

### SurvivorDesc getDescriptor()

**Returns:** `SurvivorDesc`

### void setDescriptor(SurvivorDesc descriptor)

**Parameters:**
- `SurvivorDesc` `descriptor`

**Returns:** `void`

### boolean isRangedWeaponEmpty()

**Returns:** `boolean`

### void setRangedWeaponEmpty(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### BaseVisual getVisual()

**Returns:** `BaseVisual`

### BaseCharacterSoundEmitter getEmitter()

**Returns:** `BaseCharacterSoundEmitter`

### void resetModel()

**Returns:** `void`

### void resetModelNextFrame()

**Returns:** `void`

### IsoSpriteInstance getSpriteDef()

**Returns:** `IsoSpriteInstance`

### boolean hasItems(String type,
int count)

**Parameters:**
- `String` `type`
- `int` `count`

**Returns:** `boolean`

### int getXpForLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### IsoGameCharacter.XP getXp()

**Returns:** `IsoGameCharacter.XP`

### boolean isAsleep()

**Returns:** `boolean`

### void setAsleep(boolean Asleep)

**Parameters:**
- `boolean` `Asleep`

**Returns:** `void`

### boolean isResting()

**Returns:** `boolean`

### void setIsResting(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### int getZombieKills()

**Returns:** `int`

### void setForceWakeUpTime(float ForceWakeUpTime)

**Parameters:**
- `float` `ForceWakeUpTime`

**Returns:** `void`

### ItemContainer getInventory()

**Returns:** `ItemContainer`

### InventoryItem getPrimaryHandItem()

**Returns:** `InventoryItem`

### void setPrimaryHandItem(InventoryItem leftHandItem)

**Parameters:**
- `InventoryItem` `leftHandItem`

**Returns:** `void`

### InventoryItem getSecondaryHandItem()

**Returns:** `InventoryItem`

### void setSecondaryHandItem(InventoryItem rightHandItem)

**Parameters:**
- `InventoryItem` `rightHandItem`

**Returns:** `void`

### boolean hasEquipped(String String)

**Parameters:**
- `String` `String`

**Returns:** `boolean`

### boolean hasEquippedTag(ItemTag var1)

**Parameters:**
- `ItemTag` `var1`

**Returns:** `boolean`

### boolean hasWornTag(ItemTag var1)

**Parameters:**
- `ItemTag` `var1`

**Returns:** `boolean`

### boolean isHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isPrimaryHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isSecondaryHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isItemInBothHands(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean removeFromHands(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### void setSpeakColourInfo(ColorInfo info)

**Parameters:**
- `ColorInfo` `info`

**Returns:** `void`

### boolean isSpeaking()

**Returns:** `boolean`

### Moodles getMoodles()

**Returns:** `Moodles`

### Stats getStats()

**Returns:** `Stats`

### CharacterTraits getCharacterTraits()

**Returns:** `CharacterTraits`

### int getMaxWeight()

**Returns:** `int`

### void PlayAnim(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### void PlayAnimWithSpeed(String string,
float framesSpeedPerFrame)

**Parameters:**
- `String` `string`
- `float` `framesSpeedPerFrame`

**Returns:** `void`

### void PlayAnimUnlooped(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### void StartTimedActionAnim(String event)

**Parameters:**
- `String` `event`

**Returns:** `void`

### void StartTimedActionAnim(String event,
String type)

**Parameters:**
- `String` `event`
- `String` `type`

**Returns:** `void`

### void StopTimedActionAnim()

**Returns:** `void`

### float getAnimationTimeDelta()

**Returns:** `float`

### Stack<BaseAction> getCharacterActions()

**Returns:** `Stack<BaseAction>`

### void StartAction(BaseAction act)

**Parameters:**
- `BaseAction` `act`

**Returns:** `void`

### void StopAllActionQueue()

**Returns:** `void`

### int getPerkLevel(PerkFactory.Perk perks)

**Parameters:**
- `PerkFactory.Perk` `perks`

**Returns:** `int`

### IsoGameCharacter.PerkInfo getPerkInfo(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `IsoGameCharacter.PerkInfo`

### void setPerkLevelDebug(PerkFactory.Perk perks,
int level)

**Parameters:**
- `PerkFactory.Perk` `perks`
- `int` `level`

**Returns:** `void`

### void LoseLevel(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `void`

### void LevelPerk(PerkFactory.Perk perk,
boolean removePick)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `boolean` `removePick`

**Returns:** `void`

### void LevelPerk(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `void`

### void ReadLiterature(Literature literature)

**Parameters:**
- `Literature` `literature`

**Returns:** `void`

### void Callout()

**Returns:** `void`

### boolean IsSpeaking()

**Returns:** `boolean`

### void Say(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### void Say(String line,
float r,
float g,
float b,
UIFont font,
float baseRange,
String customTag)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `UIFont` `font`
- `float` `baseRange`
- `String` `customTag`

**Returns:** `void`

### void setHaloNote(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### void setHaloNote(String str,
float dispTime)

**Parameters:**
- `String` `str`
- `float` `dispTime`

**Returns:** `void`

### void setHaloNote(String str,
int r,
int g,
int b,
float dispTime)

**Parameters:**
- `String` `str`
- `int` `r`
- `int` `g`
- `int` `b`
- `float` `dispTime`

**Returns:** `void`

### void initSpritePartsEmpty()

**Returns:** `void`

### boolean hasTrait(CharacterTrait var1)

**Parameters:**
- `CharacterTrait` `var1`

**Returns:** `boolean`

### void pathToLocation(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### void pathToLocationF(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### boolean isEnduranceSufficientForAction()

**Returns:** `boolean`

### void smashCarWindow(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### void smashWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### void openWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### void closeWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### void climbThroughWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### void climbThroughWindow(IsoWindow w,
Integer startingFrame)

**Parameters:**
- `IsoWindow` `w`
- `Integer` `startingFrame`

**Returns:** `void`

### void climbThroughWindowFrame(IsoWindowFrame arg0)

**Parameters:**
- `IsoWindowFrame` `arg0`

**Returns:** `void`

### void climbSheetRope()

**Returns:** `void`

### void climbDownSheetRope()

**Returns:** `void`

### boolean canClimbSheetRope(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### boolean canClimbDownSheetRopeInCurrentSquare()

**Returns:** `boolean`

### boolean canClimbDownSheetRope(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### void climbThroughWindow(IsoThumpable w)

**Parameters:**
- `IsoThumpable` `w`

**Returns:** `void`

### void climbThroughWindow(IsoThumpable w,
Integer startingFrame)

**Parameters:**
- `IsoThumpable` `w`
- `Integer` `startingFrame`

**Returns:** `void`

### void climbOverFence(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### boolean isAboveTopOfStairs()

**Returns:** `boolean`

### double getHoursSurvived()

**Returns:** `double`

### boolean isOutside()

**Returns:** `boolean`

### boolean isFemale()

**Returns:** `boolean`

### void setFemale(boolean isFemale)

**Parameters:**
- `boolean` `isFemale`

**Returns:** `void`

### boolean isZombie()

**Returns:** `boolean`

### boolean isEquipped(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isEquippedClothing(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isAttachedItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### void faceThisObject(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### void facePosition(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### void faceThisObjectAlt(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### int getAlreadyReadPages(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `int`

### void setAlreadyReadPages(String fullType,
int pages)

**Parameters:**
- `String` `fullType`
- `int` `pages`

**Returns:** `void`

### Safety getSafety()

**Returns:** `Safety`

### void setSafety(Safety safety)

**Parameters:**
- `Safety` `safety`

**Returns:** `void`

### float getMeleeDelay()

**Returns:** `float`

### void setMeleeDelay(float delay)

**Parameters:**
- `float` `delay`

**Returns:** `void`

### float getRecoilDelay()

**Returns:** `float`

### void setRecoilDelay(float recoilDelay)

**Parameters:**
- `float` `recoilDelay`

**Returns:** `void`

### int getMaintenanceMod()

**Returns:** `int`

### int getWeaponLevel()

**Returns:** `int`

### int getWeaponLevel(HandWeapon arg0)

**Parameters:**
- `HandWeapon` `arg0`

**Returns:** `int`

### float getHammerSoundMod()

**Returns:** `float`

### float getWeldingSoundMod()

**Returns:** `float`

### boolean isGodMod()

**Returns:** `boolean`

### void setGodMod(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### void setVehicle(BaseVehicle v)

**Parameters:**
- `BaseVehicle` `v`

**Returns:** `void`

### float getInventoryWeight()

**Returns:** `float`

### void modifyTraitXPBoost(CharacterTrait var1,
boolean var2)

**Parameters:**
- `CharacterTrait` `var1`
- `boolean` `var2`

**Returns:** `void`

### void modifyTraitXPBoost(CharacterTraitDefinition var1,
boolean var2)

**Parameters:**
- `CharacterTraitDefinition` `var1`
- `boolean` `var2`

**Returns:** `void`

### List<String> getKnownRecipes()

**Returns:** `List<String>`

### boolean isRecipeKnown(Recipe recipe)

**Parameters:**
- `Recipe` `recipe`

**Returns:** `boolean`

### boolean isRecipeKnown(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### void addKnownMediaLine(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `void`

### void removeKnownMediaLine(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `void`

### void clearKnownMediaLines()

**Returns:** `void`

### boolean isKnownMediaLine(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `boolean`

### long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### long playSoundLocal(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### void stopOrTriggerSound(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `void`

### void addWorldSoundUnlessInvisible(int radius,
int volume,
boolean bStressHumans)

**Parameters:**
- `int` `radius`
- `int` `volume`
- `boolean` `bStressHumans`

**Returns:** `void`

### boolean isKnownPoison(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isKnownPoison(Item arg0)

**Parameters:**
- `Item` `arg0`

**Returns:** `boolean`

### String getBedType()

**Returns:** `String`

### void setBedType(String bedType)

**Parameters:**
- `String` `bedType`

**Returns:** `void`

### Path getPath2()

**Returns:** `Path`

### void setPath2(Path arg0)

**Parameters:**
- `Path` `arg0`

**Returns:** `void`

### PathFindBehavior2 getPathFindBehavior2()

**Returns:** `PathFindBehavior2`

### IsoObject getBed()

**Returns:** `IsoObject`

### void setBed(IsoObject bed)

**Parameters:**
- `IsoObject` `bed`

**Returns:** `void`

### boolean isReading()

**Returns:** `boolean`

### void setReading(boolean isReading)

**Parameters:**
- `boolean` `isReading`

**Returns:** `void`

### float getTimeSinceLastSmoke()

**Returns:** `float`

### void setTimeSinceLastSmoke(float timeSinceLastSmoke)

**Parameters:**
- `float` `timeSinceLastSmoke`

**Returns:** `void`

### boolean isInvisible()

**Returns:** `boolean`

### void setInvisible(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### boolean isDriving()

**Returns:** `boolean`

### boolean isInARoom()

**Returns:** `boolean`

### boolean isUnlimitedCarry()

**Returns:** `boolean`

### void setUnlimitedCarry(boolean unlimitedCarry)

**Parameters:**
- `boolean` `unlimitedCarry`

**Returns:** `void`

### boolean isBuildCheat()

**Returns:** `boolean`

### void setBuildCheat(boolean buildCheat)

**Parameters:**
- `boolean` `buildCheat`

**Returns:** `void`

### boolean isFarmingCheat()

**Returns:** `boolean`

### void setFarmingCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### boolean isFishingCheat()

**Returns:** `boolean`

### void setFishingCheat(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### boolean isHealthCheat()

**Returns:** `boolean`

### void setHealthCheat(boolean healthCheat)

**Parameters:**
- `boolean` `healthCheat`

**Returns:** `void`

### boolean isMechanicsCheat()

**Returns:** `boolean`

### void setMechanicsCheat(boolean mechanicsCheat)

**Parameters:**
- `boolean` `mechanicsCheat`

**Returns:** `void`

### boolean isMovablesCheat()

**Returns:** `boolean`

### void setMovablesCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### boolean isAnimalCheat()

**Returns:** `boolean`

### void setAnimalCheat(boolean var1)

**Parameters:**
- `boolean` `var1`

**Returns:** `void`

### boolean isAnimalExtraValuesCheat()

**Returns:** `boolean`

### void setAnimalExtraValuesCheat(boolean var1)

**Parameters:**
- `boolean` `var1`

**Returns:** `void`

### boolean isTimedActionInstantCheat()

**Returns:** `boolean`

### void setTimedActionInstantCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### boolean isAlwaysDayCheat()

**Returns:** `boolean`

### void setAlwaysDayCheat(boolean var1)

**Parameters:**
- `boolean` `var1`

**Returns:** `void`

### boolean isTimedActionInstant()

**Returns:** `boolean`

### boolean isShowAdminTag()

**Returns:** `boolean`

### void setShowAdminTag(boolean showAdminTag)

**Parameters:**
- `boolean` `showAdminTag`

**Returns:** `void`

### void reportEvent(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### AnimatorDebugMonitor getDebugMonitor()

**Returns:** `AnimatorDebugMonitor`

### void setDebugMonitor(AnimatorDebugMonitor monitor)

**Parameters:**
- `AnimatorDebugMonitor` `monitor`

**Returns:** `void`

### boolean isAiming()

**Returns:** `boolean`

### boolean isTwisting()

**Returns:** `boolean`

### boolean allowsTwist()

**Returns:** `boolean`

### void resetBeardGrowingTime()

**Returns:** `void`

### void resetHairGrowingTime()

**Returns:** `void`

### float getPerkToUnit(PerkFactory.Perk arg0)

**Parameters:**
- `PerkFactory.Perk` `arg0`

**Returns:** `float`

### HashMap<String,Integer> getReadLiterature()

**Returns:** `HashMap<String,Integer>`

### boolean isLiteratureRead(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `boolean`

### void addReadLiterature(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### void addReadLiterature(String arg0,
int arg1)

**Parameters:**
- `String` `arg0`
- `int` `arg1`

**Returns:** `void`

### void addReadPrintMedia(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### boolean isPrintMediaRead(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `boolean`

### HashSet<String> getReadPrintMedia()

**Returns:** `HashSet<String>`

### boolean hasReadMap(InventoryItem var1)

**Parameters:**
- `InventoryItem` `var1`

**Returns:** `boolean`

### void addReadMap(InventoryItem var1)

**Parameters:**
- `InventoryItem` `var1`

**Returns:** `void`

### void triggerContextualAction(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### void triggerContextualAction(String arg0,
Object arg1)

**Parameters:**
- `String` `arg0`
- `Object` `arg1`

**Returns:** `void`

### void triggerContextualAction(String arg0,
Object arg1,
Object arg2)

**Parameters:**
- `String` `arg0`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `void`

### void triggerContextualAction(String arg0,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `String` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `void`

### void triggerContextualAction(String arg0,
Object arg1,
Object arg2,
Object arg3,
Object arg4)

**Parameters:**
- `String` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ILuaGameCharacter.html`*
