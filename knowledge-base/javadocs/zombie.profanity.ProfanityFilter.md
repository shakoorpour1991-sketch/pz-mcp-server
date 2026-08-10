---
title: zombie.profanity.ProfanityFilter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.profanity
---

# zombie.profanity.ProfanityFilter

`public class ProfanityFilter extends Object`

**Kind:** class · **Package:** zombie.profanity

## Inheritance
- java.lang.Object
- zombie.profanity.ProfanityFilter

## Fields

### public static final boolean DEBUG

### public static final String LOCALES_DIR

## Methods

### public static ProfanityFilter getInstance()

**Returns:** `ProfanityFilter`

### public static void printDebug(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public void enable(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isEnabled()

**Returns:** `boolean`

### public int getFilterWordsCount()

**Returns:** `int`

### public void addLocale(Locale l)

**Parameters:**
- `Locale` `l`

**Returns:** `void`

### public void addLocale(Locale l,
boolean setDefault)

**Parameters:**
- `Locale` `l`
- `boolean` `setDefault`

**Returns:** `void`

### public Locale getLocale()

**Returns:** `Locale`

### public void addWhiteListWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void removeWhiteListWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void addFilterWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void removeFilterWord(String word)

**Parameters:**
- `String` `word`

**Returns:** `void`

### public void setLocale(String locale)

**Parameters:**
- `String` `locale`

**Returns:** `void`

### public String filterString(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public String validateString(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public String validateString(String str,
boolean includePhonetics,
boolean includeContains,
boolean includeSpacedWords)

**Parameters:**
- `String` `str`
- `boolean` `includePhonetics`
- `boolean` `includeContains`
- `boolean` `includeSpacedWords`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\profanity\ProfanityFilter.html`*
