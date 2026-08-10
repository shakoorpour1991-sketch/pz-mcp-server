---
title: zombie.core.input.Input
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.input
---

# zombie.core.input.Input

`public final class Input extends Object`

**Kind:** class · **Package:** zombie.core.input

## Inheritance
- java.lang.Object
- zombie.core.input.Input

## Description

A wrapped for all keyboard, mouse and controller input

## Fields

### public static final int ANY_CONTROLLER

The controller index to pass to check all controllers

## Constructors

### public Input()

## Methods

### public static String getKeyName(int code)

get the character representation of the key identified by the specified code

**Parameters:**
- `int` `code` — The key code of the key to retrieve the name of

**Returns:** `String`

### public static int getKeyCode(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public int getControllerCount()

get a count of the number of controllers available

**Returns:** `int`

### public int getAxisCount(int index)

get the number of axis that are avaiable on a given controller

**Parameters:**
- `int` `index` — The index of the controller to check

**Returns:** `int`

### public float getAxisValue(int index,
int axis)

get the value of the axis with the given index

**Parameters:**
- `int` `index` — The index of the controller to check
- `int` `axis` — The index of the axis to read

**Returns:** `float`

### public String getAxisName(int index,
int axis)

get the name of the axis with the given index

**Parameters:**
- `int` `index` — The index of the controller to check
- `int` `axis` — The index of the axis to read

**Returns:** `String`

### public boolean isControllerLeftD(int index)

Check if the controller has the left direction pressed

**Parameters:**
- `int` `index` — The index of the controller to check

**Returns:** `boolean`

### public boolean isControllerRightD(int index)

Check if the controller has the right direction pressed

**Parameters:**
- `int` `index` — The index of the controller to check

**Returns:** `boolean`

### public boolean isControllerUpD(int index)

Check if the controller has the up direction pressed

**Parameters:**
- `int` `index` — The index of the controller to check

**Returns:** `boolean`

### public boolean isControllerDownD(int index)

Check if the controller has the down direction pressed

**Parameters:**
- `int` `index` — The index of the controller to check

**Returns:** `boolean`

### public boolean isButtonPressedD(int button,
int index)

Check if controller button is pressed

**Parameters:**
- `int` `button` — The index of the button to check
- `int` `index` — The index of the controller to check

**Returns:** `boolean`

### public boolean wasButtonPressed(int index,
int button)

Check if a controller button was pressed the previous frame.

**Parameters:**
- `int` `index` — The controller index.
- `int` `button` — The button index.

**Returns:** `boolean`

### public boolean isButtonStartPress(int index,
int button)

**Parameters:**
- `int` `index`
- `int` `button`

**Returns:** `boolean`

### public boolean isButtonReleasePress(int index,
int button)

**Parameters:**
- `int` `index`
- `int` `button`

**Returns:** `boolean`

### public void initControllers()

Initialise the controllers system

**Returns:** `void`

### public void poll()

Poll the state of the input

**Returns:** `void`

### public org.lwjglx.input.Controller getController(int index)

**Parameters:**
- `int` `index`

**Returns:** `org.lwjglx.input.Controller`

### public int getButtonCount(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public String getButtonName(int index,
int button)

**Parameters:**
- `int` `index`
- `int` `button`

**Returns:** `String`

### public void updateGameThread()

**Returns:** `void`

### public void quit()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\input\Input.html`*
