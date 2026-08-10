---
title: zombie.network.statistics.data.PerformanceStatistic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics.data
---

# zombie.network.statistics.data.PerformanceStatistic

`public class PerformanceStatistic extends Statistic implements IStatistic`

**Kind:** class · **Package:** zombie.network.statistics.data

## Inheritance
- java.lang.Object
- zombie.network.statistics.data.Statistic
- zombie.network.statistics.data.PerformanceStatistic

## Fields

### public final Counter memoryFree

### public final Counter memoryTotal

### public final Counter memoryUsed

### public final Counter memoryMax

### public final Counter minUpdatePeriod

### public final Counter maxUpdatePeriod

### public final Counter avgUpdatePeriod

### public final Counter fps

### public final Counter allPoolsTotal

### public final Counter allPoolsInUse

### public final Counter allPoolsFree

### public final Set<Pool<?>> pools

## Methods

### public static PerformanceStatistic getInstance()

**Returns:** `PerformanceStatistic`

### public void addUpdate(long period)

**Parameters:**
- `long` `period`

**Returns:** `void`

### public <PO extends IPooledObject> void onPooledObjectAlloc(Pool<PO> sender,
PO newInstance,
boolean isReused,
Pool.PoolStacks threadLocalPoolStacks)

**Returns:** `void`

### public <PO extends IPooledObject> void onPooledObjectReleased(Pool<PO> sender,
PO releasedInstance,
Pool.PoolStacks threadLocalPoolStacks)

**Returns:** `void`

### public void visitAllPools(Consumer<PoolCounter> visitor)

**Parameters:**
- `Consumer<PoolCounter>` `visitor`

**Returns:** `void`

### public int addUpAllPoolValues(IntSupplierFunction<PoolCounter> intGetterFunction)

**Parameters:**
- `IntSupplierFunction<PoolCounter>` `intGetterFunction`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\data\PerformanceStatistic.html`*
