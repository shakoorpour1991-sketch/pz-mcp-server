---
title: zombie.config.IntegerConfigOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.config
---

# zombie.config.IntegerConfigOption

`public class IntegerConfigOption extends ConfigOption`

**Kind:** class · **Package:** zombie.config

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.IntegerConfigOption

## Constructors

### public IntegerConfigOption(String name,
int min,
int max,
int defaultValue)

**Parameters:**
- `String` `name`
- `int` `min`
- `int` `max`
- `int` `defaultValue`

### public IntegerConfigOption(String name,
int min,
int max,
int defaultValue,
ConfigOption.ConfigOptionOnChangeCallback onChange)

**Parameters:**
- `String` `name`
- `int` `min`
- `int` `max`
- `int` `defaultValue`
- `ConfigOption.ConfigOptionOnChangeCallback` `onChange`

## Methods

### public String getType()

**Returns:** `String`

### public void resetToDefault()

**Returns:** `void`

### public double getMin()

**Returns:** `double`

### public double getMax()

**Returns:** `double`

### public void setDefaultToCurrentValue()

**Returns:** `void`

### public void parse(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public String getValueAsString()

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

### public void setValue(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public int getValue()

**Returns:** `int`

### public int getDefaultValue()

**Returns:** `int`

### public String getTooltip()

**Returns:** `String`

### public ConfigOption makeCopy()

**Returns:** `ConfigOption`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\config\IntegerConfigOption.html`*
