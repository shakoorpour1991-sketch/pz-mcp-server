---
title: "fluid"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# fluid

Soft Override  
Unknown

Create a new fluid definition. Different properties can be provided for
the fluid v ia the use of different children blocks:

- [Properties](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/properties.html)
  is used to indicate the various stats change that drinking this fluid
  would cause to the player.
- [Categories](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/categories.html)
  act as tags for the fluid, to easily identify it.
- [BlendWhiteList](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/blendwhitelist.html)
  and
  [BlendBlackList](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/blendblacklist.html)
  are used to provide rules for the blending of this fluid with other
  fluids.
- [Poison](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/poison.html)
  is used to define poison properties for the fluid.

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)

This block can have the following child blocks:

- [Categories](./categories.md)
- [BlendWhiteList](./blendwhitelist.md)
- [Poison](./poison.md)
- [Properties](./properties.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

#### ColorReference

Type  
Unknown

A reference to a color defined in the Colors class. You can find a full
list of the colors available in the
[Colors](https://pz-wiki-modding.github.io/PZ-API-Docs/java/colors.html)
documentation.

For example, to use the color `Azure` from the documentation:

``` cpp
fluid yourFluid
{
  ColorReference = Azure,
  ...
}
```

#### DisplayName

Type  
Unknown

The name of the fluid that will be displayed in the game. The value
corresponds to the key for the fluid's name in the
[Fluids.json](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#fluids)
translation file. The translation keys for the fluid usually have the
prefix `Fluid_Name_` but this is technically not required.

For example:

``` cpp
fluid yourFluid
{
  DisplayName = Fluid_Name_YourFluid,
  ...
}
```

And in the translation file of your mod:

``` cpp
{
  "Fluid_Name_YourFluid": "Your Fluid"
}
```
