---
title: zombie.characters.Stats
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.Stats

`public class Stats extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.Stats

## Fields

### public int numVisibleZombies

### public int lastNumVisibleZombies

### public int numChasingZombies

### public int lastVeryCloseZombies

### public int musicZombiesVisible

### public int musicZombiesTargetingDistantNotMoving

### public int musicZombiesTargetingNearbyNotMoving

### public int musicZombiesTargetingDistantMoving

### public int musicZombiesTargetingNearbyMoving

## Constructors

### public Stats()

## Methods

### public void load(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void parse(ByteBuffer b,
byte field)

**Parameters:**
- `ByteBuffer` `b`
- `byte` `field`

**Returns:** `void`

### public void write(ByteBuffer b,
byte field)

**Parameters:**
- `ByteBuffer` `b`
- `byte` `field`

**Returns:** `void`

### public float get(CharacterStat stat)

**Parameters:**
- `CharacterStat` `stat`

**Returns:** `float`

### public boolean set(CharacterStat stat,
float value)

**Parameters:**
- `CharacterStat` `stat`
- `float` `value`

**Returns:** `boolean`

### public boolean add(CharacterStat stat,
float amount)

**Parameters:**
- `CharacterStat` `stat`
- `float` `amount`

**Returns:** `boolean`

### public boolean remove(CharacterStat stat,
float amount)

**Parameters:**
- `CharacterStat` `stat`
- `float` `amount`

**Returns:** `boolean`

### public boolean reset(CharacterStat stat)

**Parameters:**
- `CharacterStat` `stat`

**Returns:** `boolean`

### public boolean isAtMinimum(CharacterStat stat)

**Parameters:**
- `CharacterStat` `stat`

**Returns:** `boolean`

### public boolean isAtMaximum(CharacterStat stat)

**Parameters:**
- `CharacterStat` `stat`

**Returns:** `boolean`

### public boolean isAboveMinimum(CharacterStat stat)

**Parameters:**
- `CharacterStat` `stat`

**Returns:** `boolean`

### public void resetStats()

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public float getNicotineStress()

**Returns:** `float`

### public int getNumVisibleZombies()

**Returns:** `int`

### public int getNumChasingZombies()

**Returns:** `int`

### public void setLastNumberChasingZombies(int chasingZombies)

**Parameters:**
- `int` `chasingZombies`

**Returns:** `void`

### public int getNumVeryCloseZombies()

**Returns:** `int`

### public float getLastEndurance()

**Returns:** `float`

### public void setLastEndurance(float endurance)

**Parameters:**
- `float` `endurance`

**Returns:** `void`

### public float getEnduranceDangerWarning()

**Returns:** `float`

### public float getEnduranceWarning()

**Returns:** `float`

### public boolean isEnduranceRecharging()

**Returns:** `boolean`

### public int getVisibleZombies()

**Returns:** `int`

### public void setNumVisibleZombies(int numVisibleZombies)

**Parameters:**
- `int` `numVisibleZombies` — the NumVisibleZombies to set

**Returns:** `void`

### public boolean isTripping()

**Returns:** `boolean`

### public void setTripping(boolean tripping)

**Parameters:**
- `boolean` `tripping` — the Tripping to set

**Returns:** `void`

### public float getTrippingRotAngle()

**Returns:** `float`

### public void setTrippingRotAngle(float trippingRotAngle)

**Parameters:**
- `float` `trippingRotAngle` — the TrippingRotAngle to set

**Returns:** `void`

### public void addTrippingRotAngle(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\Stats.html`*
