---
title: zombie.network.fields.character.PFBData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.character
---

# zombie.network.fields.character.PFBData

`public class PFBData extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.character

## Inheritance
- java.lang.Object
- zombie.network.fields.character.PFBData

## Fields

### public PathFindBehavior2.Goal goal

### public final PlayerID target

### public final Position position

## Constructors

### public PFBData()

## Methods

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

### public void copy(PFBData other)

**Parameters:**
- `PFBData` `other`

**Returns:** `void`

### public boolean isCanceled()

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public void set(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void restore(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\character\PFBData.html`*
