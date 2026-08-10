---
title: zombie.radio.devices.DevicePresets
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.devices
---

# zombie.radio.devices.DevicePresets

`public final class DevicePresets extends Object`

**Kind:** class · **Package:** zombie.radio.devices

## Inheritance
- java.lang.Object
- zombie.radio.devices.DevicePresets

## Description

Turrubo

## Constructors

### public DevicePresets()

### public DevicePresets(DevicePresets other)

**Parameters:**
- `DevicePresets` `other`

## Methods

### public se.krka.kahlua.vm.KahluaTable getPresetsLua()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public ArrayList<PresetEntry> getPresets()

**Returns:** `ArrayList<PresetEntry>`

### public void setPresets(ArrayList<PresetEntry> p)

**Parameters:**
- `ArrayList<PresetEntry>` `p`

**Returns:** `void`

### public int getMaxPresets()

**Returns:** `int`

### public void setMaxPresets(int m)

**Parameters:**
- `int` `m`

**Returns:** `void`

### public void addPreset(String name,
int frequency)

**Parameters:**
- `String` `name`
- `int` `frequency`

**Returns:** `void`

### public void removePreset(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public String getPresetName(int id)

**Parameters:**
- `int` `id`

**Returns:** `String`

### public int getPresetFreq(int id)

**Parameters:**
- `int` `id`

**Returns:** `int`

### public void setPresetName(int id,
String name)

**Parameters:**
- `int` `id`
- `String` `name`

**Returns:** `void`

### public void setPresetFreq(int id,
int frequency)

**Parameters:**
- `int` `id`
- `int` `frequency`

**Returns:** `void`

### public void setPreset(int id,
String name,
int frequency)

**Parameters:**
- `int` `id`
- `String` `name`
- `int` `frequency`

**Returns:** `void`

### public void clearPresets()

**Returns:** `void`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `net`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\devices\DevicePresets.html`*
