---
title: zombie.characters.animals.AnimalZones
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalZones

`public final class AnimalZones extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalZones

## Fields

### public static final List<AnimalTracks> clientTracks

## Constructors

### public AnimalZones()

## Methods

### public static AnimalZones getInstance()

**Returns:** `AnimalZones`

### public static void addAnimalChunk(AnimalChunk chunk)

**Parameters:**
- `AnimalChunk` `chunk`

**Returns:** `void`

### public static void removeAnimalChunk(AnimalChunk chunk)

**Parameters:**
- `AnimalChunk` `chunk`

**Returns:** `void`

### public static void createJunctions(AnimalCell cell)

**Parameters:**
- `AnimalCell` `cell`

**Returns:** `void`

### public void spawnAnimalsInCell(AnimalCell cell)

**Parameters:**
- `AnimalCell` `cell`

**Returns:** `void`

### public static float getClosestZoneDist(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public AnimalZone getClosestZone(float x,
float y,
String action)

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `action`

**Returns:** `AnimalZone`

### public void render(UIWorldMap ui,
boolean bAnimals,
boolean bTracks)

**Parameters:**
- `UIWorldMap` `ui`
- `boolean` `bAnimals`
- `boolean` `bTracks`

**Returns:** `void`

### public static void updateVirtualAnimals()

**Returns:** `void`

### public AnimalZoneJunction getClosestJunction(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `AnimalZoneJunction`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalZones.html`*
