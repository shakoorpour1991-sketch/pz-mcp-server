---
title: zombie.worldMap.WorldMapSettings
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapSettings

`public final class WorldMapSettings extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMapSettings

## Fields

### public static final int VERSION1

### public static final int VERSION

## Constructors

### public WorldMapSettings()

## Methods

### public static WorldMapSettings getInstance()

**Returns:** `WorldMapSettings`

### public ConfigOption getOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setBoolean(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

**Returns:** `void`

### public boolean getBoolean(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void setDouble(String name,
double value)

**Parameters:**
- `String` `name`
- `double` `value`

**Returns:** `void`

### public double getDouble(String name,
double defaultValue)

**Parameters:**
- `String` `name`
- `double` `defaultValue`

**Returns:** `double`

### public int getFileVersion()

**Returns:** `int`

### public void save()

**Returns:** `void`

### public void load()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapSettings.html`*
