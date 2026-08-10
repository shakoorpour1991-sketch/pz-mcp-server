---
title: zombie.gizmo.Scene
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.gizmo
---

# zombie.gizmo.Scene

`public class Scene extends Object`

**Kind:** class · **Package:** zombie.gizmo

## Inheritance
- java.lang.Object
- zombie.gizmo.Scene

## Constructors

### public Scene()

## Methods

### public void setBounds(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `void`

### public void setGizmo(Gizmo gizmo)

**Parameters:**
- `Gizmo` `gizmo`

**Returns:** `void`

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

### public void renderMain()

**Returns:** `void`

### public boolean hitTest(int mouseX,
int mouseY)

**Parameters:**
- `int` `mouseX`
- `int` `mouseY`

**Returns:** `boolean`

### public void render()

**Returns:** `void`

### public void releaseRay(UI3DScene.Ray ray)

**Parameters:**
- `UI3DScene.Ray` `ray`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\gizmo\Scene.html`*
