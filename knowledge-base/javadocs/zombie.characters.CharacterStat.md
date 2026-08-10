---
title: zombie.characters.CharacterStat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.CharacterStat

`public class CharacterStat extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.CharacterStat

## Fields

### public static final Map<String, CharacterStat> REGISTRY

### public static final CharacterStat ANGER

### public static final CharacterStat BOREDOM

### public static final CharacterStat DISCOMFORT

### public static final CharacterStat ENDURANCE

### public static final CharacterStat FATIGUE

### public static final CharacterStat FITNESS

### public static final CharacterStat FOOD_SICKNESS

### public static final CharacterStat HUNGER

### public static final CharacterStat IDLENESS

### public static final CharacterStat INTOXICATION

### public static final CharacterStat MORALE

### public static final CharacterStat NICOTINE_WITHDRAWAL

### public static final CharacterStat PAIN

### public static final CharacterStat PANIC

### public static final CharacterStat POISON

### public static final CharacterStat SANITY

### public static final CharacterStat SICKNESS

### public static final CharacterStat STRESS

### public static final CharacterStat TEMPERATURE

### public static final CharacterStat THIRST

### public static final CharacterStat UNHAPPINESS

### public static final CharacterStat WETNESS

### public static final CharacterStat ZOMBIE_FEVER

### public static final CharacterStat ZOMBIE_INFECTION

### public static final CharacterStat[] ORDERED_STATS

## Methods

### public static CharacterStat register(String id,
float minimumValue,
float maximumValue,
float defaultValue)

**Parameters:**
- `String` `id`
- `float` `minimumValue`
- `float` `maximumValue`
- `float` `defaultValue`

**Returns:** `CharacterStat`

### public static CharacterStat getById(String id)

**Parameters:**
- `String` `id`

**Returns:** `CharacterStat`

### public String getId()

**Returns:** `String`

### public float getMinimumValue()

**Returns:** `float`

### public float getMaximumValue()

**Returns:** `float`

### public float clamp(float value)

**Parameters:**
- `float` `value`

**Returns:** `float`

### public float getDefaultValue()

**Returns:** `float`

### public boolean isAtMinimum(float value)

**Parameters:**
- `float` `value`

**Returns:** `boolean`

### public boolean isAtMaximum(float value)

**Parameters:**
- `float` `value`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterStat.html`*
