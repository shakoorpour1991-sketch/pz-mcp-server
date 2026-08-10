---
title: zombie.input.JoypadAxis1d
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.input
---

# zombie.input.JoypadAxis1d

`public enum JoypadAxis1d extends Enum<JoypadAxis1d>`

**Kind:** enum · **Package:** zombie.input

## Inheritance
- java.lang.Object
- java.lang.Enum<JoypadAxis1d>
- zombie.input.JoypadAxis1d

## Fields

### public static final JoypadAxis1d LeftTrigger

### public static final JoypadAxis1d RightTrigger

### public static final JoypadAxis1d LeftStickX

### public static final JoypadAxis1d LeftStickY

### public static final JoypadAxis1d RightStickX

### public static final JoypadAxis1d RightStickY

## Methods

### public static JoypadAxis1d[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `JoypadAxis1d[]`

### public static JoypadAxis1d valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `JoypadAxis1d`

### public String getNameTranslationKey()

**Returns:** `String`

### public float getValue(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `float`

### public static JoypadAxis1d[] getAxes()

**Returns:** `JoypadAxis1d[]`

### public static int getAxisCount()

**Returns:** `int`

### public float getDeadZone(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `float`

### public void setDeadZone(int joypadBind,
float newValue)

**Parameters:**
- `int` `joypadBind`
- `float` `newValue`

**Returns:** `void`

### public static JoypadAxis1d fromIndex(int axisIdx)

**Parameters:**
- `int` `axisIdx`

**Returns:** `JoypadAxis1d`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\JoypadAxis1d.html`*
