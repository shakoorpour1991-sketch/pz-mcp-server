---
title: zombie.iso.weather.WorldFlares
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.WorldFlares

`public class WorldFlares extends Object`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.iso.weather.WorldFlares

## Description

TurboTuTone.

## Fields

### public static final boolean ENABLED

### public static boolean debugDraw

### public static int nextId

## Constructors

### public WorldFlares()

## Methods

### public static void Clear()

**Returns:** `void`

### public static int getFlareCount()

**Returns:** `int`

### public static WorldFlares.Flare getFlare(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldFlares.Flare`

### public static WorldFlares.Flare getFlareID(int id)

**Parameters:**
- `int` `id`

**Returns:** `WorldFlares.Flare`

### public static void launchFlare(float lifetime,
int x,
int y,
int range,
float windSpeed,
float r,
float g,
float b,
float ri,
float gi,
float bi)

**Parameters:**
- `float` `lifetime`
- `int` `x`
- `int` `y`
- `int` `range`
- `float` `windSpeed`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `ri`
- `float` `gi`
- `float` `bi`

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static void applyFlaresForPlayer(RenderSettings.PlayerRenderSettings renderSettings,
int plrIndex,
IsoPlayer player)

**Parameters:**
- `RenderSettings.PlayerRenderSettings` `renderSettings`
- `int` `plrIndex`
- `IsoPlayer` `player`

**Returns:** `void`

### public static void setDebugDraw(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static boolean getDebugDraw()

**Returns:** `boolean`

### public static void debugRender()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\WorldFlares.html`*
