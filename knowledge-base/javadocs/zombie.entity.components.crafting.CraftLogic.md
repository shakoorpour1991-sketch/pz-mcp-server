---
title: zombie.entity.components.crafting.CraftLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.CraftLogic

`public class CraftLogic extends Component`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.crafting.CraftLogic

## Methods

### public boolean isValid()

**Returns:** `boolean`

### public StartMode getStartMode()

**Returns:** `StartMode`

### public boolean isStartRequested()

**Returns:** `boolean`

### public boolean isStopRequested()

**Returns:** `boolean`

### public IsoPlayer getRequestingPlayer()

**Returns:** `IsoPlayer`

### public boolean isDoAutomaticCraftCheck()

**Returns:** `boolean`

### public int getActiveCraftCount()

**Returns:** `int`

### public String getInputsGroupName()

**Returns:** `String`

### public String getOutputsGroupName()

**Returns:** `String`

### public String getActionAnimOverride()

**Returns:** `String`

### public String getRecipeTagQuery()

**Returns:** `String`

### public void setRecipeTagQuery(String recipeTagQuery)

**Parameters:**
- `String` `recipeTagQuery`

**Returns:** `void`

### public ArrayList<CraftRecipe> getRecipes(ArrayList<CraftRecipe> list)

**Parameters:**
- `ArrayList<CraftRecipe>` `list`

**Returns:** `ArrayList<CraftRecipe>`

### public List<CraftRecipe> getRecipes()

**Returns:** `List<CraftRecipe>`

### public List<Resource> getInputResources()

**Returns:** `List<Resource>`

### public List<Resource> getOutputResources()

**Returns:** `List<Resource>`

### public boolean isRunning()

**Returns:** `boolean`

### public CraftRecipe getCurrentRecipe()

**Returns:** `CraftRecipe`

### public double getProgress(CraftRecipeData craftRecipeData)

**Parameters:**
- `CraftRecipeData` `craftRecipeData`

**Returns:** `double`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public CraftRecipe getPossibleRecipe()

**Returns:** `CraftRecipe`

### public CraftRecipeMonitor debugCanStart(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `CraftRecipeMonitor`

### public boolean canStart(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean canStartWithInventoryItems(IsoPlayer player,
List<InventoryItem> selectedInventoryItems)

**Parameters:**
- `IsoPlayer` `player`
- `List<InventoryItem>` `selectedInventoryItems`

**Returns:** `boolean`

### public boolean willInputsAccommodate(List<InventoryItem> inventoryItems)

**Parameters:**
- `List<InventoryItem>` `inventoryItems`

**Returns:** `boolean`

### public int getFreeOutputSlotCount()

**Returns:** `int`

### public void start(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void stop(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void stop(IsoPlayer player,
boolean force)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `force`

**Returns:** `void`

### public void onStart()

**Returns:** `void`

### public void onUpdate(CraftRecipeData craftRecipeData)

**Parameters:**
- `CraftRecipeData` `craftRecipeData`

**Returns:** `void`

### public void onStop(CraftRecipeData craftRecipeData,
boolean isCancelled)

**Parameters:**
- `CraftRecipeData` `craftRecipeData`
- `boolean` `isCancelled`

**Returns:** `void`

### public void finaliseRecipe(CraftRecipeData craftRecipeData)

**Parameters:**
- `CraftRecipeData` `craftRecipeData`

**Returns:** `void`

### public void dumpContentsInSquare()

**Returns:** `void`

### public void returnConsumedItemsToResourcesOrSquare(CraftRecipeData craftRecipeData)

**Parameters:**
- `CraftRecipeData` `craftRecipeData`

**Returns:** `void`

### public boolean isNoContainerOrEmpty()

**Returns:** `boolean`

### public void sendStartRequest(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void sendStopRequest(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void sendCraftLogicSync()

**Returns:** `void`

### public void doProgressTooltip(ObjectTooltip.Layout layout,
Resource resource,
CraftRecipeData craftRecipeData)

**Parameters:**
- `ObjectTooltip.Layout` `layout`
- `Resource` `resource`
- `CraftRecipeData` `craftRecipeData`

**Returns:** `void`

### public ArrayList<Texture> getStatusIconsForInputItem(InventoryItem item,
CraftRecipeData craftRecipeData)

**Parameters:**
- `InventoryItem` `item`
- `CraftRecipeData` `craftRecipeData`

**Returns:** `ArrayList<Texture>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\CraftLogic.html`*
