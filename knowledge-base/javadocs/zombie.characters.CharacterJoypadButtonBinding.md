---
title: zombie.characters.CharacterJoypadButtonBinding
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.characters
---

# zombie.characters.CharacterJoypadButtonBinding

`public enum CharacterJoypadButtonBinding extends Enum<CharacterJoypadButtonBinding>`

**Kind:** enum · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- java.lang.Enum<CharacterJoypadButtonBinding>
- zombie.characters.CharacterJoypadButtonBinding

## Fields

### public static final CharacterJoypadButtonBinding Aim

### public static final CharacterJoypadButtonBinding PrecisionAim

### public static final CharacterJoypadButtonBinding Melee

### public static final CharacterJoypadButtonBinding Attack

### public static final CharacterJoypadButtonBinding Run

### public static final CharacterJoypadButtonBinding Interact

### public static final CharacterJoypadButtonBinding WalkTo

### public static final CharacterJoypadButtonBinding Crouch

### public static final CharacterJoypadButtonBinding ReloadWeapon

### public static final CharacterJoypadButtonBinding RackFirearm

### public static final CharacterJoypadButtonBinding Sprint

### public static final CharacterJoypadButtonBinding CancelAction

### public static final CharacterJoypadButtonBinding ManualFloorAtk

### public static final CharacterJoypadButtonBinding Inventory

### public static final CharacterJoypadButtonBinding Loot

### public static final CharacterJoypadButtonBinding ClosePanel

### public static final CharacterJoypadButtonBinding CycleLoot

### public static final CharacterJoypadButtonBinding CycleInventory

### public static final CharacterJoypadButtonBinding CycleTabsLeft

### public static final CharacterJoypadButtonBinding CycleTabsRight

### public static final CharacterJoypadButtonBinding TransferItem

### public static final CharacterJoypadButtonBinding InteractOptions

### public static final CharacterJoypadButtonBinding ClimbThrough

### public static final CharacterJoypadButtonBinding SmashWindow

### public static final CharacterJoypadButtonBinding Brakes

### public static final CharacterJoypadButtonBinding CruiseControl

### public static final CharacterJoypadButtonBinding ZoomIn

### public static final CharacterJoypadButtonBinding ZoomOut

## Methods

### public static CharacterJoypadButtonBinding[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `CharacterJoypadButtonBinding[]`

### public static CharacterJoypadButtonBinding valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `CharacterJoypadButtonBinding`

### public static CharacterJoypadButtonBinding[] allBindings()

**Returns:** `CharacterJoypadButtonBinding[]`

### public static CharacterJoypadButtonBinding findBinding(JoypadButton joypadButton)

**Parameters:**
- `JoypadButton` `joypadButton`

**Returns:** `CharacterJoypadButtonBinding`

### public static CharacterJoypadButtonBinding[] findBindings(JoypadButton joypadButton)

**Parameters:**
- `JoypadButton` `joypadButton`

**Returns:** `CharacterJoypadButtonBinding[]`

### public static CharacterJoypadButtonBinding[] findBindings(JoypadAxis1d joypadAxis)

**Parameters:**
- `JoypadAxis1d` `joypadAxis`

**Returns:** `CharacterJoypadButtonBinding[]`

### public static CharacterJoypadButtonBinding[] findBindings(JoypadAxis2d joypadAxis)

**Parameters:**
- `JoypadAxis2d` `joypadAxis`

**Returns:** `CharacterJoypadButtonBinding[]`

### public static CharacterJoypadButtonBinding fromString(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterJoypadButtonBinding`

### public String getNameTranslationKey()

**Returns:** `String`

### public JoypadButton getJoypadButton()

**Returns:** `JoypadButton`

### public JoypadAxis1d getJoypadAxis1d()

**Returns:** `JoypadAxis1d`

### public JoypadAxis2d getJoypadAxis2d()

**Returns:** `JoypadAxis2d`

### public CharacterJoypadButtonBinding.IsDownBinding getBinding()

**Returns:** `CharacterJoypadButtonBinding.IsDownBinding`

### public float getAxisMinThreshold()

**Returns:** `float`

### public float getAxisMaxThreshold()

**Returns:** `float`

### public boolean isAxisMaxThresholdInfinity()

**Returns:** `boolean`

### public boolean containsBinding(JoypadButton button)

**Parameters:**
- `JoypadButton` `button`

**Returns:** `boolean`

### public boolean containsBinding(JoypadAxis1d axis1d)

**Parameters:**
- `JoypadAxis1d` `axis1d`

**Returns:** `boolean`

### public boolean containsBinding(JoypadAxis2d axis2d)

**Parameters:**
- `JoypadAxis2d` `axis2d`

**Returns:** `boolean`

### public void removeBinding(JoypadButton button)

**Parameters:**
- `JoypadButton` `button`

**Returns:** `void`

### public void removeBinding(JoypadAxis1d axis1d)

**Parameters:**
- `JoypadAxis1d` `axis1d`

**Returns:** `void`

### public void removeBinding(JoypadAxis2d axis2d)

**Parameters:**
- `JoypadAxis2d` `axis2d`

**Returns:** `void`

### public void addBinding(JoypadButton button)

**Parameters:**
- `JoypadButton` `button`

**Returns:** `void`

### public void addBinding(JoypadAxis1d axis1d)

**Parameters:**
- `JoypadAxis1d` `axis1d`

**Returns:** `void`

### public void addBinding(JoypadAxis2d axis2d)

**Parameters:**
- `JoypadAxis2d` `axis2d`

**Returns:** `void`

### public void moveBindingFrom(CharacterJoypadButtonBinding fromBinding)

**Parameters:**
- `CharacterJoypadButtonBinding` `fromBinding`

**Returns:** `void`

### public void setBinding(JoypadButton newBinding)

**Parameters:**
- `JoypadButton` `newBinding`

**Returns:** `void`

### public void setBinding(JoypadAxis1d axis1d,
float min,
float max)

**Parameters:**
- `JoypadAxis1d` `axis1d`
- `float` `min`
- `float` `max`

**Returns:** `void`

### public void setBinding(JoypadAxis1d axis1d,
float min)

**Parameters:**
- `JoypadAxis1d` `axis1d`
- `float` `min`

**Returns:** `void`

### public void setBinding(JoypadAxis2d axis2d,
float min,
float max)

**Parameters:**
- `JoypadAxis2d` `axis2d`
- `float` `min`
- `float` `max`

**Returns:** `void`

### public void setBinding(JoypadAxis2d axis2d,
float min)

**Parameters:**
- `JoypadAxis2d` `axis2d`
- `float` `min`

**Returns:** `void`

### public void setDefault()

**Returns:** `void`

### public static void setAllToDefault()

**Returns:** `void`

### public boolean isDown(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterJoypadButtonBinding.html`*
