---
title: zombie.core.physics.CarController
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.CarController

`public final class CarController extends Object`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.core.physics.CarController

## Description

Created by LEMMYCOOLER on 17/04/14.

## Fields

### public final BaseVehicle vehicleObject

### public float clientForce

### public float engineForce

### public float brakingForce

### public boolean isEnable

### public boolean acceleratorOn

### public boolean brakeOn

### public float speed

### public static CarController.GearInfo[] gears

### public final CarController.ClientControls clientControls

## Constructors

### public CarController(BaseVehicle vehicleObject)

**Parameters:**
- `BaseVehicle` `vehicleObject`

## Methods

### public CarController.GearInfo findGear(float speed)

**Parameters:**
- `float` `speed`

**Returns:** `CarController.GearInfo`

### public void accelerator(boolean apply)

**Parameters:**
- `boolean` `apply`

**Returns:** `void`

### public void brake(boolean apply)

**Parameters:**
- `boolean` `apply`

**Returns:** `void`

### public CarController.ClientControls getClientControls()

**Returns:** `CarController.ClientControls`

### public void update()

**Returns:** `void`

### public void updateTrailer()

**Returns:** `void`

### public float getVehicleSteering()

**Returns:** `float`

### public boolean isGas()

**Returns:** `boolean`

### public boolean isGasR()

**Returns:** `boolean`

### public boolean isBreak()

**Returns:** `boolean`

### public void control_NoControl()

**Returns:** `void`

### public void updateControls()

**Returns:** `void`

### public void park()

**Returns:** `void`

### public void checkShouldBeActive()

**Returns:** `void`

### public boolean isGasPedalPressed()

**Returns:** `boolean`

### public boolean isBrakePedalPressed()

**Returns:** `boolean`

### public void debug()

**Returns:** `void`

### public void drawRect(org.joml.Vector3f vec,
float x,
float y,
float w,
float h)

**Parameters:**
- `org.joml.Vector3f` `vec`
- `float` `x`
- `float` `y`
- `float` `w`
- `float` `h`

**Returns:** `void`

### public void drawRect(org.joml.Vector3f vec,
float x,
float y,
float w,
float h,
float r,
float g,
float b)

**Parameters:**
- `org.joml.Vector3f` `vec`
- `float` `x`
- `float` `y`
- `float` `w`
- `float` `h`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void drawCircle(float x,
float y,
float radius)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `radius`

**Returns:** `void`

### public void drawCircle(float x,
float y,
float radius,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `radius`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\CarController.html`*
