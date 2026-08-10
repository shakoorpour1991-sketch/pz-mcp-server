---
title: zombie.iso.worldgen.biomes.BiomeAbstract
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.BiomeAbstract

`public abstract class BiomeAbstract extends Object implements IBiome`

**Kind:** class · **Package:** zombie.iso.worldgen.biomes

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.biomes.BiomeAbstract

## Constructors

### public BiomeAbstract()

## Methods

### public String name()

**Returns:** `String`

### public abstract Map<FeatureType, List<Feature>> getFeatures()

**Returns:** `Map<FeatureType, List<Feature>>`

### public abstract Map<String, List<Feature>> getReplacements()

**Returns:** `Map<String, List<Feature>>`

### public EnumSet<BiomeType.Landscape> landscape()

**Returns:** `EnumSet<BiomeType.Landscape>`

### public EnumSet<BiomeType.Plant> plant()

**Returns:** `EnumSet<BiomeType.Plant>`

### public EnumSet<BiomeType.Bush> bush()

**Returns:** `EnumSet<BiomeType.Bush>`

### public EnumSet<BiomeType.Temperature> temperature()

**Returns:** `EnumSet<BiomeType.Temperature>`

### public EnumSet<BiomeType.Hygrometry> hygrometry()

**Returns:** `EnumSet<BiomeType.Hygrometry>`

### public EnumSet<BiomeType.OreLevel> oreLevel()

**Returns:** `EnumSet<BiomeType.OreLevel>`

### public Map<FeatureType, List<String>> placements()

**Returns:** `Map<FeatureType, List<String>>`

### public Map<FeatureType, Map<FeatureType, List<IBiome>>> subBiomes()

**Returns:** `Map<FeatureType, Map<FeatureType, List<IBiome>>>`

### public List<String> protectedList()

**Returns:** `List<String>`

### public String parent()

**Returns:** `String`

### public boolean generate()

**Returns:** `boolean`

### public float zombies()

**Returns:** `float`

### public Grass grass()

**Returns:** `Grass`

### public IBiome landscape(BiomeType.Landscape landscape)

**Parameters:**
- `BiomeType.Landscape` `landscape`

**Returns:** `IBiome`

### public IBiome plant(BiomeType.Plant plant)

**Parameters:**
- `BiomeType.Plant` `plant`

**Returns:** `IBiome`

### public IBiome bush(BiomeType.Bush bush)

**Parameters:**
- `BiomeType.Bush` `bush`

**Returns:** `IBiome`

### public IBiome temperature(BiomeType.Temperature temperature)

**Parameters:**
- `BiomeType.Temperature` `temperature`

**Returns:** `IBiome`

### public IBiome hygrometry(BiomeType.Hygrometry hygrometry)

**Parameters:**
- `BiomeType.Hygrometry` `hygrometry`

**Returns:** `IBiome`

### public IBiome oreLevel(BiomeType.OreLevel oreLevel)

**Parameters:**
- `BiomeType.OreLevel` `oreLevel`

**Returns:** `IBiome`

### public IBiome landscape(EnumSet<BiomeType.Landscape> landscape)

**Parameters:**
- `EnumSet<BiomeType.Landscape>` `landscape`

**Returns:** `IBiome`

### public IBiome plant(EnumSet<BiomeType.Plant> plant)

**Parameters:**
- `EnumSet<BiomeType.Plant>` `plant`

**Returns:** `IBiome`

### public IBiome bush(EnumSet<BiomeType.Bush> bush)

**Parameters:**
- `EnumSet<BiomeType.Bush>` `bush`

**Returns:** `IBiome`

### public IBiome temperature(EnumSet<BiomeType.Temperature> temperature)

**Parameters:**
- `EnumSet<BiomeType.Temperature>` `temperature`

**Returns:** `IBiome`

### public IBiome hygrometry(EnumSet<BiomeType.Hygrometry> hygrometry)

**Parameters:**
- `EnumSet<BiomeType.Hygrometry>` `hygrometry`

**Returns:** `IBiome`

### public IBiome oreLevel(EnumSet<BiomeType.OreLevel> oreLevel)

**Parameters:**
- `EnumSet<BiomeType.OreLevel>` `oreLevel`

**Returns:** `IBiome`

### public IBiome placements(Map<FeatureType, List<String>> placement)

**Parameters:**
- `Map<FeatureType, List<String>>` `placement`

**Returns:** `IBiome`

### public IBiome subBiomes(Map<FeatureType, Map<FeatureType, List<IBiome>>> safeZones)

**Parameters:**
- `Map<FeatureType, Map<FeatureType, List<IBiome>>>` `safeZones`

**Returns:** `IBiome`

### public IBiome protectedList(List<String> protectedList)

**Parameters:**
- `List<String>` `protectedList`

**Returns:** `IBiome`

### public IBiome zombies(float chance)

**Parameters:**
- `float` `chance`

**Returns:** `IBiome`

### public IBiome grass(Grass grass)

**Parameters:**
- `Grass` `grass`

**Returns:** `IBiome`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\BiomeAbstract.html`*
