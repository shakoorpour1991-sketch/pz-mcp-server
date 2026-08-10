---
title: zombie.iso.objects.IsoAnimalTrack
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoAnimalTrack

`public class IsoAnimalTrack extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoAnimalTrack

## Fields

### public boolean glow

## Constructors

### public IsoAnimalTrack(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoAnimalTrack(IsoGridSquare sq,
String sprite,
AnimalTracks track)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `sprite`
- `AnimalTracks` `track`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void glow(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `void`

### public void stopGlow(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `void`

### public AnimalTracks getAnimalTracks()

**Returns:** `AnimalTracks`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldversion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldversion`
- `boolean` `isDebugSave`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoAnimalTrack.html`*
