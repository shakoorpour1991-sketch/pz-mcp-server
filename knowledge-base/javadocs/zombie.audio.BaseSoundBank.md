---
title: zombie.audio.BaseSoundBank
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.BaseSoundBank

`public abstract class BaseSoundBank extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.BaseSoundBank

## Fields

### public static BaseSoundBank instance

## Constructors

### public BaseSoundBank()

## Methods

### public abstract void addVoice(String alias,
String sound,
float priority)

**Parameters:**
- `String` `alias`
- `String` `sound`
- `float` `priority`

**Returns:** `void`

### public abstract void addFootstep(String alias,
String grass,
String wood,
String concrete,
String upstairs)

**Parameters:**
- `String` `alias`
- `String` `grass`
- `String` `wood`
- `String` `concrete`
- `String` `upstairs`

**Returns:** `void`

### public abstract fmod.fmod.FMODVoice getVoice(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `fmod.fmod.FMODVoice`

### public abstract fmod.fmod.FMODFootstep getFootstep(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `fmod.fmod.FMODFootstep`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\BaseSoundBank.html`*
