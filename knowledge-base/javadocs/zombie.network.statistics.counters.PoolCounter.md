---
title: zombie.network.statistics.counters.PoolCounter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics.counters
---

# zombie.network.statistics.counters.PoolCounter

`public final class PoolCounter extends Object`

**Kind:** class · **Package:** zombie.network.statistics.counters

## Inheritance
- java.lang.Object
- zombie.network.statistics.counters.PoolCounter

## Fields

### public final Counter total

### public final Counter used

### public final Counter free

### public final Counter alloc

### public final Counter reused

### public final Counter reusedTotal

### public final Counter release

## Constructors

### public PoolCounter(PerformanceStatistic statistic,
Pool<?> pool,
String poolName)

**Parameters:**
- `PerformanceStatistic` `statistic`
- `Pool<?>` `pool`
- `String` `poolName`

## Methods

### public void onPooledObjectAlloc(Pool.PoolStacks threadLocalPoolStacks,
boolean isReused)

**Parameters:**
- `Pool.PoolStacks` `threadLocalPoolStacks`
- `boolean` `isReused`

**Returns:** `void`

### public void onPooledObjectReleased(Pool.PoolStacks threadLocalPoolStacks)

**Parameters:**
- `Pool.PoolStacks` `threadLocalPoolStacks`

**Returns:** `void`

### public int getTotalPoolCount()

**Returns:** `int`

### public int getUsedCount()

**Returns:** `int`

### public int getFreeCount()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\counters\PoolCounter.html`*
