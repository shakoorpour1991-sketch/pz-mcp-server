---
title: zombie.vehicles.UI3DScene
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.UI3DScene

`public final class UI3DScene extends UIElement`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.vehicles.UI3DScene

## Fields

### public static final float Z_SCALE

## Constructors

### public UI3DScene(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public void render()

**Returns:** `void`

### public static UI3DScene.Ray allocRay()

**Returns:** `UI3DScene.Ray`

### public static void releaseRay(UI3DScene.Ray ray)

**Parameters:**
- `UI3DScene.Ray` `ray`

**Returns:** `void`

### public static UI3DScene.Plane allocPlane()

**Returns:** `UI3DScene.Plane`

### public static void releasePlane(UI3DScene.Plane plane)

**Parameters:**
- `UI3DScene.Plane` `plane`

**Returns:** `void`

### public Object fromLua0(String func)

**Parameters:**
- `String` `func`

**Returns:** `Object`

### public Object fromLua1(String func,
Object arg0)

**Parameters:**
- `String` `func`
- `Object` `arg0`

**Returns:** `Object`

### public Object fromLua2(String func,
Object arg0,
Object arg1)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `Object`

### public Object fromLua3(String func,
Object arg0,
Object arg1,
Object arg2)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `Object`

### public Object fromLua4(String func,
Object arg0,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `Object`

### public Object fromLua5(String func,
Object arg0,
Object arg1,
Object arg2,
Object arg3,
Object arg4)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`

**Returns:** `Object`

### public Object fromLua6(String func,
Object arg0,
Object arg1,
Object arg2,
Object arg3,
Object arg4,
Object arg5)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`
- `Object` `arg5`

**Returns:** `Object`

### public Object fromLua7(String func,
Object arg0,
Object arg1,
Object arg2,
Object arg3,
Object arg4,
Object arg5,
Object arg6)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`
- `Object` `arg5`
- `Object` `arg6`

**Returns:** `Object`

### public Object fromLua9(String func,
Object arg0,
Object arg1,
Object arg2,
Object arg3,
Object arg4,
Object arg5,
Object arg6,
Object arg7,
Object arg8)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`
- `Object` `arg5`
- `Object` `arg6`
- `Object` `arg7`
- `Object` `arg8`

**Returns:** `Object`

### public float uiToSceneX(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `float`

### public float uiToSceneY(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `float`

### public org.joml.Vector3f uiToScene(float uiX,
float uiY,
float uiZ,
org.joml.Vector3f out)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `uiZ`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f uiToScene(org.joml.Matrix4f modelTransform,
float uiX,
float uiY,
float uiZ,
org.joml.Vector3f out)

**Parameters:**
- `org.joml.Matrix4f` `modelTransform`
- `float` `uiX`
- `float` `uiY`
- `float` `uiZ`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public float sceneToUIX(float sceneX,
float sceneY,
float sceneZ)

**Parameters:**
- `float` `sceneX`
- `float` `sceneY`
- `float` `sceneZ`

**Returns:** `float`

### public float sceneToUIY(float sceneX,
float sceneY,
float sceneZ)

**Parameters:**
- `float` `sceneX`
- `float` `sceneY`
- `float` `sceneZ`

**Returns:** `float`

### public float sceneToUIX(org.joml.Vector3f scenePos)

**Parameters:**
- `org.joml.Vector3f` `scenePos`

**Returns:** `float`

### public float sceneToUIY(org.joml.Vector3f scenePos)

**Parameters:**
- `org.joml.Vector3f` `scenePos`

**Returns:** `float`

### public boolean uiToGrid(float uiX,
float uiY,
UI3DScene.GridPlane gridPlane,
org.joml.Vector3f outScenePos)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `UI3DScene.GridPlane` `gridPlane`
- `org.joml.Vector3f` `outScenePos`

**Returns:** `boolean`

### public static float closest_distance_between_lines(UI3DScene.Ray l1,
UI3DScene.Ray l2)

**Parameters:**
- `UI3DScene.Ray` `l1`
- `UI3DScene.Ray` `l2`

**Returns:** `float`

### public static int intersect_ray_plane(UI3DScene.Plane pn,
UI3DScene.Ray s,
org.joml.Vector3f out)

**Parameters:**
- `UI3DScene.Plane` `pn`
- `UI3DScene.Ray` `s`
- `org.joml.Vector3f` `out`

**Returns:** `int`

### public static float distance_between_point_ray(org.joml.Vector3f p,
UI3DScene.Ray l)

**Parameters:**
- `org.joml.Vector3f` `p`
- `UI3DScene.Ray` `l`

**Returns:** `float`

### public static float closest_distance_line_circle(UI3DScene.Ray ray,
UI3DScene.Circle c,
org.joml.Vector3f point)

**Parameters:**
- `UI3DScene.Ray` `ray`
- `UI3DScene.Circle` `c`
- `org.joml.Vector3f` `point`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\UI3DScene.html`*
