---
title: zombie.network.packets.character.PlayerPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.PlayerPacket

`public class PlayerPacket extends Object implements INetworkPacket, AntiCheatPower.IAntiCheat, AntiCheatSpeed.IAntiCheat, AntiCheatNoClip.IAntiCheat, AntiCheatPlayer.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.PlayerPacket

## Fields

### public static final int PACKET_SIZE_BYTES

### public final PlayerID id

### public final Prediction prediction

### public short booleanVariables

### public boolean disconnected

### public final VehicleID hitVehicleId

### public final PlayerVariables variables

## Constructors

### public PlayerPacket()

## Methods

### public int getPacketSizeBytes()

**Returns:** `int`

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

### public PacketTypes.PacketType set(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `PacketTypes.PacketType`

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

### public short getBooleanVariables()

**Returns:** `short`

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public short getPlayerId()

**Returns:** `short`

### public IMovable getMovable(int index)

**Parameters:**
- `int` `index`

**Returns:** `IMovable`

### public int getMovableCount()

**Returns:** `int`

### public byte getPlayerIndex()

**Returns:** `byte`

### public Vector3 getPosition(Vector3 position)

**Parameters:**
- `Vector3` `position`

**Returns:** `Vector3`

### public boolean validateHitVehicleDistance()

**Returns:** `boolean`

### public void resetMovable()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\PlayerPacket.html`*
