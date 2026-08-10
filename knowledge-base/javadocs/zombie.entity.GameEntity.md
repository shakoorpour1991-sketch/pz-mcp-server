---
title: zombie.entity.GameEntity
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.GameEntity

`public abstract class GameEntity extends Object`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity

## Fields

### public static final String DEFAULT_ENTITY_DISPLAY_NAME

## Constructors

### public GameEntity()

## Methods

### public static String getDefaultEntityDisplayName()

**Returns:** `String`

### public abstract GameEntityType getGameEntityType()

**Returns:** `GameEntityType`

### public abstract IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public abstract long getEntityNetID()

**Returns:** `long`

### public abstract float getX()

**Returns:** `float`

### public abstract float getY()

**Returns:** `float`

### public abstract float getZ()

**Returns:** `float`

### public final int getXi()

**Returns:** `int`

### public final int getYi()

**Returns:** `int`

### public final int getZi()

**Returns:** `int`

### public abstract boolean isEntityValid()

**Returns:** `boolean`

### public boolean isValidEngineEntity()

**Returns:** `boolean`

### public boolean isMeta()

**Returns:** `boolean`

### public boolean isOutside()

**Returns:** `boolean`

### public String getEntityDisplayName()

**Returns:** `String`

### public String getEntityFullTypeDebug()

**Returns:** `String`

### public GameEntityScript getEntityScript()

**Returns:** `GameEntityScript`

### public final String getExceptionCompatibleString()

**Returns:** `String`

### public final AttributeContainer attrib()

**Returns:** `AttributeContainer`

### public final AttributeContainer getAttributes()

**Returns:** `AttributeContainer`

### public final FluidContainer getFluidContainer()

**Returns:** `FluidContainer`

### public final Durability getDurabilityComponent()

**Returns:** `Durability`

### public final SpriteConfig getSpriteConfig()

**Returns:** `SpriteConfig`

### public final boolean isAddedToEngine()

**Returns:** `boolean`

### public final boolean isRemovingFromEngine()

**Returns:** `boolean`

### public final boolean isScheduledForEngineRemoval()

**Returns:** `boolean`

### public final boolean isScheduledForBucketUpdate()

**Returns:** `boolean`

### public boolean hasRenderers()

**Returns:** `boolean`

### public final boolean hasComponents()

**Returns:** `boolean`

### public final boolean hasComponent(ComponentType type)

**Parameters:**
- `ComponentType` `type`

**Returns:** `boolean`

### public final boolean hasComponentAny(ComponentType... types)

**Parameters:**
- `ComponentType...` `types`

**Returns:** `boolean`

### public final int componentSize()

**Returns:** `int`

### public final Component getComponentForIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `Component`

### public final <T extends Component> T getComponent(ComponentType type)

**Returns:** `T`

### public final <T extends Component> T getComponentAny(ComponentType... types)

**Returns:** `T`

### public final Component getComponentFromID(short id)

**Parameters:**
- `short` `id`

**Returns:** `Component`

### public final boolean containsComponent(Component component)

**Parameters:**
- `Component` `component`

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public void onEquip()

**Returns:** `void`

### public void onEquip(boolean register)

**Parameters:**
- `boolean` `register`

**Returns:** `void`

### public void onUnEquip()

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public final void removeFromWorld(boolean offloadEntityToMeta)

**Parameters:**
- `boolean` `offloadEntityToMeta`

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void renderlastComponents()

**Returns:** `void`

### public final boolean requiresEntitySave()

**Returns:** `boolean`

### public final void saveEntity(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public final void loadEntity(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public final void loadEntity(ByteBuffer input,
int worldVersion,
List<Component> loaded)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `List<Component>` `loaded`

**Returns:** `void`

### public boolean isUsingPlayer(IsoPlayer target)

**Parameters:**
- `IsoPlayer` `target`

**Returns:** `boolean`

### public IsoPlayer getUsingPlayer()

**Returns:** `IsoPlayer`

### public void setUsingPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public final void sendSyncEntity(UdpConnection ignoreConnection)

**Parameters:**
- `UdpConnection` `ignoreConnection`

**Returns:** `void`

### public final void sendRequestSyncGameEntity()

**Returns:** `void`

### public void onFluidContainerUpdate()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\GameEntity.html`*
