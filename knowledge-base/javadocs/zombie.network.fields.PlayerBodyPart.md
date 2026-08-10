---
title: zombie.network.fields.PlayerBodyPart
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.PlayerBodyPart

`public class PlayerBodyPart extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.PlayerBodyPart

## Constructors

### public PlayerBodyPart()

## Methods

### public void set(BodyPart bodyPartx)

**Parameters:**
- `BodyPart` `bodyPartx`

**Returns:** `void`

### public void parse(ByteBuffer byteBuffer,
IsoGameCharacter character)

**Parameters:**
- `ByteBuffer` `byteBuffer`
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void parse(ByteBuffer var1,
UdpConnection var2)

**Parameters:**
- `ByteBuffer` `var1`
- `UdpConnection` `var2`

**Returns:** `void`

### public void write(ByteBufferWriter byteBufferWriter)

**Parameters:**
- `ByteBufferWriter` `byteBufferWriter`

**Returns:** `void`

### public String getDescription()

**Returns:** `String`

### public BodyPart getBodyPart()

**Returns:** `BodyPart`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\PlayerBodyPart.html`*
