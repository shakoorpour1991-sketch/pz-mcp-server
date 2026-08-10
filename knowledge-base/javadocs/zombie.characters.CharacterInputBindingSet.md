---
title: zombie.characters.CharacterInputBindingSet
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.CharacterInputBindingSet

`public class CharacterInputBindingSet extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.CharacterInputBindingSet

## Fields

### public String name

### public String description

### public CharacterInputBindingSetEntry[] allBindings

## Constructors

### public CharacterInputBindingSet()

## Methods

### public String getName()

**Returns:** `String`

### public String getDescription()

**Returns:** `String`

### public void apply()

**Returns:** `void`

### public void setBindingsToCurrent()

**Returns:** `void`

### public boolean save()

**Returns:** `boolean`

### public void addBinding(CharacterInputBindingSetEntry newBinding)

**Parameters:**
- `CharacterInputBindingSetEntry` `newBinding`

**Returns:** `void`

### public static CharacterInputBindingSet[] getLoadedBindingSets()

**Returns:** `CharacterInputBindingSet[]`

### public static CharacterInputBindingSet[] reloadAll()

**Returns:** `CharacterInputBindingSet[]`

### public static boolean saveAll()

**Returns:** `boolean`

### public static boolean containsSetName(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public static String getUniqueSetName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public static CharacterInputBindingSet createNewFromCurrent(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterInputBindingSet`

### public static void resetAllToDefault()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterInputBindingSet.html`*
