---
title: zombie.MainThread
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.MainThread

`public class MainThread extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.MainThread

## Fields

### public static Thread mainThread

### public static final Object m_contextLock

## Constructors

### public MainThread()

## Methods

### public static Thread init(Runnable mainThreadStart,
Runnable mainThreadLoop,
Runnable mainThreadExit,
Thread.UncaughtExceptionHandler uncaughtExceptionHandler)

**Parameters:**
- `Runnable` `mainThreadStart`
- `Runnable` `mainThreadLoop`
- `Runnable` `mainThreadExit`
- `Thread.UncaughtExceptionHandler` `uncaughtExceptionHandler`

**Returns:** `Thread`

### public static void mainLoop()

**Returns:** `void`

### public static void invokeOnMainThread(Runnable toInvoke)
throws MainThreadQueueException

**Parameters:**
- `Runnable` `toInvoke`

**Returns:** `void`

### public static boolean invokeQueryOnMainThread(Invokers.Params0.Boolean.ICallback callback)

**Parameters:**
- `Invokers.Params0.Boolean.ICallback` `callback`

**Returns:** `boolean`

### public static <T1> void invokeOnMainThread(T1 val1,
Invokers.Params1.ICallback<T1> invoker)

**Returns:** `void`

### public static <T1,T2> void invokeOnMainThread(T1 val1,
T2 val2,
Invokers.Params2.ICallback<T1,T2> invoker)

**Returns:** `void`

### public static <T1,T2,T3> void invokeOnMainThread(T1 val1,
T2 val2,
T3 val3,
Invokers.Params3.ICallback<T1,T2,T3> invoker)

**Returns:** `void`

### public static <T1,T2,T3,T4> void invokeOnMainThread(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Invokers.Params4.ICallback<T1,T2,T3,T4> invoker)

**Returns:** `void`

### public static void queueInvokeOnMainThread(Runnable runnable)

**Parameters:**
- `Runnable` `runnable`

**Returns:** `void`

### public static void queueInvokeOnMainThread(MainThreadQueueItem queueItem)

**Parameters:**
- `MainThreadQueueItem` `queueItem`

**Returns:** `void`

### public static void shutdown()

**Returns:** `void`

### public static boolean isRunning()

**Returns:** `boolean`

### public static void busyWait()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\MainThread.html`*
