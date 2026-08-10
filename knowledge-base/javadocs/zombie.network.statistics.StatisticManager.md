---
title: zombie.network.statistics.StatisticManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics
---

# zombie.network.statistics.StatisticManager

`public class StatisticManager extends Object implements Iterable<Statistic>`

**Kind:** class · **Package:** zombie.network.statistics

## Inheritance
- java.lang.Object
- zombie.network.statistics.StatisticManager

## Fields

### public boolean prometheusEnabled

## Constructors

### public StatisticManager()

## Methods

### public static StatisticManager getInstance()

**Returns:** `StatisticManager`

### public Iterator<Statistic> iterator()

**Returns:** `Iterator<Statistic>`

### public void init()

**Returns:** `void`

### public static String getInstanceName()

**Returns:** `String`

### public void observeServerPacketProcessDuration(String packetType,
String client,
int size)

**Parameters:**
- `String` `packetType`
- `String` `client`
- `int` `size`

**Returns:** `void`

### public void observeServerPacketSendDuration(String packetType,
String client,
int size)

**Parameters:**
- `String` `packetType`
- `String` `client`
- `int` `size`

**Returns:** `void`

### public Statistic get(String name)

**Parameters:**
- `String` `name`

**Returns:** `Statistic`

### public void update(long time)

**Parameters:**
- `long` `time`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\StatisticManager.html`*
