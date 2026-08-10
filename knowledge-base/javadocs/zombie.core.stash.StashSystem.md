---
title: zombie.core.stash.StashSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.stash
---

# zombie.core.stash.StashSystem

`public final class StashSystem extends Object`

**Kind:** class · **Package:** zombie.core.stash

## Inheritance
- java.lang.Object
- zombie.core.stash.StashSystem

## Fields

### public static ArrayList<Stash> allStashes

### public static ArrayList<StashBuilding> possibleStashes

### public static ArrayList<StashBuilding> buildingsToDo

## Constructors

### public StashSystem()

## Methods

### public static void init()

**Returns:** `void`

### public static void initAllStashes()

Load our different stashes description from lua files in "media/lua/shared/StashDescriptions"

**Returns:** `void`

### public static ArrayList<Stash> getAllStashes()

**Returns:** `ArrayList<Stash>`

### public static ArrayList<String> getAlreadyReadMap()

**Returns:** `ArrayList<String>`

### public static void checkStashItem(InventoryItem item)

check if the spawned item could be a stash item (map or note...)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static void doStashItem(Stash stash,
InventoryItem item)

Public for lua debug stash map

**Parameters:**
- `Stash` `stash`
- `InventoryItem` `item`

**Returns:** `void`

### public static void prepareBuildingStash(String stashName)

Used when you read an annoted map

**Parameters:**
- `String` `stashName`

**Returns:** `void`

### public static void doBuildingStash(BuildingDef def)

Fetch our list of building in which we'll spawn stash, if this building correspond, we do the necessary stuff

**Parameters:**
- `BuildingDef` `def`

**Returns:** `void`

### public static Stash getStash(String stashName)

**Parameters:**
- `String` `stashName`

**Returns:** `Stash`

### public static void visitedBuilding(BuildingDef def)

Check if the visited building is in one of our random stash, in that case we won't spawn any stash for this building

**Parameters:**
- `BuildingDef` `def`

**Returns:** `void`

### public static void load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public static void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public static ArrayList<StashBuilding> getPossibleStashes()

**Returns:** `ArrayList<StashBuilding>`

### public static void reinit()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static boolean isStashBuilding(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\stash\StashSystem.html`*
