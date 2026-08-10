---
title: zombie.network.fields.hit.HitInfo
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.HitInfo

`public class HitInfo extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.HitInfo

## Fields

### public float x

### public float y

### public float z

### public float dot

### public float distSq

### public int chance

### public MovingObject object

### public NetObject window

## Constructors

### public HitInfo()

## Methods

### public HitInfo init(IsoMovingObject obj,
float dot,
float distSq,
float x,
float y,
float z)

**Parameters:**
- `IsoMovingObject` `obj`
- `float` `dot`
- `float` `distSq`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `HitInfo`

### public HitInfo init(IsoWindow obj,
float dot,
float distSq)

**Parameters:**
- `IsoWindow` `obj`
- `float` `dot`
- `float` `distSq`

**Returns:** `HitInfo`

### public HitInfo init(HitInfo other)

**Parameters:**
- `HitInfo` `other`

**Returns:** `HitInfo`

### public IsoMovingObject getObject()

**Returns:** `IsoMovingObject`

### public IsoWindow getWindow()

**Returns:** `IsoWindow`

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

### public int getPacketSizeBytes()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\HitInfo.html`*
