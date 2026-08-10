---
title: zombie.characters.traits.CharacterTraitDefinition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.traits
---

# zombie.characters.traits.CharacterTraitDefinition

`public class CharacterTraitDefinition extends Object implements IListBoxItem`

**Kind:** class · **Package:** zombie.characters.traits

## Inheritance
- java.lang.Object
- zombie.characters.traits.CharacterTraitDefinition

## Fields

### public static Map<CharacterTrait, CharacterTraitDefinition> characterTraitDefinitions

## Constructors

### public CharacterTraitDefinition(CharacterTrait characterTraitType,
String name,
int cost,
String description,
boolean isProfessionTrait,
boolean disabledInMultiplayer)

**Parameters:**
- `CharacterTrait` `characterTraitType`
- `String` `name`
- `int` `cost`
- `String` `description`
- `boolean` `isProfessionTrait`
- `boolean` `disabledInMultiplayer`

## Methods

### public static CharacterTraitDefinition addCharacterTraitDefinition(CharacterTrait characterTraitType,
String name,
int cost,
String description,
boolean profession)

**Parameters:**
- `CharacterTrait` `characterTraitType`
- `String` `name`
- `int` `cost`
- `String` `description`
- `boolean` `profession`

**Returns:** `CharacterTraitDefinition`

### public static CharacterTraitDefinition addCharacterTraitDefinition(CharacterTrait characterTraitType,
String name,
int cost,
String description,
boolean profession,
boolean disabledInMultiplayer)

**Parameters:**
- `CharacterTrait` `characterTraitType`
- `String` `name`
- `int` `cost`
- `String` `description`
- `boolean` `profession`
- `boolean` `disabledInMultiplayer`

**Returns:** `CharacterTraitDefinition`

### public static void reset()

**Returns:** `void`

### public static ArrayList<CharacterTraitDefinition> getTraits()

**Returns:** `ArrayList<CharacterTraitDefinition>`

### public static CharacterTraitDefinition getCharacterTraitDefinition(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `CharacterTraitDefinition`

### public static void setMutualExclusive(CharacterTrait a,
CharacterTrait b)

**Parameters:**
- `CharacterTrait` `a`
- `CharacterTrait` `b`

**Returns:** `void`

### public CharacterTrait getType()

**Returns:** `CharacterTrait`

### public String getUIName()

**Returns:** `String`

### public Texture getTexture()

**Returns:** `Texture`

### public int getCost()

**Returns:** `int`

### public boolean isFree()

**Returns:** `boolean`

### public String getDescription()

**Returns:** `String`

### public boolean isDisabledInMultiplayer()

**Returns:** `boolean`

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

### public ArrayList<CharacterTrait> getMutuallyExclusiveTraits()

**Returns:** `ArrayList<CharacterTrait>`

### public HashMap<PerkFactory.Perk, Integer> getXpBoosts()

**Returns:** `HashMap<PerkFactory.Perk, Integer>`

### public String getLabel()

**Returns:** `String`

### public String getLeftLabel()

**Returns:** `String`

### public String getRightLabel()

**Returns:** `String`

### public void setDescription(String description)

**Parameters:**
- `String` `description`

**Returns:** `void`

### public void setDisabledInMultiplayer(boolean disabledInMultiplayer)

**Parameters:**
- `boolean` `disabledInMultiplayer`

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

### public void addMutuallyExclusive(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `void`

### public boolean hasMutuallyExclusiveTraits()

**Returns:** `boolean`

### public boolean isMutuallyExclusive(CharacterTraitDefinition characterTraitDefinition)

**Parameters:**
- `CharacterTraitDefinition` `characterTraitDefinition`

**Returns:** `boolean`

### public void setTexture(Texture texture)

**Parameters:**
- `Texture` `texture`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\traits\CharacterTraitDefinition.html`*
