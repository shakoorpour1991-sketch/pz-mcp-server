---
title: zombie.network.fields.hit.WeaponHit
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.WeaponHit

`public class WeaponHit extends Hit implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.Hit
- zombie.network.fields.hit.WeaponHit

## Constructors

### public WeaponHit()

## Methods

### public void set(float damage,
float range,
float hitForce,
float hitDirectionX,
float hitDirectionY,
boolean hitHead,
boolean hitLegs,
boolean removeKnife)

**Parameters:**
- `float` `damage`
- `float` `range`
- `float` `hitForce`
- `float` `hitDirectionX`
- `float` `hitDirectionY`
- `boolean` `hitHead`
- `boolean` `hitLegs`
- `boolean` `removeKnife`

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

### public void process(IsoGameCharacter wielder,
IsoGameCharacter target,
HandWeapon weapon,
boolean ignore)

**Parameters:**
- `IsoGameCharacter` `wielder`
- `IsoGameCharacter` `target`
- `HandWeapon` `weapon`
- `boolean` `ignore`

**Returns:** `void`

### public boolean isHitHead()

**Returns:** `boolean`

### public boolean isHitLegs()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\WeaponHit.html`*
