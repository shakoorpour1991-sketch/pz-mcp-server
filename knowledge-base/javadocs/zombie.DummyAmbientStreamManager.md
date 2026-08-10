---
title: zombie.DummyAmbientStreamManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.DummyAmbientStreamManager

`public final class DummyAmbientStreamManager extends BaseAmbientStreamManager`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.BaseAmbientStreamManager
- zombie.DummyAmbientStreamManager

## Constructors

### public DummyAmbientStreamManager()

## Methods

### public void stop()

**Returns:** `void`

### public void doAlarm(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

### public void doGunEvent()

**Returns:** `void`

### public void handleThunderEvent(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void addBlend(String name,
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

### public void doOneShotAmbients()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void addAmbient(String name,
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

### public void addAmbientEmitter(float x,
float y,
int z,
String name)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `String` `name`

**Returns:** `void`

### public void addDaytimeAmbientEmitter(float x,
float y,
int z,
String name)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `String` `name`

**Returns:** `void`

### public void save(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void load(ByteBuffer bb,
int worldVersion)

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`

**Returns:** `void`

### public void checkHaveElectricity()

**Returns:** `void`

### public boolean isParameterInsideTrue()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\DummyAmbientStreamManager.html`*
