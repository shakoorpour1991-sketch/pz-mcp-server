---
title: zombie.core.TilePropertyAliasMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.TilePropertyAliasMap

`public final class TilePropertyAliasMap extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.TilePropertyAliasMap

## Fields

### public static final TilePropertyAliasMap instance

### public final HashMap<String,Integer> propertyToId

### public final ArrayList<TilePropertyAliasMap.TileProperty> properties

## Constructors

### public TilePropertyAliasMap()

## Methods

### public void Generate(HashMap<String, ArrayList<String>> propertyValueMap)

**Parameters:**
- `HashMap<String, ArrayList<String>>` `propertyValueMap`

**Returns:** `void`

### public int getIDFromPropertyName(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public int getIDFromPropertyValue(int property,
String value)

**Parameters:**
- `int` `property`
- `String` `value`

**Returns:** `int`

### public String getPropertyValueString(int property,
int value)

**Parameters:**
- `int` `property`
- `int` `value`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\TilePropertyAliasMap.html`*
