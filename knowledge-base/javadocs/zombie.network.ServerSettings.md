---
title: zombie.network.ServerSettings
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ServerSettings

`public class ServerSettings extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ServerSettings

## Constructors

### public ServerSettings(String name)

**Parameters:**
- `String` `name`

## Methods

### public String getName()

**Returns:** `String`

### public void resetToDefault()

**Returns:** `void`

### public boolean loadFiles()

**Returns:** `boolean`

### public boolean saveFiles()

**Returns:** `boolean`

### public boolean deleteFiles()

**Returns:** `boolean`

### public boolean duplicateFiles(String newName)

**Parameters:**
- `String` `newName`

**Returns:** `boolean`

### public boolean rename(String newName)

**Parameters:**
- `String` `newName`

**Returns:** `boolean`

### public ServerOptions getServerOptions()

**Returns:** `ServerOptions`

### public SandboxOptions getSandboxOptions()

**Returns:** `SandboxOptions`

### public int getNumSpawnRegions()

**Returns:** `int`

### public String getSpawnRegionName(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public String getSpawnRegionFile(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public void clearSpawnRegions()

**Returns:** `void`

### public void addSpawnRegion(String name,
String file)

**Parameters:**
- `String` `name`
- `String` `file`

**Returns:** `void`

### public void removeSpawnRegion(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable loadSpawnPointsFile(String file)

**Parameters:**
- `String` `file`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean saveSpawnPointsFile(String file,
se.krka.kahlua.vm.KahluaTable professionsTable)

**Parameters:**
- `String` `file`
- `se.krka.kahlua.vm.KahluaTable` `professionsTable`

**Returns:** `boolean`

### public boolean isValid()

**Returns:** `boolean`

### public String getErrorMsg()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ServerSettings.html`*
