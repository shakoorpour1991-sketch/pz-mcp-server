---
title: zombie.core.sprite.GenericSpriteRenderState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.sprite
---

# zombie.core.sprite.GenericSpriteRenderState

`public abstract class GenericSpriteRenderState extends Object`

**Kind:** class · **Package:** zombie.core.sprite

## Inheritance
- java.lang.Object
- zombie.core.sprite.GenericSpriteRenderState

## Fields

### public final int index

### public TextureDraw[] sprite

### public Style[] style

### public int numSprites

### public TextureFBO fbo

### public boolean rendered

### public final ArrayList<TextureDraw> postRender

### public AbstractStyle defaultStyle

### public boolean cursorVisible

### public final gnu.trove.map.hash.TIntObjectHashMap<FBORenderChunk> cachedRenderChunkIndexMap

### public static final byte UVCA_NONE

### public static final byte UVCA_CIRCLE

### public static final byte UVCA_NOCIRCLE

### public static final byte UVCA_DEPTHTEXTURE

## Methods

### public void onRendered()

**Returns:** `void`

### public void onRenderAcquired()

**Returns:** `void`

### public boolean isRendering()

**Returns:** `boolean`

### public void onReady()

**Returns:** `void`

### public boolean isReady()

**Returns:** `boolean`

### public boolean isRendered()

**Returns:** `boolean`

### public void CheckSpriteSlots()

**Returns:** `void`

### public static void clearSprites(List<TextureDraw> postRender)

**Parameters:**
- `List<TextureDraw>` `postRender`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void glDepthMask(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void renderflipped(Texture tex,
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

**Returns:** `void`

### public void drawSkyBox(Shader shader,
int playerIndex,
int apiId,
int bufferId)

**Parameters:**
- `Shader` `shader`
- `int` `playerIndex`
- `int` `apiId`
- `int` `bufferId`

**Returns:** `void`

### public void drawWater(Shader shader,
int playerIndex,
int firstSquare,
int numSquares,
boolean bShore)

**Parameters:**
- `Shader` `shader`
- `int` `playerIndex`
- `int` `firstSquare`
- `int` `numSquares`
- `boolean` `bShore`

**Returns:** `void`

### public void drawPuddles(int playerIndex,
int z,
int firstSquare,
int numSquares)

**Parameters:**
- `int` `playerIndex`
- `int` `z`
- `int` `firstSquare`
- `int` `numSquares`

**Returns:** `void`

### public void drawParticles(int playerIndex,
int var1,
int var2)

**Parameters:**
- `int` `playerIndex`
- `int` `var1`
- `int` `var2`

**Returns:** `void`

### public void glDisable(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void NewFrame()

**Returns:** `void`

### public void glDepthFunc(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void glEnable(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void glStencilMask(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void glClear(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void glBindFramebuffer(int binding,
int fbo)

**Parameters:**
- `int` `binding`
- `int` `fbo`

**Returns:** `void`

### public void glClearColor(int r,
int g,
int b,
int a)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void glClearDepth(float d)

**Parameters:**
- `float` `d`

**Returns:** `void`

### public void glStencilFunc(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public void glStencilOp(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public void glColorMask(int a,
int b,
int c,
int d)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `void`

### public void glAlphaFunc(int a,
float b)

**Parameters:**
- `int` `a`
- `float` `b`

**Returns:** `void`

### public void glBlendFunc(int a,
int b)

**Parameters:**
- `int` `a`
- `int` `b`

**Returns:** `void`

### public void glBlendFuncSeparate(int a,
int b,
int c,
int d)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `void`

### public void glBlendEquation(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void render(Texture tex,
double x1,
double y1,
double x2,
double y2,
double x3,
double y3,
double x4,
double y4,
double depth,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `x3`
- `double` `y3`
- `double` `x4`
- `double` `y4`
- `double` `depth`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void render(Texture tex,
double x1,
double y1,
double x2,
double y2,
double x3,
double y3,
double x4,
double y4,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `x3`
- `double` `y3`
- `double` `x4`
- `double` `y4`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void render(Texture tex,
double x1,
double y1,
double x2,
double y2,
double x3,
double y3,
double x4,
double y4,
double u1,
double v1,
double u2,
double v2,
double u3,
double v3,
double u4,
double v4,
float r,
float g,
float b,
float a)

**Parameters:**
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `x3`
- `double` `y3`
- `double` `x4`
- `double` `y4`
- `double` `u1`
- `double` `v1`
- `double` `u2`
- `double` `v2`
- `double` `u3`
- `double` `v3`
- `double` `u4`
- `double` `v4`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void render(Texture tex,
double x1,
double y1,
double x2,
double y2,
double x3,
double y3,
double x4,
double y4,
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
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `x3`
- `double` `y3`
- `double` `x4`
- `double` `y4`
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

### public void render(Texture tex,
double x1,
double y1,
double x2,
double y2,
double x3,
double y3,
double x4,
double y4,
double depth,
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
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `x3`
- `double` `y3`
- `double` `x4`
- `double` `y4`
- `double` `depth`
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

### public void setUseVertColorsArray(byte whichShader,
int c0,
int c1,
int c2,
int c3)

**Parameters:**
- `byte` `whichShader`
- `int` `c0`
- `int` `c1`
- `int` `c2`
- `int` `c3`

**Returns:** `void`

### public void clearUseVertColorsArray()

**Returns:** `void`

### public void renderdebug(Texture tex,
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

### public void renderline(Texture tex,
float x1,
float y1,
float x2,
float y2,
float r,
float g,
float b,
float a,
float thickness)

**Parameters:**
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `thickness`

**Returns:** `void`

