---
title: zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation.events
---

# zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster

`public class AnimEventBroadcaster extends Object implements IAnimEventListener`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation.events

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster

## Constructors

### public AnimEventBroadcaster()

## Methods

### public void addListener(String animEventName,
IAnimEventListener listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListener` `listener`

**Returns:** `void`

### public void addListener(String animEventName,
IAnimEventListenerNoTrack listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerNoTrack` `listener`

**Returns:** `void`

### public void addListener(String animEventName,
IAnimEventListenerNoTrackString listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerNoTrackString` `listener`

**Returns:** `void`

### public void addListener(String animEventName,
IAnimEventListenerBoolean listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerBoolean` `listener`

**Returns:** `void`

### public void addListener(String animEventName,
IAnimEventListenerString listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerString` `listener`

**Returns:** `void`

### public void addListener(String animEventName,
IAnimEventListenerNoParam listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerNoParam` `listener`

**Returns:** `void`

### public void addListener(String animEventName,
IAnimEventListenerFloat listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerFloat` `listener`

**Returns:** `void`

### public <E extends Enum<E>> void addListener(String animEventName,
IAnimEventListenerEnum<E> listener,
E defaultValue)

**Returns:** `void`

### public <E extends Enum<E>> void addListener(String animEventName,
IAnimEventListenerNoTrackEnum<E> listener,
E defaultValue)

**Returns:** `void`

### public void addListener(IAnimEventListenerSetVariableString listener)

**Parameters:**
- `IAnimEventListenerSetVariableString` `listener`

**Returns:** `void`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\events\AnimEventBroadcaster.html`*
