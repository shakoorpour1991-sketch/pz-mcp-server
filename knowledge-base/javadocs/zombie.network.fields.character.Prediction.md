---
title: zombie.network.fields.character.Prediction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.character
---

# zombie.network.fields.character.Prediction

`public class Prediction extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.fields.character

## Inheritance
- java.lang.Object
- zombie.network.fields.character.Prediction

## Fields

### public byte type

### public float x

### public float y

### public byte z

### public float direction

### public float moveDirection

### public float speed

### public byte distance

### public float pathFindX

### public float pathFindY

### public final Vector3 position

### public float predictionTimeRemaining

### public static final float DISTANCE_SCALE

### public static final byte MAX_LERP_DISTANCE

## Constructors

### public Prediction()

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

### public void copy(Prediction other)

**Parameters:**
- `Prediction` `other`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void updateLerp(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\character\Prediction.html`*
