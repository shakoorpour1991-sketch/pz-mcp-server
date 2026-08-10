---
title: zombie.iso.BentFences
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.BentFences

`public class BentFences extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.BentFences

## Constructors

### public BentFences()

## Methods

### public static BentFences getInstance()

**Returns:** `BentFences`

### public void addFenceTiles(int version,
se.krka.kahlua.j2se.KahluaTableImpl tiles)

**Parameters:**
- `int` `version`
- `se.krka.kahlua.j2se.KahluaTableImpl` `tiles`

**Returns:** `void`

### public boolean isBentObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public boolean isUnbentObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public boolean isUnbentObject(IsoObject obj,
IsoDirections dir)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean checkCanCollapse(IsoObject obj,
IsoDirections dir,
BentFences.Entry entry)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `BentFences.Entry` `entry`

**Returns:** `boolean`

### public void collapse(IsoObject obj,
IsoDirections dir,
BentFences.Entry entry,
int index)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `BentFences.Entry` `entry`
- `int` `index`

**Returns:** `void`

### public void removeCollapsedTiles(IsoObject obj,
IsoDirections dir,
BentFences.Entry entry,
int index)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `BentFences.Entry` `entry`
- `int` `index`

**Returns:** `void`

### public void smashFence(IsoObject obj,
IsoDirections dir)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`

**Returns:** `void`

### public void smashFence(IsoObject obj,
IsoDirections dir,
int index)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `int` `index`

**Returns:** `void`

### public void swapTiles(IsoObject obj,
IsoDirections dir,
boolean bending)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `boolean` `bending`

**Returns:** `void`

### public void swapTiles(IsoObject obj,
IsoDirections dir,
boolean bending,
int forceStage)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `boolean` `bending`
- `int` `forceStage`

**Returns:** `void`

### public void bendFence(IsoObject obj,
IsoDirections dir)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`

**Returns:** `void`

### public void unbendFence(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void resetFence(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public boolean isBendableFence(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public BentFences.ThumpData getThumpData(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `BentFences.ThumpData`

### public BentFences.ThumpData getThumpData(IsoObject obj,
BentFences.Entry entry)

**Parameters:**
- `IsoObject` `obj`
- `BentFences.Entry` `entry`

**Returns:** `BentFences.ThumpData`

### public IsoObject getCollapsedFence(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoObject`

### public void checkDamageHoppableFence(IsoMovingObject thumper,
IsoGridSquare sq,
IsoGridSquare oppositeSq)

**Parameters:**
- `IsoMovingObject` `thumper`
- `IsoGridSquare` `sq`
- `IsoGridSquare` `oppositeSq`

**Returns:** `void`

### public boolean isEnabled()

**Returns:** `boolean`

### public static void init()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\BentFences.html`*
