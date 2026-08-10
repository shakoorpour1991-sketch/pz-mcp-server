---
title: generation.builders.Writeable.WriteableProperty
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: generation.builders
---

# generation.builders.Writeable.WriteableProperty

`public static interface Writeable.WriteableProperty<T> extends Writeable`

**Kind:** interface · **Package:** generation.builders

## Methods

### String getKey()

**Returns:** `String`

### T getValue()

**Returns:** `T`

### String getAsString()

**Returns:** `String`

### boolean shouldWrite()

**Returns:** `boolean`

### default void write(Writer writer,
int int0)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`

**Returns:** `void`

### default void write(Writer writer,
int int0,
String string)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `string`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\Writeable.WriteableProperty.html`*
