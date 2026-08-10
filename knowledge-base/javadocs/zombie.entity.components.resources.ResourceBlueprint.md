---
title: zombie.entity.components.resources.ResourceBlueprint
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.ResourceBlueprint

`public class ResourceBlueprint extends Object`

**Kind:** class · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- zombie.entity.components.resources.ResourceBlueprint

## Fields

### public static final String serialElementSeparator

### public static final String serialSubSeparator

## Methods

### public static ResourceBlueprint alloc(String id,
ResourceType type,
ResourceIO io,
float capacity,
String filter,
ResourceChannel channel,
EnumBitStore<ResourceFlag> flags)

**Parameters:**
- `String` `id`
- `ResourceType` `type`
- `ResourceIO` `io`
- `float` `capacity`
- `String` `filter`
- `ResourceChannel` `channel`
- `EnumBitStore<ResourceFlag>` `flags`

**Returns:** `ResourceBlueprint`

### public static void release(ResourceBlueprint bp)

**Parameters:**
- `ResourceBlueprint` `bp`

**Returns:** `void`

### public String getId()

**Returns:** `String`

### public ResourceType getType()

**Returns:** `ResourceType`

### public ResourceIO getIO()

**Returns:** `ResourceIO`

### public float getCapacity()

**Returns:** `float`

### public boolean isStackAnyItem()

**Returns:** `boolean`

### public ResourceChannel getChannel()

**Returns:** `ResourceChannel`

### public boolean hasFlag(ResourceFlag flag)

**Parameters:**
- `ResourceFlag` `flag`

**Returns:** `boolean`

### public int getFlagBits()

**Returns:** `int`

### public String getFilter()

**Returns:** `String`

### public static String Serialize(ResourceBlueprint bp)

**Parameters:**
- `ResourceBlueprint` `bp`

**Returns:** `String`

### public static String Serialize(String id,
ResourceType type,
ResourceIO io,
float capacity,
boolean stackAnyItem,
String filter,
ResourceChannel channel,
EnumBitStore<ResourceFlag> flags)

**Parameters:**
- `String` `id`
- `ResourceType` `type`
- `ResourceIO` `io`
- `float` `capacity`
- `boolean` `stackAnyItem`
- `String` `filter`
- `ResourceChannel` `channel`
- `EnumBitStore<ResourceFlag>` `flags`

**Returns:** `String`

### public static ResourceBlueprint DeserializeFromScript(String serial)

**Parameters:**
- `String` `serial`

**Returns:** `ResourceBlueprint`

### public static ResourceBlueprint Deserialize(String serial)

**Parameters:**
- `String` `serial`

**Returns:** `ResourceBlueprint`

### public static ResourceBlueprint Deserialize(ResourceBlueprint bp,
String serial)

**Parameters:**
- `ResourceBlueprint` `bp`
- `String` `serial`

**Returns:** `ResourceBlueprint`

### public static ResourceBlueprint Deserialize(ResourceBlueprint bp,
String serial,
boolean flagsAsString)

**Parameters:**
- `ResourceBlueprint` `bp`
- `String` `serial`
- `boolean` `flagsAsString`

**Returns:** `ResourceBlueprint`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\ResourceBlueprint.html`*
