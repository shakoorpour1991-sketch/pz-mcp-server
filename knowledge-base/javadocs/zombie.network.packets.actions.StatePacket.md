---
title: zombie.network.packets.actions.StatePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.actions
---

# zombie.network.packets.actions.StatePacket

`public class StatePacket extends Position implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.actions

## Inheritance
- java.lang.Object
- zombie.network.fields.Position
- zombie.network.packets.actions.StatePacket

## Fields

### public long timestamp

## Constructors

### public StatePacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public boolean isAway()

**Returns:** `boolean`

### public boolean isReady()

**Returns:** `boolean`

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public State getState()

**Returns:** `State`

### public State.Stage getStage()

**Returns:** `State.Stage`

### public Variables getEvents()

**Returns:** `Variables`

### public void update(StatePacket packet)

**Parameters:**
- `StatePacket` `packet`

**Returns:** `void`

### public void apply()

**Returns:** `void`

### public boolean shouldInstantiate()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\actions\StatePacket.html`*
