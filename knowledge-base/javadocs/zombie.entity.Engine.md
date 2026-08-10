---
title: zombie.entity.Engine
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.Engine

`public final class Engine extends Object`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.Engine

## Constructors

### public Engine()

## Methods

### public boolean isProcessing()

**Returns:** `boolean`

### public EntityBucket getRendererBucket()

**Returns:** `EntityBucket`

### public EntityBucket getIsoObjectBucket()

**Returns:** `EntityBucket`

### public EntityBucket getInventoryItemBucket()

**Returns:** `EntityBucket`

### public EntityBucket getVehiclePartBucket()

**Returns:** `EntityBucket`

### public EntityBucket getBucket(Family family)

**Parameters:**
- `Family` `family`

**Returns:** `EntityBucket`

### public EntityBucket registerCustomBucket(String identifier,
EntityBucket.EntityValidator validator)

**Parameters:**
- `String` `identifier`
- `EntityBucket.EntityValidator` `validator`

**Returns:** `EntityBucket`

### public EntityBucket getCustomBucket(String identifier)

**Parameters:**
- `String` `identifier`

**Returns:** `EntityBucket`

### public <T extends EngineSystem> T getSystem(Class<T> systemType)

**Returns:** `T`

### public ImmutableArray<EngineSystem> getSystems()

**Returns:** `ImmutableArray<EngineSystem>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\Engine.html`*
