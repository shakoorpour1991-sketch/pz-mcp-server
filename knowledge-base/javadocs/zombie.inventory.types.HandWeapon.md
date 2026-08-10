---
title: zombie.inventory.types.HandWeapon
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.HandWeapon

`public final class HandWeapon extends InventoryItem implements IUpdater`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.HandWeapon

## Fields

### public static final int MAX_ATTACHMENT_COUNT

### public float weaponLength

### public float splatSize

### public boolean isAimedFirearm

### public boolean isAimedHandWeapon

### public String runAnim

### public String idleAnim

### public float hitAngleMod

### public WeaponPart activeSight

## Constructors

### public HandWeapon(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

### public HandWeapon(String module,
String name,
String itemType,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `Item` `item`

## Methods

### public String getCategory()

**Returns:** `String`

### public boolean IsWeapon()

**Returns:** `boolean`

### public float getSplatSize()

**Returns:** `float`

### public float getScore(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `float`

### public float getActualWeight()

**Returns:** `float`

### public float getWeight()

**Returns:** `float`

### public float getEffectiveWeight()

**Returns:** `float`

### public float getContentsWeight()

**Returns:** `float`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public float getDamageMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public float getRangeMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public float getFatigueMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public float getKnockbackMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public float getSpeedMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public float getToHitMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public PerkFactory.Perk getPerk()

**Returns:** `PerkFactory.Perk`

### public float muscleStrainMod(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public int getWeaponSkill(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public boolean isAngleFalloff()

**Returns:** `boolean`

### public void setAngleFalloff(boolean angleFalloff)

**Parameters:**
- `boolean` `angleFalloff` — the angleFalloff to set

**Returns:** `void`

### public boolean isCanBarracade()

**Returns:** `boolean`

### public void setCanBarracade(boolean bCanBarracade)

**Parameters:**
- `boolean` `bCanBarracade` — the bCanBarracade to set

**Returns:** `void`

### public float getDoSwingBeforeImpact()

**Returns:** `float`

### public void setDoSwingBeforeImpact(float doSwingBeforeImpact)

**Parameters:**
- `float` `doSwingBeforeImpact` — the doSwingBeforeImpact to set

**Returns:** `void`

### public String getImpactSound()

**Returns:** `String`

### public void setImpactSound(String impactSound)

**Parameters:**
- `String` `impactSound` — the impactSound to set

**Returns:** `void`

### public boolean isKnockBackOnNoDeath()

**Returns:** `boolean`

### public void setKnockBackOnNoDeath(boolean knockBackOnNoDeath)

**Parameters:**
- `boolean` `knockBackOnNoDeath` — the knockBackOnNoDeath to set

**Returns:** `void`

### public float getMaxAngle()

**Returns:** `float`

### public void setMaxAngle(float maxAngle)

**Parameters:**
- `float` `maxAngle` — the maxAngle to set

**Returns:** `void`

### public float getMaxDamage()

**Returns:** `float`

### public void setMaxDamage(float maxDamage)

**Parameters:**
- `float` `maxDamage` — the maxDamage to set

**Returns:** `void`

### public int getMaxHitCount()

**Returns:** `int`

### public void setMaxHitCount(int maxHitCount)

**Parameters:**
- `int` `maxHitCount` — the maxHitCount to set

**Returns:** `void`

### public float getMaxRange()

**Returns:** `float`

### public float getMaxRange(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `float`

### public void setMaxRange(float maxRange)

**Parameters:**
- `float` `maxRange` — the maxRange to set

**Returns:** `void`

### public boolean isRanged()

**Returns:** `boolean`

### public void setRanged(boolean ranged)

**Parameters:**
- `boolean` `ranged` — the ranged to set

**Returns:** `void`

### public float getMinAngle()

**Returns:** `float`

### public void setMinAngle(float minAngle)

**Parameters:**
- `float` `minAngle` — the minAngle to set

**Returns:** `void`

### public float getMinDamage()

**Returns:** `float`

### public void setMinDamage(float minDamage)

**Parameters:**
- `float` `minDamage` — the minDamage to set

**Returns:** `void`

### public float getMinimumSwingTime()

**Returns:** `float`

### public void setMinimumSwingTime(float minimumSwingTime)

**Parameters:**
- `float` `minimumSwingTime` — the minimumSwingTime to set

**Returns:** `void`

