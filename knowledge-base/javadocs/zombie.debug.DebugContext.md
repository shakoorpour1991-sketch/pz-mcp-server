---
title: zombie.debug.DebugContext
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.DebugContext

`public class DebugContext extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.DebugContext

## Fields

### public static final float FLT_MIN

### public static DebugContext instance

### public int dockspaceId

### public TextureFBO debugViewportTexture

### public boolean focusedGameViewport

### public Viewport viewport

## Constructors

### public DebugContext()

## Methods

### public static boolean isUsingGameViewportWindow()

**Returns:** `boolean`

### public void initRenderTarget()

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public void tick()

**Returns:** `void`

### public void startDrawing()

**Returns:** `void`

### public void endDrawing()

**Returns:** `void`

### public void tickFrameStart()

**Returns:** `void`

### public int getViewportMouseX()

**Returns:** `int`

### public int getViewportMouseY()

**Returns:** `int`

### public void setViewportX(float viewportMouseX)

**Parameters:**
- `float` `viewportMouseX`

**Returns:** `void`

### public void setViewportY(float viewportMouseY)

**Parameters:**
- `float` `viewportMouseY`

**Returns:** `void`

### public BaseDebugWindow getExistingTransientWindow(BaseDebugWindow window)

**Parameters:**
- `BaseDebugWindow` `window`

**Returns:** `BaseDebugWindow`

### public void inspectJava(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `void`

### public ArrayList<BaseDebugWindow> getTransientWindows()

**Returns:** `ArrayList<BaseDebugWindow>`

### public void closeTransient(BaseDebugWindow window)

**Parameters:**
- `BaseDebugWindow` `window`

**Returns:** `void`

### public ArrayList<BaseDebugWindow> getWindows()

**Returns:** `ArrayList<BaseDebugWindow>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\DebugContext.html`*
