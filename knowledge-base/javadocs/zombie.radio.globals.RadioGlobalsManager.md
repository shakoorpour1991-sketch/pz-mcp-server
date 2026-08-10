---
title: zombie.radio.globals.RadioGlobalsManager
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.radio.globals
---

# zombie.radio.globals.RadioGlobalsManager

`public final class RadioGlobalsManager extends Object`

**Kind:** class · **Package:** zombie.radio.globals

## Inheritance
- java.lang.Object
- zombie.radio.globals.RadioGlobalsManager

## Methods

### public static RadioGlobalsManager getInstance()

**Returns:** `RadioGlobalsManager`

### public void reset()

**Returns:** `void`

### public boolean exists(String string)

**Parameters:**
- `String` `string`

**Returns:** `boolean`

### public RadioGlobalType getType(String string)

**Parameters:**
- `String` `string`

**Returns:** `RadioGlobalType`

### public String getString(String string)

**Parameters:**
- `String` `string`

**Returns:** `String`

### public boolean addGlobal(String string,
RadioGlobal radioGlobal)

**Parameters:**
- `String` `string`
- `RadioGlobal` `radioGlobal`

**Returns:** `boolean`

### public boolean addGlobalString(String string0,
String string1)

**Parameters:**
- `String` `string0`
- `String` `string1`

**Returns:** `boolean`

### public boolean addGlobalBool(String string,
boolean boolean0)

**Parameters:**
- `String` `string`
- `boolean` `boolean0`

**Returns:** `boolean`

### public boolean addGlobalInt(String string,
int int0)

**Parameters:**
- `String` `string`
- `int` `int0`

**Returns:** `boolean`

### public boolean addGlobalFloat(String string,
float float0)

**Parameters:**
- `String` `string`
- `float` `float0`

**Returns:** `boolean`

### public RadioGlobal getGlobal(String string)

**Parameters:**
- `String` `string`

**Returns:** `RadioGlobal`

### public RadioGlobalString getGlobalString(String string)

**Parameters:**
- `String` `string`

**Returns:** `RadioGlobalString`

### public RadioGlobalInt getGlobalInt(String string)

**Parameters:**
- `String` `string`

**Returns:** `RadioGlobalInt`

### public RadioGlobalFloat getGlobalFloat(String string)

**Parameters:**
- `String` `string`

**Returns:** `RadioGlobalFloat`

### public RadioGlobalBool getGlobalBool(String string)

**Parameters:**
- `String` `string`

**Returns:** `RadioGlobalBool`

### public boolean setGlobal(String string,
RadioGlobal radioGlobal1,
EditGlobalOps editGlobalOps)

**Parameters:**
- `String` `string`
- `RadioGlobal` `radioGlobal1`
- `EditGlobalOps` `editGlobalOps`

**Returns:** `boolean`

### public boolean setGlobal(String string1,
String string0)

**Parameters:**
- `String` `string1`
- `String` `string0`

**Returns:** `boolean`

### public boolean setGlobal(String string,
int int0)

**Parameters:**
- `String` `string`
- `int` `int0`

**Returns:** `boolean`

### public boolean setGlobal(String string,
float float0)

**Parameters:**
- `String` `string`
- `float` `float0`

**Returns:** `boolean`

### public boolean setGlobal(String string,
boolean boolean0)

**Parameters:**
- `String` `string`
- `boolean` `boolean0`

**Returns:** `boolean`

### public CompareResult compare(RadioGlobal radioGlobal0,
RadioGlobal radioGlobal1,
CompareMethod compareMethod)

**Parameters:**
- `RadioGlobal` `radioGlobal0`
- `RadioGlobal` `radioGlobal1`
- `CompareMethod` `compareMethod`

**Returns:** `CompareResult`

### public CompareResult compare(String string1,
String string0,
CompareMethod compareMethod)

**Parameters:**
- `String` `string1`
- `String` `string0`
- `CompareMethod` `compareMethod`

**Returns:** `CompareResult`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\globals\RadioGlobalsManager.html`*
