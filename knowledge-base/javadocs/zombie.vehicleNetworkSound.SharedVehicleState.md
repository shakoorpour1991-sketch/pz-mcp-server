---
title: zombie.vehicleNetworkSound.SharedVehicleState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicleNetworkSound
---

# zombie.vehicleNetworkSound.SharedVehicleState

`public class SharedVehicleState extends Object`

**Kind:** class · **Package:** zombie.vehicleNetworkSound

## Inheritance
- java.lang.Object
- zombie.vehicleNetworkSound.SharedVehicleState

## Fields

### public short id

### public String scriptName

### public float x

### public float y

### public float z

### public BaseVehicle.engineStateTypes engineState

### public short vehicleStateFlags

### public short engineSpeed

### public byte currentSpeedKmHour

### public byte gear

### public byte engineCondition

### public byte engineQuality

### public String chosenAlarmSound

### public final LightbarSirenMode lightbarSirenMode

### public byte minWheelSkid

### public byte steering

### public ParameterVehicleRoadMaterial.Material roadMaterial

## Constructors

### public SharedVehicleState()

## Methods

### public SharedVehicleState set(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `SharedVehicleState`

### public SharedVehicleState set(SharedVehicleState other)

**Parameters:**
- `SharedVehicleState` `other`

**Returns:** `SharedVehicleState`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void parse(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public SharedVehicleState set(SharedVehicleState other,
int changeBits)

**Parameters:**
- `SharedVehicleState` `other`
- `int` `changeBits`

**Returns:** `SharedVehicleState`

### public void write(ByteBufferWriter b,
int changeBits)

**Parameters:**
- `ByteBufferWriter` `b`
- `int` `changeBits`

**Returns:** `void`

### public int parseUpdate(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicleNetworkSound\SharedVehicleState.html`*
