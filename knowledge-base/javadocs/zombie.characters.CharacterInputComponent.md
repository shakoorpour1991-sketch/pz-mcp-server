---
title: zombie.characters.CharacterInputComponent
source: Unofficial PZ JavaDocs 42.16.0
version: 42.16.0
kind: interface
package: zombie.characters
---

# zombie.characters.CharacterInputComponent

`public interface CharacterInputComponent`

**Kind:** interface · **Package:** zombie.characters

## Fields

### static final float GAMEPAD_MIN_VALUE_TRIGGER_AIMING

### static final float GAMEPAD_MIN_VALUE_TRIGGER_SHOOT

### static final float MOVEMENT_RATE_STOPPED

### static final float MOVEMENT_RATE_MAX_WALKING

### static final float MOVEMENT_RATE_MAX_RUNNING

## Methods

### default int getJoypadBind()

**Returns:** `int`

### default CharacterInputMode getInputMode()

**Returns:** `CharacterInputMode`

### default boolean isJoypadControllerActive()

**Returns:** `boolean`

### default Vector2 getJoypadMoveVector(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### default float getJoypadMovementRate()

**Returns:** `float`

### default boolean isForwardKeyDown()

**Returns:** `boolean`

### default boolean isBackwardKeyDown()

**Returns:** `boolean`

### default boolean isLeftKeyDown()

**Returns:** `boolean`

### default boolean isRightKeyDown()

**Returns:** `boolean`

### default boolean isAimKeyDown()

**Returns:** `boolean`

### default boolean isPrecisionAimKeyDown()

**Returns:** `boolean`

### default boolean isAnyAimKeyDown()

**Returns:** `boolean`

### default boolean isMeleeButtonDown()

**Returns:** `boolean`

### default boolean isAttackButtonDown()

**Returns:** `boolean`

### default boolean isRunButtonDown()

**Returns:** `boolean`

### default boolean wasRunButtonDown()

**Returns:** `boolean`

### default boolean isInteractButtonPressed()

**Returns:** `boolean`

### default boolean isInteractButtonDown()

**Returns:** `boolean`

### default boolean isWalkToButtonDown()

**Returns:** `boolean`

### default boolean isCrouchButtonDown()

**Returns:** `boolean`

### default boolean isReloadWeaponButtonDown()

**Returns:** `boolean`

### default boolean isRackFirearmButtonDown()

**Returns:** `boolean`

### default boolean isSprintButtonDown()

**Returns:** `boolean`

### default boolean wasSprintButtonDown()

**Returns:** `boolean`

### default boolean isCancelActionButtonDown()

**Returns:** `boolean`

### default boolean isManualFloorAtkButtonDown()

**Returns:** `boolean`

### default boolean isLShiftKeyDown()

**Returns:** `boolean`

### default boolean isRShiftKeyDown()

**Returns:** `boolean`

### default boolean isShiftKeyDown()

**Returns:** `boolean`

### default boolean isF12KeyDown()

**Returns:** `boolean`

### default boolean isChangeCharacterKeyDown()

**Returns:** `boolean`

### default void checkJoypadIgnoreAimUntilCentered()

**Returns:** `void`

### default boolean isJoypadMovementAxisApplied()

**Returns:** `boolean`

### default void setJoypadMovementActive(boolean joypadMovementActive)

**Parameters:**
- `boolean` `joypadMovementActive`

**Returns:** `void`

### default boolean isJoypadMovementActive()

**Returns:** `boolean`

### default void setIgnoreInputsForDirection(boolean ignoreInputsForDirection)

**Parameters:**
- `boolean` `ignoreInputsForDirection`

**Returns:** `void`

### default boolean isIgnoreInputsForDirection()

**Returns:** `boolean`

### default void setJoypadIgnoreAimUntilCentered(boolean ignore)

**Parameters:**
- `boolean` `ignore`

**Returns:** `void`

### default boolean isJoypadIgnoreAimUntilCentered()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.16.0 (42.16.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterInputComponent.html`*
