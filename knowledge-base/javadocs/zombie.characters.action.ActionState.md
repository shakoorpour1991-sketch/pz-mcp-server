---
title: zombie.characters.action.ActionState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.action
---

# zombie.characters.action.ActionState

`public final class ActionState extends Object implements IAnimationVariableSourceContainer`

**Kind:** class · **Package:** zombie.characters.action

## Inheritance
- java.lang.Object
- zombie.characters.action.ActionState

## Fields

### public final ArrayList<ActionTransition> transitions

## Constructors

### public ActionState(String name)

**Parameters:**
- `String` `name`

## Methods

### public String toString()

**Returns:** `String`

### public final boolean canHaveSubStates()

**Returns:** `boolean`

### public final boolean canBeSubstate()

**Returns:** `boolean`

### public final boolean canHaveSubState(ActionState child)

**Parameters:**
- `ActionState` `child`

**Returns:** `boolean`

### public boolean isGrapplerState()

**Returns:** `boolean`

### public static boolean canHaveSubState(ActionState parent,
ActionState child)

Returns TRUE if the supplied child state can be a child of this state.
To determine this, the parent's childStateTags are compared to the child's parentStateTags.
If there is an overlap, the child is compatible with the parent.

**Parameters:**
- `ActionState` `parent`
- `ActionState` `child`

**Returns:** `boolean`

### public static boolean tagsOverlap(String[] parentTags,
String[] childTags)

**Parameters:**
- `String[]` `parentTags`
- `String[]` `childTags`

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public void load(String stateFolderPath)

**Parameters:**
- `String` `stateFolderPath`

**Returns:** `void`

### public void parse(File file)

**Parameters:**
- `File` `file`

**Returns:** `void`

### public void sortTransitions()

**Returns:** `void`

### public void resetForReload()

**Returns:** `void`

### public void setParentActionGroup(ActionGroup parentActionGroup)

**Parameters:**
- `ActionGroup` `parentActionGroup`

**Returns:** `void`

### public ActionGroup getParentActionGroup()

**Returns:** `ActionGroup`

### public IAnimationVariableSource getGameVariablesInternal()

**Returns:** `IAnimationVariableSource`

### public boolean hasStateVariables()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\action\ActionState.html`*
