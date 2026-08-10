---
title: zombie.AmbientStreamManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.AmbientStreamManager

`public final class AmbientStreamManager extends BaseAmbientStreamManager`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.BaseAmbientStreamManager
- zombie.AmbientStreamManager

## Fields

### public static int oneInAmbienceChance

### public static int maxAmbientCount

### public static float maxRange

### public final ArrayList<Alarm> alarmList

### public static BaseAmbientStreamManager instance

### public final ArrayList<AmbientStreamManager.Ambient> ambient

### public final ArrayList<AmbientStreamManager.WorldSoundEmitter> worldEmitters

### public final ArrayDeque<AmbientStreamManager.WorldSoundEmitter> freeEmitters

### public final ArrayList<AmbientStreamManager.AmbientLoop> allAmbient

### public final ArrayList<AmbientStreamManager.AmbientLoop> nightAmbient

### public final ArrayList<AmbientStreamManager.AmbientLoop> dayAmbient

### public final ArrayList<AmbientStreamManager.AmbientLoop> rainAmbient

### public final ArrayList<AmbientStreamManager.AmbientLoop> indoorAmbient

### public final ArrayList<AmbientStreamManager.AmbientLoop> outdoorAmbient

### public final ArrayList<AmbientStreamManager.AmbientLoop> windAmbient

### public boolean initialized

## Constructors

### public AmbientStreamManager()

## Methods

### public static BaseAmbientStreamManager getInstance()

**Returns:** `BaseAmbientStreamManager`

### public void update()

**Returns:** `void`

### public void doOneShotAmbients()

**Returns:** `void`

### public void addRandomAmbient()

**Returns:** `void`

### public void addRandomAmbient(boolean force)

**Parameters:**
- `boolean` `force`

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

### public void init()

**Returns:** `void`

### public void doGunEvent()

**Returns:** `void`

### public void doAlarm(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `void`

### public void handleThunderEvent(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void stop()

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

### public void checkHaveElectricity()

**Returns:** `void`

### public boolean isParameterInsideTrue()

**Returns:** `boolean`

### public static BuildingDef getNearestBuilding(float px,
float py)

**Parameters:**
- `float` `px`
- `float` `py`

**Returns:** `BuildingDef`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\AmbientStreamManager.html`*
