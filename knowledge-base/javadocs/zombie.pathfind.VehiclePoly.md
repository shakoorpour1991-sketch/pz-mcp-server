---
title: zombie.pathfind.VehiclePoly
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.VehiclePoly

`public final class VehiclePoly extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.VehiclePoly

## Fields

### public Transform t

### public float x1

### public float y1

### public float x2

### public float y2

### public float x3

### public float y3

### public float x4

### public float y4

### public float z

### public final Vector2[] borders

## Constructors

### public VehiclePoly()

## Methods

### public VehiclePoly init(VehiclePoly other)

**Parameters:**
- `VehiclePoly` `other`

**Returns:** `VehiclePoly`

### public VehiclePoly init(BaseVehicle vehicle,
float radius)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `radius`

**Returns:** `VehiclePoly`

### public static Vector2 lineIntersection(Vector2 start1,
Vector2 end1,
Vector2 start2,
Vector2 end2)

**Parameters:**
- `Vector2` `start1`
- `Vector2` `end1`
- `Vector2` `start2`
- `Vector2` `end2`

**Returns:** `Vector2`

### public boolean containsPoint(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean isEqual(VehiclePoly other)

**Parameters:**
- `VehiclePoly` `other`

**Returns:** `boolean`

### public void toByteBuffer(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\VehiclePoly.html`*
