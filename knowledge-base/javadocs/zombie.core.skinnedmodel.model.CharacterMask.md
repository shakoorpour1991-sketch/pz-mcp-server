---
title: zombie.core.skinnedmodel.model.CharacterMask
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.CharacterMask

`public final class CharacterMask extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.CharacterMask

## Constructors

### public CharacterMask()

## Methods

### public boolean isBloodBodyPartVisible(BloodBodyPartType bpt)

**Parameters:**
- `BloodBodyPartType` `bpt`

**Returns:** `boolean`

### public void setAllVisible(boolean isVisible)

**Parameters:**
- `boolean` `isVisible`

**Returns:** `void`

### public void copyFrom(CharacterMask rhs)

**Parameters:**
- `CharacterMask` `rhs`

**Returns:** `void`

### public void setPartVisible(CharacterMask.Part part,
boolean isVisible)

**Parameters:**
- `CharacterMask.Part` `part`
- `boolean` `isVisible`

**Returns:** `void`

### public void setPartsVisible(ArrayList<Integer> parts,
boolean isVisible)

**Parameters:**
- `ArrayList<Integer>` `parts`
- `boolean` `isVisible`

**Returns:** `void`

### public boolean isPartVisible(CharacterMask.Part part)

**Parameters:**
- `CharacterMask.Part` `part`

**Returns:** `boolean`

### public boolean isTorsoVisible()

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public String contentsToString()

Returns a list of all Visible components.

**Returns:** `String`

### public boolean isNothingVisible()

**Returns:** `boolean`

### public boolean isAllVisible()

**Returns:** `boolean`

### public void forEachVisible(Consumer<CharacterMask.Part> action)

**Parameters:**
- `Consumer<CharacterMask.Part>` `action`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\CharacterMask.html`*
