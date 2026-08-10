---
title: zombie.entity.components.crafting.CraftLogicUILogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.CraftLogicUILogic

`public class CraftLogicUILogic extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.CraftLogicUILogic

## Constructors

### public CraftLogicUILogic(IsoPlayer player,
GameEntity entity,
CraftLogic component)

**Parameters:**
- `IsoPlayer` `player`
- `GameEntity` `entity`
- `CraftLogic` `component`

## Methods

### public CraftLogic getCraftLogic()

**Returns:** `CraftLogic`

### public GameEntity getEntity()

**Returns:** `GameEntity`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public CraftRecipe getRecipe()

**Returns:** `CraftRecipe`

### public CraftRecipeListNodeCollection getRecipeList()

**Returns:** `CraftRecipeListNodeCollection`

### public boolean cachedCanStart(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void addEventListener(String event,
Object function)

**Parameters:**
- `String` `event`
- `Object` `function`

**Returns:** `void`

### public void addEventListener(String event,
Object function,
Object targetTable)

**Parameters:**
- `String` `event`
- `Object` `function`
- `Object` `targetTable`

**Returns:** `void`

### public Texture getEntityIcon()

**Returns:** `Texture`

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

### public void filterRecipeList(String filter,
String categoryFilter)

**Parameters:**
- `String` `filter`
- `String` `categoryFilter`

**Returns:** `void`

### public void filterRecipeList(String filter,
String categoryFilter,
boolean force)

**Parameters:**
- `String` `filter`
- `String` `categoryFilter`
- `boolean` `force`

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

### public void sortRecipeList()

**Returns:** `void`

### public int getPossibleCraftCount(boolean forceRecache)

**Parameters:**
- `boolean` `forceRecache`

**Returns:** `int`

### public se.krka.kahlua.vm.KahluaTable getItemsInProgress()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public ArrayList<Texture> getStatusIconsForItemInProgress(InventoryItem item,
CraftRecipeData craftRecipeData)

**Parameters:**
- `InventoryItem` `item`
- `CraftRecipeData` `craftRecipeData`

**Returns:** `ArrayList<Texture>`

### public se.krka.kahlua.vm.KahluaTable getOutputItems()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean shouldShowManualSelectInputs()

**Returns:** `boolean`

### public void setShowManualSelectInputs(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public InputScript getManualSelectInputScriptFilter()

**Returns:** `InputScript`

### public se.krka.kahlua.vm.KahluaTable getManualSelectItemSlot()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void setManualSelectInputScriptFilter(InputScript script,
se.krka.kahlua.vm.KahluaTable itemSlot)

**Parameters:**
- `InputScript` `script`
- `se.krka.kahlua.vm.KahluaTable` `itemSlot`

**Returns:** `void`

### public CraftRecipeData getRecipeData()

**Returns:** `CraftRecipeData`

### public ArrayList<InputItemNode> getInputItemNodes()

**Returns:** `ArrayList<InputItemNode>`

### public ArrayList<InputItemNode> getInputItemNodesForInput(InputScript input)

**Parameters:**
- `InputScript` `input`

**Returns:** `ArrayList<InputItemNode>`

### public ArrayList<InputItemNode> getResourceItemNodes()

**Returns:** `ArrayList<InputItemNode>`

### public void onResourceSlotContentsChanged()

**Returns:** `void`

### public void setCraftQuantity(int quantity)

**Parameters:**
- `int` `quantity`

**Returns:** `void`

### public void setContainers(ArrayList<ItemContainer> containersToUse)

**Parameters:**
- `ArrayList<ItemContainer>` `containersToUse`

**Returns:** `void`

### public ArrayList<ItemContainer> getContainers()

**Returns:** `ArrayList<ItemContainer>`

### public void doProgressSlotTooltip(se.krka.kahlua.vm.KahluaTable itemSlot,
ObjectTooltip tooltipUI)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `itemSlot`
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void doPreviewSlotTooltip(se.krka.kahlua.vm.KahluaTable itemSlot,
ObjectTooltip tooltipUI)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `itemSlot`
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void offerInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `void`

### public void removeInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `void`

### public void clearManualInputsFor(CraftRecipeData.InputScriptData input)

**Parameters:**
- `CraftRecipeData.InputScriptData` `input`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getInventoryItemsToTransfer()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean cachedCanPerformCurrentRecipe()

**Returns:** `boolean`

### public boolean areAllInputItemsSatisfied()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\CraftLogicUILogic.html`*
