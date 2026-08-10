---
title: zombie.iso.objects.interfaces.BarricadeAble
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.iso.objects.interfaces
---

# zombie.iso.objects.interfaces.BarricadeAble

`public interface BarricadeAble`

**Kind:** interface · **Package:** zombie.iso.objects.interfaces

## Methods

### boolean isBarricaded()

**Returns:** `boolean`

### boolean isBarricadeAllowed()

**Returns:** `boolean`

### IsoBarricade getBarricadeOnSameSquare()

**Returns:** `IsoBarricade`

### IsoBarricade getBarricadeOnOppositeSquare()

**Returns:** `IsoBarricade`

### IsoBarricade getBarricadeForCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### IsoBarricade getBarricadeOppositeCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### IsoGridSquare getOppositeSquare()

**Returns:** `IsoGridSquare`

### boolean getNorth()

**Returns:** `boolean`

### default IsoBarricade addBarricadesFromCraftRecipe(IsoGameCharacter chr,
ArrayList<InventoryItem> items,
CraftRecipeData craftRecipeData,
boolean opposite)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ArrayList<InventoryItem>` `items`
- `CraftRecipeData` `craftRecipeData`
- `boolean` `opposite`

**Returns:** `IsoBarricade`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\interfaces\BarricadeAble.html`*
