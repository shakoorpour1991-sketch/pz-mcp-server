---
title: zombie.characters.BodyDamage.BodyPart
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.BodyDamage
---

# zombie.characters.BodyDamage.BodyPart

`public final class BodyPart extends Object`

**Kind:** class · **Package:** zombie.characters.BodyDamage

## Inheritance
- java.lang.Object
- zombie.characters.BodyDamage.BodyPart

## Fields

### public BodyPartType type

## Constructors

### public BodyPart(BodyPartType partType,
IsoGameCharacter parent)

**Parameters:**
- `BodyPartType` `partType`
- `IsoGameCharacter` `parent`

## Methods

### public IsoGameCharacter getParentChar()

**Returns:** `IsoGameCharacter`

### public void AddDamage(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public boolean isBandageDirty()

**Returns:** `boolean`

### public void DamageUpdate()

**Returns:** `void`

### public float getHealth()

**Returns:** `float`

### public void SetHealth(float newHealth)

**Parameters:**
- `float` `newHealth`

**Returns:** `void`

### public void AddHealth(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public void ReduceHealth(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public boolean HasInjury()

**Returns:** `boolean`

### public boolean bandaged()

**Returns:** `boolean`

### public String manipulatingUsername()

**Returns:** `String`

### public boolean bitten()

**Returns:** `boolean`

### public boolean bleeding()

**Returns:** `boolean`

### public boolean IsBleedingStemmed()

**Returns:** `boolean`

### public boolean IsCauterized()

**Returns:** `boolean`

### public boolean IsInfected()

**Returns:** `boolean`

### public void SetInfected(boolean inf)

**Parameters:**
- `boolean` `inf`

**Returns:** `void`

### public void SetFakeInfected(boolean inf)

**Parameters:**
- `boolean` `inf`

**Returns:** `void`

### public boolean IsFakeInfected()

**Returns:** `boolean`

### public void DisableFakeInfection()

**Returns:** `void`

### public boolean scratched()

**Returns:** `boolean`

### public boolean stitched()

**Returns:** `boolean`

### public boolean deepWounded()

**Returns:** `boolean`

### public void RestoreToFullHealth()

**Returns:** `void`

### public void setBandaged(boolean bandaged,
float bandageLife)

**Parameters:**
- `boolean` `bandaged`
- `float` `bandageLife`

**Returns:** `void`

### public void setBandaged(boolean bandaged,
float bandageLife,
boolean isAlcoholic,
String bandageType)

**Parameters:**
- `boolean` `bandaged`
- `float` `bandageLife`
- `boolean` `isAlcoholic`
- `String` `bandageType`

**Returns:** `void`

### public void setManipulatingUsername(String manipulatingUsername)

**Parameters:**
- `String` `manipulatingUsername`

**Returns:** `void`

### public void SetBitten(boolean bitten)

**Parameters:**
- `boolean` `bitten`

**Returns:** `void`

### public void SetBitten(boolean bitten,
boolean infected)

**Parameters:**
- `boolean` `bitten`
- `boolean` `infected`

**Returns:** `void`

### public void setBleeding(boolean bleeding)

**Parameters:**
- `boolean` `bleeding`

**Returns:** `void`

### public void SetBleedingStemmed(boolean bleedingStemmed)

**Parameters:**
- `boolean` `bleedingStemmed`

**Returns:** `void`

### public void SetCauterized(boolean cauterized)

**Parameters:**
- `boolean` `cauterized`

**Returns:** `void`

### public void setCut(boolean cut)

**Parameters:**
- `boolean` `cut`

**Returns:** `void`

### public void setCut(boolean cut,
boolean forceNoInfection)

**Parameters:**
- `boolean` `cut`
- `boolean` `forceNoInfection`

**Returns:** `void`

### public void generateZombieInfection(int baseChance)

**Parameters:**
- `int` `baseChance`

**Returns:** `void`

### public void setScratched(boolean scratched,
boolean forceNoInfection)

**Parameters:**
- `boolean` `scratched`
- `boolean` `forceNoInfection`

**Returns:** `void`

### public void SetScratchedWeapon(boolean scratched)

**Parameters:**
- `boolean` `scratched`

**Returns:** `void`

### public void generateDeepWound()

**Returns:** `void`

### public void generateDeepShardWound()

**Returns:** `void`

### public void generateFracture(float fractureTime)

**Parameters:**
- `float` `fractureTime`

**Returns:** `void`

### public void generateFractureNew(float fractureTime)

