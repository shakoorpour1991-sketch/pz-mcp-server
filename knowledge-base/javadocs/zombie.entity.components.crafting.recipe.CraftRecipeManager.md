---
title: zombie.entity.components.crafting.recipe.CraftRecipeManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.CraftRecipeManager

`public class CraftRecipeManager extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.CraftRecipeManager

## Constructors

### public CraftRecipeManager()

## Methods

### public static void Reset()

**Returns:** `void`

### public static void Init()

**Returns:** `void`

### public static String FormatAndRegisterRecipeTagsQuery(String tagQueryString)
throws Exception

**Parameters:**
- `String` `tagQueryString`

**Returns:** `String`

### public static String sanitizeTagQuery(String tagQueryString)

**Parameters:**
- `String` `tagQueryString`

**Returns:** `String`

### public static List<CraftRecipe> getRecipesForTag(String category)

**Parameters:**
- `String` `category`

**Returns:** `List<CraftRecipe>`

### public static List<String> getAllRecipeTags()

**Returns:** `List<String>`

### public static List<String> getTagGroups()

**Returns:** `List<String>`

### public static void debugPrintTagManager()

**Returns:** `void`

### public static ArrayList<String> debugPrintTagManagerLines()

**Returns:** `ArrayList<String>`

### public static void LogAllRecipesToFile()

**Returns:** `void`

### public static List<CraftRecipe> queryRecipes(String tagQueryString)

**Parameters:**
- `String` `tagQueryString`

**Returns:** `List<CraftRecipe>`

### public static List<CraftRecipe> queryRecipes(CraftRecipeTag... craftRecipeTag)

**Parameters:**
- `CraftRecipeTag...` `craftRecipeTag`

**Returns:** `List<CraftRecipe>`

### public static List<CraftRecipe> populateRecipeList(String tagQueryString,
List<CraftRecipe> listToPopulate,
boolean clearList)

**Parameters:**
- `String` `tagQueryString`
- `List<CraftRecipe>` `listToPopulate`
- `boolean` `clearList`

**Returns:** `List<CraftRecipe>`

### public static List<CraftRecipe> populateRecipeList(String tagQueryString,
List<CraftRecipe> listToPopulate,
List<CraftRecipe> sourceList,
boolean clearList)

**Parameters:**
- `String` `tagQueryString`
- `List<CraftRecipe>` `listToPopulate`
- `List<CraftRecipe>` `sourceList`
- `boolean` `clearList`

**Returns:** `List<CraftRecipe>`

### public static List<CraftRecipe> filterRecipeList(String filterString,
List<CraftRecipe> listToPopulate)

**Parameters:**
- `String` `filterString`
- `List<CraftRecipe>` `listToPopulate`

**Returns:** `List<CraftRecipe>`

### public static List<CraftRecipe> filterRecipeList(String filterString,
List<CraftRecipe> listToPopulate,
List<CraftRecipe> sourceList)

**Parameters:**
- `String` `filterString`
- `List<CraftRecipe>` `listToPopulate`
- `List<CraftRecipe>` `sourceList`

**Returns:** `List<CraftRecipe>`

### public static CraftRecipeData getCraftDataForPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `CraftRecipeData`

### public static ArrayList<InventoryItem> getAllItemsFromContainers(ArrayList<ItemContainer> containers,
ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<ItemContainer>` `containers`
- `ArrayList<InventoryItem>` `items`

**Returns:** `ArrayList<InventoryItem>`

### public static ArrayList<InventoryItem> getAllValidItemsForRecipe(CraftRecipe recipe,
ArrayList<InventoryItem> sourceItems,
ArrayList<InventoryItem> filteredItems,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe` `recipe`
- `ArrayList<InventoryItem>` `sourceItems`
- `ArrayList<InventoryItem>` `filteredItems`
- `IsoGameCharacter` `character`

**Returns:** `ArrayList<InventoryItem>`

### public static InputScript getValidInputScriptForItem(CraftRecipe recipe,
InventoryItem inventoryItem,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe` `recipe`
- `InventoryItem` `inventoryItem`
- `IsoGameCharacter` `character`

**Returns:** `InputScript`

### public static ArrayList<InputScript> getAllValidInputScriptsForItem(CraftRecipe recipe,
InventoryItem inventoryItem,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe` `recipe`
- `InventoryItem` `inventoryItem`
- `IsoGameCharacter` `character`

**Returns:** `ArrayList<InputScript>`

### public static boolean isItemToolForRecipe(CraftRecipe recipe,
InventoryItem inventoryItem,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe` `recipe`
- `InventoryItem` `inventoryItem`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public static boolean isItemValidForRecipe(CraftRecipe recipe,
InventoryItem inventoryItem,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe` `recipe`
- `InventoryItem` `inventoryItem`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public static boolean isItemValidForInputScript(InputScript input,
InventoryItem inventoryItem,
IsoGameCharacter character)

**Parameters:**
- `InputScript` `input`
- `InventoryItem` `inventoryItem`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public static boolean isValidRecipeForCharacter(CraftRecipe recipe,
IsoGameCharacter character,
CraftRecipeMonitor monitor,
ArrayList<ItemContainer> containers)

**Parameters:**
- `CraftRecipe` `recipe`
- `IsoGameCharacter` `character`
- `CraftRecipeMonitor` `monitor`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public static boolean hasPlayerLearnedRecipe(CraftRecipe recipe,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe` `recipe`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public static boolean hasPlayerRequiredSkill(CraftRecipe.RequiredSkill requiredSkill,
IsoGameCharacter character)

**Parameters:**
- `CraftRecipe.RequiredSkill` `requiredSkill`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public static int getAutoCraftCountItems(CraftRecipe recipe,
ArrayList<InventoryItem> allItems)

**Parameters:**
- `CraftRecipe` `recipe`
- `ArrayList<InventoryItem>` `allItems`

**Returns:** `int`

### public static float itemGetQueuedAmount(IsoGameCharacter player,
InventoryItem item,
CraftRecipeData.CacheData cacheData)

**Parameters:**
- `IsoGameCharacter` `player`
- `InventoryItem` `item`
- `CraftRecipeData.CacheData` `cacheData`

**Returns:** `float`

### public static ArrayList<CraftRecipe> getUniqueRecipeItems(InventoryItem item,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `ArrayList<CraftRecipe>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\CraftRecipeManager.html`*
