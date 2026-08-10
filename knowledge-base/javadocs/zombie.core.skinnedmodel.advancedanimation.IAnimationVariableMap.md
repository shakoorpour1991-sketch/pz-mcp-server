---
title: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.IAnimationVariableMap

`public interface IAnimationVariableMap extends IAnimationVariableSource`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.advancedanimation

## Methods

### void setVariable(IAnimationVariableSlot slot)

Set the specified animation variable slot. Overwriting an existing slot if necessary.

**Parameters:**
- `IAnimationVariableSlot` `slot`

**Returns:** `void`

### IAnimationVariableSlot setVariable(String arg0,
String arg1)

**Parameters:**
- `String` `arg0`
- `String` `arg1`

**Returns:** `IAnimationVariableSlot`

### IAnimationVariableSlot setVariable(String arg0,
boolean arg1)

**Parameters:**
- `String` `arg0`
- `boolean` `arg1`

**Returns:** `IAnimationVariableSlot`

### IAnimationVariableSlot setVariable(String arg0,
float arg1)

**Parameters:**
- `String` `arg0`
- `float` `arg1`

**Returns:** `IAnimationVariableSlot`

### IAnimationVariableSlot setVariable(AnimationVariableHandle arg0,
boolean arg1)

**Parameters:**
- `AnimationVariableHandle` `arg0`
- `boolean` `arg1`

**Returns:** `IAnimationVariableSlot`

### <EnumType extends Enum<EnumType>>
IAnimationVariableSlot setVariableEnum(String var1,
EnumType var2)

**Returns:** `IAnimationVariableSlot`

### void clearVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### void clearVariables()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\IAnimationVariableMap.html`*
