---
title: zombie.network.fields.character.ZombieID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.character
---

# zombie.network.fields.character.ZombieID

`public class ZombieID extends IDShort implements INetworkPacketField, IPositional`

**Kind:** class · **Package:** zombie.network.fields.character

## Inheritance
- java.lang.Object
- zombie.network.fields.IDShort
- zombie.network.fields.character.ZombieID

## Constructors

### public ZombieID()

## Methods

### public void set(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

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

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public IsoZombie getZombie()

**Returns:** `IsoZombie`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\character\ZombieID.html`*
