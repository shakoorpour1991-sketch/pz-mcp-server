---
title: zombie.characters.HitReactionNetworkAI
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.HitReactionNetworkAI

`public class HitReactionNetworkAI extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.HitReactionNetworkAI

## Fields

### public final Vector2 startPosition

### public final Vector2 finalPosition

### public byte finalPositionZ

### public final Vector2 startDirection

### public final Vector2 finalDirection

## Constructors

### public HitReactionNetworkAI(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

## Methods

### public static boolean isEnabled(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean isSetup()

**Returns:** `boolean`

### public boolean isStarted()

**Returns:** `boolean`

### public void start()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void setup(float dropPositionX,
float dropPositionY,
byte dropPositionZ,
Float angle)

**Parameters:**
- `float` `dropPositionX`
- `float` `dropPositionY`
- `byte` `dropPositionZ`
- `Float` `angle`

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public void move()

**Returns:** `void`

### public boolean isDoSkipMovement()

**Returns:** `boolean`

### public String getDescription()

**Returns:** `String`

### public static void CalcHitReactionWeapon(IsoGameCharacter wielder,
IsoGameCharacter target,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `wielder`
- `IsoGameCharacter` `target`
- `HandWeapon` `weapon`

**Returns:** `void`

### public static void CalcHitReactionVehicle(IsoGameCharacter target,
BaseVehicle vehicle)

**Parameters:**
- `IsoGameCharacter` `target`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void process(float dropPositionX,
float dropPositionY,
float dropPositionZ,
float dropDirection)

**Parameters:**
- `float` `dropPositionX`
- `float` `dropPositionY`
- `float` `dropPositionZ`
- `float` `dropDirection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\HitReactionNetworkAI.html`*
