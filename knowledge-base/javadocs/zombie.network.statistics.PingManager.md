---
title: zombie.network.statistics.PingManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics
---

# zombie.network.statistics.PingManager

`public class PingManager extends Object`

**Kind:** class · **Package:** zombie.network.statistics

## Inheritance
- java.lang.Object
- zombie.network.statistics.PingManager

## Fields

### public static long pingIntervalCount

### public static long pingLimitCount

### public static long maxPingToSum

## Constructors

### public PingManager()

## Methods

### public static boolean doKickWhileLoading(UdpConnection connection,
int ping)

**Parameters:**
- `UdpConnection` `connection`
- `int` `ping`

**Returns:** `boolean`

### public static int checkLatest(UdpConnection c,
long limit)

**Parameters:**
- `UdpConnection` `c`
- `long` `limit`

**Returns:** `int`

### public static void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\PingManager.html`*
