---
title: zombie.network.packets.BuildActionPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.BuildActionPacket

`public class BuildActionPacket extends BuildAction implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.core.BuildAction
- zombie.network.packets.BuildActionPacket

## Fields

### public long duration

## Constructors

### public BuildActionPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

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

### public void setTimeData()

**Returns:** `void`

### public void set(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void copyFrom(zombie.core.Action act)

**Parameters:**
- `zombie.core.Action` `act`

**Returns:** `void`

### public void setState(Transaction.TransactionState state)

**Parameters:**
- `Transaction.TransactionState` `state`

**Returns:** `void`

### public void setDuration(long duration)

**Parameters:**
- `long` `duration`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public float getProgress()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\BuildActionPacket.html`*
