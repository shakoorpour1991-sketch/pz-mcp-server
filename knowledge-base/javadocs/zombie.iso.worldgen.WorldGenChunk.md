---
title: zombie.iso.worldgen.WorldGenChunk
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen
---

# zombie.iso.worldgen.WorldGenChunk

`public class WorldGenChunk extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.WorldGenChunk

## Constructors

### public WorldGenChunk(long seed)

**Parameters:**
- `long` `seed`

## Methods

### public List<RoadGenerator> getRoadGenerators()

**Returns:** `List<RoadGenerator>`

### public void generateChunks(ChunksCache chunks)

**Parameters:**
- `ChunksCache` `chunks`

**Returns:** `void`

### public void replaceTiles(IsoCell cell,
ChunksCache chunks,
IsoChunk ch,
int chunkX,
int chunkY)

**Parameters:**
- `IsoCell` `cell`
- `ChunksCache` `chunks`
- `IsoChunk` `ch`
- `int` `chunkX`
- `int` `chunkY`

**Returns:** `void`

### public void addZombieToSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public IBiome getBiome(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IBiome`

### public IBiome getMapBiome(int x,
int y,
String filter)

**Parameters:**
- `int` `x`
- `int` `y`
- `String` `filter`

**Returns:** `IBiome`

### public boolean priority(String tile,
String tileRemote)

**Parameters:**
- `String` `tile`
- `String` `tileRemote`

**Returns:** `boolean`

### public boolean isProtected(List<String> protectedTiles,
String tile)

**Parameters:**
- `List<String>` `protectedTiles`
- `String` `tile`

**Returns:** `boolean`

### public void cleanChunk(IsoChunk chunk,
String material,
String filter)

**Parameters:**
- `IsoChunk` `chunk`
- `String` `material`
- `String` `filter`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\WorldGenChunk.html`*
