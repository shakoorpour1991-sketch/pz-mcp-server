---
title: zombie.network.WarManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.WarManager

`public final class WarManager extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.WarManager

## Methods

### public static ArrayList<WarManager.War> getWarRelevent(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `ArrayList<WarManager.War>`

### public static WarManager.War getWarNearest(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `WarManager.War`

### public static WarManager.War getWar(int onlineID,
String attacker)

**Parameters:**
- `int` `onlineID`
- `String` `attacker`

**Returns:** `WarManager.War`

### public static boolean isWarClaimed(int onlineID)

**Parameters:**
- `int` `onlineID`

**Returns:** `boolean`

### public static boolean isWarClaimed(String username)

**Parameters:**
- `String` `username`

**Returns:** `boolean`

### public static boolean isWarStarted(int onlineID,
String username)

**Parameters:**
- `int` `onlineID`
- `String` `username`

**Returns:** `boolean`

### public static void removeWar(int onlineID,
String attacker)

**Parameters:**
- `int` `onlineID`
- `String` `attacker`

**Returns:** `void`

### public static void clear()

**Returns:** `void`

### public static void sendWarToPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void updateWar(int onlineId,
String attacker,
WarManager.State state,
long timestamp)

**Parameters:**
- `int` `onlineId`
- `String` `attacker`
- `WarManager.State` `state`
- `long` `timestamp`

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static long getWarDuration()

**Returns:** `long`

### public static long getStartDelay()

**Returns:** `long`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\WarManager.html`*
