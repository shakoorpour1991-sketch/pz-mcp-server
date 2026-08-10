---
title: zombie.characters.animals.AnimalZone
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalZone

`public final class AnimalZone extends Zone`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.iso.zones.Zone
- zombie.characters.animals.AnimalZone

## Fields

### public String action

### public ArrayList<AnimalZoneJunction> junctions

## Constructors

### public AnimalZone()

### public AnimalZone(String name,
String type,
int x,
int y,
int z,
int w,
int h,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`
- `se.krka.kahlua.vm.KahluaTable` `properties`

### public AnimalZone(String name,
String type,
int x,
int y,
int z,
int w,
int h,
String action,
String animalType,
boolean spawnAnimal)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `w`
- `int` `h`
- `String` `action`
- `String` `animalType`
- `boolean` `spawnAnimal`

## Methods

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void save(ByteBuffer output,
Map<String,Integer> stringMap)

**Parameters:**
- `ByteBuffer` `output`
- `Map<String,Integer>` `stringMap`

**Returns:** `void`

### public AnimalZone load(ByteBuffer input,
int worldVersion,
Map<Integer,String> stringMap,
SharedStrings sharedStrings)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `Map<Integer,String>` `stringMap`
- `SharedStrings` `sharedStrings`

**Returns:** `AnimalZone`

### public AnimalZone load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `AnimalZone`

### public void Dispose()

**Returns:** `void`

### public int getIndexOfPoint(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public String getAction()

**Returns:** `String`

### public void addJunctionsWithOtherZone(AnimalZone other)

**Parameters:**
- `AnimalZone` `other`

**Returns:** `void`

### public void addJunction(int pointIndexSelf,
AnimalZone other,
int pointIndexOther)

**Parameters:**
- `int` `pointIndexSelf`
- `AnimalZone` `other`
- `int` `pointIndexOther`

**Returns:** `void`

### public void addJunction(AnimalZoneJunction junction)

**Parameters:**
- `AnimalZoneJunction` `junction`

**Returns:** `void`

### public void getJunctionsBetween(float t1,
float t2,
ArrayList<AnimalZoneJunction> junctions)

**Parameters:**
- `float` `t1`
- `float` `t2`
- `ArrayList<AnimalZoneJunction>` `junctions`

**Returns:** `void`

### public float getClosedPolylineLength()

**Returns:** `float`

### public boolean getPointOnPolyline(float t,
org.joml.Vector2f out)

**Parameters:**
- `float` `t`
- `org.joml.Vector2f` `out`

**Returns:** `boolean`

### public float getClosestPointOnPolyline(float px,
float py,
org.joml.Vector2f out)

**Parameters:**
- `float` `px`
- `float` `py`
- `org.joml.Vector2f` `out`

**Returns:** `float`

### public float getDistanceOfPointFromStart(int pointIndex)

**Parameters:**
- `int` `pointIndex`

**Returns:** `float`

### public boolean getDirectionOnPolyline(float t,
org.joml.Vector2f out)

**Parameters:**
- `float` `t`
- `org.joml.Vector2f` `out`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalZone.html`*
