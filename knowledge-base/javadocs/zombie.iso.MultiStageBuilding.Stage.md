---
title: zombie.iso.MultiStageBuilding.Stage
source: Unofficial PZ JavaDocs 42.14.0
version: 42.14.0
kind: class
package: zombie.iso
---

# zombie.iso.MultiStageBuilding.Stage

`public class MultiStageBuilding.Stage extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.MultiStageBuilding.Stage

## Fields

### public String name

### public ArrayList<String> previousStage

### public String recipeName

### public String sprite

### public String northSprite

### public int timeNeeded

### public int bonusHealth

### public boolean bonusHealthSkill

### public HashMap<String,Integer> xp

### public HashMap<String,Integer> perks

### public HashMap<String,Integer> items

### public ArrayList<String> itemsToKeep

### public String knownRecipe

### public String thumpSound

### public String wallType

### public boolean canBePlastered

### public String craftingSound

### public String completionSound

### public String id

### public boolean canBarricade

## Constructors

### public Stage()

## Methods

### public String getName()

**Returns:** `String`

### public String getDisplayName()

**Returns:** `String`

### public String getSprite()

**Returns:** `String`

### public String getNorthSprite()

**Returns:** `String`

### public String getThumpSound()

**Returns:** `String`

### public String getRecipeName()

**Returns:** `String`

### public String getKnownRecipe()

**Returns:** `String`

### public int getTimeNeeded(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public ArrayList<String> getItemsToKeep()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getPreviousStages()

**Returns:** `ArrayList<String>`

### public String getCraftingSound()

**Returns:** `String`

### public se.krka.kahlua.vm.KahluaTable getItemsLua()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable getPerksLua()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void doStage(IsoGameCharacter chr,
IsoThumpable item,
boolean removeItems)

**Parameters:**
- `IsoGameCharacter` `chr`
- `IsoThumpable` `item`
- `boolean` `removeItems`

**Returns:** `void`

### public void playCompletionSound(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public boolean canBeDone(IsoGameCharacter chr,
IsoObject itemClicked,
boolean cheat)

**Parameters:**
- `IsoGameCharacter` `chr`
- `IsoObject` `itemClicked`
- `boolean` `cheat`

**Returns:** `boolean`

### public void Load(String name,
String[] strArray)

**Parameters:**
- `String` `name`
- `String[]` `strArray`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.14.0 (42.14.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\MultiStageBuilding.Stage.html`*
