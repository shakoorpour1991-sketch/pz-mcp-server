---
title: zombie.util.FieldWalker
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.FieldWalker

`public class FieldWalker extends Object`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.FieldWalker

## Constructors

### public FieldWalker()

## Methods

### public static void walkFields(Object obj,
String parentName,
FieldWalker.TriConsumer<String,Object,Field> consumer)

**Parameters:**
- `Object` `obj`
- `String` `parentName`
- `FieldWalker.TriConsumer<String,Object,Field>` `consumer`

**Returns:** `void`

### public static void walkFields(Object obj,
String parentName,
FieldWalker.TriConsumer<String,Object,Field> consumer,
boolean recursive)

**Parameters:**
- `Object` `obj`
- `String` `parentName`
- `FieldWalker.TriConsumer<String,Object,Field>` `consumer`
- `boolean` `recursive`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\FieldWalker.html`*
