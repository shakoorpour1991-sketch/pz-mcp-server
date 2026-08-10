---
title: zombie.radio.scripting.RadioBroadCast
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.scripting
---

# zombie.radio.scripting.RadioBroadCast

`public final class RadioBroadCast extends Object`

**Kind:** class · **Package:** zombie.radio.scripting

## Inheritance
- java.lang.Object
- zombie.radio.scripting.RadioBroadCast

## Description

Turbo

## Constructors

### public RadioBroadCast(String id,
int startstamp,
int endstamp)

**Parameters:**
- `String` `id`
- `int` `startstamp`
- `int` `endstamp`

## Methods

### public String getID()

**Returns:** `String`

### public int getStartStamp()

**Returns:** `int`

### public int getEndStamp()

**Returns:** `int`

### public void resetLineCounter()

**Returns:** `void`

### public void resetLineCounter(boolean doChildren)

**Parameters:**
- `boolean` `doChildren`

**Returns:** `void`

### public void setPreSegment(RadioBroadCast broadCast)

**Parameters:**
- `RadioBroadCast` `broadCast`

**Returns:** `void`

### public void setPostSegment(RadioBroadCast broadCast)

**Parameters:**
- `RadioBroadCast` `broadCast`

**Returns:** `void`

### public RadioLine getNextLine()

**Returns:** `RadioLine`

### public RadioLine getNextLine(boolean doChildren)

**Parameters:**
- `boolean` `doChildren`

**Returns:** `RadioLine`

### public int getCurrentLineNumber()

**Returns:** `int`

### public void setCurrentLineNumber(int n)

**Parameters:**
- `int` `n`

**Returns:** `void`

### public RadioLine getCurrentLine()

**Returns:** `RadioLine`

### public String PeekNextLineText()

**Returns:** `String`

### public void AddRadioLine(RadioLine radioLine)

**Parameters:**
- `RadioLine` `radioLine`

**Returns:** `void`

### public ArrayList<RadioLine> getLines()

**Returns:** `ArrayList<RadioLine>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\scripting\RadioBroadCast.html`*
