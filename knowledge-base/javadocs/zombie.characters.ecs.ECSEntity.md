---
title: zombie.characters.ecs.ECSEntity
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters.ecs
---

# zombie.characters.ecs.ECSEntity

`public interface ECSEntity`

**Kind:** interface · **Package:** zombie.characters.ecs

## Methods

### HashMap<Class<? extends ECSComponent>, ECSComponent> getECSComponentMap()

**Returns:** `HashMap<Class<? extends ECSComponent>, ECSComponent>`

### default void registerECSComponents()

**Returns:** `void`

### default void frameStep()

**Returns:** `void`

### default int getFrameNo()

**Returns:** `int`

### default void onInGameStateEnter()

**Returns:** `void`

### default void onGameLoadingStateEnter()

**Returns:** `void`

### default <ComponentType extends ECSComponent>
ComponentType getECSComponent(Class<ComponentType> componentTypeClass)

**Returns:** `ComponentType`

### default <ComponentType extends ECSComponent> void setECSComponent(ComponentType component)

**Returns:** `void`

### default <ComponentType extends ECSComponent> void removeECSComponent(ComponentType component)

**Returns:** `void`

### default <ComponentType extends ECSComponent> void removeECSComponent(Class<ComponentType> componentClass)

**Returns:** `void`

### default <ComponentType extends ECSComponent>
ComponentType tryGetECSComponent(Class<ComponentType> componentTypeClass)

**Returns:** `ComponentType`

### default boolean hasECSComponent(Class<? extends ECSComponent> componentTypeClass)

**Parameters:**
- `Class<? extends ECSComponent>` `componentTypeClass`

**Returns:** `boolean`

### default boolean hasECSComponent(ECSComponent component)

**Parameters:**
- `ECSComponent` `component`

**Returns:** `boolean`

### default <ST> void visitAllComponents(Class<? extends ST> instanceOf,
Consumer<ST> visitor)

**Returns:** `void`

### default <ST,P1> void visitAllComponents(Class<? extends ST> instanceOf,
BiConsumer<ST,P1> visitor,
P1 param1)

**Returns:** `void`

### static void checkParameterNotNull(Object parameter,
String parameterName)

**Parameters:**
- `Object` `parameter`
- `String` `parameterName`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ecs\ECSEntity.html`*
