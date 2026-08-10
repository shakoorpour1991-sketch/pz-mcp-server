---
title: zombie.core.Translator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.Translator

`public final class Translator extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.Translator

## Fields

### public static final char[] LOOKALIKE_CHARS

### public static boolean debug

### public static final Map<String, Map<String,String>> BY_NAME

### public static Language language

## Constructors

### public Translator()

## Methods

### public static void loadFiles()

**Returns:** `void`

### public static void forLanguageStack(Consumer<Language> consumer)

**Parameters:**
- `Consumer<Language>` `consumer`

**Returns:** `void`

### public static void readMapTranslation(ChooseGameInfo.Map map,
String dir)

**Parameters:**
- `ChooseGameInfo.Map` `map`
- `String` `dir`

**Returns:** `void`

### public static void readModTranslation(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `void`

### public static String getText(String desc)

Return the translated text for the selected language
If we don't fnid any translation for the selected language, we return the default text (in English)

**Parameters:**
- `String` `desc`

**Returns:** `String`

### public static String getTextOrNull(String desc)

**Parameters:**
- `String` `desc`

**Returns:** `String`

### public static String getText(String desc,
Object... args)

**Parameters:**
- `String` `desc`
- `Object...` `args`

**Returns:** `String`

### public static String getTextOrNull(String desc,
Object... args)

**Parameters:**
- `String` `desc`
- `Object...` `args`

**Returns:** `String`

### public static void setLanguage(Language newlanguage)

**Parameters:**
- `Language` `newlanguage`

**Returns:** `void`

### public static void setLanguage(int languageId)

**Parameters:**
- `int` `languageId`

**Returns:** `void`

### public static Language getLanguage()

**Returns:** `Language`

### public static List<Language> getAvailableLanguage()

**Returns:** `List<Language>`

### public static String getDisplayItemName(String trim)

**Parameters:**
- `String` `trim`

**Returns:** `String`

### public static String getItemNameFromFullType(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `String`

### public static void setDefaultItemEvolvedRecipeName(String fullType,
String english)

**Parameters:**
- `String` `fullType`
- `String` `english`

**Returns:** `void`

### public static String getItemEvolvedRecipeName(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `String`

### public static String getMoveableDisplayName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public static String getMoveableDisplayNameOrNull(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public static String getRecipeName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public static String getRecipeGroupName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public static Language getDefaultLanguage()

**Returns:** `Language`

### public static void debugItemEvolvedRecipeNames()

**Returns:** `void`

### public static void debugItemNames()

**Returns:** `void`

### public static void debugMultiStageBuildNames()

**Returns:** `void`

### public static void debugRecipeNames()

**Returns:** `void`

### public static void debugRecipeGroupNames()

**Returns:** `void`

### public static ArrayList<String> getAzertyMap()

**Returns:** `ArrayList<String>`

### public static String getRadioText(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String getTextMediaEN(String desc)

**Parameters:**
- `String` `desc`

**Returns:** `String`

### public static String getAttributeText(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String getAttributeTextOrNull(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String getFluidText(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String getEntityText(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String getMapLabelText(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static Map<String,String> getUI()

**Returns:** `Map<String,String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Translator.html`*
