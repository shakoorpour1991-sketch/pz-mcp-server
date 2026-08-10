---
title: zombie.iso.fboRenderChunk.FBORenderObjectPicker
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderObjectPicker

`public final class FBORenderObjectPicker extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderObjectPicker

## Constructors

### public FBORenderObjectPicker()

## Methods

### public static FBORenderObjectPicker getInstance()

**Returns:** `FBORenderObjectPicker`

### public IsoObjectPicker.ClickObject ContextPick(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObjectPicker.ClickObject`

### public void getClickObjects(int screenX,
int screenY,
PZArrayList<IsoObjectPicker.ClickObject> clickObjects)

**Parameters:**
- `int` `screenX`
- `int` `screenY`
- `PZArrayList<IsoObjectPicker.ClickObject>` `clickObjects`

**Returns:** `void`

### public IsoObject PickDoor(int screenX,
int screenY,
boolean bTransparent)

**Parameters:**
- `int` `screenX`
- `int` `screenY`
- `boolean` `bTransparent`

**Returns:** `IsoObject`

### public IsoObject PickWindow(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObject`

### public IsoObject PickWindowFrame(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObject`

### public IsoObject PickThumpable(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObject`

### public IsoObject PickHoppable(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObject`

### public IsoObject PickCorpse(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObject`

### public IsoObject PickTree(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObject`

### public org.joml.Vector2f getPointRelativeToTopLeftOfTexture(IsoObject object,
int screenX,
int screenY,
org.joml.Vector2f out)

**Parameters:**
- `IsoObject` `object`
- `int` `screenX`
- `int` `screenY`
- `org.joml.Vector2f` `out`

**Returns:** `org.joml.Vector2f`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderObjectPicker.html`*
