---
title: zombie.iso.worldgen.WorldGenTile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen
---

# zombie.iso.worldgen.WorldGenTile

`public class WorldGenTile extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.WorldGenTile

## Fields

### public static final String NO_TREE

### public static final String NO_BUSH

### public static final String NO_GRASS

### public static final String ANY

### public static final String SUBBIOME

## Constructors

### public WorldGenTile()

## Methods

### public TileReplacementRetValue setTiles(IBiome biome,
FeatureType type,
IsoGridSquare square,
ChunksCache chunks,
IsoChunk ch,
IsoCell cell,
int x,
int y,
int z,
int tileX,
int tileY,
int tileZ,
EnumMap<FeatureType, String[]> toBeDone,
Random rnd)

**Parameters:**
- `IBiome` `biome`
- `FeatureType` `type`
- `IsoGridSquare` `square`
- `ChunksCache` `chunks`
- `IsoChunk` `ch`
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `tileX`
- `int` `tileY`
- `int` `tileZ`
- `EnumMap<FeatureType, String[]>` `toBeDone`
- `Random` `rnd`

**Returns:** `TileReplacementRetValue`

### public Feature findFeature(List<Feature> features,
float prefilterProba,
float postfilterProba,
Random rnd)

**Parameters:**
- `List<Feature>` `features`
- `float` `prefilterProba`
- `float` `postfilterProba`
- `Random` `rnd`

**Returns:** `Feature`

### public void setTile(OreVein vein,
IsoGridSquare square,
IsoCell cell,
int x,
int y,
int z,
int tileX,
int tileY,
int tileZ,
EnumMap<FeatureType, String[]> toBeDone,
Random rnd)

**Parameters:**
- `OreVein` `vein`
- `IsoGridSquare` `square`
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `tileX`
- `int` `tileY`
- `int` `tileZ`
- `EnumMap<FeatureType, String[]>` `toBeDone`
- `Random` `rnd`

**Returns:** `void`

### public void setTile(Road road,
IsoGridSquare square,
IsoCell cell,
int x,
int y,
int z,
int tileX,
int tileY,
int tileZ,
EnumMap<FeatureType, String[]> toBeDone,
Random rnd)

**Parameters:**
- `Road` `road`
- `IsoGridSquare` `square`
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `tileX`
- `int` `tileY`
- `int` `tileZ`
- `EnumMap<FeatureType, String[]>` `toBeDone`
- `Random` `rnd`

**Returns:** `void`

### public TileReplacementRetValue applyTile(String tile,
IsoGridSquare square,
IsoCell cell,
int x,
int y,
int z,
Random rnd)

**Parameters:**
- `String` `tile`
- `IsoGridSquare` `square`
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `Random` `rnd`

**Returns:** `TileReplacementRetValue`

### public IsoSprite getSprite(String tile)

**Parameters:**
- `String` `tile`

**Returns:** `IsoSprite`

### public TileGroup getGround(IBiome biome,
Random rnd)

**Parameters:**
- `IBiome` `biome`
- `Random` `rnd`

**Returns:** `TileGroup`

### public TileGroup getPlant(IBiome biome,
Random rnd)

**Parameters:**
- `IBiome` `biome`
- `Random` `rnd`

**Returns:** `TileGroup`

### public void setGround(IsoSprite spr,
IsoGridSquare sq)

**Parameters:**
- `IsoSprite` `spr`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void deleteTiles(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void deleteTiles(IsoGridSquare sq,
List<String> toRemove)

**Parameters:**
- `IsoGridSquare` `sq`
- `List<String>` `toRemove`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\WorldGenTile.html`*
