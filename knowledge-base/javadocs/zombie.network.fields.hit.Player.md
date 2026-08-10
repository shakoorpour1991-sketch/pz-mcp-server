---
title: zombie.network.fields.hit.Player
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Player

`public class Player extends Character implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.character.CharacterID
- zombie.network.fields.hit.Character
- zombie.network.fields.hit.Player

## Constructors

### public Player()

## Methods

### public void set(IsoPlayer player,
boolean isCriticalHit)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `isCriticalHit`

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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void process()

**Returns:** `void`

### public void attack(HandWeapon weapon,
boolean isPVP,
byte shotID)

**Parameters:**
- `HandWeapon` `weapon`
- `boolean` `isPVP`
- `byte` `shotID`

**Returns:** `void`

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public boolean isRelevant(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Player.html`*