### public float getMinRange()

**Returns:** `float`

### public void setMinRange(float minRange)

**Parameters:**
- `float` `minRange` — the minRange to set

**Returns:** `void`

### public float getNoiseFactor()

**Returns:** `float`

### public void setNoiseFactor(float noiseFactor)

**Parameters:**
- `float` `noiseFactor` — the noiseFactor to set

**Returns:** `void`

### public ItemTag getOtherHandRequire()

**Returns:** `ItemTag`

### public void setOtherHandRequire(ItemTag otherHandRequire)

**Parameters:**
- `ItemTag` `otherHandRequire`

**Returns:** `void`

### public boolean isOtherHandUse()

**Returns:** `boolean`

### public void setOtherHandUse(boolean otherHandUse)

**Parameters:**
- `boolean` `otherHandUse` — the otherHandUse to set

**Returns:** `void`

### public String getPhysicsObject()

**Returns:** `String`

### public void setPhysicsObject(String physicsObject)

**Parameters:**
- `String` `physicsObject` — the physicsObject to set

**Returns:** `void`

### public float getPushBackMod()

**Returns:** `float`

### public void setPushBackMod(float pushBackMod)

**Parameters:**
- `float` `pushBackMod` — the pushBackMod to set

**Returns:** `void`

### public boolean isRangeFalloff()

**Returns:** `boolean`

### public void setRangeFalloff(boolean rangeFalloff)

**Parameters:**
- `boolean` `rangeFalloff` — the rangeFalloff to set

**Returns:** `void`

### public int getSoundRadius()

**Returns:** `int`

### public void setSoundRadius(int soundRadius)

**Parameters:**
- `int` `soundRadius` — the soundRadius to set

**Returns:** `void`

### public int getSoundVolume()

**Returns:** `int`

### public void setSoundVolume(int soundVolume)

**Parameters:**
- `int` `soundVolume` — the soundVolume to set

**Returns:** `void`

### public boolean isSplatBloodOnNoDeath()

**Returns:** `boolean`

### public void setSplatBloodOnNoDeath(boolean splatBloodOnNoDeath)

**Parameters:**
- `boolean` `splatBloodOnNoDeath` — the splatBloodOnNoDeath to set

**Returns:** `void`

### public int getSplatNumber()

**Returns:** `int`

### public void setSplatNumber(int splatNumber)

**Parameters:**
- `int` `splatNumber` — the splatNumber to set

**Returns:** `void`

### public String getSwingSound()

**Returns:** `String`

### public void setSwingSound(String swingSound)

**Parameters:**
- `String` `swingSound` — the swingSound to set

**Returns:** `void`

### public float getSwingTime()

**Returns:** `float`

### public void setSwingTime(float swingTime)

**Parameters:**
- `float` `swingTime` — the swingTime to set

**Returns:** `void`

### public float getToHitModifier()

**Returns:** `float`

### public void setToHitModifier(float toHitModifier)

**Parameters:**
- `float` `toHitModifier` — the toHitModifier to set

**Returns:** `void`

### public boolean isUseEndurance()

**Returns:** `boolean`

### public void setUseEndurance(boolean useEndurance)

**Parameters:**
- `boolean` `useEndurance` — the useEndurance to set

**Returns:** `void`

### public boolean isUseSelf()

**Returns:** `boolean`

### public void setUseSelf(boolean useSelf)

**Parameters:**
- `boolean` `useSelf` — the useSelf to set

**Returns:** `void`

### public String getWeaponSprite()

**Returns:** `String`

### public void setWeaponSprite(String weaponSprite)

**Parameters:**
- `String` `weaponSprite` — the weaponSprite to set

**Returns:** `void`

### public float getOtherBoost()

**Returns:** `float`

### public void setOtherBoost(float otherBoost)

**Parameters:**
- `float` `otherBoost` — the otherBoost to set

**Returns:** `void`

### public int getDoorDamage()

**Returns:** `int`

### public void setDoorDamage(int doorDamage)

**Parameters:**
- `int` `doorDamage` — the DoorDamage to set

**Returns:** `void`

### public String getDoorHitSound()

**Returns:** `String`

### public void setDoorHitSound(String doorHitSound)

**Parameters:**
- `String` `doorHitSound` — the doorHitSound to set

**Returns:** `void`

### public int getConditionLowerChance()

**Returns:** `int`

