---
title: zombie.iso.IsoCamera
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoCamera

`public class IsoCamera extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoCamera

## Fields

### public static final IsoCamera.FrameState frameState

### public static final PlayerCamera[] cameras

### public static int playerOffsetX

### public static int playerOffsetY

## Constructors

### public IsoCamera()

## Methods

### public static void init()

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static void updateAll()

**Returns:** `void`

### public static void SetCharacterToFollow(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public static float getRightClickOffX()

**Returns:** `float`

### public static float getRightClickOffY()

**Returns:** `float`

### public static float getOffX()

**Returns:** `float`

### public static float getOffX(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public static float getTOffX()

**Returns:** `float`

### public static void setOffX(float aOffX)

**Parameters:**
- `float` `aOffX` — the OffX to set

**Returns:** `void`

### public static float getOffY()

**Returns:** `float`

### public static float getOffY(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public static float getTOffY()

**Returns:** `float`

### public static void setOffY(float aOffY)

**Parameters:**
- `float` `aOffY` — the OffY to set

**Returns:** `void`

### public static float getLastOffX()

**Returns:** `float`

### public static void setLastOffX(float aLastOffX)

**Parameters:**
- `float` `aLastOffX` — the lastOffX to set

**Returns:** `void`

### public static float getLastOffY()

**Returns:** `float`

### public static void setLastOffY(float aLastOffY)

**Parameters:**
- `float` `aLastOffY` — the lastOffY to set

**Returns:** `void`

### public static IsoGameCharacter getCameraCharacter()

**Returns:** `IsoGameCharacter`

### public static float getCameraCharacterZ()

**Returns:** `float`

### public static boolean setCameraCharacter(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `boolean`

### public static void clearCameraCharacter()

**Returns:** `void`

### public static int getTargetTileY()

**Returns:** `int`

### public static void setTargetTileY(int aTargetTileY)

**Parameters:**
- `int` `aTargetTileY` — the TargetTileY to set

**Returns:** `void`

### public static int getScreenLeft(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getScreenWidth(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getScreenTop(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getScreenHeight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getOffscreenLeft(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getOffscreenWidth(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getOffscreenTop(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static int getOffscreenHeight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoCamera.html`*
