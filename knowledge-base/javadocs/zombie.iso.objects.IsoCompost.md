---
title: zombie.iso.objects.IsoCompost
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoCompost

`public class IsoCompost extends IsoObject implements Thumpable, IHasHealth`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoCompost

## Constructors

### public IsoCompost(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoCompost(IsoCell cell,
IsoGridSquare sq,
String sprite)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `String` `sprite`

### public IsoCompost(IsoCell cell,
IsoGridSquare sq,
IsoSprite sprite)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `sprite`

## Methods

### public void update()

**Returns:** `void`

### public void updateSprite()

**Returns:** `void`

### public void syncCompost()

**Returns:** `void`

### public void sync()

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

### public String getObjectName()

**Returns:** `String`

### public float getCompost()

**Returns:** `float`

### public void setCompost(float compost)

**Parameters:**
- `float` `compost`

**Returns:** `void`

### public void remove()

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public Thumpable getThumpableFor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Thumpable`

### public void setHealth(int health)

**Parameters:**
- `int` `health`

**Returns:** `void`

### public int getHealth()

**Returns:** `int`

### public void setMaxHealth(int maxHealth)

**Parameters:**
- `int` `maxHealth`

**Returns:** `void`

### public int getMaxHealth()

**Returns:** `int`

### public void Thump(IsoMovingObject thumper,
int thumpEventCount)

**Parameters:**
- `IsoMovingObject` `thumper`
- `int` `thumpEventCount`

**Returns:** `void`

### public void WeaponHit(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public boolean isDestroyed()

**Returns:** `boolean`

### public float getThumpCondition()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoCompost.html`*
