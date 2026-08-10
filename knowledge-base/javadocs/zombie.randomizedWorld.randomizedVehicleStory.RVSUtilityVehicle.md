---
title: zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld.randomizedVehicleStory
---

# zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle

`public final class RVSUtilityVehicle extends RandomizedVehicleStoryBase`

**Kind:** class · **Package:** zombie.randomizedWorld.randomizedVehicleStory

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.RandomizedWorldBase
- zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
- zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle

## Description

An utility vehicle (mccoys, fire dept, police, ranger, postal..) with corresponding outfit zeds and sometimes tools

## Constructors

### public RVSUtilityVehicle()

## Methods

### public void randomizeVehicleStory(Zone zone,
IsoChunk chunk)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`

**Returns:** `void`

### public void doUtilityVehicle(Zone zone,
IsoChunk chunk,
String zoneName,
String scriptName,
String outfits,
Integer femaleChance,
String vehicleDistrib,
ArrayList<String> items,
int nbrOfItem,
boolean addTrailer)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `scriptName`
- `String` `outfits`
- `Integer` `femaleChance`
- `String` `vehicleDistrib`
- `ArrayList<String>` `items`
- `int` `nbrOfItem`
- `boolean` `addTrailer`

**Returns:** `void`

### public boolean initVehicleStorySpawner(Zone zone,
IsoChunk chunk,
boolean debug)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `boolean` `debug`

**Returns:** `boolean`

### public void spawnElement(VehicleStorySpawner spawner,
VehicleStorySpawner.Element element)

**Parameters:**
- `VehicleStorySpawner` `spawner`
- `VehicleStorySpawner.Element` `element`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\randomizedVehicleStory\RVSUtilityVehicle.html`*
