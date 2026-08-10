---
title: zombie.entity.components.build.BuildLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.build
---

# zombie.entity.components.build.BuildLogic

`public class BuildLogic extends BaseCraftingLogic`

**Kind:** class · **Package:** zombie.entity.components.build

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.BaseCraftingLogic
- zombie.entity.components.build.BuildLogic

## Constructors

### public BuildLogic(IsoGameCharacter player,
CraftBench craftBench,
IsoObject isoObject)

**Parameters:**
- `IsoGameCharacter` `player`
- `CraftBench` `craftBench`
- `IsoObject` `isoObject`

## Methods

### public CraftRecipeListNodeCollection getRecipeList()

**Returns:** `CraftRecipeListNodeCollection`

### public CraftRecipe getRecipe()

**Returns:** `CraftRecipe`

### public CraftRecipeData getRecipeData()

**Returns:** `CraftRecipeData`

### public CraftRecipeData getRecipeDataInProgress()

**Returns:** `CraftRecipeData`

### public SpriteConfigManager.ObjectInfo getSelectedBuildObject()

**Returns:** `SpriteConfigManager.ObjectInfo`

### public se.krka.kahlua.vm.KahluaTable getWallCoveringParams()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public ArrayList<CraftRecipe> getAllBuildableRecipes()

**Returns:** `ArrayList<CraftRecipe>`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public boolean isCraftActionInProgress()

**Returns:** `boolean`

### public boolean areAllInputItemsSatisfied()

**Returns:** `boolean`

### public boolean isInputSatisfied(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `boolean`

### public void startCraftAction(se.krka.kahlua.j2se.KahluaTableImpl actionTable)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `actionTable`

**Returns:** `void`

### public void updateFloorContainer()

**Returns:** `void`

### public boolean performCurrentRecipe()

**Returns:** `boolean`

### public void stopCraftAction()

**Returns:** `void`

### public ArrayList<InventoryItem> getAllConsumedItems()

**Returns:** `ArrayList<InventoryItem>`

### public void setSelectedRecipeStyle(String style)

**Parameters:**
- `String` `style`

**Returns:** `void`

### public String getSelectedRecipeStyle()

**Returns:** `String`

### public void setRecipeSortMode(String sortMode)

**Parameters:**
- `String` `sortMode`

**Returns:** `void`

### public String getRecipeSortMode()

**Returns:** `String`

### public void setLastSelectedRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public CraftRecipe getLastSelectedRecipe()

**Returns:** `CraftRecipe`

### public void setLastManualInputMode(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\build\BuildLogic.html`*
