---
title: zombie.SandboxOptions.EnumSandboxOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SandboxOptions.EnumSandboxOption

`public static class SandboxOptions.EnumSandboxOption extends EnumConfigOption implements SandboxOptions.SandboxOption`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.IntegerConfigOption
- zombie.config.EnumConfigOption
- zombie.SandboxOptions.EnumSandboxOption

## Constructors

### public EnumSandboxOption(SandboxOptions owner,
String name,
int numValues,
int defaultValue)

**Parameters:**
- `SandboxOptions` `owner`
- `String` `name`
- `int` `numValues`
- `int` `defaultValue`

## Methods

### public EnumConfigOption asConfigOption()

**Returns:** `EnumConfigOption`

### public String getShortName()

**Returns:** `String`

### public String getTableName()

**Returns:** `String`

### public SandboxOptions.EnumSandboxOption setTranslation(String translation)

**Parameters:**
- `String` `translation`

**Returns:** `SandboxOptions.EnumSandboxOption`

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

### public SandboxOptions.EnumSandboxOption setPageName(String pageName)

**Parameters:**
- `String` `pageName`

**Returns:** `SandboxOptions.EnumSandboxOption`

### public String getPageName()

**Returns:** `String`

### public SandboxOptions.EnumSandboxOption setValueTranslation(String translation)

**Parameters:**
- `String` `translation`

**Returns:** `SandboxOptions.EnumSandboxOption`

### public String getValueTranslation()

**Returns:** `String`

### public String getValueTranslationByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public String getValueTranslationByIndexOrNull(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SandboxOptions.EnumSandboxOption.html`*
