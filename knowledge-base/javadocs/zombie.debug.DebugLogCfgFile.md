---
title: zombie.debug.DebugLogCfgFile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug
---

# zombie.debug.DebugLogCfgFile

`public final class DebugLogCfgFile extends Object`

**Kind:** class · **Package:** zombie.debug

## Inheritance
- java.lang.Object
- zombie.debug.DebugLogCfgFile

## Constructors

### public DebugLogCfgFile()

## Methods

### public void clear()

**Returns:** `void`

### public void setDefault()

**Returns:** `void`

### public void read(String filePath)
throws IOException

**Parameters:**
- `String` `filePath`

**Returns:** `void`

### public void write(String filePath)
throws IOException

**Parameters:**
- `String` `filePath`

**Returns:** `void`

### public DebugLogProfile createProfile(String profileName)

**Parameters:**
- `String` `profileName`

**Returns:** `DebugLogProfile`

### public List<DebugLogProfile> getProfiles()

**Returns:** `List<DebugLogProfile>`

### public Map<String, DebugLogProfile> getProfileMap()

**Returns:** `Map<String, DebugLogProfile>`

### public DebugLogProfile getProfile(String name)

**Parameters:**
- `String` `name`

**Returns:** `DebugLogProfile`

### public String getSelectedProfile()

**Returns:** `String`

### public void setSelectedProfile(String selectedProfile)

**Parameters:**
- `String` `selectedProfile`

**Returns:** `void`

### public List<String> getAliases()

**Returns:** `List<String>`

### public Map<String,String> getAliasMap()

**Returns:** `Map<String,String>`

### public String getAlias(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public List<DebugLogProfile> resolveAliasProfiles(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `List<DebugLogProfile>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\DebugLogCfgFile.html`*
