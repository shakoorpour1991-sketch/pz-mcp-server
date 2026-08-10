---
title: zombie.iso.IsoLightSource
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoLightSource

`public class IsoLightSource extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoLightSource

## Fields

### public static int nextId

### public int id

### public int x

### public int y

### public int z

### public float r

### public float g

### public float b

### public float rJni

### public float gJni

### public float bJni

### public int radius

### public boolean active

### public boolean wasActive

### public boolean activeJni

### public int life

### public int startlife

### public IsoBuilding localToBuilding

### public boolean hydroPowered

### public ArrayList<IsoLightSwitch> switches

### public IsoChunk chunk

### public Object lightMap

## Constructors

### public IsoLightSource(int x,
int y,
int z,
float r,
float g,
float b,
int radius)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `radius`

### public IsoLightSource(int x,
int y,
int z,
float r,
float g,
float b,
int radius,
IsoBuilding building)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `radius`
- `IsoBuilding` `building`

### public IsoLightSource(int x,
int y,
int z,
float r,
float g,
float b,
int radius,
int life)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `radius`
- `int` `life`

## Methods

### @Deprecated
public void update()

> ⚠️ **Deprecated**

**Returns:** `void`

### public int getX()

**Returns:** `int`

### public void setX(int x)

**Parameters:**
- `int` `x` — the x to set

**Returns:** `void`

### public int getY()

**Returns:** `int`

### public void setY(int y)

**Parameters:**
- `int` `y` — the y to set

**Returns:** `void`

### public int getZ()

**Returns:** `int`

### public void setZ(int z)

**Parameters:**
- `int` `z` — the z to set

**Returns:** `void`

### public float getR()

**Returns:** `float`

### public void setR(float r)

**Parameters:**
- `float` `r` — the r to set

**Returns:** `void`

### public float getG()

**Returns:** `float`

### public void setG(float g)

**Parameters:**
- `float` `g` — the g to set

**Returns:** `void`

### public float getB()

**Returns:** `float`

### public void setB(float b)

**Parameters:**
- `float` `b` — the b to set

**Returns:** `void`

### public int getRadius()

**Returns:** `int`

### public void setRadius(int radius)

**Parameters:**
- `int` `radius` — the radius to set

**Returns:** `void`

### public boolean isActive()

**Returns:** `boolean`

### public void setActive(boolean bActive)

**Parameters:**
- `boolean` `bActive` — the bActive to set

**Returns:** `void`

### public boolean wasActive()

**Returns:** `boolean`

### public void setWasActive(boolean bWasActive)

**Parameters:**
- `boolean` `bWasActive` — the bWasActive to set

**Returns:** `void`

### public ArrayList<IsoLightSwitch> getSwitches()

**Returns:** `ArrayList<IsoLightSwitch>`

### public void setSwitches(ArrayList<IsoLightSwitch> switches)

**Parameters:**
- `ArrayList<IsoLightSwitch>` `switches` — the switches to set

**Returns:** `void`

### public void clearInfluence()

**Returns:** `void`

### public boolean isInBounds(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `boolean`

### public boolean isInBounds()

**Returns:** `boolean`

### public boolean isHydroPowered()

**Returns:** `boolean`

### public IsoBuilding getLocalToBuilding()

**Returns:** `IsoBuilding`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoLightSource.html`*
