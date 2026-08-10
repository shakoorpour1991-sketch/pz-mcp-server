---
title: zombie.characters.traits.TraitFactory.Trait
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.characters.traits
---

# zombie.characters.traits.TraitFactory.Trait

`public static class TraitFactory.Trait extends Object implements IListBoxItem`

**Kind:** class · **Package:** zombie.characters.traits

## Inheritance
- java.lang.Object
- zombie.characters.traits.TraitFactory.Trait

## Fields

### public String traitID

### public String name

### public int cost

### public String description

### public boolean prof

### public Texture texture

### public Stack<String> FreeTraitStack

### public ArrayList<String> MutuallyExclusive

### public HashMap<PerkFactory.Perk,Integer> XPBoostMap

## Constructors

### public Trait(String tr,
String _name,
int _cost,
String desc,
boolean _prof,
boolean _removeInMP)

**Parameters:**
- `String` `tr`
- `String` `_name`
- `int` `_cost`
- `String` `desc`
- `boolean` `_prof`
- `boolean` `_removeInMP`

## Methods

### public void addXPBoost(PerkFactory.Perk perk,
int level)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `level`

**Returns:** `void`

### public void addFreeTrait(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public ArrayList<String> getFreeTraits()

**Returns:** `ArrayList<String>`

### public List<String> getFreeRecipes()

**Returns:** `List<String>`

### public void setFreeRecipes(List<String> _freeRecipes)

**Parameters:**
- `List<String>` `_freeRecipes`

**Returns:** `void`

### public String getType()

**Returns:** `String`

### public Texture getTexture()

**Returns:** `Texture`

### public String getLabel()

**Returns:** `String`

### public String getLeftLabel()

**Returns:** `String`

### public String getRightLabel()

**Returns:** `String`

### public int getCost()

**Returns:** `int`

### public boolean isFree()

**Returns:** `boolean`

### public String getDescription()

**Returns:** `String`

### public void setDescription(String desc)

**Parameters:**
- `String` `desc`

**Returns:** `void`

### public ArrayList<String> getMutuallyExclusiveTraits()

**Returns:** `ArrayList<String>`

### public HashMap<PerkFactory.Perk,Integer> getXPBoostMap()

**Returns:** `HashMap<PerkFactory.Perk,Integer>`

### public boolean isRemoveInMP()

**Returns:** `boolean`

### public void setRemoveInMP(boolean _removeInMP)

**Parameters:**
- `boolean` `_removeInMP`

**Returns:** `void`

### public boolean isMutuallyExclusive(TraitFactory.Trait trait0)

**Parameters:**
- `TraitFactory.Trait` `trait0`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\traits\TraitFactory.Trait.html`*
