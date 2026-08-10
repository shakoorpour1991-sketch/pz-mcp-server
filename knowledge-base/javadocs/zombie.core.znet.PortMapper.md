---
title: zombie.core.znet.PortMapper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.PortMapper

`public class PortMapper extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.PortMapper

## Constructors

### public PortMapper()

## Methods

### public static void startup()

**Returns:** `void`

### public static void shutdown()

**Returns:** `void`

### public static boolean discover()

**Returns:** `boolean`

### public static boolean igdFound()

**Returns:** `boolean`

### public static boolean addMapping(int wanPort,
int lanPort,
String description,
String proto,
int leaseTime)

**Parameters:**
- `int` `wanPort`
- `int` `lanPort`
- `String` `description`
- `String` `proto`
- `int` `leaseTime`

**Returns:** `boolean`

### public static boolean addMapping(int wanPort,
int lanPort,
String description,
String proto,
int leaseTime,
boolean force)

**Parameters:**
- `int` `wanPort`
- `int` `lanPort`
- `String` `description`
- `String` `proto`
- `int` `leaseTime`
- `boolean` `force`

**Returns:** `boolean`

### public static boolean removeMapping(int wanPort,
String proto)

**Parameters:**
- `int` `wanPort`
- `String` `proto`

**Returns:** `boolean`

### public static void fetchMappings()

**Returns:** `void`

### public static int numMappings()

**Returns:** `int`

### public static PortMappingEntry getMapping(int index)

**Parameters:**
- `int` `index`

**Returns:** `PortMappingEntry`

### public static String getGatewayInfo()

**Returns:** `String`

### public static String getExternalAddress(boolean forceUpdate)

**Parameters:**
- `boolean` `forceUpdate`

**Returns:** `String`

### public static String getExternalAddress()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\PortMapper.html`*
