---
title: zombie.characters.professions.ProfessionFactory.Profession
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.characters.professions
---

# zombie.characters.professions.ProfessionFactory.Profession

`public static class ProfessionFactory.Profession extends Object implements IListBoxItem`

**Kind:** class · **Package:** zombie.characters.professions

## Inheritance
- java.lang.Object
- zombie.characters.professions.ProfessionFactory.Profession

## Fields

### public String type

### public String name

### public int cost

### public String description

### public String IconPath

### public Texture texture

### public Stack<String> FreeTraitStack

### public HashMap<PerkFactory.Perk,Integer> XPBoostMap

## Constructors

### public Profession(String _type,
String _name,
String IconPathname,
int _cost,
String desc)

**Parameters:**
- `String` `_type`
- `String` `_name`
- `String` `IconPathname`
- `int` `_cost`
- `String` `desc`

## Methods

### public Texture getTexture()

**Returns:** `Texture`

### public void addFreeTrait(String trait)

**Parameters:**
- `String` `trait`

**Returns:** `void`

### public ArrayList<String> getFreeTraits()

**Returns:** `ArrayList<String>`

### public String getLabel()

**Returns:** `String`

### public String getIconPath()

**Returns:** `String`

### public String getLeftLabel()

**Returns:** `String`

### public String getRightLabel()

**Returns:** `String`

### public String getType()

**Returns:** `String`

### public void setType(String _type)

**Parameters:**
- `String` `_type` — the type to set

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String _name)

**Parameters:**
- `String` `_name` — the name to set

**Returns:** `void`

### public int getCost()

**Returns:** `int`

### public void setCost(int _cost)

**Parameters:**
- `int` `_cost` — the cost to set

**Returns:** `void`

### public String getDescription()

**Returns:** `String`

### public void setDescription(String _description)

**Parameters:**
- `String` `_description` — the description to set

**Returns:** `void`

### public void setIconPath(String _IconPath)

**Parameters:**
- `String` `_IconPath` — the IconPath to set

**Returns:** `void`

### public Stack<String> getFreeTraitStack()

**Returns:** `Stack<String>`

### public void addXPBoost(PerkFactory.Perk perk,
int level)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `level`

**Returns:** `void`

### public HashMap<PerkFactory.Perk,Integer> getXPBoostMap()

**Returns:** `HashMap<PerkFactory.Perk,Integer>`

### public void setFreeTraitStack(Stack<String> _FreeTraitStack)

**Parameters:**
- `Stack<String>` `_FreeTraitStack` — the FreeTraitStack to set

**Returns:** `void`

### public List<String> getFreeRecipes()

**Returns:** `List<String>`

### public void setFreeRecipes(List<String> _freeRecipes)

**Parameters:**
- `List<String>` `_freeRecipes`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\professions\ProfessionFactory.Profession.html`*
