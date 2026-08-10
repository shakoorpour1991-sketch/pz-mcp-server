---
title: zombie.inventory.types.WeaponPart
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.WeaponPart

`public final class WeaponPart extends InventoryItem implements Drainable, IUpdater`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.WeaponPart

## Constructors

### public WeaponPart(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

## Methods

### public String getCategory()

**Returns:** `String`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public void DoBatteryTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public float getMinSightRange()

**Returns:** `float`

### public void setMinSightRange(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public float getMaxSightRange()

**Returns:** `float`

### public void setLowLightBonus(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public float getLowLightBonus()

**Returns:** `float`

### public void setMaxSightRange(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public float getMinRangeRanged()

**Returns:** `float`

### public void setMinRangeRanged(float minRangeRanged)

**Parameters:**
- `float` `minRangeRanged`

**Returns:** `void`

### public float getMaxRange()

**Returns:** `float`

### public void setMaxRange(float maxRange)

**Parameters:**
- `float` `maxRange`

**Returns:** `void`

### public float getRecoilDelay()

**Returns:** `float`

### public void setRecoilDelay(float recoilDelay)

**Parameters:**
- `float` `recoilDelay`

**Returns:** `void`

### public int getClipSize()

**Returns:** `int`

### public void setClipSize(int clipSize)

**Parameters:**
- `int` `clipSize`

**Returns:** `void`

### public float getDamage()

**Returns:** `float`

### public void setDamage(float damage)

**Parameters:**
- `float` `damage`

**Returns:** `void`

### public List<String> getMountOn()

**Returns:** `List<String>`

### public void setMountOn(List<String> mountOn)

**Parameters:**
- `List<String>` `mountOn`

**Returns:** `void`

### public String getPartType()

**Returns:** `String`

### public void setPartType(String partType)

**Parameters:**
- `String` `partType`

**Returns:** `void`

### public int getReloadTime()

**Returns:** `int`

### public void setReloadTime(int reloadTime)

**Parameters:**
- `int` `reloadTime`

**Returns:** `void`

### public int getAimingTime()

**Returns:** `int`

### public void setAimingTime(int aimingTime)

**Parameters:**
- `int` `aimingTime`

**Returns:** `void`

### public int getHitChance()

**Returns:** `int`

### public void setHitChance(int hitChance)

**Parameters:**
- `int` `hitChance`

**Returns:** `void`

### public float getAngle()

**Returns:** `float`

### public void setAngle(float angle)

**Parameters:**
- `float` `angle`

**Returns:** `void`

### public float getSpreadModifier()

**Returns:** `float`

### public void setSpreadModifier(float modifier)

**Parameters:**
- `float` `modifier`

**Returns:** `void`

### public float getWeightModifier()

**Returns:** `float`

### public void setWeightModifier(float weightModifier)

**Parameters:**
- `float` `weightModifier`

**Returns:** `void`

### public void setCanAttachCallback(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public boolean canAttach(IsoGameCharacter character,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `character`
- `HandWeapon` `weapon`

**Returns:** `boolean`

### public void setCanDetachCallback(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public boolean canDetach(IsoGameCharacter character,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `character`
- `HandWeapon` `weapon`

**Returns:** `boolean`

### public void setOnAttachCallback(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public void onAttach(IsoGameCharacter character,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `character`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void setOnDetachCallback(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public void onDetach(IsoGameCharacter character,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `character`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public int getMaxUses()

**Returns:** `int`

### @Deprecated
public void setUsedDelta(float delta)

> ⚠️ **Deprecated**

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void setCurrentUsesFloat(float newUses)

**Parameters:**
- `float` `newUses`

**Returns:** `void`

### public float getCurrentUsesFloat()

**Returns:** `float`

### public void setUseDelta(float useDelta)

**Parameters:**
- `float` `useDelta`

**Returns:** `void`

### public void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\WeaponPart.html`*
