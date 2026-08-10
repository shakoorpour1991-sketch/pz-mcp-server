---
title: org.lwjglx.input.Controller
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.input
---

# org.lwjglx.input.Controller

`public final class Controller extends Object`

**Kind:** class · **Package:** org.lwjglx.input

## Inheritance
- java.lang.Object
- org.lwjglx.input.Controller

## Fields

### public GamepadState gamepadState

## Constructors

### public Controller(int arg0)

**Parameters:**
- `int` `arg0`

## Methods

### public int getID()

**Returns:** `int`

### public String getGUID()

**Returns:** `String`

### public boolean isGamepad()

**Returns:** `boolean`

### public String getJoystickName()

**Returns:** `String`

### public String getGamepadName()

**Returns:** `String`

### public int getAxisCount()

**Returns:** `int`

### public float getAxisValue(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `float`

### public int getButtonCount()

**Returns:** `int`

### public int getHatCount()

**Returns:** `int`

### public int getHatState()

**Returns:** `int`

### public ByteBuffer getJoystickHats(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public String getAxisName(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `String`

### public float getXAxisValue()

**Returns:** `float`

### public float getYAxisValue()

**Returns:** `float`

### public float getDeadZone(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `float`

### public void setDeadZone(int arg0,
float arg1)

**Parameters:**
- `int` `arg0`
- `float` `arg1`

**Returns:** `void`

### public float getPovX()

**Returns:** `float`

### public float getPovY()

**Returns:** `float`

### public boolean isButtonPressed(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `boolean`

### public boolean isButtonRelease(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `boolean`

### public String getButtonName(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `String`

### public void poll(GamepadState arg0)

**Parameters:**
- `GamepadState` `arg0`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\input\Controller.html`*
