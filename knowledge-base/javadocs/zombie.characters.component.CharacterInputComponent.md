---
title: zombie.characters.component.CharacterInputComponent
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.component
---

# zombie.characters.component.CharacterInputComponent

`public class CharacterInputComponent extends ECSComponent implements ECSFrameStep, ECSInGameStateEnter, ECSGameLoadingStateEnter, IAnimationVariableLogger`

**Kind:** class · **Package:** zombie.characters.component

## Inheritance
- java.lang.Object
- zombie.characters.ecs.ECSComponent
- zombie.characters.component.CharacterInputComponent

## Fields

### public static final float GAMEPAD_MIN_VALUE_TRIGGER_AIMING

### public static final float GAMEPAD_MIN_VALUE_TRIGGER_SHOOT

### public static final float GAMEPAD_MIN_VALUE_TRIGGER_MELEE

### public static final float GAMEPAD_AIM_VALUE_MIN

### public static final float MOVEMENT_RATE_STOPPED

### public static final float MOVEMENT_RATE_MAX_WALKING

### public static final float MOVEMENT_RATE_MAX

### public static final float GAMEPAD_MIN_VALUE_RUN

## Constructors

### public CharacterInputComponent()

## Methods

### public void frameStep()

**Returns:** `void`

### public int getJoypadBind()

**Returns:** `int`

### public void setJoypadBind(int joypadBind)

**Parameters:**
- `int` `joypadBind`

**Returns:** `void`

### public CharacterInputMode getInputMode()

**Returns:** `CharacterInputMode`

### public boolean isForceAim()

**Returns:** `boolean`

### public void setForceAim(boolean forceAim)

**Parameters:**
- `boolean` `forceAim`

**Returns:** `void`

### public final boolean toggleForceAim()

**Returns:** `boolean`

### public boolean isForceSprint()

**Returns:** `boolean`

### public void setForceSprint(boolean forceSprint)

**Parameters:**
- `boolean` `forceSprint`

**Returns:** `void`

### public final boolean toggleForceSprint()

**Returns:** `boolean`

### public boolean isForceRun()

**Returns:** `boolean`

### public void setForceRun(boolean forceRun)

**Parameters:**
- `boolean` `forceRun`

**Returns:** `void`

### public final boolean toggleForceRun()

**Returns:** `boolean`

### public void updateToggleButtons()

**Returns:** `void`

### public void updateToggleToAim()

**Returns:** `void`

### public void updateToggleToSprint()

**Returns:** `void`

### public void updateToggleToRun()

**Returns:** `void`

### public boolean isJoypadControllerActive()

**Returns:** `boolean`

### public Vector2 getInputMoveVector(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### public float getInputMovementRate()

**Returns:** `float`

### public boolean isInputMoveAxisApplied()

**Returns:** `boolean`

### public Vector2 getJoypadAimVector(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### public boolean isForwardKeyDown()

**Returns:** `boolean`

### public boolean isBackwardKeyDown()

**Returns:** `boolean`

### public boolean isLeftKeyDown()

**Returns:** `boolean`

### public boolean isRightKeyDown()

**Returns:** `boolean`

### public boolean isKeyboardSelectingAll()

**Returns:** `boolean`

### public boolean isAimKeyDown()

**Returns:** `boolean`

### public boolean isPrecisionAimKeyDown()

**Returns:** `boolean`

### public boolean isToggleAimKeyDown()

**Returns:** `boolean`

### public boolean isToggleAimKeyMouse()

**Returns:** `boolean`

### public boolean isToggleSprintButtonDown()

**Returns:** `boolean`

### public boolean isToggleRunButtonDown()

**Returns:** `boolean`

### public boolean isToggleCrouchButtonDown()

**Returns:** `boolean`

### public boolean isAimKeyDownInternal()

**Returns:** `boolean`

### public boolean isPrecisionAimKeyDownInternal()

**Returns:** `boolean`

### public boolean isAnyAimKeyDown()

**Returns:** `boolean`

### public boolean isMeleeButtonDown()

**Returns:** `boolean`

### public boolean isMeleeButtonDownInternal()

**Returns:** `boolean`

