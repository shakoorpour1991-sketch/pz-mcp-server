---
title: zombie.characters.ILuaGameCharacterDamage
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters
---

# zombie.characters.ILuaGameCharacterDamage

`public interface ILuaGameCharacterDamage`

**Kind:** interface · **Package:** zombie.characters

## Description

ILuaGameCharacterDamage
Provides the functions expected by LUA when dealing with objects of this type.

## Methods

### BodyDamage getBodyDamage()

**Returns:** `BodyDamage`

### BodyDamage getBodyDamageRemote()

**Returns:** `BodyDamage`

### float getHealth()

**Returns:** `float`

### void setHealth(float Health)

**Parameters:**
- `float` `Health`

**Returns:** `void`

### float Hit(BaseVehicle var1,
float var2,
boolean var3,
float var4,
float var5,
boolean var6,
float var7,
float var8)

**Parameters:**
- `BaseVehicle` `var1`
- `float` `var2`
- `boolean` `var3`
- `float` `var4`
- `float` `var5`
- `boolean` `var6`
- `float` `var7`
- `float` `var8`

**Returns:** `float`

### float Hit(HandWeapon weapon,
IsoGameCharacter wielder,
float damageSplit,
boolean bIgnoreDamage,
float modDelta)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `float` `damageSplit`
- `boolean` `bIgnoreDamage`
- `float` `modDelta`

**Returns:** `float`

### float Hit(HandWeapon weapon,
IsoGameCharacter wielder,
float damageSplit,
boolean bIgnoreDamage,
float modDelta,
boolean bRemote)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `float` `damageSplit`
- `boolean` `bIgnoreDamage`
- `float` `modDelta`
- `boolean` `bRemote`

**Returns:** `float`

### boolean isOnFire()

**Returns:** `boolean`

### void StopBurning()

**Returns:** `void`

### int getLastHitCount()

**Returns:** `int`

### void setLastHitCount(int hitCount)

**Parameters:**
- `int` `hitCount`

**Returns:** `void`

### boolean addHole(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `boolean`

### void addBlood(BloodBodyPartType part,
boolean scratched,
boolean bitten,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `boolean` `scratched`
- `boolean` `bitten`
- `boolean` `allLayers`

**Returns:** `void`

### boolean isBumped()

**Returns:** `boolean`

### String getBumpType()

**Returns:** `String`

### boolean isOnDeathDone()

**Returns:** `boolean`

### void setOnDeathDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### boolean isOnKillDone()

**Returns:** `boolean`

### void setOnKillDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### boolean isDeathDragDown()

**Returns:** `boolean`

### void setDeathDragDown(boolean dragDown)

**Parameters:**
- `boolean` `dragDown`

**Returns:** `void`

### boolean isPlayingDeathSound()

**Returns:** `boolean`

### void setPlayingDeathSound(boolean playing)

**Parameters:**
- `boolean` `playing`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ILuaGameCharacterDamage.html`*
