---
title: zombie.vehicles.VehicleEngine
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleEngine

`public final class VehicleEngine extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleEngine

## Constructors

### public VehicleEngine(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

## Methods

### public void addListener(IVehicleEngineListener listener)

**Parameters:**
- `IVehicleEngineListener` `listener`

**Returns:** `void`

### public void replaceListener(IVehicleEngineListener listenerOld,
IVehicleEngineListener listenerNew)

**Parameters:**
- `IVehicleEngineListener` `listenerOld`
- `IVehicleEngineListener` `listenerNew`

**Returns:** `void`

### public void setFeatures(int quality,
int loudness,
int power)

**Parameters:**
- `int` `quality`
- `int` `loudness`
- `int` `power`

**Returns:** `void`

### public int getQuality()

**Returns:** `int`

### public void setLoudness(int loudness)

**Parameters:**
- `int` `loudness`

**Returns:** `void`

### public int getLoudness()

**Returns:** `int`

### public void setPower(int power)

**Parameters:**
- `int` `power`

**Returns:** `void`

### public int getPower()

**Returns:** `int`

### public BaseVehicle.engineStateTypes getState()

**Returns:** `BaseVehicle.engineStateTypes`

### public VehicleEngineStateChangeReason getStateChangeReason()

**Returns:** `VehicleEngineStateChangeReason`

### public void setSpeed(double speed)

**Parameters:**
- `double` `speed`

**Returns:** `void`

### public void addEngineSpeed(double speed)

**Parameters:**
- `double` `speed`

**Returns:** `void`

### public double getSpeed()

**Returns:** `double`

### public long getUpdateStateTime()

**Returns:** `long`

### public void load(boolean engineRunning,
int loudness,
int quality,
int power)

**Parameters:**
- `boolean` `engineRunning`
- `int` `loudness`
- `int` `quality`
- `int` `power`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void scriptReloaded()

**Returns:** `void`

### public void setSmashed()

**Returns:** `void`

### public void softReset()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void doIdle()

**Returns:** `void`

### public void doStarting()

**Returns:** `void`

### public boolean isRunning()

**Returns:** `boolean`

### public boolean isStarting()

**Returns:** `boolean`

### public boolean isStarted()

**Returns:** `boolean`

### public void doRetryingStarting()

**Returns:** `void`

### public void doStartingSuccess()

**Returns:** `void`

### public void doStartingFailed(VehicleEngineStateChangeReason reason)

**Parameters:**
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

### public void doStartingFailedNoPower()

**Returns:** `void`

### public void doRunning()

**Returns:** `void`

### public void doStalling()

**Returns:** `void`

### public void doShuttingDown()

**Returns:** `void`

### public void doShuttingDown(VehicleEngineStateChangeReason reason)

**Parameters:**
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

### public void shutOff()

**Returns:** `void`

### public void shutOff(VehicleEngineStateChangeReason reason)

**Parameters:**
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleEngine.html`*
