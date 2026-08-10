---
title: zombie.CombatManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.CombatManager

`public final class CombatManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.CombatManager

## Fields

### public static final int MIN_MULTI_HIT_COUNT

### public final ObjectPool<HitInfo> hitInfoPool

### public static final int StrengthLevelOffset

### public static final float StrengthLevelMuscleStrainModifier

### public static final float TwoHandedWeaponMuscleStrainModifier

## Methods

### public CombatConfig getCombatConfig()

**Returns:** `CombatConfig`

### public static CombatManager getInstance()

**Returns:** `CombatManager`

### public float calculateDamageToVehicle(IsoGameCharacter isoGameCharacter,
float vehicleDurability,
float damage,
int doorDamage)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `vehicleDurability`
- `float` `damage`
- `int` `doorDamage`

**Returns:** `float`

### public HandWeapon getWeapon(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `HandWeapon`

### public void splash(IsoMovingObject obj,
HandWeapon weapon,
IsoGameCharacter owner)

**Parameters:**
- `IsoMovingObject` `obj`
- `HandWeapon` `weapon`
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void processMaintenanceCheck(IsoGameCharacter owner,
HandWeapon weapon,
IsoObject isoObject)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`
- `IsoObject` `isoObject`

**Returns:** `void`

### public void attackCollisionCheck(IsoGameCharacter owner,
HandWeapon weapon,
SwipeStatePlayer swipeStatePlayer,
AttackType attackTypeModifier)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`
- `SwipeStatePlayer` `swipeStatePlayer`
- `AttackType` `attackTypeModifier`

**Returns:** `void`

### public void processWeaponEndurance(IsoGameCharacter isoGameCharacter,
HandWeapon handWeapon)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `HandWeapon` `handWeapon`

**Returns:** `void`

### public void releaseBallisticsTargets(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void applyDamage(IsoGameCharacter isoGameCharacter,
float damageAmount)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `damageAmount`

**Returns:** `void`

### public void applyDamage(BodyPart bodyPart,
float damageAmount)

**Parameters:**
- `BodyPart` `bodyPart`
- `float` `damageAmount`

**Returns:** `void`

### public void calculateAttackVars(IsoLivingCharacter isoLivingCharacter)

**Parameters:**
- `IsoLivingCharacter` `isoLivingCharacter`

**Returns:** `void`

### public void calcValidTargets(IsoLivingCharacter owner,
HandWeapon weapon,
PZArrayList<HitInfo> targetsProne,
PZArrayList<HitInfo> targetsStanding)

**Parameters:**
- `IsoLivingCharacter` `owner`
- `HandWeapon` `weapon`
- `PZArrayList<HitInfo>` `targetsProne`
- `PZArrayList<HitInfo>` `targetsStanding`

**Returns:** `void`

### public boolean isProneTargetBetter(IsoGameCharacter owner,
HitInfo bestStanding,
HitInfo bestProne)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HitInfo` `bestStanding`
- `HitInfo` `bestProne`

**Returns:** `boolean`

### public static boolean checkPVP(IsoMovingObject owner,
IsoMovingObject target,
boolean isMelee)

**Parameters:**
- `IsoMovingObject` `owner`
- `IsoMovingObject` `target`
- `boolean` `isMelee`

**Returns:** `boolean`

### public static IsoPlayer getPVPPlayerFromObject(IsoMovingObject obj)

**Parameters:**
- `IsoMovingObject` `obj`

**Returns:** `IsoPlayer`

### public void calculateHitInfoList(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public static Vector3 getBoneWorldPos(IsoMovingObject target,
String boneName,
Vector3 bonePos)

**Parameters:**
- `IsoMovingObject` `target`
- `String` `boneName`
- `Vector3` `bonePos`

**Returns:** `Vector3`

### public float getDistanceModifierSightless(float dist,
boolean prone)

**Parameters:**
- `float` `dist`
- `boolean` `prone`

**Returns:** `float`

