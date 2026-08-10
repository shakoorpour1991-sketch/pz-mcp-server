---
title: zombie.erosion.ErosionMain
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.erosion
---

# zombie.erosion.ErosionMain

`public final class ErosionMain extends Object`

**Kind:** class · **Package:** zombie.erosion

## Inheritance
- java.lang.Object
- zombie.erosion.ErosionMain

## Constructors

### public ErosionMain(IsoSpriteManager isoSpriteManager,
boolean debug)

**Parameters:**
- `IsoSpriteManager` `isoSpriteManager`
- `boolean` `debug`

## Methods

### public static ErosionMain getInstance()

**Returns:** `ErosionMain`

### public ErosionConfig getConfig()

**Returns:** `ErosionConfig`

### public ErosionSeason getSeasons()

**Returns:** `ErosionSeason`

### public int getEtick()

**Returns:** `int`

### public IsoSpriteManager getSpriteManager()

**Returns:** `IsoSpriteManager`

### public void mainTimer()

**Returns:** `void`

### public void snowCheck()

**Returns:** `void`

### public int getSnowFraction()

**Returns:** `int`

### public int getSnowFractionYesterday()

**Returns:** `int`

### public boolean isSnow()

**Returns:** `boolean`

### public void sendState(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void receiveState(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void start()

**Returns:** `void`

### public void DebugUpdateMapNow()

**Returns:** `void`

### public static void LoadGridsquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public static void ChunkLoaded(IsoChunk isoChunk)

**Parameters:**
- `IsoChunk` `isoChunk`

**Returns:** `void`

### public static void EveryTenMinutes()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\ErosionMain.html`*
