---
title: zombie.characters.traits.CharacterTraits
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.traits
---

# zombie.characters.traits.CharacterTraits

`public final class CharacterTraits extends Object`

**Kind:** class · **Package:** zombie.characters.traits

## Inheritance
- java.lang.Object
- zombie.characters.traits.CharacterTraits

## Fields

### public static final int ObeseStrengthPenalty

### public static final int OverweightStrengthPenalty

### public static final int AllThumbsStrengthPenalty

### public static final int DextrousStrengthBonus

### public static final int BurglarStrengthBonus

### public static final int GymnastStrengthBonus

### public static final float ObeseClimbingPenalty

### public static final float OverweightClimbingPenalty

### public static final float ClumsyClimbingPenaltyDivisor

### public static final float AwkwardGlovesClimbingPenaltyDivisor

### public static final float RegularGlovesClimbingBonus

### public static final float PerkClimbingBonusMultiplier

### public static final float EnduranceClimbingPenaltyMultiplier

### public static final float DrunkClimbingPenaltyMultiplier

### public static final float HeavyLoadClimbingPenaltyMultiplier

### public static final float PainClimbingPenaltyMultiplier

### public static final float AllThumbsClimbingPenalty

### public static final float DextrousClimbingBonus

### public static final float BurglarClimbingBonus

### public static final float GymnastClimbingBonus

### public static final float HealthReductionMultiplierModerate

### public static final float HealthReductionMultiplierSevere

### public static final float BASE_DETECTION_RANGE

### public static final float FATIGUE_THRESHOLD

### public static final float FATIGUE_SCALE

### public static final float HARD_OF_HEARING_RANGE_PENALTY

### public static final float DEAF_DETECTION_RANGE

### public static final float KEEN_HEARING_RANGE_BONUS

## Constructors

### public CharacterTraits()

## Methods

### public boolean get(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `boolean`

### public boolean set(CharacterTrait characterTrait,
boolean value)

**Parameters:**
- `CharacterTrait` `characterTrait`
- `boolean` `value`

**Returns:** `boolean`

### public void add(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `void`

### public void remove(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `void`

### public void load(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void write(ByteBufferWriter output)

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void read(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

### public Map<CharacterTrait, Boolean> getTraits()

**Returns:** `Map<CharacterTrait, Boolean>`

### public List<CharacterTrait> getKnownTraits()

**Returns:** `List<CharacterTrait>`

### public float getTraitDamageDealtReductionModifier()

**Returns:** `float`

### public float getTraitEnduranceLossModifier()

**Returns:** `float`

### public float getTraitWeatherPenaltyModifier()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\traits\CharacterTraits.html`*
