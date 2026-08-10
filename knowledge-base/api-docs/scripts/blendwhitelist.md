---
title: "BlendWhiteList"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# BlendWhiteList

Soft Override  
Unknown

BlendWhiteList defines a whitelist for fluids that the fluid can be
blended with, while BlendBlackList defines a blacklist. By default those
blocks are set whitelist, but you can add one of the available
parameters to indicate whenever the block is a whitelist or a blacklist.

Fluids that are whitelisted/blacklisted can be identified either by
their category via the use of a
[categories](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/categories.html)
child block, or by their name via the use of the
[fluid](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/blendwhitelist.html#fluid)
parameter.

## Hierarchy

This block can be a child of the following blocks:

- [fluid](./fluid.md)

This block can have the following child blocks:

- [Categories](./categories.md)

## ID

This block should have no ID.

## Parameters

#### blacklist

Type  
boolean

Indicates whenever blending with other fluids is disallowed.

#### category

Type  
Unknown

Unclear what this is for since this is usually achieved with a
[categories](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/categories.html)
child block.

#### filterType

Type  
Unknown

Allowed values  
`whitelist`

Just use
[whitelist](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/blendwhitelist.html#whitelist)
or
[blacklist](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/blendwhitelist.html#blacklist).

#### fluid

Type  
array (array of string, separator: '/')

A list of fluids.

#### whitelist

Type  
boolean

Indicates whenever blending with other fluids is allowed.
