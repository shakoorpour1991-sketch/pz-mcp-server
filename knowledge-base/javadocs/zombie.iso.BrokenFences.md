---
title: zombie.iso.BrokenFences
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.BrokenFences

`public class BrokenFences extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.BrokenFences

## Constructors

### public BrokenFences()

## Methods

### public static BrokenFences getInstance()

**Returns:** `BrokenFences`

### public void addBrokenTiles(se.krka.kahlua.j2se.KahluaTableImpl tiles)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `tiles`

**Returns:** `void`

### public void addDebrisTiles(se.krka.kahlua.j2se.KahluaTableImpl tiles)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `tiles`

**Returns:** `void`

### public void setDestroyed(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void setDamagedLeft(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void setDamagedRight(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void updateSprite(IsoObject obj,
boolean brokenLeft,
boolean brokenRight)

**Parameters:**
- `IsoObject` `obj`
- `boolean` `brokenLeft`
- `boolean` `brokenRight`

**Returns:** `void`

### public void destroyFence(IsoObject obj,
IsoDirections dir)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`

**Returns:** `void`

### public boolean isBreakableObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public boolean isBreakableSprite(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `boolean`

### public IsoObject getBreakableObject(IsoGridSquare square,
boolean north)

**Parameters:**
- `IsoGridSquare` `square`
- `boolean` `north`

**Returns:** `IsoObject`

### public void addItems(IsoObject obj,
IsoGridSquare square)

**Parameters:**
- `IsoObject` `obj`
- `IsoGridSquare` `square`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\BrokenFences.html`*
