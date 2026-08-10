---
title: zombie.characters.AttachedItems.AttachedModelName
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.AttachedItems
---

# zombie.characters.AttachedItems.AttachedModelName

`public final class AttachedModelName extends Object`

**Kind:** class · **Package:** zombie.characters.AttachedItems

## Inheritance
- java.lang.Object
- zombie.characters.AttachedItems.AttachedModelName

## Fields

### public String attachmentNameSelf

### public String attachmentNameParent

### public String modelName

### public float bloodLevel

### public ArrayList<AttachedModelName> children

## Constructors

### public AttachedModelName(AttachedModelName other)

**Parameters:**
- `AttachedModelName` `other`

### public AttachedModelName(String attachmentName,
String modelName,
float bloodLevel)

**Parameters:**
- `String` `attachmentName`
- `String` `modelName`
- `float` `bloodLevel`

### public AttachedModelName(String attachmentNameSelf,
String attachmentNameParent,
String modelName,
float bloodLevel)

**Parameters:**
- `String` `attachmentNameSelf`
- `String` `attachmentNameParent`
- `String` `modelName`
- `float` `bloodLevel`

## Methods

### public void addChild(AttachedModelName child)

**Parameters:**
- `AttachedModelName` `child`

**Returns:** `void`

### public int getChildCount()

**Returns:** `int`

### public AttachedModelName getChildByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `AttachedModelName`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\AttachedItems\AttachedModelName.html`*
