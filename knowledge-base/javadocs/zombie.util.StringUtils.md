---
title: zombie.util.StringUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.StringUtils

`public class StringUtils extends Object`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.StringUtils

## Fields

### public static final String s_emptyString

### public static final char UTF8_BOM

## Constructors

### public StringUtils()

## Methods

### public static boolean isNullOrEmpty(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static boolean isNullOrWhitespace(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static String discardNullOrWhitespace(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public static String trimPrefix(String str,
String prefix)

**Parameters:**
- `String` `str`
- `String` `prefix`

**Returns:** `String`

### public static String trimSuffix(String str,
String suffix)

**Parameters:**
- `String` `str`
- `String` `suffix`

**Returns:** `String`

### public static boolean equals(String a,
String b)

**Parameters:**
- `String` `a`
- `String` `b`

**Returns:** `boolean`

### public static boolean startsWithIgnoreCase(String str,
String prefix)

**Parameters:**
- `String` `str`
- `String` `prefix`

**Returns:** `boolean`

### public static boolean endsWithIgnoreCase(String str,
String suffix)

**Parameters:**
- `String` `str`
- `String` `suffix`

**Returns:** `boolean`

### public static boolean containsIgnoreCase(String haystack,
String needle)

**Parameters:**
- `String` `haystack`
- `String` `needle`

**Returns:** `boolean`

### public static boolean equalsIgnoreCase(String a,
String b)

**Parameters:**
- `String` `a`
- `String` `b`

**Returns:** `boolean`

### public static boolean tryParseBoolean(String varStr)

**Parameters:**
- `String` `varStr`

**Returns:** `boolean`

### public static boolean isBoolean(String varStr)

**Parameters:**
- `String` `varStr`

**Returns:** `boolean`

### public static boolean isFloat(String varStr)

**Parameters:**
- `String` `varStr`

**Returns:** `boolean`

### public static float tryParseFloat(String valueStr)

**Parameters:**
- `String` `valueStr`

**Returns:** `float`

### public static boolean isInt(String varStr)

**Parameters:**
- `String` `varStr`

**Returns:** `boolean`

### public static int tryParseInt(String valueStr)

**Parameters:**
- `String` `valueStr`

**Returns:** `int`

### public static int tryParseInt(String valueStr,
int defaultValue)

**Parameters:**
- `String` `valueStr`
- `int` `defaultValue`

**Returns:** `int`

### public static <E extends Enum<E>> E tryParseEnum(Class<E> enumClass,
String enumStr,
E defaultVal)

**Returns:** `E`

### public static <E extends Enum<E>, S> E tryParseEnum(Class<E> enumClass,
S comparison,
Predicates.Params1.ICallback<E,S> predicate,
E defaultVal)

**Returns:** `E`

### public static boolean contains(String[] array,
String val,
BiFunction<String,String,Boolean> equalizer)

**Parameters:**
- `String[]` `array`
- `String` `val`
- `BiFunction<String,String,Boolean>` `equalizer`

**Returns:** `boolean`

### public static int indexOf(String[] array,
String val,
BiFunction<String,String,Boolean> equalizer)

**Parameters:**
- `String[]` `array`
- `String` `val`
- `BiFunction<String,String,Boolean>` `equalizer`

**Returns:** `int`

### public static String indent(String text)

**Parameters:**
- `String` `text`

**Returns:** `String`

### public static String leftJustify(String text,
int length)

**Parameters:**
- `String` `text`
- `int` `length`

**Returns:** `String`

### public static String moduleDotType(String module,
String type)

**Parameters:**
- `String` `module`
- `String` `type`

**Returns:** `String`

### public static String stripModule(String type)

**Parameters:**
- `String` `type`

**Returns:** `String`

### public static String stripBOM(String line)

**Parameters:**
- `String` `line`

**Returns:** `String`

### public static boolean containsDoubleDot(String str)

**Parameters:**
- `String` `str`

**Returns:** `boolean`

### public static boolean containsWhitespace(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static String removeWhitespace(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String[] trimArray(String[] arr)

**Parameters:**
- `String[]` `arr`

**Returns:** `String[]`

### public static String trimSurroundingQuotes(String s)

**Parameters:**
- `String` `s`

**Returns:** `String`

### public static String trimSurroundingQuotes(String s,
boolean trim)

**Parameters:**
- `String` `s`
- `boolean` `trim`

**Returns:** `String`

### public static boolean isValidVariableName(String varName)

**Parameters:**
- `String` `varName`

**Returns:** `boolean`

### public static boolean isValidVariableChar(char ch)

**Parameters:**
- `char` `ch`

**Returns:** `boolean`

### public static boolean isAlpha(char ch)

**Parameters:**
- `char` `ch`

**Returns:** `boolean`

### public static boolean isNumeric(char ch)

**Parameters:**
- `char` `ch`

**Returns:** `boolean`

### public static boolean isAlphaNumeric(char ch)

**Parameters:**
- `char` `ch`

**Returns:** `boolean`

### public static int compareIgnoreCase(String a,
String b)

**Parameters:**
- `String` `a`
- `String` `b`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\StringUtils.html`*
