---
title: zombie.debug.AutoRepiperDebugLogStream
source: Unofficial PZ JavaDocs 42.15.0
version: 42.15.0
kind: class
package: zombie.debug
---

# zombie.debug.AutoRepiperDebugLogStream

`public class AutoRepiperDebugLogStream extends DebugLogStream`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- java.io.OutputStream
- java.io.FilterOutputStream
- java.io.PrintStream
- zombie.debug.DebugLogStream
- zombie.debug.AutoRepiperDebugLogStream

## Constructors

### public AutoRepiperDebugLogStream(DebugType defaultOut,
DebugType defaultDebugType,
LogSeverity logSeverity)

**Parameters:**
- `DebugType` `defaultOut`
- `DebugType` `defaultDebugType`
- `LogSeverity` `logSeverity`

## Methods

### public DebugType getDefaultDebugType()

**Returns:** `DebugType`

### public AutoRepiperDebugLogStream.RepiperPacket parseRepiper(Object object,
LogSeverity defaultLogSeverity)

**Parameters:**
- `Object` `object`
- `LogSeverity` `defaultLogSeverity`

**Returns:** `AutoRepiperDebugLogStream.RepiperPacket`

---
*Source: Unofficial PZ JavaDocs 42.15.0 (42.15.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\AutoRepiperDebugLogStream.html`*
