---
title: zombie.characters.professions.CharacterProfessionDefinition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.professions
---

# zombie.characters.professions.CharacterProfessionDefinition

`public class CharacterProfessionDefinition extends Object implements IListBoxItem`

**Kind:** class · **Package:** zombie.characters.professions

## Inheritance
- java.lang.Object
- zombie.characters.professions.CharacterProfessionDefinition

## Fields

### public static Map<CharacterProfession, CharacterProfessionDefinition> characterProfessionDefinitions

## Constructors

### public CharacterProfessionDefinition(CharacterProfession characterProfessionType,
String name,
int cost,
String description,
String iconPathName)

**Parameters:**
- `CharacterProfession` `characterProfessionType`
- `String` `name`
- `int` `cost`
- `String` `description`
- `String` `iconPathName`

## Methods

### public static CharacterProfessionDefinition addCharacterProfessionDefinition(CharacterProfession characterProfessionType,
String name,
int cost,
String description,
String iconPathName)

**Parameters:**
- `CharacterProfession` `characterProfessionType`
- `String` `name`
- `int` `cost`
- `String` `description`
- `String` `iconPathName`

**Returns:** `CharacterProfessionDefinition`

### public static ArrayList<CharacterProfessionDefinition> getProfessions()

**Returns:** `ArrayList<CharacterProfessionDefinition>`

### public static CharacterProfessionDefinition getCharacterProfessionDefinition(CharacterProfession characterProfession)

**Parameters:**
- `CharacterProfession` `characterProfession`

**Returns:** `CharacterProfessionDefinition`

### public CharacterProfession getType()

**Returns:** `CharacterProfession`

### public String getDescription()

**Returns:** `String`

### public int getCost()

**Returns:** `int`

### public Texture getTexture()

**Returns:** `Texture`

### public ArrayList<CharacterTrait> getGrantedTraits()

**Returns:** `ArrayList<CharacterTrait>`

### public ArrayList<String> getGrantedRecipes()

**Returns:** `ArrayList<String>`

### public boolean isGrantedRecipe(String recipe)

**Parameters:**
- `String` `recipe`

**Returns:** `boolean`

### public boolean hasGrantedRecipes()

**Returns:** `boolean`

### public String getLabel()

**Returns:** `String`

### public String getLeftLabel()

**Returns:** `String`

### public String getRightLabel()

**Returns:** `String`

### public String getUIName()

**Returns:** `String`

### public HashMap<PerkFactory.Perk, Integer> getXpBoosts()

**Returns:** `HashMap<PerkFactory.Perk, Integer>`

### public void setDescription(String description)

**Parameters:**
- `String` `description`

**Returns:** `void`

### public void addGrantedTrait(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `void`

### public void addGrantedRecipe(String recipe)

**Parameters:**
- `String` `recipe`

**Returns:** `void`

### public void addXPBoost(PerkFactory.Perk perk,
int level)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `level`

**Returns:** `void`

### public static void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\professions\CharacterProfessionDefinition.html`*
