---
title: zombie.characters.BodyDamage.BodyPartType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.characters.BodyDamage
---

# zombie.characters.BodyDamage.BodyPartType

`public enum BodyPartType extends Enum<BodyPartType>`

**Kind:** enum · **Package:** zombie.characters.BodyDamage

## Inheritance
- java.lang.Object
- java.lang.Enum<BodyPartType>
- zombie.characters.BodyDamage.BodyPartType

## Fields

### public static final BodyPartType Hand_L

### public static final BodyPartType Hand_R

### public static final BodyPartType ForeArm_L

### public static final BodyPartType ForeArm_R

### public static final BodyPartType UpperArm_L

### public static final BodyPartType UpperArm_R

### public static final BodyPartType Torso_Upper

### public static final BodyPartType Torso_Lower

### public static final BodyPartType Head

### public static final BodyPartType Neck

### public static final BodyPartType Groin

### public static final BodyPartType UpperLeg_L

### public static final BodyPartType UpperLeg_R

### public static final BodyPartType LowerLeg_L

### public static final BodyPartType LowerLeg_R

### public static final BodyPartType Foot_L

### public static final BodyPartType Foot_R

### public static final BodyPartType MAX

## Methods

### public static BodyPartType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `BodyPartType[]`

### public static BodyPartType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `BodyPartType`

### public static BodyPartType FromIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `BodyPartType`

### public int index()

**Returns:** `int`

### public static BodyPartType FromString(String str)

**Parameters:**
- `String` `str`

**Returns:** `BodyPartType`

### public static float getPainModifyer(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public static String getDisplayName(BodyPartType bpt)

**Parameters:**
- `BodyPartType` `bpt`

**Returns:** `String`

### public static int ToIndex(BodyPartType bpt)

**Parameters:**
- `BodyPartType` `bpt`

**Returns:** `int`

### public static String ToString(BodyPartType bpt)

**Parameters:**
- `BodyPartType` `bpt`

**Returns:** `String`

### public static float getDamageModifyer(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public static float getBleedingTimeModifyer(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public static float GetSkinSurface(BodyPartType bodyPartType)

**Parameters:**
- `BodyPartType` `bodyPartType`

**Returns:** `float`

### public static float GetDistToCore(BodyPartType bodyPartType)

**Parameters:**
- `BodyPartType` `bodyPartType`

**Returns:** `float`

### public static float GetUmbrellaMod(BodyPartType bodyPartType)

**Parameters:**
- `BodyPartType` `bodyPartType`

**Returns:** `float`

### public static float GetMaxActionPenalty(BodyPartType bodyPartType)

**Parameters:**
- `BodyPartType` `bodyPartType`

**Returns:** `float`

### public static float GetMaxMovementPenalty(BodyPartType bodyPartType)

**Parameters:**
- `BodyPartType` `bodyPartType`

**Returns:** `float`

### public String getBandageModel()

**Returns:** `String`

### public String getBiteWoundModel(CharacterGender gender)

**Parameters:**
- `CharacterGender` `gender`

**Returns:** `String`

### public String getScratchWoundModel(CharacterGender gender)

**Parameters:**
- `CharacterGender` `gender`

**Returns:** `String`

### public String getCutWoundModel(CharacterGender gender)

**Parameters:**
- `CharacterGender` `gender`

**Returns:** `String`

### public static BodyPartType getRandom()

**Returns:** `BodyPartType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BodyDamage\BodyPartType.html`*
