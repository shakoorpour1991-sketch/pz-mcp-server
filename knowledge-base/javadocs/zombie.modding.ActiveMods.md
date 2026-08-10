---
title: zombie.modding.ActiveMods
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.modding
---

# zombie.modding.ActiveMods

`public final class ActiveMods extends Object`

**Kind:** class · **Package:** zombie.modding

## Inheritance
- java.lang.Object
- zombie.modding.ActiveMods

## Constructors

### public ActiveMods(String id)

**Parameters:**
- `String` `id`

## Methods

### public static ActiveMods getByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ActiveMods`

### public static ActiveMods getById(String id)

**Parameters:**
- `String` `id`

**Returns:** `ActiveMods`

### public static int indexOf(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public static void setLoadedMods(ActiveMods activeMods)

**Parameters:**
- `ActiveMods` `activeMods`

**Returns:** `void`

### public static boolean requiresResetLua(ActiveMods activeMods)

**Parameters:**
- `ActiveMods` `activeMods`

**Returns:** `boolean`

### public static void renderUI()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public ArrayList<String> getMods()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getMapOrder()

**Returns:** `ArrayList<String>`

### public void copyFrom(ActiveMods other)

**Parameters:**
- `ActiveMods` `other`

**Returns:** `void`

### public void setModActive(String modID,
boolean active)

**Parameters:**
- `String` `modID`
- `boolean` `active`

**Returns:** `void`

### public boolean isModActive(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `boolean`

### public void removeMod(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void removeMapOrder(String folder)

**Parameters:**
- `String` `folder`

**Returns:** `void`

### public void checkMissingMods()

**Returns:** `void`

### public void checkMissingMaps()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\modding\ActiveMods.html`*
