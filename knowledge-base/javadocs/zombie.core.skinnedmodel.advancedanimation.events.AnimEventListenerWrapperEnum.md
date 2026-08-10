---
title: zombie.core.skinnedmodel.advancedanimation.events.AnimEventListenerWrapperEnum
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation.events
---

# zombie.core.skinnedmodel.advancedanimation.events.AnimEventListenerWrapperEnum

`public class AnimEventListenerWrapperEnum<E extends Enum<E>> extends Object implements IAnimEventListener, IAnimEventListenerEnum<E>`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation.events

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.events.AnimEventListenerWrapperEnum<E>

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
AnimLayer animLayer,
AnimationTrack animTrack,
E param)

**Parameters:**
- `IsoGameCharacter` `owner`
- `AnimLayer` `animLayer`
- `AnimationTrack` `animTrack`
- `E` `param`

**Returns:** `void`

### public static <E extends Enum<E>>
IAnimEventListener wrapper(IAnimEventListenerEnum<E> wrapped,
E defaultValue)

**Returns:** `IAnimEventListener`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\events\AnimEventListenerWrapperEnum.html`*
