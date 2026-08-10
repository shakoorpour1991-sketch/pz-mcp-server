---
title: zombie.gameStates.IngameState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.gameStates
---

# zombie.gameStates.IngameState

`public final class IngameState extends GameState`

**Kind:** class · **Package:** zombie.gameStates

## Inheritance
- java.lang.Object
- zombie.gameStates.GameState
- zombie.gameStates.IngameState

## Fields

### public static int waitMul

### public static IngameState instance

### public static float draww

### public static float drawh

### public long numberTicks

### public boolean paused

### public float saveDelay

### public boolean showAnimationViewer

### public boolean showAttachmentEditor

### public boolean showChunkDebugger

### public boolean showSpriteModelEditor

### public boolean showTileGeometryEditor

### public boolean showGlobalObjectDebugger

### public String showVehicleEditor

### public String showWorldMapEditor

### public boolean showSeamEditor

### public static boolean loading

## Constructors

### public IngameState()

## Methods

### public static void renderDebugOverhead(IsoCell cell,
int drawFloor,
int tilew,
int offx,
int offy)

**Parameters:**
- `IsoCell` `cell`
- `int` `drawFloor`
- `int` `tilew`
- `int` `offx`
- `int` `offy`

**Returns:** `void`

### public static float translatePointX(float x,
float camX,
float zoom,
float offx)

**Parameters:**
- `float` `x`
- `float` `camX`
- `float` `zoom`
- `float` `offx`

**Returns:** `float`

### public static float invTranslatePointX(float x,
float camX,
float zoom,
float offx)

**Parameters:**
- `float` `x`
- `float` `camX`
- `float` `zoom`
- `float` `offx`

**Returns:** `float`

### public static float invTranslatePointY(float y,
float camY,
float zoom,
float offy)

**Parameters:**
- `float` `y`
- `float` `camY`
- `float` `zoom`
- `float` `offy`

**Returns:** `float`

### public static float translatePointY(float y,
float camY,
float zoom,
float offy)

**Parameters:**
- `float` `y`
- `float` `camY`
- `float` `zoom`
- `float` `offy`

**Returns:** `float`

### public static void renderRect(float x,
float y,
float w,
float h,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `w`
- `float` `h`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void renderLine(float x1,
float y1,
float x2,
float y2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void renderDebugOverhead2(IsoCell cell,
int drawFloor,
float zoom,
int offx,
int offy,
float xPos,
float yPos,
int draww,
int drawh)

**Parameters:**
- `IsoCell` `cell`
- `int` `drawFloor`
- `float` `zoom`
- `int` `offx`
- `int` `offy`
- `float` `xPos`
- `float` `yPos`
- `int` `draww`
- `int` `drawh`

**Returns:** `void`

### public static void copyWorld(String src,
String dest)

**Parameters:**
- `String` `src`
- `String` `dest`

**Returns:** `void`

### public static void copyDirectory(File sourceLocation,
File targetLocation)
throws IOException

**Parameters:**
- `File` `sourceLocation`
- `File` `targetLocation`

**Returns:** `void`

### public static void createWorld(String worldName)

**Parameters:**
- `String` `worldName`

**Returns:** `void`

### public void debugFullyStreamedIn(int squareX,
int squareY)

**Parameters:**
- `int` `squareX`
- `int` `squareY`

**Returns:** `void`

### public void UpdateStuff()

**Returns:** `void`

### public void enter()

**Returns:** `void`

### public void exit()

**Returns:** `void`

### public void yield()

**Returns:** `void`

### public GameState redirectState()

**Returns:** `GameState`

### public void reenter()

**Returns:** `void`

### public void renderframetext(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

### public void renderframe(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

### public void renderframeui()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public GameStateMachine.StateAction update()

**Returns:** `GameStateMachine.StateAction`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\gameStates\IngameState.html`*
