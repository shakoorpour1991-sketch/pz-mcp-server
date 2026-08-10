---
title: zombie.vehicles.VehicleInterpolation
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleInterpolation

`public class VehicleInterpolation extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleInterpolation

## Description

Created by kroto on 1/17/2017.

## Methods

### public void reset()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void update(long time)

**Parameters:**
- `long` `time`

**Returns:** `void`

### public void interpolationDataAdd(BaseVehicle vehicle,
VehicleInterpolationData data,
long currentTime)

**Parameters:**
- `BaseVehicle` `vehicle`
- `VehicleInterpolationData` `data`
- `long` `currentTime`

**Returns:** `void`

### public boolean interpolationDataGet(float[] buf1,
float[] buf2)

**Parameters:**
- `float[]` `buf1`
- `float[]` `buf2`

**Returns:** `boolean`

### public boolean interpolationDataGet(float[] buf1,
float[] buf2,
VehicleInterpolation towedByInterpolation)

**Parameters:**
- `float[]` `buf1`
- `float[]` `buf2`
- `VehicleInterpolation` `towedByInterpolation`

**Returns:** `boolean`

### public VehicleInterpolationData getLastAddedInterpolationPoint()

**Returns:** `VehicleInterpolationData`

### public void setDelayLength(float d)

**Parameters:**
- `float` `d`

**Returns:** `void`

### public boolean isDelayLengthIncreased()

**Returns:** `boolean`

### public boolean interpolationDataGet(float[] buf1,
float[] buf2,
long time,
VehicleInterpolation towedByInterpolation)

**Parameters:**
- `float[]` `buf1`
- `float[]` `buf2`
- `long` `time`
- `VehicleInterpolation` `towedByInterpolation`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleInterpolation.html`*
