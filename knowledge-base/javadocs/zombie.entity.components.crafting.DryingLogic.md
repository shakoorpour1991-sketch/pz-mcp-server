---
title: zombie.entity.components.crafting.DryingLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.DryingLogic

`public class DryingLogic extends Component`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.crafting.DryingLogic

## Methods

### public boolean isValid()

**Returns:** `boolean`

### public int getSlotSize()

**Returns:** `int`

### public DryingLogic.DryingSlot getSlot(int index)

**Parameters:**
- `int` `index`

**Returns:** `DryingLogic.DryingSlot`

### public ResourceItem getInputSlotResource(int index)

**Parameters:**
- `int` `index`

**Returns:** `ResourceItem`

### public ResourceItem getOutputSlotResource(int index)

**Parameters:**
- `int` `index`

**Returns:** `ResourceItem`

### public StartMode getStartMode()

**Returns:** `StartMode`

### public int getElapsedTime()

**Returns:** `int`

### public boolean isStartRequested()

**Returns:** `boolean`

### public boolean isStopRequested()

**Returns:** `boolean`

### public IsoPlayer getRequestingPlayer()

**Returns:** `IsoPlayer`

### public boolean isDoAutomaticCraftCheck()

**Returns:** `boolean`

### public String getDryingInputsGroupName()

**Returns:** `String`

### public String getDryingOutputsGroupName()

**Returns:** `String`

### public String getFuelInputsGroupName()

**Returns:** `String`

### public String getFuelOutputsGroupName()

**Returns:** `String`

### public String getDryingRecipeTagQuery()

**Returns:** `String`

### public boolean isUsesFuel()

**Returns:** `boolean`

### public void setDryingRecipeTagQuery(String recipeTagQuery)

**Parameters:**
- `String` `recipeTagQuery`

**Returns:** `void`

### public String getFuelRecipeTagQuery()

**Returns:** `String`

### public void setFuelRecipeTagQuery(String recipeTagQuery)

**Parameters:**
- `String` `recipeTagQuery`

**Returns:** `void`

### public ArrayList<CraftRecipe> getDryingRecipes(ArrayList<CraftRecipe> list)

**Parameters:**
- `ArrayList<CraftRecipe>` `list`

**Returns:** `ArrayList<CraftRecipe>`

### public ArrayList<CraftRecipe> getFuelRecipes(ArrayList<CraftRecipe> list)

**Parameters:**
- `ArrayList<CraftRecipe>` `list`

**Returns:** `ArrayList<CraftRecipe>`

### public List<Resource> getDryingInputResources()

**Returns:** `List<Resource>`

### public List<Resource> getDryingOutputResources()

**Returns:** `List<Resource>`

### public List<Resource> getFuelInputResources()

**Returns:** `List<Resource>`

### public List<Resource> getFuelOutputResources()

**Returns:** `List<Resource>`

### public boolean isRunning()

**Returns:** `boolean`

### public boolean isFinished()

**Returns:** `boolean`

### public CraftRecipe getCurrentRecipe()

**Returns:** `CraftRecipe`

### public double getProgress()

**Returns:** `double`

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

### public void sendStartRequest(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void sendStopRequest(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\DryingLogic.html`*
