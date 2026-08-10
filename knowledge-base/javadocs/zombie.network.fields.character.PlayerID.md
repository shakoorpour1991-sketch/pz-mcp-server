---
title: zombie.network.fields.character.PlayerID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.character
---

# zombie.network.fields.character.PlayerID

`public class PlayerID extends IDShort implements INetworkPacketField, IPositional`

**Kind:** class · **Package:** zombie.network.fields.character

## Inheritance
- java.lang.Object
- zombie.network.fields.IDShort
- zombie.network.fields.character.PlayerID

## Constructors

### public PlayerID()

## Methods

### public void set(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void clear()

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

### public void write(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public void copy(PlayerID other)

**Parameters:**
- `PlayerID` `other`

**Returns:** `void`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public byte getPlayerIndex()

**Returns:** `byte`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\character\PlayerID.html`*
