---
title: zombie.debug.DebugType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.debug
---

# zombie.debug.DebugType

`public enum DebugType extends Enum<DebugType>`

**Kind:** enum · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- java.lang.Enum<DebugType>
- zombie.debug.DebugType

## Description

Created by LEMMYPC on 31/12/13.

## Fields

### public static final DebugType General

### public static final DebugType Packet

### public static final DebugType NetworkFileDebug

### public static final DebugType Network

### public static final DebugType ZNet

### public static final DebugType DetailedInfo

### public static final DebugType Lua

### public static final DebugType LuaObject

### public static final DebugType GameOption

### public static final DebugType Mod

### public static final DebugType Sound

### public static final DebugType Zombie

### public static final DebugType Combat

### public static final DebugType Objects

### public static final DebugType Fireplace

### public static final DebugType Radio

### public static final DebugType MapLoading

### public static final DebugType Clothing

### public static final DebugType Animation

### public static final DebugType AnimationDetailed

### public static final DebugType AnimationLayers

### public static final DebugType Asset

### public static final DebugType Script

### public static final DebugType Shader

### public static final DebugType Sprite

### public static final DebugType Input

### public static final DebugType Recipe

### public static final DebugType ActionSystem

### public static final DebugType ActionSystemEvents

### public static final DebugType IsoRegion

### public static final DebugType FileIO

### public static final DebugType Multiplayer

### public static final DebugType Damage

### public static final DebugType Death

### public static final DebugType Discord

### public static final DebugType Statistic

### public static final DebugType Vehicle

### public static final DebugType VehicleHit

### public static final DebugType Voice

### public static final DebugType Checksum

### public static final DebugType Animal

### public static final DebugType ItemPicker

### public static final DebugType CraftLogic

### public static final DebugType Action

### public static final DebugType Entity

### public static final DebugType Lightning

### public static final DebugType Grapple

### public static final DebugType ExitDebug

### public static final DebugType BodyDamage

### public static final DebugType Xml

### public static final DebugType Physics

### public static final DebugType Ballistics

### public static final DebugType Ragdoll

### public static final DebugType PZBullet

### public static final DebugType ModelManager

### public static final DebugType LoadAnimation

### public static final DebugType Zone

### public static final DebugType WorldGen

### public static final DebugType Foraging

### public static final DebugType Saving

### public static final DebugType Fluid

### public static final DebugType Energy

### public static final DebugType Translation

### public static final DebugType Moveable

### public static final DebugType Basement

### public static final DebugType FallDamage

### public static final DebugType ImGui

### public static final DebugType CharacterTrait

### public static final DebugType ISUI

### public static final DebugType ISUIStackTrace

### public static final DebugType FaceLocationFix

### public static final DebugType Context

### public static final DebugType AnimationRecorder

### public static final DebugType Default

## Methods

### public static DebugType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `DebugType[]`

### public static DebugType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `DebugType`

### public boolean isName(String rhs)

**Parameters:**
- `String` `rhs`

**Returns:** `boolean`

### public boolean isEnabled()

**Returns:** `boolean`

### public boolean isEnabled(LogSeverity logSeverity)

**Parameters:**
- `LogSeverity` `logSeverity`

**Returns:** `boolean`

### public DebugLogStream getLogStream()

**Returns:** `DebugLogStream`

### public void setLogSeverity(LogSeverity newSeverity)

**Parameters:**
- `LogSeverity` `newSeverity`

**Returns:** `void`

### public LogSeverity getLogSeverity()

**Returns:** `LogSeverity`

### public IDebugLogFormatter getFormatter()

**Returns:** `IDebugLogFormatter`

### public void print(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void print(char c)

**Parameters:**
- `char` `c`

**Returns:** `void`

### public void print(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void print(long l)

**Parameters:**
- `long` `l`

**Returns:** `void`

### public void print(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void print(double d)

**Parameters:**
- `double` `d`

**Returns:** `void`

### public void print(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public void print(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `void`

### public PrintStream printf(String format,
Object... args)

**Parameters:**
- `String` `format`
- `Object...` `args`

**Returns:** `PrintStream`

### public void println()

**Returns:** `void`

### public void println(boolean x)

**Parameters:**
- `boolean` `x`

**Returns:** `void`

### public void println(char x)

**Parameters:**
- `char` `x`

**Returns:** `void`

### public void println(int x)

**Parameters:**
- `int` `x`

**Returns:** `void`

### public void println(long x)

**Parameters:**
- `long` `x`

**Returns:** `void`

### public void println(float x)

**Parameters:**
- `float` `x`

**Returns:** `void`

### public void println(double x)

**Parameters:**
- `double` `x`

**Returns:** `void`

### public void println(char[] x)

**Parameters:**
- `char[]` `x`

**Returns:** `void`

### public void println(String x)

**Parameters:**
- `String` `x`

**Returns:** `void`

### public void println(Object x)

**Parameters:**
- `Object` `x`

**Returns:** `void`

### public void println(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void trace(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void trace(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void debugln(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void debugln(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void debugOnceln(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void debugOnceln(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void noise(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void noise(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void warn(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void warn(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void warnOnce(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void warnOnce(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void error(Object formatNoParams)

**Parameters:**
- `Object` `formatNoParams`

**Returns:** `void`

### public void error(String format,
Object... params)

**Parameters:**
- `String` `format`
- `Object...` `params`

**Returns:** `void`

### public void write(LogSeverity logSeverity,
String logText)

**Parameters:**
- `LogSeverity` `logSeverity`
- `String` `logText`

**Returns:** `void`

### public void routedWrite(int backTraceOffset,
LogSeverity logSeverity,
String logText)

**Parameters:**
- `int` `backTraceOffset`
- `LogSeverity` `logSeverity`
- `String` `logText`

**Returns:** `void`

### public void printException(Throwable ex,
LogSeverity logSeverity)

**Parameters:**
- `Throwable` `ex`
- `LogSeverity` `logSeverity`

**Returns:** `void`

### public void printException(Throwable ex,
String message,
LogSeverity logSeverity)

**Parameters:**
- `Throwable` `ex`
- `String` `message`
- `LogSeverity` `logSeverity`

**Returns:** `void`

### public void printException(Throwable ex,
LogSeverity logSeverity,
String messageFormat,
Object... params)

**Parameters:**
- `Throwable` `ex`
- `LogSeverity` `logSeverity`
- `String` `messageFormat`
- `Object...` `params`

**Returns:** `void`

### public void printStackTrace()

**Returns:** `void`

### public void printStackTrace(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public void printStackTrace(LogSeverity severity,
int depth,
String messageFormat,
Object... params)

**Parameters:**
- `LogSeverity` `severity`
- `int` `depth`
- `String` `messageFormat`
- `Object...` `params`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\DebugType.html`*
