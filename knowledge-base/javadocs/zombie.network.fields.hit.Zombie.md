---
title: zombie.network.fields.hit.Zombie
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Zombie

`public class Zombie extends Character implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.character.CharacterID
- zombie.network.fields.hit.Character
- zombie.network.fields.hit.Zombie

## Constructors

### public Zombie()

## Methods

### public void set(IsoZombie zombie,
boolean isHelmetFall)

**Parameters:**
- `IsoZombie` `zombie`
- `boolean` `isHelmetFall`

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

### public void process()

**Returns:** `void`

### public void react(HandWeapon weapon)

**Parameters:**
- `HandWeapon` `weapon`

**Returns:** `void`

### public IsoZombie getZombie()

**Returns:** `IsoZombie`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Zombie.html`*
