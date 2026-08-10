---
title: zombie.debug.DebugLog
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.DebugLog

`public final class DebugLog extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.DebugLog

## Description

Created by LEMMYPC on 31/12/13.

## Methods

### public static DebugLog getInstance()

**Returns:** `DebugLog`

### public static void setDefaultLogSeverity()

**Returns:** `void`

### public static void printLogLevels()

**Returns:** `void`

### public static boolean isEnabled(DebugType type)

**Parameters:**
- `DebugType` `type`

**Returns:** `boolean`

### public static boolean isLogEnabled(DebugType type,
LogSeverity logSeverity)

**Parameters:**
- `DebugType` `type`
- `LogSeverity` `logSeverity`

**Returns:** `boolean`

### public String formatLogStringForConsole(DebugType debugType,
LogSeverity logSeverity,
String callerAffix,
Object outputStr)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`
- `String` `callerAffix`
- `Object` `outputStr`

**Returns:** `String`

### public String formatLogStringForLogFile(DebugType debugType,
LogSeverity logSeverity,
String callerAffix,
Object outputStr)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`
- `String` `callerAffix`
- `Object` `outputStr`

**Returns:** `String`

### public String formatLogStringAnimationRecordingFile(DebugType debugType,
LogSeverity logSeverity,
String callerAffix,
Object outputStr)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`
- `String` `callerAffix`
- `Object` `outputStr`

**Returns:** `String`

### public void echoToLogFiles(DebugType debugType,
LogSeverity logSeverity,
String callerAffix,
String rawOutString)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`
- `String` `callerAffix`
- `String` `rawOutString`

**Returns:** `void`

### public void echoExceptionLineToLogFiles(DebugType debugType,
LogSeverity logSeverity,
String messageType,
String outString)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`
- `String` `messageType`
- `String` `outString`

**Returns:** `void`

### public static void log(DebugType type,
String str)

**Parameters:**
- `DebugType` `type`
- `String` `str`

**Returns:** `void`

### public static void setLogEnabled(DebugType type,
boolean bEnabled)

**Parameters:**
- `DebugType` `type`
- `boolean` `bEnabled`

**Returns:** `void`

### public static void log(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public static ArrayList<DebugType> getDebugTypes()

**Returns:** `ArrayList<DebugType>`

### public static String getSelectedProfileName()

**Returns:** `String`

### public static List<String> getProfileNames()

**Returns:** `List<String>`

### public static List<String> getProfileAliases()

**Returns:** `List<String>`

### public static LogSeverity getLogSeverityForSelectedProfile(DebugType debugType)

**Parameters:**
- `DebugType` `debugType`

**Returns:** `LogSeverity`

### public static void invokeProfile(String profileOrAlias)

**Parameters:**
- `String` `profileOrAlias`

**Returns:** `void`

### public static void invokeSelectedProfile()

**Returns:** `void`

### public static void updateSelectedProfileAll(LogSeverity logSeverity)

**Parameters:**
- `LogSeverity` `logSeverity`

**Returns:** `void`

### public static void updateSelectedProfile(DebugType debugType,
LogSeverity logSeverity)

**Parameters:**
- `DebugType` `debugType`
- `LogSeverity` `logSeverity`

**Returns:** `void`

### public static void writeConfigFile()
throws IOException

**Returns:** `void`

### public boolean isLogTraceFileLocationEnabled()

**Returns:** `boolean`

### public boolean shouldLogIncludeTimeMs()

**Returns:** `boolean`

### public boolean shouldLogIncludeServerTime()

**Returns:** `boolean`

### public PrintStream getRecordingOut()

**Returns:** `PrintStream`

### public void setRecordingOut(PrintStream recordingOut)

**Parameters:**
- `PrintStream` `recordingOut`

**Returns:** `void`

### public DebugLogStream createLogStream(DebugType debugType)

**Parameters:**
- `DebugType` `debugType`

**Returns:** `DebugLogStream`

### public boolean isLogServerTimeMsEnabled()

**Returns:** `boolean`

### public void setLogServerTimeMsEnabled(boolean logServerTimeMsEnabled)

**Parameters:**
- `boolean` `logServerTimeMsEnabled`

**Returns:** `void`

### public void setStdOut(OutputStream out)

**Parameters:**
- `OutputStream` `out`

**Returns:** `void`

### public void setStdErr(OutputStream out)

**Parameters:**
- `OutputStream` `out`

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void loadDebugConfig(String filepath)

**Parameters:**
- `String` `filepath`

**Returns:** `void`

### public void readConfigCommand(String s,
boolean enable)

**Parameters:**
- `String` `s`
- `boolean` `enable`

**Returns:** `void`

### public static void nativeLog(String logType,
String logSeverity,
String logTxt)

**Parameters:**
- `String` `logType`
- `String` `logSeverity`
- `String` `logTxt`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\DebugLog.html`*
