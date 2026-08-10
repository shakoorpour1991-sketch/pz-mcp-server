---
title: zombie.text.templating.ReplaceProvider
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.text.templating
---

# zombie.text.templating.ReplaceProvider

`public class ReplaceProvider extends Object implements IReplaceProvider`

**Kind:** class · **Package:** zombie.text.templating

## Inheritance
- java.lang.Object
- zombie.text.templating.ReplaceProvider

## Description

TurboTuTone.
A generic non-pooled ReplaceProvider that can be used for example in scripting,
where the provider could provide forced overrides for certain template keys.

## Constructors

### public ReplaceProvider()

## Methods

### public void addKey(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `void`

### public void addKey(String key,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `key`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `void`

### public void addReplacer(String key,
IReplace replace)

**Parameters:**
- `String` `key`
- `IReplace` `replace`

**Returns:** `void`

### public boolean hasReplacer(String key)

**Parameters:**
- `String` `key`

**Returns:** `boolean`

### public IReplace getReplacer(String key)

**Parameters:**
- `String` `key`

**Returns:** `IReplace`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\text\templating\ReplaceProvider.html`*
