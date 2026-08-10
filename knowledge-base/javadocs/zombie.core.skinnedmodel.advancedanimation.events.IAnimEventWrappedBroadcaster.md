---
title: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventWrappedBroadcaster
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.advancedanimation.events
---

# zombie.core.skinnedmodel.advancedanimation.events.IAnimEventWrappedBroadcaster

`public interface IAnimEventWrappedBroadcaster extends IAnimEventListener`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.advancedanimation.events

## Methods

### AnimEventBroadcaster getAnimEventBroadcaster()

**Returns:** `AnimEventBroadcaster`

### default void addAnimEventListener(String animEventName,
IAnimEventListener listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListener` `listener`

**Returns:** `void`

### default void addAnimEventListener(String animEventName,
IAnimEventListenerNoTrack listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerNoTrack` `listener`

**Returns:** `void`

### default void addAnimEventListener(String animEventName,
IAnimEventListenerNoTrackString listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerNoTrackString` `listener`

**Returns:** `void`

### default void addAnimEventListener(String animEventName,
IAnimEventListenerBoolean listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerBoolean` `listener`

**Returns:** `void`

### default void addAnimEventListener(String animEventName,
IAnimEventListenerString listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerString` `listener`

**Returns:** `void`

### default void addAnimEventListener(String animEventName,
IAnimEventListenerNoParam listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerNoParam` `listener`

**Returns:** `void`

### default void addAnimEventListener(String animEventName,
IAnimEventListenerFloat listener)

**Parameters:**
- `String` `animEventName`
- `IAnimEventListenerFloat` `listener`

**Returns:** `void`

### default void addAnimEventListener(IAnimEventListenerSetVariableString listener)

**Parameters:**
- `IAnimEventListenerSetVariableString` `listener`

**Returns:** `void`

### default <E extends Enum<E>> void addAnimEventListener(String animEventName,
IAnimEventListenerEnum<E> listener,
E defaultValue)

**Returns:** `void`

### default <E extends Enum<E>> void addAnimEventListener(String animEventName,
IAnimEventListenerNoTrackEnum<E> listener,
E defaultValue)

**Returns:** `void`

### default void animEvent(IsoGameCharacter owner,
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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\events\IAnimEventWrappedBroadcaster.html`*
