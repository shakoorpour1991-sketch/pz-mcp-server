---
title: zombie.core.skinnedmodel.advancedanimation.AnimCondition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimCondition

`public final class AnimCondition extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimCondition

## Fields

### public String name

### public AnimCondition.Type type

### public String value

### public float floatValue

### public boolean boolValue

### public String stringValue

## Constructors

### public AnimCondition()

## Methods

### public void parse(AnimNode fromNode,
AnimNode toNode)

**Parameters:**
- `AnimNode` `fromNode`
- `AnimNode` `toNode`

**Returns:** `void`

### public void parseValue()

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public String getConditionString()

**Returns:** `String`

### public String getValueString()

**Returns:** `String`

### public boolean isTypeString()

**Returns:** `boolean`

### public boolean check(IAnimationVariableSource varSource)

**Parameters:**
- `IAnimationVariableSource` `varSource`

**Returns:** `boolean`

### public static boolean pass(IAnimationVariableSource varSource,
AnimCondition[] conditions)

**Parameters:**
- `IAnimationVariableSource` `varSource`
- `AnimCondition[]` `conditions`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimCondition.html`*
