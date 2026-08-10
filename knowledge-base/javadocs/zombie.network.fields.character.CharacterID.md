---
title: zombie.network.fields.character.CharacterID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.character
---

# zombie.network.fields.character.CharacterID

`public class CharacterID extends Object implements INetworkPacketField, IPositional`

**Kind:** class · **Package:** zombie.network.fields.character

## Inheritance
- java.lang.Object
- zombie.network.fields.character.CharacterID

## Fields

### public static final byte UNKNOWN

### public static final byte PLAYER

### public static final byte ZOMBIE

### public static final byte ANIMAL

## Constructors

### public CharacterID()

## Methods

### public void set(short id,
byte type)

**Parameters:**
- `short` `id`
- `byte` `type`

**Returns:** `void`

### public void set(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public CharacterID clone()

**Returns:** `CharacterID`

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

### public void write(ByteBuffer b)

**Parameters:**
- `ByteBuffer` `b`

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

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public short getID()

**Returns:** `short`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\character\CharacterID.html`*
