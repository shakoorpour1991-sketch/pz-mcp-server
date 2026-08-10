---
title: zombie.gameStates.MainScreenState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.gameStates
---

# zombie.gameStates.MainScreenState

`public final class MainScreenState extends GameState`

**Kind:** class · **Package:** zombie.gameStates

## Inheritance
- java.lang.Object
- zombie.gameStates.GameState
- zombie.gameStates.MainScreenState

## Fields

### public static final String VERSION

### public static fmod.fmod.Audio ambient

### public static float totalScale

### public float alpha

### public float alphaStep

### public final ArrayList<MainScreenState.ScreenElement> elements

### public float targetAlpha

### public static MainScreenState instance

### public boolean showLogo

### public boolean lightningTimelineMarker

### public UIWorldMap worldMap

### public float lightningDelta

### public float lightningTargetDelta

### public float lightningFullTimer

### public float lightningCount

### public float lightOffCount

## Constructors

### public MainScreenState()

## Methods

### public static void main(String[] args)

**Parameters:**
- `String[]` `args`

**Returns:** `void`

### public static void DrawTexture(Texture tex,
int x,
int y,
int width,
int height,
float alpha)

**Parameters:**
- `Texture` `tex`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `float` `alpha`

**Returns:** `void`

### public static void DrawTexture(Texture tex,
int x,
int y,
int width,
int height,
Color col)

**Parameters:**
- `Texture` `tex`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `Color` `col`

**Returns:** `void`

### public void enter()

**Returns:** `void`

### public static MainScreenState getInstance()

**Returns:** `MainScreenState`

### public boolean ShouldShowLogo()

**Returns:** `boolean`

### public void exit()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public static void preloadBackgroundTextures()

**Returns:** `void`

### public void renderBackground()

**Returns:** `void`

### public GameStateMachine.StateAction update()

**Returns:** `GameStateMachine.StateAction`

### public void setConnectToServerState(ConnectToServerState state)

**Parameters:**
- `ConnectToServerState` `state`

**Returns:** `void`

### public static org.lwjgl.glfw.GLFWImage.Buffer loadIcons()

**Returns:** `org.lwjgl.glfw.GLFWImage.Buffer`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\gameStates\MainScreenState.html`*
