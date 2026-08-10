---
title: zombie.basements.Basements
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.basements
---

# zombie.basements.Basements

`public final class Basements extends Object`

**Kind:** class · **Package:** zombie.basements

## Inheritance
- java.lang.Object
- zombie.basements.Basements

## Fields

### public static final int SAVEFILE_VERSION

## Constructors

### public Basements()

## Methods

### public static Basements getInstance()

**Returns:** `Basements`

### public static BasementsV1 getAPIv1()

**Returns:** `BasementsV1`

### public BasementsPerMap getPerMap(String mapID)

**Parameters:**
- `String` `mapID`

**Returns:** `BasementsPerMap`

### public BasementsPerMap getOrCreatePerMap(String mapID)

**Parameters:**
- `String` `mapID`

**Returns:** `BasementsPerMap`

### public void beforeOnLoadMapZones()

**Returns:** `void`

### public void beforeLoadMetaGrid()

**Returns:** `void`

### public void afterLoadMetaGrid()

**Returns:** `void`

### public void parseBasementDefinitions()

**Returns:** `void`

### public void parseBasementAccessDefinitions()

**Returns:** `void`

### public boolean chunkHasBasement(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `boolean`

### public void onNewChunkLoaded(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\basements\Basements.html`*
