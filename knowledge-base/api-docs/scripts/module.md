---
title: "module"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# module

Soft Override  
Unknown

A module serves as a namespace for your scripts and is the barebone for
most scripts you will create in your mod. The game's namespace is
`Base`, and while you can insert in it, it is recommended to use your
own module for your mod's scripts to avoid conflicts with the game and
other mods.

To define a module, you need to create a block as follows, by changing
the ID to a unique name for your mods:

``` cpp
module yourID
{
  ...
}
```

Most scripts that are defined in a module will need to be refered to by
their 'full type', that is `module.id`, but this is a bit inconsistent
as some places where a script block needs to be refered to require no
module reference. For example, for an item, you can refer to it by its
full type `yourModule.yourItemID`.

## Hierarchy

This block can be a child of the following blocks:

- ROOT-Scripts

This block can have the following child blocks:

- [mannequin](./mannequin.md)
- [fixing](./fixing.md)
- [fluid](./fluid.md)
- [energy](./energy.md)
- [character_trait_definition](./character_trait_definition.md)
- [timedAction](./timedaction.md)
- [entity](./entity.md)
- [item](./item.md)
- [character_profession_definition](./character_profession_definition.md)
- [soundTimeline](./soundtimeline.md)
- [physicsHitReaction](./physicshitreaction.md)
- [imports](./imports.md)
- [model](./model.md)
- [physicsShape](./physicsshape.md)
- [sound](./sound.md)
- [clock](./clock.md)
- [craftRecipe](./craftrecipe.md)
- [animationsMesh](./animationsmesh.md)
- [ragdoll](./ragdoll.md)
- [xuiSkin](./xuiskin.md)
- [vehicle](./vehicle.md)
- [vehicleEngineRPM](./vehicleenginerpm.md)
- [template](./template.md)
- [animation](./animation.md)
- [evolvedrecipe](./evolvedrecipe.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

This block has no parameters.
