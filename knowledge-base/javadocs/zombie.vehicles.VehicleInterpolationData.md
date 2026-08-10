---
title: zombie.vehicles.VehicleInterpolationData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleInterpolationData

`public class VehicleInterpolationData extends Object implements Comparable<VehicleInterpolationData>, INetworkPacketField`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleInterpolationData

## Description

Created by kroto on 1/17/2017.

## Constructors

### public VehicleInterpolationData()

## Methods

### public void getPosition(org.joml.Vector3f out)

**Parameters:**
- `org.joml.Vector3f` `out`

**Returns:** `void`

### public void getVelocity(org.joml.Vector3f out)

**Parameters:**
- `org.joml.Vector3f` `out`

**Returns:** `void`

### public int compareTo(VehicleInterpolationData o)

**Parameters:**
- `VehicleInterpolationData` `o`

**Returns:** `int`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void set(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void getPhysicsData(float[] physicsData)

**Parameters:**
- `float[]` `physicsData`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleInterpolationData.html`*
