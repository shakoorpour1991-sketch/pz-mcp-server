---
title: zombie.entity.network.EntityPacketType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.entity.network
---

# zombie.entity.network.EntityPacketType

`public enum EntityPacketType extends Enum<EntityPacketType>`

**Kind:** enum · **Package:** zombie.entity.network

## Inheritance
- java.lang.Object
- java.lang.Enum<EntityPacketType>
- zombie.entity.network.EntityPacketType

## Fields

### public static final EntityPacketType UpdateUsingPlayer

### public static final EntityPacketType SyncGameEntity

### public static final EntityPacketType RequestSyncGameEntity

### public static final EntityPacketType CraftLogicSync

### public static final EntityPacketType CraftLogicSyncFull

### public static final EntityPacketType CraftLogicStartRequest

### public static final EntityPacketType CraftLogicStopRequest

### public static final EntityPacketType MashingLogicSync

### public static final EntityPacketType MashingLogicSyncFull

### public static final EntityPacketType MashingLogicStartRequest

### public static final EntityPacketType MashingLogicStopRequest

### public static final EntityPacketType ResourcesSync

## Methods

### public static EntityPacketType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `EntityPacketType[]`

### public static EntityPacketType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `EntityPacketType`

### public PacketGroup getGroup()

**Returns:** `PacketGroup`

### public boolean isEntityPacket()

**Returns:** `boolean`

### public boolean isComponentPacket()

**Returns:** `boolean`

### public void saveToByteBuffer(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void saveToByteBuffer(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public static EntityPacketType FromByteBuffer(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `EntityPacketType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\network\EntityPacketType.html`*
