---
title: zombie.iso.objects.IsoFireManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoFireManager

`public class IsoFireManager extends Object`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.iso.objects.IsoFireManager

## Fields

### public static double redOscilator

### public static double greenOscilator

### public static double blueOscilator

### public static double redOscilatorRate

### public static double greenOscilatorRate

### public static double blueOscilatorRate

### public static double redOscilatorVal

### public static double greenOscilatorVal

### public static double blueOscilatorVal

### public static double oscilatorSpeedScalar

### public static double oscilatorEffectScalar

### public static int maxFireObjects

### public static int fireRecalcDelay

### public static int fireRecalc

### public static boolean lightCalcFromBurningCharacters

### public static float fireAlpha

### public static float smokeAlpha

### public static final float FIRE_ANIM_DELAY

### public static float smokeAnimDelay

### public static final ColorInfo FIRE_TINT_MOD

### public static ColorInfo smokeTintMod

### public static final ArrayList<IsoFire> FireStack

### public static final ArrayList<IsoGameCharacter> CharactersOnFire_Stack

## Constructors

### public IsoFireManager()

## Methods

### public static void Add(IsoFire newFire)

**Parameters:**
- `IsoFire` `newFire`

**Returns:** `void`

### public static void AddBurningCharacter(IsoGameCharacter burningCharacter)

**Parameters:**
- `IsoGameCharacter` `burningCharacter`

**Returns:** `void`

### public static void Fire_LightCalc(IsoGridSquare fireSquare,
IsoGridSquare testSquare,
int playerIndex)

**Parameters:**
- `IsoGridSquare` `fireSquare`
- `IsoGridSquare` `testSquare`
- `int` `playerIndex`

**Returns:** `void`

### public static void LightTileWithFire(IsoGridSquare testSquare)

**Parameters:**
- `IsoGridSquare` `testSquare`

**Returns:** `void`

### public static void explode(IsoCell cell,
IsoGridSquare gridSquare,
int power)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `int` `power`

**Returns:** `void`

### @Deprecated
public static void MolotovSmash(IsoCell cell,
IsoGridSquare gridSquare)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`

**Returns:** `void`

### public static void Remove(IsoFire dyingFire)

**Parameters:**
- `IsoFire` `dyingFire`

**Returns:** `void`

### public static void RemoveBurningCharacter(IsoGameCharacter burningCharacter)

**Parameters:**
- `IsoGameCharacter` `burningCharacter`

**Returns:** `void`

### public static void StartFire(IsoCell cell,
IsoGridSquare gridSquare,
boolean igniteOnAny,
int fireStartingEnergy,
int life)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `igniteOnAny`
- `int` `fireStartingEnergy`
- `int` `life`

**Returns:** `void`

### public static void StartSmoke(IsoCell cell,
IsoGridSquare gridSquare,
boolean igniteOnAny,
int fireStartingEnergy,
int life)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `igniteOnAny`
- `int` `fireStartingEnergy`
- `int` `life`

**Returns:** `void`

### public static void StartFire(IsoCell cell,
IsoGridSquare gridSquare,
boolean igniteOnAny,
int fireStartingEnergy)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `igniteOnAny`
- `int` `fireStartingEnergy`

**Returns:** `void`

### public static void addCharacterOnFire(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public static void deleteCharacterOnFire(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public static void Update()

**Returns:** `void`

### public static void updateSound(IsoFire fire)

**Parameters:**
- `IsoFire` `fire`

**Returns:** `void`

### public static void stopSound(IsoFire fire)

**Parameters:**
- `IsoFire` `fire`

**Returns:** `void`

### public static void RemoveAllOn(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoFireManager.html`*
