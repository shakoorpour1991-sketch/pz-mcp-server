---
title: zombie.debug.LogSeverity
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.debug
---

# zombie.debug.LogSeverity

`public enum LogSeverity extends Enum<LogSeverity>`

**Kind:** enum · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- java.lang.Enum<LogSeverity>
- zombie.debug.LogSeverity

## Fields

### public static final LogSeverity Trace

### public static final LogSeverity Noise

### public static final LogSeverity Debug

### public static final LogSeverity General

### public static final LogSeverity Warning

### public static final LogSeverity Error

### public static final LogSeverity Off

### public static final LogSeverity All

### public final String logPrefix

## Methods

### public static LogSeverity[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `LogSeverity[]`

### public static LogSeverity valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `LogSeverity`

### public boolean isLogEnabled(LogSeverity logSeverity)

**Parameters:**
- `LogSeverity` `logSeverity`

**Returns:** `boolean`

### public static ArrayList<LogSeverity> getValueList()

**Returns:** `ArrayList<LogSeverity>`

### public boolean isName(String str)

**Parameters:**
- `String` `str`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\LogSeverity.html`*
