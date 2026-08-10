---
title: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSourceContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSourceContainer

`public interface IAnimationVariableSourceContainer extends IAnimationVariableSource`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.advancedanimation

## Methods

### IAnimationVariableSource getGameVariablesInternal()

**Returns:** `IAnimationVariableSource`

### default IAnimationVariableSlot getVariable(AnimationVariableHandle handle)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `IAnimationVariableSlot`

### default IAnimationVariableSlot getVariable(String key)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `String` `key`

**Returns:** `IAnimationVariableSlot`

### default String getVariableString(String name)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `String` `name`

**Returns:** `String`

### default float getVariableFloat(String name,
float defaultVal)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `String` `name`
- `float` `defaultVal`

**Returns:** `float`

### default boolean getVariableBoolean(String name)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### default boolean getVariableBoolean(String key,
boolean defaultVal)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `String` `key`
- `boolean` `defaultVal`

**Returns:** `boolean`

### default Iterable<IAnimationVariableSlot> getGameVariables()

Description copied from interface: IAnimationVariableSource

**Returns:** `Iterable<IAnimationVariableSlot>`

### default boolean isVariable(String name,
String val)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `String` `name`
- `String` `val`

**Returns:** `boolean`

### default boolean containsVariable(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\IAnimationVariableSourceContainer.html`*
