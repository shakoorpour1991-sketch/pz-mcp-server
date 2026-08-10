---
title: zombie.savefile.ClientPlayerDB
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.savefile
---

# zombie.savefile.ClientPlayerDB

`public final class ClientPlayerDB extends Object`

**Kind:** class · **Package:** zombie.savefile

## Inheritance
- java.lang.Object
- zombie.savefile.ClientPlayerDB

## Fields

### public ClientPlayerDB.NetworkCharacterProfile networkProfile

## Constructors

### public ClientPlayerDB()

## Methods

### public static void setAllow(boolean en)

**Parameters:**
- `boolean` `en`

**Returns:** `void`

### public static boolean isAllow()

**Returns:** `boolean`

### public static ClientPlayerDB getInstance()

**Returns:** `ClientPlayerDB`

### public static boolean isAvailable()

**Returns:** `boolean`

### public void close()

**Returns:** `void`

### public ArrayList<IsoPlayer> getAllNetworkPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public boolean isAliveMainNetworkPlayer()

**Returns:** `boolean`

### public boolean clientLoadNetworkPlayer()

**Returns:** `boolean`

### public byte[] getClientLoadNetworkPlayerData(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `byte[]`

### public boolean loadNetworkPlayer()

**Returns:** `boolean`

### public boolean loadNetworkPlayerInfo(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void forgetPlayer(int serverPlayerIndex)

**Parameters:**
- `int` `serverPlayerIndex`

**Returns:** `void`

### public int getNextServerPlayerIndex()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\savefile\ClientPlayerDB.html`*
