---
title: zombie.worldMap.WorldMapRemotePlayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapRemotePlayer

`public final class WorldMapRemotePlayer extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMapRemotePlayer

## Constructors

### public WorldMapRemotePlayer(short onlineId)

**Parameters:**
- `short` `onlineId`

## Methods

### public void setPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void setFullData(short changeCount,
String username,
String forename,
String surname,
String accessLevel,
int rolePower,
float x,
float y,
boolean invisible,
boolean disguised,
boolean seesInvisiblePlayers)

**Parameters:**
- `short` `changeCount`
- `String` `username`
- `String` `forename`
- `String` `surname`
- `String` `accessLevel`
- `int` `rolePower`
- `float` `x`
- `float` `y`
- `boolean` `invisible`
- `boolean` `disguised`
- `boolean` `seesInvisiblePlayers`

**Returns:** `void`

### public void setPosition(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public short getOnlineID()

**Returns:** `short`

### public String getForename()

**Returns:** `String`

### public String getSurname()

**Returns:** `String`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public short getChangeCount()

**Returns:** `short`

### public boolean isInvisible()

**Returns:** `boolean`

### public boolean isDisguised()

**Returns:** `boolean`

### public boolean hasFullData()

**Returns:** `boolean`

### public boolean canSeeInvisiblePlayer()

**Returns:** `boolean`

### public String getUsername(Boolean canShowFirstname)

**Parameters:**
- `Boolean` `canShowFirstname`

**Returns:** `String`

### public String getUsername()

**Returns:** `String`

### public String getAccessLevel()

**Returns:** `String`

### public String getAccessLevel2()

**Returns:** `String`

### public int getRolePower()

**Returns:** `int`

### public boolean isAccessLevel(String level)

**Parameters:**
- `String` `level`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapRemotePlayer.html`*
