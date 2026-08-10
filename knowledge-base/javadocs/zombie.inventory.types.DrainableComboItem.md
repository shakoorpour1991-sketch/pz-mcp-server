---
title: zombie.inventory.types.DrainableComboItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.DrainableComboItem

`public final class DrainableComboItem extends InventoryItem implements Drainable, IUpdater`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.DrainableComboItem

## Fields

### public List<String> replaceOnCooked

## Constructors

### public DrainableComboItem(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

### public DrainableComboItem(String module,
String name,
String itemType,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `Item` `item`

## Methods

### public boolean IsDrainable()

**Returns:** `boolean`

### public int getMaxUses()

**Returns:** `int`

### public void setCurrentUses(int newuses)

**Parameters:**
- `int` `newuses`

**Returns:** `void`

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

### public void render()

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public boolean shouldUpdateInWorld()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void Use()

**Returns:** `void`

### public void Use(boolean bCrafting,
boolean bInContainer,
boolean bNeedSync)

**Parameters:**
- `boolean` `bCrafting`
- `boolean` `bInContainer`
- `boolean` `bNeedSync`

**Returns:** `void`

### public void syncItemFields()

**Returns:** `void`

### public void updateWeight()

**Returns:** `void`

### public float getWeightEmpty()

**Returns:** `float`

### public void setWeightEmpty(float weight)

**Parameters:**
- `float` `weight` — the EmptyWeight to set

**Returns:** `void`

### public boolean isUseWhileEquiped()

**Returns:** `boolean`

### public void setUseWhileEquiped(boolean bUseWhileEquiped)

**Parameters:**
- `boolean` `bUseWhileEquiped` — the bUseWhileEquiped to set

**Returns:** `void`

### public boolean isUseWhileUnequiped()

**Returns:** `boolean`

### public void setUseWhileUnequiped(boolean bUseWhileUnequiped)

**Parameters:**
- `boolean` `bUseWhileUnequiped` — the bUseWhileUnequiped to set

**Returns:** `void`

### public int getTicksPerEquipUse()

**Returns:** `int`

### public void setTicksPerEquipUse(int ticksPerEquipUse)

**Parameters:**
- `int` `ticksPerEquipUse` — the ticksPerEquipUse to set

**Returns:** `void`

### public float getUseDelta()

**Returns:** `float`

### public void setUseDelta(float useDelta)

**Parameters:**
- `float` `useDelta` — the useDelta to set

**Returns:** `void`

### public float getTicks()

**Returns:** `float`

### public void setTicks(float ticks)

**Parameters:**
- `float` `ticks` — the ticks to set

**Returns:** `void`

### public void setReplaceOnDeplete(String replaceOnDeplete)

**Parameters:**
- `String` `replaceOnDeplete`

**Returns:** `void`

### public String getReplaceOnDeplete()

**Returns:** `String`

### public String getReplaceOnDepleteFullType()

**Returns:** `String`

### public void setHeat(float heat)

**Parameters:**
- `float` `heat`

**Returns:** `void`

### public float getHeat()

**Returns:** `float`

### public float getInvHeat()

**Returns:** `float`

### public boolean finishupdate()

**Returns:** `boolean`

### public boolean canConsolidate()

**Returns:** `boolean`

### public void setCanConsolidate(boolean canConsolidate)

**Parameters:**
- `boolean` `canConsolidate`

**Returns:** `void`

### public List<String> getReplaceOnCooked()

**Returns:** `List<String>`

### public void setReplaceOnCooked(List<String> replaceOnCooked)

**Parameters:**
- `List<String>` `replaceOnCooked` — the ReplaceOnCooked to set

**Returns:** `void`

### public String getOnCooked()

**Returns:** `String`

### public void setOnCooked(String onCooked)

**Parameters:**
- `String` `onCooked` — the onCooked to set

**Returns:** `void`

### public String getOnEat()

**Returns:** `String`

### public void setOnEat(String onEat)

**Parameters:**
- `String` `onEat`

**Returns:** `void`

### public boolean isEnergy()

**Returns:** `boolean`

### public Energy getEnergy()

**Returns:** `Energy`

### public boolean isFullUses()

**Returns:** `boolean`

### public boolean isEmptyUses()

**Returns:** `boolean`

### public void randomizeUses()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\DrainableComboItem.html`*
