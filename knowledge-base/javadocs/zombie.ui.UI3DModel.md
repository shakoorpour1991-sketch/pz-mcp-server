---
title: zombie.ui.UI3DModel
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.UI3DModel

`public final class UI3DModel extends UIElement implements IClothingItemListener`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.UI3DModel

## Constructors

### public UI3DModel(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public void render()

**Returns:** `void`

### public void setDirection(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public IsoDirections getDirection()

**Returns:** `IsoDirections`

### public void setAnimate(boolean animate)

**Parameters:**
- `boolean` `animate`

**Returns:** `void`

### public void setAnimSetName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setDoRandomExtAnimations(boolean doExt)

**Parameters:**
- `boolean` `doExt`

**Returns:** `void`

### public void setIsometric(boolean iso)

**Parameters:**
- `boolean` `iso`

**Returns:** `void`

### public void setOutfitName(String outfitName,
boolean female,
boolean zombie)

**Parameters:**
- `String` `outfitName`
- `boolean` `female`
- `boolean` `zombie`

**Returns:** `void`

### public void setCharacter(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void setSurvivorDesc(SurvivorDesc survivorDesc)

**Parameters:**
- `SurvivorDesc` `survivorDesc`

**Returns:** `void`

### public void setState(String state)

**Parameters:**
- `String` `state`

**Returns:** `void`

### public String getState()

**Returns:** `String`

### public void setVariable(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `void`

### public void setVariable(String key,
boolean value)

**Parameters:**
- `String` `key`
- `boolean` `value`

**Returns:** `void`

### public Object getVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `Object`

### public void setVariable(String key,
float value)

**Parameters:**
- `String` `key`
- `float` `value`

**Returns:** `void`

### public void clearVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public void clearVariables()

**Returns:** `void`

### public void reportEvent(String event)

**Parameters:**
- `String` `event`

**Returns:** `void`

### public void clothingItemChanged(String itemGuid)

**Parameters:**
- `String` `itemGuid`

**Returns:** `void`

### public void setZoom(float newZoom)

**Parameters:**
- `float` `newZoom`

**Returns:** `void`

### public void setYOffset(float newYOffset)

**Parameters:**
- `float` `newYOffset`

**Returns:** `void`

### public void setXOffset(float newXOffset)

**Parameters:**
- `float` `newXOffset`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UI3DModel.html`*
