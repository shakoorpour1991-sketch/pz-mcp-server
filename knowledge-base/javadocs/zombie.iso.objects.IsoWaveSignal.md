---
title: zombie.iso.objects.IsoWaveSignal
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoWaveSignal

`public class IsoWaveSignal extends IsoObject implements WaveSignalDevice, ChatElementOwner, Talker`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoWaveSignal

## Description

Turbo

## Constructors

### public IsoWaveSignal(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoWaveSignal(IsoCell cell,
IsoGridSquare sq,
IsoSprite spr)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `spr`

## Methods

### public DeviceData cloneDeviceDataFromItem(String itemfull)

**Parameters:**
- `String` `itemfull`

**Returns:** `DeviceData`

### public boolean hasChatToDisplay()

**Returns:** `boolean`

### public boolean HasPlayerInRange()

**Returns:** `boolean`

### public float getDelta()

**Returns:** `float`

### public void setDelta(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public DeviceData getDeviceData()

**Returns:** `DeviceData`

### public void setDeviceData(DeviceData data)

**Parameters:**
- `DeviceData` `data`

**Returns:** `void`

### public boolean IsSpeaking()

**Returns:** `boolean`

### public String getTalkerType()

**Returns:** `String`

### public void setTalkerType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public String getSayLine()

**Returns:** `String`

### public void Say(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void AddDeviceText(String line,
float r,
float g,
float b,
String guid,
String codes,
int distance)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`

**Returns:** `void`

### public void AddDeviceText(String line,
int r,
int g,
int b,
String guid,
String codes,
int distance)

**Parameters:**
- `String` `line`
- `int` `r`
- `int` `g`
- `int` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`

**Returns:** `void`

### public void AddDeviceText(String line,
int r,
int g,
int b,
String guid,
String codes,
int distance,
boolean attractZombies)

**Parameters:**
- `String` `line`
- `int` `r`
- `int` `g`
- `int` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`
- `boolean` `attractZombies`

**Returns:** `void`

### public void AddDeviceText(String line,
float r,
float g,
float b,
String guid,
String codes,
int distance,
boolean attractZombies)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`
- `boolean` `attractZombies`

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void renderlastold2()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void removeFromSquare()

**Returns:** `void`

### public void saveState(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void loadState(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public ChatElement getChatElement()

**Returns:** `ChatElement`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoWaveSignal.html`*
