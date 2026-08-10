---
title: zombie.iso.weather.ThunderStorm
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.ThunderStorm

`public class ThunderStorm extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.ThunderStorm

## Description

TurboTuTone.

## Fields

### public static int mapMinX

### public static int mapMinY

### public static int mapMaxX

### public static int mapMaxY

## Constructors

### public ThunderStorm(ClimateManager climmgr)

**Parameters:**
- `ClimateManager` `climmgr`

## Methods

### public ArrayList<ThunderStorm.ThunderCloud> getClouds()

**Returns:** `ArrayList<ThunderStorm.ThunderCloud>`

### public boolean HasActiveThunderClouds()

**Returns:** `boolean`

### public void noise(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public void stopAllClouds()

**Returns:** `void`

### public void stopCloud(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public static int getMapDiagonal()

**Returns:** `int`

### public void startThunderCloud(float str,
float angle,
float radius,
float eventFreq,
float thunderRatio,
double duration,
boolean targetRandomPlayer)

**Parameters:**
- `float` `str`
- `float` `angle`
- `float` `radius`
- `float` `eventFreq`
- `float` `thunderRatio`
- `double` `duration`
- `boolean` `targetRandomPlayer`

**Returns:** `void`

### public ThunderStorm.ThunderCloud startThunderCloud(float str,
float angle,
float radius,
float eventFreq,
float thunderRatio,
double duration,
boolean targetRandomPlayer,
float percentageOffset)

**Parameters:**
- `float` `str`
- `float` `angle`
- `float` `radius`
- `float` `eventFreq`
- `float` `thunderRatio`
- `double` `duration`
- `boolean` `targetRandomPlayer`
- `float` `percentageOffset`

**Returns:** `ThunderStorm.ThunderCloud`

### public void update(double currentTime)

**Parameters:**
- `double` `currentTime`

**Returns:** `void`

### public void applyLightningForPlayer(RenderSettings.PlayerRenderSettings renderSettings,
int plrIndex,
IsoPlayer player)

**Parameters:**
- `RenderSettings.PlayerRenderSettings` `renderSettings`
- `int` `plrIndex`
- `IsoPlayer` `player`

**Returns:** `void`

### public boolean isModifyingNight()

**Returns:** `boolean`

### public void triggerThunderEvent(int x,
int y,
boolean doStrike,
boolean doLightning,
boolean doRumble)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `doStrike`
- `boolean` `doLightning`
- `boolean` `doRumble`

**Returns:** `void`

### public void writeNetThunderEvent(ByteBufferWriter output)
throws IOException

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void readNetThunderEvent(ByteBufferReader input)
throws IOException

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

### public void enqueueThunderEvent(int x,
int y,
boolean doStrike,
boolean doLightning,
boolean doRumble)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `doStrike`
- `boolean` `doLightning`
- `boolean` `doRumble`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

IO

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void load(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\ThunderStorm.html`*
