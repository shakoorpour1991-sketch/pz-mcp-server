---
title: astar.ISearchNode
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: astar
---

# astar.ISearchNode

`public interface ISearchNode`

**Kind:** interface · **Package:** astar

## Methods

### double f()

**Returns:** `double`

### double g()

**Returns:** `double`

### void setG(double var1)

**Parameters:**
- `double` `var1`

**Returns:** `void`

### double h()

**Returns:** `double`

### double c(ISearchNode var1)

**Parameters:**
- `ISearchNode` `var1`

**Returns:** `double`

### void getSuccessors(ArrayList<ISearchNode> var1)

**Parameters:**
- `ArrayList<ISearchNode>` `var1`

**Returns:** `void`

### ISearchNode getParent()

**Returns:** `ISearchNode`

### void setParent(ISearchNode var1)

**Parameters:**
- `ISearchNode` `var1`

**Returns:** `void`

### Integer keyCode()

**Returns:** `Integer`

### boolean equals(Object var1)

**Parameters:**
- `Object` `var1`

**Returns:** `boolean`

### int hashCode()

**Returns:** `int`

### int getDepth()

**Returns:** `int`

### void setDepth(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\astar\ISearchNode.html`*
