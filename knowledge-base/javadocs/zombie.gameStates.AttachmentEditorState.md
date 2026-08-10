---
title: zombie.gameStates.AttachmentEditorState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.gameStates
---

# zombie.gameStates.AttachmentEditorState

`public final class AttachmentEditorState extends GameState`

**Kind:** class · **Package:** zombie.gameStates

## Inheritance
- java.lang.Object
- zombie.gameStates.GameState
- zombie.gameStates.AttachmentEditorState

## Fields

### public static AttachmentEditorState instance

## Constructors

### public AttachmentEditorState()

## Methods

### public void enter()

**Returns:** `void`

### public void yield()

**Returns:** `void`

### public void reenter()

**Returns:** `void`

### public void exit()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public GameStateMachine.StateAction update()

**Returns:** `GameStateMachine.StateAction`

### public static AttachmentEditorState checkInstance()

**Returns:** `AttachmentEditorState`

### public void setTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public Object fromLua0(String func)

**Parameters:**
- `String` `func`

**Returns:** `Object`

### public Object fromLua1(String func,
Object arg0)

**Parameters:**
- `String` `func`
- `Object` `arg0`

**Returns:** `Object`

### public static void readScriptNew(ModelScript script)
throws IOException

**Parameters:**
- `ModelScript` `script`

**Returns:** `void`

### public static ArrayList<String> readScript(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `ArrayList<String>`

### public static boolean updateScript(String fileName,
ArrayList<String> tokens,
ModelScript modelScript)

**Parameters:**
- `String` `fileName`
- `ArrayList<String>` `tokens`
- `ModelScript` `modelScript`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\gameStates\AttachmentEditorState.html`*
