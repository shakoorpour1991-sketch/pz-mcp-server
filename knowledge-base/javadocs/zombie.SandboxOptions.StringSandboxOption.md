---
title: zombie.SandboxOptions.StringSandboxOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SandboxOptions.StringSandboxOption

`public static class SandboxOptions.StringSandboxOption extends StringConfigOption implements SandboxOptions.SandboxOption`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.StringConfigOption
- zombie.SandboxOptions.StringSandboxOption

## Constructors

### public StringSandboxOption(SandboxOptions owner,
String name,
String defaultValue,
int maxLength)

**Parameters:**
- `SandboxOptions` `owner`
- `String` `name`
- `String` `defaultValue`
- `int` `maxLength`

## Methods

### public StringConfigOption asConfigOption()

**Returns:** `StringConfigOption`

### public String getShortName()

**Returns:** `String`

### public String getTableName()

**Returns:** `String`

### public SandboxOptions.StringSandboxOption setTranslation(String translation)

**Parameters:**
- `String` `translation`

**Returns:** `SandboxOptions.StringSandboxOption`

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

### public SandboxOptions.StringSandboxOption setPageName(String pageName)

**Parameters:**
- `String` `pageName`

**Returns:** `SandboxOptions.StringSandboxOption`

### public String getPageName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SandboxOptions.StringSandboxOption.html`*
