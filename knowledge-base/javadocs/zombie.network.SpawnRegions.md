---
title: zombie.network.SpawnRegions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.SpawnRegions

`public class SpawnRegions extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.SpawnRegions

## Constructors

### public SpawnRegions()

## Methods

### public ArrayList<SpawnRegions.Region> loadRegionsFile(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `ArrayList<SpawnRegions.Region>`

### public boolean saveRegionsFile(String fileName,
ArrayList<SpawnRegions.Region> regions)

**Parameters:**
- `String` `fileName`
- `ArrayList<SpawnRegions.Region>` `regions`

**Returns:** `boolean`

### public ArrayList<SpawnRegions.Profession> loadPointsFile(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `ArrayList<SpawnRegions.Profession>`

### public boolean savePointsFile(String fileName,
ArrayList<SpawnRegions.Profession> professions)

**Parameters:**
- `String` `fileName`
- `ArrayList<SpawnRegions.Profession>` `professions`

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable loadPointsTable(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean savePointsTable(String fileName,
se.krka.kahlua.vm.KahluaTable professionsTable)

**Parameters:**
- `String` `fileName`
- `se.krka.kahlua.vm.KahluaTable` `professionsTable`

**Returns:** `boolean`

### public ArrayList<SpawnRegions.Region> getDefaultServerRegions()

**Returns:** `ArrayList<SpawnRegions.Region>`

### public ArrayList<SpawnRegions.Profession> getDefaultServerPoints()

**Returns:** `ArrayList<SpawnRegions.Profession>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\SpawnRegions.html`*
