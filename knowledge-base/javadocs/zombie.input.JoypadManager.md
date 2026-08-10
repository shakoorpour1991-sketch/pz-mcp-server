---
title: zombie.input.JoypadManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.input
---

# zombie.input.JoypadManager

`public final class JoypadManager extends Object`

**Kind:** class · **Package:** zombie.input

## Inheritance
- java.lang.Object
- zombie.input.JoypadManager

## Fields

### public static final JoypadManager instance

### public final JoypadManager.Joypad[] joypads

### public final JoypadManager.Joypad[] joypadsController

### public final ArrayList<JoypadManager.Joypad> joypadList

### public final HashSet<String> activeControllerGuids

## Constructors

### public JoypadManager()

## Methods

### public void reloadControllerFiles()

**Returns:** `void`

### public void assignJoypad(int joypadIndex,
int player)

**Parameters:**
- `int` `joypadIndex`
- `int` `player`

**Returns:** `void`

### public JoypadManager.Joypad getFromPlayer(int player)

**Parameters:**
- `int` `player`

**Returns:** `JoypadManager.Joypad`

### public JoypadManager.Joypad getFromControllerID(int id)

**Parameters:**
- `int` `id`

**Returns:** `JoypadManager.Joypad`

### public void onPressed(int joypadIndex,
int buttonIdx)

**Parameters:**
- `int` `joypadIndex`
- `int` `buttonIdx`

**Returns:** `void`

### public boolean isMovementAxisBeingApplied(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `boolean`

### public float getJoypadAxis(int joypadIndex,
Predicate<JoypadManager.Joypad> predicate,
Function<JoypadManager.Joypad, Float> getAxis)

**Parameters:**
- `int` `joypadIndex`
- `Predicate<JoypadManager.Joypad>` `predicate`
- `Function<JoypadManager.Joypad, Float>` `getAxis`

**Returns:** `float`

### public void setJoypadAxis(int joypadIndex,
Consumers.Params1.ICallback<JoypadManager.Joypad, Float> setAxis,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `Consumers.Params1.ICallback<JoypadManager.Joypad, Float>` `setAxis`
- `float` `newValue`

**Returns:** `void`

### public boolean isAimingAxisBeingApplied(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `boolean`

### public boolean isDownPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isUpPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isRightPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isLeftPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isLBPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isRBPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isL3Pressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isR3Pressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isRTPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isLTPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public float getRTValue(int c)

**Parameters:**
- `int` `c`

**Returns:** `float`

### public float getLTValue(int c)

**Parameters:**
- `int` `c`

**Returns:** `float`

### public boolean isAPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isBPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isXPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isYPressed(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isAButtonStartPress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isBButtonStartPress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isXButtonStartPress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isYButtonStartPress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isAButtonReleasePress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isBButtonReleasePress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isXButtonReleasePress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isYButtonReleasePress(int c)

**Parameters:**
- `int` `c`

**Returns:** `boolean`

### public boolean isBackPressed(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `boolean`

### public boolean isStartPressed(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `boolean`

### public boolean isGuidePressed(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `boolean`

### public float getMovementAxisX(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public float getMovementAxisY(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public Vector2 getMovementAxis(int joypadIndex,
Vector2 out)

**Parameters:**
- `int` `joypadIndex`
- `Vector2` `out`

**Returns:** `Vector2`

### public float getAimingAxisX(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public float getAimingAxisY(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public Vector2 getAimingAxis(int joypadIndex,
Vector2 out)

**Parameters:**
- `int` `joypadIndex`
- `Vector2` `out`

**Returns:** `Vector2`

### public void onPressedAxis(int joypadIndex,
int i)

**Parameters:**
- `int` `joypadIndex`
- `int` `i`

**Returns:** `void`

### public void onPressedAxisNeg(int joypadIndex,
int i)

**Parameters:**
- `int` `joypadIndex`
- `int` `i`

**Returns:** `void`

### public void onPressedTrigger(int joypadIndex,
int i)

**Parameters:**
- `int` `joypadIndex`
- `int` `i`

**Returns:** `void`

### public void onPressedPov(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `void`

### public float getDeadZone(int joypadIndex,
int axis)

**Parameters:**
- `int` `joypadIndex`
- `int` `axis`

**Returns:** `float`

### public void setDeadZone(int joypadIndex,
int axis,
float value)

**Parameters:**
- `int` `joypadIndex`
- `int` `axis`
- `float` `value`

**Returns:** `void`

### public float getLeftTriggerDeadZone(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public void setLeftTriggerDeadZone(int joypadIndex,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `float` `newValue`

**Returns:** `void`

### public float getRightTriggerDeadZone(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public void setRightTriggerDeadZone(int joypadIndex,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `float` `newValue`

**Returns:** `void`

### public float getMovementAxisDeadZoneX(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public void setMovementAxisDeadZoneX(int joypadIndex,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `float` `newValue`

**Returns:** `void`

### public float getMovementAxisDeadZoneY(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public void setMovementAxisDeadZoneY(int joypadIndex,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `float` `newValue`

**Returns:** `void`

### public float getAimingAxisDeadZoneX(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public void setAimingAxisDeadZoneX(int joypadIndex,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `float` `newValue`

**Returns:** `void`

### public float getAimingAxisDeadZoneY(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `float`

### public void setAimingAxisDeadZoneY(int joypadIndex,
float newValue)

**Parameters:**
- `int` `joypadIndex`
- `float` `newValue`

**Returns:** `void`

### public void saveControllerSettings(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `void`

### public long getLastActivity(int joypadIndex)

**Parameters:**
- `int` `joypadIndex`

**Returns:** `long`

### public void setControllerActive(String guid,
boolean active)

**Parameters:**
- `String` `guid`
- `boolean` `active`

**Returns:** `void`

### public void syncActiveControllers()

**Returns:** `void`

### public boolean isJoypadConnected(int index)

**Parameters:**
- `int` `index`

**Returns:** `boolean`

### public void onControllerConnected(org.lwjglx.input.Controller controller)

**Parameters:**
- `org.lwjglx.input.Controller` `controller`

**Returns:** `void`

### public void onControllerDisconnected(org.lwjglx.input.Controller controller)

**Parameters:**
- `org.lwjglx.input.Controller` `controller`

**Returns:** `void`

### public void revertToKeyboardAndMouseFromMainMenu()

**Returns:** `void`

### public void revertToKeyboardAndMouse()

**Returns:** `void`

### public void renderUI()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\JoypadManager.html`*
