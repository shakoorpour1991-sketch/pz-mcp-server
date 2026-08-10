---
title: zombie.core.znet.SteamGameServer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.SteamGameServer

`public class SteamGameServer extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.SteamGameServer

## Fields

### public static final int STEAM_SERVERS_DISCONNECTED

### public static final int STEAM_SERVERS_CONNECTED

### public static final int STEAM_SERVERS_CONNECTFAILURE

## Constructors

### public SteamGameServer()

## Methods

### public static boolean Init(String var0,
int var1,
int var2,
int var3,
String var4)

**Parameters:**
- `String` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `String` `var4`

**Returns:** `boolean`

### public static void SetProduct(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetGameDescription(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetModDir(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetDedicatedServer(boolean var0)

**Parameters:**
- `boolean` `var0`

**Returns:** `void`

### public static void LogOnAnonymous()

**Returns:** `void`

### public static void EnableHeartBeats(boolean var0)

**Parameters:**
- `boolean` `var0`

**Returns:** `void`

### public static void SetMaxPlayerCount(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void SetServerName(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetMapName(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetKeyValue(String var0,
String var1)

**Parameters:**
- `String` `var0`
- `String` `var1`

**Returns:** `void`

### public static void SetGameTags(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetRegion(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static boolean BUpdateUserData(long var0,
String var2,
int var3)

**Parameters:**
- `long` `var0`
- `String` `var2`
- `int` `var3`

**Returns:** `boolean`

### public static int GetSteamServersConnectState()

**Returns:** `int`

### public static long GetSteamID()

**Returns:** `long`

### public static void AddPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void RemovePlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void UpdatePlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\SteamGameServer.html`*
