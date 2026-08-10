---
title: zombie.core.physics.RagdollSettingsManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.RagdollSettingsManager

`public class RagdollSettingsManager extends Object`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.core.physics.RagdollSettingsManager

## Fields

### public static final float DefaultImpulse

### public static final float DefaultImpulseMin

### public static final float DefaultImpulseMax

### public static final float DefaultUpwardImpulse

### public static final float DefaultUpwardImpulseMin

### public static final float DefaultUpwardImpulseMax

### public static final int GlobalChanceID

## Constructors

### public RagdollSettingsManager()

## Methods

### public static RagdollSettingsManager getInstance()

**Returns:** `RagdollSettingsManager`

### public static void setInstance(RagdollSettingsManager ragdollSettingsManager)

**Parameters:**
- `RagdollSettingsManager` `ragdollSettingsManager`

**Returns:** `void`

### public int getSettingsCount()

**Returns:** `int`

### public int getHitReactionSettingsCount()

**Returns:** `int`

### public int getHitReactionLocationsCount()

**Returns:** `int`

### public boolean usePhysicHitReaction(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `boolean`

### public RagdollSettingsManager.RagdollSetting getSetting(int id)

**Parameters:**
- `int` `id`

**Returns:** `RagdollSettingsManager.RagdollSetting`

### public RagdollSettingsManager.HitReactionSetting getHitReactionSetting(int id)

**Parameters:**
- `int` `id`

**Returns:** `RagdollSettingsManager.HitReactionSetting`

### public boolean getEnabledSetting(RagdollBodyPart bodyPart)

**Parameters:**
- `RagdollBodyPart` `bodyPart`

**Returns:** `boolean`

### public float getChanceSetting(RagdollBodyPart bodyPart)

**Parameters:**
- `RagdollBodyPart` `bodyPart`

**Returns:** `float`

### public float getImpulseSetting(RagdollBodyPart bodyPart)

**Parameters:**
- `RagdollBodyPart` `bodyPart`

**Returns:** `float`

### public float getUpImpulseSetting(RagdollBodyPart bodyPart)

**Parameters:**
- `RagdollBodyPart` `bodyPart`

**Returns:** `float`

### public float getGlobalImpulseSetting()

**Returns:** `float`

### public float getGlobalUpImpulseSetting()

**Returns:** `float`

### public RagdollSettingsManager.ForceHitReactionLocation getForceHitReactionLocation(int id)

**Parameters:**
- `int` `id`

**Returns:** `RagdollSettingsManager.ForceHitReactionLocation`

### public float getSandboxHitReactionFrequency()

**Returns:** `float`

### public float getSandboxHitReactionImpulseStrength()

**Returns:** `float`

### public float getSandboxHitReactionUpImpulseStrength()

**Returns:** `float`

### public void resetToDefaults()

**Returns:** `void`

### public boolean isForcedHitReaction()

**Returns:** `boolean`

### public RagdollSettingsManager.ForceHitReactionLocation getForceHitReactionLocation()

**Returns:** `RagdollSettingsManager.ForceHitReactionLocation`

### public String getForcedHitReactionLocationAsShotLocation()

**Returns:** `String`

### public void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\RagdollSettingsManager.html`*
