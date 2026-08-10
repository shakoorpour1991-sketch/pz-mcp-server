---
title: zombie.BaseSoundManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.BaseSoundManager

`public abstract class BaseSoundManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.BaseSoundManager

## Fields

### public boolean allowMusic

## Constructors

### public BaseSoundManager()

## Methods

### public abstract boolean isRemastered()

**Returns:** `boolean`

### public abstract void update1()

**Returns:** `void`

### public abstract void update3()

**Returns:** `void`

### public abstract void update2()

**Returns:** `void`

### public abstract void update4()

**Returns:** `void`

### public abstract void CacheSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `void`

### public abstract void StopSound(fmod.fmod.Audio SoundEffect)

**Parameters:**
- `fmod.fmod.Audio` `SoundEffect`

**Returns:** `void`

### public abstract void StopMusic()

**Returns:** `void`

### public abstract void Purge()

**Returns:** `void`

### public abstract void stop()

**Returns:** `void`

### public abstract void Update()

**Returns:** `void`

### public abstract fmod.fmod.Audio Start(fmod.fmod.Audio musicTrack,
float f,
String PrefMusic)

**Parameters:**
- `fmod.fmod.Audio` `musicTrack`
- `float` `f`
- `String` `PrefMusic`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PrepareMusic(String name)

**Parameters:**
- `String` `name`

**Returns:** `fmod.fmod.Audio`

### public abstract void PlayWorldSoundWav(String name,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
int choices,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `int` `choices`
- `boolean` `ignoreOutside`

**Returns:** `void`

### public abstract fmod.fmod.Audio PlayWorldSoundWav(String name,
boolean loop,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayWorldSoundWav(String name,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayWorldSound(String name,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
int choices,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `int` `choices`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayWorldSound(String name,
boolean loop,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayWorldSoundImpl(String name,
boolean loop,
int sx,
int sy,
int sz,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `int` `sx`
- `int` `sy`
- `int` `sz`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayWorldSound(String name,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract void update3D()

**Returns:** `void`

### public abstract fmod.fmod.Audio PlaySoundWav(String name,
int variations,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `int` `variations`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlaySoundWav(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlaySoundWav(String name,
boolean loop,
float maxGain,
float pitchVar)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`
- `float` `pitchVar`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayWorldSoundWavImpl(String name,
boolean loop,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayJukeboxSound(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlaySoundEvenSilent(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlaySound(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlaySound(String name,
boolean loop,
float pitchVar,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `pitchVar`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract fmod.fmod.Audio PlayMusic(String n,
String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `n`
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public abstract void PlayAsMusic(String name,
fmod.fmod.Audio musicTrack,
boolean loop,
float volume)

**Parameters:**
- `String` `name`
- `fmod.fmod.Audio` `musicTrack`
- `boolean` `loop`
- `float` `volume`

**Returns:** `void`

### public abstract void setMusicState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `void`

### public abstract void setMusicWakeState(IsoPlayer player,
String stateName)

**Parameters:**
- `IsoPlayer` `player`
- `String` `stateName`

**Returns:** `void`

### public abstract void DoMusic(String name,
boolean bLoop)

**Parameters:**
- `String` `name`
- `boolean` `bLoop`

**Returns:** `void`

### public abstract float getMusicPosition()

**Returns:** `float`

### public abstract void CheckDoMusic()

**Returns:** `void`

### public abstract void stopMusic(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public abstract void playMusicNonTriggered(String name,
float gain)

**Parameters:**
- `String` `name`
- `float` `gain`

**Returns:** `void`

### public abstract void playAmbient(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public abstract void playMusic(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public abstract boolean isPlayingMusic()

**Returns:** `boolean`

### public abstract boolean IsMusicPlaying()

**Returns:** `boolean`

### public abstract String getCurrentMusicName()

**Returns:** `String`

### public abstract String getCurrentMusicLibrary()

**Returns:** `String`

### public abstract void PlayAsMusic(String name,
fmod.fmod.Audio musicTrack,
float volume,
boolean bloop)

**Parameters:**
- `String` `name`
- `fmod.fmod.Audio` `musicTrack`
- `float` `volume`
- `boolean` `bloop`

**Returns:** `void`

### public abstract long playUISound(String name)

**Parameters:**
- `String` `name`

**Returns:** `long`

### public abstract boolean isPlayingUISound(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public abstract boolean isPlayingUISound(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `boolean`

### public abstract void stopUISound(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `void`

### public abstract void FadeOutMusic(String name,
int milli)

**Parameters:**
- `String` `name`
- `int` `milli`

**Returns:** `void`

### public abstract fmod.fmod.Audio BlendThenStart(fmod.fmod.Audio musicTrack,
float f,
String PrefMusic)

**Parameters:**
- `fmod.fmod.Audio` `musicTrack`
- `float` `f`
- `String` `PrefMusic`

**Returns:** `fmod.fmod.Audio`

### public abstract void BlendVolume(fmod.fmod.Audio audio,
float targetVolume,
float blendSpeedAlpha)

**Parameters:**
- `fmod.fmod.Audio` `audio`
- `float` `targetVolume`
- `float` `blendSpeedAlpha`

**Returns:** `void`

### public abstract void BlendVolume(fmod.fmod.Audio audio,
float targetVolume)

**Parameters:**
- `fmod.fmod.Audio` `audio`
- `float` `targetVolume`

**Returns:** `void`

### public abstract void setSoundVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public abstract float getSoundVolume()

**Returns:** `float`

### public abstract void setAmbientVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public abstract float getAmbientVolume()

**Returns:** `float`

### public abstract void setMusicVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public abstract float getMusicVolume()

**Returns:** `float`

### public abstract void setVehicleEngineVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public abstract float getVehicleEngineVolume()

**Returns:** `float`

### public abstract void playNightAmbient(String choice)

**Parameters:**
- `String` `choice`

**Returns:** `void`

### public abstract ArrayList<fmod.fmod.Audio> getAmbientPieces()

**Returns:** `ArrayList<fmod.fmod.Audio>`

### public abstract void pauseSoundAndMusic()

**Returns:** `void`

### public abstract void pauseSoundAndMusic(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### public abstract void resumeSoundAndMusic()

**Returns:** `void`

### public abstract void debugScriptSounds()

**Returns:** `void`

### public abstract void registerEmitter(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public abstract void unregisterEmitter(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public abstract boolean isListenerInRange(float x,
float y,
float range)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `range`

**Returns:** `boolean`

### public abstract void playImpactSound(IsoGridSquare var1,
AmmoType var2)

**Parameters:**
- `IsoGridSquare` `var1`
- `AmmoType` `var2`

**Returns:** `void`

### public abstract void playImpactSound(IsoGridSquare var1,
AmmoType var2,
MaterialType var3)

**Parameters:**
- `IsoGridSquare` `var1`
- `AmmoType` `var2`
- `MaterialType` `var3`

**Returns:** `void`

### public abstract void playDamageSound(IsoGridSquare arg0,
MaterialType arg1)

**Parameters:**
- `IsoGridSquare` `arg0`
- `MaterialType` `arg1`

**Returns:** `void`

### public abstract void playDestructionSound(IsoGridSquare arg0,
MaterialType arg1)

**Parameters:**
- `IsoGridSquare` `arg0`
- `MaterialType` `arg1`

**Returns:** `void`

### public abstract void dumpEventInstancesToTextFile()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\BaseSoundManager.html`*
