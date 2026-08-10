---
title: zombie.WorldSoundManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.WorldSoundManager

`public final class WorldSoundManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.WorldSoundManager

## Fields

### public static final WorldSoundManager instance

### public final List<WorldSoundManager.WorldSound> soundList

## Constructors

### public WorldSoundManager()

## Methods

### public void init(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

**Returns:** `void`

### public void initFrame()

**Returns:** `void`

### public void KillCell()

**Returns:** `void`

### public WorldSoundManager.WorldSound getNew()

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound release(WorldSoundManager.WorldSound worldSound)

**Parameters:**
- `WorldSoundManager.WorldSound` `worldSound`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSound(Object source,
int x,
int y,
int z,
int radius,
int volume)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSound(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSound(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans,
float zombieIgnoreDist,
float stressMod)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`
- `float` `zombieIgnoreDist`
- `float` `stressMod`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSoundRepeating(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans,
float zombieIgnoreDist,
float stressMod)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`
- `float` `zombieIgnoreDist`
- `float` `stressMod`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSound(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans,
float zombieIgnoreDist,
float stressMod,
boolean sourceIsZombie,
boolean doSend,
boolean remote)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`
- `float` `zombieIgnoreDist`
- `float` `stressMod`
- `boolean` `sourceIsZombie`
- `boolean` `doSend`
- `boolean` `remote`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSound(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans,
float zombieIgnoreDist,
float stressMod,
boolean sourceIsZombie,
boolean doSend,
boolean remote,
boolean repeating,
boolean stressAnimals)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`
- `float` `zombieIgnoreDist`
- `float` `stressMod`
- `boolean` `sourceIsZombie`
- `boolean` `doSend`
- `boolean` `remote`
- `boolean` `repeating`
- `boolean` `stressAnimals`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSound(Object source,
int x,
int y,
int z,
int radius,
int volume,
float zombieIgnoreDist,
float stressMod,
boolean sourceIsZombie,
boolean doSend,
boolean remote,
boolean repeating,
short flags)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `float` `zombieIgnoreDist`
- `float` `stressMod`
- `boolean` `sourceIsZombie`
- `boolean` `doSend`
- `boolean` `remote`
- `boolean` `repeating`
- `short` `flags`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSoundRepeating(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans,
boolean stressAnimals)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`
- `boolean` `stressAnimals`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSoundRepeating(Object source,
int x,
int y,
int z,
int radius,
int volume,
boolean stressHumans)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `boolean` `stressHumans`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound addSoundRepeating(Object source,
int x,
int y,
int z,
int radius,
int volume,
short flags)

**Parameters:**
- `Object` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`
- `short` `flags`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound getSoundZomb(IsoZombie zom)

**Parameters:**
- `IsoZombie` `zom`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.WorldSound getSoundAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `WorldSoundManager.WorldSound`

### public WorldSoundManager.ResultBiggestSound getBiggestSoundZomb(int x,
int y,
int z,
boolean ignoreBySameType,
IsoZombie zom)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `ignoreBySameType`
- `IsoZombie` `zom`

**Returns:** `WorldSoundManager.ResultBiggestSound`

### public float getSoundAttract(WorldSoundManager.WorldSound sound,
IsoZombie zom)

**Parameters:**
- `WorldSoundManager.WorldSound` `sound`
- `IsoZombie` `zom`

**Returns:** `float`

### public float getSoundAttractAnimal(WorldSoundManager.WorldSound sound,
IsoAnimal animal)

**Parameters:**
- `WorldSoundManager.WorldSound` `sound`
- `IsoAnimal` `animal`

**Returns:** `float`

### public float getStressFromSounds(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `float`

### public void update()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public float getHearingMultiplier(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `float`

### public float getHearingMultiplier(int hearing)

**Parameters:**
- `int` `hearing`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\WorldSoundManager.html`*
