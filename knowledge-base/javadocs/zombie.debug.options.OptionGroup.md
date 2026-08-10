---
title: zombie.debug.options.OptionGroup
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug.options
---

# zombie.debug.options.OptionGroup

`public class OptionGroup extends Object implements IDebugOptionGroup`

**Kind:** class · **Package:** zombie.debug.options

## Inheritance
- java.lang.Object
- zombie.debug.options.OptionGroup

## Fields

### public final IDebugOptionGroup group

## Constructors

### public OptionGroup()

### public OptionGroup(IDebugOptionGroup parentGroup)

**Parameters:**
- `IDebugOptionGroup` `parentGroup`

### public OptionGroup(IDebugOptionGroup parentGroup,
String groupName)

**Parameters:**
- `IDebugOptionGroup` `parentGroup`
- `String` `groupName`

## Methods

### public String getName()

**Returns:** `String`

### public IDebugOptionGroup getParent()

**Returns:** `IDebugOptionGroup`

### public void setParent(IDebugOptionGroup parent)

**Parameters:**
- `IDebugOptionGroup` `parent`

**Returns:** `void`

### public void onFullPathChanged()

**Returns:** `void`

### public Iterable<IDebugOption> getChildren()

**Returns:** `Iterable<IDebugOption>`

### public void addChild(IDebugOption childOption)

**Parameters:**
- `IDebugOption` `childOption`

**Returns:** `void`

### public void removeChild(IDebugOption childOption)

**Parameters:**
- `IDebugOption` `childOption`

**Returns:** `void`

### public void onChildAdded(IDebugOption newOption)

**Parameters:**
- `IDebugOption` `newOption`

**Returns:** `void`

### public void onDescendantAdded(IDebugOption newOption)

**Parameters:**
- `IDebugOption` `newOption`

**Returns:** `void`

### public String getGroupName(String groupName)

**Parameters:**
- `String` `groupName`

**Returns:** `String`

### public static String getCombinedName(IDebugOptionGroup parentGroup,
String childName)

**Parameters:**
- `IDebugOptionGroup` `parentGroup`
- `String` `childName`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\options\OptionGroup.html`*
