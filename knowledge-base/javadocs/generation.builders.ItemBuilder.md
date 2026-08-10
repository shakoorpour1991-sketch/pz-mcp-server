---
title: generation.builders.ItemBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: generation.builders
---

# generation.builders.ItemBuilder

`public class ItemBuilder<T extends ItemBuilder<T>> extends AbstractScriptTypeBuilder`

**Kind:** class · **Package:** generation.builders

## Inheritance
- java.lang.Object
- generation.builders.AbstractPropertyBuilder
- generation.builders.AbstractDynamicOrderPropertyBuilder
- generation.builders.AbstractScriptTypeBuilder
- generation.builders.ItemBuilder<T>

## Methods

### public static AlarmClockItemBuilder alarmClock(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `AlarmClockItemBuilder`

### public static AlarmClockClothingItemBuilder alarmClockClothing(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `AlarmClockClothingItemBuilder`

### public static AnimalItemBuilder animal(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `AnimalItemBuilder`

### public static ClothingItemBuilder clothing(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `ClothingItemBuilder`

### public static ContainerItemBuilder container(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `ContainerItemBuilder`

### public static DrainableItemBuilder drainable(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `DrainableItemBuilder`

### public static FoodItemBuilder food(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `FoodItemBuilder`

### public static KeyItemBuilder key(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `KeyItemBuilder`

### public static LiteratureItemBuilder literature(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `LiteratureItemBuilder`

### public static MapItemBuilder map(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `MapItemBuilder`

### public static MoveableItemBuilder moveable(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `MoveableItemBuilder`

### public static <T extends ItemBuilder<T>>
ItemBuilder<T> normal(ItemKey itemKey)

**Returns:** `ItemBuilder<T>`

### public static RadioItemBuilder radio(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `RadioItemBuilder`

### public static WeaponItemBuilder weapon(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `WeaponItemBuilder`

### public static WeaponPartItemBuilder weaponPart(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `WeaponPartItemBuilder`

### public T type(Item.Type typex)

**Parameters:**
- `Item.Type` `typex`

**Returns:** `T`

### public T activatedItem(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T addComponent(ComponentBuilder componentBuilder)

**Parameters:**
- `ComponentBuilder` `componentBuilder`

**Returns:** `T`

### public T aimReleaseSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T aimingtime(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T alarmSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T alcoholPower(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T alcoholic(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T alwaysWelcomeGift(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T ammoType(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T animalFeedType(AnimalFeedType animalFeedTypex)

**Parameters:**
- `AnimalFeedType` `animalFeedTypex`

**Returns:** `T`

### public T attachmentReplacement(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T attachmentType(AttachmentType attachmentTypex)

**Parameters:**
- `AttachmentType` `attachmentTypex`

**Returns:** `T`

### public T attachmentsProvided(AttachmentType... attachmentTypes)

**Parameters:**
- `AttachmentType...` `attachmentTypes`

**Returns:** `T`

### public T bandagePower(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T bloodLocation(BloodClothingType... bloodClothingTypes)

**Parameters:**
- `BloodClothingType...` `bloodClothingTypes`

**Returns:** `T`

### public T bodyLocation(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `T`

### public T boredomChange(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T brakeForce(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T breakSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T bringToBearSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T bulletHitArmourSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T calories(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T canBandage(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T canBeEquipped(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `T`

### public T canBeRemote(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T canHaveHoles(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T canStack(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T canStoreWater(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T cannedFood(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T cantBeFrozen(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T cantEat(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T capacity(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T carbohydrates(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T chanceToFall(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T chanceToSpawnDamaged(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T closeKillMove(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T clothingExtraSubmenu(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T clothingItem(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T clothingItemExtra(ItemKey... itemKeys)

**Parameters:**
- `ItemKey...` `itemKeys`

**Returns:** `T`

### public T clothingItemExtraOption(String... strings)

**Parameters:**
- `String...` `strings`

**Returns:** `T`

### public T colorBlue(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T colorGreen(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T colorRed(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T combatSpeedModifier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T conditionAffectsCapacity(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T conditionLowerChanceOneIn(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T conditionLowerOffroad(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T conditionLowerStandard(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T conditionMax(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T consolidateOption(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T containerName(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T cookingSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T corpseSicknessDefense(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T cosmetic(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T count(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T customContextMenu(CustomContextMenu customContextMenux)

**Parameters:**
- `CustomContextMenu` `customContextMenux`

**Returns:** `T`

### public T customDrinkSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T customEatSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T damagedSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T digType(DigType digTypex)

**Parameters:**
- `DigType` `digTypex`

**Returns:** `T`

### public T disappearOnUse(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T discomfortModifier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T displayCategory(ItemDisplayCategory itemDisplayCategory)

**Parameters:**
- `ItemDisplayCategory` `itemDisplayCategory`

**Returns:** `T`

### public T displayName(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T dropSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T eatType(EatType eatTypex)

**Parameters:**
- `EatType` `eatTypex`

**Returns:** `T`

### public T eattime(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T ejectAmmoSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T ejectAmmoStartSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T ejectAmmoStopSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T engineLoudness(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T equipSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T equippedNoSprint(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T evolvedRecipe(EvolvedRecipeHelper... evolvedRecipeHelpers)

