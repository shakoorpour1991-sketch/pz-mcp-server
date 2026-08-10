---
title: zombie.entity.components.crafting.BaseCraftingLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.BaseCraftingLogic

`public abstract class BaseCraftingLogic extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.BaseCraftingLogic

## Constructors

### public BaseCraftingLogic(IsoGameCharacter player,
CraftBench craftBench)

**Parameters:**
- `IsoGameCharacter` `player`
- `CraftBench` `craftBench`

## Methods

### public ArrayList<String> getCategoryList()

**Returns:** `ArrayList<String>`

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

### public static CraftRecipeListNodeCollection filterAndSortRecipeList(String filterString,
String categoryFilterString,
CraftRecipeListNodeCollection listToPopulate,
List<CraftRecipe> sourceList,
IsoPlayer player,
Comparator<CraftRecipe> sortComparator)

**Parameters:**
- `String` `filterString`
- `String` `categoryFilterString`
- `CraftRecipeListNodeCollection` `listToPopulate`
- `List<CraftRecipe>` `sourceList`
- `IsoPlayer` `player`
- `Comparator<CraftRecipe>` `sortComparator`

**Returns:** `CraftRecipeListNodeCollection`

### public void sortRecipeList()

**Returns:** `void`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public void setRecipes(List<CraftRecipe> recipes)

**Parameters:**
- `List<CraftRecipe>` `recipes`

**Returns:** `void`

### public CraftRecipe getRecipe()

**Returns:** `CraftRecipe`

### public boolean setContainers(ArrayList<ItemContainer> containersToUse)

**Parameters:**
- `ArrayList<ItemContainer>` `containersToUse`

**Returns:** `boolean`

### public ArrayList<ItemContainer> getContainers()

**Returns:** `ArrayList<ItemContainer>`

### public void refresh()

**Returns:** `void`

### public void setTargetVariableInputRatio(float target)

**Parameters:**
- `float` `target`

**Returns:** `void`

### public void clearTargetVariableInputRatio()

**Returns:** `void`

### public float getVariableInputRatio()

**Returns:** `float`

### public static String getFavouriteModDataString(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `String`

### public static String getFavouriteModDataString(String recipe)

**Parameters:**
- `String` `recipe`

**Returns:** `String`

### public static se.krka.kahlua.vm.KahluaTable callLuaObject(String func,
Object params)

**Parameters:**
- `String` `func`
- `Object` `params`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static boolean callLuaBool(String func,
Object params)

**Parameters:**
- `String` `func`
- `Object` `params`

**Returns:** `boolean`

### public static void callLua(String func,
Object params)

**Parameters:**
- `String` `func`
- `Object` `params`

**Returns:** `void`

### public static void callLua(String func,
Object params,
Object params2)

**Parameters:**
- `String` `func`
- `Object` `params`
- `Object` `params2`

**Returns:** `void`

### public static void callLua(String func,
Object params,
Object params2,
Object params3)

**Parameters:**
- `String` `func`
- `Object` `params`
- `Object` `params2`
- `Object` `params3`

**Returns:** `void`

### public String getModelHandOne()

**Returns:** `String`

### public String getModelHandTwo()

**Returns:** `String`

### public boolean isContainersAccessible(List<ItemContainer> containers)

**Parameters:**
- `List<ItemContainer>` `containers`

**Returns:** `boolean`

### public boolean updateFloorContainer(ArrayList<ItemContainer> containers)

**Parameters:**
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public BaseCraftingLogic.CachedRecipeInfo getCachedRecipeInfo(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `BaseCraftingLogic.CachedRecipeInfo`

### public boolean areAllInputItemsSatisfied()

**Returns:** `boolean`

### public boolean isCharacterInRangeOfWorkbench()

**Returns:** `boolean`

### public boolean hasRequiredWorkstation()

**Returns:** `boolean`

### public boolean cachedCanPerformCurrentRecipe()

**Returns:** `boolean`

### public boolean canPerformCurrentRecipe()

**Returns:** `boolean`

### public boolean isManualSelectInputs()

**Returns:** `boolean`

### public void setManualSelectInputs(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean shouldShowManualSelectInputs()

**Returns:** `boolean`

### public void setShowManualSelectInputs(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public InputScript getManualSelectInputScriptFilter()

**Returns:** `InputScript`

### public void setManualSelectInputScriptFilter(InputScript script)

**Parameters:**
- `InputScript` `script`

**Returns:** `void`

### public void clearManualInputs()

**Returns:** `void`

### public void clearManualInputsFor(CraftRecipeData.InputScriptData input)

**Parameters:**
- `CraftRecipeData.InputScriptData` `input`

**Returns:** `void`

### public boolean setManualInputsFor(InputScript inputScript,
ArrayList<InventoryItem> list)

**Parameters:**
- `InputScript` `inputScript`
- `ArrayList<InventoryItem>` `list`

**Returns:** `boolean`

### public ArrayList<InventoryItem> getManualInputsFor(InputScript inputScript,
ArrayList<InventoryItem> list)

**Parameters:**
- `InputScript` `inputScript`
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public void copyManualInputsFrom(BaseCraftingLogic logic)

**Parameters:**
- `BaseCraftingLogic` `logic`

**Returns:** `void`

### public void updateManualInputAllowedItemTypes()

**Returns:** `void`

### public void populateInputs(IsoGameCharacter player,
List<InventoryItem> inputItems,
List<Resource> resources,
boolean clearExisting)

**Parameters:**
- `IsoGameCharacter` `player`
- `List<InventoryItem>` `inputItems`
- `List<Resource>` `resources`
- `boolean` `clearExisting`

**Returns:** `void`

### public void autoPopulateInputs()

**Returns:** `void`

### public ArrayList<InputItemNode> getInputItemNodes()

**Returns:** `ArrayList<InputItemNode>`

### public ArrayList<InputItemNode> getInputItemNodesForInput(InputScript input)

**Parameters:**
- `InputScript` `input`

**Returns:** `ArrayList<InputItemNode>`

### public int getInputCount(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `int`

### public float getInputUses(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `float`

### public boolean isInputSatisfied(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `boolean`

### public List<Fluid> getSatisfiedInputFluids(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `List<Fluid>`

### public List<Item> getSatisfiedInputItems(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `List<Item>`

### public List<InventoryItem> getSatisfiedInputInventoryItems(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `List<InventoryItem>`

### public List<InventoryItem> getAllViableInputInventoryItems()

**Returns:** `List<InventoryItem>`

### public List<Resource> getAllViableInputResources()

**Returns:** `List<Resource>`

### public boolean offerInputItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean removeInputItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public int getPossibleCraftCount(boolean forceRecache)

**Parameters:**
- `boolean` `forceRecache`

**Returns:** `int`

### public ArrayList<Resource> getMulticraftConsumedResources()

**Returns:** `ArrayList<Resource>`

### public ArrayList<InventoryItem> getMulticraftConsumedItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getMulticraftConsumedItemsFor(InputScript inputScript,
ArrayList<InventoryItem> list)

**Parameters:**
- `InputScript` `inputScript`
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\BaseCraftingLogic.html`*
