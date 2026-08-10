---
title: zombie.entity.components.crafting.recipe.CraftRecipeData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.CraftRecipeData

`public class CraftRecipeData extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.CraftRecipeData

## Fields

### public final ArrayList<CraftRecipeData.InputScriptData> inputs

## Constructors

### public CraftRecipeData(CraftMode craftMode,
boolean allowInputResources,
boolean allowInputItems,
boolean allowOutputResources,
boolean allowOutputItems)

**Parameters:**
- `CraftMode` `craftMode`
- `boolean` `allowInputResources`
- `boolean` `allowInputItems`
- `boolean` `allowOutputResources`
- `boolean` `allowOutputItems`

## Methods

### public static CraftRecipeData Alloc(CraftMode craftMode,
boolean allowInputResources,
boolean allowInputItems,
boolean allowOutputResources,
boolean allowOutputItems)

**Parameters:**
- `CraftMode` `craftMode`
- `boolean` `allowInputResources`
- `boolean` `allowInputItems`
- `boolean` `allowOutputResources`
- `boolean` `allowOutputItems`

**Returns:** `CraftRecipeData`

### public static void Release(CraftRecipeData data)

**Parameters:**
- `CraftRecipeData` `data`

**Returns:** `void`

### public void setMonitor(CraftRecipeMonitor monitor)

**Parameters:**
- `CraftRecipeMonitor` `monitor`

**Returns:** `void`

### public boolean isAllowInputItems()

**Returns:** `boolean`

### public boolean isAllowOutputItems()

**Returns:** `boolean`

### public boolean isAllowInputResources()

**Returns:** `boolean`

### public boolean isAllowOutputResources()

**Returns:** `boolean`

### public ItemDataList getToOutputItems()

**Returns:** `ItemDataList`

### public void reset()

**Returns:** `void`

### public void setCharacter(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public CraftRecipe getRecipe()

**Returns:** `CraftRecipe`

### public CraftRecipeData.InputScriptData getDataForInputScript(InputScript script)

**Parameters:**
- `InputScript` `script`

**Returns:** `CraftRecipeData.InputScriptData`

### public InventoryItem getFirstManualInputFor(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `InventoryItem`

### public boolean canOfferInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean canOfferInputItem(InventoryItem inventoryItem,
boolean verbose)

**Parameters:**
- `InventoryItem` `inventoryItem`
- `boolean` `verbose`

**Returns:** `boolean`

### public boolean canOfferInputItem(InputScript inputScript,
InventoryItem item)

**Parameters:**
- `InputScript` `inputScript`
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean canOfferInputItem(InputScript inputScript,
InventoryItem item,
boolean verbose)

**Parameters:**
- `InputScript` `inputScript`
- `InventoryItem` `item`
- `boolean` `verbose`

**Returns:** `boolean`

### public boolean offerAndReplaceInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean offerAndReplaceInputItem(CraftRecipeData.InputScriptData data,
InventoryItem inventoryItem)

**Parameters:**
- `CraftRecipeData.InputScriptData` `data`
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean offerInputItem(InputScript inputScript,
InventoryItem item)

**Parameters:**
- `InputScript` `inputScript`
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean offerInputItem(InputScript inputScript,
InventoryItem item,
boolean verbose)

**Parameters:**
- `InputScript` `inputScript`
- `InventoryItem` `item`
- `boolean` `verbose`

**Returns:** `boolean`

### public boolean containsInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean containsInputItem(CraftRecipeData.InputScriptData data,
InventoryItem inventoryItem)

**Parameters:**
- `CraftRecipeData.InputScriptData` `data`
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean removeInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean areAllInputItemsSatisfied()

**Returns:** `boolean`

### public boolean luaCallOnTest()

**Returns:** `boolean`

### public void luaCallOnStart()

**Returns:** `void`

### public void luaCallOnStart(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void luaCallOnUpdate()

**Returns:** `void`

### public void luaCallOnCreate()

**Returns:** `void`

### public void luaCallOnCreate(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void luaCallOnFailed()

**Returns:** `void`

### public boolean canPerform(IsoGameCharacter character,
List<Resource> inputResources,
List<InventoryItem> overrideInputItems,
boolean forceTestAll,
ArrayList<ItemContainer> containers)

**Parameters:**
- `IsoGameCharacter` `character`
- `List<Resource>` `inputResources`
- `List<InventoryItem>` `overrideInputItems`
- `boolean` `forceTestAll`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public boolean perform(IsoGameCharacter character,
List<Resource> inputResources,
List<InventoryItem> overrideInputItems,
ArrayList<ItemContainer> containers)

**Parameters:**
- `IsoGameCharacter` `character`
- `List<Resource>` `inputResources`
- `List<InventoryItem>` `overrideInputItems`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public void processDestroyAndUsedItems(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public int getPossibleCraftCount(List<Resource> inputResources,
List<InventoryItem> inputItems,
List<Resource> consumedResources,
List<InventoryItem> consumedItems,
boolean limitItemsToAppliedItems)

**Parameters:**
- `List<Resource>` `inputResources`
- `List<InventoryItem>` `inputItems`
- `List<Resource>` `consumedResources`
- `List<InventoryItem>` `consumedItems`
- `boolean` `limitItemsToAppliedItems`

**Returns:** `int`

### public boolean canConsumeInputs(List<Resource> inputResources,
List<InventoryItem> overrideInputItems,
boolean forceTestAll,
boolean clearAllViable)

**Parameters:**
- `List<Resource>` `inputResources`
- `List<InventoryItem>` `overrideInputItems`
- `boolean` `forceTestAll`
- `boolean` `clearAllViable`

**Returns:** `boolean`

### public boolean canConsumeInputs(List<Resource> inputResources)

**Parameters:**
- `List<Resource>` `inputResources`

**Returns:** `boolean`

### public boolean consumeInputs(List<Resource> inputResources)

**Parameters:**
- `List<Resource>` `inputResources`

**Returns:** `boolean`

### public boolean consumeOnTickInputs(List<Resource> inputResources)

**Parameters:**
- `List<Resource>` `inputResources`

**Returns:** `boolean`

### public boolean canCreateOutputs(List<Resource> outputResources)

**Parameters:**
- `List<Resource>` `outputResources`

**Returns:** `boolean`

### public boolean createOutputs(List<Resource> outputResources)

**Parameters:**
- `List<Resource>` `outputResources`

**Returns:** `boolean`

### public boolean canCreateOutputs(List<Resource> outputResources,
IsoGameCharacter character)

**Parameters:**
- `List<Resource>` `outputResources`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean createOutputs(List<Resource> outputResources,
IsoGameCharacter character)

**Parameters:**
- `List<Resource>` `outputResources`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean createOnTickOutputs(List<Resource> outputResources)

**Parameters:**
- `List<Resource>` `outputResources`

**Returns:** `boolean`

### public boolean OnTestItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean createRecipeOutputs(boolean testOnly,
List<Resource> outputResources,
IsoGameCharacter character)

**Parameters:**
- `boolean` `testOnly`
- `List<Resource>` `outputResources`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public boolean load(ByteBuffer input,
int worldVersion,
CraftRecipe recipe,
boolean recipeInvalidated)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `CraftRecipe` `recipe`
- `boolean` `recipeInvalidated`

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public String getModelHandOne()

**Returns:** `String`

### public String getModelHandTwo()

**Returns:** `String`

### public ArrayList<InventoryItem> getAllConsumedItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllRecordedConsumedItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllConsumedItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllRecordedConsumedItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllConsumedItems(ArrayList<InventoryItem> list,
boolean includeKeep)

**Parameters:**
- `ArrayList<InventoryItem>` `list`
- `boolean` `includeKeep`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllConsumedItems(ArrayList<InventoryItem> list,
boolean includeKeep,
boolean onlyRecorded)

**Parameters:**
- `ArrayList<InventoryItem>` `list`
- `boolean` `includeKeep`
- `boolean` `onlyRecorded`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllKeepInputItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllKeepInputItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllInputItemsWithFlag(InputFlag flag)

**Parameters:**
- `InputFlag` `flag`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllInputItemsWithFlag(String flag)

**Parameters:**
- `String` `flag`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getInputItems(Integer index)

**Parameters:**
- `Integer` `index`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem getFirstInputItemWithFlag(InputFlag flag)

**Parameters:**
- `InputFlag` `flag`

**Returns:** `InventoryItem`

### public InventoryItem getFirstInputItemWithFlag(String flag)

**Parameters:**
- `String` `flag`

**Returns:** `InventoryItem`

### public InventoryItem getFirstInputItemWithTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getAllInputItems()

**Returns:** `ArrayList<InventoryItem>`

### public HashSet<String> getAppliedInputItemTypes(HashSet<String> appliedItemTypes)

**Parameters:**
- `HashSet<String>` `appliedItemTypes`

**Returns:** `HashSet<String>`

### public ArrayList<InventoryItem> getAllDestroyInputItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllPutBackInputItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllNotKeepInputItems()

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem getFirstCreatedItem()

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getAllCreatedItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllCreatedItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public FluidSample getFirstInputFluidWithFlag(InputFlag flag)

**Parameters:**
- `InputFlag` `flag`

**Returns:** `FluidSample`

### public FluidSample getFirstInputFluidWithFlag(String flag)

**Parameters:**
- `String` `flag`

**Returns:** `FluidSample`

### public int getAllViableItemsCount()

**Returns:** `int`

### public InventoryItem getViableItem(int index)

**Parameters:**
- `int` `index`

**Returns:** `InventoryItem`

### public int getAllViableResourcesCount()

**Returns:** `int`

### public Resource getViableResource(int index)

**Parameters:**
- `int` `index`

**Returns:** `Resource`

### public boolean isVariableAmount()

**Returns:** `boolean`

### public float getVariableInputRatio()

**Returns:** `float`

### public void setTargetVariableInputRatio(float target)

**Parameters:**
- `float` `target`

**Returns:** `void`

### public void clearTargetVariableInputRatio()

**Returns:** `void`

### public void addOverfilledResource(InputScript input,
HashMap<Resource, ArrayList<InventoryItem>> resources)

**Parameters:**
- `InputScript` `input`
- `HashMap<Resource, ArrayList<InventoryItem>>` `resources`

**Returns:** `void`

### public float getCalculatedVariableInputRatio()

**Returns:** `float`

### public void setCalculatedVariableInputRatio(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public ArrayList<InventoryItem> getManualInputsFor(InputScript inputScript,
ArrayList<InventoryItem> list)

**Parameters:**
- `InputScript` `inputScript`
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public void clearManualInputs()

**Returns:** `void`

### public void clearManualInputs(CraftRecipeData.InputScriptData input)

**Parameters:**
- `CraftRecipeData.InputScriptData` `input`

**Returns:** `void`

### public boolean setManualInputsFor(InputScript inputScript,
ArrayList<InventoryItem> list)

**Parameters:**
- `InputScript` `inputScript`
- `ArrayList<InventoryItem>` `list`

**Returns:** `boolean`

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

### public void setEatPercentage(int percentage)

**Parameters:**
- `int` `percentage`

**Returns:** `void`

### public int getEatPercentage()

**Returns:** `int`

### public double getElapsedTime()

**Returns:** `double`

### public void setElapsedTime(double elapsedTime)

**Parameters:**
- `double` `elapsedTime`

**Returns:** `void`

### public boolean isFinished()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\CraftRecipeData.html`*
