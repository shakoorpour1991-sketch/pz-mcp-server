---
title: zombie.iso.worldgen.biomes.Biome
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.Biome

`public class Biome extends BiomeAbstract`

**Kind:** class · **Package:** zombie.iso.worldgen.biomes

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.biomes.BiomeAbstract
- zombie.iso.worldgen.biomes.Biome

## Fields

### public static final Biome DEFAULT_BIOME

## Constructors

### public Biome(String name,
String parent,
boolean generate,
Map<FeatureType, List<Feature>> features,
Map<String, List<Feature>> replacements,
EnumSet<BiomeType.Landscape> landscape,
EnumSet<BiomeType.Plant> plant,
EnumSet<BiomeType.Bush> bush,
EnumSet<BiomeType.Temperature> temperature,
EnumSet<BiomeType.Hygrometry> hygrometry,
EnumSet<BiomeType.OreLevel> oreLevel,
float zombies,
Map<FeatureType, List<String>> placements,
Map<FeatureType, Map<FeatureType, List<IBiome>>> subBiomes,
List<String> protectedList,
Grass grass)

**Parameters:**
- `String` `name`
- `String` `parent`
- `boolean` `generate`
- `Map<FeatureType, List<Feature>>` `features`
- `Map<String, List<Feature>>` `replacements`
- `EnumSet<BiomeType.Landscape>` `landscape`
- `EnumSet<BiomeType.Plant>` `plant`
- `EnumSet<BiomeType.Bush>` `bush`
- `EnumSet<BiomeType.Temperature>` `temperature`
- `EnumSet<BiomeType.Hygrometry>` `hygrometry`
- `EnumSet<BiomeType.OreLevel>` `oreLevel`
- `float` `zombies`
- `Map<FeatureType, List<String>>` `placements`
- `Map<FeatureType, Map<FeatureType, List<IBiome>>>` `subBiomes`
- `List<String>` `protectedList`
- `Grass` `grass`

## Methods

### public String toString()

**Returns:** `String`

### public Map<FeatureType, List<Feature>> getFeatures()

**Returns:** `Map<FeatureType, List<Feature>>`

### public Map<String, List<Feature>> getReplacements()

**Returns:** `Map<String, List<Feature>>`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\Biome.html`*
