---
title: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld.randomizedVehicleStory
---

# zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner

`public class VehicleStorySpawner extends Object`

**Kind:** class · **Package:** zombie.randomizedWorld.randomizedVehicleStory

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner

## Fields

### public final ArrayList<VehicleStorySpawner.Element> elements

### public final HashMap<String,Object> storyParams

## Constructors

### public VehicleStorySpawner()

## Methods

### public static VehicleStorySpawner getInstance()

**Returns:** `VehicleStorySpawner`

### public void clear()

**Returns:** `void`

### public VehicleStorySpawner.Element addElement(String id,
float x,
float y,
float direction,
float width,
float height)

**Parameters:**
- `String` `id`
- `float` `x`
- `float` `y`
- `float` `direction`
- `float` `width`
- `float` `height`

**Returns:** `VehicleStorySpawner.Element`

### public void setParameter(String key,
boolean value)

**Parameters:**
- `String` `key`
- `boolean` `value`

**Returns:** `void`

### public void setParameter(String key,
float value)

**Parameters:**
- `String` `key`
- `float` `value`

**Returns:** `void`

### public void setParameter(String key,
int value)

**Parameters:**
- `String` `key`
- `int` `value`

**Returns:** `void`

### public void setParameter(String key,
Object value)

**Parameters:**
- `String` `key`
- `Object` `value`

**Returns:** `void`

### public boolean getParameterBoolean(String key)

**Parameters:**
- `String` `key`

**Returns:** `boolean`

### public float getParameterFloat(String key)

**Parameters:**
- `String` `key`

**Returns:** `float`

### public int getParameterInteger(String key)

**Parameters:**
- `String` `key`

**Returns:** `int`

### public String getParameterString(String key)

**Parameters:**
- `String` `key`

**Returns:** `String`

### public <E> E getParameter(String key,
Class<E> clazz)

**Returns:** `E`

### public void spawn(float worldX,
float worldY,
float worldZ,
float angleRadians,
VehicleStorySpawner.IElementSpawner spawner)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `worldZ`
- `float` `angleRadians`
- `VehicleStorySpawner.IElementSpawner` `spawner`

**Returns:** `void`

### public Vector2 rotate(float centerX,
float centerY,
Vector2 v,
float angleRadians)

**Parameters:**
- `float` `centerX`
- `float` `centerY`
- `Vector2` `v`
- `float` `angleRadians`

**Returns:** `Vector2`

### public void getAABB(float centerX,
float centerY,
float width,
float height,
float angleRadians,
int[] aabb)

**Parameters:**
- `float` `centerX`
- `float` `centerY`
- `float` `width`
- `float` `height`
- `float` `angleRadians`
- `int[]` `aabb`

**Returns:** `void`

### public void render(float centerX,
float centerY,
float z,
float width,
float height,
float angleRadians)

**Parameters:**
- `float` `centerX`
- `float` `centerY`
- `float` `z`
- `float` `width`
- `float` `height`
- `float` `angleRadians`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\randomizedVehicleStory\VehicleStorySpawner.html`*
