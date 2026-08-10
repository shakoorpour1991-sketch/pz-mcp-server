---
title: zombie.iso.worldgen.biomes.BiomeRegistry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.BiomeRegistry

`public class BiomeRegistry extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen.biomes

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.biomes.BiomeRegistry

## Fields

### public static BiomeRegistry instance

## Methods

### public void reset()

**Returns:** `void`

### public IBiome get(Map<String,Biome> biomesIn,
BiomeNoise noises,
double selector,
Map<BiomeType.Landscape, List<Double>> landscapeProb,
Map<BiomeType.Plant, List<Double>> plantProb,
Map<BiomeType.Bush, List<Double>> bushProb,
Map<BiomeType.Temperature, List<Double>> temperatureProb,
Map<BiomeType.Hygrometry, List<Double>> hygrometryProb,
Map<BiomeType.OreLevel, List<Double>> oreLevelProb)

**Parameters:**
- `Map<String,Biome>` `biomesIn`
- `BiomeNoise` `noises`
- `double` `selector`
- `Map<BiomeType.Landscape, List<Double>>` `landscapeProb`
- `Map<BiomeType.Plant, List<Double>>` `plantProb`
- `Map<BiomeType.Bush, List<Double>>` `bushProb`
- `Map<BiomeType.Temperature, List<Double>>` `temperatureProb`
- `Map<BiomeType.Hygrometry, List<Double>>` `hygrometryProb`
- `Map<BiomeType.OreLevel, List<Double>>` `oreLevelProb`

**Returns:** `IBiome`

### public IBiome get(Map<String,Biome> biomesIn,
String filter,
BiomeNoise noises,
double selector,
Map<BiomeType.Bush, List<Double>> bushProb,
Map<BiomeType.OreLevel, List<Double>> oreLevelProb)

**Parameters:**
- `Map<String,Biome>` `biomesIn`
- `String` `filter`
- `BiomeNoise` `noises`
- `double` `selector`
- `Map<BiomeType.Bush, List<Double>>` `bushProb`
- `Map<BiomeType.OreLevel, List<Double>>` `oreLevelProb`

**Returns:** `IBiome`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\BiomeRegistry.html`*
