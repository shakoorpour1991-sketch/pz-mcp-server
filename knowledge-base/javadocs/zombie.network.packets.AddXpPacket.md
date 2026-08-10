---
title: zombie.network.packets.AddXpPacket
source: Unofficial PZ JavaDocs 42.17.0
version: 42.17.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.AddXpPacket

`public class AddXpPacket extends Object implements INetworkPacket, AntiCheatXP.IAntiCheat, AntiCheatXPPlayer.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.AddXpPacket

## Fields

### public final PlayerID target

## Constructors

### public AddXpPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoPlayer target,
PerkFactory.Perk perk,
float amount)

**Parameters:**
- `IsoPlayer` `target`
- `PerkFactory.Perk` `perk`
- `float` `amount`

**Returns:** `void`

### public void set(IsoPlayer target,
PerkFactory.Perk perk,
float amount,
boolean noMultiplier)

**Parameters:**
- `IsoPlayer` `target`
- `PerkFactory.Perk` `perk`
- `float` `amount`
- `boolean` `noMultiplier`

**Returns:** `void`

### public void set(IsoPlayer target,
PerkFactory.Perk perk,
float amount,
boolean noMultiplier,
boolean showXP)

**Parameters:**
- `IsoPlayer` `target`
- `PerkFactory.Perk` `perk`
- `float` `amount`
- `boolean` `noMultiplier`
- `boolean` `showXP`

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

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public float getAmount()

**Returns:** `float`

### public static void addXp(UdpConnection connection,
IsoPlayer player,
PerkFactory.Perk perk,
float amount,
boolean noMultiplier,
boolean showXP)

**Parameters:**
- `UdpConnection` `connection`
- `IsoPlayer` `player`
- `PerkFactory.Perk` `perk`
- `float` `amount`
- `boolean` `noMultiplier`
- `boolean` `showXP`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.17.0 (42.17.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\AddXpPacket.html`*
