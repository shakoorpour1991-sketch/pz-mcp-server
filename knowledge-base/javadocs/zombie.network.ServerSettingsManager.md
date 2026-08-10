---
title: zombie.network.ServerSettingsManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ServerSettingsManager

`public class ServerSettingsManager extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ServerSettingsManager

## Fields

### public static final ServerSettingsManager instance

## Constructors

### public ServerSettingsManager()

## Methods

### public String getSettingsFolder()

**Returns:** `String`

### public boolean settingsFolderPathValidLength(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `boolean`

### public boolean settingsFolderNameValidLength(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `boolean`

### public boolean settingsFolderValidLengthChecks(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `boolean`

### public String getNameInSettingsFolder(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public void readAllSettings()

**Returns:** `void`

### public int getSettingsCount()

**Returns:** `int`

### public ServerSettings getSettingsByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ServerSettings`

### public boolean isValidName(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean isValidNewName(String newName)

**Parameters:**
- `String` `newName`

**Returns:** `boolean`

### public ArrayList<String> getSuffixes()

**Returns:** `ArrayList<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ServerSettingsManager.html`*
