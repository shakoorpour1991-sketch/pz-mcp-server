---
title: zombie.core.skinnedmodel.animation.debug.AnimationNodeRecordingFrame
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation.debug
---

# zombie.core.skinnedmodel.animation.debug.AnimationNodeRecordingFrame

`public final class AnimationNodeRecordingFrame extends GenericNameWeightRecordingFrame`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation.debug

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.debug.GenericNameValueRecordingFrame
- zombie.core.skinnedmodel.animation.debug.GenericNameWeightRecordingFrame
- zombie.core.skinnedmodel.animation.debug.AnimationNodeRecordingFrame

## Constructors

### public AnimationNodeRecordingFrame(String fileKey)

**Parameters:**
- `String` `fileKey`

## Methods

### public void logActionState(ActionGroup group,
ActionState state,
List<ActionState> childStates)

**Parameters:**
- `ActionGroup` `group`
- `ActionState` `state`
- `List<ActionState>` `childStates`

**Returns:** `void`

### public void logActionState(String actionGroupName,
String actionStateName)

**Parameters:**
- `String` `actionGroupName`
- `String` `actionStateName`

**Returns:** `void`

### public void logAIState(State state,
List<StateMachine.SubstateSlot> subStates)

**Parameters:**
- `State` `state`
- `List<StateMachine.SubstateSlot>` `subStates`

**Returns:** `void`

### public void logAIState(String aiStateName)

**Parameters:**
- `String` `aiStateName`

**Returns:** `void`

### public void logAnimState(AnimLayer layer,
AnimState state)

**Parameters:**
- `AnimLayer` `layer`
- `AnimState` `state`

**Returns:** `void`

### public void logCharacterToPlayerDiff(Vector3 diff)

**Parameters:**
- `Vector3` `diff`

**Returns:** `void`

### public void buildHeader(StringBuilder logLine)

**Parameters:**
- `StringBuilder` `logLine`

**Returns:** `void`

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\debug\AnimationNodeRecordingFrame.html`*
