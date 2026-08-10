---
title: zombie.iso.IsoButcherHook
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoButcherHook

`public class IsoButcherHook extends IsoObject`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoButcherHook

## Constructors

### public IsoButcherHook(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

### public IsoButcherHook(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void stopRemovingBlood()

**Returns:** `void`

### public void startRemovingBlood(se.krka.kahlua.j2se.KahluaTableImpl luaHook)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `luaHook`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void setPlayRemovingBloodSound(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isRemovingBlood()

**Returns:** `boolean`

### public float getRemovingBloodProgress()

**Returns:** `float`

### public String getObjectName()

**Returns:** `String`

### public void setAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public IsoAnimal getAnimal()

**Returns:** `IsoAnimal`

### public void removeHook()

**Returns:** `void`

### public void playPutDownCorpseSound(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void reattachAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void setLuaHook(se.krka.kahlua.j2se.KahluaTableImpl luaHook)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `luaHook`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void onReceivedNetUpdate()

**Returns:** `void`

### public void updateAnimalModel()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoButcherHook.html`*
