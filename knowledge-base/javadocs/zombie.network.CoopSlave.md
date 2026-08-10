---
title: zombie.network.CoopSlave
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.CoopSlave

`public class CoopSlave extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.CoopSlave

## Fields

### public static CoopSlave instance

### public String hostUser

### public long hostSteamId

## Methods

### public static void init()
throws FileNotFoundException

**Returns:** `void`

### public static void initStreams()
throws FileNotFoundException

**Returns:** `void`

### public void notify(String notification)

**Parameters:**
- `String` `notification`

**Returns:** `void`

### public void sendStatus(String status)

**Parameters:**
- `String` `status`

**Returns:** `void`

### public static void status(String status)

**Parameters:**
- `String` `status`

**Returns:** `void`

### public void sendMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public void sendMessage(String tag,
String cookie,
String payload)

**Parameters:**
- `String` `tag`
- `String` `cookie`
- `String` `payload`

**Returns:** `void`

### public void sendExternalIPAddress(String cookie)

**Parameters:**
- `String` `cookie`

**Returns:** `void`

### public void sendSteamID(String cookie)

**Parameters:**
- `String` `cookie`

**Returns:** `void`

### public boolean handleCommand(String command)

**Parameters:**
- `String` `command`

**Returns:** `boolean`

### public String getHostUser()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public boolean masterLost()

**Returns:** `boolean`

### public boolean isHost(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `boolean`

### public boolean isInvited(long friendSteamID)

**Parameters:**
- `long` `friendSteamID`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\CoopSlave.html`*
