---
title: zombie.gameStates.ChooseGameInfo.Mod
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.gameStates
---

# zombie.gameStates.ChooseGameInfo.Mod

`public static final class ChooseGameInfo.Mod extends Object`

**Kind:** class · **Package:** zombie.gameStates

## Inheritance
- java.lang.Object
- zombie.gameStates.ChooseGameInfo.Mod

## Fields

### public String dir

### public String commonDir

### public String versionDir

### public final ZomboidFileSystem.PZModFolder baseFile

### public final ZomboidFileSystem.PZModFolder mediaFile

### public final ZomboidFileSystem.PZModFolder actionGroupsFile

### public final ZomboidFileSystem.PZModFolder animSetsFile

### public final ZomboidFileSystem.PZModFolder animsXFile

### public Texture tex

## Constructors

### public Mod(String dir)

**Parameters:**
- `String` `dir`

## Methods

### public Texture getTexture()

**Returns:** `Texture`

### public void setTexture(Texture tex)

**Parameters:**
- `Texture` `tex`

**Returns:** `void`

### public int getPosterCount()

**Returns:** `int`

### public String getPoster(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getDir()

**Returns:** `String`

### public String getCommonDir()

**Returns:** `String`

### public String getVersionDir()

**Returns:** `String`

### public String getDescription()

**Returns:** `String`

### public void setDescription(String desc)

**Parameters:**
- `String` `desc`

**Returns:** `void`

### public ArrayList<String> getRequire()

**Returns:** `ArrayList<String>`

### public void setRequire(ArrayList<String> require)

**Parameters:**
- `ArrayList<String>` `require`

**Returns:** `void`

### public ArrayList<String> getIncompatible()

**Returns:** `ArrayList<String>`

### public void setIncompatible(ArrayList<String> incompatible)

**Parameters:**
- `ArrayList<String>` `incompatible`

**Returns:** `void`

### public ArrayList<String> getLoadAfter()

**Returns:** `ArrayList<String>`

### public void setLoadAfter(ArrayList<String> loadAfter)

**Parameters:**
- `ArrayList<String>` `loadAfter`

**Returns:** `void`

### public ArrayList<String> getLoadBefore()

**Returns:** `ArrayList<String>`

### public void setLoadBefore(ArrayList<String> loadBefore)

**Parameters:**
- `ArrayList<String>` `loadBefore`

**Returns:** `void`

### public String getId()

**Returns:** `String`

### public void setId(String id)

**Parameters:**
- `String` `id`

**Returns:** `void`

### public boolean isAvailable()

**Returns:** `boolean`

### public boolean isAvailableSelf()

**Returns:** `boolean`

### @Deprecated
public void setAvailable(boolean available)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `available`

**Returns:** `void`

### public String getUrl()

**Returns:** `String`

### public void setUrl(String url)

**Parameters:**
- `String` `url`

**Returns:** `void`

### public String getAuthor()

**Returns:** `String`

### public void setAuthor(String author)

**Parameters:**
- `String` `author`

**Returns:** `void`

### public String getModVersion()

**Returns:** `String`

### public void setModVersion(String version)

**Parameters:**
- `String` `version`

**Returns:** `void`

### public String getIcon()

**Returns:** `String`

### public void setIcon(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getCategory()

**Returns:** `String`

### public void setCategory(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public GameVersion getVersionMin()

**Returns:** `GameVersion`

### public GameVersion getVersionMax()

**Returns:** `GameVersion`

### public void addPack(String name,
int flags)

**Parameters:**
- `String` `name`
- `int` `flags`

**Returns:** `void`

### public void addTileDef(String name,
int fileNumber)

**Parameters:**
- `String` `name`
- `int` `fileNumber`

**Returns:** `void`

### public ArrayList<ChooseGameInfo.PackFile> getPacks()

**Returns:** `ArrayList<ChooseGameInfo.PackFile>`

### public ArrayList<ChooseGameInfo.TileDef> getTileDefs()

**Returns:** `ArrayList<ChooseGameInfo.TileDef>`

### public String getSource()

**Returns:** `String`

### public String getWorkshopID()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\gameStates\ChooseGameInfo.Mod.html`*
