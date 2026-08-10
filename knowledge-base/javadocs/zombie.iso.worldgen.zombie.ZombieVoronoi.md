---
title: zombie.iso.worldgen.zombie.ZombieVoronoi
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen.zombie
---

# zombie.iso.worldgen.zombie.ZombieVoronoi

`public class ZombieVoronoi extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen.zombie

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.zombie.ZombieVoronoi

## Fields

### public final Map<CellCoord, double[]> cellCache

## Constructors

### public ZombieVoronoi(long seed,
int numberPoints,
ClosestSelection closestPoint,
double scale,
double cutoff)

**Parameters:**
- `long` `seed`
- `int` `numberPoints`
- `ClosestSelection` `closestPoint`
- `double` `scale`
- `double` `cutoff`

## Methods

### public static List<ZombieVoronoi> getVoronois(long seed)

**Parameters:**
- `long` `seed`

**Returns:** `List<ZombieVoronoi>`

### public double[] evaluateCellNoise(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `double[]`

### public double[] evaluateCellCutoff(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `double[]`

### public double[] evaluateCellCutoff(int wx,
int wy,
double cutoff)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `double` `cutoff`

**Returns:** `double[]`

### public void releaseCell(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\zombie\ZombieVoronoi.html`*
