---
title: zombie.network.fields.SafeHouseTitle
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.SafeHouseTitle

`public class SafeHouseTitle extends PlayerID implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.IDShort
- zombie.network.fields.character.PlayerID
- zombie.network.fields.SafeHouseTitle

## Constructors

### public SafeHouseTitle()

## Methods

### public void set(IsoPlayer player,
String title)

**Parameters:**
- `IsoPlayer` `player`
- `String` `title`

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

### public String getTitle()

**Returns:** `String`

### public String getUsername()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\SafeHouseTitle.html`*
