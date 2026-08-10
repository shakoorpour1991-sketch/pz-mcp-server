---
title: zombie.debug.options.IDebugOptionGroup
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.debug.options
---

# zombie.debug.options.IDebugOptionGroup

`public interface IDebugOptionGroup extends IDebugOption`

**Kind:** interface · **Package:** zombie.debug.options

## Methods

### Iterable<IDebugOption> getChildren()

**Returns:** `Iterable<IDebugOption>`

### void addChild(IDebugOption childOption)

**Parameters:**
- `IDebugOption` `childOption`

**Returns:** `void`

### void removeChild(IDebugOption arg0)

**Parameters:**
- `IDebugOption` `arg0`

**Returns:** `void`

### void onChildAdded(IDebugOption newChild)

**Parameters:**
- `IDebugOption` `newChild`

**Returns:** `void`

### void onDescendantAdded(IDebugOption newDescendant)

**Parameters:**
- `IDebugOption` `newDescendant`

**Returns:** `void`

### default <E extends IDebugOptionGroup> E newOptionGroup(E newGroup)

**Returns:** `E`

### default BooleanDebugOption newOption(String name,
boolean defaultValue)

**Parameters:**
- `String` `name`
- `boolean` `defaultValue`

**Returns:** `BooleanDebugOption`

### default BooleanDebugOption newDebugOnlyOption(String name,
boolean defaultValue)

**Parameters:**
- `String` `name`
- `boolean` `defaultValue`

**Returns:** `BooleanDebugOption`

### default String getCombinedName(String childName)

**Parameters:**
- `String` `childName`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\options\IDebugOptionGroup.html`*
