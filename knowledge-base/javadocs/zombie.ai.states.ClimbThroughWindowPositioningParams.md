---
title: zombie.ai.states.ClimbThroughWindowPositioningParams
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.ClimbThroughWindowPositioningParams

`public final class ClimbThroughWindowPositioningParams extends PooledObject implements INetworkPacketField`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.ai.states.ClimbThroughWindowPositioningParams

## Fields

### public boolean canClimb

### public IsoDirections climbDir

### public IsoGameCharacter climbingCharacter

### public IsoObject windowObject

### public int z

### public int startX

### public int startY

### public int endX

### public int endY

### public int oppositeX

### public int oppositeY

### public boolean scratch

### public boolean isCounter

### public boolean isFloor

### public boolean isSheetRope

## Methods

### public void onReleased()

**Returns:** `void`

### public static ClimbThroughWindowPositioningParams alloc()

**Returns:** `ClimbThroughWindowPositioningParams`

### public static void release(ClimbThroughWindowPositioningParams params)

**Parameters:**
- `ClimbThroughWindowPositioningParams` `params`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void write(ByteBuffer b)

**Parameters:**
- `ByteBuffer` `b`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\ClimbThroughWindowPositioningParams.html`*
