---
title: zombie.characters.CharacterTimedActions.LuaTimedActionNew
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.CharacterTimedActions
---

# zombie.characters.CharacterTimedActions.LuaTimedActionNew

`public final class LuaTimedActionNew extends BaseAction implements IPathfinder`

**Kind:** class · **Package:** zombie.characters.CharacterTimedActions

## Inheritance
- java.lang.Object
- zombie.characters.CharacterTimedActions.BaseAction
- zombie.characters.CharacterTimedActions.LuaTimedActionNew

## Constructors

### public LuaTimedActionNew(se.krka.kahlua.vm.KahluaTable table,
IsoGameCharacter chr)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `IsoGameCharacter` `chr`

## Methods

### public void waitToStart()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean valid()

**Returns:** `boolean`

### public void interruptWaitToStart()

**Returns:** `void`

### public void start()

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public void perform()

**Returns:** `void`

### public void complete()

**Returns:** `void`

### public void Failed(Mover mover)

**Parameters:**
- `Mover` `mover`

**Returns:** `void`

### public void Succeeded(Path path,
Mover mover)

**Parameters:**
- `Path` `path`
- `Mover` `mover`

**Returns:** `void`

### public void Pathfind(IsoGameCharacter chr,
int x,
int y,
int z)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setCurrentTime(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public int getTime()

**Returns:** `int`

### public void setCustomRemoteTimedActionSync(boolean customRemoteTimedActionSync)

**Parameters:**
- `boolean` `customRemoteTimedActionSync`

**Returns:** `void`

### public void setTime(int maxTime)

**Parameters:**
- `int` `maxTime`

**Returns:** `void`

### public void OnAnimEvent(AnimEvent event)

**Parameters:**
- `AnimEvent` `event`

**Returns:** `void`

### public void getDeltaModifiers(MoveDeltaModifiers modifiers)

**Parameters:**
- `MoveDeltaModifiers` `modifiers`

**Returns:** `void`

### public String getMetaType()

**Returns:** `String`

### public void replaceObjectInTable(Object oldObj,
Object newObj)

**Parameters:**
- `Object` `oldObj`
- `Object` `newObj`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\CharacterTimedActions\LuaTimedActionNew.html`*