### public boolean isAttackButtonDown()

**Returns:** `boolean`

### public boolean isBuildButtonDown()

**Returns:** `boolean`

### public boolean isBuildButtonReleased()

**Returns:** `boolean`

### public boolean isRunButtonDown()

**Returns:** `boolean`

### public boolean wasRunButtonDown()

**Returns:** `boolean`

### public boolean isInteractButtonPressed()

**Returns:** `boolean`

### public boolean isInteractButtonDown()

**Returns:** `boolean`

### public boolean isInteractButtonDownInternal()

**Returns:** `boolean`

### public boolean isInteractButtonClicked()

**Returns:** `boolean`

### public boolean isWalkToButtonDown()

**Returns:** `boolean`

### public boolean isCrouchButtonDown()

**Returns:** `boolean`

### public boolean isCrouchButtonPressed()

**Returns:** `boolean`

### public boolean isReloadWeaponButtonPressed()

**Returns:** `boolean`

### public boolean isRackFirearmButtonPressed()

**Returns:** `boolean`

### public boolean isSprintButtonDown()

**Returns:** `boolean`

### public boolean wasSprintButtonDown()

**Returns:** `boolean`

### public boolean isCancelActionButtonDown()

**Returns:** `boolean`

### public boolean isManualFloorAtkButtonDown()

**Returns:** `boolean`

### public boolean isZoomInButtonPressed()

**Returns:** `boolean`

### public boolean isZoomOutButtonPressed()

**Returns:** `boolean`

### public boolean isLShiftKeyDown()

**Returns:** `boolean`

### public boolean isRShiftKeyDown()

**Returns:** `boolean`

### public boolean isShiftKeyDown()

**Returns:** `boolean`

### public boolean isLCtrlKeyDown()

**Returns:** `boolean`

### public boolean isRCtrlKeyDown()

**Returns:** `boolean`

### public boolean isCtrlKeyDown()

**Returns:** `boolean`

### public boolean isF12KeyDown()

**Returns:** `boolean`

### public boolean isChangeCharacterKeyDown()

**Returns:** `boolean`

### public void checkJoypadIgnoreAimUntilCentered()

**Returns:** `void`

### public boolean isJoypadMovementAxisApplied()

**Returns:** `boolean`

### public boolean isJoypadAimingAxisApplied()

**Returns:** `boolean`

### public boolean isJoypadButtonsActive()

**Returns:** `boolean`

### public void setJoypadButtonsActive(boolean joypadMovementActive)

**Parameters:**
- `boolean` `joypadMovementActive`

**Returns:** `void`

### public boolean isIgnoreInputsForDirection()

**Returns:** `boolean`

### public void setIgnoreInputsForDirection(boolean ignoreInputsForDirection)

**Parameters:**
- `boolean` `ignoreInputsForDirection`

**Returns:** `void`

### public void setJoypadIgnoreAim(boolean ignore)

**Parameters:**
- `boolean` `ignore`

**Returns:** `void`

### public boolean isJoypadIgnoreAim()

**Returns:** `boolean`

### public void setJoypadIgnoreAimUntilCentered(boolean ignore)

**Parameters:**
- `boolean` `ignore`

**Returns:** `void`

### public boolean isJoypadIgnoreAimUntilCentered()

**Returns:** `boolean`

### public void setIgnoreAimingInput(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isIgnoringAimingInput()

**Returns:** `boolean`

### public boolean isAllowSprint()

**Returns:** `boolean`

### public void setAllowSprint(boolean allowSprint)

**Parameters:**
- `boolean` `allowSprint`

**Returns:** `void`

### public boolean isAllowRun()

**Returns:** `boolean`

### public void setAllowRun(boolean allowRun)

**Parameters:**
- `boolean` `allowRun`

**Returns:** `void`

### public void onGameLoadingStateEnter()

**Returns:** `void`

### public void onInGameStateEnter()

**Returns:** `void`

### public void logVariablesToRecording(AnimationPlayerRecorder animationRecorder)

**Parameters:**
- `AnimationPlayerRecorder` `animationRecorder`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\component\CharacterInputComponent.html`*
