---
title: zombie.core.physics.PhysicsDebugRenderer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.PhysicsDebugRenderer

`public final class PhysicsDebugRenderer extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.core.physics.PhysicsDebugRenderer

## Constructors

### public PhysicsDebugRenderer()

## Methods

### public static PhysicsDebugRenderer alloc()

**Returns:** `PhysicsDebugRenderer`

### public void release()

**Returns:** `void`

### public void init(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void addRagdollRender(RagdollController ragdollController)

**Parameters:**
- `RagdollController` `ragdollController`

**Returns:** `void`

### public static void addBallisticsRender(BallisticsController ballisticsController)

**Parameters:**
- `BallisticsController` `ballisticsController`

**Returns:** `void`

### public static void addBallisticsRender(BallisticsTarget ballisticsTarget)

**Parameters:**
- `BallisticsTarget` `ballisticsTarget`

**Returns:** `void`

### public static void removeRagdollRender(RagdollController ragdollController)

**Parameters:**
- `RagdollController` `ragdollController`

**Returns:** `void`

### public static void removeBallisticsRender(BallisticsTarget ballisticsTarget)

**Parameters:**
- `BallisticsTarget` `ballisticsTarget`

**Returns:** `void`

### public static void addVehicleRender(BaseVehicle baseVehicle)

**Parameters:**
- `BaseVehicle` `baseVehicle`

**Returns:** `void`

### public static void removeVehicleRender(BaseVehicle baseVehicle)

**Parameters:**
- `BaseVehicle` `baseVehicle`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void postRender()

**Returns:** `void`

### public float YToScreenExact(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public float XToScreenExact(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public void drawLine(float fromX,
float fromY,
float fromZ,
float toX,
float toY,
float toZ,
float fromR,
float fromG,
float fromB,
float toR,
float toG,
float toB)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `fromZ`
- `float` `toX`
- `float` `toY`
- `float` `toZ`
- `float` `fromR`
- `float` `fromG`
- `float` `fromB`
- `float` `toR`
- `float` `toG`
- `float` `toB`

**Returns:** `void`

### public void drawSphere(float pX,
float pY,
float pZ,
float radius,
float r,
float g,
float b)

**Parameters:**
- `float` `pX`
- `float` `pY`
- `float` `pZ`
- `float` `radius`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void drawTriangle(float aX,
float aY,
float aZ,
float bX,
float bY,
float bZ,
float cX,
float cY,
float cZ,
float r,
float g,
float b,
float alpha)

**Parameters:**
- `float` `aX`
- `float` `aY`
- `float` `aZ`
- `float` `bX`
- `float` `bY`
- `float` `bZ`
- `float` `cX`
- `float` `cY`
- `float` `cZ`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `alpha`

**Returns:** `void`

### public void drawContactPoint(float pointOnBX,
float pointOnBY,
float pointOnBZ,
float normalOnBX,
float normalOnBY,
float normalOnBZ,
float distance,
int lifeTime,
float r,
float g,
float b)

**Parameters:**
- `float` `pointOnBX`
- `float` `pointOnBY`
- `float` `pointOnBZ`
- `float` `normalOnBX`
- `float` `normalOnBY`
- `float` `normalOnBZ`
- `float` `distance`
- `int` `lifeTime`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void drawCapsule(float radius,
float halfHeight,
int upAxis,
float pX,
float pY,
float pZ,
float rX,
float rY,
float rZ,
float qZ,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `radius`
- `float` `halfHeight`
- `int` `upAxis`
- `float` `pX`
- `float` `pY`
- `float` `pZ`
- `float` `rX`
- `float` `rY`
- `float` `rZ`
- `float` `qZ`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void n_debugDrawWorld(int arg0,
int arg1,
int arg2,
int arg3)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`
- `int` `arg3`

**Returns:** `void`

### public void renderRagdoll(int arg0,
int arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `void`

### public void renderBallistics(int arg0,
int arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `void`

### public void renderBallisticsTarget(int arg0,
int arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `void`

### public void renderVehicle(int arg0,
int arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\PhysicsDebugRenderer.html`*
