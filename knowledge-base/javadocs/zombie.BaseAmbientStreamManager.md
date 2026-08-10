---
title: zombie.BaseAmbientStreamManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.BaseAmbientStreamManager

`public abstract class BaseAmbientStreamManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.BaseAmbientStreamManager

## Constructors

### public BaseAmbientStreamManager()

## Methods

### public abstract void stop()

**Returns:** `void`

### public abstract void doAlarm(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

### public abstract void doGunEvent()

**Returns:** `void`

### public abstract void handleThunderEvent(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `void`

### public abstract void init()

**Returns:** `void`

### public abstract void addBlend(String name,
float vol,
boolean bIndoors,
boolean bRain,
boolean bNight,
boolean bDay)

**Parameters:**
- `String` `name`
- `float` `vol`
- `boolean` `bIndoors`
- `boolean` `bRain`
- `boolean` `bNight`
- `boolean` `bDay`

**Returns:** `void`

### public abstract void doOneShotAmbients()

**Returns:** `void`

### public abstract void update()

**Returns:** `void`

### public abstract void addAmbient(String name,
int x,
int y,
int radius,
float volume)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `radius`
- `float` `volume`

**Returns:** `void`

### public abstract void addAmbientEmitter(float x,
float y,
int z,
String name)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `String` `name`

**Returns:** `void`

### public abstract void addDaytimeAmbientEmitter(float x,
float y,
int z,
String name)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `String` `name`

**Returns:** `void`

### public abstract void save(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `void`

### public abstract void load(ByteBuffer arg0,
int arg1)

**Parameters:**
- `ByteBuffer` `arg0`
- `int` `arg1`

**Returns:** `void`

### public abstract void checkHaveElectricity()

**Returns:** `void`

### public abstract boolean isParameterInsideTrue()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\BaseAmbientStreamManager.html`*
