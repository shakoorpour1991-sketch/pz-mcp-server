---
title: zombie.debug.StackTraceContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.StackTraceContainer

`public class StackTraceContainer extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.StackTraceContainer

## Constructors

### public StackTraceContainer(StackTraceElement[] stackTraceElements,
String indent,
int depthStart,
int depthCount)

**Parameters:**
- `StackTraceElement[]` `stackTraceElements`
- `String` `indent`
- `int` `depthStart`
- `int` `depthCount`

## Methods

### public String toString()

**Returns:** `String`

### public static String getStackTraceString(StackTraceElement[] stackTraceElements,
String indent,
int depthStart,
int depthCount)

**Parameters:**
- `StackTraceElement[]` `stackTraceElements`
- `String` `indent`
- `int` `depthStart`
- `int` `depthCount`

**Returns:** `String`

### public static StringBuilder getStackTraceString(StringBuilder result,
Throwable throwable,
String indent,
int depthStart,
int depthCount)

**Parameters:**
- `StringBuilder` `result`
- `Throwable` `throwable`
- `String` `indent`
- `int` `depthStart`
- `int` `depthCount`

**Returns:** `StringBuilder`

### public static StringBuilder getStackTraceString(StringBuilder result,
Throwable throwable,
String caption,
String prefix,
int depthStart,
int depthCount)

**Parameters:**
- `StringBuilder` `result`
- `Throwable` `throwable`
- `String` `caption`
- `String` `prefix`
- `int` `depthStart`
- `int` `depthCount`

**Returns:** `StringBuilder`

### public static StackTraceElement[] getStackTrace(Throwable throwable)

**Parameters:**
- `Throwable` `throwable`

**Returns:** `StackTraceElement[]`

### public static StackTraceElement[] getStackTrace()

**Returns:** `StackTraceElement[]`

### public static StackTraceElement[] getStackTrace(int maxDepth,
Predicate<StackTraceElement> predicate)

**Parameters:**
- `int` `maxDepth`
- `Predicate<StackTraceElement>` `predicate`

**Returns:** `StackTraceElement[]`

### public static void getEnclosedStackTraceString(StringBuilder result,
StackTraceElement[] enclosingTrace,
String caption,
String prefix,
Throwable throwable,
Set<Throwable> done)

**Parameters:**
- `StringBuilder` `result`
- `StackTraceElement[]` `enclosingTrace`
- `String` `caption`
- `String` `prefix`
- `Throwable` `throwable`
- `Set<Throwable>` `done`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\StackTraceContainer.html`*
