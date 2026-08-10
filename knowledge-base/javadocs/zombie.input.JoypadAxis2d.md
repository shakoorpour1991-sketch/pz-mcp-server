---
title: zombie.input.JoypadAxis2d
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.input
---

# zombie.input.JoypadAxis2d

`public enum JoypadAxis2d extends Enum<JoypadAxis2d>`

**Kind:** enum · **Package:** zombie.input

## Inheritance
- java.lang.Object
- java.lang.Enum<JoypadAxis2d>
- zombie.input.JoypadAxis2d

## Fields

### public static final JoypadAxis2d LeftStick

### public static final JoypadAxis2d RightStick

## Methods

### public static JoypadAxis2d[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `JoypadAxis2d[]`

### public static JoypadAxis2d valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `JoypadAxis2d`

### public String getNameTranslationKey()

**Returns:** `String`

### public float getLength(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `float`

### public Vector2 getValue(int joypadBind,
Vector2 out)

**Parameters:**
- `int` `joypadBind`
- `Vector2` `out`

**Returns:** `Vector2`

### public float getValueX(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `float`

### public float getValueY(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `float`

### public boolean isApplied(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `boolean`

### public static JoypadAxis2d[] getAxes()

**Returns:** `JoypadAxis2d[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\JoypadAxis2d.html`*
