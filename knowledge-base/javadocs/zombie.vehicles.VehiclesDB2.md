---
title: zombie.vehicles.VehiclesDB2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehiclesDB2

`public final class VehiclesDB2 extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehiclesDB2

## Fields

### public static final int INVALID_ID

### public static final VehiclesDB2 instance

## Constructors

### public VehiclesDB2()

## Methods

### public void init()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

### public void updateMain()
throws IOException

**Returns:** `void`

### public void updateWorldStreamer()

**Returns:** `void`

### public void setForceSave()

**Returns:** `void`

### public void renderDebug(ZombiePopulationRenderer renderer)

**Parameters:**
- `ZombiePopulationRenderer` `renderer`

**Returns:** `void`

### public void setChunkSeen(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public boolean isChunkSeen(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public void setVehicleLoaded(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void setVehicleUnloaded(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public boolean isVehicleLoaded(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `boolean`

### public void loadChunkMain(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void loadChunk(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void unloadChunk(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void loadVehiclesInMeta()

**Returns:** `void`

### public void addVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void removeVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void updateVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void updateVehicleAndTrailer(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void importPlayersFromOldDB(VehiclesDB2.IImportPlayerFromOldDB consumer)

**Parameters:**
- `VehiclesDB2.IImportPlayerFromOldDB` `consumer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehiclesDB2.html`*
