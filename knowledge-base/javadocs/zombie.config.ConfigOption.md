---
title: zombie.config.ConfigOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.config
---

# zombie.config.ConfigOption

`public abstract class ConfigOption extends Object`

**Kind:** class · **Package:** zombie.config

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption

## Constructors

### public ConfigOption(String name)

**Parameters:**
- `String` `name`

## Methods

### public String getName()

**Returns:** `String`

### public abstract String getType()

**Returns:** `String`

### public abstract void resetToDefault()

**Returns:** `void`

### public abstract void setDefaultToCurrentValue()

**Returns:** `void`

### public abstract void parse(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public abstract String getValueAsString()

**Returns:** `String`

### public String getValueAsLuaString()

**Returns:** `String`

### public abstract void setValueFromObject(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `void`

### public abstract Object getValueAsObject()

**Returns:** `Object`

### public abstract boolean isValidString(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public abstract String getTooltip()

**Returns:** `String`

### public abstract ConfigOption makeCopy()

**Returns:** `ConfigOption`

### public void setOnChangeCallback(ConfigOption.ConfigOptionOnChangeCallback onChange)

**Parameters:**
- `ConfigOption.ConfigOptionOnChangeCallback` `onChange`

**Returns:** `void`

### public void invokeOnChangeEvent()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\config\ConfigOption.html`*
