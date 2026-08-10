---
title: zombie.inventory.ItemContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.ItemContainer

`public final class ItemContainer extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.ItemContainer

## Fields

### public boolean active

### public boolean isdevice

### public float ageFactor

### public float cookingFactor

### public int capacity

### public InventoryItem containingItem

### public ArrayList<InventoryItem> items

### public ArrayList<InventoryItem> includingObsoleteItems

### public IsoObject parent

### public IsoGridSquare sourceGrid

### public VehiclePart vehiclePart

### public InventoryContainer inventoryContainer

### public boolean explored

### public String type

### public int id

## Constructors

### public ItemContainer(int id,
String containerName,
IsoGridSquare square,
IsoObject parent)

**Parameters:**
- `int` `id`
- `String` `containerName`
- `IsoGridSquare` `square`
- `IsoObject` `parent`

### public ItemContainer(String containerName,
IsoGridSquare square,
IsoObject parent)

**Parameters:**
- `String` `containerName`
- `IsoGridSquare` `square`
- `IsoObject` `parent`

### public ItemContainer(int id)

**Parameters:**
- `int` `id`

### public ItemContainer()

## Methods

### public static float floatingPointCorrection(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public int getCapacity()

**Returns:** `int`

### public void setCapacity(int capacity)

**Parameters:**
- `int` `capacity`

**Returns:** `void`

### public InventoryItem FindAndReturnWaterItem(int uses)

**Parameters:**
- `int` `uses`

**Returns:** `InventoryItem`

### public InventoryItem getItemFromTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public int getEffectiveCapacity(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public boolean hasRoomFor(IsoGameCharacter chr,
InventoryItem item)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean hasRoomFor(IsoGameCharacter chr,
float weightVal)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `weightVal`

**Returns:** `boolean`

### public boolean hasRoomFor(IsoGameCharacter chr,
float weightVal,
float weightAddedToFloor)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `weightVal`
- `float` `weightAddedToFloor`

**Returns:** `boolean`

### public float getFreeCapacity(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public boolean isFull(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean isItemAllowed(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isRemoveItemAllowed(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isExplored()

**Returns:** `boolean`

### public void setExplored(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isInCharacterInventory(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean isInside(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public InventoryItem getContainingItem()

**Returns:** `InventoryItem`

### public InventoryItem DoAddItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public InventoryItem DoAddItemBlind(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> AddItems(String type,
int count)

**Parameters:**
- `String` `type`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public <T extends InventoryItem> T addItem(ItemKey item)

**Returns:** `T`

### public List<InventoryItem> addItems(ItemKey item,
int count)

**Parameters:**
- `ItemKey` `item`
- `int` `count`

**Returns:** `List<InventoryItem>`

### public ArrayList<InventoryItem> AddItems(InventoryItem item,
int count)

**Parameters:**
- `InventoryItem` `item`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> AddItems(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items`

**Returns:** `ArrayList<InventoryItem>`

### public int getNumberOfItem(String findItem,
boolean includeReplaceOnDeplete)

**Parameters:**
- `String` `findItem`
- `boolean` `includeReplaceOnDeplete`

**Returns:** `int`

### public int getNumberOfItem(String findItem)

**Parameters:**
- `String` `findItem`

**Returns:** `int`

### public int getNumberOfItem(String findItem,
boolean includeReplaceOnDeplete,
ArrayList<ItemContainer> containers)

**Parameters:**
- `String` `findItem`
- `boolean` `includeReplaceOnDeplete`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `int`

### public int getNumberOfItem(String findItem,
boolean includeReplaceOnDeplete,
boolean insideInv)

**Parameters:**
- `String` `findItem`
- `boolean` `includeReplaceOnDeplete`
- `boolean` `insideInv`

**Returns:** `int`

### public InventoryItem addItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public InventoryItem AddItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public void SpawnItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem AddItemBlind(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public InventoryItem SpawnItem(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem AddItem(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public boolean SpawnItem(String type,
float useDelta)

**Parameters:**
- `String` `type`
- `float` `useDelta`

**Returns:** `boolean`

### public boolean AddItem(String type,
float useDelta)

