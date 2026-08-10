---
title: zombie.audio.ObjectAmbientEmitters.PerObjectLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.ObjectAmbientEmitters.PerObjectLogic

`public abstract static class ObjectAmbientEmitters.PerObjectLogic extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.ObjectAmbientEmitters.PerObjectLogic

## Fields

### public IsoObject object

### public final float[] parameterValues

## Constructors

### public PerObjectLogic()

## Methods

### public ObjectAmbientEmitters.PerObjectLogic init(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `ObjectAmbientEmitters.PerObjectLogic`

### public abstract boolean shouldPlaySound()

**Returns:** `boolean`

### public abstract String getSoundName()

**Returns:** `String`

### public abstract void startPlaying(BaseSoundEmitter emitter,
long instance)

**Parameters:**
- `BaseSoundEmitter` `emitter`
- `long` `instance`

**Returns:** `void`

### public void stopPlaying(BaseSoundEmitter emitter,
long instance)

**Parameters:**
- `BaseSoundEmitter` `emitter`
- `long` `instance`

**Returns:** `void`

### public abstract void checkParameters(BaseSoundEmitter emitter,
long instance)

**Parameters:**
- `BaseSoundEmitter` `emitter`
- `long` `instance`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\ObjectAmbientEmitters.PerObjectLogic.html`*
