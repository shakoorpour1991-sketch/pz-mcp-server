---
title: zombie.CollisionManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.CollisionManager

`public final class CollisionManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.CollisionManager

## Fields

### public ArrayList<CollisionManager.Contact> contactMap

### public static final CollisionManager instance

## Constructors

### public CollisionManager()

## Methods

### public CollisionManager.PolygonCollisionResult PolygonCollision(Vector2 velocity)

**Parameters:**
- `Vector2` `velocity`

**Returns:** `CollisionManager.PolygonCollisionResult`

### public float IntervalDistance(float minA,
float maxA,
float minB,
float maxB)

**Parameters:**
- `float` `minA`
- `float` `maxA`
- `float` `minB`
- `float` `maxB`

**Returns:** `float`

### public void initUpdate()

**Returns:** `void`

### public void AddContact(IsoMovingObject a,
IsoMovingObject b)

**Parameters:**
- `IsoMovingObject` `a`
- `IsoMovingObject` `b`

**Returns:** `void`

### public void ResolveContacts()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\CollisionManager.html`*
