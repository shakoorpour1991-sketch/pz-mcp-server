---
title: org.lwjglx.input.Controllers
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.input
---

# org.lwjglx.input.Controllers

`public class Controllers extends Object`

**Kind:** class · **Package:** org.lwjglx.input

## Inheritance
- java.lang.Object
- org.lwjglx.input.Controllers

## Fields

### public static final int MAX_AXES

### public static final int MAX_BUTTONS

### public static final int MAX_CONTROLLERS

## Constructors

### public Controllers()

## Methods

### public static void create()

**Returns:** `void`

### public static void setControllerConnectedCallback(Consumer<Integer> consumer)

**Parameters:**
- `Consumer<Integer>` `consumer`

**Returns:** `void`

### public static void setControllerDisconnectedCallback(Consumer<Integer> consumer)

**Parameters:**
- `Consumer<Integer>` `consumer`

**Returns:** `void`

### public static int getControllerCount()

**Returns:** `int`

### public static Controller getController(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `Controller`

### public static boolean isCreated()

**Returns:** `boolean`

### public static void poll(GamepadState[] gamepadStates)

**Parameters:**
- `GamepadState[]` `gamepadStates`

**Returns:** `void`

### public static void setDebugToggleControllerPluggedIn(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\input\Controllers.html`*
