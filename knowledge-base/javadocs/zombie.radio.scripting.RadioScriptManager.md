---
title: zombie.radio.scripting.RadioScriptManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.scripting
---

# zombie.radio.scripting.RadioScriptManager

`public final class RadioScriptManager extends Object`

**Kind:** class · **Package:** zombie.radio.scripting

## Inheritance
- java.lang.Object
- zombie.radio.scripting.RadioScriptManager

## Description

Turbo

## Methods

### public static boolean hasInstance()

**Returns:** `boolean`

### public static RadioScriptManager getInstance()

**Returns:** `RadioScriptManager`

### public void init(int savedWorldVersion)

**Parameters:**
- `int` `savedWorldVersion`

**Returns:** `void`

### public Map<Integer, RadioChannel> getChannels()

**Returns:** `Map<Integer, RadioChannel>`

### public ArrayList<RadioChannel> getChannelsList()

**Returns:** `ArrayList<RadioChannel>`

### public RadioChannel getRadioChannel(String uuid)

**Parameters:**
- `String` `uuid`

**Returns:** `RadioChannel`

### public void simulateScriptsUntil(int days,
boolean force)

**Parameters:**
- `int` `days`
- `boolean` `force`

**Returns:** `void`

### public void simulateChannelUntil(int frequency,
int days,
boolean force)

**Parameters:**
- `int` `frequency`
- `int` `days`
- `boolean` `force`

**Returns:** `void`

### public int getCurrentTimeStamp()

**Returns:** `int`

### public void PlayerListensChannel(int chanfrequency,
boolean mode,
boolean sourceIsTV)

**Parameters:**
- `int` `chanfrequency`
- `boolean` `mode`
- `boolean` `sourceIsTV`

**Returns:** `void`

### public void AddChannel(RadioChannel channel,
boolean overwrite)

**Parameters:**
- `RadioChannel` `channel`
- `boolean` `overwrite`

**Returns:** `void`

### public void RemoveChannel(int frequency)

**Parameters:**
- `int` `frequency`

**Returns:** `void`

### public void UpdateScripts(int day,
int hour,
int mins)

**Parameters:**
- `int` `day`
- `int` `hour`
- `int` `mins`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void Save(Writer w)
throws IOException

**Parameters:**
- `Writer` `w`

**Returns:** `void`

### public void Load(List<String> channelLines)
throws IOException,
NumberFormatException

**Parameters:**
- `List<String>` `channelLines`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\scripting\RadioScriptManager.html`*
