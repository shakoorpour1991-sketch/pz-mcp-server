---
title: zombie.savefile.ServerPlayerDB
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.savefile
---

# zombie.savefile.ServerPlayerDB

`public final class ServerPlayerDB extends Object`

**Kind:** class · **Package:** zombie.savefile

## Inheritance
- java.lang.Object
- zombie.savefile.ServerPlayerDB

## Fields

### public Connection conn

## Constructors

### public ServerPlayerDB()

## Methods

### public static void setAllow(boolean en)

**Parameters:**
- `boolean` `en`

**Returns:** `void`

### public static boolean isAllow()

**Returns:** `boolean`

### public static ServerPlayerDB getInstance()

**Returns:** `ServerPlayerDB`

### public static boolean isAvailable()

**Returns:** `boolean`

### public void close()

**Returns:** `void`

### public void process()

**Returns:** `void`

### @Deprecated
public void serverUpdateNetworkCharacter(ByteBuffer bb,
UdpConnection connection)

> ⚠️ **Deprecated**

**Parameters:**
- `ByteBuffer` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public void save()

**Returns:** `void`

### public void saveFinishWait()

**Returns:** `void`

### public void serverUpdateNetworkCharacter(IsoPlayer player,
int playerIndex,
UdpConnection connection)

**Parameters:**
- `IsoPlayer` `player`
- `int` `playerIndex`
- `UdpConnection` `connection`

**Returns:** `void`

### public void serverConvertNetworkCharacter(String username,
String steamIdStr)

**Parameters:**
- `String` `username`
- `String` `steamIdStr`

**Returns:** `void`

### public IsoPlayer serverLoadNetworkCharacter(int playerIndex,
String idStr)

**Parameters:**
- `int` `playerIndex`
- `String` `idStr`

**Returns:** `IsoPlayer`

### public String getNetworkUserSteamID(String saveDir,
String name,
String world)
throws SQLException

**Parameters:**
- `String` `saveDir`
- `String` `name`
- `String` `world`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\savefile\ServerPlayerDB.html`*
