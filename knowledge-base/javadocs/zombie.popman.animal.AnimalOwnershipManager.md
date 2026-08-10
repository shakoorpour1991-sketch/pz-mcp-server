---
title: zombie.popman.animal.AnimalOwnershipManager
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.popman.animal
---

# zombie.popman.animal.AnimalOwnershipManager

`public class AnimalOwnershipManager extends Object`

**Kind:** class · **Package:** zombie.popman.animal

## Inheritance
- java.lang.Object
- zombie.popman.animal.AnimalOwnershipManager

## Methods

### public static AnimalOwnershipManager getInstance()

**Returns:** `AnimalOwnershipManager`

### public void Reset()

**Returns:** `void`

### public HashSet<Short> getOwnership(UdpConnection udpConnection)

**Parameters:**
- `UdpConnection` `udpConnection`

**Returns:** `HashSet<Short>`

### public void setOwnershipClient(UdpConnection udpConnection,
HashSet<Short> hashSet0)

**Parameters:**
- `UdpConnection` `udpConnection`
- `HashSet<Short>` `hashSet0`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public UdpConnection setOwnershipServer(NetworkCharacterAI networkCharacterAI,
UdpConnection udpConnection)

**Parameters:**
- `NetworkCharacterAI` `networkCharacterAI`
- `UdpConnection` `udpConnection`

**Returns:** `UdpConnection`

### public int getOwned()

**Returns:** `int`

### public UdpConnection getOwner(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `UdpConnection`

### public IsoPlayer getOwnership(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `IsoPlayer`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\animal\AnimalOwnershipManager.html`*
