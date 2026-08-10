---
title: zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator

`public final class AdvancedAnimator extends Object implements IAnimEventCallback`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator

## Description

Created by LEMMYMAIN on 26/01/2015.

## Fields

### public AnimationSet animSet

### public static float motionScale

### public static float rotationScale

## Constructors

### public AdvancedAnimator()

## Methods

### public static void systemInit()

**Returns:** `void`

### public static void checkModifiedFiles()

**Returns:** `void`

### public String GetDebug()

**Returns:** `String`

### public void OnAnimDataChanged(boolean reload)

**Parameters:**
- `boolean` `reload`

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void Reload()

**Returns:** `void`

### public void init(IAnimatable character,
String animationSetName)

**Parameters:**
- `IAnimatable` `character`
- `String` `animationSetName`

**Returns:** `void`

### public void setAnimSet(AnimationSet aset)

**Parameters:**
- `AnimationSet` `aset`

**Returns:** `void`

### public void OnAnimEvent(AnimLayer sender,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `AnimLayer` `sender`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public void invokeGlobalAnimEvent(GlobalAnimEvent event)

**Parameters:**
- `GlobalAnimEvent` `event`

**Returns:** `void`

### public String getCurrentStateName()

**Returns:** `String`

### public boolean containsState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `boolean`

### public void setState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `void`

### public void setState(String stateName,
List<String> subStateNames)

**Parameters:**
- `String` `stateName`
- `List<String>` `subStateNames`

**Returns:** `void`

### public void setState(AnimState rootState,
List<AnimState> subStates)

**Parameters:**
- `AnimState` `rootState`
- `List<AnimState>` `subStates`

**Returns:** `void`

### public void update(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public void FindTransitionsFromProxy(TransitionNodeProxy proxy)

**Parameters:**
- `TransitionNodeProxy` `proxy`

**Returns:** `void`

### public void ProcessTransitions(TransitionNodeProxy proxy)

**Parameters:**
- `TransitionNodeProxy` `proxy`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void printDebugCharacterActions(String target)

**Parameters:**
- `String` `target`

**Returns:** `void`

### public ArrayList<String> debugGetVariables()

**Returns:** `ArrayList<String>`

### public AnimatorDebugMonitor getDebugMonitor()

**Returns:** `AnimatorDebugMonitor`

### public void setDebugMonitor(AnimatorDebugMonitor monitor)

**Parameters:**
- `AnimatorDebugMonitor` `monitor`

**Returns:** `void`

### public IAnimatable getCharacter()

**Returns:** `IAnimatable`

### public void updateSpeedScale(String variable,
float newSpeed)

**Parameters:**
- `String` `variable`
- `float` `newSpeed`

**Returns:** `void`

### public boolean containsAnyIdleNodes()

Returns TRUE if any Actuve Live nodes are an Idle animation.
This is useful when determining if the character is currently Idle.

eg. For adding variations to standing around, like fidgeting, sneezing, etc.

**Returns:** `boolean`

### public AnimLayer getRootLayer()

**Returns:** `AnimLayer`

### public int getSubLayerCount()

**Returns:** `int`

### public AnimLayer getSubLayerAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `AnimLayer`

### public boolean isRecording()

**Returns:** `boolean`

### public void incrementWhileAliveFlag(AnimationVariableReference variableReference,
boolean whileAliveValue)

**Parameters:**
- `AnimationVariableReference` `variableReference`
- `boolean` `whileAliveValue`

**Returns:** `void`

### public void decrementWhileAliveFlag(AnimationVariableReference variableReference,
boolean whileAliveValue)

**Parameters:**
- `AnimationVariableReference` `variableReference`
- `boolean` `whileAliveValue`

**Returns:** `void`

### public void addAnimCallback(IAnimEventCallback callback)

**Parameters:**
- `IAnimEventCallback` `callback`

**Returns:** `void`

### public static List<String> searchFolders(URI base,
Path pathDir)
throws IOException

**Parameters:**
- `URI` `base`
- `Path` `pathDir`

**Returns:** `List<String>`

### public static void load()
throws Exception

**Returns:** `void`

### public static String getChecksum()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AdvancedAnimator.html`*
