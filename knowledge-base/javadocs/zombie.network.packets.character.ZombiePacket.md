---
title: zombie.network.packets.character.ZombiePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.ZombiePacket

`public class ZombiePacket extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.ZombiePacket

## Fields

### public short id

### public byte update

### public float x

### public float y

### public short health

### public int outfitId

### public NetworkVariables.ZombieState realState

### public short target

### public short timeSinceSeenFlesh

### public short smParamTargetAngle

### public float dirAngleRads

### public short speedMod

### public NetworkVariables.WalkType walkType

### public byte predictionType

### public float realX

### public float realY

### public byte realZ

### public short booleanVariables

### public final PFBData pfb

### public final ObjectID reanimatedBodyId

### public byte z

### public PlayerID grappledBy

### public String sharedGrappleType

### public int skinTextureIndex

## Constructors

### public ZombiePacket()

## Methods

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public int getPacketSizeBytes()

**Returns:** `int`

### public void copy(ZombiePacket packet)

**Parameters:**
- `ZombiePacket` `packet`

**Returns:** `void`

### public void set(IsoZombie chr)

**Parameters:**
- `IsoZombie` `chr`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\ZombiePacket.html`*
