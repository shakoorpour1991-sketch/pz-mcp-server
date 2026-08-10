---
title: zombie.entity.components.crafting.MashingLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.MashingLogic

`public class MashingLogic extends Component`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.crafting.MashingLogic

## Methods

### public double getElapsedTime()

**Returns:** `double`

### public void setElapsedTime(double time)

**Parameters:**
- `double` `time`

**Returns:** `void`

### public double getLastWorldAge()

**Returns:** `double`

### public void setLastWorldAge(double time)

**Parameters:**
- `double` `time`

**Returns:** `void`

### public boolean isStartRequested()

**Returns:** `boolean`

### public boolean isStopRequested()

**Returns:** `boolean`

### public IsoPlayer getRequestingPlayer()

**Returns:** `IsoPlayer`

### public String getInputsGroupName()

**Returns:** `String`

### public String getResourceFluidID()

**Returns:** `String`

### public float getBarrelConsumedAmount()

**Returns:** `float`

### public String getRecipeTagQuery()

**Returns:** `String`

### public void setRecipeTagQuery(String recipeTagQuery)

**Parameters:**
- `String` `recipeTagQuery`

**Returns:** `void`

### public List<CraftRecipe> getRecipes(List<CraftRecipe> list)

**Parameters:**
- `List<CraftRecipe>` `list`

**Returns:** `List<CraftRecipe>`

### public List<Resource> getInputResources(List<Resource> list)

**Parameters:**
- `List<Resource>` `list`

**Returns:** `List<Resource>`

### public ResourceFluid getFluidBarrel()

**Returns:** `ResourceFluid`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\MashingLogic.html`*
