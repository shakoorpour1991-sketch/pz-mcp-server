---
title: zombie.network.fields.hit.Weapon
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Weapon

`public class Weapon extends IDInteger implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.IDInteger
- zombie.network.fields.hit.Weapon

## Constructors

### public Weapon()

## Methods

### public void set(HandWeapon weapon)

**Parameters:**
- `HandWeapon` `weapon`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection,
IsoLivingCharacter character)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`
- `IsoLivingCharacter` `character`

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

### public HandWeapon getWeapon()

**Returns:** `HandWeapon`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Weapon.html`*
