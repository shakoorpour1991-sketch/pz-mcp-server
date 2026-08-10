---
title: zombie.debug.DebugLogStream
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.DebugLogStream

`public class DebugLogStream extends PrintStream`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- java.io.OutputStream
- java.io.FilterOutputStream
- java.io.PrintStream
- zombie.debug.DebugLogStream

## Constructors

### public DebugLogStream(PrintStream out,
PrintStream warn,
PrintStream err,
LogSeverity logSeverity)

**Parameters:**
- `PrintStream` `out`
- `PrintStream` `warn`
- `PrintStream` `err`
- `LogSeverity` `logSeverity`

### public DebugLogStream(PrintStream out,
PrintStream warn,
PrintStream err,
DebugType debugType)

**Parameters:**
- `PrintStream` `out`
- `PrintStream` `warn`
- `PrintStream` `err`
- `DebugType` `debugType`

## Methods

### public void setLogSeverity(LogSeverity newSeverity)

**Parameters:**
- `LogSeverity` `newSeverity`

**Returns:** `void`

### public DebugType getDebugType()

**Returns:** `DebugType`

### public LogSeverity getLogSeverity()

**Returns:** `LogSeverity`

### public PrintStream getWrappedOutStream()

**Returns:** `PrintStream`

### public PrintStream getWrappedWarnStream()

**Returns:** `PrintStream`

### public PrintStream getWrappedErrStream()

**Returns:** `PrintStream`

### public IDebugLogFormatter getFormatter()

**Returns:** `IDebugLogFormatter`

### public static String generateCallerPrefix()

Returns the class name and method name prefix of the calling code.

**Returns:** `String`

### public static String getStackTraceElementString(StackTraceElement[] stackTraceElements,
int atIDx,
boolean includeLogTraceFileLocation)

**Parameters:**
- `StackTraceElement[]` `stackTraceElements`
- `int` `atIDx`
- `boolean` `includeLogTraceFileLocation`

**Returns:** `String`

### public static String getTopStackTraceString(Throwable ex)

**Parameters:**
- `Throwable` `ex`

**Returns:** `String`

### public void printStackTrace(LogSeverity severity,
int depthStart,
int depthCount,
String messageFormat,
Object... params)

**Parameters:**
- `LogSeverity` `severity`
- `int` `depthStart`
- `int` `depthCount`
- `String` `messageFormat`
- `Object...` `params`

**Returns:** `void`

### public boolean isEnabled()

**Returns:** `boolean`

### public boolean isLogEnabled(LogSeverity logSeverity)

**Parameters:**
- `LogSeverity` `logSeverity`

**Returns:** `boolean`

### public void trace(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void debugln(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void debugOnceln(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void noise(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void warn(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void warnOnce(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void error(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void debuglnWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void debugOncelnWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void noiseWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void warnWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void errorWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void traceWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void warnOnceWithTraceOffset(int backTraceOffset,
Object format,
Object... params)

**Parameters:**
- `int` `backTraceOffset`
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void print(boolean b)

Prints a boolean value. The string produced by String.valueOf(boolean) is translated into bytes
according to the platform's default character encoding, and these bytes
are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `boolean` `b` — The boolean to be printed

**Returns:** `void`

### public void print(char c)

Prints a character. The character is translated into one or more bytes
according to the platform's default character encoding, and these bytes
are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `char` `c` — The char to be printed

**Returns:** `void`

### public void print(int i)

Prints an integer. The string produced by String.valueOf(int) is translated into bytes
according to the platform's default character encoding, and these bytes
are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `int` `i` — The int to be printed

**Returns:** `void`

### public void print(long l)

Prints a long integer. The string produced by String.valueOf(long) is translated into bytes
according to the platform's default character encoding, and these bytes
are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `long` `l` — The long to be printed

**Returns:** `void`

### public void print(float f)

Prints a floating-point number. The string produced by String.valueOf(float) is translated into bytes
according to the platform's default character encoding, and these bytes
are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `float` `f` — The float to be printed

**Returns:** `void`

