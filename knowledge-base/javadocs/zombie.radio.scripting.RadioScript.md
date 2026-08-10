---
title: zombie.radio.scripting.RadioScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.scripting
---

# zombie.radio.scripting.RadioScript

`public final class RadioScript extends Object`

**Kind:** class · **Package:** zombie.radio.scripting

## Inheritance
- java.lang.Object
- zombie.radio.scripting.RadioScript

## Description

Turbo

## Constructors

### public RadioScript(String n,
int loopmin,
int loopmax)

**Parameters:**
- `String` `n`
- `int` `loopmin`
- `int` `loopmax`

### public RadioScript(String n,
int loopmin,
int loopmax,
String guid)

**Parameters:**
- `String` `n`
- `int` `loopmin`
- `int` `loopmax`
- `String` `guid`

## Methods

### public String GetGUID()

**Returns:** `String`

### public String GetName()

**Returns:** `String`

### public int getStartDayStamp()

**Returns:** `int`

### public int getStartDay()

**Returns:** `int`

### public int getLoopMin()

**Returns:** `int`

### public int getLoopMax()

**Returns:** `int`

### public RadioBroadCast getCurrentBroadcast()

**Returns:** `RadioBroadCast`

### public ArrayList<RadioBroadCast> getBroadcastList()

**Returns:** `ArrayList<RadioBroadCast>`

### public void clearExitOptions()

**Returns:** `void`

### public void setStartDayStamp(int day)

**Parameters:**
- `int` `day`

**Returns:** `void`

### public RadioBroadCast getValidAirBroadcast()

**Returns:** `RadioBroadCast`

### public void Reset()

**Returns:** `void`

### public RadioBroadCast getBroadcastWithID(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `RadioBroadCast`

### public boolean UpdateScript(int timeStamp)

**Parameters:**
- `int` `timeStamp`

**Returns:** `boolean`

### public RadioScript.ExitOption getNextScript()

**Returns:** `RadioScript.ExitOption`

### public void AddBroadcast(RadioBroadCast broadcast)

**Parameters:**
- `RadioBroadCast` `broadcast`

**Returns:** `void`

### public void AddBroadcast(RadioBroadCast broadcast,
boolean ignoreTimestamps)

**Parameters:**
- `RadioBroadCast` `broadcast`
- `boolean` `ignoreTimestamps`

**Returns:** `void`

### public void AddExitOption(String scriptname,
int chance,
int startdelay)

**Parameters:**
- `String` `scriptname`
- `int` `chance`
- `int` `startdelay`

**Returns:** `void`

### public RadioBroadCast getValidAirBroadcastDebug()

**Returns:** `RadioBroadCast`

### public ArrayList<RadioScript.ExitOption> getExitOptions()

**Returns:** `ArrayList<RadioScript.ExitOption>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\scripting\RadioScript.html`*
