---
title: zombie.statistics.StatisticsManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.statistics
---

# zombie.statistics.StatisticsManager

`public final class StatisticsManager extends Object`

**Kind:** class · **Package:** zombie.statistics

## Inheritance
- java.lang.Object
- zombie.statistics.StatisticsManager

## Methods

### public static StatisticsManager getInstance()

**Returns:** `StatisticsManager`

### public void incrementStatistic(StatisticType statisticType,
StatisticCategory statisticCategory,
String key,
float amount)

**Parameters:**
- `StatisticType` `statisticType`
- `StatisticCategory` `statisticCategory`
- `String` `key`
- `float` `amount`

**Returns:** `void`

### public void setStatistic(StatisticType statisticType,
StatisticCategory statisticCategory,
String key,
float amount)

**Parameters:**
- `StatisticType` `statisticType`
- `StatisticCategory` `statisticCategory`
- `String` `key`
- `float` `amount`

**Returns:** `void`

### public float getStatistic(String key)

**Parameters:**
- `String` `key`

**Returns:** `float`

### public HashMap<String, Statistic> getStatistics()

**Returns:** `HashMap<String, Statistic>`

### public String getAllStatisticsDebug()

**Returns:** `String`

### public void load()

**Returns:** `void`

### public void save()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\statistics\StatisticsManager.html`*
