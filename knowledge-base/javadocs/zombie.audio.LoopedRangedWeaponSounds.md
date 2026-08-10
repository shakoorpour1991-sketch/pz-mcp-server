---
title: zombie.audio.LoopedRangedWeaponSounds
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.LoopedRangedWeaponSounds

`public final class LoopedRangedWeaponSounds extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.LoopedRangedWeaponSounds

## Fields

### public static final LoopedRangedWeaponSounds INSTANCE

## Constructors

### public LoopedRangedWeaponSounds()

## Methods

### public void startAttackLoopSound(Object owner,
String soundName)

**Parameters:**
- `Object` `owner`
- `String` `soundName`

**Returns:** `void`

### public void stopAttackLoopSound(Object owner,
boolean cancelPrevious)

**Parameters:**
- `Object` `owner`
- `boolean` `cancelPrevious`

**Returns:** `void`

### public boolean isPlaying(Object owner)

**Parameters:**
- `Object` `owner`

**Returns:** `boolean`

### public boolean isPlaying(Object owner,
String soundName)

**Parameters:**
- `Object` `owner`
- `String` `soundName`

**Returns:** `boolean`

### public void setPosition(Object owner,
float x,
float y,
float z)

**Parameters:**
- `Object` `owner`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setParameters(Object owner,
float firearmInside,
float firearmRoomSize)

**Parameters:**
- `Object` `owner`
- `float` `firearmInside`
- `float` `firearmRoomSize`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public Object getOwnerObjectForRemotePlayer(short playerId)

**Parameters:**
- `short` `playerId`

**Returns:** `Object`

### public void disconnectPlayer(short playerId)

**Parameters:**
- `short` `playerId`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\LoopedRangedWeaponSounds.html`*
