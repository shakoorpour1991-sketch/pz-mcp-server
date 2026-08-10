---
title: zombie.entity.components.crafting.CraftUtil
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.CraftUtil

`public class CraftUtil extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.CraftUtil

## Constructors

### public CraftUtil()

## Methods

### public static ArrayList<Resource> AllocResourceList()

**Returns:** `ArrayList<Resource>`

### public static void ReleaseResourceList(ArrayList<Resource> list)

**Parameters:**
- `ArrayList<Resource>` `list`

**Returns:** `void`

### public static boolean canItemsStack(InventoryItem item,
InventoryItem other)

**Parameters:**
- `InventoryItem` `item`
- `InventoryItem` `other`

**Returns:** `boolean`

### public static boolean canItemsStack(InventoryItem item,
InventoryItem other,
boolean nullReturn)

**Parameters:**
- `InventoryItem` `item`
- `InventoryItem` `other`
- `boolean` `nullReturn`

**Returns:** `boolean`

### public static boolean canItemsStack(Item item,
Item other,
boolean nullReturn)

**Parameters:**
- `Item` `item`
- `Item` `other`
- `boolean` `nullReturn`

**Returns:** `boolean`

### public static Resource findResourceOrEmpty(ResourceIO resourceIO,
List<Resource> outputResources,
InventoryItem item,
int count,
Resource ignoreResource,
HashSet<Resource> ignoreSet)

**Parameters:**
- `ResourceIO` `resourceIO`
- `List<Resource>` `outputResources`
- `InventoryItem` `item`
- `int` `count`
- `Resource` `ignoreResource`
- `HashSet<Resource>` `ignoreSet`

**Returns:** `Resource`

### public static Resource findResourceOrEmpty(ResourceIO resourceIO,
List<Resource> resources,
Item item,
int count,
Resource ignoreResource,
HashSet<Resource> ignoreSet)

**Parameters:**
- `ResourceIO` `resourceIO`
- `List<Resource>` `resources`
- `Item` `item`
- `int` `count`
- `Resource` `ignoreResource`
- `HashSet<Resource>` `ignoreSet`

**Returns:** `Resource`

### public static boolean canResourceFitItem(Resource resource,
InventoryItem item)

**Parameters:**
- `Resource` `resource`
- `InventoryItem` `item`

**Returns:** `boolean`

### public static boolean canResourceFitItem(Resource resource,
InventoryItem item,
int count)

**Parameters:**
- `Resource` `resource`
- `InventoryItem` `item`
- `int` `count`

**Returns:** `boolean`

### public static boolean canResourceFitItem(Resource resource,
InventoryItem item,
int count,
Resource ignoreResource,
HashSet<Resource> ignoreSet)

**Parameters:**
- `Resource` `resource`
- `InventoryItem` `item`
- `int` `count`
- `Resource` `ignoreResource`
- `HashSet<Resource>` `ignoreSet`

**Returns:** `boolean`

### public static boolean canResourceFitItem(Resource resource,
Item item)

**Parameters:**
- `Resource` `resource`
- `Item` `item`

**Returns:** `boolean`

### public static boolean canResourceFitItem(Resource resource,
Item item,
int count)

**Parameters:**
- `Resource` `resource`
- `Item` `item`
- `int` `count`

**Returns:** `boolean`

### public static boolean canResourceFitItem(Resource resource,
Item item,
int count,
Resource ignoreResource,
HashSet<Resource> ignoreSet)

**Parameters:**
- `Resource` `resource`
- `Item` `item`
- `int` `count`
- `Resource` `ignoreResource`
- `HashSet<Resource>` `ignoreSet`

**Returns:** `boolean`

### public static Resource findResourceOrEmpty(ResourceIO resourceIO,
List<Resource> resources,
Fluid fluid,
float amount,
Resource ignoreResource,
HashSet<Resource> ignoreSet)

**Parameters:**
- `ResourceIO` `resourceIO`
- `List<Resource>` `resources`
- `Fluid` `fluid`
- `float` `amount`
- `Resource` `ignoreResource`
- `HashSet<Resource>` `ignoreSet`

**Returns:** `Resource`

### public static Resource findResourceOrEmpty(ResourceIO resourceIO,
List<Resource> resources,
Energy energy,
float amount,
Resource ignoreResource,
HashSet<Resource> ignoreSet)

**Parameters:**
- `ResourceIO` `resourceIO`
- `List<Resource>` `resources`
- `Energy` `energy`
- `float` `amount`
- `Resource` `ignoreResource`
- `HashSet<Resource>` `ignoreSet`

**Returns:** `Resource`

### public static CraftRecipeMonitor debugCanStart(IsoPlayer player,
CraftRecipeData craftTestData,
List<CraftRecipe> recipes,
List<Resource> inputs,
List<Resource> outputs,
CraftRecipeMonitor monitor)

**Parameters:**
- `IsoPlayer` `player`
- `CraftRecipeData` `craftTestData`
- `List<CraftRecipe>` `recipes`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`
- `CraftRecipeMonitor` `monitor`

**Returns:** `CraftRecipeMonitor`

### public static boolean canStart(CraftRecipeData craftTestData,
List<CraftRecipe> recipes,
List<Resource> inputs,
List<Resource> outputs)

**Parameters:**
- `CraftRecipeData` `craftTestData`
- `List<CraftRecipe>` `recipes`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`

**Returns:** `boolean`

### public static boolean canStart(CraftRecipeData craftTestData,
List<CraftRecipe> recipes,
List<Resource> inputs,
List<Resource> outputs,
CraftRecipeMonitor monitor)

**Parameters:**
- `CraftRecipeData` `craftTestData`
- `List<CraftRecipe>` `recipes`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`
- `CraftRecipeMonitor` `monitor`

**Returns:** `boolean`

### public static boolean canPerformRecipe(CraftRecipe recipe,
CraftRecipeData craftTestData,
List<Resource> inputs,
List<Resource> outputs)

**Parameters:**
- `CraftRecipe` `recipe`
- `CraftRecipeData` `craftTestData`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`

**Returns:** `boolean`

### public static boolean canPerformRecipe(CraftRecipe recipe,
CraftRecipeData craftTestData,
List<Resource> inputs,
List<Resource> outputs,
CraftRecipeMonitor monitor)

**Parameters:**
- `CraftRecipe` `recipe`
- `CraftRecipeData` `craftTestData`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`
- `CraftRecipeMonitor` `monitor`

**Returns:** `boolean`

### public static CraftRecipe getPossibleRecipe(CraftRecipeData craftTestData,
List<CraftRecipe> recipes,
List<Resource> inputs,
List<Resource> outputs)

**Parameters:**
- `CraftRecipeData` `craftTestData`
- `List<CraftRecipe>` `recipes`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`

**Returns:** `CraftRecipe`

### public static CraftRecipe getPossibleRecipe(CraftRecipeData craftTestData,
List<CraftRecipe> recipes,
List<Resource> inputs,
List<Resource> outputs,
CraftRecipeMonitor monitor)

**Parameters:**
- `CraftRecipeData` `craftTestData`
- `List<CraftRecipe>` `recipes`
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`
- `CraftRecipeMonitor` `monitor`

**Returns:** `CraftRecipe`

### public static float getEntityTemperature(GameEntity entity)

**Parameters:**
- `GameEntity` `entity`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\CraftUtil.html`*
