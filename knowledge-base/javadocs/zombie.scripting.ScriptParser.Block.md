---
title: zombie.scripting.ScriptParser.Block
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting
---

# zombie.scripting.ScriptParser.Block

`public static class ScriptParser.Block extends Object implements ScriptParser.BlockElement`

**Kind:** class · **Package:** zombie.scripting

## Inheritance
- java.lang.Object
- zombie.scripting.ScriptParser.Block

## Fields

### public String type

### public String id

### public final ArrayList<ScriptParser.BlockElement> elements

### public final ArrayList<ScriptParser.Value> values

### public final ArrayList<ScriptParser.Block> children

### public String comment

## Constructors

### public Block()

## Methods

### public String getUid()

**Returns:** `String`

### public ScriptParser.Block asBlock()

**Returns:** `ScriptParser.Block`

### public ScriptParser.Value asValue()

**Returns:** `ScriptParser.Value`

### public boolean isEmpty()

**Returns:** `boolean`

### public void prettyPrint(int indent,
StringBuilder sb,
String eol)

**Parameters:**
- `int` `indent`
- `StringBuilder` `sb`
- `String` `eol`

**Returns:** `void`

### public void prettyPrint(int indent,
StringBuilder sb,
String eol,
String indentation)

**Parameters:**
- `int` `indent`
- `StringBuilder` `sb`
- `String` `eol`
- `String` `indentation`

**Returns:** `void`

### public void prettyPrintElements(int indent,
StringBuilder sb,
String eol)

**Parameters:**
- `int` `indent`
- `StringBuilder` `sb`
- `String` `eol`

**Returns:** `void`

### public void prettyPrintElements(int indent,
StringBuilder sb,
String eol,
String indentation)

**Parameters:**
- `int` `indent`
- `StringBuilder` `sb`
- `String` `eol`
- `String` `indentation`

**Returns:** `void`

### public ScriptParser.Block addBlock(String type,
String id)

**Parameters:**
- `String` `type`
- `String` `id`

**Returns:** `ScriptParser.Block`

### public ScriptParser.Block getBlock(String type,
String id)

**Parameters:**
- `String` `type`
- `String` `id`

**Returns:** `ScriptParser.Block`

### public ScriptParser.Value getValue(String key)

**Parameters:**
- `String` `key`

**Returns:** `ScriptParser.Value`

### public void setValue(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `void`

### public ScriptParser.Value addValue(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `ScriptParser.Value`

### public void moveValueAfter(String keyMove,
String keyAfter)

**Parameters:**
- `String` `keyMove`
- `String` `keyAfter`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ScriptParser.Block.html`*
