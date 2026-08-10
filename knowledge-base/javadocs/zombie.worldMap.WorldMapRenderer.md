---
title: zombie.worldMap.WorldMapRenderer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapRenderer

`public final class WorldMapRenderer extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMapRenderer

## Fields

### public WorldMapStyle style

## Constructors

### public WorldMapRenderer()

## Methods

### public int getAbsoluteX()

**Returns:** `int`

### public int getAbsoluteY()

**Returns:** `int`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public org.joml.Vector3f uiToScene(float uiX,
float uiY,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView,
org.joml.Vector3f out)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f uiToScene(float uiX,
float uiY,
org.joml.Matrix4f modelViewProjection,
org.joml.Vector3f out)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `org.joml.Matrix4f` `modelViewProjection`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f sceneToUI(float sceneX,
float sceneY,
float sceneZ,
org.joml.Matrix4f modelViewProjection,
org.joml.Vector3f out)

**Parameters:**
- `float` `sceneX`
- `float` `sceneY`
- `float` `sceneZ`
- `org.joml.Matrix4f` `modelViewProjection`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f sceneToUI(float sceneX,
float sceneY,
float sceneZ,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView,
org.joml.Vector3f out)

**Parameters:**
- `float` `sceneX`
- `float` `sceneY`
- `float` `sceneZ`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public float uiToWorldX(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`

**Returns:** `float`

### public float uiToWorldY(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`

**Returns:** `float`

### public float uiToWorldX(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`

**Returns:** `float`

### public float uiToWorldY(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`

**Returns:** `float`

### public float uiToWorldX(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f modelViewProjection)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `modelViewProjection`

**Returns:** `float`

### public float uiToWorldY(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f modelViewProjection)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `modelViewProjection`

**Returns:** `float`

### public float worldToUIX(float worldX,
float worldY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`

**Returns:** `float`

### public float worldToUIY(float worldX,
float worldY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f projection,
org.joml.Matrix4f modelView)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `projection`
- `org.joml.Matrix4f` `modelView`

**Returns:** `float`

### public float worldToUIX(float worldX,
float worldY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f modelViewProjection)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `modelViewProjection`

**Returns:** `float`

### public float worldToUIY(float worldX,
float worldY,
float zoomF,
float centerWorldX,
float centerWorldY,
org.joml.Matrix4f modelViewProjection)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`
- `org.joml.Matrix4f` `modelViewProjection`

**Returns:** `float`

### public float worldOriginUIX(float zoomF,
float centerWorldX)

**Parameters:**
- `float` `zoomF`
- `float` `centerWorldX`

**Returns:** `float`

### public float worldOriginUIY(float zoomF,
float centerWorldY)

**Parameters:**
- `float` `zoomF`
- `float` `centerWorldY`

**Returns:** `float`

### public int getZoom()

**Returns:** `int`

### public float getZoomF()

**Returns:** `float`

### public float getDisplayZoomF()

**Returns:** `float`

### public float zoomMult()

**Returns:** `float`

### public float zoomMult(float zoomF)

**Parameters:**
- `float` `zoomF`

**Returns:** `float`

### public float getWorldScale(float zoomF)

**Parameters:**
- `float` `zoomF`

**Returns:** `float`

### public void zoomAt(int mouseX,
int mouseY,
int delta)

**Parameters:**
- `int` `mouseX`
- `int` `mouseY`
- `int` `delta`

**Returns:** `void`

### public void transitionTo(float worldX,
float worldY,
float zoomF)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `zoomF`

**Returns:** `void`

### public float getCenterWorldX()

**Returns:** `float`

### public float getCenterWorldY()

**Returns:** `float`

### public void centerOn(float worldX,
float worldY)

**Parameters:**
- `float` `worldX`
- `float` `worldY`

**Returns:** `void`

### public void moveView(int dx,
int dy)

**Parameters:**
- `int` `dx`
- `int` `dy`

**Returns:** `void`

### public double log2(double x)

**Parameters:**
- `double` `x`

**Returns:** `double`

### public float getBaseZoom()

**Returns:** `float`

### public void setZoom(float zoom)

**Parameters:**
- `float` `zoom`

**Returns:** `void`

### public void setMaxZoom(float maxZoom)

**Parameters:**
- `float` `maxZoom`

**Returns:** `void`

### public float getMaxZoom()

**Returns:** `float`

### public void resetView()

**Returns:** `void`

### public org.joml.Matrix4f getProjectionMatrix()

**Returns:** `org.joml.Matrix4f`

### public org.joml.Matrix4f getModelViewMatrix()

**Returns:** `org.joml.Matrix4f`

### public org.joml.Matrix4f getModelViewProjectionMatrix()

**Returns:** `org.joml.Matrix4f`

### public void setMap(WorldMap worldMap,
int x,
int y,
int width,
int height)

**Parameters:**
- `WorldMap` `worldMap`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `void`

### public WorldMap getWorldMap()

**Returns:** `WorldMap`

### public void setVisited(WorldMapVisited visited)

**Parameters:**
- `WorldMapVisited` `visited`

**Returns:** `void`

### public WorldMapVisited getVisited()

**Returns:** `WorldMapVisited`

### public void updateView()

**Returns:** `void`

### public void render(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `void`

### public void setDropShadowWidth(int width)

**Parameters:**
- `int` `width`

**Returns:** `void`

### public ConfigOption getOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setBoolean(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

**Returns:** `void`

### public boolean getBoolean(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void setDouble(String name,
double value)

**Parameters:**
- `String` `name`
- `double` `value`

**Returns:** `void`

### public double getDouble(String name,
double defaultValue)

**Parameters:**
- `String` `name`
- `double` `defaultValue`

**Returns:** `double`

### public boolean isDimUnsharedSymbols()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapRenderer.html`*
