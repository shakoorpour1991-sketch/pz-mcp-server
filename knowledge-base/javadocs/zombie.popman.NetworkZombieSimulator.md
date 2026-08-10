---
title: zombie.popman.NetworkZombieSimulator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.NetworkZombieSimulator

`public class NetworkZombieSimulator extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.NetworkZombieSimulator

## Fields

### public static final int MAX_ZOMBIES_PER_UPDATE

### public final ArrayList<Short> unknownZombies

## Constructors

### public NetworkZombieSimulator()

## Methods

### public static NetworkZombieSimulator getInstance()

**Returns:** `NetworkZombieSimulator`

### public int getAuthorizedZombieCount()

**Returns:** `int`

### public int getUnauthorizedZombieCount()

**Returns:** `int`

### public void reset()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void addExtraUpdate(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `void`

### public void add(short onlineId)

**Parameters:**
- `short` `onlineId`

**Returns:** `void`

### public void added()

**Returns:** `void`

### public void becomeLocal(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `void`

### public void becomeRemote(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `void`

### public boolean isZombieSimulated(Short zombieId)

**Parameters:**
- `Short` `zombieId`

**Returns:** `boolean`

### public void receivePacket(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public boolean anyUnknownZombies()

**Returns:** `boolean`

### public void send()

**Returns:** `void`

### public void remove(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `void`

### public void clearTargetAuth(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\NetworkZombieSimulator.html`*
