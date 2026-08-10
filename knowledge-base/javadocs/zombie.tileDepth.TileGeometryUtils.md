---
title: zombie.tileDepth.TileGeometryUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileGeometryUtils

`public final class TileGeometryUtils extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileGeometryUtils

## Constructors

### public TileGeometryUtils()

## Methods

### public static float getDepthOnBoxAt(float tileX,
float tileY,
org.joml.Vector3f center,
org.joml.Vector3f rotation,
org.joml.Vector3f min,
org.joml.Vector3f max)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `center`
- `org.joml.Vector3f` `rotation`
- `org.joml.Vector3f` `min`
- `org.joml.Vector3f` `max`

**Returns:** `float`

### public static float getDepthOnCylinderAt(float tileX,
float tileY,
org.joml.Vector3f center,
org.joml.Vector3f rotation,
float radius,
float zLength)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `center`
- `org.joml.Vector3f` `rotation`
- `float` `radius`
- `float` `zLength`

**Returns:** `float`

### public static float getDepthOnPlaneAt(float tileX,
float tileY,
UI3DScene.GridPlane gridPlane,
org.joml.Vector3f planePoint)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `UI3DScene.GridPlane` `gridPlane`
- `org.joml.Vector3f` `planePoint`

**Returns:** `float`

### public static float getDepthOnPlaneAt(float tileX,
float tileY,
org.joml.Vector3f planePoint,
org.joml.Vector3f planeNormal)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `planePoint`
- `org.joml.Vector3f` `planeNormal`

**Returns:** `float`

### public static float getDepthOnPlaneAt(float tileX,
float tileY,
org.joml.Vector3f planePoint,
org.joml.Vector3f planeNormal,
org.joml.Vector3f pointOnPlane)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `planePoint`
- `org.joml.Vector3f` `planeNormal`
- `org.joml.Vector3f` `pointOnPlane`

**Returns:** `float`

### public static float getNormalizedDepthOnBoxAt(float tileX,
float tileY,
org.joml.Vector3f center,
org.joml.Vector3f rotation,
org.joml.Vector3f min,
org.joml.Vector3f max)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `center`
- `org.joml.Vector3f` `rotation`
- `org.joml.Vector3f` `min`
- `org.joml.Vector3f` `max`

**Returns:** `float`

### public static float getNormalizedDepthOnCylinderAt(float tileX,
float tileY,
org.joml.Vector3f center,
org.joml.Vector3f rotation,
float radius,
float zLength)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `center`
- `org.joml.Vector3f` `rotation`
- `float` `radius`
- `float` `zLength`

**Returns:** `float`

### public static float getNormalizedDepthOnPlaneAt(float tileX,
float tileY,
org.joml.Vector3f planePoint,
org.joml.Vector3f planeNormal)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `org.joml.Vector3f` `planePoint`
- `org.joml.Vector3f` `planeNormal`

**Returns:** `float`

### public static float getNormalizedDepthOnPlaneAt(float tileX,
float tileY,
UI3DScene.GridPlane gridPlane,
org.joml.Vector3f planePoint)

**Parameters:**
- `float` `tileX`
- `float` `tileY`
- `UI3DScene.GridPlane` `gridPlane`
- `org.joml.Vector3f` `planePoint`

**Returns:** `float`

### public static UI3DScene.Ray getCameraRay(float uiX,
float uiY,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView,
int viewWidth,
int viewHeight,
UI3DScene.Ray cameraRay)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`
- `int` `viewWidth`
- `int` `viewHeight`
- `UI3DScene.Ray` `cameraRay`

**Returns:** `UI3DScene.Ray`

### public static boolean intersectRayAab(float originX,
float originY,
float originZ,
float dirX,
float dirY,
float dirZ,
float minX,
float minY,
float minZ,
float maxX,
float maxY,
float maxZ,
org.joml.Vector2f result)

**Parameters:**
- `float` `originX`
- `float` `originY`
- `float` `originZ`
- `float` `dirX`
- `float` `dirY`
- `float` `dirZ`
- `float` `minX`
- `float` `minY`
- `float` `minZ`
- `float` `maxX`
- `float` `maxY`
- `float` `maxZ`
- `org.joml.Vector2f` `result`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileGeometryUtils.html`*
