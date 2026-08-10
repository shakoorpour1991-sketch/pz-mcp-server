---
title: zombie.debug.BooleanDebugOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.BooleanDebugOption

`public class BooleanDebugOption extends BooleanConfigOption implements IDebugOption`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.BooleanConfigOption
- zombie.debug.BooleanDebugOption

## Constructors

### public BooleanDebugOption(String name,
boolean debugOnly,
boolean defaultValue)

**Parameters:**
- `String` `name`
- `boolean` `debugOnly`
- `boolean` `defaultValue`

## Methods

### public String getName()

**Returns:** `String`

### public boolean getValue()

**Returns:** `boolean`

### public boolean isDebugOnly()

**Returns:** `boolean`

### public IDebugOptionGroup getParent()

**Returns:** `IDebugOptionGroup`

### public void setParent(IDebugOptionGroup parent)

**Parameters:**
- `IDebugOptionGroup` `parent`

**Returns:** `void`

### public void onFullPathChanged()

**Returns:** `void`

### public static BooleanDebugOption newOption(IDebugOptionGroup parentGroup,
String name,
boolean defaultValue)

**Parameters:**
- `IDebugOptionGroup` `parentGroup`
- `String` `name`
- `boolean` `defaultValue`

**Returns:** `BooleanDebugOption`

### public static BooleanDebugOption newDebugOnlyOption(IDebugOptionGroup parentGroup,
String name,
boolean defaultValue)

**Parameters:**
- `IDebugOptionGroup` `parentGroup`
- `String` `name`
- `boolean` `defaultValue`

**Returns:** `BooleanDebugOption`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\BooleanDebugOption.html`*
