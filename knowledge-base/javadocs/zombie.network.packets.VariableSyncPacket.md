---
title: zombie.network.packets.VariableSyncPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.VariableSyncPacket

`public class VariableSyncPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.VariableSyncPacket

## Fields

### public PlayerID player

### public String key

### public String value

### public boolean boolValue

### public float floatValue

### public VariableSyncPacket.VariableType varType

### public static HashSet<String> syncedVariables

## Constructors

### public VariableSyncPacket()

## Methods

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

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\VariableSyncPacket.html`*
