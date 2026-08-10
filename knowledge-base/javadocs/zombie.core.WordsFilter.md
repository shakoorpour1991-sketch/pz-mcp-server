---
title: zombie.core.WordsFilter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.WordsFilter

`public class WordsFilter extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.WordsFilter

## Constructors

### public WordsFilter()

## Methods

### public static WordsFilter getInstance()

**Returns:** `WordsFilter`

### public void loadWords(String badWordsFilename,
String goodWordsFilename)

**Parameters:**
- `String` `badWordsFilename`
- `String` `goodWordsFilename`

**Returns:** `void`

### public void buildTree(List<String> words,
WordsFilter.WordType type)

**Parameters:**
- `List<String>` `words`
- `WordsFilter.WordType` `type`

**Returns:** `void`

### public void loadReplacementsFromFile(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public List<WordsFilter.SearchResult> searchText(String text)

**Parameters:**
- `String` `text`

**Returns:** `List<WordsFilter.SearchResult>`

### public boolean detectBadWords(String text)

**Parameters:**
- `String` `text`

**Returns:** `boolean`

### public String hideBadWords(String text,
List<WordsFilter.SearchResult> badWordsList,
String hideChar)

**Parameters:**
- `String` `text`
- `List<WordsFilter.SearchResult>` `badWordsList`
- `String` `hideChar`

**Returns:** `String`

### public void saveTreeToFile(String filename)
throws IOException

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public void loadTreeFromFile(String filename)
throws IOException

**Parameters:**
- `String` `filename`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\WordsFilter.html`*
