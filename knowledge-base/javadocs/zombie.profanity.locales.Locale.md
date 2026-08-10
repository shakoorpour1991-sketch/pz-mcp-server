---
title: zombie.profanity.locales.Locale
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.profanity.locales
---

# zombie.profanity.locales.Locale

`public abstract class Locale extends Object`

**Kind:** class · **Package:** zombie.profanity.locales

## Inheritance
- java.lang.Object
- zombie.profanity.locales.Locale

## Methods

### public String getID()

**Returns:** `String`

### public String getPhoneticRules()

**Returns:** `String`

### public int getFilterWordsCount()

**Returns:** `int`

### public void addWhiteListWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void removeWhiteListWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public boolean isWhiteListedWord(String str)

**Parameters:**
- `String` `str`

**Returns:** `boolean`

### public void addFilterWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void removeFilterWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void addFilterContains(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public void removeFilterContains(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public void addFilterRawWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void removeFilterWordRaw(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public String filterWord(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public String filterWord(String str,
boolean includeContaining)

**Parameters:**
- `String` `str`
- `boolean` `includeContaining`

**Returns:** `String`

### public String validateWord(String str,
boolean includeContaining)

**Parameters:**
- `String` `str`
- `boolean` `includeContaining`

**Returns:** `String`

### public String returnMatchSetForWord(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public String returnPhonizedWord(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\profanity\locales\Locale.html`*
