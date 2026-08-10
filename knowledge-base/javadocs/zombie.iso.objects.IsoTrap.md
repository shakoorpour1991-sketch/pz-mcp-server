---
title: zombie.iso.objects.IsoTrap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoTrap

`public class IsoTrap extends IsoObject implements IItemProvider`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoTrap

## Constructors

### public IsoTrap(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoTrap(HandWeapon weapon,
IsoCell cell,
IsoGridSquare sq)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoCell` `cell`
- `IsoGridSquare` `sq`

### public IsoTrap(IsoGameCharacter attacker,
HandWeapon weapon,
IsoCell cell,
IsoGridSquare sq)

**Parameters:**
- `IsoGameCharacter` `attacker`
- `HandWeapon` `weapon`
- `IsoCell` `cell`
- `IsoGridSquare` `sq`

## Methods

### public void update()

**Returns:** `void`

### public IsoGridSquare getRenderSquare()

**Returns:** `IsoGridSquare`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoChild,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoChild`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void place()

**Returns:** `void`

### @Deprecated
public void triggerExplosion(boolean sensor)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `sensor`

**Returns:** `void`

### public void triggerExplosion()

**Returns:** `void`

### public void playExplosionSound()

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public int getTimerBeforeExplosion()

**Returns:** `int`

### public void setTimerBeforeExplosion(int timerBeforeExplosion)

**Parameters:**
- `int` `timerBeforeExplosion`

**Returns:** `void`

### public int getSensorRange()

**Returns:** `int`

### public void setSensorRange(int sensorRange)

**Parameters:**
- `int` `sensorRange`

**Returns:** `void`

### public int getFireRange()

**Returns:** `int`

### public void setFireRange(int fireRange)

**Parameters:**
- `int` `fireRange`

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

### public int getExplosionPower()

**Returns:** `int`

### public void setExplosionPower(int explosionPower)

**Parameters:**
- `int` `explosionPower`

**Returns:** `void`

### public int getNoiseDuration()

**Returns:** `int`

### public void setNoiseDuration(int noiseDuration)

**Parameters:**
- `int` `noiseDuration`

**Returns:** `void`

### public int getNoiseRange()

**Returns:** `int`

### public void setNoiseRange(int noiseRange)

**Parameters:**
- `int` `noiseRange`

**Returns:** `void`

### public int getExplosionRange()

**Returns:** `int`

### public void setExplosionRange(int explosionRange)

**Parameters:**
- `int` `explosionRange`

**Returns:** `void`

### public int getSmokeRange()

**Returns:** `int`

### public void setSmokeRange(int smokeRange)

**Parameters:**
- `int` `smokeRange`

**Returns:** `void`

### public float getExtraDamage()

**Returns:** `float`

### public void setExtraDamage(float extraDamage)

**Parameters:**
- `float` `extraDamage`

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public int getRemoteControlID()

**Returns:** `int`

### public void setRemoteControlID(int remoteControlId)

**Parameters:**
- `int` `remoteControlId`

**Returns:** `void`

### public String getCountDownSound()

**Returns:** `String`

### public void setCountDownSound(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public String getExplosionSound()

**Returns:** `String`

### public void setExplosionSound(String explosionSound)

**Parameters:**
- `String` `explosionSound`

**Returns:** `void`

### public int getExplosionDuration()

**Returns:** `int`

### public void setExplosionDuration(int minutes)

**Parameters:**
- `int` `minutes`

**Returns:** `void`

### public boolean isExploding()

**Returns:** `boolean`

### public InventoryItem getItem()

**Returns:** `InventoryItem`

### public static void triggerRemote(IsoPlayer player,
int remoteID,
int range)

**Parameters:**
- `IsoPlayer` `player`
- `int` `remoteID`
- `int` `range`

**Returns:** `void`

### public boolean isInstantExplosion()

**Returns:** `boolean`

### public void setInstantExplosion(boolean instantExplosion)

**Parameters:**
- `boolean` `instantExplosion`

**Returns:** `void`

### public boolean shouldPlaceInWorldAfterThrowing()

**Returns:** `boolean`

### public HandWeapon getHandWeapon()

**Returns:** `HandWeapon`

### public IsoGameCharacter getAttacker()

**Returns:** `IsoGameCharacter`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoTrap.html`*
