---
title: zombie.core.skinnedmodel.animation.debug.AnimationEventRecordingFrame
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation.debug
---

# zombie.core.skinnedmodel.animation.debug.AnimationEventRecordingFrame

`public class AnimationEventRecordingFrame extends GenericNameValueRecordingFrame`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation.debug

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.debug.GenericNameValueRecordingFrame
- zombie.core.skinnedmodel.animation.debug.AnimationEventRecordingFrame

## Constructors

### public AnimationEventRecordingFrame(String fileKey)

**Parameters:**
- `String` `fileKey`

## Methods

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

### public void reset()

**Returns:** `void`

### public String getValueAt(int i)

**Parameters:**
- `int` `i`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\debug\AnimationEventRecordingFrame.html`*
