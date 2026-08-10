---
title: zombie.entity.components.attributes.AttributeInstance
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.attributes
---

# zombie.entity.components.attributes.AttributeInstance

`public abstract class AttributeInstance<C extends AttributeInstance<C,T>, T extends AttributeType> extends Object`

**Kind:** class · **Package:** zombie.entity.components.attributes

## Inheritance
- java.lang.Object
- zombie.entity.components.attributes.AttributeInstance<C,T>

## Methods

### public final T getType()

**Returns:** `T`

### public final AttributeValueType getValueType()

**Returns:** `AttributeValueType`

### public final String getNameUI()

**Returns:** `String`

### public final boolean isHiddenUI()

**Returns:** `boolean`

### public boolean isRequiresValidation()

**Returns:** `boolean`

### public final boolean isReadOnly()

**Returns:** `boolean`

### public abstract String stringValue()

**Returns:** `String`

### public abstract boolean setValueFromScriptString(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `boolean`

### public abstract boolean equalTo(C var1)

**Parameters:**
- `C` `var1`

**Returns:** `boolean`

### public abstract C copy()

**Returns:** `C`

### public boolean isDisplayAsBar()

**Returns:** `boolean`

### public float getDisplayAsBarUnit()

**Returns:** `float`

### public float getFloatValue()

**Returns:** `float`

### public int getIntValue()

**Returns:** `int`

### public abstract void save(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `void`

### public abstract void load(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\attributes\AttributeInstance.html`*
