---
title: zombie.characters.Moodles.MoodleType
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: enum
package: zombie.characters.Moodles
---

# zombie.characters.Moodles.MoodleType

`public enum MoodleType extends Enum<MoodleType>`

**Kind:** enum · **Package:** zombie.characters.Moodles

## Inheritance
- java.lang.Object
- java.lang.Enum<MoodleType>
- zombie.characters.Moodles.MoodleType

## Fields

### public static final MoodleType Endurance

### public static final MoodleType Tired

### public static final MoodleType Hungry

### public static final MoodleType Panic

### public static final MoodleType Sick

### public static final MoodleType Bored

### public static final MoodleType Unhappy

### public static final MoodleType Bleeding

### public static final MoodleType Wet

### public static final MoodleType HasACold

### public static final MoodleType Angry

### public static final MoodleType Stress

### public static final MoodleType Thirst

### public static final MoodleType Injured

### public static final MoodleType Pain

### public static final MoodleType HeavyLoad

### public static final MoodleType Drunk

### public static final MoodleType Dead

### public static final MoodleType Zombie

### public static final MoodleType Hyperthermia

### public static final MoodleType Hypothermia

### public static final MoodleType Windchill

### public static final MoodleType CantSprint

### public static final MoodleType Uncomfortable

### public static final MoodleType NoxiousSmell

### public static final MoodleType FoodEaten

### public static final MoodleType MAX

### public static final int NeutralMoodleType

### public static final int GoodMoodleType

### public static final int BadMoodleType

## Methods

### public static MoodleType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `MoodleType[]`

### public static MoodleType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `MoodleType`

### public static MoodleType FromIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `MoodleType`

### public static MoodleType FromString(String str)

**Parameters:**
- `String` `str`

**Returns:** `MoodleType`

### public static String getDisplayName(MoodleType MT,
int Level)

**Parameters:**
- `MoodleType` `MT`
- `int` `Level`

**Returns:** `String`

### public static String getDescriptionText(MoodleType MT,
int Level)

**Parameters:**
- `MoodleType` `MT`
- `int` `Level`

**Returns:** `String`

### public static int GoodBadNeutral(MoodleType MT)

**Parameters:**
- `MoodleType` `MT`

**Returns:** `int`

### public static int ToIndex(MoodleType MT)

**Parameters:**
- `MoodleType` `MT`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\Moodles\MoodleType.html`*
