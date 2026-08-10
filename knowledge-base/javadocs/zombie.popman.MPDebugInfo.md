---
title: zombie.popman.MPDebugInfo
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.MPDebugInfo

`public final class MPDebugInfo extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.MPDebugInfo

## Fields

### public static final MPDebugInfo instance

### public final ArrayList<MPDebugInfo.MPCell> loadedCells

### public final ObjectPool<MPDebugInfo.MPCell> cellPool

### public final LoadedAreas loadedAreas

### public ArrayList<MPDebugInfo.MPRepopEvent> repopEvents

### public final ObjectPool<MPDebugInfo.MPRepopEvent> repopEventPool

### public short repopEpoch

### public long requestTime

### public boolean requestPacketReceived

## Constructors

### public MPDebugInfo()

## Methods

### public void request()

**Returns:** `void`

### public void serverUpdate()

**Returns:** `void`

### public void render(ZombiePopulationRenderer renderer,
float zoom)

**Parameters:**
- `ZombiePopulationRenderer` `renderer`
- `float` `zoom`

**Returns:** `void`

### public static void AddDebugSound(WorldSoundManager.WorldSound sound)

**Parameters:**
- `WorldSoundManager.WorldSound` `sound`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\MPDebugInfo.html`*
