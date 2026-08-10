---
title: zombie.iso.InstanceTracker
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.InstanceTracker

`public abstract class InstanceTracker extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.InstanceTracker

## Fields

### public static final String DEFAULT

### public static final String ITEMS

### public static final String CONTAINERS

### public static final String STATS

## Constructors

### public InstanceTracker()

## Methods

### public static int get(String group,
String key)

**Parameters:**
- `String` `group`
- `String` `key`

**Returns:** `int`

### public static int get(String key)

**Parameters:**
- `String` `key`

**Returns:** `int`

### public static void set(String group,
String key,
int value)

**Parameters:**
- `String` `group`
- `String` `key`
- `int` `value`

**Returns:** `void`

### public static void set(String key,
int value)

**Parameters:**
- `String` `key`
- `int` `value`

**Returns:** `void`

### public static void adj(String group,
String key,
int value)

**Parameters:**
- `String` `group`
- `String` `key`
- `int` `value`

**Returns:** `void`

### public static void adj(String key,
int value)

**Parameters:**
- `String` `key`
- `int` `value`

**Returns:** `void`

### public static void inc(String group,
String key)

**Parameters:**
- `String` `group`
- `String` `key`

**Returns:** `void`

### public static void inc(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public static void dec(String group,
String key)

**Parameters:**
- `String` `group`
- `String` `key`

**Returns:** `void`

### public static void dec(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public static List<String> sort(String group,
InstanceTracker.Sort sort)

**Parameters:**
- `String` `group`
- `InstanceTracker.Sort` `sort`

**Returns:** `List<String>`

### public static String exportGroup(String group,
InstanceTracker.Format format,
InstanceTracker.Sort sort)

**Parameters:**
- `String` `group`
- `InstanceTracker.Format` `format`
- `InstanceTracker.Sort` `sort`

**Returns:** `String`

### public static void exportFile(List<String> groups,
String filename,
InstanceTracker.Format format,
InstanceTracker.Sort sort)

**Parameters:**
- `List<String>` `groups`
- `String` `filename`
- `InstanceTracker.Format` `format`
- `InstanceTracker.Sort` `sort`

**Returns:** `void`

### public static void save()

**Returns:** `void`

### public static void load()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\InstanceTracker.html`*
