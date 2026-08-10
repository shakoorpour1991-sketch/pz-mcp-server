---
title: zombie.characters.animals.AnimalZoneJunction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalZoneJunction

`public final class AnimalZoneJunction extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalZoneJunction

## Fields

### public final AnimalZone zoneSelf

### public final int pointIndexSelf

### public final AnimalZone zoneOther

### public final int pointIndexOther

### public final float distanceFromStart

## Constructors

### public AnimalZoneJunction(AnimalZone zoneSelf,
int pointIndexSelf,
AnimalZone zoneOther,
int pointIndexOther)

**Parameters:**
- `AnimalZone` `zoneSelf`
- `int` `pointIndexSelf`
- `AnimalZone` `zoneOther`
- `int` `pointIndexOther`

## Methods

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public static AnimalZoneJunction load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `AnimalZoneJunction`

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public void getJunctionsAtSamePoint(ArrayList<AnimalZoneJunction> junctions)

**Parameters:**
- `ArrayList<AnimalZoneJunction>` `junctions`

**Returns:** `void`

### public boolean isFirstPointOnZone1()

**Returns:** `boolean`

### public boolean isLastPointOnZone1()

**Returns:** `boolean`

### public boolean isFirstPointOnZone2()

**Returns:** `boolean`

### public boolean isLastPointOnZone2()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalZoneJunction.html`*
