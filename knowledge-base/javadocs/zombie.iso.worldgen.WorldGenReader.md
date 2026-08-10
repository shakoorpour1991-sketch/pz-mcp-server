---
title: zombie.iso.worldgen.WorldGenReader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen
---

# zombie.iso.worldgen.WorldGenReader

`public class WorldGenReader extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.WorldGenReader

## Constructors

### public WorldGenReader()

## Methods

### public Map<String,Biome> loadBiomes(se.krka.kahlua.vm.KahluaTable worldgenTable,
String tableKey)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `worldgenTable`
- `String` `tableKey`

**Returns:** `Map<String,Biome>`

### public Biome loadBiome(String biomeName,
se.krka.kahlua.vm.KahluaTable biomeTable)

**Parameters:**
- `String` `biomeName`
- `se.krka.kahlua.vm.KahluaTable` `biomeTable`

**Returns:** `Biome`

### public <T extends Enum<T>> Map<T, List<Double>> loadSelection(T biomeType,
se.krka.kahlua.vm.KahluaTable worldgenTable,
String tableKey)

**Returns:** `Map<T, List<Double>>`

### public Map<String, List<Feature>> loadReplacements(se.krka.kahlua.vm.KahluaTable replacementsTable)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `replacementsTable`

**Returns:** `Map<String, List<Feature>>`

### public Map<FeatureType, Map<FeatureType, List<IBiome>>> loadSubBiomes(se.krka.kahlua.vm.KahluaTable subBiomesTable)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `subBiomesTable`

**Returns:** `Map<FeatureType, Map<FeatureType, List<IBiome>>>`

### public Map<String,Double> loadPriorities(se.krka.kahlua.vm.KahluaTable worldgenTable,
String tableKey)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `worldgenTable`
- `String` `tableKey`

**Returns:** `Map<String,Double>`

### public List<StaticModule> loadStaticModules(se.krka.kahlua.vm.KahluaTable worldGenTable,
String tableKey)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `worldGenTable`
- `String` `tableKey`

**Returns:** `List<StaticModule>`

### public Map<String, OreVeinConfig> loadVeinsConfig(se.krka.kahlua.vm.KahluaTable worldGenTable,
String tableKey)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `worldGenTable`
- `String` `tableKey`

**Returns:** `Map<String, OreVeinConfig>`

### public Map<String, RoadConfig> loadRoadConfig(se.krka.kahlua.vm.KahluaTable worldGenTable,
String tableKey)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `worldGenTable`
- `String` `tableKey`

**Returns:** `Map<String, RoadConfig>`

### public List<AnimalsPathConfig> loadAnimalsPath(se.krka.kahlua.vm.KahluaTable animalsPathTable)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `animalsPathTable`

**Returns:** `List<AnimalsPathConfig>`

### public Map<Integer, BiomeMapEntry> loadBiomeMapConfig(se.krka.kahlua.vm.KahluaTable biomeMapTable)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `biomeMapTable`

**Returns:** `Map<Integer, BiomeMapEntry>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\WorldGenReader.html`*
