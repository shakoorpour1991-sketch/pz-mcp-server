---
title: zombie.commands.CommandBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.commands
---

# zombie.commands.CommandBase

`public abstract class CommandBase extends Object`

**Kind:** class · **Package:** zombie.commands

## Inheritance
- java.lang.Object
- zombie.commands.CommandBase

## Methods

### public static Class<?>[] getSubClasses()

**Returns:** `Class<?>[]`

### public static Class<?> findCommandCls(String command)

**Parameters:**
- `String` `command`

**Returns:** `Class<?>`

### public static String getHelp(Class<?> cls)

**Parameters:**
- `Class<?>` `cls`

**Returns:** `String`

### public static String getCommandName(Class<?> cls)

**Parameters:**
- `Class<?>` `cls`

**Returns:** `String`

### public static boolean isDisabled(Class<?> cls)

**Parameters:**
- `Class<?>` `cls`

**Returns:** `boolean`

### public String Execute()
throws SQLException

**Returns:** `String`

### public boolean canBeExecuted()

**Returns:** `boolean`

### public boolean isCommandComeFromServerConsole()

**Returns:** `boolean`

### public boolean hasHelp()

**Returns:** `boolean`

### public String getCommandArg(Integer argNumber)

**Parameters:**
- `Integer` `argNumber`

**Returns:** `String`

### public boolean hasOptionalArg(Integer argNumber)

**Parameters:**
- `Integer` `argNumber`

**Returns:** `boolean`

### public int getCommandArgsCount()

**Returns:** `int`

### public boolean parseCommand()

**Returns:** `boolean`

### public boolean isParsingSuccessful()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\commands\CommandBase.html`*
