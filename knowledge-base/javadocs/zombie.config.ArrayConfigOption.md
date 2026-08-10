---
title: zombie.config.ArrayConfigOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.config
---

# zombie.config.ArrayConfigOption

`public class ArrayConfigOption extends ConfigOption`

**Kind:** class · **Package:** zombie.config

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.ArrayConfigOption

## Constructors

### public ArrayConfigOption(String name,
ConfigOption elementHandler,
String separator,
String defaultValue)

**Parameters:**
- `String` `name`
- `ConfigOption` `elementHandler`
- `String` `separator`
- `String` `defaultValue`

## Methods

### public ArrayConfigOption setFixedSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `ArrayConfigOption`

### public ArrayConfigOption setMultiLine(boolean bMultiLine)

**Parameters:**
- `boolean` `bMultiLine`

**Returns:** `ArrayConfigOption`

### public boolean isMultiLine()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

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

### public String getTooltip()

**Returns:** `String`

### public ConfigOption makeCopy()

**Returns:** `ConfigOption`

### public int size()

**Returns:** `int`

### public ConfigOption getElement(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public ArrayConfigOption setValueVarArgs(Object... args)

**Parameters:**
- `Object...` `args`

**Returns:** `ArrayConfigOption`

### public ColorInfo getValueAsColorInfo(ColorInfo colorInfo)

**Parameters:**
- `ColorInfo` `colorInfo`

**Returns:** `ColorInfo`

### public double getElementAsDouble(int index,
float defaultValue)

**Parameters:**
- `int` `index`
- `float` `defaultValue`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\config\ArrayConfigOption.html`*
