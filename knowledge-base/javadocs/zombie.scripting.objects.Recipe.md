---
title: zombie.scripting.objects.Recipe
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.Recipe

`public class Recipe extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.Recipe

## Fields

### public float timeToMake

### public String sound

### public final ArrayList<Recipe.Source> source

### public Recipe.Result result

### public final ArrayList<Recipe.Result> results

### public boolean allowDestroyedItem

### public boolean allowFrozenItem

### public boolean allowRottenItem

### public boolean allowOnlyOne

### public boolean inSameInventory

### public String name

### public ArrayList<Recipe.RequiredSkill> skillRequired

### public boolean hidden

## Constructors

### public Recipe()

## Methods

### public boolean isRequiresWorkstation()

**Returns:** `boolean`

### public float getStationMultiplier()

**Returns:** `float`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public void DoSource(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public void DoResult(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public int getNumberOfNeededItem()

**Returns:** `int`

### public ArrayList<String> getRequiredSkills()

**Returns:** `ArrayList<String>`

### public int getRequiredSkillCount()

**Returns:** `int`

### public Recipe.RequiredSkill getRequiredSkill(int index)

**Parameters:**
- `int` `index`

**Returns:** `Recipe.RequiredSkill`

### public void clearRequiredSkills()

**Returns:** `void`

### public void addRequiredSkill(PerkFactory.Perk perk,
int level)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `level`

**Returns:** `void`

### public Recipe.Source findSource(String sourceFullType)

**Parameters:**
- `String` `sourceFullType`

**Returns:** `Recipe.Source`

### public ArrayList<Recipe.Source> getSource()

**Returns:** `ArrayList<Recipe.Source>`

### public String getOriginalname()

**Returns:** `String`

### public void setOriginalname(String originalname)

**Parameters:**
- `String` `originalname`

**Returns:** `void`

### public String getFullType()

**Returns:** `String`

### public String getName()

**Returns:** `String`

### public float getHeat()

**Returns:** `float`

### public Recipe.Result getResult()

**Returns:** `Recipe.Result`

### @Deprecated
public String getNearItem()

> ⚠️ **Deprecated**

**Returns:** `String`

### @Deprecated
public void setNearItem(String nearItem)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `nearItem`

**Returns:** `void`

### public ArrayList<Recipe.Result> getResults()

**Returns:** `ArrayList<Recipe.Result>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\Recipe.html`*
