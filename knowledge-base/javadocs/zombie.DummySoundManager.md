---
title: zombie.DummySoundManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.DummySoundManager

`public final class DummySoundManager extends BaseSoundManager`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.BaseSoundManager
- zombie.DummySoundManager

## Constructors

### public DummySoundManager()

## Methods

### public boolean isRemastered()

**Returns:** `boolean`

### public void update1()

**Returns:** `void`

### public void update3()

**Returns:** `void`

### public void update2()

**Returns:** `void`

### public void update4()

**Returns:** `void`

### public void CacheSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `void`

### public void StopSound(fmod.fmod.Audio soundEffect)

**Parameters:**
- `fmod.fmod.Audio` `soundEffect`

**Returns:** `void`

### public void StopMusic()

**Returns:** `void`

### public void Purge()

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public void Update()

**Returns:** `void`

### public fmod.fmod.Audio Start(fmod.fmod.Audio musicTrack,
float f,
String prefMusic)

**Parameters:**
- `fmod.fmod.Audio` `musicTrack`
- `float` `f`
- `String` `prefMusic`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PrepareMusic(String name)

**Parameters:**
- `String` `name`

**Returns:** `fmod.fmod.Audio`

### public void PlayWorldSoundWav(String name,
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

### public fmod.fmod.Audio PlayWorldSoundWav(String name,
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

### public fmod.fmod.Audio PlayWorldSoundWav(String name,
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

### public fmod.fmod.Audio PlayWorldSound(String name,
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

### public fmod.fmod.Audio PlayWorldSound(String name,
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

### public fmod.fmod.Audio PlayWorldSoundImpl(String name,
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

### public fmod.fmod.Audio PlayWorldSound(String name,
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

### public void update3D()

**Returns:** `void`

### public fmod.fmod.Audio PlaySoundWav(String name,
int variations,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `int` `variations`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlaySoundWav(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlaySoundWav(String name,
boolean loop,
float maxGain,
float pitchVar)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`
- `float` `pitchVar`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlayJukeboxSound(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlaySoundEvenSilent(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlaySound(String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlaySound(String name,
boolean loop,
float pitchVar,
float maxGain)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `float` `pitchVar`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public fmod.fmod.Audio PlayMusic(String n,
String name,
boolean loop,
float maxGain)

**Parameters:**
- `String` `n`
- `String` `name`
- `boolean` `loop`
- `float` `maxGain`

**Returns:** `fmod.fmod.Audio`

### public void PlayAsMusic(String name,
fmod.fmod.Audio musicTrack,
boolean loop,
float volume)

**Parameters:**
- `String` `name`
- `fmod.fmod.Audio` `musicTrack`
- `boolean` `loop`
- `float` `volume`

**Returns:** `void`

### public void setMusicState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `void`

### public void setMusicWakeState(IsoPlayer player,
String stateName)

**Parameters:**
- `IsoPlayer` `player`
- `String` `stateName`

**Returns:** `void`

### public void DoMusic(String name,
boolean bLoop)

**Parameters:**
- `String` `name`
- `boolean` `bLoop`

**Returns:** `void`

### public float getMusicPosition()

**Returns:** `float`

### public void CheckDoMusic()

**Returns:** `void`

### public void stopMusic(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void playMusicNonTriggered(String name,
float gain)

**Parameters:**
- `String` `name`
- `float` `gain`

**Returns:** `void`

### public void playAmbient(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void playMusic(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public boolean isPlayingMusic()

**Returns:** `boolean`

### public boolean IsMusicPlaying()

**Returns:** `boolean`

### public void PlayAsMusic(String name,
fmod.fmod.Audio musicTrack,
float volume,
boolean bloop)

**Parameters:**
- `String` `name`
- `fmod.fmod.Audio` `musicTrack`
- `float` `volume`
- `boolean` `bloop`

**Returns:** `void`

### public long playUISound(String name)

**Parameters:**
- `String` `name`

**Returns:** `long`

### public boolean isPlayingUISound(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean isPlayingUISound(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `boolean`

### public void stopUISound(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `void`

### public void FadeOutMusic(String name,
int milli)

**Parameters:**
- `String` `name`
- `int` `milli`

**Returns:** `void`

### public fmod.fmod.Audio BlendThenStart(fmod.fmod.Audio musicTrack,
float f,
String prefMusic)

**Parameters:**
- `fmod.fmod.Audio` `musicTrack`
- `float` `f`
- `String` `prefMusic`

**Returns:** `fmod.fmod.Audio`

### public void BlendVolume(fmod.fmod.Audio audio,
float targetVolume,
float blendSpeedAlpha)

**Parameters:**
- `fmod.fmod.Audio` `audio`
- `float` `targetVolume`
- `float` `blendSpeedAlpha`

**Returns:** `void`

### public void BlendVolume(fmod.fmod.Audio audio,
float targetVolume)

**Parameters:**
- `fmod.fmod.Audio` `audio`
- `float` `targetVolume`

**Returns:** `void`

### public void setSoundVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public float getSoundVolume()

**Returns:** `float`

### public void setMusicVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public float getMusicVolume()

**Returns:** `float`

### public void setVehicleEngineVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public float getVehicleEngineVolume()

**Returns:** `float`

### public void setAmbientVolume(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public float getAmbientVolume()

**Returns:** `float`

### public void playNightAmbient(String choice)

**Parameters:**
- `String` `choice`

**Returns:** `void`

### public ArrayList<fmod.fmod.Audio> getAmbientPieces()

**Returns:** `ArrayList<fmod.fmod.Audio>`

### public void pauseSoundAndMusic()

**Returns:** `void`

### public void pauseSoundAndMusic(boolean bOptionallyKeepMusicPlaying)

**Parameters:**
- `boolean` `bOptionallyKeepMusicPlaying`

**Returns:** `void`

### public void resumeSoundAndMusic()

**Returns:** `void`

### public void debugScriptSounds()

**Returns:** `void`

### public void registerEmitter(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public void unregisterEmitter(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public boolean isListenerInRange(float x,
float y,
float range)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `range`

**Returns:** `boolean`

### public fmod.fmod.Audio PlayWorldSoundWavImpl(String name,
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

### public String getCurrentMusicName()

**Returns:** `String`

### public String getCurrentMusicLibrary()

**Returns:** `String`

### public void playImpactSound(IsoGridSquare isoGridSquare,
AmmoType ammoType)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`
- `AmmoType` `ammoType`

**Returns:** `void`

### public void playImpactSound(IsoGridSquare isoGridSquare,
AmmoType ammoType,
MaterialType materialType)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`
- `AmmoType` `ammoType`
- `MaterialType` `materialType`

**Returns:** `void`

### public void playDamageSound(IsoGridSquare isoGridSquare,
MaterialType materialType)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`
- `MaterialType` `materialType`

**Returns:** `void`

### public void playDestructionSound(IsoGridSquare isoGridSquare,
MaterialType materialType)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`
- `MaterialType` `materialType`

**Returns:** `void`

### public void dumpEventInstancesToTextFile()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\DummySoundManager.html`*
