---
title: zombie.util.TaggedObjectManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.TaggedObjectManager

`public class TaggedObjectManager<T extends TaggedObjectManager.TaggedObject> extends Object`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.TaggedObjectManager<T>

## Constructors

### public TaggedObjectManager(TaggedObjectManager.BackingListProvider<T> backingListProvider)

**Parameters:**
- `TaggedObjectManager.BackingListProvider<T>` `backingListProvider`

## Methods

### public void setVerbose(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isVerbose()

**Returns:** `boolean`

### public void setWarnNonPreprocessedNewTag(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isWarnNonPreprocessedNewTag()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public void setDirty()

**Returns:** `void`

### public List<String> getRegisteredTags()

**Returns:** `List<String>`

### public void getRegisteredTagGroups(ArrayList<String> list)

**Parameters:**
- `ArrayList<String>` `list`

**Returns:** `void`

### public void registerObjectsFromBackingList()

**Returns:** `void`

### public void registerObjectsFromBackingList(boolean clear)

**Parameters:**
- `boolean` `clear`

**Returns:** `void`

### public void registerObject(T taggedObject,
boolean bSetDirty)

**Parameters:**
- `T` `taggedObject`
- `boolean` `bSetDirty`

**Returns:** `void`

### public List<T> getListForTag(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `List<T>`

### public List<T> getListForTag(int tagBitIndex)

**Parameters:**
- `int` `tagBitIndex`

**Returns:** `List<T>`

### public List<T> queryTaggedObjects(String tagQueryString)

**Parameters:**
- `String` `tagQueryString`

**Returns:** `List<T>`

### public List<T> filterList(String tagQueryString,
List<T> listToPopulate,
List<T> sourceList,
boolean clearList)

**Parameters:**
- `String` `tagQueryString`
- `List<T>` `listToPopulate`
- `List<T>` `sourceList`
- `boolean` `clearList`

**Returns:** `List<T>`

### public List<T> populateList(String tagQueryString,
List<T> listToPopulate,
List<T> sourceList,
boolean clearList)

**Parameters:**
- `String` `tagQueryString`
- `List<T>` `listToPopulate`
- `List<T>` `sourceList`
- `boolean` `clearList`

**Returns:** `List<T>`

### public String formatAndRegisterQueryString(String tagQueryString)

**Parameters:**
- `String` `tagQueryString`

**Returns:** `String`

### public String formatQueryString(String tagQueryString)

**Parameters:**
- `String` `tagQueryString`

**Returns:** `String`

### public void debugPrint()

**Returns:** `void`

### public void debugPrint(ArrayList<String> lines)

**Parameters:**
- `ArrayList<String>` `lines`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\TaggedObjectManager.html`*
