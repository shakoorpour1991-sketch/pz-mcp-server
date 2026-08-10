---
title: zombie.entity.GameEntityFactory
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.GameEntityFactory

`public class GameEntityFactory extends Object`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.GameEntityFactory

## Constructors

### public GameEntityFactory()

## Methods

### public static void TransferComponents(GameEntity source,
GameEntity target)

**Parameters:**
- `GameEntity` `source`
- `GameEntity` `target`

**Returns:** `void`

### public static void TransferComponent(GameEntity source,
GameEntity target,
ComponentType componentType)

**Parameters:**
- `GameEntity` `source`
- `GameEntity` `target`
- `ComponentType` `componentType`

**Returns:** `void`

### public static void CreateIsoEntityFromCellLoading(IsoObject isoObject)

**Parameters:**
- `IsoObject` `isoObject`

**Returns:** `void`

### public static void CreateInventoryItemEntity(InventoryItem inventoryItem,
Item itemScript,
boolean isFirstTimeCreated)

**Parameters:**
- `InventoryItem` `inventoryItem`
- `Item` `itemScript`
- `boolean` `isFirstTimeCreated`

**Returns:** `void`

### public static void CreateIsoObjectEntity(IsoObject isoObject,
GameEntityScript script,
boolean isFirstTimeCreated)

**Parameters:**
- `IsoObject` `isoObject`
- `GameEntityScript` `script`
- `boolean` `isFirstTimeCreated`

**Returns:** `void`

### public static void CreateEntityDebugReload(GameEntity entity,
GameEntityScript script,
boolean isFirstTimeCreated)

**Parameters:**
- `GameEntity` `entity`
- `GameEntityScript` `script`
- `boolean` `isFirstTimeCreated`

**Returns:** `void`

### public static void RemoveComponentType(GameEntity entity,
ComponentType componentType)

**Parameters:**
- `GameEntity` `entity`
- `ComponentType` `componentType`

**Returns:** `void`

### public static void RemoveComponentTypes(GameEntity entity,
EnumSet<ComponentType> componentTypes)

**Parameters:**
- `GameEntity` `entity`
- `EnumSet<ComponentType>` `componentTypes`

**Returns:** `void`

### public static void RemoveComponent(GameEntity entity,
Component component)

**Parameters:**
- `GameEntity` `entity`
- `Component` `component`

**Returns:** `void`

### public static void RemoveComponents(GameEntity entity,
Component... components)

**Parameters:**
- `GameEntity` `entity`
- `Component...` `components`

**Returns:** `void`

### public static void AddComponent(GameEntity entity,
Component component)

**Parameters:**
- `GameEntity` `entity`
- `Component` `component`

**Returns:** `void`

### public static void AddComponents(GameEntity entity,
Component... components)

**Parameters:**
- `GameEntity` `entity`
- `Component...` `components`

**Returns:** `void`

### public static void AddComponent(GameEntity entity,
boolean replace,
Component component)

**Parameters:**
- `GameEntity` `entity`
- `boolean` `replace`
- `Component` `component`

**Returns:** `void`

### public static void AddComponents(GameEntity entity,
boolean replace,
Component... components)

**Parameters:**
- `GameEntity` `entity`
- `boolean` `replace`
- `Component...` `components`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\GameEntityFactory.html`*
