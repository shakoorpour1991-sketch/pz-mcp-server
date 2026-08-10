---
title: zombie.vehicleNetworkSound.client.Manager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicleNetworkSound.client
---

# zombie.vehicleNetworkSound.client.Manager

`public final class Manager extends Object`

**Kind:** class · **Package:** zombie.vehicleNetworkSound.client

## Inheritance
- java.lang.Object
- zombie.vehicleNetworkSound.client.Manager

## Constructors

### public Manager()

## Methods

### public static Manager getInstance()

**Returns:** `Manager`

### public void addVehicle(short id,
String scriptName)

**Parameters:**
- `short` `id`
- `String` `scriptName`

**Returns:** `void`

### public void updateVehicle(SharedVehicleState state1)

**Parameters:**
- `SharedVehicleState` `state1`

**Returns:** `void`

### public void updateVehicle(SharedVehicleState state1,
int changeBits)

**Parameters:**
- `SharedVehicleState` `state1`
- `int` `changeBits`

**Returns:** `void`

### public void removeVehicle(short id)

**Parameters:**
- `short` `id`

**Returns:** `void`

### public boolean hasStateFor(short id)

**Parameters:**
- `short` `id`

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void renderWorldMap(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `void`

### public void stop()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicleNetworkSound\client\Manager.html`*
