---
title: zombie.characters.ILuaGameCharacterHealth
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters
---

# zombie.characters.ILuaGameCharacterHealth

`public interface ILuaGameCharacterHealth`

**Kind:** interface · **Package:** zombie.characters

## Description

ILuaGameCharacterHealth
Provides the functions expected by LUA when dealing with objects of this type.

## Methods

### void setSleepingTabletEffect(float SleepingTabletEffect)

**Parameters:**
- `float` `SleepingTabletEffect`

**Returns:** `void`

### float getSleepingTabletEffect()

**Returns:** `float`

### float getFatigueMod()

**Returns:** `float`

### boolean Eat(InventoryItem arg0,
float arg1,
boolean arg2)

**Parameters:**
- `InventoryItem` `arg0`
- `float` `arg1`
- `boolean` `arg2`

**Returns:** `boolean`

### boolean Eat(InventoryItem info,
float percentage)

**Parameters:**
- `InventoryItem` `info`
- `float` `percentage`

**Returns:** `boolean`

### boolean Eat(InventoryItem info)

**Parameters:**
- `InventoryItem` `info`

**Returns:** `boolean`

### boolean DrinkFluid(InventoryItem arg0,
float arg1,
boolean arg2)

**Parameters:**
- `InventoryItem` `arg0`
- `float` `arg1`
- `boolean` `arg2`

**Returns:** `boolean`

### boolean DrinkFluid(InventoryItem arg0,
float arg1)

**Parameters:**
- `InventoryItem` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean DrinkFluid(InventoryItem arg0)

**Parameters:**
- `InventoryItem` `arg0`

**Returns:** `boolean`

### boolean DrinkFluid(FluidContainer arg0,
float arg1,
boolean arg2)

**Parameters:**
- `FluidContainer` `arg0`
- `float` `arg1`
- `boolean` `arg2`

**Returns:** `boolean`

### boolean DrinkFluid(FluidContainer arg0,
float arg1)

**Parameters:**
- `FluidContainer` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### float getReduceInfectionPower()

**Returns:** `float`

### void setReduceInfectionPower(float reduceInfectionPower)

**Parameters:**
- `float` `reduceInfectionPower`

**Returns:** `void`

### int getLastHourSleeped()

**Returns:** `int`

### void setLastHourSleeped(int lastHourSleeped)

**Parameters:**
- `int` `lastHourSleeped`

**Returns:** `void`

### void setTimeOfSleep(float timeOfSleep)

**Parameters:**
- `float` `timeOfSleep`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ILuaGameCharacterHealth.html`*