### public void setConditionLowerChance(int conditionLowerChance)

**Parameters:**
- `int` `conditionLowerChance` — the ConditionLowerChance to set

**Returns:** `void`

### public boolean isMultipleHitConditionAffected()

**Returns:** `boolean`

### public void setMultipleHitConditionAffected(boolean multipleHitConditionAffected)

**Parameters:**
- `boolean` `multipleHitConditionAffected` — the MultipleHitConditionAffected to set

**Returns:** `void`

### public boolean isShareEndurance()

**Returns:** `boolean`

### public void setShareEndurance(boolean shareEndurance)

**Parameters:**
- `boolean` `shareEndurance` — the shareEndurance to set

**Returns:** `void`

### public boolean isAlwaysKnockdown()

**Returns:** `boolean`

### public void setAlwaysKnockdown(boolean alwaysKnockdown)

**Parameters:**
- `boolean` `alwaysKnockdown` — the AlwaysKnockdown to set

**Returns:** `void`

### public float getEnduranceMod()

**Returns:** `float`

### public void setEnduranceMod(float enduranceMod)

**Parameters:**
- `float` `enduranceMod` — the EnduranceMod to set

**Returns:** `void`

### public float getKnockdownMod()

**Returns:** `float`

### public void setKnockdownMod(float knockdownMod)

**Parameters:**
- `float` `knockdownMod` — the KnockdownMod to set

**Returns:** `void`

### public boolean isCantAttackWithLowestEndurance()

**Returns:** `boolean`

### public void setCantAttackWithLowestEndurance(boolean cantAttackWithLowestEndurance)

**Parameters:**
- `boolean` `cantAttackWithLowestEndurance` — the CantAttackWithLowestEndurance to set

**Returns:** `void`

### public boolean isAimedFirearm()

**Returns:** `boolean`

### public static boolean isAimedFirearm(HandWeapon handWeapon)

**Parameters:**
- `HandWeapon` `handWeapon`

**Returns:** `boolean`

### public boolean isAimedHandWeapon()

**Returns:** `boolean`

### public int getProjectileCount()

**Returns:** `int`

### public void setProjectileCount(int count)

**Parameters:**
- `int` `count`

**Returns:** `void`

### public float getProjectileSpread()

**Returns:** `float`

### public void setProjectileSpread(float projectileSpread)

**Parameters:**
- `float` `projectileSpread`

**Returns:** `void`

### public float getProjectileWeightCenter()

**Returns:** `float`

### public void setProjectileWeightCenter(float projectileWeightCenter)

**Parameters:**
- `float` `projectileWeightCenter`

**Returns:** `void`

### public void setMuzzleFlashModelKey(ModelKey muzzleFlashModelKey)

**Parameters:**
- `ModelKey` `muzzleFlashModelKey`

**Returns:** `void`

### public ModelKey getMuzzleFlashModelKey()

**Returns:** `ModelKey`

### public float getAimingMod()

**Returns:** `float`

### public boolean isAimed()

**Returns:** `boolean`

### public void setCriticalChance(float criticalChance)

**Parameters:**
- `float` `criticalChance`

**Returns:** `void`

### public float getCriticalChance()

**Returns:** `float`

### public void setSubCategory(String subcategory)

**Parameters:**
- `String` `subcategory`

**Returns:** `void`

### public String getSubCategory()

**Returns:** `String`

### public void setZombieHitSound(String hitSound)

**Parameters:**
- `String` `hitSound`

**Returns:** `void`

### public String getZombieHitSound()

**Returns:** `String`

### public boolean isOfWeaponCategory(WeaponCategory weaponCategory)

**Parameters:**
- `WeaponCategory` `weaponCategory`

**Returns:** `boolean`

### public void setWeaponCategories(Set<WeaponCategory> weaponCategories)

**Parameters:**
- `Set<WeaponCategory>` `weaponCategories`

**Returns:** `void`

### public int getAimingPerkCritModifier()

**Returns:** `int`

### public void setAimingPerkCritModifier(int aimingPerkCritModifier)

**Parameters:**
- `int` `aimingPerkCritModifier`

**Returns:** `void`

### public float getAimingPerkRangeModifier()

**Returns:** `float`

### public void setAimingPerkRangeModifier(float aimingPerkRangeModifier)

**Parameters:**
- `float` `aimingPerkRangeModifier`

