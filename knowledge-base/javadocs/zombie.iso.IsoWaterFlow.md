---
title: zombie.iso.IsoWaterFlow
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoWaterFlow

`public final class IsoWaterFlow extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoWaterFlow

## Constructors

### public IsoWaterFlow()

## Methods

### public static void addFlow(float x,
float y,
float flow,
float speed)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `flow`
- `float` `speed`

**Returns:** `void`

### public static void addZone(float x1,
float y1,
float x2,
float y2,
float shore,
float waterGround)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `shore`
- `float` `waterGround`

**Returns:** `void`

### public static int getShore(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public static org.joml.Vector2f getFlow(IsoGridSquare square,
int ax,
int ay,
org.joml.Vector2f out)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `ax`
- `int` `ay`
- `org.joml.Vector2f` `out`

**Returns:** `org.joml.Vector2f`

### public static List<WaterFlowObject> getPoints()

**Returns:** `List<WaterFlowObject>`

### public static WaterFlowObject getNearest(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `WaterFlowObject`

### public static List<WaterFlowObject> getNearestMultiple(int x,
int y,
int max)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `max`

**Returns:** `List<WaterFlowObject>`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoWaterFlow.html`*
