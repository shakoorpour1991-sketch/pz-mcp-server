---
title: zombie.text.templating.TemplateText
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.text.templating
---

# zombie.text.templating.TemplateText

`public class TemplateText extends Object`

**Kind:** class · **Package:** zombie.text.templating

## Inheritance
- java.lang.Object
- zombie.text.templating.TemplateText

## Description

TurboTuTone.

## Constructors

### public TemplateText()

## Methods

### public static ITemplateBuilder CreateBlanc()

**Returns:** `ITemplateBuilder`

### public static ITemplateBuilder CreateCopy()

**Returns:** `ITemplateBuilder`

### public static String Build(String input)

**Parameters:**
- `String` `input`

**Returns:** `String`

### public static String Build(String input,
IReplaceProvider replaceProvider)

**Parameters:**
- `String` `input`
- `IReplaceProvider` `replaceProvider`

**Returns:** `String`

### public static String Build(String input,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `input`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `String`

### public static void RegisterKey(String key,
se.krka.kahlua.j2se.KahluaTableImpl table)

**Parameters:**
- `String` `key`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`

**Returns:** `void`

### public static void RegisterKey(String key,
IReplace replace)

**Parameters:**
- `String` `key`
- `IReplace` `replace`

**Returns:** `void`

### public static void Initialize()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static float RandNext(float min,
float max)

**Parameters:**
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static float RandNext(float bound)

**Parameters:**
- `float` `bound`

**Returns:** `float`

### public static int RandNext(int min,
int max)

**Parameters:**
- `int` `min`
- `int` `max`

**Returns:** `int`

### public static int RandNext(int bound)

**Parameters:**
- `int` `bound`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\text\templating\TemplateText.html`*