**Parameters:**
- `String` `type`
- `float` `useDelta`

**Returns:** `boolean`

### public boolean AddItem(String type,
float useDelta,
boolean synchSpawn)

**Parameters:**
- `String` `type`
- `float` `useDelta`
- `boolean` `synchSpawn`

**Returns:** `boolean`

### public boolean contains(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean containsWithModule(String moduleType)

**Parameters:**
- `String` `moduleType`

**Returns:** `boolean`

### public boolean containsWithModule(String moduleType,
boolean withDeltaLeft)

**Parameters:**
- `String` `moduleType`
- `boolean` `withDeltaLeft`

**Returns:** `boolean`

### @Deprecated
public void removeItemOnServer(InventoryItem item)

> ⚠️ **Deprecated**

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean contains(InventoryItem itemToFind,
boolean doInv)

**Parameters:**
- `InventoryItem` `itemToFind`
- `boolean` `doInv`

**Returns:** `boolean`

### public boolean contains(Invokers.Params2.Boolean.IParam2<InventoryItem> predicate,
boolean doInv)

**Parameters:**
- `Invokers.Params2.Boolean.IParam2<InventoryItem>` `predicate`
- `boolean` `doInv`

**Returns:** `boolean`

### public <T> boolean contains(T itemToCompare,
Invokers.Params2.Boolean.ICallback<T, InventoryItem> predicate,
boolean doInv)

**Returns:** `boolean`

### public InventoryItem findItem(Invokers.Params2.Boolean.IParam2<InventoryItem> predicate,
boolean doInv)

**Parameters:**
- `Invokers.Params2.Boolean.IParam2<InventoryItem>` `predicate`
- `boolean` `doInv`

**Returns:** `InventoryItem`

### public <T> InventoryItem findItem(T itemToCompare,
Invokers.Params2.Boolean.ICallback<T, InventoryItem> predicate,
boolean doInv)

**Returns:** `InventoryItem`

### public InventoryItem findItem(String type,
boolean doInv,
boolean ignoreBroken)

**Parameters:**
- `String` `type`
- `boolean` `doInv`
- `boolean` `ignoreBroken`

**Returns:** `InventoryItem`

### public InventoryItem findHumanCorpseItem()

**Returns:** `InventoryItem`

### public boolean containsHumanCorpse()

**Returns:** `boolean`

### public boolean contains(String type,
boolean doInv)

**Parameters:**
- `String` `type`
- `boolean` `doInv`

**Returns:** `boolean`

### public boolean containsType(String type)

**Parameters:**
- `String` `type`

**Returns:** `boolean`

### public boolean containsTypeRecurse(ItemKey type)

**Parameters:**
- `ItemKey` `type`

**Returns:** `boolean`

### public boolean containsTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `boolean`

### public boolean contains(String type,
boolean doInv,
boolean ignoreBroken)

**Parameters:**
- `String` `type`
- `boolean` `doInv`
- `boolean` `ignoreBroken`

**Returns:** `boolean`

### public boolean contains(String type)

**Parameters:**
- `String` `type`

**Returns:** `boolean`

### public AnimalInventoryItem getAnimalInventoryItem(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `AnimalInventoryItem`

### public boolean canHumanCorpseFit(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canItemFit(InventoryItem item,
IsoGameCharacter chr)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean isVehiclePart()

**Returns:** `boolean`

### public boolean isVehicleSeat()

**Returns:** `boolean`

### public boolean isOccupiedVehicleSeat()

**Returns:** `boolean`

### public InventoryItem getBest(Predicate<InventoryItem> predicate,
Comparator<InventoryItem> comparator)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`
- `Comparator<InventoryItem>` `comparator`

**Returns:** `InventoryItem`

### public InventoryItem getBestRecurse(Predicate<InventoryItem> predicate,
Comparator<InventoryItem> comparator)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`
- `Comparator<InventoryItem>` `comparator`

**Returns:** `InventoryItem`

### public InventoryItem getBestType(String type,
Comparator<InventoryItem> comparator)

**Parameters:**
- `String` `type`
- `Comparator<InventoryItem>` `comparator`

**Returns:** `InventoryItem`

