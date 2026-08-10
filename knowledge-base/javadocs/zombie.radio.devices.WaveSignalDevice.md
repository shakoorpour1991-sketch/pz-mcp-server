---
title: zombie.radio.devices.WaveSignalDevice
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.radio.devices
---

# zombie.radio.devices.WaveSignalDevice

`public interface WaveSignalDevice`

**Kind:** interface · **Package:** zombie.radio.devices

## Methods

### DeviceData getDeviceData()

**Returns:** `DeviceData`

### void setDeviceData(DeviceData data)

**Parameters:**
- `DeviceData` `data`

**Returns:** `void`

### float getDelta()

**Returns:** `float`

### void setDelta(float d)

**Parameters:**
- `float` `d`

**Returns:** `void`

### IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### float getX()

**Returns:** `float`

### float getY()

**Returns:** `float`

### float getZ()

**Returns:** `float`

### void AddDeviceText(String line,
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

### boolean HasPlayerInRange()

**Returns:** `boolean`

### default void AddDeviceText(IsoPlayer player,
String line,
float r,
float g,
float b,
String guid,
String codes,
int distance)

**Parameters:**
- `IsoPlayer` `player`
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\devices\WaveSignalDevice.html`*
