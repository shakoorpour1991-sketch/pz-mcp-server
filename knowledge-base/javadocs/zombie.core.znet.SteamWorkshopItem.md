---
title: zombie.core.znet.SteamWorkshopItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.SteamWorkshopItem

`public class SteamWorkshopItem extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.SteamWorkshopItem

## Constructors

### public SteamWorkshopItem(String workshopFolder)

**Parameters:**
- `String` `workshopFolder`

## Methods

### public String getContentFolder()

**Returns:** `String`

### public String getFolderName()

**Returns:** `String`

### public void setID(String id)

**Parameters:**
- `String` `id`

**Returns:** `void`

### public String getID()

**Returns:** `String`

### public void setTitle(String title)

**Parameters:**
- `String` `title`

**Returns:** `void`

### public String getTitle()

**Returns:** `String`

### public void setDescription(String description)

**Parameters:**
- `String` `description`

**Returns:** `void`

### public String getDescription()

**Returns:** `String`

### public void setVisibility(String visibility)

**Parameters:**
- `String` `visibility`

**Returns:** `void`

### public String getVisibility()

**Returns:** `String`

### public void setVisibilityInteger(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public int getVisibilityInteger()

**Returns:** `int`

### public void setTags(ArrayList<String> tags)

**Parameters:**
- `ArrayList<String>` `tags`

**Returns:** `void`

### public static ArrayList<String> getAllowedTags()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getTags()

**Returns:** `ArrayList<String>`

### public String getSubmitDescription()

**Returns:** `String`

### public String[] getSubmitTags()

**Returns:** `String[]`

### public String getPreviewImage()

**Returns:** `String`

### public void setChangeNote(String changeNote)

**Parameters:**
- `String` `changeNote`

**Returns:** `void`

### public String getChangeNote()

**Returns:** `String`

### public boolean create()

**Returns:** `boolean`

### public boolean submitUpdate()

**Returns:** `boolean`

### public boolean getUpdateProgress(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `boolean`

### public int getUpdateProgressTotal()

**Returns:** `int`

### public String validatePreviewImage(Path path)
throws IOException

**Parameters:**
- `Path` `path`

**Returns:** `String`

### public String validateContents()

**Returns:** `String`

### public String getExtendedErrorInfo(String error)

**Parameters:**
- `String` `error`

**Returns:** `String`

### public boolean readWorkshopTxt()

**Returns:** `boolean`

### public boolean writeWorkshopTxt()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\SteamWorkshopItem.html`*
