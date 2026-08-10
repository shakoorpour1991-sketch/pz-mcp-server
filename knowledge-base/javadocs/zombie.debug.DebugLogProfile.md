---
title: zombie.debug.DebugLogProfile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.DebugLogProfile

`public final class DebugLogProfile extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.DebugLogProfile

## Constructors

### public DebugLogProfile(String name)

**Parameters:**
- `String` `name`

## Methods

### public String getName()

**Returns:** `String`

### public DebugLogProfile addCommand(String command)

**Parameters:**
- `String` `command`

**Returns:** `DebugLogProfile`

### public String getCommandArgument0(String command)

**Parameters:**
- `String` `command`

**Returns:** `String`

### public void removeCommandsWithArgument0(String argument)

**Parameters:**
- `String` `argument`

**Returns:** `void`

### public void removeDebugTypeCommands()

**Returns:** `void`

### public void invoke()

**Returns:** `void`

### public void updateAll(LogSeverity logSeverity)

**Parameters:**
- `LogSeverity` `logSeverity`

**Returns:** `void`

### public void update(DebugType debugType,
LogSeverity logSeverity)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`

**Returns:** `void`

### public LogSeverity getLogSeverity(DebugType debugType)

**Parameters:**
- `DebugType` `debugType`

**Returns:** `LogSeverity`

### public void write(BufferedWriter bw)
throws IOException

**Parameters:**
- `BufferedWriter` `bw`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\DebugLogProfile.html`*
