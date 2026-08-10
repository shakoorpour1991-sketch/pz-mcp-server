---
title: zombie.iso.IsoObjectPicker
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoObjectPicker

`public final class IsoObjectPicker extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoObjectPicker

## Fields

### public static final IsoObjectPicker Instance

### public static final Comparator<IsoObjectPicker.ClickObject> comp

### public IsoObjectPicker.ClickObject[] clickObjectStore

### public int count

### public int counter

### public int maxcount

### public final ArrayList<IsoObjectPicker.ClickObject> thisFrame

### public boolean dirty

### public float xOffSinceDirty

### public float yOffSinceDirty

### public boolean wasDirty

## Constructors

### public IsoObjectPicker()

## Methods

### public IsoObjectPicker getInstance()

**Returns:** `IsoObjectPicker`

### public void Add(int x,
int y,
int width,
int height,
IsoGridSquare gridSquare,
IsoObject tile,
boolean flip,
float scaleX,
float scaleY)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `IsoGridSquare` `gridSquare`
- `IsoObject` `tile`
- `boolean` `flip`
- `float` `scaleX`
- `float` `scaleY`

**Returns:** `void`

### public void Init()

**Returns:** `void`

### public IsoObjectPicker.ClickObject ContextPick(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `IsoObjectPicker.ClickObject`

### public IsoObjectPicker.ClickObject Pick(int xx,
int yy)

**Parameters:**
- `int` `xx`
- `int` `yy`

**Returns:** `IsoObjectPicker.ClickObject`

### public void StartRender()

**Returns:** `void`

### public IsoMovingObject PickTarget(int xx,
int yy)

**Parameters:**
- `int` `xx`
- `int` `yy`

**Returns:** `IsoMovingObject`

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

### public BaseVehicle PickVehicle(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `BaseVehicle`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoObjectPicker.html`*
