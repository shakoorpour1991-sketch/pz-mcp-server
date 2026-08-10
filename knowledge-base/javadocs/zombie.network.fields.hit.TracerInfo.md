---
title: zombie.network.fields.hit.TracerInfo
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.TracerInfo

`public class TracerInfo extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.TracerInfo

## Fields

### public boolean hasEndPosition

### public boolean hasSquare

### public float range

### public float endX

### public float endY

### public float endZ

## Constructors

### public TracerInfo()

## Methods

### public void set(float range)

**Parameters:**
- `float` `range`

**Returns:** `void`

### public void set(float range,
float endX,
float endY,
float endZ,
IsoGridSquare square)

**Parameters:**
- `float` `range`
- `float` `endX`
- `float` `endY`
- `float` `endZ`
- `IsoGridSquare` `square`

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

### public void process(IsoPlayer wielder)

**Parameters:**
- `IsoPlayer` `wielder`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\TracerInfo.html`*
