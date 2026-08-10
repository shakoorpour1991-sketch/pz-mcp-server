---
title: zombie.SandboxOptions.StrongEnumSandboxOption
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.SandboxOptions.StrongEnumSandboxOption

`public static class SandboxOptions.StrongEnumSandboxOption<EnumType extends Enum<EnumType>> extends SandboxOptions.EnumSandboxOption`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.config.ConfigOption
- zombie.config.IntegerConfigOption
- zombie.config.EnumConfigOption
- zombie.SandboxOptions.EnumSandboxOption
- zombie.SandboxOptions.StrongEnumSandboxOption<EnumType>

## Constructors

### public StrongEnumSandboxOption(SandboxOptions owner,
String name,
Class<EnumType> enumClass,
EnumType defaultValue)

**Parameters:**
- `SandboxOptions` `owner`
- `String` `name`
- `Class<EnumType>` `enumClass`
- `EnumType` `defaultValue`

## Methods

### public EnumType getEnumValue()

**Returns:** `EnumType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\SandboxOptions.StrongEnumSandboxOption.html`*
