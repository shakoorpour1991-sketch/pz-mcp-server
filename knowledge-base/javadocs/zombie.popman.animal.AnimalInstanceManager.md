---
title: zombie.popman.animal.AnimalInstanceManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman.animal
---

# zombie.popman.animal.AnimalInstanceManager

`public class AnimalInstanceManager extends Object`

**Kind:** class · **Package:** zombie.popman.animal

## Inheritance
- java.lang.Object
- zombie.popman.animal.AnimalInstanceManager

## Constructors

### public AnimalInstanceManager()

## Methods

### public static AnimalInstanceManager getInstance()

**Returns:** `AnimalInstanceManager`

### public short allocateID()

**Returns:** `short`

### public void add(IsoAnimal animal,
short onlineID)

**Parameters:**
- `IsoAnimal` `animal`
- `short` `onlineID`

**Returns:** `void`

### public void remove(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public IsoAnimal get(short id)

**Parameters:**
- `short` `id`

**Returns:** `IsoAnimal`

### public IsoObjectID<IsoAnimal> getAnimals()

**Returns:** `IsoObjectID<IsoAnimal>`

### public void update(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public static void removeAnimals(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void stop()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\animal\AnimalInstanceManager.html`*
