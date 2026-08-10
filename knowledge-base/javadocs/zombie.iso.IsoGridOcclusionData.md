---
title: zombie.iso.IsoGridOcclusionData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoGridOcclusionData

`public class IsoGridOcclusionData extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoGridOcclusionData

## Description

Created by ChrisWood (Tanglewood Games Limited) on 09/10/2017.

## Fields

### public static final int MAXBUILDINGOCCLUDERS

## Constructors

### public IsoGridOcclusionData(IsoGridSquare inOwnerSquare)

**Parameters:**
- `IsoGridSquare` `inOwnerSquare`

## Methods

### public static void SquareChanged()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

### public boolean getCouldBeOccludedByOrphanStructures(IsoGridOcclusionData.OcclusionFilter filter)

Returns whether built structures with no building id (orphans) could occlude some of the square.
Depending on the exact shape of the structures, the square might not be hidden at all.
This is used to hide player-built structures that might block our view of something in a square (at ground
level)

**Parameters:**
- `IsoGridOcclusionData.OcclusionFilter` `filter`

**Returns:** `boolean`

### public ArrayList<IsoBuilding> getBuildingsCouldBeOccluders(IsoGridOcclusionData.OcclusionFilter filter)

**Parameters:**
- `IsoGridOcclusionData.OcclusionFilter` `filter`

**Returns:** `ArrayList<IsoBuilding>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoGridOcclusionData.html`*
