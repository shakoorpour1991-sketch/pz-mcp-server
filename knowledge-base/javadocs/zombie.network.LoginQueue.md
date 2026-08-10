---
title: zombie.network.LoginQueue
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.LoginQueue

`public class LoginQueue extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.LoginQueue

## Constructors

### public LoginQueue()

## Methods

### public static void receiveLoginQueueDone(long gameLoadingTime,
UdpConnection connection)

**Parameters:**
- `long` `gameLoadingTime`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void receiveServerLoginQueueRequest(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public static void disconnect(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public static boolean isInTheQueue(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `boolean`

### public static void update()

**Returns:** `void`

### public static int getCountPlayers()

**Returns:** `int`

### public static String getDescription()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\LoginQueue.html`*
