---
title: zombie.core.skinnedmodel.advancedanimation.AnimState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimState

`public final class AnimState extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimState

## Fields

### public String name

### public final List<AnimNode> nodes

### public final List<AnimNode> abstractNodes

### public int defaultIndex

### public AnimationSet set

## Constructors

### public AnimState()

## Methods

### public List<AnimNode> getAnimNodes(IAnimationVariableSource varSource,
List<AnimNode> nodes)

**Parameters:**
- `IAnimationVariableSource` `varSource`
- `List<AnimNode>` `nodes`

**Returns:** `List<AnimNode>`

### public static AnimState Parse(String name,
String statePath)

**Parameters:**
- `String` `name`
- `String` `statePath`

**Returns:** `AnimState`

### public void addNode(AnimNode newNode)

**Parameters:**
- `AnimNode` `newNode`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public static String getStateName(AnimState state)

Null-safe function that returns a given state's name.
If null, returns a null

**Parameters:**
- `AnimState` `state`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimState.html`*
