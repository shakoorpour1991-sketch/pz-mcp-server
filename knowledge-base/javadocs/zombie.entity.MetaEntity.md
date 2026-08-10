---
title: zombie.entity.MetaEntity
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.MetaEntity

`public class MetaEntity extends GameEntity`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.entity.MetaEntity

## Methods

### public final void saveMetaEntity(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public final void loadMetaEntity(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public GameEntityType getGameEntityType()

**Returns:** `GameEntityType`

### public GameEntityType getOriginalGameEntityType()

**Returns:** `GameEntityType`

### public boolean isEntityValid()

**Returns:** `boolean`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public long getEntityNetID()

**Returns:** `long`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public boolean isMeta()

**Returns:** `boolean`

### public boolean isOutside()

**Returns:** `boolean`

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

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\MetaEntity.html`*
