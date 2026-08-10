---
title: zombie.SandboxOptions.DoubleSandboxOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SandboxOptions.DoubleSandboxOption

`public static class SandboxOptions.DoubleSandboxOption extends DoubleConfigOption implements SandboxOptions.SandboxOption`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.DoubleConfigOption
- zombie.SandboxOptions.DoubleSandboxOption

## Constructors

### public DoubleSandboxOption(SandboxOptions owner,
String name,
double min,
double max,
double defaultValue)

**Parameters:**
- `SandboxOptions` `owner`
- `String` `name`
- `double` `min`
- `double` `max`
- `double` `defaultValue`

## Methods

### public DoubleConfigOption asConfigOption()

**Returns:** `DoubleConfigOption`

### public String getShortName()

**Returns:** `String`

### public String getTableName()

**Returns:** `String`

### public SandboxOptions.DoubleSandboxOption setTranslation(String translation)

**Parameters:**
- `String` `translation`

**Returns:** `SandboxOptions.DoubleSandboxOption`

### public String getTranslatedName()

**Returns:** `String`

### public String getTooltip()

**Returns:** `String`

### public void fromTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public void toTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public void setCustom()

**Returns:** `void`

### public boolean isCustom()

**Returns:** `boolean`

### public SandboxOptions.DoubleSandboxOption setPageName(String pageName)

**Parameters:**
- `String` `pageName`

**Returns:** `SandboxOptions.DoubleSandboxOption`

### public String getPageName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SandboxOptions.DoubleSandboxOption.html`*
