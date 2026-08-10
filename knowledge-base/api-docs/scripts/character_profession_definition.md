---
title: "character_profession_definition"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# character_profession_definition

Soft Override  
Unknown

Defines a character profession.

``` cpp
character_profession_definition yourmod:example_profession
{
    CharacterProfession = yourmod:example_profession,
    Cost = -6,
    UIName = UI_prof_MetalWorker,
    UIDescription = UI_profdesc_metalworker,
    IconPathName = profession_metalworker,
    XPBoosts = MetalWelding=4,
    GrantedRecipes = Advanced_Forge;Blast_Furnace,
}
```

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

#### CharacterProfession

Type  
string

The [registries](https://pzwiki.net/wiki/Registries) profession ID to
link to.

#### Cost

Type  
integer

The cost of the profession when selecting a character. Negative values
remove points, positive values add points.

#### GrantedRecipes

Type  
array (array of string, separator: ';')

A list of
[craftRecipe](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html)
IDs that are granted to the character when this profession is selected.

#### GrantedTraits

Type  
array (array of string, separator: ';')

A list of character trait IDs that are granted to the character when
this profession is selected.

#### IconPathName

Type  
string

No description provided.

#### UIDescription

Type  
string

The translation key for the profession's description. The translation
key needs to be in the UI translation file. See the wiki page about
[translations](https://pzwiki.net/wiki/Translations) for more
information.

#### UIName

Type  
string

The translation key for the profession's name. The translation key needs
to be in the UI translation file. See the wiki page about
[translations](https://pzwiki.net/wiki/Translations) for more
information.

#### XPBoosts

Type  
object (object: string-\>\>integer, kv: '=', pairs: ';')

A list of experience boosts granted by this profession. Each entry
should contain a skill name and the corresponding boost amount.

For example:

``` cpp
XPBoosts = Axe=1;Blunt=1,
```
