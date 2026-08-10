---
title: zombie.combat.CombatConfigKey
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.combat
---

# zombie.combat.CombatConfigKey

`public enum CombatConfigKey extends Enum<CombatConfigKey>`

**Kind:** enum · **Package:** zombie.combat

## Inheritance
- java.lang.Object
- java.lang.Enum<CombatConfigKey>
- zombie.combat.CombatConfigKey

## Fields

### public static final CombatConfigKey BASE_WEAPON_DAMAGE_MULTIPLIER

### public static final CombatConfigKey WEAPON_LEVEL_DAMAGE_MULTIPLIER_INCREMENT

### public static final CombatConfigKey PLAYER_RECEIVED_DAMAGE_MULTIPLIER

### public static final CombatConfigKey NON_PLAYER_RECEIVED_DAMAGE_MULTIPLIER

### public static final CombatConfigKey HEAD_HIT_DAMAGE_SPLIT_MODIFIER

### public static final CombatConfigKey LEG_HIT_DAMAGE_SPLIT_MODIFIER

### public static final CombatConfigKey ADDITIONAL_CRITICAL_HIT_CHANCE_FROM_BEHIND

### public static final CombatConfigKey ADDITIONAL_CRITICAL_HIT_CHANCE_DEFAULT

### public static final CombatConfigKey RECOIL_DELAY

### public static final CombatConfigKey POINT_BLANK_DISTANCE

### public static final CombatConfigKey LOW_LIGHT_THRESHOLD

### public static final CombatConfigKey LOW_LIGHT_TO_HIT_MAXIMUM_PENALTY

### public static final CombatConfigKey POINT_BLANK_TO_HIT_MAXIMUM_BONUS

### public static final CombatConfigKey POINT_BLANK_DROP_OFF_TO_HIT_PENALTY

### public static final CombatConfigKey POST_SHOT_AIMING_DELAY_RECOIL_MODIFIER

### public static final CombatConfigKey POST_SHOT_AIMING_DELAY_AIMING_MODIFIER

### public static final CombatConfigKey OPTIMAL_RANGE_TO_HIT_MAXIMUM_BONUS

### public static final CombatConfigKey OPTIMAL_RANGE_DROP_OFF_TO_HIT_PENALTY

### public static final CombatConfigKey OPTIMAL_RANGE_DROP_OFF_TO_HIT_PENALTY_INCREMENT

### public static final CombatConfigKey MINIMUM_TO_HIT_CHANCE

### public static final CombatConfigKey MAXIMUM_START_TO_HIT_CHANCE

### public static final CombatConfigKey MAXIMUM_TO_HIT_CHANCE

### public static final CombatConfigKey MOVING_TO_HIT_PENALTY

### public static final CombatConfigKey RUNNING_TO_HIT_PENALTY

### public static final CombatConfigKey SPRINTING_TO_HIT_PENALTY

### public static final CombatConfigKey MARKSMAN_TRAIT_TO_HIT_BONUS

### public static final CombatConfigKey ARM_PAIN_TO_HIT_MODIFIER

### public static final CombatConfigKey PANIC_TO_HIT_BASE_PENALTY

### public static final CombatConfigKey PANIC_TO_HIT_DISTANCE_MODIFIER

### public static final CombatConfigKey STRESS_TO_HIT_BASE_PENALTY

### public static final CombatConfigKey STRESS_TO_HIT_DISTANCE_MODIFIER

### public static final CombatConfigKey TIRED_TO_HIT_BASE_PENALTY

### public static final CombatConfigKey ENDURANCE_TO_HIT_BASE_PENALTY

### public static final CombatConfigKey DRUNK_TO_HIT_BASE_PENALTY

### public static final CombatConfigKey DRUNK_TO_HIT_DISTANCE_MODIFIER

### public static final CombatConfigKey WIND_INTENSITY_TO_HIT_PENALTY

### public static final CombatConfigKey WIND_INTENSITY_TO_HIT_AIMING_MODIFIER

### public static final CombatConfigKey WIND_INTENSITY_TO_HIT_MINIMUM_MARKSMAN_MODIFIER

### public static final CombatConfigKey WIND_INTENSITY_TO_HIT_MAXIMUM_MARKSMAN_MODIFIER

### public static final CombatConfigKey RAIN_INTENSITY_TO_HIT_DISTANCE_MODIFIER

### public static final CombatConfigKey FOG_INTENSITY_DISTANCE_MODIFIER

### public static final CombatConfigKey POINT_BLANK_MAXIMUM_DISTANCE_MODIFIER

### public static final CombatConfigKey SIGHTLESS_TO_HIT_BASE_DISTANCE

### public static final CombatConfigKey SIGHTLESS_TO_HIT_PRONE_MODIFIER

### public static final CombatConfigKey SIGHTLESS_AIM_DELAY_TO_HIT_DISTANCE_MODIFIER

### public static final CombatConfigKey PIERCING_BULLET_DAMAGE_REDUCTION

### public static final CombatConfigKey FIREARM_RECOIL_MUSCLE_STRAIN_MODIFIER

### public static final CombatConfigKey DRIVEBY_DOT_OPTIMAL_ANGLE

### public static final CombatConfigKey DRIVEBY_DOT_MAXIMUM_ANGLE

### public static final CombatConfigKey DRIVEBY_DOT_TO_HIT_MAXIMUM_PENALTY

### public static final CombatConfigKey GLOBAL_MELEE_DAMAGE_REDUCTION_MULTIPLIER

### public static final CombatConfigKey DAMAGE_PENALTY_ONE_HANDED_TWO_HANDED_WEAPON_MULTIPLIER

### public static final CombatConfigKey ENDURANCE_LOSS_TWO_HANDED_PENALTY_DIVISOR

### public static final CombatConfigKey ENDURANCE_LOSS_TWO_HANDED_PENALTY_SCALE

### public static final CombatConfigKey ENDURANCE_LOSS_FLOOR_SHOVE_MULTIPLIER

### public static final CombatConfigKey ENDURANCE_LOSS_CLOSE_KILL_MODIFIER

### public static final CombatConfigKey ENDURANCE_LOSS_BASE_SCALE

### public static final CombatConfigKey ENDURANCE_LOSS_WEIGHT_MODIFIER

### public static final CombatConfigKey ENDURANCE_LOSS_FINAL_MULTIPLIER

### public static final CombatConfigKey BALLISTICS_CONTROLLER_DISTANCE_THRESHOLD

## Methods

### public static CombatConfigKey[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `CombatConfigKey[]`

### public static CombatConfigKey valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `CombatConfigKey`

### public CombatConfigCategory getCategory()

**Returns:** `CombatConfigCategory`

### public float getDefaultValue()

**Returns:** `float`

### public float getMinimum()

**Returns:** `float`

### public float getMaximum()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\combat\CombatConfigKey.html`*
