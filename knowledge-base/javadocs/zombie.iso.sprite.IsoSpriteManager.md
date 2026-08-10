---
title: zombie.iso.sprite.IsoSpriteManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.sprite
---

# zombie.iso.sprite.IsoSpriteManager

`public final class IsoSpriteManager extends Object`

**Kind:** class · **Package:** zombie.iso.sprite

## Inheritance
- java.lang.Object
- zombie.iso.sprite.IsoSpriteManager

## Fields

### public static final IsoSpriteManager instance

### public final HashMap<String, IsoSprite> namedMap

### public final gnu.trove.map.hash.TIntObjectHashMap<IsoSprite> intMap

## Constructors

### public IsoSpriteManager()

## Methods

### public void Dispose()

**Returns:** `void`

### public IsoSprite getSprite(int gid)

**Parameters:**
- `int` `gid`

**Returns:** `IsoSprite`

### public IsoSprite getSprite(String gid)

**Parameters:**
- `String` `gid`

**Returns:** `IsoSprite`

### public IsoSprite getOrAddSpriteCache(String tex)

**Parameters:**
- `String` `tex`

**Returns:** `IsoSprite`

### public IsoSprite getOrAddSpriteCache(String tex,
Color col)

**Parameters:**
- `String` `tex`
- `Color` `col`

**Returns:** `IsoSprite`

### public IsoSprite AddSprite(String tex)

**Parameters:**
- `String` `tex`

**Returns:** `IsoSprite`

### public IsoSprite AddSprite(String tex,
int id)

**Parameters:**
- `String` `tex`
- `int` `id`

**Returns:** `IsoSprite`

### public Map<String, IsoSprite> getNamedMap()

**Returns:** `Map<String, IsoSprite>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\sprite\IsoSpriteManager.html`*
