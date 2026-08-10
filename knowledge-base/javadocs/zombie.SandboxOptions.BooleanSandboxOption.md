---
title: zombie.SandboxOptions.BooleanSandboxOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SandboxOptions.BooleanSandboxOption

`public static class SandboxOptions.BooleanSandboxOption extends BooleanConfigOption implements SandboxOptions.SandboxOption`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.BooleanConfigOption
- zombie.SandboxOptions.BooleanSandboxOption

## Constructors

### public BooleanSandboxOption(SandboxOptions owner,
String name,
boolean defaultValue)

**Parameters:**
- `SandboxOptions` `owner`
- `String` `name`
- `boolean` `defaultValue`

## Methods

### public BooleanConfigOption asConfigOption()

**Returns:** `BooleanConfigOption`

### public String getShortName()

**Returns:** `String`

### public String getTableName()

**Returns:** `String`

### public SandboxOptions.BooleanSandboxOption setTranslation(String translation)

**Parameters:**
- `String` `translation`

**Returns:** `SandboxOptions.BooleanSandboxOption`

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

### public SandboxOptions.BooleanSandboxOption setPageName(String pageName)

**Parameters:**
- `String` `pageName`

**Returns:** `SandboxOptions.BooleanSandboxOption`

### public String getPageName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SandboxOptions.BooleanSandboxOption.html`*
