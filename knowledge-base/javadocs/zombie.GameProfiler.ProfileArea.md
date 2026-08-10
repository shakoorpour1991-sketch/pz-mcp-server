---
title: zombie.GameProfiler.ProfileArea
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.GameProfiler.ProfileArea

`public static class GameProfiler.ProfileArea extends PooledObject implements AutoCloseable`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.GameProfiler.ProfileArea

## Fields

### public String key

### public long startTime

### public long endTime

### public long total

### public int depth

### public float r

### public float g

### public float b

### public final List<GameProfiler.ProfileArea> children

## Constructors

### public ProfileArea()

## Methods

### public void onReleased()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public static GameProfiler.ProfileArea alloc()

**Returns:** `GameProfiler.ProfileArea`

### public void close()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\GameProfiler.ProfileArea.html`*
