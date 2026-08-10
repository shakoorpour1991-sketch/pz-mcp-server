---
title: zombie.characters.CharacterTimedActions.BaseAction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.CharacterTimedActions
---

# zombie.characters.CharacterTimedActions.BaseAction

`public class BaseAction extends Object`

**Kind:** class · **Package:** zombie.characters.CharacterTimedActions

## Inheritance
- java.lang.Object
- zombie.characters.CharacterTimedActions.BaseAction

## Fields

### public long soundEffect

### public float currentTime

### public float lastTime

### public int maxTime

### public float prevLastTime

### public boolean useProgressBar

### public boolean forceProgressBar

### public IsoGameCharacter chr

### public boolean stopOnWalk

### public boolean stopOnRun

### public boolean stopOnAim

### public float caloriesModifier

### public float delta

### public boolean blockMovementEtc

### public boolean overrideAnimation

### public final ArrayList<String> animVariables

### public boolean loopAction

### public boolean started

### public boolean forceStop

### public boolean forceComplete

### public boolean waitForFinished

### public boolean pathfinding

### public boolean allowedWhileDraggingCorpses

### public boolean overrideHandModels

## Constructors

### public BaseAction(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

## Methods

### public void forceStop()

**Returns:** `void`

### public void forceComplete()

**Returns:** `void`

### public boolean isForceComplete()

**Returns:** `boolean`

### public void PlayLoopedSoundTillComplete(String name,
int radius,
float maxGain)

**Parameters:**
- `String` `name`
- `int` `radius`
- `float` `maxGain`

**Returns:** `void`

### public boolean hasStalled()

**Returns:** `boolean`

### public float getJobDelta()

**Returns:** `float`

### public void setJobDelta(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void setWaitForFinished(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public void resetJobDelta()

**Returns:** `void`

### public void waitToStart()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void start()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public float getCurrentTime()

**Returns:** `float`

### public void interruptWaitToStart()

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public boolean valid()

**Returns:** `boolean`

### public boolean isStarted()

**Returns:** `boolean`

### public boolean finished()

**Returns:** `boolean`

### public void perform()

**Returns:** `void`

### public void complete()

**Returns:** `void`

### public void setUseProgressBar(boolean use)

**Parameters:**
- `boolean` `use`

**Returns:** `void`

### public void setBlockMovementEtc(boolean block)

**Parameters:**
- `boolean` `block`

**Returns:** `void`

### public void setPathfinding(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isPathfinding()

**Returns:** `boolean`

### public void setAllowedWhileDraggingCorpses(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isAllowedWhileDraggingCorpses()

**Returns:** `boolean`

### public void setOverrideAnimation(boolean override)

**Parameters:**
- `boolean` `override`

**Returns:** `void`

### public void stopTimedActionAnim()

**Returns:** `void`

### public void setAnimVariable(String key,
String val)

**Parameters:**
- `String` `key`
- `String` `val`

**Returns:** `void`

### public void setAnimVariable(String key,
boolean val)

**Parameters:**
- `String` `key`
- `boolean` `val`

**Returns:** `void`

### public String getPrimaryHandMdl()

**Returns:** `String`

### public String getSecondaryHandMdl()

**Returns:** `String`

### public InventoryItem getPrimaryHandItem()

**Returns:** `InventoryItem`

### public InventoryItem getSecondaryHandItem()

**Returns:** `InventoryItem`

### public void setActionAnim(CharacterActionAnims act)

**Parameters:**
- `CharacterActionAnims` `act`

**Returns:** `void`

### public void setActionAnim(String animNode)

**Parameters:**
- `String` `animNode`

**Returns:** `void`

### public void setOverrideHandModels(InventoryItem primaryHand,
InventoryItem secondaryHand)

**Parameters:**
- `InventoryItem` `primaryHand`
- `InventoryItem` `secondaryHand`

**Returns:** `void`

### public void setOverrideHandModels(InventoryItem primaryHand,
InventoryItem secondaryHand,
boolean resetModel)

**Parameters:**
- `InventoryItem` `primaryHand`
- `InventoryItem` `secondaryHand`
- `boolean` `resetModel`

**Returns:** `void`

### public void setOverrideHandModelsString(String primaryHand,
String secondaryHand)

**Parameters:**
- `String` `primaryHand`
- `String` `secondaryHand`

**Returns:** `void`

### public void setOverrideHandModelsString(String primaryHand,
String secondaryHand,
boolean resetModel)

**Parameters:**
- `String` `primaryHand`
- `String` `secondaryHand`
- `boolean` `resetModel`

**Returns:** `void`

### public void setOverrideHandModelsObject(Object primaryHand,
Object secondaryHand,
boolean resetModel)

**Parameters:**
- `Object` `primaryHand`
- `Object` `secondaryHand`
- `boolean` `resetModel`

**Returns:** `void`

### public void overrideWeaponType()

**Returns:** `void`

### public void restoreWeaponType()

**Returns:** `void`

### public void OnAnimEvent(AnimEvent event)

**Parameters:**
- `AnimEvent` `event`

**Returns:** `void`

### public void setLoopedAction(boolean looped)

**Parameters:**
- `boolean` `looped`

**Returns:** `void`

### public void getDeltaModifiers(MoveDeltaModifiers modifiers)

**Parameters:**
- `MoveDeltaModifiers` `modifiers`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterTimedActions\BaseAction.html`*
