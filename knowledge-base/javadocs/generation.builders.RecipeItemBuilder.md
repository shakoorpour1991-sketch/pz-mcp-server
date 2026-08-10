---
title: generation.builders.RecipeItemBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: generation.builders
---

# generation.builders.RecipeItemBuilder

`public class RecipeItemBuilder extends Object implements RecipeElement, Writeable`

**Kind:** class · **Package:** generation.builders

## Inheritance
- java.lang.Object
- generation.builders.RecipeItemBuilder

## Constructors

### public RecipeItemBuilder(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

## Methods

### public static RecipeItemBuilder input()

**Returns:** `RecipeItemBuilder`

### public static RecipeItemBuilder output()

**Returns:** `RecipeItemBuilder`

### public Set<String> getMappers()

**Returns:** `Set<String>`

### public RecipeItemBuilder overlayMapper()

**Returns:** `RecipeItemBuilder`

### public boolean hasOverlayMapper()

**Returns:** `boolean`

### public RecipeItemBuilder anyInput()

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder tag(ItemTag... itemTags)

**Parameters:**
- `ItemTag...` `itemTags`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder tag(int int0,
ItemTag... itemTags)

**Parameters:**
- `int` `int0`
- `ItemTag...` `itemTags`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder tag(double double0,
ItemTag... itemTags)

**Parameters:**
- `double` `double0`
- `ItemTag...` `itemTags`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder item(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder item(int int0,
ItemKey itemKey)

**Parameters:**
- `int` `int0`
- `ItemKey` `itemKey`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder item(double double0,
ItemKey itemKey)

**Parameters:**
- `double` `double0`
- `ItemKey` `itemKey`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder mapper(String string)

**Parameters:**
- `String` `string`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder mapper(int int0,
String string)

**Parameters:**
- `int` `int0`
- `String` `string`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder variable(int int0,
int int1)

**Parameters:**
- `int` `int0`
- `int` `int1`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder mode(ItemApplyMode itemApplyMode)

**Parameters:**
- `ItemApplyMode` `itemApplyMode`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder flags(InputFlag... inputFlags)

**Parameters:**
- `InputFlag...` `inputFlags`

**Returns:** `RecipeItemBuilder`

### public RecipeItemBuilder mappers(String... strings)

**Parameters:**
- `String...` `strings`

**Returns:** `RecipeItemBuilder`

### public void write(Writer writer,
int int0,
String var3)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `var3`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\RecipeItemBuilder.html`*
