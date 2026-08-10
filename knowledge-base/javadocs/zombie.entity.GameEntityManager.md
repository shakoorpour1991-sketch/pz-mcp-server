---
title: zombie.entity.GameEntityManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.GameEntityManager

`public class GameEntityManager extends Object`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.GameEntityManager

## Fields

### public static boolean debugMode

### public static boolean needSave

### public static final int bbBlockSize

## Methods

### public static void Init(int worldVersion)

**Parameters:**
- `int` `worldVersion`

**Returns:** `void`

### public static void Update()

**Returns:** `void`

### public static boolean isEngineProcessing()

**Returns:** `boolean`

### public static void RenderLast()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static GameEntity GetEntity(long gameEntityNetID)

**Parameters:**
- `long` `gameEntityNetID`

**Returns:** `GameEntity`

### public static void checkEntityIDChange(GameEntity entity,
long oldID,
long newID)

**Parameters:**
- `GameEntity` `entity`
- `long` `oldID`
- `long` `newID`

**Returns:** `void`

### public static ByteBuffer ensureCapacity(ByteBuffer bb,
int requiredSize)

**Parameters:**
- `ByteBuffer` `bb`
- `int` `requiredSize`

**Returns:** `ByteBuffer`

### public static void Save()

**Returns:** `void`

### public static void saveToBufferMap(SaveBufferMap bufferMap)

**Parameters:**
- `SaveBufferMap` `bufferMap`

**Returns:** `void`

### public static ArrayList<GameEntity> getIsoEntitiesDebug()

**Returns:** `ArrayList<GameEntity>`

### public static void reloadDebug()
throws Exception

**Returns:** `void`

### public static void reloadDebugEntity(GameEntity gameEntity)
throws Exception

**Parameters:**
- `GameEntity` `gameEntity`

**Returns:** `void`

### public static void reloadEntityFromScriptDebug(GameEntity gameEntity)
throws Exception

**Parameters:**
- `GameEntity` `gameEntity`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\GameEntityManager.html`*
