---
title: zombie.vehicles.VehicleLight
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleLight

`public final class VehicleLight extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleLight

## Fields

### public boolean active

### public final org.joml.Vector3f offset

### public float dist

### public float intensity

### public float dot

### public int focusing

### public float r

### public float g

### public float b

## Constructors

### public VehicleLight()

## Methods

### public boolean getActive()

**Returns:** `boolean`

### public void setActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### @Deprecated
public int getFocusing()

> ⚠️ **Deprecated**

**Returns:** `int`

### public float getIntensity()

**Returns:** `float`

### @Deprecated
public float getDistanization()

> ⚠️ **Deprecated**

**Returns:** `float`

### @Deprecated
public boolean canFocusingUp()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public boolean canFocusingDown()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public void setFocusingUp()

> ⚠️ **Deprecated**

**Returns:** `void`

### @Deprecated
public void setFocusingDown()

> ⚠️ **Deprecated**

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleLight.html`*
