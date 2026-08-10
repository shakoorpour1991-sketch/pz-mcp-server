---
title: zombie.radio.scripting.RadioChannel
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.scripting
---

# zombie.radio.scripting.RadioChannel

`public class RadioChannel extends Object`

**Kind:** class · **Package:** zombie.radio.scripting

## Inheritance
- java.lang.Object
- zombie.radio.scripting.RadioChannel

## Description

Turbo

## Constructors

### public RadioChannel(String n,
int freq,
ChannelCategory c)

**Parameters:**
- `String` `n`
- `int` `freq`
- `ChannelCategory` `c`

### public RadioChannel(String n,
int freq,
ChannelCategory c,
String guid)

**Parameters:**
- `String` `n`
- `int` `freq`
- `ChannelCategory` `c`
- `String` `guid`

## Methods

### public String getGUID()

**Returns:** `String`

### public int GetFrequency()

**Returns:** `int`

### public String GetName()

**Returns:** `String`

### public boolean IsTv()

**Returns:** `boolean`

### public ChannelCategory GetCategory()

**Returns:** `ChannelCategory`

### public RadioScript getCurrentScript()

**Returns:** `RadioScript`

### public RadioBroadCast getAiringBroadcast()

**Returns:** `RadioBroadCast`

### public String getLastAiredLine()

**Returns:** `String`

### public int getCurrentScriptLoop()

**Returns:** `int`

### public int getCurrentScriptMaxLoops()

**Returns:** `int`

### public String getLastBroadcastID()

**Returns:** `String`

### public RadioData getRadioData()

**Returns:** `RadioData`

### public void setRadioData(RadioData radioData)

**Parameters:**
- `RadioData` `radioData`

**Returns:** `void`

### public boolean isTimeSynced()

**Returns:** `boolean`

### public void setTimeSynced(boolean isTimeSynced)

**Parameters:**
- `boolean` `isTimeSynced`

**Returns:** `void`

### public boolean isVanilla()

**Returns:** `boolean`

### public void setLouisvilleObfuscate(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void LoadAiringBroadcast(String guid,
int line)

**Parameters:**
- `String` `guid`
- `int` `line`

**Returns:** `void`

### public void SetPlayerIsListening(boolean isListening)

**Parameters:**
- `boolean` `isListening`

**Returns:** `void`

### public boolean GetPlayerIsListening()

**Returns:** `boolean`

### public void setActiveScriptNull()

**Returns:** `void`

### public void setActiveScript(String scriptName,
int day)

**Parameters:**
- `String` `scriptName`
- `int` `day`

**Returns:** `void`

### public void setActiveScript(String scriptName,
int day,
int loop,
int maxloops)

**Parameters:**
- `String` `scriptName`
- `int` `day`
- `int` `loop`
- `int` `maxloops`

**Returns:** `void`

### public void UpdateScripts(int timestamp,
int day)

**Parameters:**
- `int` `timestamp`
- `int` `day`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void AddRadioScript(RadioScript script)

**Parameters:**
- `RadioScript` `script`

**Returns:** `void`

### public RadioScript getRadioScript(String script)

**Parameters:**
- `String` `script`

**Returns:** `RadioScript`

### public void setAiringBroadcast(RadioBroadCast bc)

**Parameters:**
- `RadioBroadCast` `bc`

**Returns:** `void`

### public float getAirCounterMultiplier()

**Returns:** `float`

### public void setAirCounterMultiplier(float airCounterMultiplier)

**Parameters:**
- `float` `airCounterMultiplier`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\scripting\RadioChannel.html`*
