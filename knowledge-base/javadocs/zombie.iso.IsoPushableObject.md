---
title: zombie.iso.IsoPushableObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoPushableObject

`public class IsoPushableObject extends IsoMovingObject`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.iso.IsoPushableObject

## Fields

### public int carryCapacity

### public float emptyWeight

### public ArrayList<IsoPushableObject> connectList

### public float ox

### public float oy

## Constructors

### public IsoPushableObject(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoPushableObject(IsoCell cell,
int x,
int y,
int z)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`

### public IsoPushableObject(IsoCell cell,
IsoGridSquare square,
IsoSprite spr)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `square`
- `IsoSprite` `spr`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public float getWeight(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public void DoCollideNorS()

**Returns:** `void`

### public void DoCollideWorE()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoPushableObject.html`*
