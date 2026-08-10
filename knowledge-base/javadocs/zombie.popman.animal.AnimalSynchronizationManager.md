---
title: zombie.popman.animal.AnimalSynchronizationManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman.animal
---

# zombie.popman.animal.AnimalSynchronizationManager

`public class AnimalSynchronizationManager extends Object`

**Kind:** class · **Package:** zombie.popman.animal

## Inheritance
- java.lang.Object
- zombie.popman.animal.AnimalSynchronizationManager

## Methods

### public static AnimalSynchronizationManager getInstance()

**Returns:** `AnimalSynchronizationManager`

### public HashSet<Short> getDeleted()

**Returns:** `HashSet<Short>`

### public void setExtraUpdate(UdpConnection connection,
short onlineId)

**Parameters:**
- `UdpConnection` `connection`
- `short` `onlineId`

**Returns:** `void`

### public void setSendToClients(HashSet<Short> updated)

**Parameters:**
- `HashSet<Short>` `updated`

**Returns:** `void`

### public void setSendToClients(Short updated)

**Parameters:**
- `Short` `updated`

**Returns:** `void`

### public void setRequested(UdpConnection connection,
HashSet<Short> request)

**Parameters:**
- `UdpConnection` `connection`
- `HashSet<Short>` `request`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void delete(short onlineID)

**Parameters:**
- `short` `onlineID`

**Returns:** `void`

### public void sendRequestToServer(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\animal\AnimalSynchronizationManager.html`*
