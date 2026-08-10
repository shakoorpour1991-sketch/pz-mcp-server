---
title: zombie.config.StringConfigOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.config
---

# zombie.config.StringConfigOption

`public class StringConfigOption extends ConfigOption`

**Kind:** class · **Package:** zombie.config

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.StringConfigOption

## Constructors

### public StringConfigOption(String name,
String defaultValue,
int maxLength)

**Parameters:**
- `String` `name`
- `String` `defaultValue`
- `int` `maxLength`

### public StringConfigOption(String name,
String defaultValue,
ConfigOption.ConfigOptionOnChangeCallback onChange)

**Parameters:**
- `String` `name`
- `String` `defaultValue`
- `ConfigOption.ConfigOptionOnChangeCallback` `onChange`

### public StringConfigOption(String name,
String defaultValue,
String[] values)

**Parameters:**
- `String` `name`
- `String` `defaultValue`
- `String[]` `values`

## Methods

### public String getType()

**Returns:** `String`

### public void resetToDefault()

**Returns:** `void`

### public void setDefaultToCurrentValue()

**Returns:** `void`

### public void parse(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public String getValueAsString()

**Returns:** `String`

### public String getValueAsLuaString()

**Returns:** `String`

### public void setValueFromObject(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `void`

### public Object getValueAsObject()

**Returns:** `Object`

### public boolean isValidString(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public void setValue(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public String getValue()

**Returns:** `String`

### public String getDefaultValue()

**Returns:** `String`

### public String getTooltip()

**Returns:** `String`

### public ConfigOption makeCopy()

**Returns:** `ConfigOption`

### public Set<String> getSplitCSVList()

**Returns:** `Set<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\config\StringConfigOption.html`*
