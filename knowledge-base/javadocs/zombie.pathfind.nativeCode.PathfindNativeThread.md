---
title: zombie.pathfind.nativeCode.PathfindNativeThread
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind.nativeCode
---

# zombie.pathfind.nativeCode.PathfindNativeThread

`public class PathfindNativeThread extends Thread`

**Kind:** class · **Package:** zombie.pathfind.nativeCode

## Inheritance
- java.lang.Object
- java.lang.Thread
- zombie.pathfind.nativeCode.PathfindNativeThread

## Fields

### public static PathfindNativeThread instance

### public boolean stop

### public final Object notifier

### public final Object renderLock

## Methods

### public void run()

**Returns:** `void`

### public void addRequest(PathFindRequest request,
int queueNumber)

**Parameters:**
- `PathFindRequest` `request`
- `int` `queueNumber`

**Returns:** `void`

### public void stopThread()

**Returns:** `void`

### public void cleanup()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\nativeCode\PathfindNativeThread.html`*