### public void renderline(Texture tex,
float x1,
float y1,
float x2,
float y2,
float r,
float g,
float b,
float a,
float baseThickness,
float topThickness)

**Parameters:**
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `baseThickness`
- `float` `topThickness`

**Returns:** `void`

### public void renderline(Texture tex,
int x1,
int y1,
int x2,
int y2,
float r,
float g,
float b,
float a)

**Parameters:**
- `Texture` `tex`
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderlinef(Texture tex,
float x1,
float y1,
float x2,
float y2,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public void renderlinef(Texture tex,
float x1,
float y1,
float x2,
float y2,
float r,
float g,
float b,
float a,
float baseThickness,
float topThickness)

**Parameters:**
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `baseThickness`
- `float` `topThickness`

**Returns:** `void`

### public void render(Texture tex,
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

### public void render(Texture tex,
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

**Returns:** `void`

### public void render(Texture tex,
Texture tex2,
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
- `Texture` `tex`
- `Texture` `tex2`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderRect(int x,
int y,
int width,
int height,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderPoly(float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderPoly(Texture tex,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
float r,
float g,
float b,
float a)

**Parameters:**
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderPoly(Texture tex,
float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
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
float v4)

**Parameters:**
- `Texture` `tex`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
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

**Returns:** `void`

### public void render(Texture tex,
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

**Returns:** `void`

### public void glBuffer(int i,
int p)

**Parameters:**
- `int` `i`
- `int` `p`

**Returns:** `void`

### public void glDoStartFrame(int w,
int h,
float zoom,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public void glDoStartFrame(int w,
int h,
float zoom,
int player,
boolean isTextFrame)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`
- `boolean` `isTextFrame`

**Returns:** `void`

### public void glDoStartFrameNoZoom(int w,
int h,
float zoom,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public void glDoStartFrameFlipY(int w,
int h,
float zoom,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public void glDoStartFrameFx(int w,
int h,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `int` `player`

**Returns:** `void`

### public void glIgnoreStyles(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void pushIsoView(float ox,
float oy,
float oz,
float useangle,
boolean vehicle)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`
- `float` `useangle`
- `boolean` `vehicle`

**Returns:** `void`

### public void popIsoView()

**Returns:** `void`

### public void glDoEndFrame()

**Returns:** `void`

### public void glDoEndFrameFx(int player)

**Parameters:**
- `int` `player`

**Returns:** `void`

### public void doCoreIntParam(int id,
float val)

**Parameters:**
- `int` `id`
- `float` `val`

**Returns:** `void`

### public void glTexParameteri(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public void setCutawayTexture(Texture tex,
int x,
int y,
int w,
int h)

**Parameters:**
- `Texture` `tex`
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `void`

### public void clearCutawayTexture()

**Returns:** `void`

### public void setCutawayTexture2(Texture tex,
int x,
int y,
int w,
int h)

**Parameters:**
- `Texture` `tex`
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `void`

### public void setExtraWallShaderParams(SpriteRenderer.WallShaderTexRender wallTexRender)

**Parameters:**
- `SpriteRenderer.WallShaderTexRender` `wallTexRender`

**Returns:** `void`

### public void ShaderUpdate1i(int shaderID,
int uniform,
int uniformValue)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `int` `uniformValue`

**Returns:** `void`

### public void ShaderUpdate1f(int shaderID,
int uniform,
float uniformValue)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `uniformValue`

**Returns:** `void`

### public void ShaderUpdate2f(int shaderID,
int uniform,
float value1,
float value2)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`

**Returns:** `void`

### public void ShaderUpdate3f(int shaderID,
int uniform,
float value1,
float value2,
float value3)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`
- `float` `value3`

**Returns:** `void`

### public void ShaderUpdate4f(int shaderID,
int uniform,
float value1,
float value2,
float value3,
float value4)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`
- `float` `value3`
- `float` `value4`

**Returns:** `void`

### public void glLoadIdentity()

**Returns:** `void`

### public void glGenerateMipMaps(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void glBind(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public void glViewport(int x,
int y,
int width,
int height)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `void`

### public void drawModel(ModelManager.ModelSlot model)

**Parameters:**
- `ModelManager.ModelSlot` `model`

**Returns:** `void`

### public TextureDraw drawGeneric(TextureDraw.GenericDrawer gd)

**Parameters:**
- `TextureDraw.GenericDrawer` `gd`

**Returns:** `TextureDraw`

### public void render(imgui.ImDrawData drawData)

**Parameters:**
- `imgui.ImDrawData` `drawData`

**Returns:** `void`

### public void drawQueued(ModelManager.ModelSlot model)

**Parameters:**
- `ModelManager.ModelSlot` `model`

**Returns:** `void`

### public void renderQueued()

**Returns:** `void`

### public void beginProfile(PerformanceProfileProbe probe)

**Parameters:**
- `PerformanceProfileProbe` `probe`

**Returns:** `void`

### public void endProfile(PerformanceProfileProbe probe)

**Parameters:**
- `PerformanceProfileProbe` `probe`

**Returns:** `void`

### public void StartShader(int iD,
int playerIndex)

**Parameters:**
- `int` `iD`
- `int` `playerIndex`

**Returns:** `void`

### public void StartShader(int iD,
int playerIndex,
ShaderUniformSetter uniforms)

**Parameters:**
- `int` `iD`
- `int` `playerIndex`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public void EndShader()

**Returns:** `void`

### public void FBORenderChunkStart(int index,
boolean bClear)

**Parameters:**
- `int` `index`
- `boolean` `bClear`

**Returns:** `void`

### public void FBORenderChunkEnd()

**Returns:** `void`

### public void releaseFBORenderChunkLock()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\sprite\GenericSpriteRenderState.html`*
