---
title: zombie.iso.objects.RainManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.RainManager

`public class RainManager extends Object`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.iso.objects.RainManager

## Fields

### public static int numActiveRainSplashes

### public static int numActiveRaindrops

### public static int maxRainSplashObjects

### public static int maxRaindropObjects

### public static float rainSplashAnimDelay

### public static int addNewSplashesDelay

### public static int addNewSplashesTimer

### public static float raindropGravity

### public static float gravModMin

### public static float gravModMax

### public static float raindropStartDistance

### public static IsoGridSquare[] playerLocation

### public static IsoGridSquare[] playerOldLocation

### public static boolean playerMoved

### public static int rainRadius

### public static fmod.fmod.Audio rainAmbient

### public static fmod.fmod.Audio thunderAmbient

### public static ColorInfo rainSplashTintMod

### public static ColorInfo raindropTintMod

### public static ColorInfo darkRaindropTintMod

### public static ArrayList<IsoRainSplash> rainSplashStack

### public static ArrayList<IsoRaindrop> raindropStack

### public static Stack<IsoRainSplash> rainSplashReuseStack

### public static Stack<IsoRaindrop> raindropReuseStack

### public static float rainIntensity

### public static float rainDesiredIntensity

### public static int randRainMin

### public static int randRainMax

## Constructors

### public RainManager()

## Methods

### public static void reset()

**Returns:** `void`

### public static void AddRaindrop(IsoRaindrop newRaindrop)

**Parameters:**
- `IsoRaindrop` `newRaindrop`

**Returns:** `void`

### public static void AddRainSplash(IsoRainSplash newRainSplash)

**Parameters:**
- `IsoRainSplash` `newRainSplash`

**Returns:** `void`

### public static void AddSplashes()

**Returns:** `void`

### public static void RemoveRaindrop(IsoRaindrop dyingRaindrop)

**Parameters:**
- `IsoRaindrop` `dyingRaindrop`

**Returns:** `void`

### public static void RemoveRainSplash(IsoRainSplash dyingRainSplash)

**Parameters:**
- `IsoRainSplash` `dyingRainSplash`

**Returns:** `void`

### public static void SetPlayerLocation(int playerIndex,
IsoGridSquare playerCurrentSquare)

**Parameters:**
- `int` `playerIndex`
- `IsoGridSquare` `playerCurrentSquare`

**Returns:** `void`

### public static Boolean isRaining()

**Returns:** `Boolean`

### public static void stopRaining()

**Returns:** `void`

### public static void startRaining()

**Returns:** `void`

### public static void StartRaindrop(IsoCell cell,
IsoGridSquare gridSquare,
boolean canSee)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `canSee`

**Returns:** `void`

### public static void StartRainSplash(IsoCell cell,
IsoGridSquare gridSquare,
boolean canSee)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `canSee`

**Returns:** `void`

### public static void Update()

**Returns:** `void`

### public static void UpdateServer()

**Returns:** `void`

### public static void setRandRainMax(int pRandRainMax)

**Parameters:**
- `int` `pRandRainMax`

**Returns:** `void`

### public static void setRandRainMin(int pRandRainMin)

**Parameters:**
- `int` `pRandRainMin`

**Returns:** `void`

### public static boolean inBounds(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public static void RemoveAllOn(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static float getRainIntensity()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\RainManager.html`*
