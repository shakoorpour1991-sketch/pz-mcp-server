---
title: zombie.entity.components.resources.ResourceChannel
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.ResourceChannel

`public enum ResourceChannel extends Enum<ResourceChannel> implements IOEnum`

**Kind:** enum · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- java.lang.Enum<ResourceChannel>
- zombie.entity.components.resources.ResourceChannel

## Fields

### public static final ResourceChannel NO_CHANNEL

### public static final ResourceChannel Channel_Red

### public static final ResourceChannel Channel_Yellow

### public static final ResourceChannel Channel_Blue

### public static final ResourceChannel Channel_Orange

### public static final ResourceChannel Channel_Green

### public static final ResourceChannel Channel_Purple

### public static final ResourceChannel Channel_Cyan

### public static final ResourceChannel Channel_Magenta

### public static final EnumBitStore<ResourceChannel> BitStoreAll

## Methods

### public static ResourceChannel[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `ResourceChannel[]`

### public static ResourceChannel valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `ResourceChannel`

### public byte getByteId()

**Returns:** `byte`

### public int getBits()

**Returns:** `int`

### public Color getColor()

**Returns:** `Color`

### public static ResourceChannel fromId(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `ResourceChannel`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\ResourceChannel.html`*
