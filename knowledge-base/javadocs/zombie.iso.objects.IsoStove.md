---
title: zombie.iso.objects.IsoStove
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoStove

`public class IsoStove extends IsoObject implements Activatable`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoStove

## Fields

### public static final float LitTemperature

### public static final float UnlitTemperature

## Constructors

### public IsoStove(IsoCell cell,
IsoGridSquare sq,
IsoSprite gid)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `gid`

### public IsoStove(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public String getObjectName()

**Returns:** `String`

### public boolean Activated()

**Returns:** `boolean`

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

### public void Toggle()

Turn on or off the stove, if no electricity it won't work

**Returns:** `void`

### public void PlayToggleSound()

**Returns:** `void`

### public void sync()

**Returns:** `void`

### public String getActivatableType()

**Returns:** `String`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObject(boolean bRemote,
byte val,
UdpConnection source,
ByteBufferReader bb)

**Parameters:**
- `boolean` `bRemote`
- `byte` `val`
- `UdpConnection` `source`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void setActivated(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setTimer(int seconds)

**Parameters:**
- `int` `seconds`

**Returns:** `void`

### public int getTimer()

**Returns:** `int`

### public float getMaxTemperature()

**Returns:** `float`

### public void setMaxTemperature(float maxTemperature)

**Parameters:**
- `float` `maxTemperature`

**Returns:** `void`

### public boolean isMicrowave()

**Returns:** `boolean`

### public int isRunningFor()

**Returns:** `int`

### public float getCurrentTemperature()

**Returns:** `float`

### public boolean isTemperatureChanging()

**Returns:** `boolean`

### public boolean isBroken()

**Returns:** `boolean`

### public void setBroken(boolean broken)

**Parameters:**
- `boolean` `broken`

**Returns:** `void`

### public void syncSpriteGridObjects(boolean toggle,
boolean network)

**Parameters:**
- `boolean` `toggle`
- `boolean` `network`

**Returns:** `void`

### public boolean shouldShowOnOverlay()

**Returns:** `boolean`

### public void afterRotated()

**Returns:** `void`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getGeneratorPowerConsumption()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoStove.html`*
