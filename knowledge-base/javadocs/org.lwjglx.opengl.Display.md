---
title: org.lwjglx.opengl.Display
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.opengl
---

# org.lwjglx.opengl.Display

`public class Display extends Object`

**Kind:** class · **Package:** org.lwjglx.opengl

## Inheritance
- java.lang.Object
- org.lwjglx.opengl.Display

## Fields

### public static org.lwjgl.opengl.GLCapabilities capabilities

### public static ImGuiImplGlfw imGuiGlfw

### public static ImGuiImplGl3 imGuiGl3

## Constructors

### public Display()

## Methods

### public static void create(PixelFormat pixelFormat)
throws LWJGLException

**Parameters:**
- `PixelFormat` `pixelFormat`

**Returns:** `void`

### public static void create()
throws LWJGLException

**Returns:** `void`

### public static boolean isCreated()

**Returns:** `boolean`

### public static boolean isActive()

**Returns:** `boolean`

### public static boolean isVisible()

**Returns:** `boolean`

### public static void setLocation(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static void setVSyncEnabled(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `void`

### public static long getWindow()

**Returns:** `long`

### public static void update()

**Returns:** `void`

### public static void update(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `void`

### public static void processMessages()

**Returns:** `void`

### public static void swapBuffers()
throws LWJGLException

**Returns:** `void`

### public static void destroy()

**Returns:** `void`

### public static void setDisplayModeAndFullscreen(DisplayMode displayMode)
throws LWJGLException

**Parameters:**
- `DisplayMode` `displayMode`

**Returns:** `void`

### public static void setFullscreen(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `void`

### public static boolean isFullscreen()

**Returns:** `boolean`

### public static void setBorderlessWindow(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `void`

### public static boolean isBorderlessWindow()

**Returns:** `boolean`

### public static void setDisplayMode(DisplayMode displayMode)
throws LWJGLException

**Parameters:**
- `DisplayMode` `displayMode`

**Returns:** `void`

### public static DisplayMode getDisplayMode()

**Returns:** `DisplayMode`

### public static DisplayMode[] getAvailableDisplayModes()
throws LWJGLException

**Returns:** `DisplayMode[]`

### public static DisplayMode getDesktopDisplayMode()

**Returns:** `DisplayMode`

### public static boolean wasResized()

**Returns:** `boolean`

### public static int getX()

**Returns:** `int`

### public static int getY()

**Returns:** `int`

### public static int getWidth()

**Returns:** `int`

### public static int getHeight()

**Returns:** `int`

### public static int getFramebufferWidth()

**Returns:** `int`

### public static int getFramebufferHeight()

**Returns:** `int`

### public static void setTitle(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public static boolean isCloseRequested()

**Returns:** `boolean`

### public static boolean isDirty()

**Returns:** `boolean`

### public static void setInitialBackground(float var0,
float var1,
float var2)

**Parameters:**
- `float` `var0`
- `float` `var1`
- `float` `var2`

**Returns:** `void`

### public static void setIcon(org.lwjgl.glfw.GLFWImage.Buffer buffer)

**Parameters:**
- `org.lwjgl.glfw.GLFWImage.Buffer` `buffer`

**Returns:** `void`

### public static void setResizable(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `void`

### public static boolean isResizable()

**Returns:** `boolean`

### public static void setParent(Canvas var0)
throws LWJGLException

**Parameters:**
- `Canvas` `var0`

**Returns:** `void`

### public static void releaseContext()
throws LWJGLException

**Returns:** `void`

### public static boolean isCurrent()
throws LWJGLException

**Returns:** `boolean`

### public static void makeCurrent()
throws LWJGLException

**Returns:** `void`

### public static String getAdapter()

**Returns:** `String`

### public static String getVersion()

**Returns:** `String`

### public static void sync(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `void`

### public static void imGuiNewFrame()

**Returns:** `void`

### public static boolean inImGuiFrame()

**Returns:** `boolean`

### public static void drawImGuiDrawData(imgui.ImDrawData imDrawData)

**Parameters:**
- `imgui.ImDrawData` `imDrawData`

**Returns:** `void`

### public static imgui.ImDrawData imguiEndFrame()

**Returns:** `imgui.ImDrawData`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\opengl\Display.html`*
