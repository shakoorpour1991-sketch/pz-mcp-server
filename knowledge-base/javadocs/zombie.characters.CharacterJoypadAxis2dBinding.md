---
title: zombie.characters.CharacterJoypadAxis2dBinding
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.characters
---

# zombie.characters.CharacterJoypadAxis2dBinding

`public enum CharacterJoypadAxis2dBinding extends Enum<CharacterJoypadAxis2dBinding>`

**Kind:** enum · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- java.lang.Enum<CharacterJoypadAxis2dBinding>
- zombie.characters.CharacterJoypadAxis2dBinding

## Fields

### public static final CharacterJoypadAxis2dBinding Movement

### public static final CharacterJoypadAxis2dBinding Aiming

## Methods

### public static CharacterJoypadAxis2dBinding[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `CharacterJoypadAxis2dBinding[]`

### public static CharacterJoypadAxis2dBinding valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `CharacterJoypadAxis2dBinding`

### public String getNameTranslationKey()

**Returns:** `String`

### public static CharacterJoypadAxis2dBinding[] allBindings()

**Returns:** `CharacterJoypadAxis2dBinding[]`

### public static CharacterJoypadAxis2dBinding fromString(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterJoypadAxis2dBinding`

### public JoypadAxis2d getJoypadAxis()

**Returns:** `JoypadAxis2d`

### public JoypadAxis2d getBinding()

**Returns:** `JoypadAxis2d`

### public void setBinding(JoypadAxis2d newBinding)

**Parameters:**
- `JoypadAxis2d` `newBinding`

**Returns:** `void`

### public void removeBinding(JoypadAxis2d binding)

**Parameters:**
- `JoypadAxis2d` `binding`

**Returns:** `void`

### public void moveBindingFrom(CharacterJoypadAxis2dBinding fromBinding)

**Parameters:**
- `CharacterJoypadAxis2dBinding` `fromBinding`

**Returns:** `void`

### public void setDefault()

**Returns:** `void`

### public static void setAllToDefault()

**Returns:** `void`

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

### public static CharacterJoypadAxis2dBinding[] findBindings(JoypadAxis2d joypadAxis)

**Parameters:**
- `JoypadAxis2d` `joypadAxis`

**Returns:** `CharacterJoypadAxis2dBinding[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterJoypadAxis2dBinding.html`*
