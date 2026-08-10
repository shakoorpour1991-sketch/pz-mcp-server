---
title: zombie.core.skinnedmodel.advancedanimation.events.AnimEventListenerSetVariableWrapperString
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation.events
---

# zombie.core.skinnedmodel.advancedanimation.events.AnimEventListenerSetVariableWrapperString

`public class AnimEventListenerSetVariableWrapperString extends Object implements IAnimEventListener, IAnimEventListenerSetVariableString`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation.events

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.events.AnimEventListenerSetVariableWrapperString

## Methods

### public void animEvent(IsoGameCharacter owner,
AnimLayer layer,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `IsoGameCharacter` `owner`
- `AnimLayer` `layer`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public void animEvent(IsoGameCharacter owner,
AnimationVariableReference variableReference,
String variableValue)

**Parameters:**
- `IsoGameCharacter` `owner`
- `AnimationVariableReference` `variableReference`
- `String` `variableValue`

**Returns:** `void`

### public static IAnimEventListener wrapper(IAnimEventListenerSetVariableString wrapped)

**Parameters:**
- `IAnimEventListenerSetVariableString` `wrapped`

**Returns:** `IAnimEventListener`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\events\AnimEventListenerSetVariableWrapperString.html`*
