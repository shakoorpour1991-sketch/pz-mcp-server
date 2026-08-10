---
title: zombie.characters.animals.VirtualAnimal
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.VirtualAnimal

`public final class VirtualAnimal extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.VirtualAnimal

## Fields

### public double nextRestTime

### public double nextEatTime

### public double id

### public String migrationGroup

### public float speed

### public int timeToEat

### public int timeToSleep

### public int trackChance

### public int poopChance

### public int brokenTwigsChance

### public int herbGrazeChance

### public int furChance

### public int flatHerbChance

### public double wakeTime

### public double eatStartTime

### public ArrayList<Integer> sleepPeriodStart

### public ArrayList<Integer> sleepPeriodEnd

### public ArrayList<Integer> eatPeriodStart

### public ArrayList<Integer> eatPeriodEnd

### public boolean debugForceSleep

### public boolean debugForceEat

### public AnimalZone zone

## Constructors

### public VirtualAnimal()

## Methods

### public float getX()

**Returns:** `float`

### public void setX(float x)

**Parameters:**
- `float` `x`

**Returns:** `void`

### public float getY()

**Returns:** `float`

### public void setY(float y)

**Parameters:**
- `float` `y`

**Returns:** `void`

### public float getZ()

**Returns:** `float`

### public void setZ(float z)

**Parameters:**
- `float` `z`

**Returns:** `void`

### public void setState(VirtualAnimalState state)

**Parameters:**
- `VirtualAnimalState` `state`

**Returns:** `void`

### public VirtualAnimalState getState()

**Returns:** `VirtualAnimalState`

### public void forceRest()

**Returns:** `void`

### public void forceEat()

**Returns:** `void`

### public void forceWakeUp()

**Returns:** `void`

### public void forceStopEat()

**Returns:** `void`

### public boolean isEating()

**Returns:** `boolean`

### public boolean isSleeping()

**Returns:** `boolean`

### public boolean isTimeToSleep()

**Returns:** `boolean`

### public boolean isTimeToEat()

**Returns:** `boolean`

### public String getNextSleepPeriod()

**Returns:** `String`

### public String getEndSleepPeriod()

**Returns:** `String`

### public String getEndEatPeriod()

**Returns:** `String`

### public String getNextEatPeriod()

**Returns:** `String`

### public void setRemoved(boolean bRemoved)

**Parameters:**
- `boolean` `bRemoved`

**Returns:** `void`

### public boolean isRemoved()

**Returns:** `boolean`

### public IsoAnimal findAnimalById(int animalID)

**Parameters:**
- `int` `animalID`

**Returns:** `IsoAnimal`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\VirtualAnimal.html`*
