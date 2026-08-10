---
title: zombie.vehicleSound.VehicleSounds
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicleSound
---

# zombie.vehicleSound.VehicleSounds

`public final class VehicleSounds extends Object implements VehicleSoundOwner, fmod.fmod.IFMODParameterUpdater`

**Kind:** class · **Package:** zombie.vehicleSound

## Inheritance
- java.lang.Object
- zombie.vehicleSound.VehicleSounds

## Fields

### public static float SOUND_VOLUME

## Constructors

### public VehicleSounds()

## Methods

### public void setOwner(VehicleSoundOwner owner)

**Parameters:**
- `VehicleSoundOwner` `owner`

**Returns:** `void`

### public VehicleSoundOwner getOwner()

**Returns:** `VehicleSoundOwner`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public int getXi()

**Returns:** `int`

### public int getYi()

**Returns:** `int`

### public int getZi()

**Returns:** `int`

### public boolean isListenerInRange(float range)

**Parameters:**
- `float` `range`

**Returns:** `boolean`

### public String getScriptName()

**Returns:** `String`

### public VehicleScript getScript()

**Returns:** `VehicleScript`

### public int getEngineCondition()

**Returns:** `int`

### public int getEngineQuality()

**Returns:** `int`

### public BaseVehicle.engineStateTypes getEngineState()

**Returns:** `BaseVehicle.engineStateTypes`

### public boolean isEngineRunning()

**Returns:** `boolean`

### public boolean isEngineSounding()

**Returns:** `boolean`

### public double getEngineSpeed()

**Returns:** `double`

### public int getTransmissionNumber()

**Returns:** `int`

### public float getCurrentSpeedKmHour()

**Returns:** `float`

### public float getMaxSpeed()

**Returns:** `float`

### public boolean hasAlarm()

**Returns:** `boolean`

### public boolean isAlarmActive()

**Returns:** `boolean`

### public boolean isAlarmSoundOn()

**Returns:** `boolean`

### public boolean isAlarmSounding()

**Returns:** `boolean`

### public boolean isBrakePedalPressed()

**Returns:** `boolean`

### public boolean isGasPedalPressed()

**Returns:** `boolean`

### public ParameterVehicleRoadMaterial.Material getRoadMaterial()

**Returns:** `ParameterVehicleRoadMaterial.Material`

### public String getChosenAlarmSound()

**Returns:** `String`

### public boolean isBackupBeeperSounding()

**Returns:** `boolean`

### public boolean isDoorAlarmSounding()

**Returns:** `boolean`

### public boolean hasHorn()

**Returns:** `boolean`

### public boolean isHornSounding()

**Returns:** `boolean`

### public BaseSoundEmitter getVehicleSoundEmitter()

**Returns:** `BaseSoundEmitter`

### public boolean isAnyListenerInside()

**Returns:** `boolean`

### public boolean isSirenActive()

**Returns:** `boolean`

### public boolean isSirenSounding()

**Returns:** `boolean`

### public double getSirenStartTime()

**Returns:** `double`

### public void setSirenStartTime(double worldAgeHours)

**Parameters:**
- `double` `worldAgeHours`

**Returns:** `void`

### public boolean hasLightbar()

**Returns:** `boolean`

### public LightbarSirenMode getLightbarSirenModeObject()

**Returns:** `LightbarSirenMode`

### public float getMaxWheelSteering()

**Returns:** `float`

### public float getMinWheelSkid()

**Returns:** `float`

### public boolean isAnyTireMissing()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void remove()

**Returns:** `void`

### public FMODParameterList getFMODParameters()

**Returns:** `FMODParameterList`

### public void startEvent(long eventInstance,
GameSoundClip clip,
boolean remote,
BitSet parameterSet)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`
- `boolean` `remote`
- `BitSet` `parameterSet`

**Returns:** `void`

### public void updateEvent(long eventInstance,
GameSoundClip clip)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`

**Returns:** `void`

### public void stopEvent(long eventInstance,
GameSoundClip clip,
boolean remote,
BitSet parameterSet)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`
- `boolean` `remote`
- `BitSet` `parameterSet`

**Returns:** `void`

### public String getEngineSound()

**Returns:** `String`

### public String getEngineStartSound()

**Returns:** `String`

### public String getEngineTurnOffSound()

**Returns:** `String`

### public String getHandBrakeSound()

**Returns:** `String`

### public String getIgnitionFailSound()

**Returns:** `String`

### public String getIgnitionFailNoPowerSound()

**Returns:** `String`

### public boolean isCombinedWithEngineSound(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicleSound\VehicleSounds.html`*
