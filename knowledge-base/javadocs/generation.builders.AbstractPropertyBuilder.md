---
title: generation.builders.AbstractPropertyBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: generation.builders
---

# generation.builders.AbstractPropertyBuilder

`public abstract class AbstractPropertyBuilder extends Object implements Writeable, Named`

**Kind:** class · **Package:** generation.builders

## Inheritance
- java.lang.Object
- generation.builders.AbstractPropertyBuilder

## Constructors

### public AbstractPropertyBuilder()

### public AbstractPropertyBuilder(String string)

**Parameters:**
- `String` `string`

### public AbstractPropertyBuilder(String string,
BiFunction<String,String,String> biFunction)

**Parameters:**
- `String` `string`
- `BiFunction<String,String,String>` `biFunction`

## Methods

### public String getName()

**Returns:** `String`

### public void write(Writer writer,
int int0,
String string)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `string`

**Returns:** `void`

### public <T> Optional<T> get(String string)

**Returns:** `Optional<T>`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\AbstractPropertyBuilder.html`*
