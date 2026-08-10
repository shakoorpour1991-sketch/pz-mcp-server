---
title: zombie.iso.IsoWater
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoWater

`public final class IsoWater extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoWater

## Fields

### public static final float DEPTH_ADJUST

### public Shader effect

## Constructors

### public IsoWater()

## Methods

### public static IsoWater getInstance()

**Returns:** `IsoWater`

### public boolean getShaderEnable()

**Returns:** `boolean`

### public void applyWaterQuality()

**Returns:** `void`

### public void clearThreadData()

**Returns:** `void`

### public void render(ArrayList<IsoGridSquare> grid,
int z)

**Parameters:**
- `ArrayList<IsoGridSquare>` `grid`
- `int` `z`

**Returns:** `void`

### public void renderShore(ArrayList<IsoGridSquare> grid,
int z)

**Parameters:**
- `ArrayList<IsoGridSquare>` `grid`
- `int` `z`

**Returns:** `void`

### public void waterProjection(org.joml.Matrix4f projection)

**Parameters:**
- `org.joml.Matrix4f` `projection`

**Returns:** `void`

### public void waterGeometry(int firstSquare,
int numSquares,
boolean bShore)

**Parameters:**
- `int` `firstSquare`
- `int` `numSquares`
- `boolean` `bShore`

**Returns:** `void`

### public ITexture getTextureBottom()

**Returns:** `ITexture`

### public float getShaderTime()

**Returns:** `float`

### public float getRainIntensity()

**Returns:** `float`

### public void update(ClimateManager cm)

**Parameters:**
- `ClimateManager` `cm`

**Returns:** `void`

### public float getWaterWindX()

**Returns:** `float`

### public float getWaterWindY()

**Returns:** `float`

### public float getWaterWindSpeed()

**Returns:** `float`

### public org.joml.Vector4f getShaderOffset()

**Returns:** `org.joml.Vector4f`

### public void FBOStart()

**Returns:** `void`

### public void FBOEnd()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoWater.html`*
