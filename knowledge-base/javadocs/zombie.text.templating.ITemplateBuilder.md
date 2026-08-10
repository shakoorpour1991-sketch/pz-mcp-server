---
title: zombie.text.templating.ITemplateBuilder
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.text.templating
---

# zombie.text.templating.ITemplateBuilder

`public interface ITemplateBuilder`

**Kind:** interface · **Package:** zombie.text.templating

## Description

TurboTuTone.

## Methods

### String Build(String input)

**Parameters:**
- `String` `input`

**Returns:** `String`

### String Build(String input,
IReplaceProvider replaceProvider)

**Parameters:**
- `String` `input`
- `IReplaceProvider` `replaceProvider`

**Returns:** `String`

### String Build(String input,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `input`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `String`

### void RegisterKey(String key,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `key`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `void`

### void RegisterKey(String key,
IReplace replace)

**Parameters:**
- `String` `key`
- `IReplace` `replace`

**Returns:** `void`

### void Reset()

**Returns:** `void`

### void CopyFrom(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\text\templating\ITemplateBuilder.html`*
