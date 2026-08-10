---
title: zombie.characters.animals.behavior.BaseAnimalBehavior
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals.behavior
---

# zombie.characters.animals.behavior.BaseAnimalBehavior

`public class BaseAnimalBehavior extends Object`

**Kind:** class · **Package:** zombie.characters.animals.behavior

## Inheritance
- java.lang.Object
- zombie.characters.animals.behavior.BaseAnimalBehavior

## Fields

### public float wanderMulMod

### public boolean blockMovement

### public int sitInTime

### public int sitOutTime

### public float blockedFor

### public float attackAnimalTimer

### public float lastAlerted

### public float behaviorCheckTimer

### public BehaviorAction behaviorAction

### public Object behaviorObject

### public boolean isDoingBehavior

### public float behaviorMaxTime

### public float behaviorFailsafe

### public float hutchPathTimer

### public float enterHutchTimerAfterDestroy

### public long forcedOutsideHutch

## Constructors

### public BaseAnimalBehavior(IsoAnimal parent)

**Parameters:**
- `IsoAnimal` `parent`

## Methods

### public void wanderIdle()

**Returns:** `void`

### public void walkedOnSpot()

**Returns:** `void`

### public void goAttack(IsoGameCharacter fightingOpponent)

**Parameters:**
- `IsoGameCharacter` `fightingOpponent`

**Returns:** `void`

### public void checkSit()

**Returns:** `void`

### public float pickRandomWanderInterval()

**Returns:** `float`

### public void updateAttackTimer()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void doBehaviorAction()

**Returns:** `void`

### public void fightAnimal()

**Returns:** `void`

### public void resetBehaviorAction()

**Returns:** `void`

### public void checkBehavior()

**Returns:** `void`

### public boolean callToHutch(IsoHutch hutch,
boolean force)

**Parameters:**
- `IsoHutch` `hutch`
- `boolean` `force`

**Returns:** `boolean`

### public boolean canGoToHutch(IsoHutch hutch,
boolean force)

**Parameters:**
- `IsoHutch` `hutch`
- `boolean` `force`

**Returns:** `boolean`

### public static void shuffleListSq(ArrayList<IsoGridSquare> a)

**Parameters:**
- `ArrayList<IsoGridSquare>` `a`

**Returns:** `void`

### public IsoGridSquare getNearestWaterSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `IsoGridSquare`

### public IsoObject tryAndGetPuddle(int searchRadius)

**Parameters:**
- `int` `searchRadius`

**Returns:** `IsoObject`

### public IsoObject tryAndGetGrassFloor()

**Returns:** `IsoObject`

### public boolean canDrinkFromTrough(IsoFeedingTrough trough)

**Parameters:**
- `IsoFeedingTrough` `trough`

**Returns:** `boolean`

### public boolean canEatThis(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean checkEatBehavior()

**Returns:** `boolean`

### public void forceEatFromMom()

**Returns:** `void`

### public ArrayList<IsoFeedingTrough> getRandomTroughList()

**Returns:** `ArrayList<IsoFeedingTrough>`

### public static void shuffleList(ArrayList<IsoFeedingTrough> a)

**Parameters:**
- `ArrayList<IsoFeedingTrough>` `a`

**Returns:** `void`

### public boolean eatFromVehicle()

**Returns:** `boolean`

### public void forceFleeFromChr(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void spotted(IsoMovingObject other,
boolean bForced,
float dist)

**Parameters:**
- `IsoMovingObject` `other`
- `boolean` `bForced`
- `float` `dist`

**Returns:** `void`

### public boolean canBeAttached()

**Returns:** `boolean`

### public void setBlockMovement(boolean block)

**Parameters:**
- `boolean` `block`

**Returns:** `void`

### public void setHourBeforeLeavingHutch(int hours)

**Parameters:**
- `int` `hours`

**Returns:** `void`

### public void setDoingBehavior(boolean doingBehavior)

**Parameters:**
- `boolean` `doingBehavior`

**Returns:** `void`

### public boolean isWildAndHurt()

**Returns:** `boolean`

### public void setWildAndHurt(boolean wildAndHurt)

**Parameters:**
- `boolean` `wildAndHurt`

**Returns:** `void`

### public float getWildDropDeadTimer()

**Returns:** `float`

### public void setWildDropDeadTimer(float wildDropDeadTimer)

**Parameters:**
- `float` `wildDropDeadTimer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\behavior\BaseAnimalBehavior.html`*
