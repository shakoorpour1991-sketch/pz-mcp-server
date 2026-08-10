---
title: zombie.inventory.RecipeManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.RecipeManager

`public class RecipeManager extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.RecipeManager

## Constructors

### public RecipeManager()

## Methods

### public static void ScriptsLoaded()

**Returns:** `void`

### public static void LoadedAfterLua()

**Returns:** `void`

### public static int getKnownRecipesNumber(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public static ArrayList<Recipe> getUniqueRecipeItems(InventoryItem item,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `ArrayList<Recipe>`

### public static boolean IsRecipeValid(Recipe recipe,
IsoGameCharacter chr,
InventoryItem item,
ArrayList<ItemContainer> containers)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `InventoryItem` `item`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public static void printDebugRecipeValid(Recipe recipe,
IsoGameCharacter chr,
InventoryItem item,
ArrayList<ItemContainer> containers)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `InventoryItem` `item`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `void`

### public static boolean validateRecipeContainsSourceItem(Recipe recipe,
InventoryItem item)

**Parameters:**
- `Recipe` `recipe`
- `InventoryItem` `item`

**Returns:** `boolean`

### public static boolean validateHasHeat(Recipe recipe,
InventoryItem item,
ArrayList<ItemContainer> containers,
IsoGameCharacter chr)

**Parameters:**
- `Recipe` `recipe`
- `InventoryItem` `item`
- `ArrayList<ItemContainer>` `containers`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public static ArrayList<InventoryItem> getAvailableItemsAll(Recipe recipe,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem,
ArrayList<InventoryItem> ignoreItems)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`
- `ArrayList<InventoryItem>` `ignoreItems`

**Returns:** `ArrayList<InventoryItem>`

### public static ArrayList<InventoryItem> getAvailableItemsNeeded(Recipe recipe,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem,
ArrayList<InventoryItem> ignoreItems)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`
- `ArrayList<InventoryItem>` `ignoreItems`

**Returns:** `ArrayList<InventoryItem>`

### public static ArrayList<InventoryItem> getSourceItemsAll(Recipe recipe,
int sourceIndex,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem,
ArrayList<InventoryItem> ignoreItems)

**Parameters:**
- `Recipe` `recipe`
- `int` `sourceIndex`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`
- `ArrayList<InventoryItem>` `ignoreItems`

**Returns:** `ArrayList<InventoryItem>`

### public static ArrayList<InventoryItem> getSourceItemsNeeded(Recipe recipe,
int sourceIndex,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem,
ArrayList<InventoryItem> ignoreItems)

**Parameters:**
- `Recipe` `recipe`
- `int` `sourceIndex`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`
- `ArrayList<InventoryItem>` `ignoreItems`

**Returns:** `ArrayList<InventoryItem>`

### public static int getNumberOfTimesRecipeCanBeDone(Recipe recipe,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`

**Returns:** `int`

### public static ArrayList<InventoryItem> PerformMakeItem(Recipe recipe,
InventoryItem selectedItem,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers)

**Parameters:**
- `Recipe` `recipe`
- `InventoryItem` `selectedItem`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `ArrayList<InventoryItem>`

### public static ArrayList<EvolvedRecipe> getAllEvolvedRecipes()

**Returns:** `ArrayList<EvolvedRecipe>`

### public static ArrayList<EvolvedRecipe> getEvolvedRecipe(InventoryItem baseItem,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
boolean need1ingredient)

**Parameters:**
- `InventoryItem` `baseItem`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `boolean` `need1ingredient`

**Returns:** `ArrayList<EvolvedRecipe>`

### public static Recipe getDismantleRecipeFor(String item)

**Parameters:**
- `String` `item`

**Returns:** `Recipe`

### public static InventoryItem GetMovableRecipeTool(boolean isPrimary,
Recipe recipe,
InventoryItem selectedItem,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers)

**Parameters:**
- `boolean` `isPrimary`
- `Recipe` `recipe`
- `InventoryItem` `selectedItem`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `InventoryItem`

### public static boolean HasAllRequiredItems(Recipe recipe,
IsoGameCharacter chr,
InventoryItem selectedItem,
ArrayList<ItemContainer> containers)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `InventoryItem` `selectedItem`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public static boolean isAllItemsUsableRotten(Recipe recipe,
IsoGameCharacter chr,
InventoryItem selectedItem,
ArrayList<ItemContainer> containers)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `InventoryItem` `selectedItem`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public static boolean hasHeat(Recipe recipe,
InventoryItem item,
ArrayList<ItemContainer> containers,
IsoGameCharacter chr)

**Parameters:**
- `Recipe` `recipe`
- `InventoryItem` `item`
- `ArrayList<ItemContainer>` `containers`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### @Deprecated
public static boolean IsItemDestroyed(String itemToUse,
Recipe recipe)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `itemToUse`
- `Recipe` `recipe`

**Returns:** `boolean`

### @Deprecated
public static float UseAmount(String sourceFullType,
Recipe recipe,
IsoGameCharacter chr)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `sourceFullType`
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`

**Returns:** `float`

### @Deprecated
public static boolean DoesWipeUseDelta(String itemToUse,
String itemToMake)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `itemToUse`
- `String` `itemToMake`

**Returns:** `boolean`

### @Deprecated
public static boolean DoesUseItemUp(String itemToUse,
Recipe recipe)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `itemToUse`
- `Recipe` `recipe`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\RecipeManager.html`*