**Returns:** `void`

### public int getHitChance()

**Returns:** `int`

### public void setHitChance(int hitChance)

**Parameters:**
- `int` `hitChance`

**Returns:** `void`

### public float getAimingPerkHitChanceModifier()

**Returns:** `float`

### public void setAimingPerkHitChanceModifier(float aimingPerkHitChanceModifier)

**Parameters:**
- `float` `aimingPerkHitChanceModifier`

**Returns:** `void`

### public float getAimingPerkMinAngleModifier()

**Returns:** `float`

### public void setAimingPerkMinAngleModifier(float aimingPerkMinAngleModifier)

**Parameters:**
- `float` `aimingPerkMinAngleModifier`

**Returns:** `void`

### public int getRecoilDelay()

**Returns:** `int`

### public int getRecoilDelay(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `int`

### public void setRecoilDelay(int recoilDelay)

**Parameters:**
- `int` `recoilDelay`

**Returns:** `void`

### public boolean isPiercingBullets()

**Returns:** `boolean`

### public void setPiercingBullets(boolean piercingBullets)

**Parameters:**
- `boolean` `piercingBullets`

**Returns:** `void`

### public float getSoundGain()

**Returns:** `float`

### public void setSoundGain(float soundGain)

**Parameters:**
- `float` `soundGain`

**Returns:** `void`

### public int getClipSize()

**Returns:** `int`

### public void setClipSize(int capacity)

**Parameters:**
- `int` `capacity`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public WeaponPart getActiveLight()

**Returns:** `WeaponPart`

### public void setActiveLight(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `void`

### public WeaponPart getActiveSight()

**Returns:** `WeaponPart`

### public void setActiveSight(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `void`

### public void setMinSightRange(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public float getMinSightRange()

**Returns:** `float`

### public float getMinSightRange(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `float`

### public void setMaxSightRange(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public float getMaxSightRange()

**Returns:** `float`

### public float getMaxSightRange(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `float`

### public float getLowLightBonus()

**Returns:** `float`

### public float getMinRangeRanged()

**Returns:** `float`

### public void setMinRangeRanged(float minRangeRanged)

**Parameters:**
- `float` `minRangeRanged`

**Returns:** `void`

### public int getReloadTime()

**Returns:** `int`

### public void setReloadTime(int reloadTime)

**Parameters:**
- `int` `reloadTime`

**Returns:** `void`

### public int getAimingTime()

**Returns:** `int`

### public void setAimingTime(int aimingTime)

**Parameters:**
- `int` `aimingTime`

**Returns:** `void`

### public int getTreeDamage()

**Returns:** `int`

### public void setTreeDamage(int treeDamage)

**Parameters:**
- `int` `treeDamage`

**Returns:** `void`

### public String getBulletOutSound()

**Returns:** `String`

### public void setBulletOutSound(String bulletOutSound)

**Parameters:**
- `String` `bulletOutSound`

**Returns:** `void`

### public String getShellFallSound()

**Returns:** `String`

### public void setShellFallSound(String shellFallSound)

**Parameters:**
- `String` `shellFallSound`

**Returns:** `void`

### public List<WeaponPart> getAllWeaponParts()

**Returns:** `List<WeaponPart>`

### public List<WeaponPart> getAllWeaponParts(List<WeaponPart> result)

**Parameters:**
- `List<WeaponPart>` `result`

**Returns:** `List<WeaponPart>`

### public List<WeaponPart> getDetachableWeaponParts(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `List<WeaponPart>`

### public void clearAllWeaponParts()

**Returns:** `void`

### public void clearWeaponPart(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `void`

### public void clearWeaponPart(String partType)

**Parameters:**
- `String` `partType`

**Returns:** `void`

### public void setWeaponPart(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `void`

### public void setWeaponPart(String partType,
WeaponPart part)

**Parameters:**
- `String` `partType`
- `WeaponPart` `part`

**Returns:** `void`

### public WeaponPart getWeaponPart(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `WeaponPart`

### public WeaponPart getWeaponPart(String location)

**Parameters:**
- `String` `location`

**Returns:** `WeaponPart`

### public float getWeaponPartWeightModifier(String type)

**Parameters:**
- `String` `type`

**Returns:** `float`

### public float getWeaponPartWeightModifier(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `float`

### public void attachWeaponPart(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `void`

