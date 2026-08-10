---
title: zombie.core.textures.TextureDraw
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TextureDraw

`public final class TextureDraw extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw

## Fields

### public static float nextZ

### public static float nextChunkDepth

### public TextureDraw.Type type

### public boolean flipped

### public int a

### public int b

### public float f1

### public float[] vars

### public int c

### public int d

### public int col0

### public int col1

### public int col2

### public int col3

### public float x0

### public float x1

### public float x2

### public float x3

### public float y0

### public float y1

### public float y2

### public float y3

### public float u0

### public float u1

### public float u2

### public float u3

### public float v0

### public float v1

### public float v2

### public float v3

### public float z

### public float chunkDepth

### public Texture tex

### public Texture tex1

### public Texture tex2

### public byte useAttribArray

### public float tex1U0

### public float tex1U1

### public float tex1U2

### public float tex1U3

### public float tex1V0

### public float tex1V1

### public float tex1V2

### public float tex1V3

### public int tex1Col0

### public int tex1Col1

### public int tex1Col2

### public int tex1Col3

### public float tex2U0

### public float tex2U1

### public float tex2U2

### public float tex2U3

### public float tex2V0

### public float tex2V1

### public float tex2V2

### public float tex2V3

### public boolean singleCol

### public imgui.ImDrawData imDrawData

### public PerformanceProfileProbe probe

### public TextureDraw.GenericDrawer drawer

### public Future<?> future

## Constructors

### public TextureDraw()

## Methods

### public static void glStencilFunc(TextureDraw texd,
int a,
int b,
int c)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glBuffer(TextureDraw texd,
int a,
int b)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`

**Returns:** `void`

### public static void glStencilOp(TextureDraw texd,
int a,
int b,
int c)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glDisable(TextureDraw texd,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`

**Returns:** `void`

### public static void glClear(TextureDraw texd,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`

**Returns:** `void`

### public static void glBindFramebuffer(TextureDraw texd,
int binding,
int fbo)

**Parameters:**
- `TextureDraw` `texd`
- `int` `binding`
- `int` `fbo`

**Returns:** `void`

### public static void glClearDepth(TextureDraw texd,
float d)

**Parameters:**
- `TextureDraw` `texd`
- `float` `d`

**Returns:** `void`

### public static void glClearColor(TextureDraw texd,
int r,
int g,
int b,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public static void NewFrame(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

### public static void glDepthFunc(TextureDraw texd,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`

**Returns:** `void`

### public static void glEnable(TextureDraw texd,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`

**Returns:** `void`

### public static void glAlphaFunc(TextureDraw texd,
int a,
float b)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `float` `b`

**Returns:** `void`

### public static void glColorMask(TextureDraw texd,
int a,
int b,
int c,
int d)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `void`

### public static void glStencilMask(TextureDraw texd,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`

**Returns:** `void`

### public static void glBlendFunc(TextureDraw texd,
int a,
int b)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`

**Returns:** `void`

### public static void glBlendFuncSeparate(TextureDraw texd,
int a,
int b,
int c,
int d)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `void`

### public static void glBlendEquation(TextureDraw texd,
int a)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`

**Returns:** `void`

### public static void pushIsoView(TextureDraw texd,
float ox,
float oy,
float oz,
float useangle,
boolean vehicle)

**Parameters:**
- `TextureDraw` `texd`
- `float` `ox`
- `float` `oy`
- `float` `oz`
- `float` `useangle`
- `boolean` `vehicle`

**Returns:** `void`

### public static void popIsoView(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

### public static void glDoEndFrame(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

### public static void glDoEndFrameFx(TextureDraw texd,
int player)

**Parameters:**
- `TextureDraw` `texd`
- `int` `player`

**Returns:** `void`

### public static void glIgnoreStyles(TextureDraw texd,
boolean b)

**Parameters:**
- `TextureDraw` `texd`
- `boolean` `b`

**Returns:** `void`

### public static void glDoStartFrame(TextureDraw texd,
int w,
int h,
float zoom,
int player)

**Parameters:**
- `TextureDraw` `texd`
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public static void glDoStartFrameNoZoom(TextureDraw texd,
int w,
int h,
float zoom,
int player)

**Parameters:**
- `TextureDraw` `texd`
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public static void glDoStartFrameFlipY(TextureDraw texd,
int x,
int y,
float zoom,
int player)

