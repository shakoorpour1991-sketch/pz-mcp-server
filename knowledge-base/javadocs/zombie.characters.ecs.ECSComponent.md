---
title: zombie.characters.ecs.ECSComponent
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.ecs
---

# zombie.characters.ecs.ECSComponent

`public abstract class ECSComponent extends Object`

**Kind:** class · **Package:** zombie.characters.ecs

## Inheritance
- java.lang.Object
- zombie.characters.ecs.ECSComponent

## Constructors

### public ECSComponent()

## Methods

### public Class<? extends ECSComponent> getECSClass()

**Returns:** `Class<? extends ECSComponent>`

### public static Class<? extends ECSComponent> getECSClass(Class<? extends ECSComponent> clazz)

**Parameters:**
- `Class<? extends ECSComponent>` `clazz`

**Returns:** `Class<? extends ECSComponent>`

### public ECSEntity getECSOwnerEntity()

**Returns:** `ECSEntity`

### public <EntityType extends ECSEntity> void setECSOwnerEntity(EntityType ownerEntity)

**Returns:** `void`

### public <EntityType extends ECSEntity> EntityType getECSOwnerEntity(Class<EntityType> entityTypeClass)

**Returns:** `EntityType`

### public <EntityType extends ECSEntity> EntityType tryGetECSOwnerEntity(Class<EntityType> entityTypeClass)

**Returns:** `EntityType`

### public <OwnerType> OwnerType tryGetECSOwnerEntityAs(Class<? extends OwnerType> ownerTypeClass)

**Returns:** `OwnerType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ecs\ECSComponent.html`*
