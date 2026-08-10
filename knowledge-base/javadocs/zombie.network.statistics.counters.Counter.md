---
title: zombie.network.statistics.counters.Counter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics.counters
---

# zombie.network.statistics.counters.Counter

`public class Counter extends Object implements ICounter`

**Kind:** class · **Package:** zombie.network.statistics.counters

## Inheritance
- java.lang.Object
- zombie.network.statistics.counters.Counter

## Constructors

### public Counter(Statistic statistic,
String name,
double value,
ICounter lambda,
String tooltip,
String units,
boolean isPerishable)

**Parameters:**
- `Statistic` `statistic`
- `String` `name`
- `double` `value`
- `ICounter` `lambda`
- `String` `tooltip`
- `String` `units`
- `boolean` `isPerishable`

### public Counter(Statistic statistic,
String name,
double value,
ICounter lambda,
String tooltip,
String units)

**Parameters:**
- `Statistic` `statistic`
- `String` `name`
- `double` `value`
- `ICounter` `lambda`
- `String` `tooltip`
- `String` `units`

## Methods

### public String getName()

**Returns:** `String`

### public String getTooltip()

**Returns:** `String`

### public String getUnits()

**Returns:** `String`

### public Boolean isPerishable()

**Returns:** `Boolean`

### public void clear()

**Returns:** `void`

### public void increase()

**Returns:** `void`

### public void increase(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public double get()

**Returns:** `double`

### public void set(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\counters\Counter.html`*