### public void attachWeaponPart(WeaponPart part,
boolean doChange)

**Parameters:**
- `WeaponPart` `part`
- `boolean` `doChange`

**Returns:** `void`

### public void attachWeaponPart(IsoGameCharacter character,
WeaponPart part)

**Parameters:**
- `IsoGameCharacter` `character`
- `WeaponPart` `part`

**Returns:** `void`

### public void attachWeaponPart(IsoGameCharacter character,
WeaponPart part,
boolean doChange)

**Parameters:**
- `IsoGameCharacter` `character`
- `WeaponPart` `part`
- `boolean` `doChange`

**Returns:** `void`

### public void detachAllWeaponParts()

**Returns:** `void`

### public void detachWeaponPart(WeaponPart part)

**Parameters:**
- `WeaponPart` `part`

**Returns:** `void`

### public void detachWeaponPart(String location)

**Parameters:**
- `String` `location`

**Returns:** `void`

### public void detachWeaponPart(IsoGameCharacter character,
WeaponPart part)

**Parameters:**
- `IsoGameCharacter` `character`
- `WeaponPart` `part`

**Returns:** `void`

### public void detachWeaponPart(IsoGameCharacter character,
WeaponPart part,
boolean doChange)

**Parameters:**
- `IsoGameCharacter` `character`
- `WeaponPart` `part`
- `boolean` `doChange`

**Returns:** `void`

### public int getTriggerExplosionTimer()

**Returns:** `int`

### public void setTriggerExplosionTimer(int triggerExplosionTimer)

**Parameters:**
- `int` `triggerExplosionTimer`

**Returns:** `void`

### public boolean canBePlaced()

**Returns:** `boolean`

### public void setCanBePlaced(boolean canBePlaced)

**Parameters:**
- `boolean` `canBePlaced`

**Returns:** `void`

### public int getExplosionRange()

**Returns:** `int`

### public void setExplosionRange(int explosionRange)

**Parameters:**
- `int` `explosionRange`

**Returns:** `void`

### public int getExplosionPower()

**Returns:** `int`

### public void setExplosionPower(int explosionPower)

**Parameters:**
- `int` `explosionPower`

**Returns:** `void`

### public int getFireRange()

**Returns:** `int`

### public void setFireRange(int fireRange)

**Parameters:**
- `int` `fireRange`

**Returns:** `void`

### public int getSmokeRange()

**Returns:** `int`

### public void setSmokeRange(int smokeRange)

**Parameters:**
- `int` `smokeRange`

**Returns:** `void`

### public int getFireStartingEnergy()

**Returns:** `int`

### public void setFireStartingEnergy(int fireStartingEnergy)

**Parameters:**
- `int` `fireStartingEnergy`

**Returns:** `void`

### public int getFireStartingChance()

**Returns:** `int`

### public void setFireStartingChance(int fireStartingChance)

**Parameters:**
- `int` `fireStartingChance`

**Returns:** `void`

### public int getNoiseRange()

**Returns:** `int`

### public void setNoiseRange(int noiseRange)

**Parameters:**
- `int` `noiseRange`

**Returns:** `void`

### public int getNoiseDuration()

**Returns:** `int`

### public float getExtraDamage()

**Returns:** `float`

### public void setExtraDamage(float extraDamage)

**Parameters:**
- `float` `extraDamage`

**Returns:** `void`

### public int getExplosionTimer()

**Returns:** `int`

### public void setExplosionTimer(int explosionTimer)

**Parameters:**
- `int` `explosionTimer`

**Returns:** `void`

### public int getExplosionDuration()

**Returns:** `int`

### public void setExplosionDuration(int seconds)

**Parameters:**
- `int` `seconds`

**Returns:** `void`

### public String getPlacedSprite()

**Returns:** `String`

### public void setPlacedSprite(String placedSprite)

**Parameters:**
- `String` `placedSprite`

**Returns:** `void`

### public boolean canBeReused()

**Returns:** `boolean`

### public void setCanBeReused(boolean canBeReused)

**Parameters:**
- `boolean` `canBeReused`

**Returns:** `void`

### public int getSensorRange()

**Returns:** `int`

### public void setSensorRange(int sensorRange)

**Parameters:**
- `int` `sensorRange`

**Returns:** `void`

### public String getRunAnim()

**Returns:** `String`

### public float getCriticalDamageMultiplier()

