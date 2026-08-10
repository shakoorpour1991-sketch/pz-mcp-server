---
title: zombie.input.JoypadButton
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.input
---

# zombie.input.JoypadButton

`public enum JoypadButton extends Enum<JoypadButton>`

**Kind:** enum · **Package:** zombie.input

## Inheritance
- java.lang.Object
- java.lang.Enum<JoypadButton>
- zombie.input.JoypadButton

## Fields

### public static final JoypadButton A

### public static final JoypadButton B

### public static final JoypadButton X

### public static final JoypadButton Y

### public static final JoypadButton LeftStick

### public static final JoypadButton RightStick

### public static final JoypadButton LeftBump

### public static final JoypadButton RightBump

### public static final JoypadButton Back

### public static final JoypadButton Start

### public static final JoypadButton Guide

### public static final JoypadButton DPadLeft

### public static final JoypadButton DPadRight

### public static final JoypadButton DPadUp

### public static final JoypadButton DPadDown

## Methods

### public static JoypadButton[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `JoypadButton[]`

### public static JoypadButton valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `JoypadButton`

### public boolean isDown(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `boolean`

### public String getNameTranslationKey()

**Returns:** `String`

### public static int getButtonCount()

**Returns:** `int`

### public static boolean isButtonDown(int joypadBind,
int buttonIdx)

**Parameters:**
- `int` `joypadBind`
- `int` `buttonIdx`

**Returns:** `boolean`

### public static JoypadButton[] getButtons()

**Returns:** `JoypadButton[]`

### public static JoypadButton fromIndex(int buttonIdx)

**Parameters:**
- `int` `buttonIdx`

**Returns:** `JoypadButton`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\JoypadButton.html`*
