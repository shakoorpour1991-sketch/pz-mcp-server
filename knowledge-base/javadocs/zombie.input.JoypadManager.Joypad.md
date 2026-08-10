---
title: zombie.input.JoypadManager.Joypad
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.input
---

# zombie.input.JoypadManager.Joypad

`public static final class JoypadManager.Joypad extends Object`

**Kind:** class · **Package:** zombie.input

## Inheritance
- java.lang.Object
- zombie.input.JoypadManager.Joypad

## Constructors

### public Joypad()

## Methods

### public boolean isDownPressed()

**Returns:** `boolean`

### public boolean isUpPressed()

**Returns:** `boolean`

### public boolean isRightPressed()

**Returns:** `boolean`

### public boolean isLeftPressed()

**Returns:** `boolean`

### public boolean isLBPressed()

**Returns:** `boolean`

### public boolean isRBPressed()

**Returns:** `boolean`

### public boolean isL3Pressed()

**Returns:** `boolean`

### public boolean isR3Pressed()

**Returns:** `boolean`

### public boolean isRTPressed()

**Returns:** `boolean`

### public boolean isLTPressed()

**Returns:** `boolean`

### public float getRTValue()

**Returns:** `float`

### public float getLTValue()

**Returns:** `float`

### public boolean isAPressed()

**Returns:** `boolean`

### public boolean isBPressed()

**Returns:** `boolean`

### public boolean isXPressed()

**Returns:** `boolean`

### public boolean isYPressed()

**Returns:** `boolean`

### public boolean isBackPressed()

**Returns:** `boolean`

### public boolean isStartPressed()

**Returns:** `boolean`

### public boolean isGuidePressed()

**Returns:** `boolean`

### public boolean isButtonPressed(int button)

**Parameters:**
- `int` `button`

**Returns:** `boolean`

### public boolean wasButtonPressed(int button)

**Parameters:**
- `int` `button`

**Returns:** `boolean`

### public boolean isButtonStartPress(int button)

**Parameters:**
- `int` `button`

**Returns:** `boolean`

### public boolean isButtonReleasePress(int button)

**Parameters:**
- `int` `button`

**Returns:** `boolean`

### public float getMovementAxisX()

**Returns:** `float`

### public float getMovementAxisXRaw()

**Returns:** `float`

### public float getMovementAxisY()

**Returns:** `float`

### public float getMovementAxisYRaw()

**Returns:** `float`

### public float getAimingAxisX()

**Returns:** `float`

### public float getAimingAxisXRaw()

**Returns:** `float`

### public float getAimingAxisY()

**Returns:** `float`

### public float getAimingAxisYRaw()

**Returns:** `float`

### public void onPressed(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void onPressedAxis(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void onPressedAxisNeg(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void onPressedTrigger(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void onPressedPov()

**Returns:** `void`

### public float getMovementAxisDeadZoneX()

**Returns:** `float`

### public float getMovementAxisDeadZoneY()

**Returns:** `float`

### public float getAimingAxisDeadZoneX()

**Returns:** `float`

### public float getAimingAxisDeadZoneY()

**Returns:** `float`

### public void setMovementAxisDeadZoneX(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public void setMovementAxisDeadZoneY(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public void setAimingAxisDeadZoneX(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public void setAimingAxisDeadZoneY(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public float getLTDeadZone()

**Returns:** `float`

### public void setLTDeadZone(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public float getRTDeadZone()

**Returns:** `float`

### public void setRTDeadZone(float newValue)

**Parameters:**
- `float` `newValue`

**Returns:** `void`

### public float getDeadZone(int axis)

**Parameters:**
- `int` `axis`

**Returns:** `float`

### public void setDeadZone(int axis,
float value)

**Parameters:**
- `int` `axis`
- `float` `value`

**Returns:** `void`

### public void setDeadZone(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public boolean isDisabled()

**Returns:** `boolean`

### public int getAButton()

**Returns:** `int`

### public int getBButton()

**Returns:** `int`

### public int getXButton()

**Returns:** `int`

### public int getYButton()

**Returns:** `int`

### public int getLBumper()

**Returns:** `int`

### public int getRBumper()

**Returns:** `int`

### public int getL3()

**Returns:** `int`

### public int getR3()

**Returns:** `int`

### public int getBackButton()

**Returns:** `int`

### public int getStartButton()

**Returns:** `int`

### public boolean isMovementInsideDeadZone(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean isMovementAxisBeingApplied()

**Returns:** `boolean`

### public boolean isAimingInsideDeadZone(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean isAimingAxisBeingApplied()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\input\JoypadManager.Joypad.html`*
