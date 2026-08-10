---
title: zombie.entity.GameEntityType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.entity
---

# zombie.entity.GameEntityType

`public enum GameEntityType extends Enum<GameEntityType> implements IOEnum`

**Kind:** enum · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- java.lang.Enum<GameEntityType>
- zombie.entity.GameEntityType

## Fields

### public static final GameEntityType IsoObject

### public static final GameEntityType InventoryItem

### public static final GameEntityType VehiclePart

### public static final GameEntityType IsoMovingObject

### public static final GameEntityType Template

### public static final GameEntityType MetaEntity

## Methods

### public static GameEntityType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `GameEntityType[]`

### public static GameEntityType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `GameEntityType`

### public byte getId()

**Returns:** `byte`

### public static GameEntityType FromID(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `GameEntityType`

### public byte getByteId()

**Returns:** `byte`

### public int getBits()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\GameEntityType.html`*
