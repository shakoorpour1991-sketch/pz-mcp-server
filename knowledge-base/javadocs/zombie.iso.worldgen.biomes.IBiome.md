---
title: zombie.iso.worldgen.biomes.IBiome
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.IBiome

`public interface IBiome`

**Kind:** interface · **Package:** zombie.iso.worldgen.biomes

## Methods

### String name()

**Returns:** `String`

### Map<FeatureType, List<Feature>> getFeatures()

**Returns:** `Map<FeatureType, List<Feature>>`

### Map<String, List<Feature>> getReplacements()

**Returns:** `Map<String, List<Feature>>`

### EnumSet<BiomeType.Landscape> landscape()

**Returns:** `EnumSet<BiomeType.Landscape>`

### EnumSet<BiomeType.Plant> plant()

**Returns:** `EnumSet<BiomeType.Plant>`

### EnumSet<BiomeType.Bush> bush()

**Returns:** `EnumSet<BiomeType.Bush>`

### EnumSet<BiomeType.Temperature> temperature()

**Returns:** `EnumSet<BiomeType.Temperature>`

### EnumSet<BiomeType.Hygrometry> hygrometry()

**Returns:** `EnumSet<BiomeType.Hygrometry>`

### EnumSet<BiomeType.OreLevel> oreLevel()

**Returns:** `EnumSet<BiomeType.OreLevel>`

### Map<FeatureType, List<String>> placements()

**Returns:** `Map<FeatureType, List<String>>`

### Map<FeatureType, Map<FeatureType, List<IBiome>>> subBiomes()

**Returns:** `Map<FeatureType, Map<FeatureType, List<IBiome>>>`

### List<String> protectedList()

**Returns:** `List<String>`

### String parent()

**Returns:** `String`

### boolean generate()

**Returns:** `boolean`

### float zombies()

**Returns:** `float`

### Grass grass()

**Returns:** `Grass`

### IBiome landscape(BiomeType.Landscape arg0)

**Parameters:**
- `BiomeType.Landscape` `arg0`

**Returns:** `IBiome`

### IBiome plant(BiomeType.Plant arg0)

**Parameters:**
- `BiomeType.Plant` `arg0`

**Returns:** `IBiome`

### IBiome bush(BiomeType.Bush arg0)

**Parameters:**
- `BiomeType.Bush` `arg0`

**Returns:** `IBiome`

### IBiome temperature(BiomeType.Temperature arg0)

**Parameters:**
- `BiomeType.Temperature` `arg0`

**Returns:** `IBiome`

### IBiome hygrometry(BiomeType.Hygrometry arg0)

**Parameters:**
- `BiomeType.Hygrometry` `arg0`

**Returns:** `IBiome`

### IBiome oreLevel(BiomeType.OreLevel arg0)

**Parameters:**
- `BiomeType.OreLevel` `arg0`

**Returns:** `IBiome`

### IBiome landscape(EnumSet<BiomeType.Landscape> arg0)

**Parameters:**
- `EnumSet<BiomeType.Landscape>` `arg0`

**Returns:** `IBiome`

### IBiome plant(EnumSet<BiomeType.Plant> arg0)

**Parameters:**
- `EnumSet<BiomeType.Plant>` `arg0`

**Returns:** `IBiome`

### IBiome bush(EnumSet<BiomeType.Bush> arg0)

**Parameters:**
- `EnumSet<BiomeType.Bush>` `arg0`

**Returns:** `IBiome`

### IBiome temperature(EnumSet<BiomeType.Temperature> arg0)

**Parameters:**
- `EnumSet<BiomeType.Temperature>` `arg0`

**Returns:** `IBiome`

### IBiome hygrometry(EnumSet<BiomeType.Hygrometry> arg0)

**Parameters:**
- `EnumSet<BiomeType.Hygrometry>` `arg0`

**Returns:** `IBiome`

### IBiome oreLevel(EnumSet<BiomeType.OreLevel> arg0)

**Parameters:**
- `EnumSet<BiomeType.OreLevel>` `arg0`

**Returns:** `IBiome`

### IBiome placements(Map<FeatureType, List<String>> arg0)

**Parameters:**
- `Map<FeatureType, List<String>>` `arg0`

**Returns:** `IBiome`

### IBiome subBiomes(Map<FeatureType, Map<FeatureType, List<IBiome>>> var1)

**Parameters:**
- `Map<FeatureType, Map<FeatureType, List<IBiome>>>` `var1`

**Returns:** `IBiome`

### IBiome protectedList(List<String> var1)

**Parameters:**
- `List<String>` `var1`

**Returns:** `IBiome`

### IBiome zombies(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `IBiome`

### IBiome grass(Grass arg0)

**Parameters:**
- `Grass` `arg0`

**Returns:** `IBiome`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\IBiome.html`*
