---
title: generation.builders.Writeable.ListProperty
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: generation.builders
---

# generation.builders.Writeable.ListProperty

`public static class Writeable.ListProperty<T> extends Object implements Writeable.WriteableProperty<List<T>>`

**Kind:** class · **Package:** generation.builders

## Inheritance
- java.lang.Object
- generation.builders.Writeable.ListProperty<T>

## Constructors

### public ListProperty(String string,
Writeable.ListProperty.Flags... flagss)

**Parameters:**
- `String` `string`
- `Writeable.ListProperty.Flags...` `flagss`

### public ListProperty(String string0,
String string1,
Writeable.ListProperty.Flags... flagss)

**Parameters:**
- `String` `string0`
- `String` `string1`
- `Writeable.ListProperty.Flags...` `flagss`

## Methods

### public void addValues(T... objects)

**Parameters:**
- `T...` `objects`

**Returns:** `void`

### public String getKey()

**Returns:** `String`

### public List<T> getValue()

**Returns:** `List<T>`

### public String getAsString()

**Returns:** `String`

### public boolean shouldWrite()

**Returns:** `boolean`

### public void write(Writer writer,
int int0,
String string)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `string`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\Writeable.ListProperty.html`*