**Parameters:**
- `TextureDraw` `texd`
- `int` `x`
- `int` `y`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public static void glDoStartFrame(TextureDraw texd,
int w,
int h,
float zoom,
int player,
boolean isTextFrame)

**Parameters:**
- `TextureDraw` `texd`
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`
- `boolean` `isTextFrame`

**Returns:** `void`

### public static void glDoStartFrameFx(TextureDraw texd,
int w,
int h,
int player)

**Parameters:**
- `TextureDraw` `texd`
- `int` `w`
- `int` `h`
- `int` `player`

**Returns:** `void`

### public static void glTexParameteri(TextureDraw texd,
int a,
int b,
int c)

**Parameters:**
- `TextureDraw` `texd`
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void drawModel(TextureDraw texd,
ModelManager.ModelSlot modelSlot)

**Parameters:**
- `TextureDraw` `texd`
- `ModelManager.ModelSlot` `modelSlot`

**Returns:** `void`

### public static void drawSkyBox(TextureDraw texd,
Shader shader,
int userId,
int apiId,
int bufferId)

**Parameters:**
- `TextureDraw` `texd`
- `Shader` `shader`
- `int` `userId`
- `int` `apiId`
- `int` `bufferId`

**Returns:** `void`

### public static void drawWater(TextureDraw texd,
Shader shader,
int playerIndex,
int firstSquare,
int numSquares,
boolean bShore)

**Parameters:**
- `TextureDraw` `texd`
- `Shader` `shader`
- `int` `playerIndex`
- `int` `firstSquare`
- `int` `numSquares`
- `boolean` `bShore`

**Returns:** `void`

### public static void drawPuddles(TextureDraw texd,
int playerIndex,
int z,
int firstSquare,
int numSquares)

**Parameters:**
- `TextureDraw` `texd`
- `int` `playerIndex`
- `int` `z`
- `int` `firstSquare`
- `int` `numSquares`

**Returns:** `void`

### public static void drawParticles(TextureDraw texd,
int userId,
int var1,
int var2)

**Parameters:**
- `TextureDraw` `texd`
- `int` `userId`
- `int` `var1`
- `int` `var2`

**Returns:** `void`

### public static void StartShader(TextureDraw texd,
int iD)

**Parameters:**
- `TextureDraw` `texd`
- `int` `iD`

**Returns:** `void`

### public static void StartShader(TextureDraw texd,
int iD,
ShaderUniformSetter uniforms)

**Parameters:**
- `TextureDraw` `texd`
- `int` `iD`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public static void ShaderUpdate1i(TextureDraw texd,
int shaderID,
int uniform,
int uniformValue)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `uniform`
- `int` `uniformValue`

**Returns:** `void`

### public static void ShaderUpdate1f(TextureDraw texd,
int shaderID,
int uniform,
float uniformValue)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `uniform`
- `float` `uniformValue`

**Returns:** `void`

### public static void ShaderUpdate2f(TextureDraw texd,
int shaderID,
int uniform,
float value1,
float value2)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`

**Returns:** `void`

### public static void ShaderUpdate3f(TextureDraw texd,
int shaderID,
int uniform,
float value1,
float value2,
float value3)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`
- `float` `value3`

**Returns:** `void`

### public static void ShaderUpdate4f(TextureDraw texd,
int shaderID,
int uniform,
float value1,
float value2,
float value3,
float value4)

**Parameters:**
- `TextureDraw` `texd`
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`
- `float` `value3`
- `float` `value4`

**Returns:** `void`

### public static void FBORenderChunkStart(TextureDraw textureDraw,
int index,
boolean bClear)

**Parameters:**
- `TextureDraw` `textureDraw`
- `int` `index`
- `boolean` `bClear`

**Returns:** `void`

### public static void FBORenderChunkEnd(TextureDraw textureDraw)

**Parameters:**
- `TextureDraw` `textureDraw`

**Returns:** `void`

### public static void releaseFBORenderChunkLock(TextureDraw textureDraw)

**Parameters:**
- `TextureDraw` `textureDraw`

**Returns:** `void`

### public void run()

**Returns:** `void`

### public static void glDepthMask(TextureDraw textureDraw,
boolean b)

**Parameters:**
- `TextureDraw` `textureDraw`
- `boolean` `b`

