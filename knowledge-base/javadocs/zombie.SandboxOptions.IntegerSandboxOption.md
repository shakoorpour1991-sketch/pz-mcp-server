---
title: zombie.SandboxOptions.IntegerSandboxOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SandboxOptions.IntegerSandboxOption

`public static class SandboxOptions.IntegerSandboxOption extends IntegerConfigOption implements SandboxOptions.SandboxOption`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.IntegerConfigOption
- zombie.SandboxOptions.IntegerSandboxOption

## Constructors

### public IntegerSandboxOption(SandboxOptions owner,
String name,
int min,
int max,
int defaultValue)

**Parameters:**
- `SandboxOptions` `owner`
- `String` `name`
- `int` `min`
- `int` `max`
- `int` `defaultValue`

## Methods

### public IntegerConfigOption asConfigOption()

**Returns:** `IntegerConfigOption`

### public String getShortName()

**Returns:** `String`

### public String getTableName()

**Returns:** `String`

### public SandboxOptions.IntegerSandboxOption setTranslation(String translation)

**Parameters:**
- `String` `translation`

**Returns:** `SandboxOptions.IntegerSandboxOption`

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

### public SandboxOptions.IntegerSandboxOption setPageName(String pageName)

**Parameters:**
- `String` `pageName`

**Returns:** `SandboxOptions.IntegerSandboxOption`

### public String getPageName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SandboxOptions.IntegerSandboxOption.html`*
