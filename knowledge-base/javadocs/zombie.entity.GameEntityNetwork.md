---
title: zombie.entity.GameEntityNetwork
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.GameEntityNetwork

`public class GameEntityNetwork extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.GameEntityNetwork

## Constructors

### public GameEntityNetwork()

## Methods

### public static EntityPacketData createPacketData(EntityPacketType packetType)

**Parameters:**
- `EntityPacketType` `packetType`

**Returns:** `EntityPacketData`

### public static void sendPacketDataTo(IsoPlayer player,
EntityPacketData data,
GameEntity entity,
Component component)

**Parameters:**
- `IsoPlayer` `player`
- `EntityPacketData` `data`
- `GameEntity` `entity`
- `Component` `component`

**Returns:** `void`

### public static void sendPacketData(EntityPacketData data,
GameEntity entity,
Component component,
IConnection connection,
boolean isIgnoreConnection)

**Parameters:**
- `EntityPacketData` `data`
- `GameEntity` `entity`
- `Component` `component`
- `IConnection` `connection`
- `boolean` `isIgnoreConnection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\GameEntityNetwork.html`*
