---
title: zombie.iso.objects.ObjectRenderEffects
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.ObjectRenderEffects

`public class ObjectRenderEffects extends Object`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.iso.objects.ObjectRenderEffects

## Description

TurboTuTone.

## Fields

### public static final boolean ENABLED

### public double x1

### public double y1

### public double x2

### public double y2

### public double x3

### public double y3

### public double x4

### public double y4

## Methods

### public static ObjectRenderEffects alloc()

**Returns:** `ObjectRenderEffects`

### public static void release(ObjectRenderEffects o)

**Parameters:**
- `ObjectRenderEffects` `o`

**Returns:** `void`

### public static ObjectRenderEffects getNew(IsoObject parent,
RenderEffectType t,
boolean reuseEqualType)

**Parameters:**
- `IsoObject` `parent`
- `RenderEffectType` `t`
- `boolean` `reuseEqualType`

**Returns:** `ObjectRenderEffects`

### public static ObjectRenderEffects getNew(IsoObject parent,
RenderEffectType t,
boolean reuseEqualType,
boolean dontAdd)

**Parameters:**
- `IsoObject` `parent`
- `RenderEffectType` `t`
- `boolean` `reuseEqualType`
- `boolean` `dontAdd`

**Returns:** `ObjectRenderEffects`

### public static ObjectRenderEffects getNextWindEffect(int windType,
boolean isTreeLike)

**Parameters:**
- `int` `windType`
- `boolean` `isTreeLike`

**Returns:** `ObjectRenderEffects`

### public static void init()

**Returns:** `void`

### public boolean update()

**Returns:** `boolean`

### public void copyMainFromOther(ObjectRenderEffects other)

**Parameters:**
- `ObjectRenderEffects` `other`

**Returns:** `void`

### public void add(ObjectRenderEffects other)

**Parameters:**
- `ObjectRenderEffects` `other`

**Returns:** `void`

### public static void updateStatic()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\ObjectRenderEffects.html`*
