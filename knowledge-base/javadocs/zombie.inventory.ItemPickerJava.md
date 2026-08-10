---
title: zombie.inventory.ItemPickerJava
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.ItemPickerJava

`public final class ItemPickerJava extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.ItemPickerJava

## Fields

### public static float zombieDensityCap

### public static final ArrayList<String> NoContainerFillRooms

### public static final ArrayList<ItemPickerJava.ItemPickerUpgradeWeapons> WeaponUpgrades

### public static final HashMap<String, ItemPickerJava.ItemPickerUpgradeWeapons> WeaponUpgradeMap

### public static final gnu.trove.map.hash.THashMap<String, ItemPickerJava.ItemPickerRoom> rooms

### public static final gnu.trove.map.hash.THashMap<String, ItemPickerJava.ItemPickerContainer> containers

### public static final gnu.trove.map.hash.THashMap<String, ItemPickerJava.ItemPickerContainer> ProceduralDistributions

### public static final gnu.trove.map.hash.THashMap<String, ItemPickerJava.VehicleDistribution> VehicleDistributions

## Constructors

### public ItemPickerJava()

## Methods

### public static gnu.trove.map.hash.THashMap<String, ItemPickerJava.ItemPickerContainer> getItemPickerContainers()

**Returns:** `gnu.trove.map.hash.THashMap<String, ItemPickerJava.ItemPickerContainer>`

### public static void Parse()

**Returns:** `void`

### public static void InitSandboxLootSettings()

**Returns:** `void`

### public static void fillContainer(ItemContainer container,
IsoPlayer player)

**Parameters:**
- `ItemContainer` `container`
- `IsoPlayer` `player`

**Returns:** `void`

### public static void fillContainerType(ItemPickerJava.ItemPickerRoom roomDist,
ItemContainer container,
String roomName,
IsoGameCharacter character)

**Parameters:**
- `ItemPickerJava.ItemPickerRoom` `roomDist`
- `ItemContainer` `container`
- `String` `roomName`
- `IsoGameCharacter` `character`

**Returns:** `void`

### public static InventoryItem tryAddItemToContainer(ItemContainer container,
String itemType,
ItemPickerJava.ItemPickerContainer containerDist)

**Parameters:**
- `ItemContainer` `container`
- `String` `itemType`
- `ItemPickerJava.ItemPickerContainer` `containerDist`

**Returns:** `InventoryItem`

### public static void rollItem(ItemPickerJava.ItemPickerContainer containerDist,
ItemContainer container,
boolean doItemContainer,
IsoGameCharacter character,
ItemPickerJava.ItemPickerRoom roomDist)

**Parameters:**
- `ItemPickerJava.ItemPickerContainer` `containerDist`
- `ItemContainer` `container`
- `boolean` `doItemContainer`
- `IsoGameCharacter` `character`
- `ItemPickerJava.ItemPickerRoom` `roomDist`

**Returns:** `void`

### public static void doRollItem(ItemPickerJava.ItemPickerContainer containerDist,
ItemContainer container,
float zombieDensity,
IsoGameCharacter character,
boolean doItemContainer,
ItemPickerJava.ItemPickerRoom roomDist)

**Parameters:**
- `ItemPickerJava.ItemPickerContainer` `containerDist`
- `ItemContainer` `container`
- `float` `zombieDensity`
- `IsoGameCharacter` `character`
- `boolean` `doItemContainer`
- `ItemPickerJava.ItemPickerRoom` `roomDist`

**Returns:** `void`

### public static void rollContainerItem(InventoryContainer bag,
IsoGameCharacter character,
ItemPickerJava.ItemPickerContainer containerDist)

**Parameters:**
- `InventoryContainer` `bag`
- `IsoGameCharacter` `character`
- `ItemPickerJava.ItemPickerContainer` `containerDist`

**Returns:** `void`

### public static void DoWeaponUpgrade(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static float getLootModifier(String itemname)

**Parameters:**
- `String` `itemname`

**Returns:** `float`

### public static float getLootModifierFromType(String lootType)

**Parameters:**
- `String` `lootType`

**Returns:** `float`

### public static String getLootType(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `String`

### public static void updateOverlaySprite(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public static void doOverlaySprite(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static ItemPickerJava.ItemPickerContainer getItemContainer(String room,
String container,
String proceduralName,
boolean junk)

**Parameters:**
- `String` `room`
- `String` `container`
- `String` `proceduralName`
- `boolean` `junk`

**Returns:** `ItemPickerJava.ItemPickerContainer`

### public static void keyNamerBuilding(InventoryItem item,
IsoGridSquare square)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `square`

**Returns:** `void`

### public static void trashItem(InventoryItem spawnItem)

**Parameters:**
- `InventoryItem` `spawnItem`

**Returns:** `void`

### public static void trashItemLooted(InventoryItem spawnItem)

**Parameters:**
- `InventoryItem` `spawnItem`

**Returns:** `void`

### public static void trashItemRats(InventoryItem spawnItem)

**Parameters:**
- `InventoryItem` `spawnItem`

**Returns:** `void`

### public static void wearDownItem(InventoryItem spawnItem)

**Parameters:**
- `InventoryItem` `spawnItem`

**Returns:** `void`

### public static void rotItem(InventoryItem spawnItem)

**Parameters:**
- `InventoryItem` `spawnItem`

**Returns:** `void`

### public static void spawnLootCarKey(InventoryItem spawnItem,
ItemContainer container)

**Parameters:**
- `InventoryItem` `spawnItem`
- `ItemContainer` `container`

**Returns:** `void`

### public static void spawnLootCarKey(InventoryItem spawnItem,
ItemContainer container,
ItemContainer outtermost)

**Parameters:**
- `InventoryItem` `spawnItem`
- `ItemContainer` `container`
- `ItemContainer` `outtermost`

**Returns:** `void`

### public static boolean isGoodKey(String vehicleType)

**Parameters:**
- `String` `vehicleType`

**Returns:** `boolean`

### public static boolean addVehicleKeyAsLoot(InventoryItem spawnItem,
ItemContainer container)

**Parameters:**
- `InventoryItem` `spawnItem`
- `ItemContainer` `container`

**Returns:** `boolean`

### public static boolean containerHasZone(ItemContainer container,
String zone)

**Parameters:**
- `ItemContainer` `container`
- `String` `zone`

**Returns:** `boolean`

### public static boolean squareHasZone(IsoGridSquare square,
String zone)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `zone`

**Returns:** `boolean`

### public static String getContainerZombiesType(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `String`

### public static String getSquareZombiesType(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `String`

### public static String getSquareBuildingName(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `String`

### public static String getSquareRegion(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `String`

### public static float getBaseChance(ItemPickerJava.ItemPickerItem item,
IsoGameCharacter character,
boolean isJunk)

**Parameters:**
- `ItemPickerJava.ItemPickerItem` `item`
- `IsoGameCharacter` `character`
- `boolean` `isJunk`

**Returns:** `float`

### public static float getBaseChanceMultiplier(IsoGameCharacter character,
boolean isJunk,
Item scriptItem)

**Parameters:**
- `IsoGameCharacter` `character`
- `boolean` `isJunk`
- `Item` `scriptItem`

**Returns:** `float`

### public static float getLootModifier(String itemName,
boolean isJunk)

**Parameters:**
- `String` `itemName`
- `boolean` `isJunk`

**Returns:** `float`

### public static float getAdjustedZombieDensity(float zombieDensity,
Item scriptItem,
boolean isJunk)

**Parameters:**
- `float` `zombieDensity`
- `Item` `scriptItem`
- `boolean` `isJunk`

**Returns:** `float`

### public static float getActualSpawnChance(ItemPickerJava.ItemPickerItem item,
IsoGameCharacter character,
ItemContainer container,
float zombieDensity,
boolean isJunk)

**Parameters:**
- `ItemPickerJava.ItemPickerItem` `item`
- `IsoGameCharacter` `character`
- `ItemContainer` `container`
- `float` `zombieDensity`
- `boolean` `isJunk`

**Returns:** `float`

### public static float getZombieDensityFactor(ItemPickerJava.ItemPickerContainer containerDist,
ItemContainer container)

**Parameters:**
- `ItemPickerJava.ItemPickerContainer` `containerDist`
- `ItemContainer` `container`

**Returns:** `float`

### public static void itemSpawnSanityCheck(InventoryItem spawnItem)

**Parameters:**
- `InventoryItem` `spawnItem`

**Returns:** `void`

### public static void itemSpawnSanityCheck(InventoryItem spawnItem,
ItemContainer container)

**Parameters:**
- `InventoryItem` `spawnItem`
- `ItemContainer` `container`

**Returns:** `void`

### public static String getLootDebugString(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `String`

### public static boolean hasDistributionForRoom(String roomdef)

**Parameters:**
- `String` `roomdef`

**Returns:** `boolean`

### public static boolean hasDistributionForContainerInRoom(String containerType,
String roomdef)

**Parameters:**
- `String` `containerType`
- `String` `roomdef`

**Returns:** `boolean`

### public static void onCreateRegion(InventoryItem item,
String region)

**Parameters:**
- `InventoryItem` `item`
- `String` `region`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\ItemPickerJava.html`*
