---
title: zombie.characters.action.ActionTransition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.action
---

# zombie.characters.action.ActionTransition

`public final class ActionTransition extends Object implements Cloneable`

**Kind:** class · **Package:** zombie.characters.action

## Inheritance
- java.lang.Object
- zombie.characters.action.ActionTransition

## Constructors

### public ActionTransition()

## Methods

### public static boolean parse(Element root,
String srcInfo,
List<ActionTransition> transitions)

**Parameters:**
- `Element` `root`
- `String` `srcInfo`
- `List<ActionTransition>` `transitions`

**Returns:** `boolean`

### public static void parseTransition(Element root,
List<ActionTransition> transitions)

**Parameters:**
- `Element` `root`
- `List<ActionTransition>` `transitions`

**Returns:** `void`

### public static void parseTransitions(Element root,
String srcInfo,
List<ActionTransition> transitions)

**Parameters:**
- `Element` `root`
- `String` `srcInfo`
- `List<ActionTransition>` `transitions`

**Returns:** `void`

### public String getTransitionTo()

**Returns:** `String`

### public boolean passes(ActionContext context,
ActionState state)

**Parameters:**
- `ActionContext` `context`
- `ActionState` `state`

**Returns:** `boolean`

### public ActionTransition clone()

**Returns:** `ActionTransition`

### public String toString()

**Returns:** `String`

### public String toString(String indent)

**Parameters:**
- `String` `indent`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\action\ActionTransition.html`*
