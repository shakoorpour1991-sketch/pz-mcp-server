---
title: zombie.core.opengl.RenderThread
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.RenderThread

`public class RenderThread extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.RenderThread

## Fields

### public static Thread renderThread

### public static final Object m_contextLock

## Constructors

### public RenderThread()

## Methods

### public static void init()
throws IOException,
org.lwjglx.LWJGLException

**Returns:** `void`

### public static void initServerGUI()

**Returns:** `void`

### public static long getRenderTime()

**Returns:** `long`

### public static void renderLoop()

**Returns:** `void`

### public static long getWaitTime()

**Returns:** `long`

### public static boolean isWaitForRenderState()

**Returns:** `boolean`

### public static void setWaitForRenderState(boolean wait)

**Parameters:**
- `boolean` `wait`

**Returns:** `void`

### public static void logGLException(org.lwjglx.opengl.OpenGLException glEx)

**Parameters:**
- `org.lwjglx.opengl.OpenGLException` `glEx`

**Returns:** `void`

### public static void logGLException(org.lwjglx.opengl.OpenGLException glEx,
boolean stackTrace)

**Parameters:**
- `org.lwjglx.opengl.OpenGLException` `glEx`
- `boolean` `stackTrace`

**Returns:** `void`

### public static void Ready()

**Returns:** `void`

### public static void invokeOnRenderContext(Runnable toInvoke)
throws RenderContextQueueException

**Parameters:**
- `Runnable` `toInvoke`

**Returns:** `void`

### public static boolean invokeQueryOnRenderContext(Invokers.Params0.Boolean.ICallback callback)

**Parameters:**
- `Invokers.Params0.Boolean.ICallback` `callback`

**Returns:** `boolean`

### public static <T1> void invokeOnRenderContext(T1 val1,
Invokers.Params1.ICallback<T1> invoker)

**Returns:** `void`

### public static <T1,T2> void invokeOnRenderContext(T1 val1,
T2 val2,
Invokers.Params2.ICallback<T1,T2> invoker)

**Returns:** `void`

### public static <T1,T2,T3> void invokeOnRenderContext(T1 val1,
T2 val2,
T3 val3,
Invokers.Params3.ICallback<T1,T2,T3> invoker)

**Returns:** `void`

### public static <T1,T2,T3,T4> void invokeOnRenderContext(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Invokers.Params4.ICallback<T1,T2,T3,T4> invoker)

**Returns:** `void`

### public static void queueInvokeOnRenderContext(Runnable runnable)

**Parameters:**
- `Runnable` `runnable`

**Returns:** `void`

### public static void queueInvokeOnRenderContext(RenderContextQueueItem queueItem)

**Parameters:**
- `RenderContextQueueItem` `queueItem`

**Returns:** `void`

### public static void shutdown()

**Returns:** `void`

### public static boolean isCloseRequested()

**Returns:** `boolean`

### public static int getDisplayWidth()

**Returns:** `int`

### public static int getDisplayHeight()

**Returns:** `int`

### public static boolean isRunning()

**Returns:** `boolean`

### public static void startRendering()

**Returns:** `void`

### public static void onGameThreadExited()

**Returns:** `void`

### public static boolean isCursorVisible()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\RenderThread.html`*
