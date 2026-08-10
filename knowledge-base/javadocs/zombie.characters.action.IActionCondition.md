---
title: zombie.characters.action.IActionCondition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters.action
---

# zombie.characters.action.IActionCondition

`public interface IActionCondition`

**Kind:** interface · **Package:** zombie.characters.action

## Fields

### static final HashMap<String, IActionCondition.IFactory> s_factoryMap

## Methods

### String getDescription()

**Returns:** `String`

### boolean passes(ActionContext arg0,
ActionState arg1)

**Parameters:**
- `ActionContext` `arg0`
- `ActionState` `arg1`

**Returns:** `boolean`

### IActionCondition clone()

**Returns:** `IActionCondition`

### String toString(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `String`

### static IActionCondition createInstance(Element conditionNode)

**Parameters:**
- `Element` `conditionNode`

**Returns:** `IActionCondition`

### static void registerFactory(String elementName,
IActionCondition.IFactory factory)

**Parameters:**
- `String` `elementName`
- `IActionCondition.IFactory` `factory`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\action\IActionCondition.html`*
