---
title: zombie.popman.NetworkZombieManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.NetworkZombieManager

`public class NetworkZombieManager extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.NetworkZombieManager

## Constructors

### public NetworkZombieManager()

## Methods

### public static NetworkZombieManager getInstance()

**Returns:** `NetworkZombieManager`

### public int getAuthorizedZombieCount(UdpConnection con)

**Parameters:**
- `UdpConnection` `con`

**Returns:** `int`

### public int getUnauthorizedZombieCount()

**Returns:** `int`

### public static boolean canSpotted(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `boolean`

### public void updateAuth(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `void`

### public void moveZombie(IsoZombie zombie,
UdpConnection to,
IsoPlayer player)

**Parameters:**
- `IsoZombie` `zombie`
- `UdpConnection` `to`
- `IsoPlayer` `player`

**Returns:** `void`

### public int getZombieAuth(UdpConnection connection,
ZombieListPacket packet)

**Parameters:**
- `UdpConnection` `connection`
- `ZombieListPacket` `packet`

**Returns:** `int`

### public void clearTargetAuth(IConnection connection,
IsoPlayer player)

**Parameters:**
- `IConnection` `connection`
- `IsoPlayer` `player`

**Returns:** `void`

### public static void removeZombies(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void recheck(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\NetworkZombieManager.html`*
