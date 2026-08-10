---
title: generation.builders.Writeable
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: generation.builders
---

# generation.builders.Writeable

`public interface Writeable`

**Kind:** interface · **Package:** generation.builders

## Methods

### void write(Writer var1,
int var2,
String var3)
throws IOException

**Parameters:**
- `Writer` `var1`
- `int` `var2`
- `String` `var3`

**Returns:** `void`

### default void writeValue(Writer writer,
int int0,
Object object)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `Object` `object`

**Returns:** `void`

### default void writeKeyValue(Writer writer,
int int0,
Object object0,
Object object1)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `Object` `object0`
- `Object` `object1`

**Returns:** `void`

### default void writeProperties(Writer writer,
int int0,
Object object,
Writeable.WriteableProperty<?>... writeablePropertys)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `Object` `object`
- `Writeable.WriteableProperty<?>...` `writeablePropertys`

**Returns:** `void`

### default void writeBlockStart(Writer writer,
int int0,
Object object)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `Object` `object`

**Returns:** `void`

### default void writeBlockEnd(Writer writer,
int int0)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`

**Returns:** `void`

### default String indent(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `String`

### default String fromArray(Object[] objects)

**Parameters:**
- `Object[]` `objects`

**Returns:** `String`

### default String formatFloat(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `String`

### default Stream<Float> stream(float... floats)

**Parameters:**
- `float...` `floats`

**Returns:** `Stream<Float>`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\Writeable.html`*
