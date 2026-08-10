---
title: zombie.core.logger.ZLogger
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.logger
---

# zombie.core.logger.ZLogger

`public final class ZLogger extends Object`

**Kind:** class · **Package:** zombie.core.logger

## Inheritance
- java.lang.Object
- zombie.core.logger.ZLogger

## Constructors

### public ZLogger(String name,
boolean useConsole)

Write logs into file and console.

**Parameters:**
- `String` `name` — if true then write logs into console also
- `boolean` `useConsole`

## Methods

### public void write(String logs)

**Parameters:**
- `String` `logs`

**Returns:** `void`

### public void write(String logs,
String level)

**Parameters:**
- `String` `logs`
- `String` `level`

**Returns:** `void`

### public void write(String logs,
String level,
boolean append)

**Parameters:**
- `String` `logs`
- `String` `level`
- `boolean` `append`

**Returns:** `void`

### public void writeUnsafe(String logs,
String prefix,
boolean append)
throws Exception

**Parameters:**
- `String` `logs`
- `String` `prefix`
- `boolean` `append`

**Returns:** `void`

### public void write(Exception ex)

**Parameters:**
- `Exception` `ex`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\logger\ZLogger.html`*
