---
title: zombie.iso.worldgen.WGTile
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.iso.worldgen
---

# zombie.iso.worldgen.WGTile

`public class WGTile extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.WGTile

## Fields

### public static final String NO_TREE

### public static final String NO_BUSH

### public static final String NO_GRASS

## Constructors

### public WGTile()

## Methods

### public void setTiles(IBiome iBiome,
IsoGridSquare square,
IsoChunk chunk,
IsoCell cell,
int int3,
int int4,
int int5,
int int0,
int int1,
int int2,
EnumMap<FeatureType,String[]> enumMap,
boolean boolean0,
Random random)

**Parameters:**
- `IBiome` `iBiome`
- `IsoGridSquare` `square`
- `IsoChunk` `chunk`
- `IsoCell` `cell`
- `int` `int3`
- `int` `int4`
- `int` `int5`
- `int` `int0`
- `int` `int1`
- `int` `int2`
- `EnumMap<FeatureType,String[]>` `enumMap`
- `boolean` `boolean0`
- `Random` `random`

**Returns:** `void`

### public boolean setTiles(IBiome iBiome,
FeatureType featureType,
IsoGridSquare square,
IsoChunk chunk,
IsoCell cell,
int int5,
int int6,
int int7,
int int2,
int int3,
int int4,
EnumMap<FeatureType,String[]> enumMap,
Random random)

**Parameters:**
- `IBiome` `iBiome`
- `FeatureType` `featureType`
- `IsoGridSquare` `square`
- `IsoChunk` `chunk`
- `IsoCell` `cell`
- `int` `int5`
- `int` `int6`
- `int` `int7`
- `int` `int2`
- `int` `int3`
- `int` `int4`
- `EnumMap<FeatureType,String[]>` `enumMap`
- `Random` `random`

**Returns:** `boolean`

### public Feature findFeature(List<Feature> list,
float float2,
float float3,
Random random)

**Parameters:**
- `List<Feature>` `list`
- `float` `float2`
- `float` `float3`
- `Random` `random`

**Returns:** `Feature`

### public void setTile(OreVein oreVein,
IsoGridSquare square,
IsoCell cell,
int int0,
int int1,
int int2,
int var7,
int var8,
int var9,
EnumMap<FeatureType,String[]> var10,
Random random)

**Parameters:**
- `OreVein` `oreVein`
- `IsoGridSquare` `square`
- `IsoCell` `cell`
- `int` `int0`
- `int` `int1`
- `int` `int2`
- `int` `var7`
- `int` `var8`
- `int` `var9`
- `EnumMap<FeatureType,String[]>` `var10`
- `Random` `random`

**Returns:** `void`

### public void setTile(Road road,
IsoGridSquare square,
IsoCell cell,
int int0,
int int1,
int int2,
int var7,
int var8,
int var9,
EnumMap<FeatureType,String[]> var10,
Random random)

**Parameters:**
- `Road` `road`
- `IsoGridSquare` `square`
- `IsoCell` `cell`
- `int` `int0`
- `int` `int1`
- `int` `int2`
- `int` `var7`
- `int` `var8`
- `int` `var9`
- `EnumMap<FeatureType,String[]>` `var10`
- `Random` `random`

**Returns:** `void`

### public void applyTile(String arg0,
IsoGridSquare arg1,
IsoCell arg2,
int arg3,
int arg4,
int arg5,
Random arg6)

**Parameters:**
- `String` `arg0`
- `IsoGridSquare` `arg1`
- `IsoCell` `arg2`
- `int` `arg3`
- `int` `arg4`
- `int` `arg5`
- `Random` `arg6`

**Returns:** `void`

### public IsoSprite getSprite(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `IsoSprite`

### public TileGroup getGround(IBiome arg0,
Random arg1)

**Parameters:**
- `IBiome` `arg0`
- `Random` `arg1`

**Returns:** `TileGroup`

### public TileGroup getPlant(IBiome arg0,
Random arg1)

**Parameters:**
- `IBiome` `arg0`
- `Random` `arg1`

**Returns:** `TileGroup`

### public void setGround(IsoSprite arg0,
IsoGridSquare arg1)

**Parameters:**
- `IsoSprite` `arg0`
- `IsoGridSquare` `arg1`

**Returns:** `void`

### public void deleteTiles(IsoGridSquare arg0)

**Parameters:**
- `IsoGridSquare` `arg0`

**Returns:** `void`

### public void deleteTiles(IsoGridSquare square,
List<String> list)

**Parameters:**
- `IsoGridSquare` `square`
- `List<String>` `list`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\WGTile.html`*