**Returns:** `float`

### public void setCriticalDamageMultiplier(float criticalDamageMultiplier)

**Parameters:**
- `float` `criticalDamageMultiplier`

**Returns:** `void`

### public String getStaticModel()

**Returns:** `String`

### public String getStaticModelException()

**Returns:** `String`

### public float getBaseSpeed()

**Returns:** `float`

### public void setBaseSpeed(float baseSpeed)

**Parameters:**
- `float` `baseSpeed`

**Returns:** `void`

### public float getBloodLevel()

**Returns:** `float`

### public void setBloodLevel(float level)

**Parameters:**
- `float` `level`

**Returns:** `void`

### public void setWeaponLength(float weaponLength)

**Parameters:**
- `float` `weaponLength`

**Returns:** `void`

### public String getAmmoBox()

**Returns:** `String`

### public void setAmmoBox(String ammoBox)

**Parameters:**
- `String` `ammoBox`

**Returns:** `void`

### public String getMagazineType()

**Returns:** `String`

### public void setMagazineType(String magazineType)

**Parameters:**
- `String` `magazineType`

**Returns:** `void`

### public String getEjectAmmoStartSound()

**Returns:** `String`

### public String getEjectAmmoSound()

**Returns:** `String`

### public String getEjectAmmoStopSound()

**Returns:** `String`

### public String getInsertAmmoStartSound()

**Returns:** `String`

### public String getInsertAmmoSound()

**Returns:** `String`

### public String getInsertAmmoStopSound()

**Returns:** `String`

### public String getRackSound()

**Returns:** `String`

### public void setRackSound(String rackSound)

**Parameters:**
- `String` `rackSound`

**Returns:** `void`

### public boolean isReloadable(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

### public boolean isContainsClip()

**Returns:** `boolean`

### public void setContainsClip(boolean containsClip)

**Parameters:**
- `boolean` `containsClip`

**Returns:** `void`

### public InventoryItem getBestMagazine(IsoGameCharacter owner)

Get the magazine with the most bullets in it

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `InventoryItem`

### public WeaponReloadType getWeaponReloadType()

**Returns:** `WeaponReloadType`

### public void setWeaponReloadType(WeaponReloadType weaponReloadType)

**Parameters:**
- `WeaponReloadType` `weaponReloadType`

**Returns:** `void`

### public boolean isRackAfterShoot()

**Returns:** `boolean`

### public void setRackAfterShoot(boolean rackAfterShoot)

**Parameters:**
- `boolean` `rackAfterShoot`

**Returns:** `void`

### public boolean isRoundChambered()

**Returns:** `boolean`

### public void setRoundChambered(boolean roundChambered)

**Parameters:**
- `boolean` `roundChambered`

**Returns:** `void`

### public boolean isSpentRoundChambered()

**Returns:** `boolean`

### public void setSpentRoundChambered(boolean roundChambered)

**Parameters:**
- `boolean` `roundChambered`

**Returns:** `void`

### public int getSpentRoundCount()

**Returns:** `int`

### public void setSpentRoundCount(int count)

**Parameters:**
- `int` `count`

**Returns:** `void`

### public boolean isManuallyRemoveSpentRounds()

**Returns:** `boolean`

### public int getAmmoPerShoot()

**Returns:** `int`

### public void setAmmoPerShoot(int ammoPerShoot)

**Parameters:**
- `int` `ammoPerShoot`

**Returns:** `void`

### public float getJamGunChance()

**Returns:** `float`

### public void setJamGunChance(float jamGunChance)

**Parameters:**
- `float` `jamGunChance`

**Returns:** `void`

### public boolean isJammed()

**Returns:** `boolean`

### public void setJammed(boolean isJammed)

**Parameters:**
- `boolean` `isJammed`

**Returns:** `void`

### public boolean checkJam(IsoPlayer player,
boolean racking)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `racking`

**Returns:** `boolean`

### public boolean checkUnJam(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public String getClickSound()

**Returns:** `String`

### public void setClickSound(String clickSound)

**Parameters:**
- `String` `clickSound`

**Returns:** `void`

### public ArrayList<ModelWeaponPart> getModelWeaponPart()

**Returns:** `ArrayList<ModelWeaponPart>`

### public void setModelWeaponPart(ArrayList<ModelWeaponPart> modelWeaponPart)

