---
title: fmod.fmod.FMODManager
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: fmod.fmod
---

# fmod.fmod.FMODManager

`public class FMODManager extends Object`

**Kind:** class · **Package:** fmod.fmod

## Inheritance
- java.lang.Object
- fmod.fmod.FMODManager

## Fields

### public static FMODManager instance

### public static int FMOD_STUDIO_INIT_NORMAL

### public static int FMOD_STUDIO_INIT_LIVEUPDATE

### public static int FMOD_STUDIO_INIT_ALLOW_MISSING_PLUGINS

### public static int FMOD_STUDIO_INIT_SYNCHRONOUS_UPDATE

### public static int FMOD_STUDIO_INIT_DEFERRED_CALLBACKS

### public static int FMOD_INIT_NORMAL

### public static int FMOD_INIT_STREAM_FROM_UPDATE

### public static int FMOD_INIT_MIX_FROM_UPDATE

### public static int FMOD_INIT_3D_RIGHTHANDED

### public static int FMOD_INIT_CHANNEL_LOWPASS

### public static int FMOD_INIT_CHANNEL_DISTANCEFILTER

### public static int FMOD_INIT_PROFILE_ENABLE

### public static int FMOD_INIT_VOL0_BECOMES_VIRTUAL

### public static int FMOD_INIT_GEOMETRY_USECLOSEST

### public static int FMOD_INIT_PREFER_DOLBY_DOWNMIX

### public static int FMOD_INIT_THREAD_UNSAFE

### public static int FMOD_INIT_PROFILE_METER_ALL

### public static int FMOD_DEFAULT

### public static int FMOD_LOOP_OFF

### public static int FMOD_LOOP_NORMAL

### public static int FMOD_LOOP_BIDI

### public static int FMOD_2D

### public static int FMOD_3D

### public static int FMOD_HARDWARE

### public static int FMOD_SOFTWARE

### public static int FMOD_CREATESTREAM

### public static int FMOD_CREATESAMPLE

### public static int FMOD_CREATECOMPRESSEDSAMPLE

### public static int FMOD_OPENUSER

### public static int FMOD_OPENMEMORY

### public static int FMOD_OPENMEMORY_POINT

### public static int FMOD_OPENRAW

### public static int FMOD_OPENONLY

### public static int FMOD_ACCURATETIME

### public static int FMOD_MPEGSEARCH

### public static int FMOD_NONBLOCKING

### public static int FMOD_UNIQUE

### public static int FMOD_3D_HEADRELATIVE

### public static int FMOD_3D_WORLDRELATIVE

### public static int FMOD_3D_INVERSEROLLOFF

### public static int FMOD_3D_LINEARROLLOFF

### public static int FMOD_3D_LINEARSQUAREROLLOFF

### public static int FMOD_3D_INVERSETAPEREDROLLOFF

### public static int FMOD_3D_CUSTOMROLLOFF

### public static int FMOD_3D_IGNOREGEOMETRY

### public static int FMOD_IGNORETAGS

### public static int FMOD_LOWMEM

### public static int FMOD_LOADSECONDARYRAM

### public static int FMOD_VIRTUAL_PLAYFROMSTART

### public static int FMOD_PRESET_OFF

### public static int FMOD_PRESET_GENERIC

### public static int FMOD_PRESET_PADDEDCELL

### public static int FMOD_PRESET_ROOM

### public static int FMOD_PRESET_BATHROOM

### public static int FMOD_PRESET_LIVINGROOM

### public static int FMOD_PRESET_STONEROOM

### public static int FMOD_PRESET_AUDITORIUM

### public static int FMOD_PRESET_CONCERTHALL

### public static int FMOD_PRESET_CAVE

### public static int FMOD_PRESET_ARENA

### public static int FMOD_PRESET_HANGAR

### public static int FMOD_PRESET_CARPETTEDHALLWAY

### public static int FMOD_PRESET_HALLWAY

### public static int FMOD_PRESET_STONECORRIDOR

### public static int FMOD_PRESET_ALLEY

### public static int FMOD_PRESET_FOREST

### public static int FMOD_PRESET_CITY

### public static int FMOD_PRESET_MOUNTAINS

### public static int FMOD_PRESET_QUARRY

### public static int FMOD_PRESET_PLAIN

### public static int FMOD_PRESET_PARKINGLOT

### public static int FMOD_PRESET_SEWERPIPE

### public static int FMOD_PRESET_UNDERWATER

### public static int FMOD_TIMEUNIT_MS

### public static int FMOD_TIMEUNIT_PCM

### public static int FMOD_TIMEUNIT_PCMBYTES

### public static int FMOD_STUDIO_PLAYBACK_PLAYING

### public static int FMOD_STUDIO_PLAYBACK_SUSTAINING

### public static int FMOD_STUDIO_PLAYBACK_STOPPED

### public static int FMOD_STUDIO_PLAYBACK_STARTING

### public static int FMOD_STUDIO_PLAYBACK_STOPPING

### public static int FMOD_SOUND_FORMAT_NONE

### public static int FMOD_SOUND_FORMAT_PCM8

### public static int FMOD_SOUND_FORMAT_PCM16

### public static int FMOD_SOUND_FORMAT_PCM24

### public static int FMOD_SOUND_FORMAT_PCM32

### public static int FMOD_SOUND_FORMAT_PCMFLOAT

### public static int FMOD_SOUND_FORMAT_BITSTREAM

### public long channelGroupInGameNonBankSounds

## Constructors

### public FMODManager()

## Methods

### public void init()

**Returns:** `void`

### public void loadTest()

**Returns:** `void`

### public void playTest()

**Returns:** `void`

### public void applyDSP()

**Returns:** `void`

### public void tick()

**Returns:** `void`

### public int getNumListeners()

**Returns:** `int`

### public long loadSound(String string)

**Parameters:**
- `String` `string`

**Returns:** `long`

### public void stopSound(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `void`

### public boolean isPlaying(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `boolean`

### public long loadSound(String string,
boolean boolean0)

**Parameters:**
- `String` `string`
- `boolean` `boolean0`

**Returns:** `long`

### public void updateReverbPreset()

**Returns:** `void`

### public FMOD_STUDIO_EVENT_DESCRIPTION getEventDescription(String string)

**Parameters:**
- `String` `string`

**Returns:** `FMOD_STUDIO_EVENT_DESCRIPTION`

### public FMOD_STUDIO_PARAMETER_DESCRIPTION getParameterDescription(String string)

**Parameters:**
- `String` `string`

**Returns:** `FMOD_STUDIO_PARAMETER_DESCRIPTION`

### public FMOD_STUDIO_PARAMETER_ID getParameterID(String string)

**Parameters:**
- `String` `string`

**Returns:** `FMOD_STUDIO_PARAMETER_ID`

### public int getParameterCount()

**Returns:** `int`

### public ArrayList<String> getEventPathList()

**Returns:** `ArrayList<String>`

### public void addGlobalParameter(FMODGlobalParameter fMODGlobalParameter)

**Parameters:**
- `FMODGlobalParameter` `fMODGlobalParameter`

**Returns:** `void`

### public FMODGlobalParameter getGlobalParameter(String string)

**Parameters:**
- `String` `string`

**Returns:** `FMODGlobalParameter`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\fmod\fmod\FMODManager.html`*
