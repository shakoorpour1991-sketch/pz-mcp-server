---
title: zombie.iso.Vector3
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.Vector3

`public final class Vector3 extends Object implements Cloneable`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.Vector3

## Fields

### public float x

The horizontal part of this vector

### public float y

The vertical part of this vector

### public float z

## Constructors

### public Vector3()

Create a new vector with zero length

### public Vector3(Vector3 other)

Create a new vector which is identical to another vector

**Parameters:**
- `Vector3` `other`

### public Vector3(float x,
float y,
float z)

Create a new vector with specified horizontal and vertical parts

**Parameters:**
- `float` `x` — The vertical part
- `float` `y`
- `float` `z`

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

### public void rotate(float rad)

**Parameters:**
- `float` `rad`

**Returns:** `void`

### public void rotatey(float rad)

**Parameters:**
- `float` `rad`

**Returns:** `void`

### public Vector2 add(Vector2 other)

Add another vector to this one and return as a new vector

**Parameters:**
- `Vector2` `other` — The other Vector2 to add to this one

**Returns:** `Vector2`

### public Vector3 addToThis(Vector2 other)

Add another vector to this one and store the result in this one

**Parameters:**
- `Vector2` `other` — The other Vector2 to add to this one

**Returns:** `Vector3`

### public Vector3 addToThis(Vector3 other)

**Parameters:**
- `Vector3` `other`

**Returns:** `Vector3`

### public Vector3 div(float scalar)

**Parameters:**
- `float` `scalar`

**Returns:** `Vector3`

### public Vector3 aimAt(Vector2 other)

Set the direction of this vector to point to another vector, maintaining the length

**Parameters:**
- `Vector2` `other` — The Vector2 to point this one at.

**Returns:** `Vector3`

### public float angleTo(Vector2 other)

Calculate the angle between this point and another

**Parameters:**
- `Vector2` `other` — The second point as vector

**Returns:** `float`

### public Vector3 clone()

Clone this vector

**Returns:** `Vector3`

### public float distanceTo(Vector2 other)

Calculate the distance between this point and another

**Parameters:**
- `Vector2` `other` — The second point as vector

**Returns:** `float`

### public float distanceTo(Vector3 other)

**Parameters:**
- `Vector3` `other`

**Returns:** `float`

### public float distanceTo(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public float dot(Vector2 other)

**Parameters:**
- `Vector2` `other`

**Returns:** `float`

### public float dot3d(Vector3 other)

**Parameters:**
- `Vector3` `other`

**Returns:** `float`

### public boolean equals(Object other)

See if this vector is equal to another

**Parameters:**
- `Object` `other` — A Vector2 to compare this one to

**Returns:** `boolean`

### public float getDirection()

get the direction in which this vector is pointing
Note: if the length of this vector is 0, then the direction will also be 0

**Returns:** `float`

### public Vector3 setDirection(float direction)

Set the direction of this vector, maintaining the length

**Parameters:**
- `float` `direction` — The new direction of this vector, in radians

**Returns:** `Vector3`

### public float getLength()

get the length of this vector

**Returns:** `float`

### public float getLengthSq()

get the length squared (L^2) of this vector

**Returns:** `float`

### public Vector3 setLength(float length)

Set the length of this vector, maintaining the direction

**Parameters:**
- `float` `length` — The length of this vector

**Returns:** `Vector3`

### public void normalize()

**Returns:** `void`

### public Vector3 set(Vector3 other)

Make this vector identical to another vector

**Parameters:**
- `Vector3` `other` — The Vector2 to copy

**Returns:** `Vector3`

### public Vector3 set(float x,
float y,
float z)

Set the horizontal and vertical parts of this vector

**Parameters:**
- `float` `x` — The horizontal part
- `float` `y` — The vertical part
- `float` `z`

**Returns:** `Vector3`

### public Vector3 setLengthAndDirection(float direction,
float length)

Set the length and direction of this vector

**Parameters:**
- `float` `direction` — The direction of this vector, in radians
- `float` `length` — The length of this vector

**Returns:** `Vector3`

### public String toString()

**Returns:** `String`

### public Vector3 sub(Vector3 val,
Vector3 out)

**Parameters:**
- `Vector3` `val`
- `Vector3` `out`

**Returns:** `Vector3`

### public static Vector3 sub(Vector3 a,
Vector3 b,
Vector3 out)

**Parameters:**
- `Vector3` `a`
- `Vector3` `b`
- `Vector3` `out`

**Returns:** `Vector3`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\Vector3.html`*