**Parameters:**
- `ArrayList<ModelWeaponPart>` `modelWeaponPart`

**Returns:** `void`

### public String getOriginalWeaponSprite()

**Returns:** `String`

### public void setOriginalWeaponSprite(String originalWeaponSprite)

**Parameters:**
- `String` `originalWeaponSprite`

**Returns:** `void`

### public boolean haveChamber()

**Returns:** `boolean`

### public void setHaveChamber(boolean haveChamber)

**Parameters:**
- `boolean` `haveChamber`

**Returns:** `void`

### public String getDamageCategory()

**Returns:** `String`

### public void setDamageCategory(String damageCategory)

**Parameters:**
- `String` `damageCategory`

**Returns:** `void`

### public boolean isDamageMakeHole()

**Returns:** `boolean`

### public void setDamageMakeHole(boolean damageMakeHole)

**Parameters:**
- `boolean` `damageMakeHole`

**Returns:** `void`

### public String getHitFloorSound()

**Returns:** `String`

### public void setHitFloorSound(String hitFloorSound)

**Parameters:**
- `String` `hitFloorSound`

**Returns:** `void`

### public boolean isInsertAllBulletsReload()

**Returns:** `boolean`

### public void setInsertAllBulletsReload(boolean insertAllBulletsReload)

**Parameters:**
- `boolean` `insertAllBulletsReload`

**Returns:** `void`

### public String getFireMode()

**Returns:** `String`

### public void setFireMode(String fireMode)

**Parameters:**
- `String` `fireMode`

**Returns:** `void`

### public boolean isSelectFire()

**Returns:** `boolean`

### public String cycleFireMode()

**Returns:** `String`

### public ArrayList<String> getFireModePossibilities()

**Returns:** `ArrayList<String>`

### public void setFireModePossibilities(ArrayList<String> fireModePossibilities)

**Parameters:**
- `ArrayList<String>` `fireModePossibilities`

**Returns:** `void`

### public float getCyclicRateMultiplier()

**Returns:** `float`

### public void setCyclicRateMultiplier(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public int randomizeBullets()

**Returns:** `int`

### public boolean canEmitLight()

**Returns:** `boolean`

### public float getLightStrength()

**Returns:** `float`

### public boolean isTorchCone()

**Returns:** `boolean`

### public float getTorchDot()

**Returns:** `float`

### public int getLightDistance()

**Returns:** `int`

### public boolean canBeActivated()

**Returns:** `boolean`

### public float getStopPower()

**Returns:** `float`

### public boolean isInstantExplosion()

**Returns:** `boolean`

### public void setWeaponSpritesByIndex(ArrayList<String> weaponSpritesByIndex)

**Parameters:**
- `ArrayList<String>` `weaponSpritesByIndex`

**Returns:** `void`

### public ArrayList<String> getWeaponSpritesByIndex()

**Returns:** `ArrayList<String>`

### public boolean usesExternalMagazine()

**Returns:** `boolean`

### public void inheritAmmunition(HandWeapon other)

**Parameters:**
- `HandWeapon` `other`

**Returns:** `void`

### public boolean isBareHands()

**Returns:** `boolean`

### public void render()

**Returns:** `void`

### public void setActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public void playActivateSound()

**Returns:** `void`

### public void playDeactivateSound()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean canAttackPierceTransparentWall(IsoGameCharacter isoGameCharacter,
HandWeapon handWeapon)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `HandWeapon` `handWeapon`

**Returns:** `boolean`

### public void randomizeFirearmAsLoot()

**Returns:** `void`

### public void setAttackTargetSquare(IsoGridSquare isoGridSquare)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`

**Returns:** `void`

### public IsoGridSquare getAttackTargetSquare(Vector3 attackPosition)

**Parameters:**
- `Vector3` `attackPosition`

**Returns:** `IsoGridSquare`

### public boolean isMelee()

**Returns:** `boolean`

### public boolean isExplosive()

**Returns:** `boolean`

### public float getStaggerBackTimeMod(IsoGameCharacter wielder,
IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `wielder`
- `IsoGameCharacter` `target`

**Returns:** `float`

### public void setScriptItem(Item scriptItem)

**Parameters:**
- `Item` `scriptItem` — the ScriptItem to set

**Returns:** `void`

### public boolean needToBeClosedOnceReload()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\HandWeapon.html`*
