---
title: zombie.network.packets.character.AnimalPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.AnimalPacket

`public class AnimalPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.AnimalPacket

## Fields

### public static final int PACKET_SIZE_BYTES

### public short flags

### public byte variables

### public NetworkVariables.ZombieState realState

### public byte location

### public byte hutchNestBox

### public byte hutchPosition

### public VehicleID vehicleId

### public String idleAction

### public String type

### public String breed

### public short alertedId

### public final Prediction prediction

### public int age

### public float milkQty

### public float woolQty

### public float weight

### public byte stress

### public byte acceptance

### public byte health

### public byte thirst

### public byte hunger

### public String customName

### public int squareX

### public int squareY

### public byte squareZ

### public final AnimalID mother

### public int pregnantTime

### public long lastTimeMilked

### public float maxMilkActual

### public int fertilizedTime

### public byte lastImpregnateTime

## Constructors

### public AnimalPacket()

## Methods

### public int getPacketSizeBytes()

**Returns:** `int`

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

### public boolean isDead()

**Returns:** `boolean`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\AnimalPacket.html`*