**Returns:** `void`

### public static void doCoreIntParam(TextureDraw textureDraw,
int id,
float val)

**Parameters:**
- `TextureDraw` `textureDraw`
- `int` `id`
- `float` `val`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public static TextureDraw Create(TextureDraw texd,
Texture tex,
float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `TextureDraw`

### public static TextureDraw Create(TextureDraw texd,
Texture tex,
SpriteRenderer.WallShaderTexRender wallSection,
float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `SpriteRenderer.WallShaderTexRender` `wallSection`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `TextureDraw`

### public static TextureDraw Create(TextureDraw texd,
Texture tex,
float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a,
float u1,
float v1,
float u2,
float v2,
float u3,
float v3,
float u4,
float v4,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `u1`
- `float` `v1`
- `float` `u2`
- `float` `v2`
- `float` `u3`
- `float` `v3`
- `float` `u4`
- `float` `v4`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `TextureDraw`

### public static void Create(TextureDraw texd,
Texture tex,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
float r1,
float g1,
float b1,
float a1,
float r2,
float g2,
float b2,
float a2,
float r3,
float g3,
float b3,
float a3,
float r4,
float g4,
float b4,
float a4,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`
- `float` `r2`
- `float` `g2`
- `float` `b2`
- `float` `a2`
- `float` `r3`
- `float` `g3`
- `float` `b3`
- `float` `a3`
- `float` `r4`
- `float` `g4`
- `float` `b4`
- `float` `a4`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public static void Create(TextureDraw texd,
Texture tex,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
float r1,
float g1,
float b1,
float a1)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`

**Returns:** `void`

### public static void Create(TextureDraw texd,
Texture tex,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
int c1,
int c2,
int c3,
int c4)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `int` `c1`
- `int` `c2`
- `int` `c3`
- `int` `c4`

**Returns:** `void`

### public static TextureDraw Create(TextureDraw texd,
Texture tex,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
int c1,
int c2,
int c3,
int c4,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `int` `c1`
- `int` `c2`
- `int` `c3`
- `int` `c4`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `TextureDraw`

### public static TextureDraw Create(TextureDraw texd,
Texture tex,
float x0,
float y0,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
int c0,
int c1,
int c2,
int c3,
float u0,
float v0,
float u1,
float v1,
float u2,
float v2,
float u3,
float v3,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `TextureDraw` `texd`
- `Texture` `tex`
- `float` `x0`
- `float` `y0`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `int` `c0`
- `int` `c1`
- `int` `c2`
- `int` `c3`
- `float` `u0`
- `float` `v0`
- `float` `u1`
- `float` `v1`
- `float` `u2`
- `float` `v2`
- `float` `u3`
- `float` `v3`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `TextureDraw`

### public int getColor(int i)

**Parameters:**
- `int` `i`

**Returns:** `int`

### public void reset()

**Returns:** `void`

### public static void glLoadIdentity(TextureDraw textureDraw)

**Parameters:**
- `TextureDraw` `textureDraw`

**Returns:** `void`

### public static void glGenerateMipMaps(TextureDraw textureDraw,
int a)

**Parameters:**
- `TextureDraw` `textureDraw`
- `int` `a`

**Returns:** `void`

### public static void glBind(TextureDraw textureDraw,
int a)

**Parameters:**
- `TextureDraw` `textureDraw`
- `int` `a`

**Returns:** `void`

### public static void glViewport(TextureDraw textureDraw,
int x,
int y,
int width,
int height)

**Parameters:**
- `TextureDraw` `textureDraw`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `void`

### public static void DrawQueued(TextureDraw texd,
ModelManager.ModelSlot model)

**Parameters:**
- `TextureDraw` `texd`
- `ModelManager.ModelSlot` `model`

**Returns:** `void`

### public static void RenderQueued(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

### public static void BeginProfile(TextureDraw texd,
PerformanceProfileProbe probe)

**Parameters:**
- `TextureDraw` `texd`
- `PerformanceProfileProbe` `probe`

**Returns:** `void`

### public static void EndProfile(TextureDraw texd,
PerformanceProfileProbe probe)

**Parameters:**
- `TextureDraw` `texd`
- `PerformanceProfileProbe` `probe`

**Returns:** `void`

### public void postRender()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TextureDraw.html`*
