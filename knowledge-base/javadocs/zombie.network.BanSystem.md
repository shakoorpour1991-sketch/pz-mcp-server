---
title: zombie.network.BanSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.BanSystem

`public class BanSystem extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.BanSystem

## Constructors

### public BanSystem()

## Methods

### public static String BanUser(String username,
UdpConnection adminConnection,
String argument,
boolean ban)
throws SQLException

**Parameters:**
- `String` `username`
- `UdpConnection` `adminConnection`
- `String` `argument`
- `boolean` `ban`

**Returns:** `String`

### public static void KickUser(String username,
String reason,
String description)

**Parameters:**
- `String` `username`
- `String` `reason`
- `String` `description`

**Returns:** `void`

### public static String BanUserBySteamID(String steamID,
UdpConnection adminConnection,
String argument,
boolean ban)
throws SQLException

**Parameters:**
- `String` `steamID`
- `UdpConnection` `adminConnection`
- `String` `argument`
- `boolean` `ban`

**Returns:** `String`

### public static String BanIP(String ip,
UdpConnection adminConnection,
String argument,
boolean ban)
throws SQLException

**Parameters:**
- `String` `ip`
- `UdpConnection` `adminConnection`
- `String` `argument`
- `boolean` `ban`

**Returns:** `String`

### public static String BanUserByIP(String username,
UdpConnection adminConnection,
String argument,
boolean ban)
throws SQLException

**Parameters:**
- `String` `username`
- `UdpConnection` `adminConnection`
- `String` `argument`
- `boolean` `ban`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\BanSystem.html`*
