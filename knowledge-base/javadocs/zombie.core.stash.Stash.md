---
title: zombie.core.stash.Stash
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.stash
---

# zombie.core.stash.Stash

`public final class Stash extends Object`

**Kind:** class · **Package:** zombie.core.stash

## Inheritance
- java.lang.Object
- zombie.core.stash.Stash

## Fields

### public String name

### public String type

### public String item

### public String customName

### public int buildingX

### public int buildingY

### public String spawnTable

### public ArrayList<StashAnnotation> annotations

### public boolean spawnOnlyOnZed

### public int minDayToSpawn

### public int maxDayToSpawn

### public int minTrapToSpawn

### public int maxTrapToSpawn

### public int zombies

### public ArrayList<StashContainer> containers

### public int barricades

## Constructors

### public Stash(String name)

**Parameters:**
- `String` `name`

## Methods

### public void load(se.krka.kahlua.j2se.KahluaTableImpl stashDesc)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `stashDesc`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public String getItem()

**Returns:** `String`

### public int getBuildingX()

**Returns:** `int`

### public int getBuildingY()

**Returns:** `int`

### public void applyAnnotations(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\stash\Stash.html`*
