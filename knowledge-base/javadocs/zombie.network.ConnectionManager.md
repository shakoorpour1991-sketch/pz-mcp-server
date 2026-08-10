---
title: zombie.network.ConnectionManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ConnectionManager

`public class ConnectionManager extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ConnectionManager

## Constructors

### public ConnectionManager()

## Methods

### public static ConnectionManager getInstance()

**Returns:** `ConnectionManager`

### public void ping(String username,
String pwd,
String ip,
String port,
boolean doHash)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `ip`
- `String` `port`
- `boolean` `doHash`

**Returns:** `void`

### public void stopPing()

**Returns:** `void`

### public void getCustomizationData(String username,
String pwd,
String ip,
String port,
String serverPassword,
String serverName,
boolean doHash)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `ip`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `doHash`

**Returns:** `void`

### public void sendSecretKey(String username,
String pwd,
String ip,
int port,
String serverPassword,
boolean doHash,
int authType,
String secretKey)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `ip`
- `int` `port`
- `String` `serverPassword`
- `boolean` `doHash`
- `int` `authType`
- `String` `secretKey`

**Returns:** `void`

### public void serverConnect(String username,
String pwd,
String server,
String localIP,
String port,
String serverPassword,
String serverName,
boolean useSteamRelay,
boolean doHash,
int authType,
String secretKey)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `server`
- `String` `localIP`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `useSteamRelay`
- `boolean` `doHash`
- `int` `authType`
- `String` `secretKey`

**Returns:** `void`

### public void serverConnectCoop(String serverSteamID)

**Parameters:**
- `String` `serverSteamID`

**Returns:** `void`

### public void clearQueue()

**Returns:** `void`

### public void process()

**Returns:** `void`

### public static void log(String event,
String message,
long guid)

**Parameters:**
- `String` `event`
- `String` `message`
- `long` `guid`

**Returns:** `void`

### public static void log(String event,
String message,
IConnection connection)

**Parameters:**
- `String` `event`
- `String` `message`
- `IConnection` `connection`

**Returns:** `void`

### public static void doServerConnect(String user,
String pass,
String server,
String localIP,
String port,
String serverPassword,
String serverName,
boolean useSteamRelay,
boolean doHash,
int authtype,
String secretKey)

**Parameters:**
- `String` `user`
- `String` `pass`
- `String` `server`
- `String` `localIP`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `useSteamRelay`
- `boolean` `doHash`
- `int` `authtype`
- `String` `secretKey`

**Returns:** `void`

### public static void doServerConnectCoop(String serverSteamID)

**Parameters:**
- `String` `serverSteamID`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ConnectionManager.html`*
