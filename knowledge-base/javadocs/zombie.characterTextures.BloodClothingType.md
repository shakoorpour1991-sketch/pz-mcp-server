---
title: zombie.characterTextures.BloodClothingType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.characterTextures
---

# zombie.characterTextures.BloodClothingType

`public enum BloodClothingType extends Enum<BloodClothingType>`

**Kind:** enum · **Package:** zombie.characterTextures

## Inheritance
- java.lang.Object
- java.lang.Enum<BloodClothingType>
- zombie.characterTextures.BloodClothingType

## Fields

### public static final BloodClothingType Apron

### public static final BloodClothingType ShirtNoSleeves

### public static final BloodClothingType JumperNoSleeves

### public static final BloodClothingType Shirt

### public static final BloodClothingType ShirtLongSleeves

### public static final BloodClothingType Jumper

### public static final BloodClothingType Jacket

### public static final BloodClothingType LongJacket

### public static final BloodClothingType ShortsShort

### public static final BloodClothingType Trousers

### public static final BloodClothingType Shoes

### public static final BloodClothingType FullHelmet

### public static final BloodClothingType Bag

### public static final BloodClothingType Hands

### public static final BloodClothingType Head

### public static final BloodClothingType Neck

### public static final BloodClothingType Groin

### public static final BloodClothingType UpperBody

### public static final BloodClothingType LowerBody

### public static final BloodClothingType LowerLegs

### public static final BloodClothingType UpperLegs

### public static final BloodClothingType LowerArms

### public static final BloodClothingType UpperArms

### public static final BloodClothingType Hand_L

### public static final BloodClothingType Hand_R

### public static final BloodClothingType ForeArm_L

### public static final BloodClothingType ForeArm_R

### public static final BloodClothingType UpperArm_L

### public static final BloodClothingType UpperArm_R

### public static final BloodClothingType UpperLeg_L

### public static final BloodClothingType UpperLeg_R

### public static final BloodClothingType LowerLeg_L

### public static final BloodClothingType LowerLeg_R

### public static final BloodClothingType Foot_L

### public static final BloodClothingType Foot_R

## Methods

### public static BloodClothingType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `BloodClothingType[]`

### public static BloodClothingType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `BloodClothingType`

### public static @Nullable BloodClothingType fromString(String str)

**Parameters:**
- `String` `str`

**Returns:** `@Nullable BloodClothingType`

### public static ArrayList<BloodBodyPartType> getCoveredParts(@Nullable ArrayList<BloodClothingType> bloodClothingType)

**Parameters:**
- `@Nullable ArrayList<BloodClothingType>` `bloodClothingType`

**Returns:** `ArrayList<BloodBodyPartType>`

### public static ArrayList<BloodBodyPartType> getCoveredParts(@Nullable ArrayList<BloodClothingType> bloodClothingType,
ArrayList<BloodBodyPartType> result)

**Parameters:**
- `@Nullable ArrayList<BloodClothingType>` `bloodClothingType`
- `ArrayList<BloodBodyPartType>` `result`

**Returns:** `ArrayList<BloodBodyPartType>`

### public static int getCoveredPartCount(@Nullable ArrayList<BloodClothingType> bloodClothingType)

**Parameters:**
- `@Nullable ArrayList<BloodClothingType>` `bloodClothingType`

**Returns:** `int`

### public static void addBlood(int count,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals,
boolean allLayers)

**Parameters:**
- `int` `count`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`
- `boolean` `allLayers`

**Returns:** `void`

### public static void addBlood(BloodBodyPartType part,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`
- `boolean` `allLayers`

**Returns:** `void`

### public static void addDirt(BloodBodyPartType part,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`
- `boolean` `allLayers`

**Returns:** `void`

### public static void addHole(BloodBodyPartType part,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals)

**Parameters:**
- `BloodBodyPartType` `part`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`

**Returns:** `void`

### public static boolean addHole(BloodBodyPartType part,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`
- `boolean` `allLayers`

**Returns:** `boolean`

### public static void addBasicPatch(BloodBodyPartType part,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals)

Should be used only for debug, use Clothing.addPatch for gameplay stuff

**Parameters:**
- `BloodBodyPartType` `part`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`

**Returns:** `void`

### public static void addDirt(BloodBodyPartType part,
float intensity,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `float` `intensity`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`
- `boolean` `allLayers`

**Returns:** `void`

### public static void addBlood(BloodBodyPartType part,
float intensity,
HumanVisual humanVisual,
ArrayList<ItemVisual> itemVisuals,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `float` `intensity`
- `HumanVisual` `humanVisual`
- `ArrayList<ItemVisual>` `itemVisuals`
- `boolean` `allLayers`

**Returns:** `void`

### public static void calcTotalBloodLevel(Clothing clothing)

**Parameters:**
- `Clothing` `clothing`

**Returns:** `void`

### public static void calcTotalDirtLevel(Clothing clothing)

**Parameters:**
- `Clothing` `clothing`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characterTextures\BloodClothingType.html`*