**Parameters:**
- `float` `fractureTime`

**Returns:** `void`

### public void SetScratchedWindow(boolean scratched)

**Parameters:**
- `boolean` `scratched`

**Returns:** `void`

### public void setStitched(boolean stitched)

**Parameters:**
- `boolean` `stitched`

**Returns:** `void`

### public void damageFromFirearm(float damage)

**Parameters:**
- `float` `damage`

**Returns:** `void`

### public float getPain()

**Returns:** `float`

### public float getBiteTime()

**Returns:** `float`

### public void setBiteTime(float biteTime)

**Parameters:**
- `float` `biteTime`

**Returns:** `void`

### public float getDeepWoundTime()

**Returns:** `float`

### public void setDeepWoundTime(float deepWoundTime)

**Parameters:**
- `float` `deepWoundTime`

**Returns:** `void`

### public boolean haveGlass()

**Returns:** `boolean`

### public void setHaveGlass(boolean haveGlass)

**Parameters:**
- `boolean` `haveGlass`

**Returns:** `void`

### public float getStitchTime()

**Returns:** `float`

### public void setStitchTime(float stitchTime)

**Parameters:**
- `float` `stitchTime`

**Returns:** `void`

### public int getIndex()

**Returns:** `int`

### public float getAlcoholLevel()

**Returns:** `float`

### public void setAlcoholLevel(float alcoholLevel)

**Parameters:**
- `float` `alcoholLevel`

**Returns:** `void`

### public float getAdditionalPain(boolean includeStiffness)

**Parameters:**
- `boolean` `includeStiffness`

**Returns:** `float`

### public float getAdditionalPain()

**Returns:** `float`

### public void setAdditionalPain(float additionalPain)

**Parameters:**
- `float` `additionalPain`

**Returns:** `void`

### public String getBandageType()

**Returns:** `String`

### public void setBandageType(String bandageType)

**Parameters:**
- `String` `bandageType`

**Returns:** `void`

### public boolean isGetBandageXp()

**Returns:** `boolean`

### public void setGetBandageXp(boolean getBandageXp)

**Parameters:**
- `boolean` `getBandageXp`

**Returns:** `void`

### public boolean isGetStitchXp()

**Returns:** `boolean`

### public void setGetStitchXp(boolean getStitchXp)

**Parameters:**
- `boolean` `getStitchXp`

**Returns:** `void`

### public float getSplintFactor()

**Returns:** `float`

### public void setSplintFactor(float splintFactor)

**Parameters:**
- `float` `splintFactor`

**Returns:** `void`

### public float getFractureTime()

**Returns:** `float`

### public void setFractureTime(float fractureTime)

**Parameters:**
- `float` `fractureTime`

**Returns:** `void`

### public boolean isGetSplintXp()

**Returns:** `boolean`

### public void setGetSplintXp(boolean getSplintXp)

**Parameters:**
- `boolean` `getSplintXp`

**Returns:** `void`

### public boolean isSplint()

**Returns:** `boolean`

### public void setSplint(boolean splint,
float splintFactor)

**Parameters:**
- `boolean` `splint`
- `float` `splintFactor`

**Returns:** `void`

### public boolean haveBullet()

**Returns:** `boolean`

### public void setHaveBullet(boolean haveBullet,
int doctorLevel)

**Parameters:**
- `boolean` `haveBullet`
- `int` `doctorLevel`

**Returns:** `void`

### public float getBurnTime()

**Returns:** `float`

### public void setBurnTime(float burnTime)

**Parameters:**
- `float` `burnTime`

**Returns:** `void`

### public boolean isNeedBurnWash()

**Returns:** `boolean`

### public void setNeedBurnWash(boolean needBurnWash)

**Parameters:**
- `boolean` `needBurnWash`

**Returns:** `void`

### public float getLastTimeBurnWash()

**Returns:** `float`

### public void setLastTimeBurnWash(float lastTimeBurnWash)

**Parameters:**
- `float` `lastTimeBurnWash`

**Returns:** `void`

### public boolean isInfectedWound()

**Returns:** `boolean`

### public void setInfectedWound(boolean infectedWound)

**Parameters:**
- `boolean` `infectedWound`

**Returns:** `void`

### public BodyPartType getType()

**Returns:** `BodyPartType`

### public float getBleedingTime()

**Returns:** `float`

### public void setBleedingTime(float bleedingTime)

**Parameters:**
- `float` `bleedingTime`

**Returns:** `void`

