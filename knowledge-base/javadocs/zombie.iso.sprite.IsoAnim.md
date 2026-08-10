---
title: zombie.iso.sprite.IsoAnim
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.sprite
---

# zombie.iso.sprite.IsoAnim

`public final class IsoAnim extends Object`

**Kind:** class · **Package:** zombie.iso.sprite

## Inheritance
- java.lang.Object
- zombie.iso.sprite.IsoAnim

## Fields

### public static final HashMap<String,IsoAnim> GlobalAnimMap

### public short finishUnloopedOnFrame

### public short frameDelay

### public short lastFrame

### public final ArrayList<IsoDirectionFrame> frames

### public String name

### public int id

### public IsoDirectionFrame[] framesArray

## Constructors

### public IsoAnim()

## Methods

### public static void DisposeAll()

**Returns:** `void`

### public void LoadFramesReverseAltName(String objectName,
String animName,
String altName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `String` `altName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFrames(String objectName,
String animName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesUseOtherFrame(String objectName,
String variant,
String animName,
String otherAnimName,
int nOtherFrameFrame,
String pal)

**Parameters:**
- `String` `objectName`
- `String` `variant`
- `String` `animName`
- `String` `otherAnimName`
- `int` `nOtherFrameFrame`
- `String` `pal`

**Returns:** `void`

### public void LoadFramesBits(String objectName,
String variant,
String animName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `variant`
- `String` `animName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesBits(String objectName,
String animName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesBitRepeatFrame(String objectName,
String animName,
int repeatFrame)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `repeatFrame`

**Returns:** `void`

### public void LoadFramesBitRepeatFrame(String objectName,
String variant,
String animName,
int repeatFrame,
String pal)

**Parameters:**
- `String` `objectName`
- `String` `variant`
- `String` `animName`
- `int` `repeatFrame`
- `String` `pal`

**Returns:** `void`

### public void LoadFramesBits(String objectName,
String variant,
String animName,
int nFrames,
String pal)

**Parameters:**
- `String` `objectName`
- `String` `variant`
- `String` `animName`
- `int` `nFrames`
- `String` `pal`

**Returns:** `void`

### public void LoadFramesPageSimple(String nObjectName,
String sObjectName,
String eObjectName,
String wObjectName)

**Parameters:**
- `String` `nObjectName`
- `String` `sObjectName`
- `String` `eObjectName`
- `String` `wObjectName`

**Returns:** `void`

### public boolean hasNoTextures()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\sprite\IsoAnim.html`*
