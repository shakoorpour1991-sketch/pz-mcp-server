---
title: zombie.savefile.PlayerDB
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.savefile
---

# zombie.savefile.PlayerDB

`public final class PlayerDB extends Object`

**Kind:** class · **Package:** zombie.savefile

## Inheritance
- java.lang.Object
- zombie.savefile.PlayerDB

## Fields

### public static final int INVALID_ID

### public boolean canSavePlayers

## Constructors

### public PlayerDB()

## Methods

### public static PlayerDB getInstance()

**Returns:** `PlayerDB`

### public static void setAllow(boolean en)

**Parameters:**
- `boolean` `en`

**Returns:** `void`

### public static boolean isAllow()

**Returns:** `boolean`

### public static boolean isAvailable()

**Returns:** `boolean`

### public void close()

**Returns:** `void`

### public void updateMain()

**Returns:** `void`

### public void updateWorldStreamer()

**Returns:** `void`

### public void savePlayers()

**Returns:** `void`

### public void saveLocalPlayersForce()

**Returns:** `void`

### public void importPlayersFromVehiclesDB()

**Returns:** `void`

### public void uploadLocalPlayers2DB()

**Returns:** `void`

### public boolean loadLocalPlayer(int sqlId)

**Parameters:**
- `int` `sqlId`

**Returns:** `boolean`

### public ArrayList<IsoPlayer> getAllLocalPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public boolean loadLocalPlayerInfo(int sqlId)

**Parameters:**
- `int` `sqlId`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\savefile\PlayerDB.html`*
