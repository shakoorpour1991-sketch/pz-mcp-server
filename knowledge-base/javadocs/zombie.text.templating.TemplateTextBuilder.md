---
title: zombie.text.templating.TemplateTextBuilder
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.text.templating
---

# zombie.text.templating.TemplateTextBuilder

`public class TemplateTextBuilder extends Object implements ITemplateBuilder`

**Kind:** class · **Package:** zombie.text.templating

## Inheritance
- java.lang.Object
- zombie.text.templating.TemplateTextBuilder

## Methods

### public void Reset()

**Returns:** `void`

### public String Build(String input)

**Parameters:**
- `String` `input`

**Returns:** `String`

### public String Build(String input,
IReplaceProvider replaceProvider)

**Parameters:**
- `String` `input`
- `IReplaceProvider` `replaceProvider`

**Returns:** `String`

### public String Build(String input,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `input`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `String`

### public void RegisterKey(String key,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `key`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `void`

### public void RegisterKey(String key,
IReplace replace)

**Parameters:**
- `String` `key`
- `IReplace` `replace`

**Returns:** `void`

### public void CopyFrom(Object other)

**Parameters:**
- `Object` `other`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\text\templating\TemplateTextBuilder.html`*
