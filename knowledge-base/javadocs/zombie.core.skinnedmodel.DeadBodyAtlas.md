---
title: zombie.core.skinnedmodel.DeadBodyAtlas
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.DeadBodyAtlas

`public final class DeadBodyAtlas extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.DeadBodyAtlas

## Fields

### public static final int ATLAS_SIZE

### public static final DeadBodyAtlas instance

### public static Shader deadBodyAtlasShader

## Constructors

### public DeadBodyAtlas()

## Methods

### public void lightingUpdate(int updateCounter,
boolean lightsChanged)

**Parameters:**
- `int` `updateCounter`
- `boolean` `lightsChanged`

**Returns:** `void`

### public DeadBodyAtlas.BodyTexture getBodyTexture(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `DeadBodyAtlas.BodyTexture`

### public DeadBodyAtlas.BodyTexture getBodyTexture(IsoZombie body)

**Parameters:**
- `IsoZombie` `body`

**Returns:** `DeadBodyAtlas.BodyTexture`

### public DeadBodyAtlas.BodyTexture getBodyTexture(IsoMannequin body)

**Parameters:**
- `IsoMannequin` `body`

**Returns:** `DeadBodyAtlas.BodyTexture`

### public DeadBodyAtlas.BodyTexture getBodyTexture(boolean bFemale,
String animSet,
String stateName,
IsoDirections dir,
int frame,
float trackTime)

**Parameters:**
- `boolean` `bFemale`
- `String` `animSet`
- `String` `stateName`
- `IsoDirections` `dir`
- `int` `frame`
- `float` `trackTime`

**Returns:** `DeadBodyAtlas.BodyTexture`

### public DeadBodyAtlas.BodyTexture getBodyTexture(DeadBodyAtlas.BodyParams body)

**Parameters:**
- `DeadBodyAtlas.BodyParams` `body`

**Returns:** `DeadBodyAtlas.BodyTexture`

### public void invalidateBodyTexture(DeadBodyAtlas.BodyTexture bodyTexture,
IsoDeadBody body)

**Parameters:**
- `DeadBodyAtlas.BodyTexture` `bodyTexture`
- `IsoDeadBody` `body`

**Returns:** `void`

### public void checkLights(Texture entryTex,
IsoDeadBody body)

**Parameters:**
- `Texture` `entryTex`
- `IsoDeadBody` `body`

**Returns:** `void`

### public void checkLights(Texture entryTex,
IsoZombie body)

**Parameters:**
- `Texture` `entryTex`
- `IsoZombie` `body`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void renderDebug()

**Returns:** `void`

### public void renderUI()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\DeadBodyAtlas.html`*