### public boolean isDeepWounded()

**Returns:** `boolean`

### public void setDeepWounded(boolean wounded)

**Parameters:**
- `boolean` `wounded`

**Returns:** `void`

### public float getBandageLife()

**Returns:** `float`

### public void setBandageLife(float bandageLife)

**Parameters:**
- `float` `bandageLife`

**Returns:** `void`

### public float getScratchTime()

**Returns:** `float`

### public void setScratchTime(float scratchTime)

**Parameters:**
- `float` `scratchTime`

**Returns:** `void`

### public float getWoundInfectionLevel()

**Returns:** `float`

### public void setWoundInfectionLevel(float infectedWound)

**Parameters:**
- `float` `infectedWound`

**Returns:** `void`

### public void setBurned()

**Returns:** `void`

### public String getSplintItem()

**Returns:** `String`

### public void setSplintItem(String splintItem)

**Parameters:**
- `String` `splintItem`

**Returns:** `void`

### public float getPlantainFactor()

**Returns:** `float`

### public void setPlantainFactor(float plantainFactor)

**Parameters:**
- `float` `plantainFactor`

**Returns:** `void`

### public float getGarlicFactor()

**Returns:** `float`

### public void setGarlicFactor(float garlicFactor)

**Parameters:**
- `float` `garlicFactor`

**Returns:** `void`

### public float getComfreyFactor()

**Returns:** `float`

### public void setComfreyFactor(float comfreyFactor)

**Parameters:**
- `float` `comfreyFactor`

**Returns:** `void`

### public void sync(BodyPart other,
BodyDamageSync.Updater updater)

**Parameters:**
- `BodyPart` `other`
- `BodyDamageSync.Updater` `updater`

**Returns:** `void`

### public void sync(ByteBufferReader bb,
byte id)

**Parameters:**
- `ByteBufferReader` `bb`
- `byte` `id`

**Returns:** `void`

### public void syncWrite(ByteBufferWriter bb,
int id)

**Parameters:**
- `ByteBufferWriter` `bb`
- `int` `id`

**Returns:** `void`

### public float getCutTime()

**Returns:** `float`

### public void setCutTime(float cutTime)

**Parameters:**
- `float` `cutTime`

**Returns:** `void`

### public boolean isCut()

**Returns:** `boolean`

### public float getScratchSpeedModifier()

**Returns:** `float`

### public void setScratchSpeedModifier(float scratchSpeedModifier)

**Parameters:**
- `float` `scratchSpeedModifier`

**Returns:** `void`

### public float getCutSpeedModifier()

**Returns:** `float`

### public void setCutSpeedModifier(float cutSpeedModifier)

**Parameters:**
- `float` `cutSpeedModifier`

**Returns:** `void`

### public float getBurnSpeedModifier()

**Returns:** `float`

### public void setBurnSpeedModifier(float burnSpeedModifier)

**Parameters:**
- `float` `burnSpeedModifier`

**Returns:** `void`

### public float getDeepWoundSpeedModifier()

**Returns:** `float`

### public void setDeepWoundSpeedModifier(float deepWoundSpeedModifier)

**Parameters:**
- `float` `deepWoundSpeedModifier`

**Returns:** `void`

### public boolean isBurnt()

**Returns:** `boolean`

### public void generateBleeding()

Generate an amount of bleeding time
will depend on injuries type and body part type.
Use this instead of setBleedingTime() so all is automated.

**Returns:** `void`

### public float getInnerTemperature()

**Returns:** `float`

### public float getSkinTemperature()

**Returns:** `float`

### public float getDistToCore()

**Returns:** `float`

### public float getSkinSurface()

**Returns:** `float`

### public Thermoregulator.ThermalNode getThermalNode()

**Returns:** `Thermoregulator.ThermalNode`

### public float getWetness()

**Returns:** `float`

### public void setWetness(float wetness)

**Parameters:**
- `float` `wetness`

**Returns:** `void`

### public float getStiffness()

**Returns:** `float`

### public void setStiffness(float stiffness)

**Parameters:**
- `float` `stiffness`

**Returns:** `void`

### public boolean hasDirtyClothing()

**Returns:** `boolean`

### public boolean hasBloodyClothing()

**Returns:** `boolean`

### public void addStiffness(float stiffness)

**Parameters:**
- `float` `stiffness`

**Returns:** `void`

### public float getDamageScaler()

**Returns:** `float`

### public float getBandageNeededDamageLevel()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BodyDamage\BodyPart.html`*