### public float getAimDelayPenaltySightless(float aimDelay,
float dist)

**Parameters:**
- `float` `aimDelay`
- `float` `dist`

**Returns:** `float`

### public float getDistanceModifier(float dist,
float min,
float max,
boolean prone)

**Parameters:**
- `float` `dist`
- `float` `min`
- `float` `max`
- `boolean` `prone`

**Returns:** `float`

### public static float getMovePenalty(IsoGameCharacter character,
float dist)

**Parameters:**
- `IsoGameCharacter` `character`
- `float` `dist`

**Returns:** `float`

### public float getAimDelayPenalty(float delay,
float dist,
float min,
float max)

**Parameters:**
- `float` `delay`
- `float` `dist`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public float getMoodlesPenalty(IsoGameCharacter character,
float distance)

**Parameters:**
- `IsoGameCharacter` `character`
- `float` `distance`

**Returns:** `float`

### public float getWeatherPenalty(IsoGameCharacter character,
HandWeapon weapon,
IsoGridSquare square,
float distance)

**Parameters:**
- `IsoGameCharacter` `character`
- `HandWeapon` `weapon`
- `IsoGridSquare` `square`
- `float` `distance`

**Returns:** `float`

### public float getPainPenalty(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `float`

### public void Reset()

**Returns:** `void`

### public int processHit(HandWeapon weapon,
IsoGameCharacter wielder,
IsoGameCharacter target)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `IsoGameCharacter` `target`

**Returns:** `int`

### public void highlightTarget(IsoGameCharacter isoGameCharacter,
Color color,
float alpha)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `Color` `color`
- `float` `alpha`

**Returns:** `void`

### public void pressedAttack(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public void update(boolean doUpdate)

**Parameters:**
- `boolean` `doUpdate`

**Returns:** `void`

### public void postUpdate(boolean doUpdate)

**Parameters:**
- `boolean` `doUpdate`

**Returns:** `void`

### public void updateReticle(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public boolean hitIsoGridSquare(IsoGridSquare isoGridSquare,
org.joml.Vector3f hitLocation)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`
- `org.joml.Vector3f` `hitLocation`

**Returns:** `boolean`

### public void processInstantExplosion(IsoGameCharacter target,
IsoTrap isoTrap)

**Parameters:**
- `IsoGameCharacter` `target`
- `IsoTrap` `isoTrap`

**Returns:** `void`

### public float applyGlobalDamageReductionMultipliers(HandWeapon handWeapon,
float damage)

**Parameters:**
- `HandWeapon` `handWeapon`
- `float` `damage`

**Returns:** `float`

### public float applyWeaponLevelDamageModifier(IsoGameCharacter isoGameCharacter,
float damage)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `damage`

**Returns:** `float`

### public float applyPlayerReceivedDamageModifier(IsoGameCharacter isoGameCharacter,
float damage)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `damage`

**Returns:** `float`

### public float applyOneHandedDamagePenalty(IsoGameCharacter isoGameCharacter,
HandWeapon weapon,
float damage)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `HandWeapon` `weapon`
- `float` `damage`

**Returns:** `float`

### public void applyMeleeEnduranceLoss(IsoGameCharacter attacker,
IsoGameCharacter target,
HandWeapon handWeapon,
float damage)

**Parameters:**
- `IsoGameCharacter` `attacker`
- `IsoGameCharacter` `target`
- `HandWeapon` `handWeapon`
- `float` `damage`

**Returns:** `void`

### public void resolveSpikedArmorDamage(IsoGameCharacter owner,
HandWeapon weapon,
IsoGameCharacter hitZombie,
int partHit)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`
- `IsoGameCharacter` `hitZombie`
- `int` `partHit`

**Returns:** `void`

### public void setAimingDelay(IsoPlayer isoPlayer,
HandWeapon handWeapon)

**Parameters:**
- `IsoPlayer` `isoPlayer`
- `HandWeapon` `handWeapon`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\CombatManager.html`*
