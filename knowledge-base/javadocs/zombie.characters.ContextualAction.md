---
title: zombie.characters.ContextualAction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.ContextualAction

`public final class ContextualAction extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.ContextualAction

## Fields

### public ContextualAction.Action action

### public IsoDirections dir

### public IsoGridSquare square

### public IsoObject object

### public ItemContainer targetContainer

### public InventoryItem inventoryItem

### public int priority

### public boolean behind

## Constructors

### public ContextualAction()

## Methods

### public ContextualAction reset()

**Returns:** `ContextualAction`

### public static ContextualAction alloc()

**Returns:** `ContextualAction`

### public static ContextualAction alloc(ContextualAction.Action action)

**Parameters:**
- `ContextualAction.Action` `action`

**Returns:** `ContextualAction`

### public static ContextualAction alloc(ContextualAction.Action action,
IsoDirections dir,
IsoGridSquare square,
IsoObject object)

**Parameters:**
- `ContextualAction.Action` `action`
- `IsoDirections` `dir`
- `IsoGridSquare` `square`
- `IsoObject` `object`

**Returns:** `ContextualAction`

### public static ContextualAction alloc(ContextualAction.Action action,
Invokers.Params1.ICallback<ContextualAction> populator)

**Parameters:**
- `ContextualAction.Action` `action`
- `Invokers.Params1.ICallback<ContextualAction>` `populator`

**Returns:** `ContextualAction`

### public void release()

**Returns:** `void`

### public static void releaseAll(ArrayList<ContextualAction> actions)

**Parameters:**
- `ArrayList<ContextualAction>` `actions`

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ContextualAction.html`*
