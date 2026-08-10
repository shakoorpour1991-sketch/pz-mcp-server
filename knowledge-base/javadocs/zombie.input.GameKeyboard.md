---
title: zombie.input.GameKeyboard
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.input
---

# zombie.input.GameKeyboard

`public final class GameKeyboard extends Object`

**Kind:** class · **Package:** zombie.input

## Inheritance
- java.lang.Object
- zombie.input.GameKeyboard

## Fields

### public static boolean noEventsWhileLoading

### public static boolean doLuaKeyPressed

## Constructors

### public GameKeyboard()

## Methods

### public static void update()

**Returns:** `void`

### public static void poll()

**Returns:** `void`

### public static boolean isKeyDownRaw(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean wasKeyDownRaw(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isKeyPressed(int key)

Has the key been pressed. Not continuous. That is, is the key down now, but was not down before.

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isKeyPressed(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `boolean`

### public static int whichKeyPressed(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public static boolean isKeyDown(int key)

Is the key down. Continuous.

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isKeyDown(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `boolean`

### public static int whichKeyDown(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public static int whichKeyDownIgnoreMouse(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public static boolean wasKeyDown(int key)

Was they key down last frame. Continuous.

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean wasKeyDown(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `boolean`

### public static int whichKeyWasDown(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public static void eatKeyPress(int key)

**Parameters:**
- `int` `key`

**Returns:** `void`

### public static void setDoLuaKeyPressed(boolean doIt)

**Parameters:**
- `boolean` `doIt`

**Returns:** `void`

### public static org.lwjglx.input.KeyEventQueue getEventQueue()

**Returns:** `org.lwjglx.input.KeyEventQueue`

### public static org.lwjglx.input.KeyEventQueue getEventQueuePolling()

**Returns:** `org.lwjglx.input.KeyEventQueue`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\GameKeyboard.html`*
