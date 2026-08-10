---
title: zombie.network.fields.INetworkPacketField
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.network.fields
---

# zombie.network.fields.INetworkPacketField

`public interface INetworkPacketField extends IDescriptor`

**Kind:** interface · **Package:** zombie.network.fields

## Methods

### void parse(ByteBufferReader var1,
IConnection var2)

**Parameters:**
- `ByteBufferReader` `var1`
- `IConnection` `var2`

**Returns:** `void`

### void write(ByteBufferWriter arg0)

**Parameters:**
- `ByteBufferWriter` `arg0`

**Returns:** `void`

### default int getPacketSizeBytes()

**Returns:** `int`

### default boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\INetworkPacketField.html`*
