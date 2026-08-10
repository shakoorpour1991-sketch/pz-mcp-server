---
title: zombie.config.ConfigFile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.config
---

# zombie.config.ConfigFile

`public final class ConfigFile extends Object`

**Kind:** class · **Package:** zombie.config

## Inheritance
- java.lang.Object
- zombie.config.ConfigFile

## Constructors

### public ConfigFile()

## Methods

### public boolean read(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `boolean`

### public boolean write(String fileName,
int version,
ArrayList<? extends ConfigOption> options)

**Parameters:**
- `String` `fileName`
- `int` `version`
- `ArrayList<? extends ConfigOption>` `options`

**Returns:** `boolean`

### public ArrayList<ConfigOption> getOptions()

**Returns:** `ArrayList<ConfigOption>`

### public int getVersion()

**Returns:** `int`

### public void setVersionString(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public void setWriteTooltips(boolean bWrite)

**Parameters:**
- `boolean` `bWrite`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\config\ConfigFile.html`*
