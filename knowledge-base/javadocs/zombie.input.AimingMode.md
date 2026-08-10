---
title: zombie.input.AimingMode
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.input
---

# zombie.input.AimingMode

`public enum AimingMode extends Enum<AimingMode>`

**Kind:** enum · **Package:** zombie.input

## Inheritance
- java.lang.Object
- java.lang.Enum<AimingMode>
- zombie.input.AimingMode

## Fields

### public static final AimingMode UNARMED

### public static final AimingMode UNARMED_TARGET_FOUND

### public static final AimingMode MELEE

### public static final AimingMode MELEE_TARGET_FOUND

### public static final AimingMode RANGED

### public static final AimingMode RANGED_TARGET_FOUND

### public static final AimingMode RANGED_PRECISE

### public static final AimingMode RANGED_PRECISE_TARGET_FOUND

### public static final AimingMode NOT_AIMING

### public final float lerpRateOutwards

### public final float lerpRateInwards

### public final float minDistanceAmount

### public final boolean fixedAtMinDistance

### public final boolean hasTarget

## Methods

### public static AimingMode[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `AimingMode[]`

### public static AimingMode valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `AimingMode`

### public void lerpAiming(IsoPlayer player,
Vector2 src,
float targetX,
float targetY,
float centerX,
float centerY,
float zoom,
Vector2 out_result)

**Parameters:**
- `IsoPlayer` `player`
- `Vector2` `src`
- `float` `targetX`
- `float` `targetY`
- `float` `centerX`
- `float` `centerY`
- `float` `zoom`
- `Vector2` `out_result`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\AimingMode.html`*
