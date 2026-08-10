---
title: zombie.characters.FallingConstants
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.FallingConstants

`public final class FallingConstants extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.FallingConstants

## Fields

### public static final float IsoWorldToPhysicsZScale

### public static final float PhysicsToIsoWorldZScale

### public static final float FallAcceleration

### public static final float IsoFallAcceleration

### public static final float isFallingThreshold

### public static final float noDamageThreshold

### public static final float hardFallThreshold

### public static final float severeFallThreshold

### public static final float lethalFallThreshold

### public static final float zombieLethalFallThreshold

### public static final float fallDamageMultiplier

### public static final float fallDamageInjuryMultiplier

## Constructors

### public FallingConstants()

## Methods

### public static float getIsoImpactSpeedFromHeight(float fallHeight)

**Parameters:**
- `float` `fallHeight`

**Returns:** `float`

### public static boolean isLethalFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isSevereFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isHardFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isMoreThanHardFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isLightFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isMoreThanLightFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static boolean isDamagingFall(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `boolean`

### public static FallSeverity getFallSeverity(float isoFallSpeed)

**Parameters:**
- `float` `isoFallSpeed`

**Returns:** `FallSeverity`

### public static boolean isFallingHeight(float fallHeight)

**Parameters:**
- `float` `fallHeight`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\FallingConstants.html`*
