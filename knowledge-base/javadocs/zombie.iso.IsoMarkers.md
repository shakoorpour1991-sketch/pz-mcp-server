---
title: zombie.iso.IsoMarkers
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoMarkers

`public final class IsoMarkers extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoMarkers

## Fields

### public static final IsoMarkers instance

## Methods

### public void reset()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean removeIsoMarker(IsoMarkers.IsoMarker marker)

**Parameters:**
- `IsoMarkers.IsoMarker` `marker`

**Returns:** `boolean`

### public boolean removeIsoMarker(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public IsoMarkers.IsoMarker getIsoMarker(int id)

**Parameters:**
- `int` `id`

**Returns:** `IsoMarkers.IsoMarker`

### public IsoMarkers.IsoMarker addIsoMarker(String spriteName,
IsoGridSquare gs,
float r,
float g,
float b,
float alpha)

**Parameters:**
- `String` `spriteName`
- `IsoGridSquare` `gs`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `alpha`

**Returns:** `IsoMarkers.IsoMarker`

### public IsoMarkers.IsoMarker addIsoMarker(se.krka.kahlua.vm.KahluaTable textureTable,
IsoGridSquare gs,
float r,
float g,
float b,
float alpha)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `textureTable`
- `IsoGridSquare` `gs`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `alpha`

**Returns:** `IsoMarkers.IsoMarker`

### public IsoMarkers.IsoMarker addIsoMarker(InventoryItem item,
IsoGridSquare gs,
float r,
float g,
float b,
float alpha,
float rotation)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `gs`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `alpha`
- `float` `rotation`

**Returns:** `IsoMarkers.IsoMarker`

### public void renderIsoMarkers(IsoCell.PerPlayerRender perPlayerRender,
int zLayer,
int playerIndex)

**Parameters:**
- `IsoCell.PerPlayerRender` `perPlayerRender`
- `int` `zLayer`
- `int` `playerIndex`

**Returns:** `void`

### public void render()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoMarkers.html`*
