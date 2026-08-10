---
title: zombie.GameProfiler
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.GameProfiler

`public final class GameProfiler extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.GameProfiler

## Methods

### public static boolean isValidThread()

**Returns:** `boolean`

### public static GameProfiler getInstance()

**Returns:** `GameProfiler`

### public void startFrame(String frameInvokerKey)

**Parameters:**
- `String` `frameInvokerKey`

**Returns:** `void`

### public void endFrame()

**Returns:** `void`

### public static boolean isRunning()

**Returns:** `boolean`

### public @Nullable GameProfiler.ProfileArea profile(String key)

**Parameters:**
- `String` `key`

**Returns:** `@Nullable GameProfiler.ProfileArea`

### @Deprecated
public GameProfiler.ProfileArea start(String areaKey)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `areaKey`

**Returns:** `GameProfiler.ProfileArea`

### @Deprecated
public void end(GameProfiler.ProfileArea area)

> ⚠️ **Deprecated**

**Parameters:**
- `GameProfiler.ProfileArea` `area`

**Returns:** `void`

### public void render(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static long getTimeNs()

**Returns:** `long`

### public static void init()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\GameProfiler.html`*
