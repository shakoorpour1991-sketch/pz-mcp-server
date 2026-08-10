---
title: zombie.network.statistics.data.Statistic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics.data
---

# zombie.network.statistics.data.Statistic

`public abstract class Statistic extends Object implements IStatistic`

**Kind:** class · **Package:** zombie.network.statistics.data

## Inheritance
- java.lang.Object
- zombie.network.statistics.data.Statistic

## Fields

### public final HashMap<String,Counter> counters

### public final HashMap<String,Double> statistics

### public io.prometheus.metrics.core.metrics.Gauge prometheus

## Constructors

### public Statistic(String name)

**Parameters:**
- `String` `name`

## Methods

### public String getName()

**Returns:** `String`

### public void store(Counter counter)

**Parameters:**
- `Counter` `counter`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public Counter getCounter(String counter)

**Parameters:**
- `String` `counter`

**Returns:** `Counter`

### public String getValue(String counter)

**Parameters:**
- `String` `counter`

**Returns:** `String`

### public String getList()

**Returns:** `String`

### public String getAll()

**Returns:** `String`

### public se.krka.kahlua.j2se.KahluaTableImpl getLocalTable()

**Returns:** `se.krka.kahlua.j2se.KahluaTableImpl`

### public se.krka.kahlua.j2se.KahluaTableImpl getRemoteTable()

**Returns:** `se.krka.kahlua.j2se.KahluaTableImpl`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\data\Statistic.html`*