### public void print(double d)

Prints a double-precision floating-point number. The string produced by
String.valueOf(double) is translated into
bytes according to the platform's default character encoding, and these
bytes are written in exactly the manner of the PrintStream.write(int) method.

**Parameters:**
- `double` `d` — The double to be printed

**Returns:** `void`

### public void print(String s)

Prints a string. If the argument is null then the string
"null" is printed. Otherwise, the string's characters are
converted into bytes according to the platform's default character
encoding, and these bytes are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `String` `s` — The String to be printed

**Returns:** `void`

### public void print(Object obj)

Prints an object. The string produced by the String.valueOf(Object) method is translated into bytes
according to the platform's default character encoding, and these bytes
are written in exactly the manner of the
PrintStream.write(int) method.

**Parameters:**
- `Object` `obj` — The Object to be printed

**Returns:** `void`

### public PrintStream printf(String format,
Object... args)

**Parameters:**
- `String` `format`
- `Object...` `args`

**Returns:** `PrintStream`

### public void println()

Terminates the current line by writing the line separator string. The
line separator string is defined by the system property
line.separator, and is not necessarily a single newline
character ('\n').

**Returns:** `void`

### public void println(boolean x)

Prints a boolean and then terminate the line. This method behaves as
though it invokes print(boolean) and then
println().

**Parameters:**
- `boolean` `x` — The boolean to be printed

**Returns:** `void`

### public void println(char x)

Prints a character and then terminate the line. This method behaves as
though it invokes print(char) and then
println().

**Parameters:**
- `char` `x` — The char to be printed.

**Returns:** `void`

### public void println(int x)

Prints an integer and then terminate the line. This method behaves as
though it invokes print(int) and then
println().

**Parameters:**
- `int` `x` — The int to be printed.

**Returns:** `void`

### public void println(long x)

Prints a long and then terminate the line. This method behaves as
though it invokes print(long) and then
println().

**Parameters:**
- `long` `x` — a The long to be printed.

**Returns:** `void`

### public void println(float x)

Prints a float and then terminate the line. This method behaves as
though it invokes print(float) and then
println().

**Parameters:**
- `float` `x` — The float to be printed.

**Returns:** `void`

### public void println(double x)

Prints a double and then terminate the line. This method behaves as
though it invokes print(double) and then
println().

**Parameters:**
- `double` `x` — The double to be printed.

**Returns:** `void`

### public void println(char[] x)

Prints a character and then terminate the line. This method behaves as
though it invokes print(char) and then
println().

**Parameters:**
- `char[]` `x` — The char to be printed.

**Returns:** `void`

### public void println(String x)

Prints a String and then terminate the line. This method behaves as
though it invokes print(String) and then
println().

**Parameters:**
- `String` `x` — The String to be printed.

**Returns:** `void`

### public void println(Object x)

Prints an Object and then terminate the line. This method calls
at first String.valueOf(x) to get the printed object's string value,
then behaves as
though it invokes print(String) and then
println().

**Parameters:**
- `Object` `x` — The Object to be printed.

**Returns:** `void`

### public void println(Object format,
Object... params)

**Parameters:**
- `Object` `format`
- `Object...` `params`

**Returns:** `void`

### public void printException(Throwable ex,
String errorMessage,
LogSeverity severity)

**Parameters:**
- `Throwable` `ex`
- `String` `errorMessage`
- `LogSeverity` `severity`

**Returns:** `void`

### public void printException(Throwable ex,
String errorMessage,
String callerPrefix,
LogSeverity severity)

**Parameters:**
- `Throwable` `ex`
- `String` `errorMessage`
- `String` `callerPrefix`
- `LogSeverity` `severity`

**Returns:** `void`

### public void printException(Throwable ex,
LogSeverity severity,
String callerPrefix,
String errorMessageFormat,
Object... params)

**Parameters:**
- `Throwable` `ex`
- `LogSeverity` `severity`
- `String` `callerPrefix`
- `String` `errorMessageFormat`
- `Object...` `params`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\DebugLogStream.html`*
