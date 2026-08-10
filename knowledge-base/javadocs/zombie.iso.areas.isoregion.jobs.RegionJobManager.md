---
title: zombie.iso.areas.isoregion.jobs.RegionJobManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.jobs
---

# zombie.iso.areas.isoregion.jobs.RegionJobManager

`public final class RegionJobManager extends Object`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.jobs

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.jobs.RegionJobManager

## Constructors

### public RegionJobManager()

## Methods

### public static JobSquareUpdate allocSquareUpdate(int x,
int y,
int z,
byte flags)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `byte` `flags`

**Returns:** `JobSquareUpdate`

### public static JobChunkUpdate allocChunkUpdate()

**Returns:** `JobChunkUpdate`

### public static JobApplyChanges allocApplyChanges(boolean saveToDisk)

**Parameters:**
- `boolean` `saveToDisk`

**Returns:** `JobApplyChanges`

### public static JobServerSendFullData allocServerSendFullData(UdpConnection conn)

**Parameters:**
- `UdpConnection` `conn`

**Returns:** `JobServerSendFullData`

### public static JobDebugResetAllData allocDebugResetAllData()

**Returns:** `JobDebugResetAllData`

### public static void release(RegionJob job)

**Parameters:**
- `RegionJob` `job`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\jobs\RegionJobManager.html`*