**Parameters:**
- `EvolvedRecipeHelper...` `evolvedRecipeHelpers`

**Returns:** `T`

### public T evolvedRecipeName(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T explosionSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T fabricType(ItemFabricType itemFabricType)

**Parameters:**
- `ItemFabricType` `itemFabricType`

**Returns:** `T`

### public T fatigueChange(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T fillFromDispenserSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T fillFromLakeSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T fillFromTapSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T fillFromToiletSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T fireFuelRatio(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T fishingLure(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T fluid(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T foodType(FoodType foodTypex)

**Parameters:**
- `FoodType` `foodTypex`

**Returns:** `T`

### public T gunType(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T headCondition(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T headConditionLowerChanceMultiplier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T headConditionMax(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T hearingModifier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T hidden(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T hungerChange(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T icon(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T iconColorMask(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T iconFluidMask(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T iconsForTexture(String... strings)

**Parameters:**
- `String...` `strings`

**Returns:** `T`

### public T insertAmmoSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T insertAmmoStartSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T insertAmmoStopSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T insulation(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T isCookable(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T isDung(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T isWaterSource(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T itemAfterCleaning(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T itemWhenDry(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T keepOnDeplete(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T lightDistance(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T lightStrength(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T lipids(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T lowLightBonus(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T makeUpType(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T manuallyRemoveSpentRounds(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T maxAmmo(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T maxCapacity(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T maxItemSize(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T mechanicsItem(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T mediaCategory(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T medical(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T metalValue(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T needToBeClosedOnceReload(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T noiseDuration(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T onBreak(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T onCreate(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T openingRecipe(CraftRecipeKey craftRecipeKey)

**Parameters:**
- `CraftRecipeKey` `craftRecipeKey`

**Returns:** `T`

### public T originX(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T originY(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T originZ(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T packaged(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T placeMultipleSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T placeOneSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T pourType(PourType pourTypex)

**Parameters:**
- `PourType` `pourTypex`

**Returns:** `T`

### public T primaryAnimMask(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T protectFromRainWhenEquipped(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T proteins(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T rainFactor(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T readType(ReadType readTypex)

**Parameters:**
- `ReadType` `readTypex`

**Returns:** `T`

### public T reduceInfectionPower(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T remoteController(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T remoteRange(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T removeOnBroken(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T removeUnhappinessWhenCooked(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T replaceInPrimaryHand(String string0,
String string1)

**Parameters:**
- `String` `string0`
- `String` `string1`

**Returns:** `T`

### public T replaceInSecondHand(String string0,
String string1)

**Parameters:**
- `String` `string0`
- `String` `string1`

**Returns:** `T`

### public T replaceOnUse(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T requireInHandOrInventory(ItemKey... itemKeys)

**Parameters:**
- `ItemKey...` `itemKeys`

**Returns:** `T`

### public T requiresEquippedBothHands(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T researchablerecipes(CraftRecipeKey... craftRecipeKeys)

**Parameters:**
- `CraftRecipeKey...` `craftRecipeKeys`

**Returns:** `T`

### public T runSpeedModifier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T scaleWorldIcon(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T secondaryAnimMask(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T sharpness(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T shoutMultiplier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T shoutType(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T soundMap(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public <R extends Enum<R>> T soundParameter(String string,
R _enum)

**Returns:** `T`

### public T soundRadius(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T soundVolume(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T spawnWith(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T spice(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T staticModel(ModelKey modelKey)

**Parameters:**
- `ModelKey` `modelKey`

**Returns:** `T`

### public T staticModelsByIndex(ModelKey... modelKeys)

**Parameters:**
- `ModelKey...` `modelKeys`

**Returns:** `T`

### public T stopPower(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T stressChange(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T survivalGear(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T suspensionCompression(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T suspensionDamping(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T swingAnim(SwingAnim swingAnimx)

**Parameters:**
- `SwingAnim` `swingAnimx`

**Returns:** `T`

### public T tags(ItemTag... itemTags)

**Parameters:**
- `ItemTag...` `itemTags`

**Returns:** `T`

### public T teachedrecipes(Object... objects)

**Parameters:**
- `Object...` `objects`

**Returns:** `T`

### public T tooltip(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T torchCone(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T torchDot(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T trap(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T twoHandWeapon(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T unequipSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T unhappyChange(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T useWhileEquipped(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T useWorldItem(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T vehicleType(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T vehiclePartModel(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T visionModifier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T visualAid(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T weaponHitArmourSound(SoundKey soundKey)

**Parameters:**
- `SoundKey` `soundKey`

**Returns:** `T`

### public T weight(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T weightEmpty(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T weightModifier(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T weightReduction(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `T`

### public T wet(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T wetCooldown(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T wheelFriction(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T windResistance(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `T`

### public T withDrainable(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T withoutDrainable(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `T`

### public T worldObjectSprite(String string)

**Parameters:**
- `String` `string`

**Returns:** `T`

### public T worldRender(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `T`

### public T worldStaticModel(ModelKey modelKey)

**Parameters:**
- `ModelKey` `modelKey`

**Returns:** `T`

### public T worldStaticModelsByIndex(ModelKey... modelKeys)

**Parameters:**
- `ModelKey...` `modelKeys`

**Returns:** `T`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\ItemBuilder.html`*
