---
title: zombie.scripting.entity.components.crafting.InputScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.entity.components.crafting
---

# zombie.scripting.entity.components.crafting.InputScript

`public class InputScript extends CraftRecipe.IOScript`

**Kind:** class · **Package:** zombie.scripting.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.scripting.entity.components.crafting.CraftRecipe.IOScript
- zombie.scripting.entity.components.crafting.InputScript

## Methods

### public List<Item> getPossibleInputItems()

**Returns:** `List<Item>`

### public boolean hasPossibleFrozenFoodInputItems()

**Returns:** `boolean`

### public ArrayList<Fluid> getPossibleInputFluids()

**Returns:** `ArrayList<Fluid>`

### public String getInputFluidFilterDisplayName()

**Returns:** `String`

### public String getInputFluidFilterTooltip()

**Returns:** `String`

### public ArrayList<Energy> getPossibleInputEnergies()

**Returns:** `ArrayList<Energy>`

### public boolean hasCreateToItem()

**Returns:** `boolean`

### public OutputScript getCreateToItemScript()

**Returns:** `OutputScript`

### public boolean hasConsumeFromItem()

**Returns:** `boolean`

### public InputScript getConsumeFromItemScript()

**Returns:** `InputScript`

### public boolean hasParentScript()

**Returns:** `boolean`

### public InputScript getParentScript()

**Returns:** `InputScript`

### public boolean hasFlag(InputFlag flag)

**Parameters:**
- `InputFlag` `flag`

**Returns:** `boolean`

### public String getOriginalLine()

**Returns:** `String`

### public ResourceType getResourceType()

**Returns:** `ResourceType`

### public boolean isUsesPartialItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public boolean isExclusive()

**Returns:** `boolean`

### public boolean isItemCount()

**Returns:** `boolean`

### public boolean isDestroy()

**Returns:** `boolean`

### public boolean isKeep()

**Returns:** `boolean`

### public boolean isTool()

**Returns:** `boolean`

### public boolean isToolLeft()

**Returns:** `boolean`

### public boolean isToolRight()

**Returns:** `boolean`

### public boolean isWorn()

**Returns:** `boolean`

### public boolean isNotWorn()

**Returns:** `boolean`

### public boolean isFull()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean notFull()

**Returns:** `boolean`

### public boolean notEmpty()

**Returns:** `boolean`

### public boolean isDamaged()

**Returns:** `boolean`

### public boolean isUndamaged()

**Returns:** `boolean`

### public boolean allowFrozenItem()

**Returns:** `boolean`

### public boolean dontAllowFrozenItem()

**Returns:** `boolean`

### public boolean allowRottenItem()

**Returns:** `boolean`

### public boolean allowDestroyedItem()

**Returns:** `boolean`

### public boolean isEmptyContainer()

**Returns:** `boolean`

### public boolean isWholeFoodItem()

**Returns:** `boolean`

### public boolean isUncookedFoodItem()

**Returns:** `boolean`

### public boolean isCookedFoodItem()

**Returns:** `boolean`

### public boolean isHeadPart()

**Returns:** `boolean`

### public boolean isSharpenable()

**Returns:** `boolean`

### public boolean dontPutBack()

**Returns:** `boolean`

### public boolean inheritColor()

**Returns:** `boolean`

### public boolean inheritCondition()

**Returns:** `boolean`

### public boolean inheritHeadCondition()

**Returns:** `boolean`

### public boolean inheritSharpness()

**Returns:** `boolean`

### public boolean inheritUses()

**Returns:** `boolean`

### public boolean isNotDull()

**Returns:** `boolean`

### public boolean mayDegrade()

**Returns:** `boolean`

### public boolean mayDegradeLight()

**Returns:** `boolean`

### public boolean mayDegradeVeryLight()

**Returns:** `boolean`

### public boolean mayDegradeHeavy()

**Returns:** `boolean`

### public boolean sharpnessCheck()

**Returns:** `boolean`

### @Deprecated
public int getShapedIndex()

> ⚠️ **Deprecated**

**Returns:** `int`

### public ItemApplyMode getItemApplyMode()

**Returns:** `ItemApplyMode`

### public FluidMatchMode getFluidMatchMode()

**Returns:** `FluidMatchMode`

### public boolean isFluidExact()

**Returns:** `boolean`

### public boolean isFluidPrimary()

**Returns:** `boolean`

### public boolean isFluidMixture()

**Returns:** `boolean`

### public boolean isFluidAnything()

**Returns:** `boolean`

### public boolean isVariableAmount()

**Returns:** `boolean`

### public int getIntAmount()

**Returns:** `int`

### public float getAmount()

**Returns:** `float`

### public int getIntMaxAmount()

**Returns:** `int`

### public float getMaxAmount()

**Returns:** `float`

### public int getIntAmount(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `int`

### public float getAmount(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `float`

### public int getIntMaxAmount(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `int`

### public float getMaxAmount(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `float`

### public int getIntAmount(String item)

**Parameters:**
- `String` `item`

**Returns:** `int`

### public float getAmount(String item)

**Parameters:**
- `String` `item`

**Returns:** `float`

### public int getIntMaxAmount(String item)

**Parameters:**
- `String` `item`

**Returns:** `int`

### public float getMaxAmount(String item)

**Parameters:**
- `String` `item`

**Returns:** `float`

### public float getRelativeScale(String item)

**Parameters:**
- `String` `item`

**Returns:** `float`

### public boolean isProp1()

**Returns:** `boolean`

### public boolean isProp2()

**Returns:** `boolean`

### public boolean isApplyOnTick()

**Returns:** `boolean`

### public boolean isAcceptsAnyItem()

**Returns:** `boolean`

### public boolean isAcceptsAnyFluid()

**Returns:** `boolean`

### public boolean isAcceptsAnyEnergy()

**Returns:** `boolean`

### public boolean isHandcraftOnly()

**Returns:** `boolean`

### public boolean isAutomationOnly()

**Returns:** `boolean`

### @Deprecated
public boolean isReplace()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public OutputScript getReplaceOutputScript()

> ⚠️ **Deprecated**

**Returns:** `OutputScript`

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

### public boolean canUseItem(InventoryItem item,
IsoGameCharacter character)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean canUseItem(String item)

**Parameters:**
- `String` `item`

**Returns:** `boolean`

### public boolean allowFavorites()

**Returns:** `boolean`

### public boolean passesFavoriteTest(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean passesRottenTest(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean passesFrozenTest(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean passesBrokenTest(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean passesSealedTest(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean doesItemPassRoutineStatusTests(InventoryItem item,
IsoGameCharacter character)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean doesItemPassClothingTypeStatusTests(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean doesItemPassSharpnessStatusTests(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean doesItemPassDamageStatusTests(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean doesItemPassIsOrNotEmptyAndFullTests(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean doesItemPassFoodAndCookingTests(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isCanBeDoneFromFloor()

**Returns:** `boolean`

### public boolean isRecordInput()

**Returns:** `boolean`

### public Set<ItemTag> getItemTags()

**Returns:** `Set<ItemTag>`

### public List<String> getItems()

**Returns:** `List<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\entity\components\crafting\InputScript.html`*
