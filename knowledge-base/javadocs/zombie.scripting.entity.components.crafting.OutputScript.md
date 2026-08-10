---
title: zombie.scripting.entity.components.crafting.OutputScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.entity.components.crafting
---

# zombie.scripting.entity.components.crafting.OutputScript

`public class OutputScript extends CraftRecipe.IOScript`

**Kind:** class · **Package:** zombie.scripting.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.scripting.entity.components.crafting.CraftRecipe.IOScript
- zombie.scripting.entity.components.crafting.OutputScript

## Methods

### public boolean hasCreateToItem()

**Returns:** `boolean`

### public OutputScript getCreateToItemScript()

**Returns:** `OutputScript`

### public boolean hasFlag(OutputFlag flag)

**Parameters:**
- `OutputFlag` `flag`

**Returns:** `boolean`

### @Deprecated
public boolean isReplaceInput()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### public String getOriginalLine()

**Returns:** `String`

### public ResourceType getResourceType()

**Returns:** `ResourceType`

### public float getChance()

**Returns:** `float`

### public int getIntAmount()

**Returns:** `int`

### public float getAmount()

**Returns:** `float`

### public int getIntMaxAmount()

**Returns:** `int`

### public float getMaxAmount()

**Returns:** `float`

### public boolean isVariableAmount()

**Returns:** `boolean`

### @Deprecated
public int getShapedIndex()

> ⚠️ **Deprecated**

**Returns:** `int`

### public boolean isApplyOnTick()

**Returns:** `boolean`

### public boolean isHandcraftOnly()

**Returns:** `boolean`

### public boolean isAutomationOnly()

**Returns:** `boolean`

### public ArrayList<Item> getPossibleResultItems()

**Returns:** `ArrayList<Item>`

### public ArrayList<Fluid> getPossibleResultFluids()

**Returns:** `ArrayList<Fluid>`

### public ArrayList<Energy> getPossibleResultEnergies()

**Returns:** `ArrayList<Energy>`

### public OutputMapper getOutputMapper()

**Returns:** `OutputMapper`

### public Item getItem(CraftRecipeData recipeData)

**Parameters:**
- `CraftRecipeData` `recipeData`

**Returns:** `Item`

### public Fluid getFluid()

**Returns:** `Fluid`

### public Energy getEnergy()

**Returns:** `Energy`

### public ItemApplyMode getItemApplyMode()

**Returns:** `ItemApplyMode`

### public FluidMatchMode getFluidMatchMode()

**Returns:** `FluidMatchMode`

### public boolean isFluidExact()

**Returns:** `boolean`

### public boolean isFluidPrimary()

**Returns:** `boolean`

### public boolean isFluidAnything()

**Returns:** `boolean`

### @Deprecated
public boolean isCreateUses()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### public boolean containsItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public boolean containsFluid(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public boolean containsEnergy(Energy energy)

**Parameters:**
- `Energy` `energy`

**Returns:** `boolean`

### public boolean isFluidMatch(FluidContainer container)

**Parameters:**
- `FluidContainer` `container`

**Returns:** `boolean`

### public boolean isEnergyMatch(DrainableComboItem item)

**Parameters:**
- `DrainableComboItem` `item`

**Returns:** `boolean`

### public boolean isEnergyMatch(Energy energy)

**Parameters:**
- `Energy` `energy`

**Returns:** `boolean`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public boolean canOutputItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean canOutputItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\entity\components\crafting\OutputScript.html`*
