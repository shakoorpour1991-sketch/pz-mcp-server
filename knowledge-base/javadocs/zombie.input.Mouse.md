---
title: zombie.input.Mouse
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.input
---

# zombie.input.Mouse

`public final class Mouse extends Object`

**Kind:** class · **Package:** zombie.input

## Inheritance
- java.lang.Object
- zombie.input.Mouse

## Fields

### public static final int BTN_OFFSET

### public static final int BTN_0

### public static final int BTN_1

### public static final int BTN_2

### public static final int BTN_3

### public static final int BTN_4

### public static final int BTN_5

### public static final int BTN_6

### public static final int BTN_7

### public static final int LMB

### public static final int RMB

### public static final int MMB

### public static boolean[] buttonDownStates

### public static boolean[] buttonPrevStates

### public static long lastActivity

### public static int wheelDelta

### public static boolean[] uiCaptured

## Constructors

### public Mouse()

## Methods

### public static int getWheelState()

**Returns:** `int`

### public static int getButtonCount()

**Returns:** `int`

### public static int getXA()

**Returns:** `int`

### public static int getYA()

**Returns:** `int`

### public static int getX()

**Returns:** `int`

### public static int getY()

**Returns:** `int`

### public static boolean isButtonKey(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isButtonDown(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static boolean wasButtonDown(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static boolean isButtonPressed(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static boolean isButtonReleased(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static void UIBlockButtonDown(int number)

**Parameters:**
- `int` `number`

**Returns:** `void`

### public static boolean isButtonDownUICheck(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static boolean isRightDelay()

**Returns:** `boolean`

### public static boolean isLeftDown()

**Returns:** `boolean`

### public static boolean isLeftPressed()

**Returns:** `boolean`

### public static boolean isLeftReleased()

**Returns:** `boolean`

### public static boolean isLeftUp()

**Returns:** `boolean`

### public static boolean isMiddleDown()

**Returns:** `boolean`

### public static boolean isMiddlePressed()

**Returns:** `boolean`

### public static boolean isMiddleReleased()

**Returns:** `boolean`

### public static boolean isMiddleUp()

**Returns:** `boolean`

### public static boolean isRightDown()

**Returns:** `boolean`

### public static boolean isRightPressed()

**Returns:** `boolean`

### public static boolean isRightReleased()

**Returns:** `boolean`

### public static boolean isRightUp()

**Returns:** `boolean`

### public static void update()

**Returns:** `void`

### public static void poll()

**Returns:** `void`

### public static void setXY(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static org.lwjglx.input.Cursor loadCursor(String filename)
throws org.lwjglx.LWJGLException

**Parameters:**
- `String` `filename`

**Returns:** `org.lwjglx.input.Cursor`

### public static void initCustomCursor()

**Returns:** `void`

### public static void setCursorVisible(boolean bVisible)

**Parameters:**
- `boolean` `bVisible`

**Returns:** `void`

### public static boolean isCursorVisible()

**Returns:** `boolean`

### public static void renderCursorTexture()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\Mouse.html`*
