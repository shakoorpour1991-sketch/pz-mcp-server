---
title: zombie.vehicles.VirtualVehicle
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VirtualVehicle

`public final class VirtualVehicle extends Object implements VehiclePartOwner, VehicleSoundOwner, IVehicleAlarmListener`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VirtualVehicle

## Constructors

### public VirtualVehicle()

## Methods

### public short getId()

**Returns:** `short`

### public int getSqlId()

**Returns:** `int`

### public VehicleSounds getVehicleSounds()

**Returns:** `VehicleSounds`

### public void setNeedPartsUpdate(boolean needPartsUpdate)

**Parameters:**
- `boolean` `needPartsUpdate`

**Returns:** `void`

### public void set(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean shouldUpdateInMeta()

**Returns:** `boolean`

### public void stopUpdatingInMeta()

**Returns:** `void`

### public void removeFromMeta(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void save()

**Returns:** `void`

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

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public VehicleParts getParts()

**Returns:** `VehicleParts`

### public boolean isListenerInRange(float range)

**Parameters:**
- `float` `range`

**Returns:** `boolean`

### public String getScriptName()

**Returns:** `String`

### public VehicleScript getScript()

**Returns:** `VehicleScript`

### public LightbarLightsMode getLightbarLightsModeObject()

**Returns:** `LightbarLightsMode`

### public boolean getHeadlightsOn()

**Returns:** `boolean`

### public void setEngineFeature(int quality,
int loudness,
int engineForce)

**Parameters:**
- `int` `quality`
- `int` `loudness`
- `int` `engineForce`

**Returns:** `void`

### public boolean isEngineWorking()

**Returns:** `boolean`

### public float getBrakeSpeedBetweenUpdate()

**Returns:** `float`

### public BaseVehicle.ModelInfo setModelVisible(VehiclePart part,
VehicleScript.Model scriptModel,
boolean visible)

**Parameters:**
- `VehiclePart` `part`
- `VehicleScript.Model` `scriptModel`
- `boolean` `visible`

**Returns:** `BaseVehicle.ModelInfo`

### public void updateDamageOverlayLater()

**Returns:** `void`

### public void updateTotalMass()

**Returns:** `void`

### public void updateBulletStats()

**Returns:** `void`

### public void updatePartStats()

**Returns:** `void`

### public void transmitEngine()

**Returns:** `void`

### public void transmitPartCondition(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartDoor(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartItem(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartLight(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartModData(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartUsedDelta(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartWindow(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

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

### public LightbarSirenMode getLightbarSirenModeObject()

**Returns:** `LightbarSirenMode`

### public void setLightbarSirenMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public float getMaxWheelSteering()

**Returns:** `float`

### public float getMinWheelSkid()

**Returns:** `float`

### public boolean isAnyTireMissing()

**Returns:** `boolean`

### public void onEngineStateChanged(BaseVehicle.engineStateTypes oldState,
BaseVehicle.engineStateTypes newState,
VehicleEngineStateChangeReason reason)

**Parameters:**
- `BaseVehicle.engineStateTypes` `oldState`
- `BaseVehicle.engineStateTypes` `newState`
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

### public void onVehicleAlarmEvent(VehicleAlarmEvent event)

**Parameters:**
- `VehicleAlarmEvent` `event`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VirtualVehicle.html`*
