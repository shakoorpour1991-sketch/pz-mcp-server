---
title: zombie.characters.CharacterInputComponentEntity
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters
---

# zombie.characters.CharacterInputComponentEntity

`public interface CharacterInputComponentEntity extends ECSEntity`

**Kind:** interface · **Package:** zombie.characters

## Methods

### default CharacterInputComponent getCharacterInputComponent()

**Returns:** `CharacterInputComponent`

### default int getJoypadBind()

**Returns:** `int`

### default void setJoypadBind(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `void`

### default CharacterInputMode getInputMode()

**Returns:** `CharacterInputMode`

### default boolean isForceAim()

**Returns:** `boolean`

### default void setForceAim(boolean forceAim)

**Parameters:**
- `boolean` `forceAim`

**Returns:** `void`

### default boolean toggleForceAim()

**Returns:** `boolean`

### default boolean isForceSprint()

**Returns:** `boolean`

### default void setForceSprint(boolean forceSprint)

**Parameters:**
- `boolean` `forceSprint`

**Returns:** `void`

### default boolean isForceRun()

**Returns:** `boolean`

### default void setForceRun(boolean forceRun)

**Parameters:**
- `boolean` `forceRun`

**Returns:** `void`

### default Vector2 getInputMoveVector(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### default float getInputMovementRate()

**Returns:** `float`

### default boolean isInputMoveAxisApplied()

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

### default boolean isBuildButtonDown()

**Returns:** `boolean`

### default boolean isBuildButtonReleased()

**Returns:** `boolean`

### default boolean isRunButtonDown()

**Returns:** `boolean`

### default boolean wasRunButtonDown()

**Returns:** `boolean`

### default boolean isInteractButtonPressed()

**Returns:** `boolean`

### default boolean isInteractButtonDown()

**Returns:** `boolean`

### default boolean isInteractButtonClicked()

**Returns:** `boolean`

### default boolean isWalkToButtonDown()

**Returns:** `boolean`

### default boolean isCrouchButtonPressed()

**Returns:** `boolean`

### default boolean isSprintButtonDown()

**Returns:** `boolean`

### default boolean isManualFloorAtkButtonDown()

**Returns:** `boolean`

### default boolean isShiftKeyDown()

**Returns:** `boolean`

### default boolean isF12KeyDown()

**Returns:** `boolean`

### default boolean isChangeCharacterKeyDown()

**Returns:** `boolean`

### default void setJoypadButtonsActive(boolean joypadMovementActive)

**Parameters:**
- `boolean` `joypadMovementActive`

**Returns:** `void`

### default boolean isJoypadButtonsActive()

**Returns:** `boolean`

### default void setIgnoreInputsForDirection(boolean ignoreInputsForDirection)

**Parameters:**
- `boolean` `ignoreInputsForDirection`

**Returns:** `void`

### default boolean isIgnoreInputsForDirection()

**Returns:** `boolean`

### default void setJoypadIgnoreAim(boolean ignore)

**Parameters:**
- `boolean` `ignore`

**Returns:** `void`

### default void setJoypadIgnoreAimUntilCentered(boolean ignore)

**Parameters:**
- `boolean` `ignore`

**Returns:** `void`

### default boolean isJoypadIgnoreAimUntilCentered()

**Returns:** `boolean`

### default void setIgnoreAimingInput(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### default boolean isIgnoringAimingInput()

**Returns:** `boolean`

### default boolean isAllowSprint()

**Returns:** `boolean`

### default void setAllowSprint(boolean allowSprint)

**Parameters:**
- `boolean` `allowSprint`

**Returns:** `void`

### default boolean isAllowRun()

**Returns:** `boolean`

### default void setAllowRun(boolean allowRun)

**Parameters:**
- `boolean` `allowRun`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterInputComponentEntity.html`*
