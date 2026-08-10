---
title: zombie.core.znet.ServerBrowser
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.ServerBrowser

`public class ServerBrowser extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.ServerBrowser

## Constructors

### public ServerBrowser()

## Methods

### public static boolean init()

**Returns:** `boolean`

### public static void shutdown()

**Returns:** `void`

### public static void RefreshInternetServers()

**Returns:** `void`

### public static int GetServerCount()

**Returns:** `int`

### public static GameServerDetails GetServerDetails(int serverIndex)

**Parameters:**
- `int` `serverIndex`

**Returns:** `GameServerDetails`

### public static void Release()

**Returns:** `void`

### public static boolean IsRefreshing()

**Returns:** `boolean`

### public static boolean QueryServer(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `boolean`

### public static GameServerDetails GetServerDetails(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `GameServerDetails`

### public static void ReleaseServerQuery(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `void`

### public static List<GameServerDetails> GetServerList()

**Returns:** `List<GameServerDetails>`

### public static GameServerDetails GetServerDetailsSync(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `GameServerDetails`

### public static boolean RequestServerRules(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `boolean`

### public static void setSuppressLuaCallbacks(boolean bSupress)

**Parameters:**
- `boolean` `bSupress`

**Returns:** `void`

### public static void setCallbackInterface(IServerBrowserCallback callbackInterface)

**Parameters:**
- `IServerBrowserCallback` `callbackInterface`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\ServerBrowser.html`*
