---
title: zombie.characters.TimedInputHandler
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.TimedInputHandler

`public class TimedInputHandler extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.TimedInputHandler

## Fields

### public static final int MAX_CLICK_TIME

## Constructors

### public TimedInputHandler(TimedInputHandler.IsKeyDownCallback isKeyDownCallback,
TimedInputHandler.IsMouseKeyCallback isMouseKeyCallback,
TimedInputHandler.IsKeyMutedCallback isMuted)

**Parameters:**
- `TimedInputHandler.IsKeyDownCallback` `isKeyDownCallback`
- `TimedInputHandler.IsMouseKeyCallback` `isMouseKeyCallback`
- `TimedInputHandler.IsKeyMutedCallback` `isMuted`

## Methods

### public void mute()

**Returns:** `void`

### public boolean queryKeyDown()

**Returns:** `boolean`

### public boolean queryKeyIsMouse()

**Returns:** `boolean`

### public boolean queryIsMuted()

**Returns:** `boolean`

### public void updateState()

**Returns:** `void`

### public boolean isKeyDown()

**Returns:** `boolean`

### public boolean isKeyPressed()

**Returns:** `boolean`

### public boolean isKeyReleased()

**Returns:** `boolean`

### public boolean isMouseKey()

**Returns:** `boolean`

### public boolean wasMouseKey()

**Returns:** `boolean`

### public boolean isKeyClicked()

**Returns:** `boolean`

### public boolean isMuted()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\TimedInputHandler.html`*
