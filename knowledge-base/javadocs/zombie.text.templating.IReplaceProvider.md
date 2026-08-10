---
title: zombie.text.templating.IReplaceProvider
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.text.templating
---

# zombie.text.templating.IReplaceProvider

`public interface IReplaceProvider`

**Kind:** interface · **Package:** zombie.text.templating

## Description

TurboTuTone.
Interface that can provide IReplace for ITemplateBuilder.
Any keys present in a IReplaceProvider take priority when replacing keys in a template.

NOTE: When checking the key String, this should be equaling a lowercase version or equalsIgnoreCase

## Methods

### boolean hasReplacer(String key)

**Parameters:**
- `String` `key`

**Returns:** `boolean`

### IReplace getReplacer(String key)

**Parameters:**
- `String` `key`

**Returns:** `IReplace`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\text\templating\IReplaceProvider.html`*
