---
title: zombie.popman.ZombieStateFlags
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.ZombieStateFlags

`public final class ZombieStateFlags extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.ZombieStateFlags

## Constructors

### public ZombieStateFlags()

### public ZombieStateFlags(int flags)

**Parameters:**
- `int` `flags`

### public ZombieStateFlags(ZombieStateFlag... flags)

**Parameters:**
- `ZombieStateFlag...` `flags`

## Methods

### public static ZombieStateFlags fromInt(int stateFlags)

**Parameters:**
- `int` `stateFlags`

**Returns:** `ZombieStateFlags`

### public static int intFromZombie(IsoZombie fromZombie)

**Parameters:**
- `IsoZombie` `fromZombie`

**Returns:** `int`

### public static ZombieStateFlags fromZombie(IsoZombie fromZombie)

**Parameters:**
- `IsoZombie` `fromZombie`

**Returns:** `ZombieStateFlags`

### public void setFlag(ZombieStateFlag flag)

**Parameters:**
- `ZombieStateFlag` `flag`

**Returns:** `void`

### public void clearFlag(ZombieStateFlag flag)

**Parameters:**
- `ZombieStateFlag` `flag`

**Returns:** `void`

### public void setFlag(ZombieStateFlag flag,
boolean isTrue)

**Parameters:**
- `ZombieStateFlag` `flag`
- `boolean` `isTrue`

**Returns:** `void`

### public boolean checkFlag(ZombieStateFlag flag)

**Parameters:**
- `ZombieStateFlag` `flag`

**Returns:** `boolean`

### public static int setFlag(int state,
ZombieStateFlag flag)

**Parameters:**
- `int` `state`
- `ZombieStateFlag` `flag`

**Returns:** `int`

### public static int clearFlag(int state,
ZombieStateFlag flag)

**Parameters:**
- `int` `state`
- `ZombieStateFlag` `flag`

**Returns:** `int`

### public static int setFlag(int state,
ZombieStateFlag flag,
boolean isTrue)

**Parameters:**
- `int` `state`
- `ZombieStateFlag` `flag`
- `boolean` `isTrue`

**Returns:** `int`

### public static boolean checkFlag(int state,
ZombieStateFlag flag)

**Parameters:**
- `int` `state`
- `ZombieStateFlag` `flag`

**Returns:** `boolean`

### public int asInt()

**Returns:** `int`

### public boolean isInitialized()

**Returns:** `boolean`

### public boolean isCrawling()

**Returns:** `boolean`

### public boolean isCanWalk()

**Returns:** `boolean`

### public boolean isFakeDead()

**Returns:** `boolean`

### public boolean isCanCrawlUnderVehicle()

**Returns:** `boolean`

### public boolean isReanimatedForGrappleOnly()

**Returns:** `boolean`

### public ZombieStateFlag[] toArray()

**Returns:** `ZombieStateFlag[]`

### public String toString()

**Returns:** `String`

### public static String intToString(int state)

**Parameters:**
- `int` `state`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\ZombieStateFlags.html`*