### public InventoryItem getBestTypeRecurse(String type,
Comparator<InventoryItem> comparator)

**Parameters:**
- `String` `type`
- `Comparator<InventoryItem>` `comparator`

**Returns:** `InventoryItem`

### public InventoryItem getBestEval(se.krka.kahlua.vm.LuaClosure predicateObj,
se.krka.kahlua.vm.LuaClosure comparatorObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `predicateObj`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`

**Returns:** `InventoryItem`

### public InventoryItem getBestEvalRecurse(se.krka.kahlua.vm.LuaClosure predicateObj,
se.krka.kahlua.vm.LuaClosure comparatorObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `predicateObj`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`

**Returns:** `InventoryItem`

### public InventoryItem getBestEvalArg(se.krka.kahlua.vm.LuaClosure predicateObj,
se.krka.kahlua.vm.LuaClosure comparatorObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `predicateObj`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getBestEvalArgRecurse(se.krka.kahlua.vm.LuaClosure predicateObj,
se.krka.kahlua.vm.LuaClosure comparatorObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `predicateObj`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getBestTypeEval(String type,
se.krka.kahlua.vm.LuaClosure comparatorObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`

**Returns:** `InventoryItem`

### public InventoryItem getBestTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure comparatorObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`

**Returns:** `InventoryItem`

### public InventoryItem getBestTypeEvalArg(String type,
se.krka.kahlua.vm.LuaClosure comparatorObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getBestTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure comparatorObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `comparatorObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getBestCondition(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `InventoryItem`

### public InventoryItem getBestConditionRecurse(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `InventoryItem`

### public InventoryItem getBestCondition(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem getBestConditionRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem getBestConditionEval(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getBestConditionEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getBestConditionEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getBestConditionEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getFirstEval(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public boolean containsEval(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `boolean`

### public boolean containsEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `boolean`

### public boolean containsEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `boolean`

### public boolean containsEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `boolean`

### public boolean containsTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public boolean containsTagEval(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `boolean`

### public boolean containsTagRecurse(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public boolean containsTagEvalRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `boolean`

### public boolean containsTagEvalArgRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `boolean`

### public boolean containsTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `boolean`

### public boolean containsTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `boolean`

### public InventoryItem getFirst(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `InventoryItem`

### public InventoryItem getFirstRecurse(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getSome(Predicate<InventoryItem> predicate,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeRecurse(Predicate<InventoryItem> predicate,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAll(Predicate<InventoryItem> predicate,
ArrayList<InventoryItem> result)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllRecurse(Predicate<InventoryItem> predicate,
ArrayList<InventoryItem> result)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllRecurse(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `ArrayList<InventoryItem>`

### public int getCount(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `int`

### public int getCountRecurse(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `int`

### public int getCountTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `int`

### public int getCountTagEval(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `int`

### public int getCountTagEvalArg(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `int`

### public int getCountTagRecurse(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `int`

### public int getCountTagEvalRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `int`

### public int getCountTagEvalArgRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `int`

### public int getCountType(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public int getCountTypeEval(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `int`

### public int getCountTypeEvalArg(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `int`

### public int getCountTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public int getCountTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `int`

### public int getCountTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `int`

### public int getCountEval(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `int`

### public int getCountEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `int`

### public int getCountEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `int`

### public int getCountEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `int`

### public InventoryItem getFirstCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `InventoryItem`

### public InventoryItem getFirstCategoryRecurse(String category)

**Parameters:**
- `String` `category`

**Returns:** `InventoryItem`

### public InventoryItem getFirstEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTagRecurse(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTagEval(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTagEvalRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTagEvalArgRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public InventoryItem getFirstType(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTypeRecurse(ItemKey key)

**Parameters:**
- `ItemKey` `key`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTypeEval(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTypeEvalRecurse(ItemKey key,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemKey` `key`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `InventoryItem`

### public InventoryItem getFirstTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getSomeCategory(String category,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `category`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeCategoryRecurse(String category,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `category`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTag(ItemTag itemTag,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagEval(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagEvalArg(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagRecurse(ItemTag itemTag,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagEvalRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagEvalArgRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeType(String type,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEval(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEvalArg(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeRecurse(String type,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEval(se.krka.kahlua.vm.LuaClosure functionObj,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllCategory(String category,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `category`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllCategoryRecurse(String category,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `category`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTag(ItemTag itemTag,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagEval(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagEvalArg(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagRecurse(ItemTag itemTag,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagEvalRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagEvalArgRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
ArrayList<InventoryItem> result)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllType(String type,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEval(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEvalArg(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeRecurse(String type,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
ArrayList<InventoryItem> result)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEval(se.krka.kahlua.vm.LuaClosure functionObj,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
ArrayList<InventoryItem> result)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `ArrayList<InventoryItem>` `result`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeCategory(String category,
int count)

**Parameters:**
- `String` `category`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEval(se.krka.kahlua.vm.LuaClosure functionObj,
int count)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEval(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
int count)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEvalArg(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
int count)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTag(ItemTag itemTag,
int count)

**Parameters:**
- `ItemTag` `itemTag`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagRecurse(ItemTag itemTag,
int count)

**Parameters:**
- `ItemTag` `itemTag`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagEvalRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
int count)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTagEvalArgRecurse(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeType(String type,
int count)

**Parameters:**
- `String` `type`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeRecurse(String type,
int count)

**Parameters:**
- `String` `type`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
int count)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSomeTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg,
int count)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAll(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEval(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEvalArg(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagEval(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTagEvalArg(ItemTag itemTag,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `ItemTag` `itemTag`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEval(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEvalArg(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEvalRecurse(se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllEvalArgRecurse(se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllType(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEvalRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getAllTypeEvalArgRecurse(String type,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg)

**Parameters:**
- `String` `type`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem FindAndReturnCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> FindAndReturn(String type,
int count)

**Parameters:**
- `String` `type`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem FindAndReturn(String type,
ArrayList<InventoryItem> itemToCheck)

**Parameters:**
- `String` `type`
- `ArrayList<InventoryItem>` `itemToCheck`

**Returns:** `InventoryItem`

### public InventoryItem FindAndReturn(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> FindAll(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem FindAndReturnStack(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem FindAndReturnStack(InventoryItem itemlike)

**Parameters:**
- `InventoryItem` `itemlike`

**Returns:** `InventoryItem`

### public boolean HasType(ItemType itemType)

**Parameters:**
- `ItemType` `itemType`

**Returns:** `boolean`

### public void Remove(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void DoRemoveItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void Remove(String itemTypes)

**Parameters:**
- `String` `itemTypes`

**Returns:** `void`

### public InventoryItem Remove(ItemType itemType)

**Parameters:**
- `ItemType` `itemType`

**Returns:** `InventoryItem`

### public InventoryItem Find(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `InventoryItem`

### public InventoryItem Find(ItemType itemType)

**Parameters:**
- `ItemType` `itemType`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> RemoveAll(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> RemoveAll(String itemType,
int count)

**Parameters:**
- `String` `itemType`
- `int` `count`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem RemoveOneOf(String string,
boolean insideInv)

**Parameters:**
- `String` `string`
- `boolean` `insideInv`

**Returns:** `InventoryItem`

### public void RemoveOneOf(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public float getContentsWeight()

**Returns:** `float`

### public float getMaxWeight()

**Returns:** `float`

### public float getCapacityWeight()

**Returns:** `float`

### public float getAvailableWeightCapacity()

**Returns:** `float`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isEmptyOrUnwanted(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean isMicrowave()

**Returns:** `boolean`

### public boolean isPowered()

**Returns:** `boolean`

### public static boolean isObjectPowered(IsoObject parent,
boolean includeGenerators)

**Parameters:**
- `IsoObject` `parent`
- `boolean` `includeGenerators`

**Returns:** `boolean`

### public float getTemprature()

**Returns:** `float`

### public boolean isTemperatureChanging()

**Returns:** `boolean`

### public ArrayList<InventoryItem> save(ByteBuffer output,
IsoGameCharacter noCompress)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `IsoGameCharacter` `noCompress`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `ArrayList<InventoryItem>`

### public boolean isDrawDirty()

**Returns:** `boolean`

### public void setDrawDirty(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public InventoryItem getBestWeapon(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `InventoryItem`

### public InventoryItem getBestWeapon()

**Returns:** `InventoryItem`

### public float getTotalFoodScore(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `float`

### public float getTotalWeaponScore(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `float`

### public InventoryItem getBestFood(SurvivorDesc descriptor)

**Parameters:**
- `SurvivorDesc` `descriptor`

**Returns:** `InventoryItem`

### public InventoryItem getBestBandage(SurvivorDesc descriptor)

**Parameters:**
- `SurvivorDesc` `descriptor`

**Returns:** `InventoryItem`

### public int getNumItems(String itemLike)

**Parameters:**
- `String` `itemLike`

**Returns:** `int`

### public boolean isActive()

**Returns:** `boolean`

### public void setActive(boolean active)

**Parameters:**
- `boolean` `active` — the active to set

**Returns:** `void`

### public boolean isDirty()

**Returns:** `boolean`

### public void setDirty(boolean dirty)

**Parameters:**
- `boolean` `dirty` — the dirty to set

**Returns:** `void`

### public boolean isIsDevice()

**Returns:** `boolean`

### public void setIsDevice(boolean isDevice)

**Parameters:**
- `boolean` `isDevice` — the IsDevice to set

**Returns:** `void`

### public float getAgeFactor()

**Returns:** `float`

### public void setAgeFactor(float ageFactor)

**Parameters:**
- `float` `ageFactor` — the ageFactor to set

**Returns:** `void`

### public float getCookingFactor()

**Returns:** `float`

### public void setCookingFactor(float cookingFactor)

**Parameters:**
- `float` `cookingFactor` — the CookingFactor to set

**Returns:** `void`

### public ArrayList<InventoryItem> getItems()

**Returns:** `ArrayList<InventoryItem>`

### public void setItems(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items` — the Items to set

**Returns:** `void`

### public void takeItemsFrom(ItemContainer other)

**Parameters:**
- `ItemContainer` `other`

**Returns:** `void`

### public IsoObject getParent()

**Returns:** `IsoObject`

### public void setParent(IsoObject parent)

**Parameters:**
- `IsoObject` `parent` — the parent to set

**Returns:** `void`

### public IsoGridSquare getSourceGrid()

**Returns:** `IsoGridSquare`

### public void setSourceGrid(IsoGridSquare sourceGrid)

**Parameters:**
- `IsoGridSquare` `sourceGrid` — the SourceGrid to set

**Returns:** `void`

### public String getType()

**Returns:** `String`

### public void setType(String type)

**Parameters:**
- `String` `type` — the type to set

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public int getWaterContainerCount()

**Returns:** `int`

### public InventoryItem FindWaterSource()

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getAllWaterFillables()

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem getFirstWaterFluidSources(boolean includeTainted)

**Parameters:**
- `boolean` `includeTainted`

**Returns:** `InventoryItem`

### public InventoryItem getFirstWaterFluidSources(boolean includeTainted,
boolean taintedPriority)

**Parameters:**
- `boolean` `includeTainted`
- `boolean` `taintedPriority`

**Returns:** `InventoryItem`

### public InventoryItem getFirstFluidContainer(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getAvailableFluidContainer(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<InventoryItem>`

### public float getAvailableFluidContainersCapacity(String type)

**Parameters:**
- `String` `type`

**Returns:** `float`

### public InventoryItem getFirstAvailableFluidContainer(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getAllWaterFluidSources(boolean includeTainted)

**Parameters:**
- `boolean` `includeTainted`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem getFirstCleaningFluidSources()

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getAllCleaningFluidSources()

**Returns:** `ArrayList<InventoryItem>`

### public int getItemCount(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public int getItemCount(ItemKey type)

**Parameters:**
- `ItemKey` `type`

**Returns:** `int`

### public int getItemCountRecurse(ItemKey type)

**Parameters:**
- `ItemKey` `type`

**Returns:** `int`

### public int getItemCountRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public int getItemCount(String type,
boolean doBags)

**Parameters:**
- `String` `type`
- `boolean` `doBags`

**Returns:** `int`

### public int getUsesRecurse(Predicate<InventoryItem> predicate)

**Parameters:**
- `Predicate<InventoryItem>` `predicate`

**Returns:** `int`

### public int getUsesType(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public int getUsesTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public int getWeightReduction()

**Returns:** `int`

### public void setWeightReduction(int weightReduction)

**Parameters:**
- `int` `weightReduction`

**Returns:** `void`

### public void removeAllItems()

**Returns:** `void`

### public boolean containsRecursive(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public int getItemCountFromTypeRecurse(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public float getCustomTemperature()

**Returns:** `float`

### public void setCustomTemperature(float newTemp)

**Parameters:**
- `float` `newTemp`

**Returns:** `void`

### public InventoryItem getItemFromType(String type,
IsoGameCharacter chr,
boolean notEquipped,
boolean ignoreBroken,
boolean includeInv)

**Parameters:**
- `String` `type`
- `IsoGameCharacter` `chr`
- `boolean` `notEquipped`
- `boolean` `ignoreBroken`
- `boolean` `includeInv`

**Returns:** `InventoryItem`

### public InventoryItem getItemFromTag(ItemTag itemTag,
IsoGameCharacter chr,
boolean notEquipped,
boolean ignoreBroken,
boolean includeInv)

**Parameters:**
- `ItemTag` `itemTag`
- `IsoGameCharacter` `chr`
- `boolean` `notEquipped`
- `boolean` `ignoreBroken`
- `boolean` `includeInv`

**Returns:** `InventoryItem`

### public InventoryItem getItemFromType(String type,
boolean ignoreBroken,
boolean includeInv)

**Parameters:**
- `String` `type`
- `boolean` `ignoreBroken`
- `boolean` `includeInv`

**Returns:** `InventoryItem`

### public InventoryItem getItemFromTag(ItemTag itemTag,
boolean ignoreBroken,
boolean includeInv)

**Parameters:**
- `ItemTag` `itemTag`
- `boolean` `ignoreBroken`
- `boolean` `includeInv`

**Returns:** `InventoryItem`

### public InventoryItem getItemFromType(String type)

**Parameters:**
- `String` `type`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getItemsFromType(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getItemsFromFullType(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getItemsFromFullType(String type,
boolean includeInv)

**Parameters:**
- `String` `type`
- `boolean` `includeInv`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getItemsFromType(String type,
boolean includeInv)

**Parameters:**
- `String` `type`
- `boolean` `includeInv`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getItemsFromCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `ArrayList<InventoryItem>`

### public void requestSync()

**Returns:** `void`

### public void requestServerItemsForContainer()

**Returns:** `void`

### public InventoryItem getItemWithIDRecursiv(int id)

**Parameters:**
- `int` `id`

**Returns:** `InventoryItem`

### public InventoryItem getItemWithID(int id)

**Parameters:**
- `int` `id`

**Returns:** `InventoryItem`

### public boolean removeItemWithID(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean containsID(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean removeItemWithIDRecurse(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isHasBeenLooted()

**Returns:** `boolean`

### public void setHasBeenLooted(boolean hasBeenLooted)

**Parameters:**
- `boolean` `hasBeenLooted`

**Returns:** `void`

### public String getOpenSound()

**Returns:** `String`

### public void setOpenSound(String openSound)

**Parameters:**
- `String` `openSound`

**Returns:** `void`

### public String getCloseSound()

**Returns:** `String`

### public void setCloseSound(String closeSound)

**Parameters:**
- `String` `closeSound`

**Returns:** `void`

### public String getPutSound()

**Returns:** `String`

### public void setPutSound(String putSound)

**Parameters:**
- `String` `putSound`

**Returns:** `void`

### public String getTakeSound()

**Returns:** `String`

### public void setTakeSound(String takeSound)

**Parameters:**
- `String` `takeSound`

**Returns:** `void`

### public InventoryItem haveThisKeyId(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `InventoryItem`

### public String getOnlyAcceptCategory()

**Returns:** `String`

### public void setOnlyAcceptCategory(String onlyAcceptCategory)

**Parameters:**
- `String` `onlyAcceptCategory`

**Returns:** `void`

### public String getAcceptItemFunction()

**Returns:** `String`

### public void setAcceptItemFunction(String functionName)

**Parameters:**
- `String` `functionName`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void emptyIt()

**Returns:** `void`

### public LinkedHashMap<String, InventoryItem> getItems4Admin()

**Returns:** `LinkedHashMap<String, InventoryItem>`

### public ArrayList<InventoryItem> getAllFoodsForAnimals()

**Returns:** `ArrayList<InventoryItem>`

### public LinkedHashMap<String, InventoryItem> getAllItems(LinkedHashMap<String, InventoryItem> items,
boolean inInv)

**Parameters:**
- `LinkedHashMap<String, InventoryItem>` `items`
- `boolean` `inInv`

**Returns:** `LinkedHashMap<String, InventoryItem>`

### @Deprecated
public InventoryItem getItemById(long id)

> ⚠️ **Deprecated**

**Parameters:**
- `long` `id`

**Returns:** `InventoryItem`

### public void addItemsToProcessItems()

**Returns:** `void`

### public void removeItemsFromProcessItems()

**Returns:** `void`

### public boolean isExistYet()

**Returns:** `boolean`

### public String getContainerPosition()

**Returns:** `String`

### public void setContainerPosition(String containerPosition)

**Parameters:**
- `String` `containerPosition`

**Returns:** `void`

### public String getFreezerPosition()

**Returns:** `String`

### public void setFreezerPosition(String freezerPosition)

**Parameters:**
- `String` `freezerPosition`

**Returns:** `void`

### public VehiclePart getVehiclePart()

**Returns:** `VehiclePart`

### public VehiclePartOwner getVehiclePartOwner()

**Returns:** `VehiclePartOwner`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public VehiclePart getVehicleDoorPart()

**Returns:** `VehiclePart`

### public VehiclePart getVehicleSeatDoorPart()

**Returns:** `VehiclePart`

### public VehicleDoor getVehicleSeatDoor()

**Returns:** `VehicleDoor`

### public VehicleDoor getVehicleDoor()

**Returns:** `VehicleDoor`

### public boolean doesVehicleDoorNeedOpening()

**Returns:** `boolean`

### public boolean canCharacterOpenVehicleDoor(IsoGameCharacter playerObj)

**Parameters:**
- `IsoGameCharacter` `playerObj`

**Returns:** `boolean`

### public boolean canCharacterUnlockVehicleDoor(IsoGameCharacter playerObj)

**Parameters:**
- `IsoGameCharacter` `playerObj`

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public ItemContainer getOutermostContainer()

**Returns:** `ItemContainer`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public IsoWorldInventoryObject getWorldItem()

**Returns:** `IsoWorldInventoryObject`

### public boolean hasWorldItem()

**Returns:** `boolean`

### public Vector2 getWorldPosition(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public boolean isStove()

**Returns:** `boolean`

### public boolean isShop()

**Returns:** `boolean`

### public boolean isCorpse()

**Returns:** `boolean`

### public boolean hasRecipe(String recipe,
IsoGameCharacter chr)

**Parameters:**
- `String` `recipe`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean hasRecipe(String recipe,
IsoGameCharacter chr,
boolean recursive)

**Parameters:**
- `String` `recipe`
- `IsoGameCharacter` `chr`
- `boolean` `recursive`

**Returns:** `boolean`

### public InventoryItem getRecipeItem(String recipe,
IsoGameCharacter chr,
boolean recursive)

**Parameters:**
- `String` `recipe`
- `IsoGameCharacter` `chr`
- `boolean` `recursive`

**Returns:** `InventoryItem`

### public void dumpContentsInSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public String getCustomName()

**Returns:** `String`

### public void setCustomName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public List<InventoryItem> getSoapList(List<InventoryItem> result,
boolean includeLiquidSoap)

**Parameters:**
- `List<InventoryItem>` `result`
- `boolean` `includeLiquidSoap`

**Returns:** `List<InventoryItem>`

### public boolean isFreezer()

**Returns:** `boolean`

### public boolean isFridge()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\ItemContainer.html`*
