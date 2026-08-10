---
title: "component CraftRecipe"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# component CraftRecipe

Soft Override  
Unknown

Is Variant of  
[component](../component.md)

No description provided.

## Hierarchy

This block can be a child of the following blocks:

- [entity](../entity.md)

This block requires these following children to be valid:

- [inputs](../inputs.md)

## ID

This block should have no ID.

## Parameters

#### category

Type  
translation

Default  
`Miscellaneous`

The category under which the recipe will be listed in the crafting menu.
Helps to organize and identify recipes in crafting menu. Your category
should have a key with the suffix `IGUI_CraftingCategories_` in the
[IG_UI.json](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#ig-ui)
translation file to be properly displayed in the crafting menu. For
example:

``` java
category = MyCategory,
```

And in the translation file:

``` json
{
  "IGUI_CraftingCategories_MyCategory": "My Category"
}
```

#### NeedToBeLearn

Type  
Unknown

Whether the recipe needs to be learned before it can be crafted.

#### OnAddToMenu

Type  
Unknown

No description provided.

#### OnCreate

Type  
callback

Various callback functions can be added to a recipe to trigger at
specific moments during the crafting process:

- [OnCreate](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html#oncreate)
  is called when the crafting recipe is finished.
- [OnTest](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html#ontest)
  is called to verify if the item can be used in the recipe.
- [OnFailed](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html#onfailed)
  is called when the crafting recipe fails or is canceled.
- [OnUpdate](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html#onupdate)
  is called every tick while the recipe is being crafted.

The callback needs to be a Lua function defined as a [global
function](https://pzwiki.net/wiki/Lua_(language)\#Local_and_global),
which can also be stored in a global table. The vanilla game OnCreate's
are stored in the [Java](https://pzwiki.net/wiki/Java).

For example, for
[OnCreate](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html#oncreate)
you should have the following structure:

``` lua
---@param craftRecipeData CraftRecipeData
---@param character IsoGameCharacter
function MyOnCreateFunction(craftRecipeData, character)
    -- your custom code here
end
```

The `craftRecipeData` is a [java
object](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/entity/components/crafting/recipe/CraftRecipeData.html)
that contains the data of the crafting recipe. The `character` is the
player character who is crafting the recipe.

For
[OnTest](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html#ontest)
you should have the following structure:

``` lua
---@param item InventoryItem
---@param character IsoGameCharacter
---@return boolean logicTestResult
function MyOnTestFunction(item, character)
    -- your custom code here
    return logicTestResult  -- based on your logic test above
end
```

#### SkillRequired

Type  
object (object: string-\>\>integer, kv: ':', pairs: ';')

Specifies the skill level required to perform this crafting action. It
should be formatted this way:

``` java
/* a single skill */
skillRequired = <skill name>:<level>,

/* multiple skills */
skillRequired = <skill1 name>:<level>;<skill2 name>:<level>,
```

For the list of available skills, see the
[wiki](https://pzwiki.net/wiki/CraftRecipe#Available_skills).

For example:

``` java
skillRequired = Blacksmith:3;Tailoring:2,
```

#### tags

Type  
array (array of string, separator: ';')

Required  
True

Specifies specific conditions which need to be respected to craft this
item. At least one crafting bench tag is necessary for the craft to be
recognized, such as `AnySurfaceCraft`. The syntax is as follows:

``` java
/* single tag */
Tags = tag1,

/* multiple tags */
Tags = tag1;tag2;...,
```

For example:

``` java
Tags = InHandCraft;CanAlwaysBeResearched,
```

A crafting bench tag can be created by adding a [component
CraftBench](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/component/component-craftbench.html)
to an
[entity](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/entity.html)
script, which can then be used in this tags parameter.

You can find a list of tags available on the
[wiki](https://pzwiki.net/wiki/CraftRecipe#List_of_tags).

#### time

Type  
integer

Default  
`50`

The time it takes to craft the item, not using a specific unit of time
so refer to the vanilla recipes to get an idea of what value to use.

#### timedAction

Type  
block (block: [timedAction](../timedaction.md))

Refers to a timed action script block to trigger during the crafting
process, for animations and/or sounds but also the calories burned and
body heat generation.

#### Tooltip

Type  
translation

Description of the crafting which is shown in the crafting menu. The
value needs be a key in the
[Tooltip.json](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#tooltip)
translation file. For example:

``` java
Tooltip = MyTooltipKey,
```

And in the translation file:

``` json
{
  "MyTooltipKey": "This is my tooltip description."
}
```

#### xpAward

Type  
Unknown

Specifies the experience points awarded for crafting this item. The
parameter should be formatted this way:

``` java
/* a single skill */
xpAward = <skill name>:<xp amount>,

/* multiple skills */
xpAward = <skill1 name>:<xp amount>;<skill2 name>:<xp amount>,format
```

For the list of available skills, see the
[wiki](https://pzwiki.net/wiki/CraftRecipe#Available_skills).

For example:

``` java
xpAward = Blacksmith:10;Tailoring:5,
```
