---
title: zombie.iso.Helicopter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.Helicopter

`public class Helicopter extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.Helicopter

## Fields

### public IsoGameCharacter target

### public float x

### public float y

## Constructors

### public Helicopter()

## Methods

### public void pickRandomTarget()

**Returns:** `void`

### public void setTarget(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void deactivate()

**Returns:** `void`

### public boolean isActive()

**Returns:** `boolean`

### public void clientSync(float x,
float y,
boolean active)

**Parameters:**
- `float` `x`
- `float` `y`
- `boolean` `active`

**Returns:** `void`

### public void save(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void load(ByteBuffer bb,
int worldVersion)

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\Helicopter.html`*
