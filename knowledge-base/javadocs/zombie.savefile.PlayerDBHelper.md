---
title: zombie.savefile.PlayerDBHelper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.savefile
---

# zombie.savefile.PlayerDBHelper

`public final class PlayerDBHelper extends Object`

**Kind:** class · **Package:** zombie.savefile

## Inheritance
- java.lang.Object
- zombie.savefile.PlayerDBHelper

## Constructors

### public PlayerDBHelper()

## Methods

### public static Connection create()

**Returns:** `Connection`

### public static void rollback(Connection conn)

**Parameters:**
- `Connection` `conn`

**Returns:** `void`

### public static boolean isPlayerAlive(String saveDir,
int playerSqlId)

**Parameters:**
- `String` `saveDir`
- `int` `playerSqlId`

**Returns:** `boolean`

### public static ArrayList<Object> getPlayers(String saveDir)
throws SQLException

**Parameters:**
- `String` `saveDir`

**Returns:** `ArrayList<Object>`

### public static boolean containsNetworkPlayer(String saveDir,
String name,
String world)
throws SQLException

**Parameters:**
- `String` `saveDir`
- `String` `name`
- `String` `world`

**Returns:** `boolean`

### public static void removePlayer(String saveDir,
String name,
String world)
throws SQLException

**Parameters:**
- `String` `saveDir`
- `String` `name`
- `String` `world`

**Returns:** `void`

### public static void setPlayer1(String saveDir,
int sqlID)
throws SQLException

**Parameters:**
- `String` `saveDir`
- `int` `sqlID`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\savefile\PlayerDBHelper.html`*
