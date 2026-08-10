---
title: zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation.debug
---

# zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder

`public final class AnimationPlayerRecorder extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation.debug

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder

## Description

Used for recording the activity of an AnimationPlayer

## Constructors

### public AnimationPlayerRecorder(IsoMovingObject owner)

**Parameters:**
- `IsoMovingObject` `owner`

## Methods

### public static void init()

**Returns:** `void`

### public static void backupOldRecordings()

**Returns:** `void`

### public static void discardOldRecordings()

**Returns:** `void`

### public void newFrame(int frameNo)

**Parameters:**
- `int` `frameNo`

**Returns:** `void`

### public boolean hasActiveLine()

**Returns:** `boolean`

### public void writeFrame()

**Returns:** `void`

### public void discardRecording()

**Returns:** `void`

### public void close()

**Returns:** `void`

### public static PrintStream openFileStream(String key,
boolean append,
Consumer<String> fileNameConsumer)

**Parameters:**
- `String` `key`
- `boolean` `append`
- `Consumer<String>` `fileNameConsumer`

**Returns:** `PrintStream`

### public static String getRecordingDir()

**Returns:** `String`

### public void logAnimWeights(LiveAnimationTrackEntries trackEntries,
Vector2 deferredMovement,
Vector3 deferredMovementFromRagdoll)

**Parameters:**
- `LiveAnimationTrackEntries` `trackEntries`
- `Vector2` `deferredMovement`
- `Vector3` `deferredMovementFromRagdoll`

**Returns:** `void`

### public void logAnimNode(LiveAnimNode liveNode)

**Parameters:**
- `LiveAnimNode` `liveNode`

**Returns:** `void`

### public void logActionState(ActionGroup actionGroup,
ActionState actionState,
List<ActionState> subStates)

**Parameters:**
- `ActionGroup` `actionGroup`
- `ActionState` `actionState`
- `List<ActionState>` `subStates`

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

### public void logVariables(IAnimationVariableSource varSource)

**Parameters:**
- `IAnimationVariableSource` `varSource`

**Returns:** `void`

### public void logVariable(String variableKey,
String variableValue)

**Parameters:**
- `String` `variableKey`
- `String` `variableValue`

**Returns:** `void`

### public void logVariable(String variableKey,
boolean variableValue)

**Parameters:**
- `String` `variableKey`
- `boolean` `variableValue`

**Returns:** `void`

### public void logVariable(String variableKey,
int variableValue)

**Parameters:**
- `String` `variableKey`
- `int` `variableValue`

**Returns:** `void`

### public void logVariable(String variableKey,
float variableValue)

**Parameters:**
- `String` `variableKey`
- `float` `variableValue`

**Returns:** `void`

### public void logVariable(String variableKey,
Vector2 variableValue)

**Parameters:**
- `String` `variableKey`
- `Vector2` `variableValue`

**Returns:** `void`

### public void logAnimEvent(IAnimatable character,
AnimationTrack track,
AnimEvent evt)

**Parameters:**
- `IAnimatable` `character`
- `AnimationTrack` `track`
- `AnimEvent` `evt`

**Returns:** `void`

### public void logGlobalAnimEvent(IAnimatable character,
GlobalAnimEvent evt)

**Parameters:**
- `IAnimatable` `character`
- `GlobalAnimEvent` `evt`

**Returns:** `void`

### public void logCharacterPos()

**Returns:** `void`

### public IsoMovingObject getOwner()

**Returns:** `IsoMovingObject`

### public boolean isRecording()

**Returns:** `boolean`

### public void setRecording(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public static void initMessaging()

**Returns:** `void`

### public static boolean isAnimationRecorderActiveAll()

**Returns:** `boolean`

### public static void setAnimationRecorderActiveAll(boolean setActive)

**Parameters:**
- `boolean` `setActive`

**Returns:** `void`

### public static boolean isAnimationRecorderActiveForType(Class<? extends IsoMovingObject> objectType)

**Parameters:**
- `Class<? extends IsoMovingObject>` `objectType`

**Returns:** `boolean`

### public static void setAnimationRecorderActiveForType(Class<? extends IsoMovingObject> objectType,
boolean isActive)

**Parameters:**
- `Class<? extends IsoMovingObject>` `objectType`
- `boolean` `isActive`

**Returns:** `void`

### public static void setAnimationRecorderMinRangeOfPlayer(float minRange)

**Parameters:**
- `float` `minRange`

**Returns:** `void`

### public static boolean isAnimationRecorderActive(IsoMovingObject object)

**Parameters:**
- `IsoMovingObject` `object`

**Returns:** `boolean`

### public static boolean isAnimRecorderDiscardTriggered()

**Returns:** `boolean`

### public static void onPostUpdateWorld()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\debug\AnimationPlayerRecorder.html`*
