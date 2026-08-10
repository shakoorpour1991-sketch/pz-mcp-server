---
title: zombie.debug.StackTraceContainer.Filters
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.StackTraceContainer.Filters

`public static class StackTraceContainer.Filters extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.StackTraceContainer.Filters

## Constructors

### public Filters()

## Methods

### public static boolean all(StackTraceElement stackTraceElement)

**Parameters:**
- `StackTraceElement` `stackTraceElement`

**Returns:** `boolean`

### public static boolean excludeNativesAndLuaCalls(StackTraceElement stackTraceElement)

**Parameters:**
- `StackTraceElement` `stackTraceElement`

**Returns:** `boolean`

### public static Predicate<StackTraceElement> forSeverity(LogSeverity severity)

**Parameters:**
- `LogSeverity` `severity`

**Returns:** `Predicate<StackTraceElement>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\StackTraceContainer.Filters.html`*
