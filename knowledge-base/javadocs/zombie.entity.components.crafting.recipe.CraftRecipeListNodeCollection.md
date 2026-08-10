---
title: zombie.entity.components.crafting.recipe.CraftRecipeListNodeCollection
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.CraftRecipeListNodeCollection

`public class CraftRecipeListNodeCollection extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.CraftRecipeListNodeCollection

## Constructors

### public CraftRecipeListNodeCollection()

## Methods

### public List<CraftRecipeListNode> getNodes()

**Returns:** `List<CraftRecipeListNode>`

### public void add(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public void addAll(List<CraftRecipe> recipeList)

**Parameters:**
- `List<CraftRecipe>` `recipeList`

**Returns:** `void`

### public void setInitialExpandedStates(BaseCraftingLogic logic,
boolean isBuildCheat)

**Parameters:**
- `BaseCraftingLogic` `logic`
- `boolean` `isBuildCheat`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public boolean contains(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public void removeIf(Predicate<? super CraftRecipe> filter)

**Parameters:**
- `Predicate<? super CraftRecipe>` `filter`

**Returns:** `void`

### public void sort(Comparator<? super CraftRecipe> comparator)

**Parameters:**
- `Comparator<? super CraftRecipe>` `comparator`

**Returns:** `void`

### public CraftRecipe getFirstRecipe()

**Returns:** `CraftRecipe`

### public List<CraftRecipe> getAllRecipes()

**Returns:** `List<CraftRecipe>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\CraftRecipeListNodeCollection.html`*
