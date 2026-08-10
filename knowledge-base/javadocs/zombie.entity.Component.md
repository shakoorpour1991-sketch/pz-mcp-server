---
title: zombie.entity.Component
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.Component

`public abstract class Component extends Object`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.Component

## Methods

### public String toString()

**Returns:** `String`

### public boolean isRunningInMeta()

**Returns:** `boolean`

### public boolean isQualifiesForMetaStorage()

**Returns:** `boolean`

### public final boolean isAddedToEngine()

**Returns:** `boolean`

### public final GameEntity getOwner()

**Returns:** `GameEntity`

### public final GameEntity getGameEntity()

**Returns:** `GameEntity`

### public final boolean isUsingPlayer(IsoPlayer target)

**Parameters:**
- `IsoPlayer` `target`

**Returns:** `boolean`

### public final IsoPlayer getUsingPlayer()

**Returns:** `IsoPlayer`

### public final ComponentType getComponentType()

**Returns:** `ComponentType`

### public final <T extends Component> T getComponent(ComponentType type)

**Returns:** `T`

### public boolean isValid()

**Returns:** `boolean`

### public void DoTooltip(ObjectTooltip tooltipUI)

**Parameters:**
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public final boolean isRenderLast()

**Returns:** `boolean`

### public int getRenderLastPriority()

**Returns:** `int`

### public void dumpContentsInSquare()

**Returns:** `void`

### public boolean isNoContainerOrEmpty()

**Returns:** `boolean`

### public boolean isValidOwnerType(GameEntityType type)

**Parameters:**
- `GameEntityType` `type`

**Returns:** `boolean`

### public final void sendServerPacketTo(IsoPlayer player,
EntityPacketData data)

**Parameters:**
- `IsoPlayer` `player`
- `EntityPacketData` `data`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\Component.html`*
