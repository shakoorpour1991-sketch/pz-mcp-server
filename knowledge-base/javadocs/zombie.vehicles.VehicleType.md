---
title: zombie.vehicles.VehicleType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleType

`public final class VehicleType extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleType

## Description

Contains all car model with their associated skin index

## Fields

### public final ArrayList<VehicleType.VehicleTypeDefinition> vehiclesDefinition

### public int chanceToSpawnNormal

### public int chanceToSpawnBurnt

### public int spawnRate

### public int chanceOfOverCar

### public boolean randomAngle

### public float baseVehicleQuality

### public String name

### public int chanceToPartDamage

### public boolean isSpecialCar

### public boolean isBurntCar

### public int chanceToSpawnSpecial

### public boolean forceSpawn

### public static final HashMap<String, VehicleType> vehicles

### public static final ArrayList<VehicleType> specialVehicles

## Constructors

### public VehicleType(String name)

**Parameters:**
- `String` `name`

## Methods

### public static void init()

**Returns:** `void`

### public static boolean hasTypeForZone(String zoneName)

**Parameters:**
- `String` `zoneName`

**Returns:** `boolean`

### public static VehicleType getRandomVehicleType(String zoneName)

**Parameters:**
- `String` `zoneName`

**Returns:** `VehicleType`

### public static VehicleType getRandomVehicleType(String zoneName,
Boolean doNormalWhenSpecific)

**Parameters:**
- `String` `zoneName`
- `Boolean` `doNormalWhenSpecific`

**Returns:** `VehicleType`

### public static VehicleType getTypeFromName(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleType`

### public float getBaseVehicleQuality()

**Returns:** `float`

### public float getRandomBaseVehicleQuality()

**Returns:** `float`

### public int getChanceToSpawnKey()

**Returns:** `int`

### public void setChanceToSpawnKey(int chanceToSpawnKey)

**Parameters:**
- `int` `chanceToSpawnKey`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleType.html`*
