---
title: zombie.iso.objects.interfaces.Thumpable
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.iso.objects.interfaces
---

# zombie.iso.objects.interfaces.Thumpable

`public interface Thumpable`

**Kind:** interface · **Package:** zombie.iso.objects.interfaces

## Methods

### boolean isDestroyed()

**Returns:** `boolean`

### default void Thump(IsoMovingObject isoMovingObject)

**Parameters:**
- `IsoMovingObject` `isoMovingObject`

**Returns:** `void`

### void Thump(IsoMovingObject var1,
int var2)

**Parameters:**
- `IsoMovingObject` `var1`
- `int` `var2`

**Returns:** `void`

### void WeaponHit(IsoGameCharacter chr,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `chr`
- `HandWeapon` `weapon`

**Returns:** `void`

### Thumpable getThumpableFor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Thumpable`

### Thumpable getThumpableFor(IsoGameCharacter var1,
HandWeapon var2)

**Parameters:**
- `IsoGameCharacter` `var1`
- `HandWeapon` `var2`

**Returns:** `Thumpable`

### float getThumpCondition()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\interfaces\Thumpable.html`*
