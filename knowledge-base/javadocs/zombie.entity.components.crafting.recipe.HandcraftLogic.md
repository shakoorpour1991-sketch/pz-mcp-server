---
title: zombie.entity.components.crafting.recipe.HandcraftLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.HandcraftLogic

`public class HandcraftLogic extends BaseCraftingLogic`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.BaseCraftingLogic
- zombie.entity.components.crafting.recipe.HandcraftLogic

## Constructors

### public HandcraftLogic(IsoGameCharacter player,
CraftBench craftBench,
IsoObject isoObject)

**Parameters:**
- `IsoGameCharacter` `player`
- `CraftBench` `craftBench`
- `IsoObject` `isoObject`

## Methods

### public IsoGameCharacter getPlayer()

**Returns:** `IsoGameCharacter`

### public CraftBench getCraftBench()

**Returns:** `CraftBench`

### public IsoObject getIsoObject()

**Returns:** `IsoObject`

### public CraftRecipeData getRecipeData()

**Returns:** `CraftRecipeData`

### public ArrayList<Resource> getSourceResources()

**Returns:** `ArrayList<Resource>`

### public CraftRecipeListNodeCollection getRecipeList()

**Returns:** `CraftRecipeListNodeCollection`

### public ArrayList<InventoryItem> getAllItems()

**Returns:** `ArrayList<InventoryItem>`

### public void startCraftAction(se.krka.kahlua.j2se.KahluaTableImpl actionTable)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `actionTable`

**Returns:** `void`

### public void stopCraftAction()

**Returns:** `void`

### public void stopCraftAction(boolean stopAll)

**Parameters:**
- `boolean` `stopAll`

**Returns:** `void`

### public float getResidualFluidFromInput(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `float`

### public boolean isCraftActionInProgress()

**Returns:** `boolean`

### public se.krka.kahlua.j2se.KahluaTableImpl getCraftActionTable()

**Returns:** `se.krka.kahlua.j2se.KahluaTableImpl`

### public boolean performCurrentRecipe()

**Returns:** `boolean`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public void setRecipeFromContextClick(CraftRecipe recipe,
InventoryItem inventoryItem)

**Parameters:**
- `CraftRecipe` `recipe`
- `InventoryItem` `inventoryItem`

**Returns:** `void`

### public void checkValidRecipeSelected()

**Returns:** `void`

### public void setRecipes(List<CraftRecipe> recipes)

**Parameters:**
- `List<CraftRecipe>` `recipes`

**Returns:** `void`

### public void filterRecipeList(String filter,
String categoryFilter,
boolean force,
IsoPlayer player)

**Parameters:**
- `String` `filter`
- `String` `categoryFilter`
- `boolean` `force`
- `IsoPlayer` `player`

**Returns:** `void`

### public void getCreatedOutputItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `void`

### public boolean isCharacterInRangeOfWorkbench()

**Returns:** `boolean`

### public boolean isValidRecipeForCharacter(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public boolean canCharacterPerformRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public boolean isRecipeAvailableForCharacter(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public Texture getResultTexture()

**Returns:** `Texture`

### public void setIsoObject(IsoObject isoObj)

**Parameters:**
- `IsoObject` `isoObj`

**Returns:** `void`

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

### public boolean isUsingRecipeAtHandBenefit()

**Returns:** `boolean`

### public InventoryItem getUsingRecipeAtHandItem()

**Returns:** `InventoryItem`

### public boolean isRecipeAtHand()

**Returns:** `boolean`

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

### public IsoObject findCraftSurface(IsoGameCharacter player,
int radius)

**Parameters:**
- `IsoGameCharacter` `player`
- `int` `radius`

**Returns:** `IsoObject`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\HandcraftLogic.html`*
