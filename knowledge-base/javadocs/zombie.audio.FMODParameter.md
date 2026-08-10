---
title: zombie.audio.FMODParameter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.FMODParameter

`public abstract class FMODParameter extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.FMODParameter

## Constructors

### public FMODParameter(String name)

**Parameters:**
- `String` `name`

## Methods

### public String getName()

**Returns:** `String`

### public fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION getParameterDescription()

**Returns:** `fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION`

### public fmod.fmod.FMOD_STUDIO_PARAMETER_ID getParameterID()

**Returns:** `fmod.fmod.FMOD_STUDIO_PARAMETER_ID`

### public float getCurrentValue()

**Returns:** `float`

### public void update()

**Returns:** `void`

### public void resetToDefault()

**Returns:** `void`

### public abstract float calculateCurrentValue()

**Returns:** `float`

### public abstract void setCurrentValue(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public abstract void startEventInstance(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `void`

### public abstract void stopEventInstance(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\FMODParameter.html`*
