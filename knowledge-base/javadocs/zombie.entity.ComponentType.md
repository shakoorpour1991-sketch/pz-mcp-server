---
title: zombie.entity.ComponentType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.entity
---

# zombie.entity.ComponentType

`public enum ComponentType extends Enum<ComponentType>`

**Kind:** enum · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- java.lang.Enum<ComponentType>
- zombie.entity.ComponentType

## Fields

### public static final ComponentType Attributes

### public static final ComponentType FluidContainer

### public static final ComponentType SpriteConfig

### public static final ComponentType Lua

### public static final ComponentType Parts

### public static final ComponentType Signals

### public static final ComponentType Script

### public static final ComponentType UiConfig

### public static final ComponentType CraftLogic

### public static final ComponentType FurnaceLogic

### public static final ComponentType TestComponent

### public static final ComponentType MashingLogic

### public static final ComponentType DryingLogic

### public static final ComponentType MetaTag

### public static final ComponentType Resources

### public static final ComponentType CraftBench

### public static final ComponentType CraftRecipe

### public static final ComponentType Durability

### public static final ComponentType DryingCraftLogic

### public static final ComponentType ContextMenuConfig

### public static final ComponentType SpriteOverlayConfig

### public static final ComponentType CraftBenchSounds

### public static final ComponentType WallCoveringConfig

### public static final ComponentType Undefined

### public static final int MAX_ID_INDEX

## Methods

### public static ComponentType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `ComponentType[]`

### public static ComponentType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `ComponentType`

### public short GetID()

**Returns:** `short`

### public boolean isAddToEngine()

**Returns:** `boolean`

### public boolean isRunInMeta()

**Returns:** `boolean`

### public boolean isRenderLast()

**Returns:** `boolean`

### public boolean isValidGameEntityType(GameEntityType type)

**Parameters:**
- `GameEntityType` `type`

**Returns:** `boolean`

### public Class<? extends Component> GetComponentClass()

**Returns:** `Class<? extends Component>`

### public Component CreateComponent()

**Returns:** `Component`

### public Component CreateComponentFromScript(ComponentScript script)

**Parameters:**
- `ComponentScript` `script`

**Returns:** `Component`

### public ComponentScript CreateComponentScript()

**Returns:** `ComponentScript`

### public static void ReleaseComponent(Component component)

**Parameters:**
- `Component` `component`

**Returns:** `void`

### public static ComponentType FromId(short id)

**Parameters:**
- `short` `id`

**Returns:** `ComponentType`

### public static ComponentType FromClass(Class<? extends Component> clazz)

**Parameters:**
- `Class<? extends Component>` `clazz`

**Returns:** `ComponentType`

### public static ArrayList<ComponentType> GetList()

**Returns:** `ArrayList<ComponentType>`

### public static BitSet getBitsFor(ComponentType... componentTypes)

**Parameters:**
- `ComponentType...` `componentTypes`

**Returns:** `BitSet`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\ComponentType.html`*
