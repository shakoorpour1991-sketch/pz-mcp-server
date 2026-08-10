---
title: zombie.world.WorldDictionary
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.world
---

# zombie.world.WorldDictionary

`public class WorldDictionary extends Object`

**Kind:** class · **Package:** zombie.world

## Inheritance
- java.lang.Object
- zombie.world.WorldDictionary

## Fields

### public static final int VERSION

### public static final String SAVE_FILE_READABLE

### public static final String SAVE_FILE_LOG

### public static final String SAVE_FILE

### public static final String SAVE_EXT

### public static final boolean logUnset

### public static final boolean logMissingObjectID

## Constructors

### public WorldDictionary()

## Methods

### public static void setIsNewGame(boolean isNewGame)

**Parameters:**
- `boolean` `isNewGame`

**Returns:** `void`

### public static boolean isIsNewGame()

**Returns:** `boolean`

### public static void StartScriptLoading()

**Returns:** `void`

### public static void ScriptsLoaded()

**Returns:** `void`

### public static boolean isAllowScriptItemLoading()

**Returns:** `boolean`

### public static void onLoadEntity(GameEntityScript entityScript)

**Parameters:**
- `GameEntityScript` `entityScript`

**Returns:** `void`

### public static void loadDataFromServer(ByteBufferReader bb)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public static void saveDataForClient(ByteBufferWriter bb)
throws IOException

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public static void init()
throws WorldDictionaryException

**Returns:** `void`

### public static void onWorldLoaded()

**Returns:** `void`

### public static ItemInfo getItemInfoFromType(String fulltype)

**Parameters:**
- `String` `fulltype`

**Returns:** `ItemInfo`

### public static ItemInfo getItemInfoFromID(short registeryID)

**Parameters:**
- `short` `registeryID`

**Returns:** `ItemInfo`

### public static short getItemRegistryID(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `short`

### public static String getItemTypeFromID(short id)

**Parameters:**
- `short` `id`

**Returns:** `String`

### public static String getItemTypeDebugString(short id)

**Parameters:**
- `short` `id`

**Returns:** `String`

### public static EntityInfo getEntityInfoFromType(String fulltype)

**Parameters:**
- `String` `fulltype`

**Returns:** `EntityInfo`

### public static EntityInfo getEntityInfoFromID(short registeryID)

**Parameters:**
- `short` `registeryID`

**Returns:** `EntityInfo`

### public static short getEntityRegistryID(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `short`

### public static String getEntityTypeFromID(short id)

**Parameters:**
- `short` `id`

**Returns:** `String`

### public static String getEntityTypeDebugString(short id)

**Parameters:**
- `short` `id`

**Returns:** `String`

### public static String getSpriteNameFromID(int id)

**Parameters:**
- `int` `id`

**Returns:** `String`

### public static int getIdForSpriteName(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public static String getObjectNameFromID(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `String`

### public static byte getIdForObjectName(String name)

**Parameters:**
- `String` `name`

**Returns:** `byte`

### public static String getItemModID(short registeryID)

**Parameters:**
- `short` `registeryID`

**Returns:** `String`

### public static String getItemModID(String fulltype)

**Parameters:**
- `String` `fulltype`

**Returns:** `String`

### public static String getModNameFromID(String modid)

**Parameters:**
- `String` `modid`

**Returns:** `String`

### public static void DebugPrintItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static void DebugPrintItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `void`

### public static void DebugPrintItem(String fullitem)

**Parameters:**
- `String` `fullitem`

**Returns:** `void`

### public static void DebugPrintItem(short id)

**Parameters:**
- `short` `id`

**Returns:** `void`

### public static String getEntityModID(short registeryID)

**Parameters:**
- `short` `registeryID`

**Returns:** `String`

### public static String getEntityModID(String fulltype)

**Parameters:**
- `String` `fulltype`

**Returns:** `String`

### public static void DebugPrintEntity(GameEntity entity)

**Parameters:**
- `GameEntity` `entity`

**Returns:** `void`

### public static void DebugPrintEntity(GameEntityScript entityScript)

**Parameters:**
- `GameEntityScript` `entityScript`

**Returns:** `void`

### public static void DebugPrintEntity(String fullitem)

**Parameters:**
- `String` `fullitem`

**Returns:** `void`

### public static void DebugPrintEntity(short id)

**Parameters:**
- `short` `id`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\world\WorldDictionary.html`*
