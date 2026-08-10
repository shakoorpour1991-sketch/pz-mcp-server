---
title: zombie.iso.IsoPuddles
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoPuddles

`public final class IsoPuddles extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoPuddles

## Fields

### public Shader effect

### public static boolean leakingPuddlesInTheRoom

### public static final SharedVertexBufferObjects VBOs

### public static final int BOOL_MAX

### public static final int FLOAT_RAIN

### public static final int FLOAT_WETGROUND

### public static final int FLOAT_MUDDYPUDDLES

### public static final int FLOAT_PUDDLESSIZE

### public static final int FLOAT_RAININTENSITY

### public static final int FLOAT_MAX

## Constructors

### public IsoPuddles()

## Methods

### public static IsoPuddles getInstance()

**Returns:** `IsoPuddles`

### public boolean getShaderEnable()

**Returns:** `boolean`

### public void applyPuddlesQuality()

**Returns:** `void`

### public org.joml.Vector4f getShaderOffset()

**Returns:** `org.joml.Vector4f`

### public org.joml.Vector4f getShaderOffsetMain()

**Returns:** `org.joml.Vector4f`

### public boolean shouldRenderPuddles()

**Returns:** `boolean`

### public void render(ArrayList<IsoGridSquare> grid,
int z)

**Parameters:**
- `ArrayList<IsoGridSquare>` `grid`
- `int` `z`

**Returns:** `void`

### public void puddlesProjection(org.joml.Matrix4f projection)

**Parameters:**
- `org.joml.Matrix4f` `projection`

**Returns:** `void`

### public void puddlesGeometry(int firstSquare,
int numSquares)

**Parameters:**
- `int` `firstSquare`
- `int` `numSquares`

**Returns:** `void`

### public void update(ClimateManager cm)

**Parameters:**
- `ClimateManager` `cm`

**Returns:** `void`

### public void applyNetworkUpdate(float wetGroundValue,
float puddlesSizeValue,
float muddyPuddlesValue)

**Parameters:**
- `float` `wetGroundValue`
- `float` `puddlesSizeValue`
- `float` `muddyPuddlesValue`

**Returns:** `void`

### public float getMuddyPuddlesFinalValue()

**Returns:** `float`

### public float getShaderTime()

**Returns:** `float`

### public float getPuddlesSize()

**Returns:** `float`

### public ITexture getHMTexture()

**Returns:** `ITexture`

### public ByteBuffer getHMTextureBuffer()

**Returns:** `ByteBuffer`

### public void updateHMTextureBuffer()

**Returns:** `void`

### public void freeHMTextureBuffer()

**Returns:** `void`

### public FloatBuffer getPuddlesParams(int z)

**Parameters:**
- `int` `z`

**Returns:** `FloatBuffer`

### public float getRainIntensity()

**Returns:** `float`

### public int getFloatMax()

**Returns:** `int`

### public int getBoolMax()

**Returns:** `int`

### public IsoPuddles.PuddlesFloat getPuddlesFloat(int id)

**Parameters:**
- `int` `id`

**Returns:** `IsoPuddles.PuddlesFloat`

### public void clearThreadData()

**Returns:** `void`

### public void renderToChunkTexture(ArrayList<IsoGridSquare> squares,
int z)

**Parameters:**
- `ArrayList<IsoGridSquare>` `squares`
- `int` `z`

**Returns:** `void`

### public float getWetGroundFinalValue()

**Returns:** `float`

### public float getPuddlesSizeFinalValue()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoPuddles.html`*
