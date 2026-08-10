---
title: zombie.entity.components.crafting.recipe.CraftRecipeListNode
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.CraftRecipeListNode

`public class CraftRecipeListNode extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.CraftRecipeListNode

## Constructors

### public CraftRecipeListNode()

## Methods

### public static CraftRecipeListNode createGroupNode(CraftRecipeGroup group,
String title,
Texture iconTexture,
CraftRecipeListNode.CraftRecipeListNodeExpandedState expandedState)

**Parameters:**
- `CraftRecipeGroup` `group`
- `String` `title`
- `Texture` `iconTexture`
- `CraftRecipeListNode.CraftRecipeListNodeExpandedState` `expandedState`

**Returns:** `CraftRecipeListNode`

### public static CraftRecipeListNode createRecipeNode(CraftRecipe recipe,
CraftRecipeListNode parent)

**Parameters:**
- `CraftRecipe` `recipe`
- `CraftRecipeListNode` `parent`

**Returns:** `CraftRecipeListNode`

### public CraftRecipeListNode.CraftRecipeListNodeType getType()

**Returns:** `CraftRecipeListNode.CraftRecipeListNodeType`

### public CraftRecipeListNode getParent()

**Returns:** `CraftRecipeListNode`

### public CraftRecipe getRecipe()

**Returns:** `CraftRecipe`

### public Texture getIconTexture()

**Returns:** `Texture`

### public String getTitle()

**Returns:** `String`

### public CraftRecipeGroup getGroup()

**Returns:** `CraftRecipeGroup`

### public CraftRecipeListNode.CraftRecipeListNodeExpandedState getExpandedState()

**Returns:** `CraftRecipeListNode.CraftRecipeListNodeExpandedState`

### public void setExpandedState(CraftRecipeListNode.CraftRecipeListNodeExpandedState state)

**Parameters:**
- `CraftRecipeListNode.CraftRecipeListNodeExpandedState` `state`

**Returns:** `void`

### public void toggleExpandedState()

**Returns:** `void`

### public List<CraftRecipeListNode> getChildren()

**Returns:** `List<CraftRecipeListNode>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\CraftRecipeListNode.html`*
