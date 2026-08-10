---
title: zombie.iso.objects.IsoBulletTracerEffects
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoBulletTracerEffects

`public final class IsoBulletTracerEffects extends Object`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.iso.objects.IsoBulletTracerEffects

## Constructors

### public IsoBulletTracerEffects()

## Methods

### public static IsoBulletTracerEffects getInstance()

**Returns:** `IsoBulletTracerEffects`

### public HashMap<AmmoType, IsoBulletTracerEffects.IsoBulletTracerEffectsConfigOptions> getIsoBulletTracerEffectsConfigOptionsHashMap()

**Returns:** `HashMap<AmmoType, IsoBulletTracerEffects.IsoBulletTracerEffectsConfigOptions>`

### public IsoBulletTracerEffects.Effect addEffect(IsoGameCharacter isoGameCharacter,
float range)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `range`

**Returns:** `IsoBulletTracerEffects.Effect`

### public IsoBulletTracerEffects.Effect addEffect(IsoGameCharacter isoGameCharacter,
float range,
float x,
float y,
float z)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `range`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `IsoBulletTracerEffects.Effect`

### public IsoBulletTracerEffects.Effect addEffect(IsoGameCharacter isoGameCharacter,
float range,
float x,
float y,
float z,
IsoGridSquare isoGridSquare)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `float` `range`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoGridSquare` `isoGridSquare`

**Returns:** `IsoBulletTracerEffects.Effect`

### public static void directionVector(org.joml.Vector3f directionVector,
org.joml.Vector3f v1,
org.joml.Vector3f v2)

**Parameters:**
- `org.joml.Vector3f` `directionVector`
- `org.joml.Vector3f` `v1`
- `org.joml.Vector3f` `v2`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void save(AmmoType ammoType)

**Parameters:**
- `AmmoType` `ammoType`

**Returns:** `void`

### public void load(AmmoType ammoType)

**Parameters:**
- `AmmoType` `ammoType`

**Returns:** `void`

### public void reset(AmmoType ammoType)

**Parameters:**
- `AmmoType` `ammoType`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoBulletTracerEffects.html`*
