---
title: zombie.inventory.recipemanager.RecipeMonitor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.recipemanager
---

# zombie.inventory.recipemanager.RecipeMonitor

`public class RecipeMonitor extends Object`

**Kind:** class · **Package:** zombie.inventory.recipemanager

## Inheritance
- java.lang.Object
- zombie.inventory.recipemanager.RecipeMonitor

## Fields

### public static final Color colGray

### public static final Color colNeg

### public static final Color colPos

### public static final Color colHeader

## Constructors

### public RecipeMonitor()

## Methods

### public static void Enable(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static boolean IsEnabled()

**Returns:** `boolean`

### public static int getMonitorID()

**Returns:** `int`

### public static void StartMonitor()

**Returns:** `void`

### public static Color getColGray()

**Returns:** `Color`

### public static Color getColBlack()

**Returns:** `Color`

### public static void setRecipe(Recipe recipe)

**Parameters:**
- `Recipe` `recipe`

**Returns:** `void`

### public static String getRecipeName()

**Returns:** `String`

### public static Recipe getRecipe()

**Returns:** `Recipe`

### @Deprecated
public static ArrayList<String> getRecipeLines()

> ⚠️ **Deprecated**

**Returns:** `ArrayList<String>`

### public static boolean canLog()

**Returns:** `boolean`

### public static void suspend()

**Returns:** `void`

### public static void resume()

**Returns:** `void`

### public static void Log(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public static void Log(String s,
Color c)

**Parameters:**
- `String` `s`
- `Color` `c`

**Returns:** `void`

### public static void LogBlanc()

**Returns:** `void`

### public static <T> void LogList(String tag,
ArrayList<T> sourceTypes)

**Returns:** `void`

### public static void LogInit(Recipe recipe,
IsoGameCharacter character,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem,
ArrayList<InventoryItem> ignoreItems,
boolean allItems)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `character`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`
- `ArrayList<InventoryItem>` `ignoreItems`
- `boolean` `allItems`

**Returns:** `void`

### public static String getContainerString(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `String`

### public static void LogSources(List<Recipe.Source> sources)

**Parameters:**
- `List<Recipe.Source>` `sources`

**Returns:** `void`

### public static void LogItem(String tag,
InventoryItem item)

**Parameters:**
- `String` `tag`
- `InventoryItem` `item`

**Returns:** `void`

### public static String getResultString(Recipe.Result result)

**Parameters:**
- `Recipe.Result` `result`

**Returns:** `String`

### public static void ResetTabs()

**Returns:** `void`

### public static void SetTab(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public static void IncTab()

**Returns:** `void`

### public static void DecTab()

**Returns:** `void`

### public static ArrayList<String> GetLines()

**Returns:** `ArrayList<String>`

### public static ArrayList<Color> GetColors()

**Returns:** `ArrayList<Color>`

### public static Color GetColorForLine(int i)

**Parameters:**
- `int` `i`

**Returns:** `Color`

### public static String GetSaveDir()

**Returns:** `String`

### public static void SaveToFile()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\recipemanager\RecipeMonitor.html`*
