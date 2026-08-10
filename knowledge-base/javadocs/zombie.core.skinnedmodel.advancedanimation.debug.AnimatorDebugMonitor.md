---
title: zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation.debug
---

# zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor

`public final class AnimatorDebugMonitor extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation.debug

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor

## Fields

### public static AnimatorDebugMonitor instance

## Constructors

### public AnimatorDebugMonitor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

## Methods

### public IsoGameCharacter getTarget()

**Returns:** `IsoGameCharacter`

### public void setTarget(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void addCustomVariable(String var)

**Parameters:**
- `String` `var`

**Returns:** `void`

### public void removeCustomVariable(String var)

**Parameters:**
- `String` `var`

**Returns:** `void`

### public void setFilter(int index,
boolean b)

**Parameters:**
- `int` `index`
- `boolean` `b`

**Returns:** `void`

### public boolean getFilter(int index)

**Parameters:**
- `int` `index`

**Returns:** `boolean`

### public boolean isDoTickStamps()

**Returns:** `boolean`

### public void setDoTickStamps(boolean doTickStamps)

**Parameters:**
- `boolean` `doTickStamps`

**Returns:** `void`

### public void update(IsoGameCharacter chr,
AnimLayer[] layers)

**Parameters:**
- `IsoGameCharacter` `chr`
- `AnimLayer[]` `layers`

**Returns:** `void`

### public boolean IsDirty()

**Returns:** `boolean`

### public String getLogString()

**Returns:** `String`

### public boolean IsDirtyFloatList()

**Returns:** `boolean`

### public ArrayList<String> getFloatNames()

**Returns:** `ArrayList<String>`

### public static boolean isKnownVarsDirty()

**Returns:** `boolean`

### public static List<String> getKnownVariables()

**Returns:** `List<String>`

### public void setSelectedVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public String getSelectedVariable()

**Returns:** `String`

### public float getSelectedVariableFloat()

**Returns:** `float`

### public String getSelectedVarMinFloat()

**Returns:** `String`

### public String getSelectedVarMaxFloat()

**Returns:** `String`

### public ArrayList<Float> getSelectedVarFloatList()

**Returns:** `ArrayList<Float>`

### public static void registerVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\debug\AnimatorDebugMonitor.html`*
