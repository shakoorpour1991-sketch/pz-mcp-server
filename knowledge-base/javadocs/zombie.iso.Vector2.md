---
title: zombie.iso.Vector2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.Vector2

`public final class Vector2 extends Object implements Cloneable`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.Vector2

## Fields

### public float x

The horizontal part of this vector

### public float y

The vertical part of this vector

## Constructors

### public Vector2()

Create a new vector with zero length

### public Vector2(Vector2 other)

Create a new vector which is identical to another vector

**Parameters:**
- `Vector2` `other`

### public Vector2(float x,
float y)

Create a new vector with specified horizontal and vertical parts

**Parameters:**
- `float` `x` — The vertical part
- `float` `y`

## Methods

### public static Vector2 fromLengthDirection(float length,
float direction)

Create a new vector with a specified length and direction

**Parameters:**
- `float` `length` — The length of the new vector
- `float` `direction` — The direction of the new vector, in radians

**Returns:** `Vector2`

### public static float dot(float x,
float y,
float tx,
float ty)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `tx`
- `float` `ty`

**Returns:** `float`

### public static Vector2 addScaled(Vector2 a,
Vector2 b,
float scale,
Vector2 result)

Result = a + b * scale

**Parameters:**
- `Vector2` `a`
- `Vector2` `b`
- `float` `scale`
- `Vector2` `result`

**Returns:** `Vector2`

### public void rotate(float radians)

**Parameters:**
- `float` `radians`

**Returns:** `void`

### public Vector2 add(Vector2 other)

Add another vector to this one and return this

**Parameters:**
- `Vector2` `other` — The other Vector2 to add to this one

**Returns:** `Vector2`

### public Vector2 aimAt(Vector2 other)

Set the direction of this vector to point to another vector, maintaining the length

**Parameters:**
- `Vector2` `other` — The Vector2 to point this one at.

**Returns:** `Vector2`

### public float angleTo(Vector2 other)

Calculate the angle between this point and another

**Parameters:**
- `Vector2` `other` — The second point as vector

**Returns:** `float`

### public float angleBetween(Vector2 other)

Calculate angle between this and other vectors

**Parameters:**
- `Vector2` `other` — The other vector

**Returns:** `float`

### public Vector2 clone()

Clone this vector

**Returns:** `Vector2`

### public float distanceTo(Vector2 other)

Calculate the distance between this point and another

**Parameters:**
- `Vector2` `other` — The second point as vector

**Returns:** `float`

### public float dot(Vector2 other)

**Parameters:**
- `Vector2` `other`

**Returns:** `float`

### public float dot(float otherX,
float otherY)

**Parameters:**
- `float` `otherX`
- `float` `otherY`

**Returns:** `float`

### public boolean equals(Object other)

See if this vector is equal to another

**Parameters:**
- `Object` `other` — A Vector2 to compare this one to

**Returns:** `boolean`

### public float getDirection()

**Returns:** `float`

### public static float getDirection(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### @Deprecated
public float getDirectionNeg()

> ⚠️ **Deprecated**

get the direction in which this vector is pointing
Note: if the length of this vector is 0, then the direction will also be 0

**Returns:** `float`

### public Vector2 setDirection(float directionRadians)

Set the direction of this vector, maintaining the length

**Parameters:**
- `float` `directionRadians` — The new direction of this vector, in radians

**Returns:** `Vector2`

### public float getLength()

get the length of this vector

**Returns:** `float`

### public float getLengthSquared()

get the squared length of this vector

**Returns:** `float`

### public Vector2 setLength(float length)

Set the length of this vector, maintaining the direction

**Parameters:**
- `float` `length` — The length of this vector

**Returns:** `Vector2`

### public float setMaxLength(float maxLength)

**Parameters:**
- `float` `maxLength`

**Returns:** `float`

### public float normalize()

**Returns:** `float`

### public Vector2 set(Vector2 other)

Make this vector identical to another vector

**Parameters:**
- `Vector2` `other` — The Vector2 to copy

**Returns:** `Vector2`

### public Vector2 set(float x,
float y)

Set the horizontal and vertical parts of this vector

**Parameters:**
- `float` `x` — The horizontal part
- `float` `y` — The vertical part

**Returns:** `Vector2`

### public Vector2 setLengthAndDirection(float direction,
float length)

Set the length and direction of this vector

**Parameters:**
- `float` `direction` — The direction of this vector, in radians
- `float` `length` — The length of this vector

**Returns:** `Vector2`

### public Vector2 mul(float m)

**Parameters:**
- `float` `m`

**Returns:** `Vector2`

### public String toString()

**Returns:** `String`

### public float getX()

**Returns:** `float`

### public void setX(float x)

**Parameters:**
- `float` `x` — the x to set

**Returns:** `void`

### public float getY()

**Returns:** `float`

### public void setY(float y)

**Parameters:**
- `float` `y` — the y to set

**Returns:** `void`

### public int floorX()

**Returns:** `int`

### public int floorY()

**Returns:** `int`

### public void tangent()

**Returns:** `void`

### public void scale(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

### public static Vector2 scale(Vector2 val,
float scale)

**Parameters:**
- `Vector2` `val`
- `float` `scale`

**Returns:** `Vector2`

### public static Vector2 moveTowards(Vector2 currentVector,
Vector2 targetVector,
float maxDistanceDelta)

**Parameters:**
- `Vector2` `currentVector`
- `Vector2` `targetVector`
- `float` `maxDistanceDelta`

**Returns:** `Vector2`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\Vector2.html`*
